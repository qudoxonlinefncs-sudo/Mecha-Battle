# Mecha-Battle

Competitive tactical 3D shooter with a unique **shard** system.

**Version:** V16.1  
**Stack:** Three.js 0.128.0 · Vite · TypeScript

## Run with Vite

```bash
npm install
npm run dev
```

Open the URL shown by Vite (default http://localhost:5173).

## Native ES modules fallback (no Vite)

```bash
python3 -m http.server 8790
```

Open http://localhost:8790/index.native.html

## Project layout

- `src/main.ts` — entry (Vite)
- `src/core/Config.ts` — constants, 23 shards, weapons, difficulty
- `src/game/GameApp.ts` — game runtime
- `src/styles/main.css` — UI styles
- `index.html` — shell + menu/HUD

## Notes

- Three.js via npm (`three@0.128.0`) or path alias in `vite.config.ts`.
- Shield shard is removed. Dark Lord is listed; full ability logic still TBD.
- Single-file V15 backup is not included in this repo.

## License

Source provided as-is for development of Mecha-Battle.
