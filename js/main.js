/* 盆栽のあるくらし — interactions */
/*
 * HTML側の契約:
 * - <head> 内に <script>document.documentElement.classList.add('js-enabled')</script> を
 *   インラインで置くこと(main.js は defer 読み込みのため、reveal のちらつき防止に必須)。
 *   本ファイル冒頭の js-enabled 付与はフォールバック。
 * - 四季タブ: role="tablist"/"tab"/"tabpanel"、tab には aria-controls(実在するパネルID)、
 *   初期選択タブに aria-selected="true"。1ページに tablist は1つまで。
 * - パララックス係数0.15 は CSS 側 .hero__bg/.chapter__bg の top:-10%/height:120% の
 *   クッションと対応。どちらかを変える場合は両方確認すること。
 *
 * モーション v2 の HTML契約:
 * - オープニング: <div class="opening" aria-hidden="true"><p class="opening__title">…</p></div>
 *   を body 直下に置く。index のみ。sessionStorage キー bonsai_opening_shown で1回のみ。
 * - Ken Burns: .hero 内で img.hero__bg を <div class="hero__kenburns"> でラップすること。
 *   ラッパーに scale アニメ、img に data-parallax(translate)を分離適用(fill-mode 固着回避)。
 * - 文字立ち上がり: 対象見出しに class="js-chars"。splitChars が span.char に分割し、
 *   親に aria-label(分割前全文)を設定、char 群は aria-hidden コンテナに収める。
 * - マスクリビール: .reveal-mask を figure に付与。reveal 機構が is-visible を共通付与。
 * - 章インジケータ: <nav class="chapter-nav"> の各 a[href="#id"] と、対応する section[id] が必要。
 * - 紅葉パーティクル: 対象 .chapter 内に <canvas class="leaves-canvas" aria-hidden="true">。
 */
(() => {
  'use strict';

  document.documentElement.classList.add('js-enabled');

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hasIO = 'IntersectionObserver' in window;

  /* --- Header state --- */
  const header = document.querySelector('.site-header');
  const onScroll = () => {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 40);
  };
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* --- Mobile nav --- */
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.site-header__links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    links.addEventListener('click', (e) => {
      if (e.target.closest('a')) {
        links.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && links.classList.contains('is-open')) {
        links.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
  }

  /* --- Scroll reveal（.reveal / .reveal-mask を共通処理） --- */
  const revealTargets = document.querySelectorAll('.reveal, .reveal-mask');
  if (revealTargets.length && hasIO && !prefersReduced) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.18 });
    revealTargets.forEach((el) => io.observe(el));
  } else {
    revealTargets.forEach((el) => el.classList.add('is-visible'));
  }

  /* --- 文字の一字分割ユーティリティ（<br> 対応・アクセシブル） --- */
  const splitChars = (el) => {
    if (el.dataset.charsSplit) return;
    const wrap = document.createElement('span');
    wrap.setAttribute('aria-hidden', 'true');
    let full = '';
    let idx = 0;
    const pushChar = (ch) => {
      const span = document.createElement('span');
      span.className = 'char';
      span.textContent = ch;
      span.style.transitionDelay = (idx * 60) + 'ms';
      idx += 1;
      wrap.appendChild(span);
    };
    Array.from(el.childNodes).forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        Array.from(node.textContent).forEach((ch) => {
          full += ch;
          if (ch.trim() === '') { wrap.appendChild(document.createTextNode(ch)); return; }
          pushChar(ch);
        });
      } else if (node.nodeName === 'BR') {
        full += '\n';
        wrap.appendChild(document.createElement('br'));
      } else {
        // <wbr> 等の要素は文字を平坦化して取り込む
        Array.from(node.textContent).forEach((ch) => { full += ch; pushChar(ch); });
      }
    });
    el.setAttribute('aria-label', full.replace(/\s+/g, ''));
    el.textContent = '';
    el.appendChild(wrap);
    el.dataset.charsSplit = '1';
  };

  const heroEl = document.querySelector('.hero');
  const heroChars = heroEl ? heroEl.querySelector('.js-chars') : null;
  const allChars = Array.from(document.querySelectorAll('.js-chars'));

  if (!prefersReduced) {
    allChars.forEach(splitChars);

    /* ヒーロー以外の js-chars は可視化時に一字立ち上がり */
    const chapterChars = allChars.filter((el) => !(heroEl && heroEl.contains(el)));
    if (chapterChars.length && hasIO) {
      const charIO = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            charIO.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });
      chapterChars.forEach((el) => charIO.observe(el));
    } else {
      chapterChars.forEach((el) => el.classList.add('is-visible'));
    }
  }

  /* --- ヒーロー開幕（Ken Burns + 文字 + サブコピー） --- */
  let heroStarted = false;
  const beginHero = () => {
    if (heroStarted) return;
    heroStarted = true;
    if (heroEl) heroEl.classList.add('is-hero-active');
    if (heroChars) heroChars.classList.add('is-visible');
  };

  /* --- オープニング（index のみ・初回のみ） --- */
  const opening = document.querySelector('.opening');
  const OPENING_KEY = 'bonsai_opening_shown';
  const removeOpening = () => {
    if (opening && opening.parentNode) opening.parentNode.removeChild(opening);
  };

  if (opening) {
    let seen = null;
    try { seen = sessionStorage.getItem(OPENING_KEY); } catch (e) { seen = null; }

    if (prefersReduced || seen) {
      // 2回目以降・reduced-motion は即除去してヒーローを開幕
      removeOpening();
      beginHero();
    } else {
      try { sessionStorage.setItem(OPENING_KEY, '1'); } catch (e) { /* private mode 等は無視 */ }
      // 出現(≈1.1s)+静止(≈0.4s) の後に幕を割る → 除去
      const t1 = setTimeout(() => {
        opening.classList.add('is-opening-out');
        beginHero();
      }, 1500);
      const t2 = setTimeout(removeOpening, 2400);
      // フェイルセーフ: 何があっても 3.5s 後には強制除去し、ヒーローを開幕
      setTimeout(() => {
        clearTimeout(t1);
        clearTimeout(t2);
        removeOpening();
        beginHero();
      }, 3500);
    }
  } else {
    // オープニングを持たないページ: ヒーローは即開幕
    beginHero();
  }

  /* --- 章インジケータ（.chapter-nav がある時のみ） --- */
  const chapterNav = document.querySelector('.chapter-nav');
  if (chapterNav && hasIO) {
    const navLinks = Array.from(chapterNav.querySelectorAll('a[href^="#"]'));
    const linkBySection = new Map();
    navLinks.forEach((a) => {
      const sec = document.querySelector(a.getAttribute('href'));
      if (sec) linkBySection.set(sec, a);
    });
    if (linkBySection.size) {
      const navIO = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const a = linkBySection.get(entry.target);
            if (a) {
              navLinks.forEach((l) => l.classList.remove('is-current'));
              a.classList.add('is-current');
            }
          }
        });
      }, { rootMargin: '-45% 0px -45% 0px', threshold: 0 });
      linkBySection.forEach((_a, sec) => navIO.observe(sec));
    }
  }

  /* --- Hero parallax (subtle) --- */
  const parallaxEls = document.querySelectorAll('[data-parallax]');
  if (parallaxEls.length && !prefersReduced) {
    let ticking = false;
    const update = () => {
      parallaxEls.forEach((el) => {
        const rect = el.parentElement.getBoundingClientRect();
        if (rect.bottom > 0 && rect.top < window.innerHeight) {
          el.style.transform = `translateY(${rect.top * -0.15}px)`;
        }
      });
      ticking = false;
    };
    document.addEventListener('scroll', () => {
      if (!ticking) { requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
    update();
  }

  /* --- 舞い散る紅葉パーティクル（章可視時のみ rAF・reduced では無効） --- */
  const initLeaves = (canvas) => {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const chapter = canvas.closest('.chapter') || canvas.parentElement;
    const palette = ['#8A9A5B', '#B27C4F', '#A85C3A'];
    let w = 0, h = 0, dpr = 1;
    let leaves = [];
    let rafId = null;
    let running = false;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = Math.max(1, Math.round(w * dpr));
      canvas.height = Math.max(1, Math.round(h * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      leaves.forEach((l) => { if (l.baseX > w) l.baseX = Math.random() * w; });
    };

    /* もみじスプライト: 掌状（5/7裂）シルエットを一度だけオフスクリーン canvas に
       描き、drawImage で使い回す（毎フレームのパス構築より綺麗で軽い）。
       各裂片は基部から先端へ細く尖り、裂片間に深い切れ込み（凹の2次ベジェ）。
       真下は裂片を置かず、短い葉柄（茎）を描く。 */
    const SPRITE = 96;
    const spriteCache = new Map();
    const buildSprite = (color, lobes) => {
      const key = color + lobes;
      if (spriteCache.has(key)) return spriteCache.get(key);
      const off = document.createElement('canvas');
      off.width = SPRITE;
      off.height = SPRITE;
      const c = off.getContext('2d');
      const r = SPRITE * 0.42;
      c.translate(SPRITE / 2, SPRITE / 2);
      /* 扇の開き: 5裂は狭め・7裂は掌状に大きく（広すぎると星形に見える）。
         パラメータはブラウザ実表示で「もみじと分かる」まで調整した値。 */
      const fan = Math.PI * (lobes === 5 ? 1.15 : 1.65);
      const step = fan / (lobes - 1);
      const start = -Math.PI / 2 - fan / 2;
      const sinusR = r * 0.30;              /* 裂片間の深い切れ込みの半径 */
      const ctrlR = 0.60;                   /* 裂片側面の膨らみ位置（長さ比） */
      const wAng = 0.26;                    /* 裂片の半幅（rad）: 披針形の膨らみ */
      const edgeK = lobes === 5 ? 0.34 : 0.38;
      c.beginPath();
      c.moveTo(Math.cos(start - step / 2) * sinusR, Math.sin(start - step / 2) * sinusR);
      for (let i = 0; i < lobes; i += 1) {
        const aTip = start + step * i;
        const edge = Math.abs(i - (lobes - 1) / 2) / ((lobes - 1) / 2);
        const len = r * (1 - edgeK * edge); /* 中央の裂片が最長 */
        /* 中腹が膨らみ先端へ細く尖る披針形の裂片（2次ベジェ、直線ジグザグ不可） */
        c.quadraticCurveTo(
          Math.cos(aTip - wAng) * len * ctrlR, Math.sin(aTip - wAng) * len * ctrlR,
          Math.cos(aTip) * len, Math.sin(aTip) * len
        );
        c.quadraticCurveTo(
          Math.cos(aTip + wAng) * len * ctrlR, Math.sin(aTip + wAng) * len * ctrlR,
          Math.cos(aTip + step / 2) * sinusR, Math.sin(aTip + step / 2) * sinusR
        );
      }
      /* 葉柄（下向きの短い茎） */
      c.lineTo(SPRITE * 0.015, r * 0.5);
      c.lineTo(0, r * 0.78);
      c.lineTo(-SPRITE * 0.015, r * 0.5);
      c.closePath();
      c.fillStyle = color;
      c.fill();
      spriteCache.set(key, off);
      return off;
    };

    const makeLeaf = (initial) => {
      const size = 14 + Math.random() * 16;              // 14〜30px
      return {
        baseX: Math.random() * w,
        x: 0,
        y: initial ? Math.random() * h : -size,
        size,
        rot: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.024,
        fallSpeed: 0.45 + Math.random() * 0.85,          // 0.45〜1.3px/frame
        swayAmp: 18 + Math.random() * 34,
        swayPhase: Math.random() * Math.PI * 2,
        swaySpeed: 0.008 + Math.random() * 0.012,
        flutterPhase: Math.random() * Math.PI * 2,       // 葉の翻り（横スケール±1）
        flutterSpeed: 0.02 + Math.random() * 0.022,
        alpha: 0.35 + Math.random() * 0.35,
        sprite: buildSprite(
          palette[(Math.random() * palette.length) | 0],
          Math.random() < 0.5 ? 5 : 7
        )
      };
    };

    const build = () => {
      const count = window.innerWidth <= 768 ? 7 : 14;
      leaves = [];
      for (let i = 0; i < count; i += 1) leaves.push(makeLeaf(true));
    };

    const frame = () => {
      ctx.clearRect(0, 0, w, h);
      leaves.forEach((l) => {
        l.y += l.fallSpeed;
        l.swayPhase += l.swaySpeed;
        l.flutterPhase += l.flutterSpeed;
        l.rot += l.rotSpeed;
        l.x = l.baseX + Math.sin(l.swayPhase) * l.swayAmp;
        if (l.y - l.size > h) { l.y = -l.size; l.baseX = Math.random() * w; }
        /* ヒラヒラ: 横方向スケールを sin で -1〜1 に揺らし、葉の翻りを表現
           （0 近傍は完全な線になるため下限 0.12 でクランプ） */
        const fl = Math.sin(l.flutterPhase);
        const flip = (fl < 0 ? -1 : 1) * Math.max(0.12, Math.abs(fl));
        ctx.save();
        ctx.translate(l.x, l.y);
        ctx.rotate(l.rot);
        ctx.scale(flip, 1);
        ctx.globalAlpha = l.alpha;
        ctx.drawImage(l.sprite, -l.size / 2, -l.size / 2, l.size, l.size);
        ctx.restore();
      });
      rafId = requestAnimationFrame(frame);
    };

    const start = () => { if (running) return; running = true; rafId = requestAnimationFrame(frame); };
    const stop = () => { running = false; if (rafId) cancelAnimationFrame(rafId); rafId = null; };

    resize();
    build();

    if ('ResizeObserver' in window) {
      new ResizeObserver(() => resize()).observe(canvas);
    } else {
      window.addEventListener('resize', resize, { passive: true });
    }

    if (hasIO) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((e) => { if (e.isIntersecting) start(); else stop(); });
      }, { threshold: 0.05 });
      io.observe(chapter);
    } else {
      start();
    }
  };

  const leavesCanvas = document.querySelector('.leaves-canvas');
  if (leavesCanvas && !prefersReduced && leavesCanvas.getContext) {
    initLeaves(leavesCanvas);
  }

  /* --- Season tabs (care.html) --- */
  const tablist = document.querySelector('[role="tablist"]');
  if (tablist) {
    const tabs = Array.from(tablist.querySelectorAll('[role="tab"]'))
      .filter((t) => document.getElementById(t.getAttribute('aria-controls')));
    const panels = tabs.map((t) => document.getElementById(t.getAttribute('aria-controls')));
    const select = (tab, moveFocus) => {
      tabs.forEach((t, i) => {
        const active = t === tab;
        t.setAttribute('aria-selected', String(active));
        t.tabIndex = active ? 0 : -1;
        panels[i].hidden = !active;
      });
      if (moveFocus) tab.focus({ preventScroll: true });
    };
    tabs.forEach((tab) => tab.addEventListener('click', () => select(tab, false)));
    tablist.addEventListener('keydown', (e) => {
      const i = tabs.indexOf(document.activeElement);
      if (i < 0) return;
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        select(tabs[(i + 1) % tabs.length], true);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        select(tabs[(i - 1 + tabs.length) % tabs.length], true);
      } else if (e.key === 'Home') {
        e.preventDefault();
        select(tabs[0], true);
      } else if (e.key === 'End') {
        e.preventDefault();
        select(tabs[tabs.length - 1], true);
      }
    });
    if (tabs.length) {
      const initialTab = tabs.find((t) => t.getAttribute('aria-selected') === 'true') || tabs[0];
      select(initialTab, false);
    }
  }
})();
