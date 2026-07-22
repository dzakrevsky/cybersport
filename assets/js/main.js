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
    this.renderStats();
    this.renderGiveaways();
    this.renderTestimonials();
    this.renderFAQ();
    this.renderLeaderboard();
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

  renderStats() {
    const containers = document.querySelectorAll('[data-stats]');
    if (!containers.length || !window.DataStore) return;

    const stats = window.DataStore.getStats();

    const formatNumber = (n) => {
      if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M';
      if (n >= 1000) return n.toLocaleString('ru-RU');
      return String(n);
    };

    containers.forEach(container => {
      container.innerHTML = `
        <div class="stat-item">
          <div class="stat-number">${formatNumber(stats.players)}+</div>
          <div class="stat-label">Игроков</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">$${formatNumber(stats.bonusesPaid)}+</div>
          <div class="stat-label">Раздано бонусов</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">${stats.clans}</div>
          <div class="stat-label">Клана</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">24/7</div>
          <div class="stat-label">Активность</div>
        </div>
      `;
    });
  }

  renderGiveaways() {
    const containers = document.querySelectorAll('[data-giveaways]');
    if (!containers.length || !window.DataStore) return;

    const giveaways = window.DataStore.getGiveaways();

    containers.forEach(container => {
      if (giveaways.length === 0) {
        container.innerHTML = `
          <div class="empty-state">
            <div class="empty-state-icon">🎁</div>
            <h3>Нет активных розыгрышей</h3>
            <p>Следите за обновлениями — новые розыгрыши появляются каждую неделю.</p>
          </div>
        `;
        return;
      }

      container.innerHTML = giveaways.map(g => {
        const daysLeft = Math.ceil((g.endDate - new Date()) / (1000 * 60 * 60 * 24));
        return `
          <div class="giveaway-card">
            <div class="giveaway-header">
              <h3>${g.title}</h3>
              <span class="status-badge">Активен</span>
            </div>
            <p class="giveaway-desc">${g.description}</p>
            <div class="giveaway-timer">
              <i data-lucide="clock" style="width: 15px; height: 15px;"></i>
              <span>${daysLeft}д осталось</span>
            </div>
            <a href="#" class="btn-primary" style="font-size: 0.875rem; padding: 0.625rem 1.5rem;">Участвовать</a>
          </div>
        `;
      }).join('');
    });

    this.initLucideIcons();
  }

  renderTestimonials() {
    const containers = document.querySelectorAll('[data-testimonials]');
    if (!containers.length || !window.DataStore) return;

    const testimonials = window.DataStore.getTestimonials();

    containers.forEach(container => {
      container.innerHTML = testimonials.map(t => {
        const fullStars = Math.floor(t.stars);
        const hasHalf = t.stars % 1 !== 0;
        let stars = '';
        for (let i = 0; i < fullStars; i++) {
          stars += '<i data-lucide="star" style="width: 16px; height: 16px; fill: currentColor;"></i>';
        }
        if (hasHalf) {
          stars += '<i data-lucide="star-half" style="width: 16px; height: 16px; fill: currentColor;"></i>';
        }
        return `
          <div class="testimonial-card">
            <div class="testimonial-stars">${stars}</div>
            <p class="testimonial-text">«${t.text}»</p>
            <div class="testimonial-author">
              <div class="testimonial-avatar">${t.avatar}</div>
              <div>
                <div class="testimonial-name">${t.name}</div>
                <div class="testimonial-role">${t.role}</div>
              </div>
            </div>
          </div>
        `;
      }).join('');
    });

    this.initLucideIcons();
  }

  renderFAQ() {
    const containers = document.querySelectorAll('[data-faq]');
    if (!containers.length || !window.DataStore) return;

    const faq = window.DataStore.getFAQ();

    containers.forEach(container => {
      container.innerHTML = faq.map((item, idx) => `
        <div class="faq-item ${idx === 0 ? 'open' : ''}">
          <button class="faq-question">
            <span>${item.q}</span>
            <i data-lucide="chevron-down" class="faq-icon" style="width: 18px; height: 18px;"></i>
          </button>
          <div class="faq-answer">
            <div class="faq-answer-inner">${item.a}</div>
          </div>
        </div>
      `).join('');
    });

    this.initLucideIcons();
    this.initFAQ();
  }

  renderLeaderboard() {
    const containers = document.querySelectorAll('[data-leaderboard]');
    if (!containers.length || !window.DataStore) return;

    const leaderboard = window.DataStore.getLeaderboard();

    containers.forEach(container => {
      if (leaderboard.length === 0) {
        container.innerHTML = `
          <div class="empty-state">
            <div class="empty-state-icon">🏆</div>
            <h3>Лидерборд пуст</h3>
            <p>Станьте первым игроком в рейтинге!</p>
          </div>
        `;
        return;
      }

      container.innerHTML = leaderboard.map(player => {
        let rankClass = '';
        if (player.rank === 1) rankClass = 'rank-gold';
        else if (player.rank === 2) rankClass = 'rank-silver';
        else if (player.rank === 3) rankClass = 'rank-bronze';

        const changeIcon = player.change === 'up' ? 'trending-up' : player.change === 'down' ? 'trending-down' : 'minus';
        const changeColor = player.change === 'up' ? '#34d399' : player.change === 'down' ? '#f87171' : 'var(--text-500)';

        return `
          <div class="leaderboard-row">
            <div class="lb-rank ${rankClass}">${player.rank}</div>
            <div class="lb-player">
              <div class="lb-avatar">${player.avatar}</div>
              <div>
                <div class="lb-username">${player.username}</div>
                <div class="lb-clan">${player.clan}</div>
              </div>
            </div>
            <div class="lb-score">${player.score.toLocaleString('ru-RU')}</div>
            <div class="lb-change" style="color: ${changeColor};">
              <i data-lucide="${changeIcon}" style="width: 16px; height: 16px;"></i>
            </div>
          </div>
        `;
      }).join('');
    });

    this.initLucideIcons();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.CyberSport = new CyberSportApp();
});