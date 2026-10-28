# Swaminathan Kannan — Portfolio

Premium Angular portfolio site built with standalone components, strict TypeScript, and SCSS.

## Development

```bash
npm install
npm start
```

Open `http://localhost:4200/`.

## Production build

```bash
npm run build
```

Output directory: **`dist/portfolio/browser`** (Angular application builder).

## Configuration

Edit personal details and links in:

`src/app/core/config/site.config.ts`

Project case studies and skills live under `src/app/core/data/`.

## Assets

- Resume PDF: `public/assets/Swaminathan_Kannan_Resume.pdf`
- Profile image: set `profileImagePath` in site config (default: stylized SVG placeholder)

## Deploy to Vercel

1. Push this repository to GitHub (or GitLab).
2. Import the project in [Vercel](https://vercel.com/new).
3. Framework preset: **Angular** (or Other).
4. **Build command:** `npm run build`
5. **Output directory:** `dist/portfolio/browser`
6. `vercel.json` includes SPA rewrites for client-side routes (`/projects/:slug`).

## Tests

```bash
npm test -- --watch=false --browsers=ChromeHeadless
```
