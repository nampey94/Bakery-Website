# The Bake — Base44 Dev Environment

## Overview
A premium bakery website built with Vite + React 18. Single-page application with editorial design.

## Stack
- **Frontend:** Vite 6, React 18
- **Package manager:** npm
- **Dev server:** `vite dev` on port 3000 (binds 0.0.0.0)

## Running
```bash
docker compose -f docker-compose.base44.yml up -d
```
The compose file installs npm deps on startup and runs the Vite dev server with live reload.

## Project structure
- `src/App.jsx` — main app, assembles all sections
- `src/components/` — all UI components (one .jsx + .css per component)
- `src/context/CartContext.jsx` — cart state provider
- `src/hooks/useReveal.js` — scroll-reveal IntersectionObserver hook
- `src/data/products.js` — product, category, and review data
- `src/styles/global.css` — CSS variables, resets, shared utilities

## Key conventions
- CSS variables defined in `global.css` (`--font-serif`, `--bg-page`, etc.)
- Fonts: Instrument Serif (display) + Inter (sans) loaded from Google Fonts in index.html
- Images use Unsplash URLs with query params for sizing/quality
- All components are functional with hooks; no external UI libraries

## Verify
- App serves at http://localhost:3000
- Healthcheck checks for `id="root"` in served HTML
