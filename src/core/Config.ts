/** Mecha-Battle V16.1 — constants and static data */

export const ARENA = 50;
export const ROUND_TIME = 60;
export const MATCH_WINS = 10;
export const START_MONEY = 800;
export const KILL_REWARD = 300;
export const WIN_REWARD = 2000;
export const LOSS_BASE = 1000;
export const LOSS_STREAK_BONUS = 200;
export const BASE_HP = 100;
export const BASE_BULLET = 10;
export const BASE_RATE = 5;
export const BASE_HEADSHOT = 2.5;
export const BOMB_TIME = 40;
export const ARMOR_CAP = 0.75;
export const PITCH_MIN = -0.5;
export const PITCH_MAX = 0.4;

/** Parameters marked TBD require design approval — not final balance. */
export const SHARD_TBD = {
  damageHeadBonusPct: 0.30,
  boneArmorPct: 0.20,
  earthArmorPct: 0.15,
  earthSlowSelfPct: 0.10,
  lightningStorePct: 0.25,
  lightningCapPerStack: 40,
  windLowHpThreshold: 0.30,
  windBoostPct: 0.25,
  kingPulseInterval: 8,
  kingRevealDuration: 1.2,
  kingRevealRadius: 50,
  darkLordBlindBaseDuration: 2.5,
  darkLordSpreadRadius: 8,
  darkLordChargePerDamage: 0.02,
  darkLordMaxStacksMult: 1.5,
};

export const SHARDS: Record<string, { r: string; p: number; n: string; c: string; d: string }> = {
  fire: { r: 'Обычный', p: 100, n: 'Огонь', c: '#f84', d: '4 урона/с × 3с (12 HP DoT)' },
  poison: { r: 'Обычный', p: 100, n: 'Яд', c: '#8c4', d: '3 урона/с × 4с, сквозь броню' },
  damage: { r: 'Обычный', p: 100, n: 'Урон', c: '#f44', d: 'Бонус только к попаданию в голову (TBD %)' },
  bone: { r: 'Обычный', p: 100, n: 'Кость', c: '#cc9', d: 'Снижение входящего урона (TBD %)' },
  blood: { r: 'Обычный', p: 150, n: 'Кровь', c: '#e45', d: '4 HP/с вне боя, 1.5 HP/с в бою' },
  earth: { r: 'Обычный', p: 200, n: 'Земля', c: '#a86', d: 'Временно +защита, −скорость (TBD)' },
  lightning: { r: 'Обычный', p: 250, n: 'Молния', c: '#ff4', d: 'Копит урон в шкалу; при 100% следующий удар выпускает заряд (TBD)' },
  ice: { r: 'Обычный', p: 200, n: 'Лёд', c: '#8ef', d: 'Копит заморозку; 100% → стан 8с, иммун 6с' },
  wind: { r: 'Обычный', p: 150, n: 'Ветер', c: '#aef', d: 'Ускорение при низком HP (TBD)' },
  shadow: { r: 'Обычный', p: 300, n: 'Тень', c: '#88a', d: 'Невидимость 2.5с +5% скорости' },
  leech: { r: 'Обычный', p: 250, n: 'Похищение', c: '#c4a', d: '12% урона в HP, макс 40 HP/с' },
  chaos: { r: 'Обычный', p: 300, n: 'Хаос', c: '#f0a', d: '2 положит. + 2 отриц. эффекта (активация)' },
  gravity: { r: 'Редкий', p: 500, n: 'Гравитация', c: '#a6f', d: 'Подъём цели, −способности 4с, −10% скорости' },
  beacon: { r: 'Редкий', p: 550, n: 'Маяк', c: '#fc6', d: 'Раскрывает врагов 6с, R20м, КД 25с' },
  echo: { r: 'Редкий', p: 600, n: 'Эхо', c: '#6cf', d: 'Показывает 3с до смерти врага, КД 35с' },
  memory: { r: 'Редкий', p: 550, n: 'Память', c: '#caf', d: 'Силуэты убийц союзников 4с, R25м' },
  resonance: { r: 'Редкий', p: 700, n: 'Резонанс', c: '#ff8', d: '+12% к эффектам двух других осколков' },
  impulse: { r: 'Редкий', p: 450, n: 'Импульс', c: '#fa6', d: 'Отброс 1.5м +5 урона' },
  monsoon: { r: 'Редкий', p: 500, n: 'Муссон', c: '#4bd', d: '−25% скорости врагов R8м на 4с' },
  absorb: { r: 'Эпический', p: 1200, n: 'Поглощение', c: '#8f8', d: 'Смягчает часть входящего урона (механика уточняется)' },
  mirage: { r: 'Эпический', p: 1400, n: 'Мираж', c: '#adf', d: 'Копия-приманка 30 HP на 2.5с' },
  king: { r: 'Легендарный', p: 2500, n: 'Король', c: '#fd4', d: 'Импульсное обнаружение врагов через стены (TBD)' },
  darkLord: { r: 'Легендарный', p: 2500, n: 'Тёмный лорд', c: '#a0f', d: 'Контр Короля: снаряд ослепления, шкала заряда (TBD)' },
};

export const WEAPONS = {
  pistol: { id: 'pistol', n: 'Пистолет', p: 0, damage: 10, fireRate: 5, headshotMult: 2.5, desc: 'Базовое оружие' },
  rifle: { id: 'rifle', n: 'Винтовка', p: 2700, damage: 16, fireRate: 6.5, headshotMult: 2.8, desc: 'Выше урон и скорострельность' },
  smg: { id: 'smg', n: 'ПП', p: 1500, damage: 11, fireRate: 9, headshotMult: 2.2, desc: 'Высокая скорострельность' },
};

export const DIFFICULTY = {
  easy: { aimSpread: 0.22, shootChance: 0.28, reaction: 0.55, name: 'Лёгкие' },
  medium: { aimSpread: 0.12, shootChance: 0.42, reaction: 0.45, name: 'Средние' },
  hard: { aimSpread: 0.06, shootChance: 0.58, reaction: 0.35, name: 'Сложные' },
};
