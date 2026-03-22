'use strict';

/* ── エンドロールクレジット定義 ─────────────── */
const CREDIT_ENTRIES = [
  ['企画',     'Mushyn Reagan'],
  ['指揮',     'Mushyn Reagan'],
  ['脚本',     'Alfonso Rémy Beaumont\nMushyn Reagan'],
  ['意匠',     'Mushyn Reagan'],
  ['音楽',     'Mushyn Reagan'],
  ['効果音',   'OtoLogic'],
  ['指示立案', 'Alfonso Rémy Beaumont'],
  ['制作進行', 'Alfonso Rémy Beaumont'],
  ['実装・仕込', 'Mushyn Reagan\n偽咲澤爻徒'],
  ['管理',     '偽咲澤爻徒'],
  ['制作・発行', '華耀東夷堂'],
  ['原案着想', '芥川龍之介「桃太郎」'],
];

/* ══════════════════════════════════════════════ */
class EndingScene extends Phaser.Scene {
  constructor() { super({ key: 'EndingScene' }); }

  preload() {
    this.load.audio('bgm_warabeuta', 'audio/warabeuta.mp3');
  }

  create() {
    this._skipped = false;

    // 黒背景
    this.add.rectangle(W/2, H/2, W, H, 0x000000).setDepth(0);

    // BGM（ループなし・暗転後から再生）
    const bgmVol = loadOpts().bgmVol;
    this._bgm = null;
    if (bgmVol > 0 && this.cache.audio.has('bgm_warabeuta')) {
      this._bgm = this.sound.add('bgm_warabeuta', { volume: bgmVol, loop: false });
      this._bgm.play();
    }

    // スクロールコンテナ構築
    const container = this.add.container(0, H).setDepth(1);
    let cy = 60; // 先頭余白

    const addRole = (txt) => {
      container.add(this.add.text(W/2, cy, txt, {
        fontSize: '12px', fontFamily: '"Yuji Syuku", serif',
        color: '#888888', align: 'center',
      }).setOrigin(0.5, 0));
      cy += 22;
    };

    const addNames = (txt) => {
      container.add(this.add.text(W/2, cy, txt, {
        fontSize: '20px', fontFamily: '"Yuji Syuku", serif',
        color: '#ffffff', align: 'center',
      }).setOrigin(0.5, 0));
      cy += txt.split('\n').length * 29;
    };

    // クレジット行
    for (const [role, names] of CREDIT_ENTRIES) {
      addRole(role);
      addNames(names);
      cy += 38; // エントリ間スペース
    }

    cy += 90; // 区切り余白

    // お礼メッセージ
    container.add(this.add.text(W/2, cy, '最後まで遊んでくれてありがとうございました。', {
      fontSize: '15px', fontFamily: '"Yuji Syuku", serif',
      color: '#cccccc', align: 'center', wordWrap: { width: W - 80 },
    }).setOrigin(0.5, 0));
    cy += 56;

    cy += 70;

    // 百鬼夜行モード解放テキスト
    // TODO: clearedOnce フラグ実装後は if (clearedOnce) { ... } で囲む
    // const clearedOnce = false; // 初回クリアフラグ（未実装・プレースホルダー）
    container.add(this.add.text(W/2, cy, '百鬼夜行モードが解放されました。', {
      fontSize: '16px', fontFamily: '"Yuji Syuku", serif',
      color: '#ffcc44', align: 'center',
    }).setOrigin(0.5, 0));
    cy += 50;

    cy += Math.round(H * 0.65); // 末尾余白（最後の項目が画面外へ抜けるまで）

    // スクロールtween: container.y を H → -cy（60px/秒）
    const duration = Math.round((H + cy) / 0.060);
    this._scrollTween = this.tweens.add({
      targets: container, y: -cy,
      duration, ease: 'Linear',
      onComplete: () => this._finish(),
    });

    // SKIPボタン（常時最前面・タップ判定エリア外は無効）
    this.add.rectangle(44, 24, 68, 30, 0x000000, 0.7)
      .setStrokeStyle(1, 0x555555).setDepth(10);
    this.add.text(44, 24, 'SKIP', {
      fontSize: '13px', fontFamily: 'Arial', color: '#999999',
    }).setOrigin(0.5).setDepth(10);

    // 入力：SKIPボタン領域のみ受付
    this.input.on('pointerdown', p => {
      if (p.x < 78 && p.y < 39) this._skip();
    });
  }

  _skip() {
    if (this._skipped) return;
    this._skipped = true;
    this._scrollTween?.stop();
    if (this._bgm?.isPlaying) {
      this.tweens.add({
        targets: this._bgm, volume: 0, duration: 600,
        onComplete: () => { this._bgm.stop(); this.scene.start('TitleScene'); },
      });
    } else {
      this.scene.start('TitleScene');
    }
  }

  _finish() {
    if (this._skipped) return;
    this._skipped = true;
    this.scene.start('TitleScene');
  }
}
