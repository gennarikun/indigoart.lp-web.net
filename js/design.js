document.addEventListener('DOMContentLoaded', () => {
  /* === Header scroll detection === */
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  /* === Fade-in on scroll (for redesigned top page elements) === */
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -10% 0px" });

  document.querySelectorAll('.fade-in, .fade-up, .lp-sub-fade-up').forEach(el => {
    fadeObserver.observe(el);
  });

  /* === Theme (background color) switching on scroll === */
  /* 仕様:
     - トップページの特定のセクションで背景色を切り替える
     - 下層ページ（Up-Cycle等）ではIDが被っても誤動作しないよう、トップページ専用とする
  */
  if (document.body.classList.contains('home')) {
    const themeMap = [
      { selector: '#anc_05', theme: 'theme-indigo' },
      { selector: '#anc_06', theme: null },
    ];

    const thresholds = [];
    themeMap.forEach(item => {
      const el = document.querySelector(item.selector);
      if (el) thresholds.push({ el, theme: item.theme });
    });

  if (thresholds.length > 0) {
    let currentTheme = null;

    function updateTheme() {
      const scrollY = window.scrollY + window.innerHeight * 0.4;
      let activeTheme = null;

      for (let i = thresholds.length - 1; i >= 0; i--) {
        if (scrollY >= thresholds[i].el.offsetTop) {
          activeTheme = thresholds[i].theme;
          break;
        }
      }

      if (activeTheme !== currentTheme) {
        document.body.classList.remove('theme-indigo', 'theme-washed');
        if (activeTheme) {
          document.body.classList.add(activeTheme);
        }
        currentTheme = activeTheme;
      }
    }

    window.addEventListener('scroll', updateTheme, { passive: true });
    updateTheme();
  }
}

  /* === FAQ Accordion === */
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const parent = question.closest('.faq-item');
      if (parent) {
        parent.classList.toggle('open');
      }
    });
  });

  /* === Mobile Menu Toggle === */
  const mobileBtn = document.querySelector('.mobile-menu-btn');
  const mobileNav = document.querySelector('.mobile-nav-overlay');
  
  if (mobileBtn && mobileNav) {
    mobileBtn.addEventListener('click', () => {
      mobileBtn.classList.toggle('active');
      mobileNav.classList.toggle('open');
    });
    
    // Close menu when clicking a link
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileBtn.classList.remove('active');
        mobileNav.classList.remove('open');
      });
    });
  }

});
