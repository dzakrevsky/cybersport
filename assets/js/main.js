class CyberSportApp {
  constructor() {
    this.init();
  }

  init() {
    this.initLucideIcons();
    this.initMobileMenu();
    this.initScrollReveal();
    this.initActiveNav();
    this.initCountdown();
    this.initCollapsibles();
    this.initCopyButtons();
    this.initToggles();
    this.initFAQ();
  }

  initLucideIcons() {
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  }

  initMobileMenu() {
    const toggle = document.querySelector('.mobile-toggle');
    const menu = document.querySelector('.mobile-menu');
    
    if (toggle && menu) {
      toggle.addEventListener('click', () => {
        menu.classList.toggle('active');
        const isOpen = menu.classList.contains('active');
        toggle.setAttribute('aria-expanded', isOpen);
        toggle.innerHTML = isOpen 
          ? '<i data-lucide="x" style="width: 24px; height: 24px;"></i>'
          : '<i data-lucide="menu" style="width: 24px; height: 24px;"></i>';
        this.initLucideIcons();
      });

      document.addEventListener('click', (e) => {
        if (!toggle.contains(e.target) && !menu.contains(e.target)) {
          menu.classList.remove('active');
          toggle.setAttribute('aria-expanded', false);
          toggle.innerHTML = '<i data-lucide="menu" style="width: 24px; height: 24px;"></i>';
          this.initLucideIcons();
        }
      });
    }
  }

  initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    if (!reveals.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    reveals.forEach((el, index) => {
      el.style.transitionDelay = `${index * 0.08}s`;
      observer.observe(el);
    });
  }

  initActiveNav() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
      const linkPath = link.getAttribute('href');
      if (currentPath.includes(linkPath)) {
        link.classList.add('active');
      }
    });
  }

  initCountdown() {
    const countdownContainer = document.getElementById('countdown');
    
    if (!countdownContainer) return;

    const daysEl = document.getElementById('cd-days');
    const hoursEl = document.getElementById('cd-hours');
    const minsEl = document.getElementById('cd-mins');
    const secsEl = document.getElementById('cd-secs');

    function getNextMonday() {
      const now = new Date();
      const dayOfWeek = now.getUTCDay();
      const daysUntilMonday = dayOfWeek === 0 ? 1 : (8 - dayOfWeek);
      const monday = new Date(now);
      monday.setUTCDate(monday.getUTCDate() + daysUntilMonday);
      monday.setUTCHours(0, 0, 0, 0);
      return monday;
    }

    function updateCountdown() {
      const now = new Date();
      const target = getNextMonday();
      let diff = Math.max(0, Math.floor((target - now) / 1000));

      const days = Math.floor(diff / 86400);
      diff %= 86400;
      const hours = Math.floor(diff / 3600);
      diff %= 3600;
      const mins = Math.floor(diff / 60);
      const secs = diff % 60;

      if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
      if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
      if (minsEl) minsEl.textContent = String(mins).padStart(2, '0');
      if (secsEl) secsEl.textContent = String(secs).padStart(2, '0');
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
  }

  initCollapsibles() {
    const toggles = document.querySelectorAll('[data-collapse-toggle]');
    
    toggles.forEach(toggle => {
      toggle.addEventListener('click', () => {
        const targetId = toggle.getAttribute('data-collapse-toggle');
        const target = document.getElementById(targetId);
        const chevron = toggle.querySelector('[data-chevron]');
        
        if (target) {
          target.classList.toggle('open');
          
          if (chevron) {
            chevron.style.transform = target.classList.contains('open') 
              ? 'rotate(180deg)' 
              : 'rotate(0deg)';
          }
        }
      });
    });
  }

  initCopyButtons() {
    const copyButtons = document.querySelectorAll('.btn-copy');
    
    copyButtons.forEach(btn => {
      btn.addEventListener('click', async () => {
        const input = btn.previousElementSibling?.querySelector('input, textarea');
        
        if (input) {
          try {
            await navigator.clipboard.writeText(input.value);
            const originalContent = btn.innerHTML;
            btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';
            btn.style.color = '#34d399';
            setTimeout(() => {
              btn.innerHTML = originalContent;
              btn.style.color = '';
            }, 2000);
          } catch (err) {
            console.error('Failed to copy:', err);
          }
        }
      });
    });
  }

  initToggles() {
    const toggleSwitches = document.querySelectorAll('.toggle-switch input');
    
    toggleSwitches.forEach(toggle => {
      toggle.addEventListener('change', (e) => {
        const isChecked = e.target.checked;
        e.target.closest('.toggle-switch').classList.toggle('active', isChecked);
      });
      
      if (toggle.checked) {
        toggle.closest('.toggle-switch').classList.add('active');
      }
    });
  }

  initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      if (question) {
        question.addEventListener('click', () => {
          const isOpen = item.classList.contains('open');
          faqItems.forEach(i => i.classList.remove('open'));
          if (!isOpen) {
            item.classList.add('open');
          }
        });
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.CyberSport = new CyberSportApp();
});