# Ayush Korde — Digital Portfolio

A responsive Next.js portfolio with a cinematic entry portal, an interactive Three.js scene, a SaaS-style project explorer, and a print-ready resume page.

## Routes

- `/` — entry portal with opt-in sound and an interactive 3D identity scene.
- `/home` — portfolio overview, workbench, experience, community, recognition, technology, and contact.
- `/resume` — print or save the resume as PDF.

## Stack

- Next.js 14 App Router and React 18
- TypeScript and Tailwind CSS
- Three.js, React Three Fiber, and Drei
- Framer Motion and Lucide icons

## Local development

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`. For a production static export, run:

```bash
pnpm build
```

The generated site is written to `out/` and can be deployed to Vercel.

## Portfolio content

Edit `lib/portfolio.ts` to update profile details, professional links, projects, experience, community roles, recognition, and technologies. The 3D entry scene and the main portfolio scene are in `components/portal/` and `components/hero/` respectively. Local visual assets live in `public/images/`.

The entry sound is opt-in and stored as a local preference. No server API keys or contact-form backend are required.
