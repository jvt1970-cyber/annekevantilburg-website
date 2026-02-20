/* ============================================================
   ANNEKE VAN TILBURG — Main JavaScript
   ============================================================ */

'use strict';

/* ── Custom Cursor ────────────────────────────────────────── */
(function initCursor() {
  const cursor = document.querySelector('.cursor');
  const ring   = document.querySelector('.cursor-ring');
  if (!cursor || !ring) return;

  let mouseX = 0, mouseY = 0;
  let ringX  = 0, ringY  = 0;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top  = mouseY + 'px';
  });

  function animateRing() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    ring.style.left = ringX + 'px';
    ring.style.top  = ringY + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();

  /* Grow ring on interactive elements */
  document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1.4)';
      ring.style.transform   = 'translate(-50%, -50%) scale(1.5)';
      ring.style.opacity     = '0.25';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      ring.style.transform   = 'translate(-50%, -50%) scale(1)';
      ring.style.opacity     = '0.6';
    });
  });

  /* Hide cursor when leaving window */
  document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
    ring.style.opacity   = '0';
  });
  document.addEventListener('mouseenter', () => {
    cursor.style.opacity = '1';
    ring.style.opacity   = '0.6';
  });
})();

/* ── Navigation: transparent → solid on scroll ───────────── */
(function initNav() {
  const nav = document.getElementById('main-nav');
  if (!nav) return;

  function updateNav() {
    if (window.scrollY > 60) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav(); // Run on load in case page is already scrolled
})();

/* ── Hamburger / Mobile Menu ──────────────────────────────── */
(function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const overlay   = document.getElementById('menu-overlay');
  const closeBtn  = document.querySelector('.menu-close');

  if (!hamburger || !overlay) return;

  function openMenu() {
    overlay.classList.add('open');
    hamburger.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    overlay.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', () => {
    overlay.classList.contains('open') ? closeMenu() : openMenu();
  });

  if (closeBtn) closeBtn.addEventListener('click', closeMenu);

  /* Close on overlay link click */
  overlay.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  /* Close on Escape key */
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMenu();
  });
})();

/* ── Hero Parallax ────────────────────────────────────────── */
(function initParallax() {
  const heroMedia = document.querySelector('.hero-media');
  if (!heroMedia) return;

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    if (scrolled < window.innerHeight) {
      heroMedia.style.transform = `translateY(${scrolled * 0.35}px)`;
    }
  }, { passive: true });
})();

/* ── Scroll-triggered Animations ─────────────────────────── */
(function initScrollAnimations() {
  const targets = document.querySelectorAll(
    '.fade-up, .fade-left, .fade-right, .scale-in'
  );

  if (!targets.length) return;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          /* Unobserve after triggering (animate once) */
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold:  0.12,
      rootMargin: '0px 0px -40px 0px'
    }
  );

  targets.forEach(el => observer.observe(el));
})();

/* ── Active Nav Link Highlighting ─────────────────────────── */
(function initActiveNav() {
  const currentPath = window.location.pathname;
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href && currentPath.endsWith(href)) {
      link.classList.add('active');
    }
  });
})();

/* ── Gallery Filter Buttons ───────────────────────────────── */
(function initGalleryFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const items      = document.querySelectorAll('.masonry-item');

  if (!filterBtns.length || !items.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      items.forEach(item => {
        const category = item.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          item.style.opacity  = '1';
          item.style.display  = 'block';
        } else {
          item.style.opacity  = '0';
          item.style.display  = 'none';
        }
      });
    });
  });
})();

/* ── Form Submission Feedback ─────────────────────────────── */
(function initForms() {
  const forms = document.querySelectorAll('form[data-netlify]');
  forms.forEach(form => {
    form.addEventListener('submit', () => {
      /* Netlify handles the submission — just give user feedback */
      const submitBtn = form.querySelector('[type="submit"]');
      if (submitBtn) {
        submitBtn.textContent = 'Sending…';
        submitBtn.disabled    = true;
      }
    });
  });
})();
