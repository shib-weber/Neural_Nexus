# Glowinn — Made for Modern Elegance

React + Vite single-screen video-hero landing page.

## ⚠️ Missing asset: `public/hero.mp4`

The build step could not fetch the hero video — this container's network
allowlist doesn't include the asset's host
(`pub-1e5b4001b36b47e28e6a2fb775966a79.r2.dev`), so the request was blocked
before it reached the file.

Before running the site, download the source video yourself and place it at
`public/hero.mp4`:

```bash
curl -L -o public/hero.mp4 "https://pub-1e5b4001b36b47e28e6a2fb775966a79.r2.dev/templates/glowinn/hero.mp4"
```

The rest of the project already assumes this local, root-relative path —
nothing else needs to change once the file is in place. (`src/components/Hero.jsx`
references `/hero.mp4`, and `index.html` preloads the same path.)

## Run it

```bash
npm install
npm run dev      # local dev server
npm run build    # production build to dist/
```
