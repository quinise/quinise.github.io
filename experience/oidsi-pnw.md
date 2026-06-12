---
title: OIDSI-PNW Community Web Home
layout: experience-page
role: Web Developer
dates: October 2022 – June 2026
stack: Vue, Vite, Bootstrap, TypeScript, Vitest (unit/component), GitHub Actions, AWS S3 + CloudFront, Node 24
gallery: |
  <img src="/assets/images/oidsi-home.png" alt="OIDSI-PNW site home page" class="project-screenshot">
  <figcaption>OIDSI-PNW organization's home page</figcaption>

  <img src="/assets/images/oidsi-contact.png" alt="OIDSI-PNW site contact form" class="project-screenshot">
  <figcaption>Contact OIDSI-PNW with this form</figcaption>


  <img src="/assets/images/oidsi-tests-passing.png" alt="OIDSI-PNW site Playwright tests passing" class="project-screenshot">
  <figcaption>OIDSI-PNW end-to-end tests passing</figcaption>

  <img src="/assets/images/oidsi-test-details.png" alt="OIDSI-PNW site contact form test details passing" class="project-screenshot">
  <figcaption>OIDSI-PNW site contact form test passing details</figcaption>

permalink: /experience/oidsi-pnw/
---

## Overview

The OIDSI-PNW site is a web application built with **Vue** and **Vite**. It was migrated from **Firebase Hosting** to **AWS S3 + CloudFront**, ensuring global caching and stable SPA routing. The project emphasizes accessibility, performance, and automated testing.

## Highlights

- Migrated deployment pipeline to **AWS S3** + **CloudFront**, configured SPA routing fallback for deep links.
- Optimized gallery carousel initial load by deferring off-screen image `src` binding to a reactive `loadedSlideIndexes` set, loading only the current and adjacent slides on startup.
- Applied browser fetch/decode priority hints (`fetchpriority`, `loading`, `decoding`) to gallery and homepage hero images to reduce first-paint latency.
- Migrated hero images on the Home, About, and Services pages from PNG to WebP, reducing per-page image payload.
- Upgraded Node.js runtime from v20 to v24 across local config and CI pipeline; updated `@types/node` to match.
- Customized **Bootstrap** theme using **Sass** `@use`, modernizing styles and removing deprecated imports.
- Fixed mobile navbar accessibility issues and improved ARIA usage for dropdowns.

## Technical Details

- **Frontend:** Vue 3 Composition API, Vue Router, Bootstrap 5 with custom Sass tokens.
- **Performance:** WebP hero images sitewide; deferred gallery image loading with browser-native priority hints (`fetchpriority="high"`, `loading="eager/lazy"`, `decoding="async"`).
- **Testing:** Vitest component/unit test suite; CI runs on pull requests and main branch.
- **CI/CD:** GitHub Actions builds and deploys to AWS S3, with CloudFront invalidation for cache consistency.
- **Accessibility:** Keyboard navigation, focus ring adjustments, color contrast fixes, and mobile dropdown toggle improvements.

## Challenges & Solutions

- **Problem:** Direct navigation to routes (e.g. `/about`, `/gallery`) failed with 403/404 errors on static hosting.
  **Solution:** Implemented SPA fallback (`index.html` copied to `404.html`) and CloudFront behavior rules.

- **Problem:** Gallery carousel fetched all slide images on startup, and hero images across multiple pages had no explicit load priority, increasing initial page weight and delaying visual readiness.
  **Solution:** Gated gallery `src` binding behind a reactive `loadedSlideIndexes` set (only prev/current/next slides loaded at a time), added `fetchpriority`/`loading`/`decoding` hints to all hero images, and converted PNG assets to WebP.

## Links

- [Live Site](https://www.oidsi-pnw.com)
- [Repo](https://github.com/quinise/oidsi-pnw)
