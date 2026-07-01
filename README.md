# Monochrome

Landing page for Monochrome — an AI-powered color-to-black-and-white photo
converter. Built with Nuxt 4, Vue 3, and Tailwind CSS v4.

The app itself is distributed via the [Glaze store](https://www.glaze.app/app/monochrome-pVnMBs);
this site is the marketing/privacy-policy front end.

## Setup

```bash
bun install
```

## Development

```bash
bun run dev
```

## Production

```bash
bun run build
bun run preview
```

Set `NUXT_PUBLIC_SITE_URL` for production canonical URLs.

## Structure

- `app/pages/` — routes (`/`, `/privacy`)
- `app/components/monochrome/` — page sections (header, hero, features, footer)
- `app/components/OgImage/` — dynamic social-share image template (`nuxt-og-image`)
- `app/assets/css/main.css` — design tokens (Tailwind `@theme`)

## SEO

Handled via `@nuxtjs/seo` (sitemap, robots, schema.org, canonical URLs) and
`nuxt-og-image` (dynamic per-page OG/Twitter card images, generated from the
`OgImageMonochrome` component so they match the site's theme). Fonts are
configured with `global: true` in `nuxt.config.ts` — required for OG image
generation to resolve them, since Tailwind v4 `@theme` font references aren't
scanned by `@nuxt/fonts` on their own.
