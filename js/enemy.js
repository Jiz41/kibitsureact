'use strict';

/* ── Oni ────────────────────────────────────── */
const ONI_HP   = 20,  /* TODO: 本番値に戻す 本番: 160 */ ONI_SPD  = 55, ONI_DMG  = 8; /* TODO: バランス調整中 元: 15 */
const ONI_ATK  = 2000, ONI_RNG = 75, ONI_INT  = 2000;
const ONI_WAVE = 10,   ONI_W   = 38, ONI_H    = 54;
const ONI_BW   = 38,   ONI_BH  = 5;

/* ── Named ──────────────────────────────────── */
const NM_HP = 50, /* TODO: 本番値に戻す 本番: 480 */ NM_SPD = 35, NM_DMG = 12; /* TODO: バランス調整中 元: 25 */

/* ── Ogre (WAVE8-9 中ボス) ───────────────────── */
const OGRE_HP = 80, /* TODO: 本番値に戻す 本番: 800 */ OGRE_SPD = 30, OGRE_DMG = 15; /* TODO: バランス調整中 元: 30 */

/* ── Boss ───────────────────────────────────── */
const BOSS_HP = 3000, BOSS_SPD = 15, BOSS_DMG = 50;
const BOSS_NAMES_BY_CHAPTER = ['温羅', '茨木童子', '酒呑童子', '大嶽丸', '空無童子'];

/* ── Bullet ─────────────────────────────────── */
const BUL_DMG = 20, BUL_MS = 1300, BUL_SPD = 300, BUL_RNG = 320;

/* ── Slash ──────────────────────────────────── */
const SL_BASE = 10, COMBO_STEP = 0.1, COMBO_MAX = 1.3, COMBO_RST = 1500;
const GAUGE_MAX = 100, GAUGE_HIT = 1, SUPER_DMG = 120;

/* ── EXP ────────────────────────────────────── */
const EXP_G = 10, EXP_N = 30, EXP_B = 150;
