/* --- lightning-config.js --- */
/* <![CDATA[ */
var lightningOpt = {"header_scrool":"1"};
//# sourceURL=lightning-js-js-extra
/* ]]> */


/* --- scroll-animations.js --- */
(function() {
  'use strict';

  function initAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.lp-wine-fade-up, .lp-wine-fade-in').forEach(el => {
      el.classList.remove('visible');
      observer.observe(el);
    });
  }

  function initGalleryMarquee() {
    var track = document.querySelector('.lp-wine-gallery-track');
    if (!track) return;
    var x = 0, halfWidth = 0, prev = null;
    // 1ループの時間(ms): モバイル30秒、デスクトップ45秒
    var duration = window.innerWidth >= 769 ? 45000 : 30000;

    function measure() {
      var imgs = track.querySelectorAll('img');
      var n = Math.floor(imgs.length / 2); // 前半セットの枚数
      if (!n) return 0;
      // gap幅 + 各画像の実際のpx幅を合計
      var gap = parseFloat(window.getComputedStyle(track).columnGap) || 0;
      var w = gap * n; // 前半セット後のgap n個分（img1-img2, ..., imgN-img(N+1)）
      for (var i = 0; i < n; i++) w += imgs[i].getBoundingClientRect().width;
      return w;
    }

    function tick(ts) {
      if (prev === null) prev = ts;
      var dt = ts - prev; prev = ts;
      x -= halfWidth / duration * dt;
      if (x < -halfWidth) x += halfWidth;
      track.style.transform = 'translateX(' + x + 'px)';
      requestAnimationFrame(tick);
    }

    function start() {
      halfWidth = measure();
      if (halfWidth > 0) requestAnimationFrame(tick);
    }

    // 全リソースロード後に計測（画像の実寸が確定する）
    if (document.readyState === 'complete') { start(); } else { window.addEventListener('load', start); }
  }

  function init() { initAnimations(); initGalleryMarquee(); }
  if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', init); } else { init(); }
})();


/* --- facebook-pixel.js --- */
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1530858539040055');
fbq('track', 'PageView');


/* --- google-analytics.js --- */
window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-775206818');



/* === RESTORED INLINE ANIMATION & TOGGLE JS === */
(function () {
  'use strict';

  /* スクロール時のフェードイン（上へのフワッと表示） */
  function setupScrollAnimation() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // スライドイン（左右）を使う要素以外の、すべてのセクションやカードを列挙
    const animateElements = document.querySelectorAll(
      '.lp-indigo-section-title, ' +
      '.lp-indigo-concept-text, ' +
      '.lp-indigo-cta-section, ' +
      '.lp-indigo-story-card, ' +
      '.lp-indigo-beyond-text-block, ' +
      '.lp-indigo-beyond-image-block, ' +
      '.lp-indigo-explanation-content, ' +
      '.lp-indigo-info-card, ' +
      '.lp-indigo-sample-card, ' +
      '.lp-indigo-sample-usage, ' +
      '.lp-indigo-flow-intro-text, ' +
      '.lp-indigo-notice, ' +
      '.lp-indigo-gallery-section, ' +
      '.lp-indigo-global-vision, ' +
      '.lp-indigo-closing-image-wrapper'
    );

    animateElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });
  }

  /* 左右からのスライドインアニメーション */
  function initSlideAnimations() {
    // 左右交互にスライドインさせる要素グループ
    const slidePairs = [
      '.lp-indigo-flow-item',
      '.lp-indigo-material-card',
      '.lp-indigo-testimonial-card',
      '.lp-indigo-faq-item'
    ];

    slidePairs.forEach(selector => {
      document.querySelectorAll(selector).forEach((item, index) => {
        // 0番目, 2番目...は左から。1番目, 3番目...は右から。
        if (index % 2 === 0) {
          item.classList.add('lp-indigo-slide-in-left');
        } else {
          item.classList.add('lp-indigo-slide-in-right');
        }
      });
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.lp-indigo-slide-in-left, .lp-indigo-slide-in-right').forEach(el => {
      observer.observe(el);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setupScrollAnimation();
      initSlideAnimations();
    });
  } else {
    setupScrollAnimation();
    initSlideAnimations();
  }

// ==========================================
// 日英切り替え機能 (Language Toggle)
// ==========================================
  // 言語切り替えボタンのイベントセットアップ
  function setupLanguageToggle() {
    const langBtns = document.querySelectorAll('.lp-indigo-lang-btn');
    if (langBtns.length === 0) return;
    // 初期言語の判定（Cookieまたはブラウザ機能）
    const getInitialLang = () => {
      const match = document.cookie.match(/(^| )lp_indigo_lang=([^;]+)/);
      // もし以前に英語ボタンを押した記憶(Cookie)があれば、それに従う
      if (match) return match[2];
      // それ以外（初めて来た人）は強制的に日本語(ja)にする
      return 'ja'; 
    };
    let currentLang = getInitialLang();
    // 言語を適用する関数
    const applyLanguage = (lang) => {
      // ボタンのアクティブ状態を更新
      langBtns.forEach(btn => {
        if (btn.dataset.lang === lang) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });
      // テキスト要素の切り替え（data-ja, data-en属性を持つ要素）
      const translatableElements = document.querySelectorAll('[data-ja][data-en]');
      translatableElements.forEach(el => {
        el.innerHTML = el.getAttribute(`data-${lang}`);
      });
    };
    // 初期適用
    applyLanguage(currentLang);
    // クリックイベントの登録
    langBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = btn.dataset.lang;
        if (lang !== currentLang) {
          currentLang = lang;
          applyLanguage(currentLang);
        }
      });
    });
  }
  // DOMが読み込まれたら実行
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupLanguageToggle);
  } else {
    setupLanguageToggle();
  }

})();
