---
title: Combust App
layout: experience-page
role: React Developer + Architect
dates: March 2026 - Present
stack: React Native Web, React Web, Vite, Expo, Supabase
permalink: /experience/combust/
---

## Overview

Architected and developed an application to automate and streamline the administrative workload for Rainier Roller Riot. The application is built using **React Native** (mobile) + **React Native Web** and **Python** with shared business logic and separate UIs. The app focuses on saving administrators work hours, user privacy, and accessibility.

## Highlights

### Authentication & Backend plan

- Invite-only sign-up flow; username = email or use **OAuth** provider
- Integrated **Supabase** for Auth, database, and storage.
- Business-logic first approach: role/permission enforcement implemented in **TypeScript** before backend wiring.

### Role-based access control

- Stackable roles (e.g., ['member','coach','captain']) and committee leader flags (isCouncil, per-committee leader designation).
- Fine-grained visibility rules for sensitive fields (e.g., emergency contact, medical info visible only to practice_lead/coaches/captains).
- File permissions: only uploader or committee leader may delete files.

### Notifications & Calendar integration

- Global announcements and notifications driven by calendar events.
- Planned integration: Google Calendar for events and rendering Discord Scheduled Events into a calendar UI.
- Call-time computation for events notifications.

### Testing & CI/CD

- **React Native Testing Library + Jest** test suite with CI runs on pull requests and main.
- **GitHub Workflow** GitHub Issues integrated with CI/CD and GitHub Actions used for build/test/deploy workflows.

## Technical Details

- **Frontend:** React Native, React Native Web, Vite, Expo
- **Backend** Python backend logic, data modeling, database interaction, email handling, and automated testing in this project
- **Testing:** React Native Testing Library, Jest, Pytest
- **Accessibility:** Keyboard navigation, focus ring adjustments, light/dark modes

## Challenges & Solutions

- **Problem:** Cross-platform styling differences (web responsive units vs. React Native styling).
- **Solution:** Separated concerns: use StyleSheet for cross-platform component styling and CSS for web-specific responsive units; keep .tsx for logic and .css for web presentation.

- **Problem:** Accessibility and mobile navbar issues.
- **Solution:** Fixed ARIA usage and keyboard/focus behavior for mobile dropdowns and nav components.

- **Problem:** File upload/format/size validation and previewing before download.
- **Solution:** Built validation (allowed formats, size limit default 25MB), title sanitization, file metadata fields, preview UI considerations, and unit tests.
