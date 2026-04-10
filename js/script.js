/* === GLOBAL SETUP === */
var lightningOpt = {"header_scrool":"1"};

/* === FACEBOOK & GOOGLE ANALYTICS === */
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1530858539040055');
fbq('track', 'PageView');

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-775206818');

/* === MAIN LOGIC === */
document.addEventListener('DOMContentLoaded', () => {

  // 1. Header scroll detection
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    }, { passive: true });
  }

  // 2. Mobile Menu Toggle
  const mobileBtn = document.querySelector('.mobile-menu-btn');
  const mobileNav = document.querySelector('.mobile-nav-overlay');
  if (mobileBtn && mobileNav) {
    mobileBtn.addEventListener('click', () => {
      mobileBtn.classList.toggle('active');
      mobileNav.classList.toggle('open');
    });
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileBtn.classList.remove('active');
        mobileNav.classList.remove('open');
      });
    });
  }

  // 3. FAQ Accordion
  document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
      const parent = question.closest('.faq-item');
      if (parent) parent.classList.toggle('open');
    });
  });

  // 4. Unified Intersection Observer (CSS-based initial state)
  const cssFadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        cssFadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -10% 0px" });

  document.querySelectorAll('.fade-in, .fade-up, .lp-sub-fade-up, .lp-wine-fade-up, .lp-wine-fade-in').forEach(el => {
    // Some classes might have 'visible' hardcoded initially for safety, we remove it here so it animates
    el.classList.remove('visible'); 
    cssFadeObserver.observe(el);
  });

  // 5. Setup Scroll Animation (JS-based inline state)
  const inlineFadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        inlineFadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  const animateElements = document.querySelectorAll(
    '.lp-indigo-section-title, .lp-indigo-concept-text, .lp-indigo-cta-section, ' +
    '.lp-indigo-story-card, .lp-indigo-beyond-text-block, .lp-indigo-beyond-image-block, ' +
    '.lp-indigo-explanation-content, .lp-indigo-info-card, .lp-indigo-sample-card, ' +
    '.lp-indigo-sample-usage, .lp-indigo-flow-intro-text, .lp-indigo-notice, ' +
    '.lp-indigo-gallery-section, .lp-indigo-global-vision, .lp-indigo-closing-image-wrapper'
  );

  animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    inlineFadeObserver.observe(el);
  });

  // 6. Slide-in Animations
  const slidePairs = [
    '.lp-indigo-flow-item', '.lp-indigo-material-card',
    '.lp-indigo-testimonial-card', '.lp-indigo-faq-item'
  ];
  slidePairs.forEach(selector => {
    document.querySelectorAll(selector).forEach((item, index) => {
      if (index % 2 === 0) item.classList.add('lp-indigo-slide-in-left');
      else item.classList.add('lp-indigo-slide-in-right');
    });
  });

  const slideObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        slideObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.lp-indigo-slide-in-left, .lp-indigo-slide-in-right').forEach(el => {
    slideObserver.observe(el);
  });

  // 7. Gallery Marquee
  const track = document.querySelector('.lp-wine-gallery-track');
  if (track) {
    let x = 0, halfWidth = 0, prev = null;
    const duration = window.innerWidth >= 769 ? 45000 : 30000;
    const measure = () => {
      const imgs = track.querySelectorAll('img');
      const n = Math.floor(imgs.length / 2);
      if (!n) return 0;
      const gap = parseFloat(window.getComputedStyle(track).columnGap) || 0;
      let w = gap * n;
      for (let i = 0; i < n; i++) w += imgs[i].getBoundingClientRect().width;
      return w;
    };
    const tick = (ts) => {
      if (prev === null) prev = ts;
      x -= halfWidth / duration * (ts - prev);
      prev = ts;
      if (x < -halfWidth) x += halfWidth;
      track.style.transform = `translateX(${x}px)`;
      requestAnimationFrame(tick);
    };
    const start = () => {
      halfWidth = measure();
      if (halfWidth > 0) requestAnimationFrame(tick);
    };
    if (document.readyState === 'complete') start(); else window.addEventListener('load', start);
  }

  // 8. Language Toggle
  const langBtns = document.querySelectorAll('.lp-indigo-lang-btn');
  if (langBtns.length > 0) {
    const match = document.cookie.match(/(^| )lp_indigo_lang=([^;]+)/);
    let currentLang = match ? match[2] : 'ja';
    const applyLanguage = (lang) => {
      langBtns.forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
      document.querySelectorAll('[data-ja][data-en]').forEach(el => {
        el.innerHTML = el.getAttribute(`data-${lang}`);
      });
    };
    applyLanguage(currentLang);
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

  // 9. Theme Switching
  if (document.body.classList.contains('home')) {
    const themeMap = [{ selector: '#anc_05', theme: 'theme-indigo' }, { selector: '#anc_06', theme: null }];
    const thresholds = [];
    themeMap.forEach(item => {
      const el = document.querySelector(item.selector);
      if (el) thresholds.push({ el, theme: item.theme });
    });
    if (thresholds.length > 0) {
      let currentTheme = null;
      const updateTheme = () => {
        const scrollY = window.scrollY + window.innerHeight * 0.4;
        let activeTheme = null;
        for (let i = thresholds.length - 1; i >= 0; i--) {
          if (scrollY >= thresholds[i].el.offsetTop) { activeTheme = thresholds[i].theme; break; }
        }
        if (activeTheme !== currentTheme) {
          document.body.classList.remove('theme-indigo', 'theme-washed');
          if (activeTheme) document.body.classList.add(activeTheme);
          currentTheme = activeTheme;
        }
      };
      window.addEventListener('scroll', updateTheme, { passive: true });
      updateTheme();
    }
  }

  // 10. Up-Cycle Parallax
  const upcycleWrapper = document.querySelector('.lp-page-upcycle');
  if (upcycleWrapper) {
    const parallaxSections = upcycleWrapper.querySelectorAll('.lp-sub-section--washi, .lp-sub-section--indigo');
    if (parallaxSections.length > 0) {
      let ticking = false;
      const styleEl = document.createElement('style');
      styleEl.textContent = `.lp-page-upcycle .lp-sub-section--washi::before, .lp-page-upcycle .lp-sub-section--indigo::before { transform: translateY(var(--parallax-y, 0px)); }`;
      document.head.appendChild(styleEl);
      window.addEventListener('scroll', () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            parallaxSections.forEach(section => {
              section.style.setProperty('--parallax-y', (section.getBoundingClientRect().top * 0.15) + 'px');
            });
            ticking = false;
          });
          ticking = true;
        }
      }, { passive: true });
      parallaxSections.forEach(section => { section.style.setProperty('--parallax-y', (section.getBoundingClientRect().top * 0.15) + 'px'); });
    }
  }

  // 11. About-Class Parallax
  const aboutClassWrapper = document.querySelector('.lp-page-about-class');
  if (aboutClassWrapper) {
    const parallaxImages = aboutClassWrapper.querySelectorAll('.ac-parallax-bg');
    if (parallaxImages.length > 0) {
      let acTicking = false;
      window.addEventListener('scroll', () => {
        if (!acTicking) {
          requestAnimationFrame(() => {
            const viewH = window.innerHeight;
            parallaxImages.forEach(img => {
              const rect = img.closest('.lp-sub-section')?.getBoundingClientRect();
              if (!rect || rect.bottom < -100 || rect.top > viewH + 100) return;
              const progress = (viewH - rect.top) / (viewH + rect.height);
              img.style.transform = `translate(-50%, calc(-50% + ${(progress - 0.5) * 60}px))`;
            });
            acTicking = false;
          });
          acTicking = true;
        }
      }, { passive: true });
    }
  }

  // 12. About-Indigo Parallax
  const aboutIndigoWrapper = document.querySelector('.lp-page-about-indigo');
  if (aboutIndigoWrapper) {
    const aiBgs = document.querySelectorAll('.lp-page-about-indigo .ai-parallax-bg');
    if (aiBgs.length > 0) {
      let aiTicking = false;
      window.addEventListener('scroll', () => {
        if (!aiTicking) {
          requestAnimationFrame(() => {
            const scrollY = window.scrollY || window.pageYOffset;
            aiBgs.forEach(bg => {
              // Get initial section top efficiently
              const sectionTop = bg.parentElement.getBoundingClientRect().top + scrollY;
              bg.style.transform = `translateY(${(scrollY - sectionTop) * 0.15}px)`;
            });
            aiTicking = false;
          });
          aiTicking = true;
        }
      }, { passive: true });
    }
  }

});
