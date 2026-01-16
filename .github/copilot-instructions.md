# Flesspessa: AI Coding Agent Instructions

## Project Overview
**Flesspessa** is a browser-based flag learning game built as a Progressive Web App. Players match country flags to names across escalating difficulty levels (Easy, Normal, Hard, Super Hard), earning coins to unlock new features through a shop system. The codebase uses TypeScript, esbuild for bundling, and localStorage for persistence.

## Architecture & Key Components

### Core Game Flow
- **Entry Point**: `index.html` → `scripts/index.ts` (re-exports all modules) → `dist/bundle.js` (IIFE bundle)
- **Multiple Game Modes**:
  - `game.html`: Main flag-matching game (uses `App` class)
  - `flagDrag.html`: Drag-and-drop flag variant
  - `shop.html`: Currency/cosmetic shop
  - `map.html`: Map display feature (partial implementation)
- Difficulty selection persists via query parameter (e.g., `game.html?difficulty=hard`)

### Class Structure
- **`App` class** (`scripts/App.ts`): Core game logic—initializes difficulty, shuffles countries, generates answer buttons, handles correct/incorrect answers, tracks rewards
- **`AppStorage` class** (`scripts/Storage.ts`): localStorage wrapper managing coins, purchases, user preferences; validates all numeric inputs
- **Data Classes** (non-object-oriented design):
  - `DiffucultyData.ts`: Defines `EDifficulty` enum and country lists per difficulty; countries have `code` (ISO 2-letter) and `name`
  - `ShopData.ts`: Defines purchasable backgrounds, difficulties, and maps; prices and hex colors colocated
  - `FlagDrag.ts`: Separate game mode implementation
- **`globals.d.ts`**: Type definitions for globally exposed objects (`storage`, `shopData`)

### Data & State Management
- **localStorage Keys**: `coins`, `purchases` (JSON array), `difficulty`
- **Currency Model**: Coins earned from difficulty-based rewards (Easy=3, Normal=5, Hard=10, etc.) → spent on cosmetics/features
- **Purchase System**: String-based identifiers (`'normal'`, `'hard'`, `'white'`, etc.); checked with `storage.hasPurchase()`
- **Backgrounds & Themes**: Colors stored in `ShopData`; applied via `document.body.style.setProperty()`

## Build & Development

### Scripts
- `npm start` / `npm run build`: Runs `node esbuild.config.js`
- **esbuild Config** (`esbuild.config.js`):
  - Single entry: `scripts/index.ts`
  - Output: `dist/bundle.js` (IIFE format with global name `Flesspessa`)
  - Loader: Supports `.png`, `.webp`, `.svg` assets
  - Minification: Enabled in production (`NODE_ENV=production`)
  - Source maps: Always generated

### TypeScript Setup
- **Target**: ES2019
- **Module**: ESNext
- **Strict Mode**: Enabled (`noImplicitAny: true`, `strict: true`)
- **Type Roots**: `types/` directory (houses `globals.d.ts`)
- Custom globals exposed on `window` object in HTML scripts (legacy pattern)

## Common Patterns & Conventions

### Error Handling
- `AppStorage` methods throw descriptive errors on invalid input (negative coins, insufficient funds)
- No try-catch in calling code; expects valid state

### UI Updates
- Direct DOM manipulation via `document.getElementById()` with assumed element existence (non-null assertions `!`)
- Inline event handlers in HTML (`onclick="functionName()"`)
- Global functions exposed to window (e.g., `startGame()`, `addSuperHard()`)

### Asset Structure
- Flag images: `assets/flags/{countryCode}.png` (e.g., `assets/flags/us.png`)
- Icons: `assets/icon-192.png`, `assets/icon-512.png`
- Note: `assets/non-existant flags/` placeholder (unused)

### Enum & Constants
- `EDifficulty` enum drives difficulty progression and purchase validation
- Difficulty locked if not purchased OR invalid; falls back to `Easy`
- Hard-coded progression: Easy → Normal → Hard → Super Hard

## Extension Points & Incomplete Features
- **Characters Shop**: Commented out in `ShopData` (assets/characters/ not implemented)
- **Map Feature**: `map.html` and `Map` class referenced but minimal implementation
- **Flag Drag Mode**: Implemented but distinct from main game flow

## Key Gotchas
1. **localStorage initialization**: Must call `storage.init()` before game startup; missing init leaves keys undefined
2. **Typo in filename**: `DiffucultyData.ts` (not "Difficulty")—used consistently throughout
3. **Global exposure**: HTML files expect `storage` and `shopData` as window globals; bundler's IIFE handles this
4. **Asset paths**: Flag images must match exact `{code}.png` naming; missing flags break rendering
5. **Purchase validation**: "Super Hard" is internal difficulty name; UI text transformation handles display (`charAt(0).toUpperCase()`)

## Development Tips
- **Modify Game Data**: Edit `DiffucultyData.ts` (countries, rewards) or `ShopData.ts` (prices, colors)
- **Add Features**: New game modes extend `App` pattern; shop items need price + cosmetic data
- **Test Locally**: Rebuild with `npm run build`, open `.html` file in browser; check DevTools console for errors
- **Service Worker**: `service-worker.js` enables PWA; update for offline/caching changes
