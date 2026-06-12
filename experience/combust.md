---
title: Combust App
layout: experience-page
role: React Developer + Architect
dates: March 2026 - Present
stack: React Native Web, Vite, Expo, Supabase (PostgreSQL + Auth + RLS), FastAPI, MUI 9, Tailwind CSS 4 + NativeWind, React Router v7, Playwright (E2E), pgTAP, Jest, Vitest, pytest
permalink: /experience/combust/
---

## Overview

Architected and developed an application to automate and streamline the administrative workload for Rainier Roller Riot. The application is built using **React Native** (mobile) + **React Native Web** and **Python** with shared business logic and separate UIs. The app focuses on saving administrators work hours, user privacy, and accessibility.

## Highlights

### Authentication & Invite Flow

- Invite-only sign-up with 7-day expiration; email/password auth via **Supabase Auth**.
- Password reset flow with **FastAPI** backend handling token validation and email delivery.
- First-time login profile completion prompt; council-approved account deletion workflow.

### Role-based Access Control & Row-Level Security

- Stackable roles (`member`, `practice_lead`, `coach`, `captain`, `committee_leader`, `developer_admin`) with committee leader flags (`isCouncil`, per-committee leader designation).
- Fine-grained visibility rules for sensitive fields enforced via **PostgreSQL RLS policies** (Supabase) and TypeScript shared-logic layer.
- File permissions: only uploader or committee leader may delete; **pgTAP** test suite covers RLS policy correctness.

### Web App Pages (v1 Deliverable)

- Deployed pages: **Dashboard**, **League Resources**, **Profile**, **Settings**, **Privacy Notice**, **404 Not Found**.
- Dashboard integrates: live **Google Calendar** (via Deno edge function + Supabase Functions), sortable **member list**, **committee membership manager**, **eligibility progress card**, **event attendance form**, and role-scoped links.
- Info modals for first-time user onboarding; opt-out attendance button shown conditionally by role.

### Attendance & Eligibility Tracking

- Event attendance form with eligibility-gating; council member eligibility tracker reinstated after RLS policy update.
- `EligibilityProgressCard` displays scrimmage/bout readiness based on games played and contact clearance.

### Theme System & Design

- **Tailwind CSS 4 + NativeWind** for cross-platform styling; **MUI 9** for complex UI components.
- Dark mode with WCAG contrast fixes across all pages; custom color theme via `ThemeContext`.
- Standardized typography (custom fonts connected via `feat/connect-fonts`); league branding assets replaced and animated loading screen added.

### Backend & Observability

- **FastAPI** (Python + Uvicorn) handles password reset, account deletion, Google Calendar data fetching, and email workflows; modularized into `auth/`, `data_fetching/`, `hosting/`, `logging/` packages.
- Observability: **Sentry**, **Bugsnag**, **Datadog** (web); **Structlog**, **Loguru**, **Eliot** (backend); frontend logging layer implemented.

### Testing & CI/CD

- Multi-layer test suite: **Jest + Vitest** (TS), **pytest** (Python), **pgTAP** (SQL/RLS), **Playwright** (E2E).
- GitHub Actions workflow triggers tests automatically on issues labeled `bug`; tests reorganized into workspace-scoped packages.

## Technical Details

- **Frontend (Web):** React Native Web 0.19, Vite 8, React Router v7, MUI 9, Tailwind CSS 4
- **Frontend (Mobile):** React Native 0.83, Expo 55, NativeWind 4
- **Shared Logic:** TypeScript 5.7 monorepo package (`@rrr/shared`) — domain models, validation, permissions, state
- **Backend:** FastAPI (Python) + Uvicorn; Deno edge functions (Supabase Functions) for Google Calendar integration
- **Database/Auth:** Supabase (PostgreSQL + Auth + Realtime); 6 migration files; RLS policies; pgTAP test suite
- **Testing:** Jest + Vitest (TS), pytest (Python), pgTAP (SQL), Playwright (E2E)
- **Observability:** Sentry, Bugsnag, Datadog (web); Structlog, Loguru, Eliot (backend)
- **Accessibility:** Keyboard navigation, focus ring adjustments, WCAG dark/light mode contrast

## Challenges & Solutions

- **Problem:** Cross-platform styling differences (web responsive units vs. React Native styling).
  **Solution:** Separated concerns: `StyleSheet` for cross-platform component styling and CSS for web-specific responsive units; `.tsx` for logic and `.css` for web presentation. Added Tailwind CSS 4 + NativeWind for utility-first styling shared across platforms.

- **Problem:** Row-level security policies blocked legitimate reads for public-facing tables after migration.
  **Solution:** Added explicit `GRANT SELECT` on public schema tables (PR #177) and validated coverage with pgTAP test suite.

- **Problem:** Login screen rendered on top of the app after authentication, blocking navigation.
  **Solution:** Fixed auth state listener ordering and route guard logic to properly redirect authenticated users away from the login page.

- **Problem:** Dark mode introduced low-contrast text across multiple pages failing WCAG AA.
  **Solution:** Audited all text/background color pairings in `ThemeContext` and corrected contrast ratios across Dashboard, Profile, and Settings pages.

- **Problem:** File upload/format/size validation and previewing before download.
  **Solution:** Built validation (allowed formats, size limit default 25MB), title sanitization, file metadata fields, preview UI, and unit tests.
