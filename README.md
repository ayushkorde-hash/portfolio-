# Ayush Korde — Developer Portfolio

A modern, responsive developer portfolio built with **Next.js 14**, **Tailwind CSS**, **Framer Motion**, and **TypeScript**.

## ✨ Features

- 🎨 Dark mode by default with glassmorphism cards
- ⚡ Animated particle canvas hero section
- 🎭 Framer Motion scroll animations throughout
- 📱 Fully responsive (mobile-first)
- 🔍 SEO optimized with OpenGraph metadata
- 🚀 Zero-config deploy on Vercel / Netlify
- 🎯 Static export support (GitHub Pages ready)

## 📁 Structure

```
portfolio/
├── app/
│   ├── globals.css       # Custom styles, CSS variables, animations
│   ├── layout.tsx        # Root layout with metadata & fonts
│   └── page.tsx          # Main page assembling all sections
├── components/
│   ├── sections/
│   │   ├── Hero.tsx          # Particle canvas + animated headline
│   │   ├── About.tsx         # Bio, stats, trait cards
│   │   ├── Skills.tsx        # Categorized skills with progress bars
│   │   ├── Projects.tsx      # Glassmorphism project cards
│   │   ├── Achievements.tsx  # Timeline layout
│   │   └── Contact.tsx       # Form + contact info
│   └── ui/
│       ├── Navbar.tsx        # Fixed responsive navbar
│       └── Footer.tsx        # Footer with socials
├── lib/
│   └── animations.ts     # Reusable Framer Motion variants
├── public/               # Add favicon.ico, og-image.png, resume.pdf here
├── tailwind.config.ts
├── next.config.ts        # Static export enabled
└── package.json
```

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev
# Open http://localhost:3000

# 3. Build for production
npm run build
```

## 🌐 Deploy on Vercel (Recommended)

1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your repo
4. Click **Deploy** — it just works!

## 🌐 Deploy on GitHub Pages

```bash
# Build static export
npm run build
# Output goes to /out folder

# Push /out contents to gh-pages branch
# Or use GitHub Actions workflow
```

## 📝 Customization Checklist

- [ ] Update email in `Contact.tsx` and `Footer.tsx`
- [ ] Update GitHub/LinkedIn URLs in `Hero.tsx`, `Footer.tsx`, `Contact.tsx`
- [ ] Add your real photo — replace the `AK` initials in `About.tsx`
- [ ] Add `public/resume.pdf` — your actual resume
- [ ] Add `public/favicon.ico` — your favicon
- [ ] Add `public/og-image.png` (1200×630px) — OpenGraph preview image
- [ ] Update project GitHub links in `Projects.tsx`
- [ ] Adjust skill percentages in `Skills.tsx`
- [ ] Update email in `layout.tsx` metadata

## 🎨 Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| `void` | `#080d1a` | Background |
| `indigo-600` | `#6366f1` | Primary accent |
| `violet-600` | `#8b5cf6` | Secondary |
| `cyan-400` | `#22d3ee` | Highlight |

## 🛠 Tech Stack

- **Next.js 14** — App Router, static export
- **TypeScript** — Type safety
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — Scroll + hover animations
- **Lucide React** — Icon library
- **DM Mono + Outfit** — Typography

---

Built by Ayush Korde · PVG College of Engineering, Pune
