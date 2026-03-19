'use strict';

/* ── Attributes ─────────────────────────────── */
// 相克: 火→地→風→水→火
const ATTR_COLORS = { none:0x888888, fire:0xff4422, water:0x4499ff, earth:0x88bb33, wind:0x99ffaa };
// ゲージ充填色（鮮やか）
const ATTR_FILL  = { none:0x2299ff, fire:0xff5533, water:0x22aaff, earth:0x99dd33, wind:0x55ffcc };
const ATTR_NAMES  = { none:'－', fire:'火', water:'水', earth:'地', wind:'風' };
const ATTR_BEATS  = { fire:'earth', earth:'wind', wind:'water', water:'fire' };
// 有利=等倍(1.0)、中立=0.75、不利=0.5
function attrMult(atk, def) {
  if (!def || def === 'none') return 1.0;
  if (!atk || atk === 'none') return 0.75;
  if (ATTR_BEATS[atk] === def) return 1.0;   // 有利
  if (ATTR_BEATS[def] === atk) return 0.5;   // 不利
  return 0.75;                                // 中立
}

/* ── Charms ─────────────────────────────────── */
const CHARM_DEFS = [
  { id:'water',   name:'水弾符', desc:'最も近い敵に水弾を放つ',      dmg:35, chargeMs:2500, attr:'water' },
  { id:'pierce',  name:'貫通符', desc:'先頭の敵を狙うビームを放つ',  dmg:60, chargeMs:4000, attr:'wind'  },
  { id:'scatter', name:'拡散符', desc:'扇状に拡散弾5発を放つ',       dmg:28, chargeMs:2800, attr:'fire'  },
  { id:'rapid',   name:'連射符', desc:'素早く5連射（威力低め）',     dmg:12, chargeMs:900,  attr:'earth' },
];
