# Coinvergence — Next.js Deployment

## Overview
This is the Next.js App Router version of the Coinvergence landing page, configured for static export deployment on Vercel.

## Project Structure
```
coinvergence/
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   └── page.tsx        # Home page (Client Component with full HTML)
├── package.json        # Dependencies
├── next.config.js      # Next.js config (output: 'export')
├── tsconfig.json       # TypeScript config
└── next-env.d.ts       # Next.js types
```

## Key Configuration

### next.config.js
```js
const nextConfig = {
  output: 'export',      // Required for static deployment
  distDir: 'dist',       // Output directory
  images: {
    unoptimized: true    // Required for static export
  }
}
```

## Deployment Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Build (Static Export)
```bash
npm run build
```
This generates a `dist/` folder with static HTML/CSS/JS files.

### 3. Deploy to Vercel

#### Option A: Vercel CLI
```bash
npm i -g vercel
vercel --prod
```

#### Option B: GitHub Integration
1. Push this code to your GitHub repo
2. Connect the repo to Vercel
3. Vercel will auto-detect Next.js and build with `output: 'export'`

#### Option C: Vercel Dashboard (Manual)
1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repo
4. Framework Preset: Next.js
5. Build Command: `next build`
6. Output Directory: `dist`
7. Click Deploy

## Important Notes

- The page uses `dangerouslySetInnerHTML` to render the full HTML content
- All JavaScript functionality (modals, mobile menu, particles, counters) is initialized in a `useEffect` hook
- External CDN resources (Tailwind, GSAP, Google Fonts) are loaded dynamically
- This is a **Client Component** (`"use client"`) because it needs browser APIs

## Troubleshooting

### Build Errors
If you get build errors, ensure:
1. `output: 'export'` is set in `next.config.js`
2. `images.unoptimized: true` is set
3. No server-side features (API routes, SSR) are used

### Script Loading Issues
The page loads Tailwind and GSAP from CDN. If they fail to load:
- Check network connectivity
- Consider adding fallback scripts
- Or install them as npm packages

## WhatsApp Integration
The WhatsApp links use your number: **+2349133588720**
All "Buy on WhatsApp" buttons link to `https://wa.me/2349133588720`
