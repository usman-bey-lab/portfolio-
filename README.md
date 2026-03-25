# Usman Amjad — Portfolio (Vite)

Professional portfolio built with Vite. Aesthetic: Refined Obsidian — deep black, electric-blue accent, editorial typography.

## Quick Start

```bash
npm install
npm run dev       # dev server → http://localhost:3000
npm run build     # production build → dist/
npm run preview   # preview production build
```

## Add Your Assets

Drop these files into `public/`:

```
public/
├── resume.pdf                          ← Your resume PDF
└── assets/
    └── images/
        ├── profile.jpg                 ← Your headshot
        ├── project-thinkboard.png      ← ThinkBoard screenshot
        └── project-shopper.png         ← Shopper screenshot
```

Images gracefully fall back to placeholder text if missing, so the site works without them.

## Project Structure

```
usman-portfolio/
├── index.html          ← Entry point
├── vite.config.js
├── package.json
├── src/
│   ├── main.js         ← All JS + CSS import
│   └── style.css       ← Full stylesheet
└── public/
    ├── resume.pdf
    └── assets/images/
```

## Deploy

**Netlify / Vercel:** Connect your GitHub repo — auto-detected as Vite.

**GitHub Pages:**
```bash
npm run build
# Push dist/ to gh-pages branch
```

## Customization

All colors are CSS variables at the top of `style.css`:
```css
--accent: #3b82f6;       /* Electric blue — change to any color */
--bg-0: #000000;         /* Base black */
```
