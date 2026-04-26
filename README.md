# 🐾 PawTrack

A beautifully animated landing page for the PawTrack dog wellness app.  
Built with React + Vite, ready to deploy to Vercel.

---

## ✨ Features

- 9 distinct dog mascot poses with unique animations
- Mint/teal color palette derived from the mascot artwork
- Custom cursor, scroll-reveal, smooth scrolling
- Fully responsive (mobile / tablet / desktop)
- Zero runtime dependencies beyond React

---

## 🚀 Local development

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:5173)
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build locally
npm run preview
```

---

## ☁️ Deploy to Vercel

### Option A — One-click via dashboard

1. Push this folder to a GitHub repo
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repo
4. Vercel auto-detects Vite — just click **Deploy**

### Option B — Vercel CLI

```bash
# Install the CLI once
npm i -g vercel

# From the project root
vercel             # preview deployment
vercel --prod      # production deployment
```

The included `vercel.json` already configures:

- Build command: `npm run build`
- Output directory: `dist`
- SPA rewrites (every URL → `index.html`)

---

## 📂 Project structure

```
pawtrack/
├── public/
│   └── favicon.png
├── src/
│   ├── assets/
│   │   ├── dogs/                  ← 9 dog pose PNGs
│   │   │   ├── sit.png
│   │   │   ├── excited.png
│   │   │   ├── curious.png
│   │   │   ├── look_right.png
│   │   │   ├── proud.png
│   │   │   ├── playful.png
│   │   │   ├── sleepy.png
│   │   │   ├── alert.png
│   │   │   └── surprised.png
│   │   └── dogs.js                ← Exports all dog images
│   ├── components/
│   │   ├── Cursor.jsx
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── DogDivider.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── hooks/
│   │   └── useScrollReveal.js
│   ├── styles/
│   │   └── global.css             ← All styles + animations
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
├── vercel.json
└── README.md
```

---

## 📬 Contact

Questions? Email **paw-track@saasholdco.com**

© 2025 PawTrack
# Pawtrack-react
