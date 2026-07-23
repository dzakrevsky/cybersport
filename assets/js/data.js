const API_SOURCES = [
  {
    id: 'unbox',
    name: 'Unbox.gg',
    proxyUrl: '/api/leaderboard',
    externalUrl: 'https://api.unbox.gg/affiliates/public/applicants',
    token: 'cae12055-d7e8-4fac-8f90-68ddae6f1645',
    enabled: true
  }
];

const API_CONFIG = {
  leaderboardTake: 10,
  cacheMs: 60000,
  weeklyPrizePool: 100,
  periodDays: 7
};

const MOCK_DATA = {
  stats: {
    players: 12547,
    bonusesPaid: 50000,
    totalEarned: 50000,
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
      description: 'Prize pool $5,000. Join the weekly races and claim your spot on the leaderboard.',
      prize: '$5,000',
      endDate: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000 + 14 * 60 * 60 * 1000),
      participants: 342
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
    { id: 1, user: 'ProGamer_X', action: 'wagered 500 coins', time: '2 min ago' },
    { id: 2, user: 'SkinMaster99', action: 'joined the Discord giveaway', time: '5 min ago' },
    { id: 3, user: 'CryptoKing', action: 'won the "VIP Pack" prize', time: '18 min ago' },
    { id: 4, user: 'NightOwl', action: 'wagered 1,200 coins', time: '32 min ago' },
    { id: 5, user: 'ShadowBlade', action: 'completed the Twitter/X task', time: '1h ago' },
    { id: 6, user: 'AceStrike', action: 'joined via referral link', time: '2h ago' }
  ],

  bonuses: [
    { id: 1, title: 'Welcome Bonus', type: 'welcome', amount: '100% up to $500', description: 'Get a bonus on your first deposit' },
    { id: 2, title: 'Weekly Cashback', type: 'cashback', amount: '15%', description: 'Weekly rakeback on your losses' },
    { id: 3, title: 'Free Spins Pack', type: 'freespins', amount: '50 FS', description: 'Free spins on selected slots' },
    { id: 4, title: 'Reload Bonus', type: 'reload', amount: '50% up to $200', description: 'Bonus on your reload deposit' }
  ],

  partners: [
    { id: 1, name: 'Stake', commission: '45%', description: 'Leading crypto sportsbook platform' },
    { id: 2, name: 'BC.Game', commission: '50%', description: 'Crypto casino with original games' },
    { id: 3, name: 'Roobet', commission: '40%', description: 'Popular gaming platform' },
    { id: 4, name: 'Rollbit', commission: '55%', description: 'Innovative crypto game' }
  ],

  testimonials: [
    { id: 1, name: 'Alex_Killer', role: 'Top-5 Leaderboard', avatar: 'AK', stars: 5, text: 'The best esports community I have ever been part of. Great bonuses, active players and real prizes on the leaderboard.' },
    { id: 2, name: 'NightShade', role: 'Weekly Race Winner', avatar: 'NS', stars: 5, text: 'Won the weekly race and got the prize sent straight to the site as tips. Fair and instant. The Discord atmosphere is just crazy.' },
    { id: 3, name: 'CryptoKing', role: 'Member since 2025', avatar: 'CK', stars: 5, text: 'I have already earned more than $500 in bonuses and giveaways. Prizes arrive as tips on partner sites with no delays. I recommend it to all my friends.' }
  ],

  faq: [
    { id: 1, q: 'How do I start joining giveaways?', a: 'Just sign up on the platform and join any active giveaway on the "Bonuses" page. Participation is free for all players.' },
    { id: 2, q: 'How are prizes paid out?', a: 'All prizes are paid out as tips on the partner platform sites. Winnings are instantly credited to your account and available for playing or withdrawal.' },
    { id: 3, q: 'What is the weekly race?', a: 'Every week the top-5 players on the leaderboard split a $100 prize pool. The more you play through partner links, the higher your rating. The race resets every 7 days.' },
    { id: 4, q: 'How do I withdraw my winnings?', a: 'Prizes are credited as tips to your partner platform account, where they can be withdrawn to a crypto wallet or used for playing. The minimum withdrawal amount depends on the platform rules.' },
    { id: 5, q: 'Is it free?', a: 'Yes, registration and community participation are absolutely free. We earn from affiliate commissions when you use our partners bonuses.' }
  ]
};

class DataStore {
  constructor() {
    this.data = MOCK_DATA;
    this.listeners = {};
    this.cache = {
      leaderboard: null,
      leaderboardExpiry: 0
    };
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
    if (this.cache.allTimeStats) {
      const s = this.cache.allTimeStats;
      // If the cached stats look like a zero-value fallback, prefer mock stats.
      if (s.totalWagered > 0 || s.totalEarned > 0 || s.players > this.data.leaderboard.length) {
        return s;
      }
    }
    if (this.cache.leaderboard && this.cache.leaderboard.list.length > 0) {
      return this.getComputedStats();
    }
    return this.data.stats;
  }

  getComputedStats() {
    if (this.cache.allTimeStats) {
      return this.cache.allTimeStats;
    }
    if (!this.cache.leaderboard || !this.cache.leaderboard.list.length) {
      return this.data.stats;
    }
    return this._computeStatsFromResult(this.cache.leaderboard);
  }

  _computeStatsFromResult(result) {
    const list = result.list;
    if (!list || !list.length) return this.data.stats;
    const totalWagered = list.reduce((sum, p) => sum + (p.wagered || 0), 0);
    const totalEarned = list.reduce((sum, p) => sum + (p.earned || 0), 0);
    const activePlayers = list.filter(p => p.active).length;
    const totalCount = result.totalCount || list.length;

    return {
      players: totalCount,
      totalWagered: Math.round(totalWagered),
      totalEarned: Math.round(totalEarned),
      activePlayers: activePlayers,
      activeGiveaways: this.data.giveaways.filter(g => g.status === 'active').length,
      bonusesPaid: Math.round(totalEarned),
      clans: this.data.clans.length,
      active247: true,
      discordMembers: Math.round(totalCount * 0.34),
      avgWagered: Math.round(totalWagered / list.length)
    };
  }

  async fetchStats() {
    const allTimeFrom = new Date('2020-01-01T00:00:00Z');
    const now = new Date();
    return this.fetchLeaderboard({ from: allTimeFrom, to: now, take: 100, useCache: true });
  }

  getGiveaways() {
    return this.data.giveaways.filter(g => g.status === 'active');
  }

  async fetchLeaderboard(options = {}) {
    const {
      take = API_CONFIG.leaderboardTake,
      skip = 0,
      order = 'DESC',
      useCache = true,
      cacheMs = API_CONFIG.cacheMs,
      from: customFrom,
      to: customTo
    } = options;

    const isAllTime = customFrom !== undefined;
    const cacheKey = isAllTime ? 'allTimeLeaderboard' : 'leaderboard';
    const expiryKey = isAllTime ? 'allTimeLeaderboardExpiry' : 'leaderboardExpiry';

    const now = Date.now();
    if (useCache && this.cache[cacheKey] && now < this.cache[expiryKey]) {
      return this.cache[cacheKey];
    }

    const sources = API_SOURCES.filter(s => s.enabled);
    const nowDate = new Date();
    const fromDate = customFrom ? new Date(customFrom) : nowDate;
    const toDate = customTo ? new Date(customTo) : new Date(nowDate.getTime() + 7 * 24 * 60 * 60 * 1000);

    const results = await Promise.allSettled(
      sources.map(source => this._fetchSource(source, { take, skip, order, from: fromDate, to: toDate }))
    );

    const successResults = results
      .filter(r => r.status === 'fulfilled')
      .map(r => r.value);

    if (successResults.length === 0) {
      console.warn('All API sources failed, using mock data');
      const fallback = {
        totalCount: this.data.leaderboard.length,
        filteredCount: this.data.leaderboard.length,
        list: this.data.leaderboard,
        isFallback: true
      };
      // Cache fallback lightly but don't let it overwrite real all-time stats.
      this.cache[cacheKey] = fallback;
      this.cache[expiryKey] = now + 15000;
      if (isAllTime) {
        this.cache.allTimeStats = this.data.stats;
      }
      return fallback;
    }

    const merged = this._mergeLeaderboards(successResults, { take, skip, order });

    this.cache[cacheKey] = merged;
    this.cache[expiryKey] = now + cacheMs;
    this.cache.sourceCount = successResults.length;
    this.cache.totalSources = sources.length;

    if (isAllTime) {
      this.cache.allTimeStats = this._computeStatsFromResult(merged);
    }

    this.emit('leaderboard:update', merged);
    return merged;
  }

  async _fetchSource(source, { take, skip, order, from, to }) {
    const params = new URLSearchParams({
      token: source.token,
      skip: String(skip),
      take: String(take),
      order,
      from: from.toISOString(),
      to: to.toISOString()
    });

    const query = params.toString();
    let res;

    try {
      res = await fetch(`${source.proxyUrl}?${query}`);
      if (!res.ok) throw new Error(`Proxy error: ${res.status}`);
    } catch (proxyErr) {
      res = await fetch(`${source.externalUrl}?${query}`);
      if (!res.ok) throw new Error(`API error: ${res.status}`);
    }

    const data = await res.json();
    return {
      source: source.id,
      sourceName: source.name,
      totalCount: data.totalCount,
      filteredCount: data.filteredCount,
      list: data.list.map((item, index) => ({
        source: source.id,
        sourceName: source.name,
        rank: skip + index + 1,
        username: item.user.username,
        avatarUrl: item.user.avatarUrl,
        level: item.user.level,
        levelTier: item.user.levelTier,
        wagered: parseFloat(item.wagered),
        earned: parseFloat(item.earned),
        totalDeposit: parseFloat(item.totalDeposit),
        withdraw: parseFloat(item.withdraw),
        active: item.active,
        firstDepositor: item.firstDepositor,
        badges: item.user.badges || [],
        isBot: item.user.isBot
      }))
    };
  }

  _mergeLeaderboards(sourceResults, { take, skip, order }) {
    const userMap = new Map();
    let totalCount = 0;
    let filteredCount = 0;

    sourceResults.forEach(result => {
      totalCount += result.totalCount;
      filteredCount += result.filteredCount;
      result.list.forEach(player => {
        const key = `${player.source}:${player.username}`;
        userMap.set(key, player);
      });
    });

    const mergedList = Array.from(userMap.values()).sort((a, b) => {
      return order === 'DESC' ? b.wagered - a.wagered : a.wagered - b.wagered;
    }).map((player, index) => ({
      ...player,
      rank: skip + index + 1
    }));

    return {
      totalCount,
      filteredCount,
      list: mergedList.slice(0, take),
      sourceCount: sourceResults.length,
      totalSources: API_SOURCES.filter(s => s.enabled).length
    };
  }

  getWeeklyPrizePool() {
    return API_CONFIG.weeklyPrizePool;
  }

  getPeriodEnd() {
    const periodMs = API_CONFIG.periodDays * 24 * 60 * 60 * 1000;
    // Anchor: Monday 00:00:00 UTC of the week when the race starts.
    // This keeps the period static across page reloads and tab switches.
    const anchor = new Date('2026-07-20T00:00:00Z').getTime();
    const now = Date.now();
    const periodsPassed = Math.floor((now - anchor) / periodMs);
    const nextEnd = anchor + (periodsPassed + 1) * periodMs;
    return new Date(nextEnd);
  }

  getLeaderboard(limit = 10) {
    if (this.cache.leaderboard) {
      return this.cache.leaderboard.list.slice(0, limit);
    }
    return this.data.leaderboard.slice(0, limit);
  }

  getClans() {
    return this.data.clans;
  }

  getActivity(limit = 6) {
    if (this.cache.leaderboard && this.cache.leaderboard.list.length > 0) {
      const list = this.cache.leaderboard.list.slice(0, limit);
      const actions = [
        (p) => `wagered $${Math.round(p.wagered || 0).toLocaleString('en-US')}`,
        (p) => `reached level ${p.level || 1}`,
        (p) => `earned $${Math.round(p.earned || 0).toLocaleString('en-US')}`,
        (p) => `${p.active ? 'active player' : 'new member'}`,
        (p) => `in top-${p.rank} of the leaderboard`,
        (p) => `received a $${Math.round((p.earned || 0) * 0.1).toLocaleString('en-US')} bonus`
      ];
      return list.map((p, i) => ({
        id: p.id || i,
        user: p.username,
        action: actions[i % actions.length](p),
        time: `${Math.floor(Math.random() * 60) + 1} min ago`
      }));
    }
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

  updateGiveaway(id, updates) {
    const index = this.data.giveaways.findIndex(g => g.id === id);
    if (index === -1) return null;
    this.data.giveaways[index] = {
      ...this.data.giveaways[index],
      ...updates
    };
    this.emit('giveaways:update', this.data.giveaways);
    return this.data.giveaways[index];
  }

  deleteGiveaway(id) {
    this.data.giveaways = this.data.giveaways.filter(g => g.id !== id);
    this.emit('giveaways:update', this.data.giveaways);
  }
}

window.DataStore = new DataStore();
