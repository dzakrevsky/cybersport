const MOCK_DATA = {
  stats: {
    players: 12547,
    bonusesPaid: 50000,
    clans: 3,
    active247: true,
    activeGiveaways: 3,
    totalWagered: 2400000,
    discordMembers: 4231
  },

  giveaways: [
    {
      id: 'g1',
      title: 'Stake Weekly Race',
      status: 'active',
      description: 'Призовой фонд $5,000. Участвуйте в еженедельных гонках и занимайте призовые места.',
      prize: '$5,000',
      endDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000 + 14 * 60 * 60 * 1000),
      participants: 342
    },
    {
      id: 'g2',
      title: 'BC.Game Monthly',
      status: 'active',
      description: 'Ежемесячный розыгрыш $10,000. Больше играете — больше шансов на победу.',
      prize: '$10,000',
      endDate: new Date(Date.now() + 18 * 24 * 60 * 60 * 1000 + 6 * 60 * 60 * 1000),
      participants: 891
    }
  ],

  leaderboard: [
    { rank: 1, username: 'ProGamer_X', score: 45230, clan: 'Phantom', avatar: 'P', change: 'up' },
    { rank: 2, username: 'SkinMaster99', score: 41890, clan: 'Shadow', avatar: 'S', change: 'up' },
    { rank: 3, username: 'CryptoKing', score: 38750, clan: 'Viper', avatar: 'C', change: 'down' },
    { rank: 4, username: 'NightOwl', score: 35210, clan: 'Phantom', avatar: 'N', change: 'up' },
    { rank: 5, username: 'ShadowBlade', score: 32480, clan: 'Shadow', avatar: 'S', change: 'same' },
    { rank: 6, username: 'AceStrike', score: 29870, clan: 'Viper', avatar: 'A', change: 'up' },
    { rank: 7, username: 'DarkMatter', score: 27650, clan: 'Phantom', avatar: 'D', change: 'down' },
    { rank: 8, username: 'ZeroCool', score: 25430, clan: 'Shadow', avatar: 'Z', change: 'same' },
    { rank: 9, username: 'NeonRider', score: 23120, clan: 'Viper', avatar: 'N', change: 'up' },
    { rank: 10, username: 'QuantumX', score: 21560, clan: 'Phantom', avatar: 'Q', change: 'down' }
  ],

  clans: [
    { id: 'phantom', name: 'Phantom', members: 4230, score: 1250000, color: '#8b5cf6', rank: 1 },
    { id: 'shadow', name: 'Shadow', members: 3890, score: 1120000, color: '#3b82f6', rank: 2 },
    { id: 'viper', name: 'Viper', members: 4427, score: 980000, color: '#10b981', rank: 3 }
  ],

  activity: [
    { id: 1, user: 'ProGamer_X', action: 'поставил 500 монет', time: '2 мин назад' },
    { id: 2, user: 'SkinMaster99', action: 'присоединился к розыгрышу Discord', time: '5 мин назад' },
    { id: 3, user: 'CryptoKing', action: 'выиграл приз "VIP набор"', time: '18 мин назад' },
    { id: 4, user: 'NightOwl', action: 'поставил 1,200 монет', time: '32 мин назад' },
    { id: 5, user: 'ShadowBlade', action: 'выполнил задание Twitter/X', time: '1ч назад' },
    { id: 6, user: 'AceStrike', action: 'присоединился по реферальной ссылке', time: '2ч назад' }
  ],

  bonuses: [
    { id: 1, title: 'Welcome Bonus', type: 'welcome', amount: '100% up to $500', description: 'Получите бонус на первый депозит' },
    { id: 2, title: 'Weekly Cashback', type: 'cashback', amount: '15%', description: 'Еженедельный рейкбек на проигрыши' },
    { id: 3, title: 'Free Spins Pack', type: 'freespins', amount: '50 FS', description: 'Бесплатные вращения в слотах' },
    { id: 4, title: 'Reload Bonus', type: 'reload', amount: '50% up to $200', description: 'Бонус на повторный депозит' }
  ],

  partners: [
    { id: 1, name: 'Stake', commission: '45%', description: 'Ведущая крипто-букмекерская платформа' },
    { id: 2, name: 'BC.Game', commission: '50%', description: 'Крипто-казино с оригинальными играми' },
    { id: 3, name: 'Roobet', commission: '40%', description: 'Популярная игровая платформа' },
    { id: 4, name: 'Rollbit', commission: '55%', description: 'Инновационная крипто-игра' }
  ],

  testimonials: [
    { id: 1, name: 'Alex_Killer', role: 'Топ-10 лидерборда', avatar: 'AK', stars: 5, text: 'Лучшее киберспортивное сообщество, в котором я был. Классные бонусы, активные игроки и реальные призы в лидерборде.' },
    { id: 2, name: 'NightShade', role: 'Капитан клана Phantom', avatar: 'NS', stars: 5, text: 'Клановые войны — это огонь. Наша команда выигрывает уже 3 недели подряд. Атмосфера в Discord просто сумасшедшая.' },
    { id: 3, name: 'CryptoKing', role: 'Участник с 2025', avatar: 'CK', stars: 4.5, text: 'Заработал уже больше $500 на бонусах и розыгрышах. Всё честно, выводят быстро. Рекомендую всем друзьям.' }
  ],

  faq: [
    { id: 1, q: 'Как начать участвовать в розыгрышах?', a: 'Просто зарегистрируйтесь на платформе и присоединитесь к любому активному розыгрышу на странице «Бонусы». Участие бесплатно для всех игроков.' },
    { id: 2, q: 'Как работает клановая система?', a: 'Вы можете выбрать один из трёх кланов. Каждую неделю кланы соревнуются между собой — чем больше XP зарабатывает клан, тем выше его позиция и больше призов для участников.' },
    { id: 3, q: 'Можно ли сменить клан?', a: 'Да, сменить клан можно раз в 30 дней. Имейте в виду, что при смене клана ваш личный XP сохраняется, но вклад в старый клан обнуляется.' },
    { id: 4, q: 'Как выводить выигранные призы?', a: 'Призы зачисляются на ваш внутренний баланс, откуда их можно вывести на крипто-кошелёк или использовать в партнёрских проектах. Минимальная сумма вывода — $10.' },
    { id: 5, q: 'Это бесплатно?', a: 'Да, регистрация и участие в сообществе абсолютно бесплатны. Мы зарабатываем на партнёрских комиссиях, когда вы используете бонусы наших партнёров.' }
  ]
};

class DataStore {
  constructor() {
    this.data = MOCK_DATA;
    this.listeners = {};
  }

  on(event, callback) {
    if (!this.listeners[event]) this.listeners[event] = [];
    this.listeners[event].push(callback);
  }

  emit(event, payload) {
    if (this.listeners[event]) {
      this.listeners[event].forEach(cb => cb(payload));
    }
  }

  getStats() {
    return this.data.stats;
  }

  getGiveaways() {
    return this.data.giveaways.filter(g => g.status === 'active');
  }

  getLeaderboard(limit = 10) {
    return this.data.leaderboard.slice(0, limit);
  }

  getClans() {
    return this.data.clans;
  }

  getActivity(limit = 6) {
    return this.data.activity.slice(0, limit);
  }

  getBonuses() {
    return this.data.bonuses;
  }

  getPartners() {
    return this.data.partners;
  }

  getTestimonials() {
    return this.data.testimonials;
  }

  getFAQ() {
    return this.data.faq;
  }

  addGiveaway(giveaway) {
    const newGiveaway = {
      id: 'g' + Date.now(),
      status: 'active',
      participants: 0,
      ...giveaway
    };
    this.data.giveaways.push(newGiveaway);
    this.emit('giveaways:update', this.data.giveaways);
    return newGiveaway;
  }

  deleteGiveaway(id) {
    this.data.giveaways = this.data.giveaways.filter(g => g.id !== id);
    this.emit('giveaways:update', this.data.giveaways);
  }
}

window.DataStore = new DataStore();
