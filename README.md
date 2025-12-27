# ChartFlow

High-performance crypto trading terminal scaffolded with Next.js 15 + TypeScript + Tailwind + Shadcn-style primitives.

Setup:

1. Copy `.env.local.example` to `.env.local` and fill in Supabase credentials.

2. Install dependencies:

```bash
npm install
# If you want the full list manually:
# npm install next@15 react react-dom lucide-react clsx tailwind-merge @supabase/ssr @supabase/supabase-js lightweight-charts sonner
# Dev deps:
# npm install -D typescript tailwindcss postcss autoprefixer eslint prettier @types/node
```

3. Copy env and run dev:

```bash
cp .env.local.example .env.local && # edit .env.local
npm run dev
```

Note: This is a starter scaffold. Run `npm install` to fetch the declared dependencies.
