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
    this.renderBonuses();
    this.renderPartners();
    this.renderClans();
    this.renderActivity();

    const hasLeaderboard = document.querySelector('[data-leaderboard]');
    const hasStats = document.querySelector('[data-stats]');
    if ((hasLeaderboard || hasStats) && window.DataStore) {
      this.loadLeaderboard();
    }
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
          const stagger = entry.target.querySelector('.reveal-stagger');
          if (stagger) stagger.classList.add('visible');
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
          <div class="stat-number">$${formatNumber(stats.totalWagered)}+</div>
          <div class="stat-label">Всего поставлено</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">$${formatNumber(stats.totalEarned || stats.bonusesPaid)}+</div>
          <div class="stat-label">Заработано</div>
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

  async loadLeaderboard(options = {}) {
    if (!window.DataStore) return;

    const containers = document.querySelectorAll('[data-leaderboard]');
    containers.forEach(container => {
      container.classList.add('loading');
      container.innerHTML = `
        <div class="loading-state">
          <div class="loading-spinner"></div>
          <p>Загрузка лидерборда...</p>
        </div>
      `;
    });

    const result = await window.DataStore.fetchLeaderboard(options);
    this.renderStats();
    this.renderLeaderboard();
    this.renderActivity();

    containers.forEach(container => {
      container.classList.remove('loading');
    });

    return result;
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

      const isTable = container.tagName === 'TBODY';

      const rows = leaderboard.map(player => {
        const hasRealData = player.wagered !== undefined;
        const hasAvatar = player.avatarUrl !== undefined;

        if (isTable) {
          const wageredFormatted = hasRealData
            ? '$' + player.wagered.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
            : player.score.toLocaleString('ru-RU');

          const earnedFormatted = hasRealData
            ? '$' + player.earned.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
            : '';

          let avatarHtml = '';
          if (hasAvatar) {
            avatarHtml = `<img src="${player.avatarUrl}" alt="${player.username}" style="width: 32px; height: 32px; border-radius: 50%; object-fit: cover;">`;
          } else {
            avatarHtml = `<div style="width: 32px; height: 32px; border-radius: 50%; background: var(--background-700); display: flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 600; color: var(--text-200);">${player.avatar}</div>`;
          }

          const badgeHtml = (player.badges && player.badges.length > 0)
            ? `<img src="${player.badges[0].imageUrl}" alt="badge" style="width: 16px; height: 16px; margin-left: 6px;">`
            : '';

          return `
            <tr>
              <td class="mono" style="font-weight: 600;">${player.rank}</td>
              <td>
                <div style="display: flex; align-items: center; gap: 0.75rem;">
                  ${avatarHtml}
                  <div>
                    <div style="display: flex; align-items: center;">
                      <span style="font-weight: 500; color: var(--text-50);">${player.username}</span>
                      ${badgeHtml}
                    </div>
                    ${player.levelTier ? `<div style="font-size: 0.6875rem; color: var(--text-500); text-transform: uppercase; letter-spacing: 0.05em;">Level ${player.level} · ${player.levelTier.replace(/_/g, ' ')}</div>` : ''}
                  </div>
                </div>
              </td>
              <td class="mono">${wageredFormatted}</td>
              ${hasRealData ? `<td class="mono" style="color: var(--primary);">${earnedFormatted}</td>` : ''}
            </tr>
          `;
        }

        let rankClass = '';
        if (player.rank === 1) rankClass = 'rank-gold';
        else if (player.rank === 2) rankClass = 'rank-silver';
        else if (player.rank === 3) rankClass = 'rank-bronze';

        const scoreDisplay = hasRealData
          ? '$' + player.wagered.toLocaleString('ru-RU', { maximumFractionDigits: 0 })
          : player.score.toLocaleString('ru-RU');

        let avatarHtml = '';
        if (hasAvatar) {
          avatarHtml = `<img src="${player.avatarUrl}" alt="${player.username}" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;">`;
        } else {
          avatarHtml = player.avatar || '';
        }

        return `
          <div class="leaderboard-row">
            <div class="lb-rank ${rankClass}">${player.rank}</div>
            <div class="lb-player">
              <div class="lb-avatar">${avatarHtml}</div>
              <div>
                <div class="lb-username">${player.username}</div>
                <div class="lb-clan">${player.levelTier ? 'Level ' + player.level : player.clan || ''}</div>
              </div>
            </div>
            <div class="lb-score">${scoreDisplay}</div>
          </div>
        `;
      }).join('');

      container.innerHTML = rows;
    });

    this.initLucideIcons();
  }

  renderBonuses() {
    const containers = document.querySelectorAll('[data-bonuses]');
    if (!containers.length || !window.DataStore) return;

    const bonuses = window.DataStore.getBonuses();

    containers.forEach(container => {
      if (bonuses.length === 0) {
        container.innerHTML = `
          <div class="empty-state">
            <div class="empty-state-icon">🎁</div>
            <h3>Нет доступных бонусов</h3>
            <p>Новые бонусы появляются скоро — следите за обновлениями.</p>
          </div>
        `;
        return;
      }

      container.innerHTML = bonuses.map(b => `
        <div class="bonus-card">
          <div class="bonus-badge">${b.type.toUpperCase()}</div>
          <h3 class="bonus-title">${b.title}</h3>
          <div class="bonus-amount">${b.amount}</div>
          <p class="bonus-desc">${b.description}</p>
          <a href="#" class="btn-primary" style="font-size: 0.875rem; padding: 0.625rem 1.5rem;">Получить</a>
        </div>
      `).join('');
    });
  }

  renderPartners() {
    const containers = document.querySelectorAll('[data-partners]');
    if (!containers.length || !window.DataStore) return;

    const partners = window.DataStore.getPartners();

    containers.forEach(container => {
      if (partners.length === 0) {
        container.innerHTML = `
          <div class="empty-state">
            <div class="empty-state-icon">🤝</div>
            <h3>Нет партнёров</h3>
            <p>Мы активно работаем над добавлением новых партнёров.</p>
          </div>
        `;
        return;
      }

      container.innerHTML = partners.map(p => `
        <div class="partner-card">
          <div class="partner-name">${p.name}</div>
          <div class="partner-commission">${p.commission} <span>комиссия</span></div>
          <p class="partner-desc">${p.description}</p>
          <a href="#" class="btn-ghost" style="font-size: 0.875rem; padding: 0.625rem 1.5rem;">Подробнее</a>
        </div>
      `).join('');
    });
  }

  renderClans() {
    const containers = document.querySelectorAll('[data-clans]');
    if (!containers.length || !window.DataStore) return;

    const clans = window.DataStore.getClans();

    containers.forEach(container => {
      if (clans.length === 0) {
        container.innerHTML = `
          <div class="empty-state">
            <div class="empty-state-icon">⚔️</div>
            <h3>Кланы ещё не созданы</h3>
            <p>Станьте основателем первого клана!</p>
          </div>
        `;
        return;
      }

      container.innerHTML = clans.map(c => `
        <div class="clan-card">
          <div class="clan-rank">#${c.rank}</div>
          <div class="clan-header" style="border-left: 2px solid ${c.color};">
            <div class="clan-name">
              <div class="clan-logo" style="background: ${c.color}20; color: ${c.color};">
                ${c.name.charAt(0)}
              </div>
              <div>
                <h3>${c.name}</h3>
                <div class="clan-members">${c.members.toLocaleString('ru-RU')} участников</div>
              </div>
            </div>
          </div>
          <div class="clan-score">
            <span class="clan-score-label">XP</span>
            <span class="clan-score-value">${c.score.toLocaleString('ru-RU')}</span>
          </div>
          <a href="#" class="btn-ghost" style="width: 100%; justify-content: center; font-size: 0.875rem; padding: 0.625rem 1.5rem;">Присоединиться</a>
        </div>
      `).join('');
    });
  }

  renderActivity() {
    const containers = document.querySelectorAll('[data-activity]');
    if (!containers.length || !window.DataStore) return;

    const activity = window.DataStore.getActivity();

    containers.forEach(container => {
      if (activity.length === 0) {
        container.innerHTML = `
          <div class="empty-state" style="padding: 2rem 1rem;">
            <div class="empty-state-icon">📋</div>
            <h3>Нет активности</h3>
            <p style="font-size: 0.8125rem;">Пока никто не совершал действий.</p>
          </div>
        `;
        return;
      }

      container.innerHTML = activity.map(a => `
        <li class="activity-item">
          <span class="activity-desc"><strong>${a.user}</strong> ${a.action}</span>
          <span class="activity-time">${a.time}</span>
        </li>
      `).join('');
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.CyberSport = new CyberSportApp();
});