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

  /* === Parallax Scroll for Up-Cycle page backgrounds === */
  const upcycleWrapper = document.querySelector('.lp-page-upcycle');
  if (upcycleWrapper) {
    const parallaxSections = upcycleWrapper.querySelectorAll('.lp-sub-section--washi, .lp-sub-section--indigo');
    
    if (parallaxSections.length > 0) {
      let ticking = false;
      
      function updateParallax() {
        const scrollY = window.scrollY;
        parallaxSections.forEach(section => {
          const rect = section.getBoundingClientRect();
          const speed = 0.15;
          const offset = (rect.top * speed);
          const before = section.querySelector(':scope > *');
          if (section.style) {
            section.style.setProperty('--parallax-y', offset + 'px');
          }
        });
        ticking = false;
      }

      // Apply parallax via CSS custom property
      const styleEl = document.createElement('style');
      styleEl.textContent = `
        .lp-page-upcycle .lp-sub-section--washi::before,
        .lp-page-upcycle .lp-sub-section--indigo::before {
          transform: translateY(var(--parallax-y, 0px));
        }
      `;
      document.head.appendChild(styleEl);

      window.addEventListener('scroll', () => {
        if (!ticking) {
          requestAnimationFrame(updateParallax);
          ticking = true;
        }
      }, { passive: true });

      updateParallax();
    }
  }

  /* === Parallax Scroll for About-Class (染物体験) page === */
  const aboutClassWrapper = document.querySelector('.lp-page-about-class');
  if (aboutClassWrapper) {
    const parallaxImages = aboutClassWrapper.querySelectorAll('.ac-parallax-bg');

    if (parallaxImages.length > 0) {
      let acTicking = false;

      function updateAboutClassParallax() {
        parallaxImages.forEach(img => {
          const section = img.closest('.lp-sub-section');
          if (!section) return;
          const rect = section.getBoundingClientRect();
          const viewH = window.innerHeight;
          // Only process if section is in/near viewport
          if (rect.bottom < -100 || rect.top > viewH + 100) return;
          const progress = (viewH - rect.top) / (viewH + rect.height);
          const offset = (progress - 0.5) * 60; // max ±30px movement
          img.style.transform = `translate(-50%, calc(-50% + ${offset}px))`;
        });
        acTicking = false;
      }

      window.addEventListener('scroll', () => {
        if (!acTicking) {
          requestAnimationFrame(updateAboutClassParallax);
          acTicking = true;
        }
      }, { passive: true });

      updateAboutClassParallax();
    }
  }

});

/* ========================================================================= */
/* about-indigo パララックス背景制御                                         */
/* .lp-page-about-indigo ページにのみ適用                                    */
/* ========================================================================= */
document.addEventListener('DOMContentLoaded', function() {
  if (document.querySelector('.lp-page-about-indigo')) {
    var aiBgs = document.querySelectorAll('.lp-page-about-indigo .ai-parallax-bg');
    var aiTicking = false;

    function updateAboutIndigoParallax() {
      var scrollY = window.scrollY || window.pageYOffset;
      aiBgs.forEach(function(bg) {
        var section = bg.parentElement;
        var rect = section.getBoundingClientRect();
        var sectionTop = rect.top + scrollY;
        var offset = (scrollY - sectionTop) * 0.15;
        bg.style.transform = 'translateY(' + offset + 'px)';
      });
      aiTicking = false;
    }

    window.addEventListener('scroll', function() {
      if (!aiTicking) {
        requestAnimationFrame(updateAboutIndigoParallax);
        aiTicking = true;
      }
    }, { passive: true });

    updateAboutIndigoParallax();
  }
});
