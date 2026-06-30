/* ==========================================================================
   Vishal Adsule — Portfolio Script
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------------------------------------------------------------------
     1. Scroll Progress Bar
  --------------------------------------------------------------------- */
  const progressBar = document.getElementById('scroll-progress');
  function updateProgressBar() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = progress + '%';
  }
  window.addEventListener('scroll', updateProgressBar, { passive: true });
  updateProgressBar();

  /* ---------------------------------------------------------------------
     2. Navbar background on scroll + active link highlight
  --------------------------------------------------------------------- */
  const navbar = document.getElementById('navbar');
  function handleNavbarScroll() {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', handleNavbarScroll, { passive: true });
  handleNavbarScroll();

  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function highlightActiveLink() {
    let currentId = '';
    const scrollPos = window.scrollY + 120;
    sections.forEach((section) => {
      if (scrollPos >= section.offsetTop) {
        currentId = section.id;
      }
    });
    navLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === `#${currentId}`);
    });
  }
  window.addEventListener('scroll', highlightActiveLink, { passive: true });
  highlightActiveLink();

  /* ---------------------------------------------------------------------
     3. Mobile menu toggle
  --------------------------------------------------------------------- */
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIconOpen = document.getElementById('icon-open');
  const menuIconClose = document.getElementById('icon-close');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      const isHidden = mobileMenu.classList.contains('hidden');
      mobileMenu.classList.toggle('hidden');
      menuIconOpen.classList.toggle('hidden', isHidden);
      menuIconClose.classList.toggle('hidden', !isHidden);
    });

    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuIconOpen.classList.remove('hidden');
        menuIconClose.classList.add('hidden');
      });
    });
  }

  /* ---------------------------------------------------------------------
     4. Typing effect in hero
  --------------------------------------------------------------------- */
  const typingEl = document.getElementById('typing-text');
  const roles = [
    'Java Developer',
    'Aspiring Software Engineer',
    'Problem Solver',
    'Cloud & Data Enthusiast'
  ];
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeLoop() {
    if (!typingEl) return;
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      charIndex--;
    } else {
      charIndex++;
    }

    typingEl.textContent = currentRole.substring(0, charIndex);

    let typeSpeed = isDeleting ? 45 : 90;

    if (!isDeleting && charIndex === currentRole.length) {
      typeSpeed = 1600; // pause at full word
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typeSpeed = 400;
    }

    setTimeout(typeLoop, typeSpeed);
  }
  typeLoop();

  /* ---------------------------------------------------------------------
     5. Floating particles background (hero)
  --------------------------------------------------------------------- */
  const particleContainer = document.getElementById('particles');
  if (particleContainer) {
    const particleCount = window.innerWidth < 768 ? 16 : 32;
    for (let i = 0; i < particleCount; i++) {
      const p = document.createElement('span');
      p.classList.add('particle');
      const size = Math.random() * 6 + 3;
      p.style.width = `${size}px`;
      p.style.height = `${size}px`;
      p.style.left = `${Math.random() * 100}%`;
      p.style.bottom = `-${Math.random() * 20}px`;
      p.style.animationDuration = `${Math.random() * 12 + 10}s`;
      p.style.animationDelay = `${Math.random() * 10}s`;
      particleContainer.appendChild(p);
    }
  }

  /* ---------------------------------------------------------------------
     6. Scroll reveal animations (IntersectionObserver)
  --------------------------------------------------------------------- */
  const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealEls.forEach((el) => revealObserver.observe(el));

  /* ---------------------------------------------------------------------
     7. Animated counters (About section)
  --------------------------------------------------------------------- */
  const counters = document.querySelectorAll('.counter');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach((counter) => counterObserver.observe(counter));

  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-target'), 10);
    const duration = 1500;
    const startTime = performance.now();

    function step(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target);
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target;
      }
    }
    requestAnimationFrame(step);
  }

  /* ---------------------------------------------------------------------
     8. Animated skill progress bars
  --------------------------------------------------------------------- */
  const skillBars = document.querySelectorAll('.skill-bar-fill');
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target.getAttribute('data-level');
        entry.target.style.width = target + '%';
        skillObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  skillBars.forEach((bar) => skillObserver.observe(bar));

  /* ---------------------------------------------------------------------
     9. Back to top button
  --------------------------------------------------------------------- */
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      backToTopBtn.classList.toggle('show', window.scrollY > 500);
    }, { passive: true });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---------------------------------------------------------------------
     10. Project "details" expand/collapse
  --------------------------------------------------------------------- */
  document.querySelectorAll('.project-details-toggle').forEach((btn) => {
    btn.addEventListener('click', () => {
      const panel = document.getElementById(btn.getAttribute('data-target'));
      const icon = btn.querySelector('.toggle-icon');
      if (!panel) return;
      const isOpen = !panel.classList.contains('hidden');
      panel.classList.toggle('hidden');
      btn.querySelector('.toggle-label').textContent = isOpen ? 'View Details' : 'Hide Details';
      if (icon) icon.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
    });
  });

  /* ---------------------------------------------------------------------
     11. Contact form (front-end only validation + mailto fallback)
  --------------------------------------------------------------------- */
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = contactForm.name.value.trim();
      const email = contactForm.email.value.trim();
      const subject = contactForm.subject.value.trim();
      const message = contactForm.message.value.trim();

      if (!name || !email || !subject || !message) {
        showFormStatus('Please fill in all fields before sending.', 'error');
        return;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        showFormStatus('Please enter a valid email address.', 'error');
        return;
      }

      // Open the user's email client pre-filled with the message.
      const mailto = `mailto:vishal25adsule2003@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
      window.location.href = mailto;

      showFormStatus('Your email app should now be open. Thanks for reaching out!', 'success');
      contactForm.reset();
    });
  }

  function showFormStatus(message, type) {
    if (!formStatus) return;
    formStatus.textContent = message;
    formStatus.classList.remove('hidden', 'text-red-400', 'text-emerald-400');
    formStatus.classList.add(type === 'error' ? 'text-red-400' : 'text-emerald-400');
  }

  /* ---------------------------------------------------------------------
     12. Print resume button
  --------------------------------------------------------------------- */
  const printResumeBtn = document.getElementById('print-resume');
  if (printResumeBtn) {
    printResumeBtn.addEventListener('click', () => {
      window.print();
    });
  }

  /* ---------------------------------------------------------------------
     13. Current year in footer
  --------------------------------------------------------------------- */
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

});
