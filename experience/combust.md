---
title: Combust App (Sports Team Administrative Task Automation)
layout: experience-page
role: Developer / Architect
dates: March 2026 - Present
stack: React Native Web, React Web, Vite, Expo, Supabase
permalink: /experience/combust/
---

## Overview

Architected and developed an application to automate and streamline the administrative workload for Rainier Roller Riot. The application is built using React Native (mobile) and React Native Web with shared business logic and separate UIs. The app focuses on saving administrators work hours, user privacy, and accessibility.

## Highlights

### Authentication & Backend plan

- Invite-only sign-up flow; username = email or use OAuth provider
- Integrated Supabase for Auth, database, and storage.
- Business-logic first approach: role/permission enforcement implemented in TypeScript before backend wiring.

### Role-based access control

- Stackable roles (e.g., ['member','coach','captain']) and committee leader flags (isCouncil, per-committee leader designation).
- Fine-grained visibility rules for sensitive fields (e.g., emergency contact, medical info visible only to practice_lead/coaches/captains).
- File permissions: only uploader or committee leader may delete files.

### Notifications & Calendar integration

- Global announcements and notifications driven by calendar events.
- Planned integration: Google Calendar for events (color-coded) and rendering Discord Scheduled Events into a calendar UI.
- Call-time computation for events.

### Testing & CI/CD

- Playwright end-to-end test suite with CI runs on pull requests and main.
- GitHub Actions used for build/test/deploy workflows.

## Technical Details

- **Frontend:** React Native, React Web, Vite, Expo
- **Backend** Python
- **Testing:** React Testing Library, Jest
- **Accessibility:** Keyboard navigation, focus ring adjustments, color contrast fixes, and mobile dropdown toggle improvements.

## Challenges & Solutions

- **Problem:** Cross-platform styling differences (web responsive units vs. React Native styling).
- **Solution:** Separated concerns: use StyleSheet for cross-platform component styling and CSS for web-specific responsive units; keep .tsx for logic and .css for web presentation.

- **Problem:** Accessibility and mobile navbar issues.
- **Solution:** Fixed ARIA usage and keyboard/focus behavior for mobile dropdowns and nav components.

- **Problem:** File upload/format/size validation and previewing before download.
- **Solution:** Built validation (allowed formats, size limit default 25MB), title sanitization, file metadata fields, preview UI considerations, and unit tests.
