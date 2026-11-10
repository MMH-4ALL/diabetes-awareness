# Diabetes Awareness Project — Type 1 & Type 2 Decoded

An interactive, fully responsive educational website built for **World Diabetes Day (November 14)**.

## Run it

```bash
npm install
npm run dev      # local dev server → http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build
npm run deploy   # build + publish to GitHub Pages (gh-pages branch)
```

## Live site

**https://mmh-4all.github.io/diabetes-awareness/**

Published from the `gh-pages` branch via GitHub Pages. The `main` branch holds the
source; `gh-pages` holds the compiled `dist/` output.

To publish a change:

```bash
npm run deploy
```

> Want GitHub to auto-rebuild on every push instead? See
> [`docs/github-actions-auto-deploy.md`](docs/github-actions-auto-deploy.md).

## Tech stack

- **React 18 + Vite** — componentized, fast dev/build
- **Tailwind CSS** — utility-first styling with a custom medical palette
- **Lucide React** — clean line icons
- **Google Fonts** — Fraunces (display serif), Instrument Sans (body), IBM Plex Mono (labels)

## Design system

- **Deep medical navy/slate** (`#0a1a33` …) — authority & calm
- **Crisp white + mist** (`#f4f7fb`) — clinical cleanliness
- **Soft teal/cyan accents** (`#12b3a5`, `#22d3ee`) — "healthy loop" signals
- **Vibrant coral/orange** (`#ff5c4d`, `#f97316`) — glucose warning highlights

## Page structure

1. **Hero** — headline, subtitle, 537M stat callout (IDF Atlas 2021), CTAs
2. **Section 01 · What is Diabetes?** — interactive feedback-loop stepper + glucose gauge
3. **Section 02 · The Two Types** — tabbed Type 1 vs Type 2 comparison + mechanism step cards
4. **Section 03 · Simulator** — interactive glucose "thermostat" loop (Healthy / Type 1 / Type 2)
5. **Section 04 · Why It Matters** — complications grid (heart, kidneys, eyes, nerves)
6. **Section 05 · Action & Management** — Type 1 daily care + Type 2 prevention
7. **Section 06 · Fact vs Myth** — interactive accordion
8. **Footer** — MLA references (CDC, NIH/NIDDK, ADA, WHO, IDF) + reflection prompt

## Notes

- Fully responsive (mobile-first grid), smooth scroll, scroll-reveal animations, hover micro-interactions
- Accessible contrast ratios, semantic HTML, `prefers-reduced-motion` support
- `base: './'` in `vite.config.js` so the build works from any Pages subpath
- Educational resource — **not medical advice**.
