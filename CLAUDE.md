# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server at localhost:5173
npm run build      # Build static output to build/
npm run preview    # Preview the built output
npm run check      # Type-check with svelte-check
npm run lint       # Check formatting (prettier) and lint (eslint)
npm run format     # Auto-format all files
npm run test       # Run vitest tests (single pass)
```

## Architecture

This is a **SvelteKit** site configured with `@sveltejs/adapter-static` — all routes are fully prerendered at build time (`prerender = true` in `+layout.ts`). There is no server-side logic.

**Routing:** Four pages beyond the home route: `/about`, `/contact`, `/media`, `/resume`. Each lives in `src/routes/<name>/+page.svelte`.

**Layout (`src/routes/+layout.svelte`):** Wraps all pages with `<Background>`, `<Header>`, and `<Footer>`. Sets a `--vh` CSS custom property (debounced on resize) to handle mobile viewport height quirks. Body background is always black; text is white.

**Background (`src/lib/Background.svelte`):** A fixed full-screen image that blurs (`filter: blur(12px)`) on all pages except `/`. Serves responsive images (mobile/tablet/laptop/xl breakpoints) in both WebP and JPG. WebP support is detected by `static/js/modernizr.js`, which adds `.webp` or `.no-webp` to `<html>`.

**Photos (`src/lib/Photos.svelte`):** Custom masonry layout — computes column count and item heights in JS (debounced), using `data-height` attributes. Images lazy-load via `IntersectionObserver.svelte`. Clicking an image opens a **Splide** carousel inside `Modal.svelte`. Splide is imported dynamically on first click.

**Modal (`src/lib/Modal.svelte`):** Uses `focus-trap` for keyboard accessibility and `body-scroll-lock` to prevent background scroll. Accepts `trigger` and `content` Svelte snippets. Becomes visible only after content loads (`isVisible` prop controls opacity).

**Videos (`src/lib/Videos.svelte`):** Static list of YouTube embeds via `YouTubeEmbed.svelte`, with choreography work shown via `Blockquote.svelte`.

**Contact page:** POSTs to an AWS API Gateway endpoint (`https://725k0xsdhd.execute-api.us-east-1.amazonaws.com/Prod/send-email`). Tracks `requestStatus` as `"" | "requested" | "succeeded" | "failed"`.

**Styling:** Tailwind CSS (no custom theme extensions). Component-scoped `<style>` blocks mix Tailwind `@apply` with plain CSS. Some components have companion `.css` files imported inside `<style>` blocks (e.g. `contact.css`, `resume.css`).

**Svelte version:** Uses Svelte 5 runes syntax throughout (`$state`, `$derived`, `$props`, `$effect`, `{#snippet}`).

**Images:** Static assets in `static/img/`. Each photo exists in four variants: `{id}.jpg`, `{id}.webp` (thumbnails, ~500px wide), and `{id}-full.jpg`, `{id}-full.webp` (full-size). The `pictures` array in `Photos.svelte` is the source of truth for photo ordering and metadata.

**Deployment:** Pushing to `main` triggers a GitHub Action (`.github/workflows/cd.yaml`) that builds the site and force-pushes the `build/` output to the `production` branch, which is served via GitHub Pages at `www.laurensettembrino.com`.
