'use strict';

/* ── Oni ────────────────────────────────────── */
const ONI_HP   = 2000, /* TODO: バランス調整前仮値 元: 160 */ ONI_SPD  = 55, ONI_DMG  = 15;
const ONI_ATK  = 2000, ONI_RNG = 75, ONI_INT  = 2000;
const ONI_WAVE = 10,   ONI_W   = 38, ONI_H    = 54;
const ONI_BW   = 38,   ONI_BH  = 5;

/* ── Named ──────────────────────────────────── */
const NM_HP = 5000, /* TODO: バランス調整前仮値 元: 480 */ NM_SPD = 35, NM_DMG = 25;

/* ── Ogre (WAVE8-9 中ボス) ───────────────────── */
const OGRE_HP = 10000, /* TODO: バランス調整前仮値 元: 400 */ OGRE_SPD = 30, OGRE_DMG = 28;

/* ── Boss ───────────────────────────────────── */
const BOSS_HP = 20000, /* TODO: バランス調整前仮値 元: 800 */ BOSS_SPD = 20, BOSS_DMG = 35;
const BOSS_NAMES_BY_CHAPTER = ['温羅', '茨木童子', '酒呑童子', '大嶽丸', '空無童子'];

/* ── Bullet ─────────────────────────────────── */
const BUL_DMG = 20, BUL_MS = 1300, BUL_SPD = 300, BUL_RNG = 320;

/* ── Slash ──────────────────────────────────── */
const SL_BASE = 8, COMBO_STEP = 0.1, COMBO_MAX = 1.3, COMBO_RST = 1500;
const GAUGE_MAX = 100, GAUGE_HIT = 5, SUPER_DMG = 120;

/* ── EXP ────────────────────────────────────── */
const EXP_G = 10, EXP_N = 30, EXP_B = 100;
