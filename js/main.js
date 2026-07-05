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

    const makeLeaf = (initial) => {
      const size = 12 + Math.random() * 14;              // 12〜26px
      return {
        baseX: Math.random() * w,
        x: 0,
        y: initial ? Math.random() * h : -size,
        size,
        rot: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.018,
        fallSpeed: 0.22 + Math.random() * 0.45,
        swayAmp: 12 + Math.random() * 26,
        swayPhase: Math.random() * Math.PI * 2,
        swaySpeed: 0.007 + Math.random() * 0.011,
        alpha: 0.26 + Math.random() * 0.34,
        color: palette[(Math.random() * palette.length) | 0]
      };
    };

    const build = () => {
      const count = window.innerWidth <= 768 ? 6 : 12;
      leaves = [];
      for (let i = 0; i < count; i += 1) leaves.push(makeLeaf(true));
    };

    // もみじシルエット（5裂の星形パス）
    const drawShape = (s) => {
      const tips = 5;
      const step = Math.PI / tips;
      ctx.beginPath();
      for (let i = 0; i <= tips * 2; i += 1) {
        const ang = -Math.PI / 2 + i * step;
        const r = (i % 2 === 0) ? s : s * 0.42;
        const px = Math.cos(ang) * r;
        const py = Math.sin(ang) * r;
        if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
      }
      ctx.closePath();
    };

    const frame = () => {
      ctx.clearRect(0, 0, w, h);
      leaves.forEach((l) => {
        l.y += l.fallSpeed;
        l.swayPhase += l.swaySpeed;
        l.rot += l.rotSpeed;
        l.x = l.baseX + Math.sin(l.swayPhase) * l.swayAmp;
        if (l.y - l.size > h) { l.y = -l.size; l.baseX = Math.random() * w; }
        ctx.save();
        ctx.translate(l.x, l.y);
        ctx.rotate(l.rot);
        ctx.globalAlpha = l.alpha;
        ctx.fillStyle = l.color;
        drawShape(l.size / 2);
        ctx.fill();
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
