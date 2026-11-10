/**
 * Mecha-Battle V16 — game runtime (ported from V15 monolith).
 * Behavior preserved; balance unchanged in Stage B.
 * Full source uploaded — if this placeholder remains, replace with complete GameApp.ts from mecha_battle_v16_1.zip
 */
import * as THREE from 'three';
import {
  ARENA, ROUND_TIME, MATCH_WINS, START_MONEY, KILL_REWARD,
  WIN_REWARD, LOSS_BASE, LOSS_STREAK_BONUS,
  BASE_HP, BASE_BULLET, BASE_RATE, BASE_HEADSHOT,
  BOMB_TIME, ARMOR_CAP, PITCH_MIN, PITCH_MAX,
  SHARDS, WEAPONS, DIFFICULTY,
} from '../core/Config';

export function startGame(): void {
  console.error('GameApp.ts incomplete on GitHub. Copy full file from mecha_battle_v16_1.zip into src/game/GameApp.ts');
  const el = document.getElementById('mainmenu');
  if (el) {
    const note = document.createElement('div');
    note.style.cssText = 'position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:#422;color:#fcc;padding:12px 20px;border-radius:8px;z-index:9999;font-size:14px';
    note.textContent = 'Нужен полный GameApp.ts из архива mecha_battle_v16_1.zip';
    document.body.appendChild(note);
  }
}
