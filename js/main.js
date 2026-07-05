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
 */
(() => {
  'use strict';

  document.documentElement.classList.add('js-enabled');

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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

  /* --- Scroll reveal --- */
  const revealTargets = document.querySelectorAll('.reveal');
  if (revealTargets.length && 'IntersectionObserver' in window && !prefersReduced) {
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
