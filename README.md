# Mecha-Battle

Competitive tactical 3D shooter with a unique **shard** system.

**Version:** V16.1  
**Stack:** Three.js 0.128.0 · Vite · TypeScript

**Repository:** https://github.com/qudoxonlinefncs-sudo/Mecha-Battle

## Status of this GitHub upload

Core project files are on GitHub:
- `package.json`, `tsconfig.json`, `vite.config.ts`
- `index.html`, `src/main.ts`, `src/core/Config.ts`

Still add from the local V16.1 package if missing:
- `src/game/GameApp.ts` (main game runtime)
- `src/styles/main.css`
- optional native fallback files (`GameApp.js`, `index.native.html`)

Full local package path: `mecha_battle_v16_1/` or archive `mecha_battle_v16_1.zip`.

## Run with Vite

```bash
git clone https://github.com/qudoxonlinefncs-sudo/Mecha-Battle.git
cd Mecha-Battle
# copy GameApp.ts + main.css from your V16.1 folder if needed
npm install
npm run dev
```

## Notes

- 23 shards in Config (including Dark Lord). Shield removed.
- Three.js: `npm install three@0.128.0`
- Gameplay ported from V15; some legendary abilities still TBD.
