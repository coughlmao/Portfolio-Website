# Portfolio Website

A modern developer portfolio built with React, TypeScript, Vite, Tailwind CSS, and shadcn UI components.

This project is a single-page application focused on performance, responsive layout, smooth animations, and clean section-based storytelling for professional work.

## Project Insight

The website presents a complete personal portfolio with dedicated sections for:

- Hero and social links
- About and experience
- Project showcase with per-project images
- Skills and achievements
- Contact form with client-side toast feedback (no backend submission yet)
- Footer and polished navigation

The app uses a component-driven architecture under `src/components` and a page entry at `src/pages/Index.tsx`.

## Tech Stack

- React 18 + TypeScript
- Vite 5
- Tailwind CSS + `tailwindcss-animate`
- shadcn UI (Radix primitives)
- Framer Motion
- React Router
- React Query
- Vitest (basic test scaffold) + Playwright config scaffold

## Features

- Responsive navbar with mobile menu and section anchors
- Theme toggle support
- Animated hero, section transitions, and card reveals
- Project cards with image support and fallback behavior
- Reusable UI components in `src/components/ui`
- Type-safe setup with TS config and path alias using `@ -> src`
- Custom `404` route/page for unknown paths

## Local Setup

### Prerequisites

- Node.js 18+ (Node.js 20 LTS recommended)
- `npm` or `bun`

### Environment Variables

No environment variables are required for the current version of this project.

### 1. Install dependencies

Using `npm`:

```bash
npm install
```

Using `bun`:

```bash
bun install
```

### 2. Start development server

Using `npm`:

```bash
npm run dev
```

Using `bun`:

```bash
bun run dev
```

The Vite dev server runs on port `8080` by default.

### 3. Build for production

Using `npm`:

```bash
npm run build
```

Using `bun`:

```bash
bun run build
```

Production files are generated in the `dist` folder.

### 4. Preview production build locally

Using `npm`:

```bash
npm run preview
```

Using `bun`:

```bash
bun run preview
```

## Project Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run build:dev` | Build in development mode |
| `npm run preview` | Preview built app |
| `npm run lint` | Run ESLint |
| `npm run test` | Run Vitest once |
| `npm run test:watch` | Run Vitest in watch mode |

Note: A Playwright config is present in the project, but no dedicated Playwright npm script is currently defined.

## Images in Projects Section

Project images are currently imported from `src/assets` in `src/components/ProjectsSection.tsx`.

Recommended options:

- Option A: Keep importing from `src/assets` for bundled assets
- Option B: Put files in `public/projects` and reference as `/projects/your-image.png`

Avoid referencing files from `dist/assets` directly, since `dist` is generated output and file names can change.

## Deploy on Render

This project should be deployed as a Static Site on Render.

### 1. Push project to GitHub

Push the repository to GitHub, GitLab, or Bitbucket.

### 2. Create a new Static Site on Render

- Open Render dashboard
- Click New +
- Select Static Site
- Connect your repository

### 3. Configure build settings

Use these values with `npm`:

```txt
Build Command: npm ci && npm run build
Publish Directory: dist
```

If you prefer `bun` on Render:

```txt
Build Command: bun install && bun run build
Publish Directory: dist
```

### 4. Configure SPA fallback rewrite

Because this is a React Router SPA, add a rewrite rule in Render:

```txt
Source: /*
Destination: /index.html
Action: Rewrite
```

This ensures refresh and direct route access work correctly.

### 5. Deploy

Trigger deploy. Render will build and host your dist output.

## Suggested Next Improvements

- Add real project URLs for Code and Demo buttons
- Add SEO metadata and Open Graph tags
- Add analytics (for example, Plausible or GA)
- Add a backend endpoint or service for real contact form submission

## License

This project is available for use. Please check with the repository owner for specific licensing information.