---
title: Schedule Hub App
layout: project-page
role: Freelance Full-stack Developer
dates: March 2025 - September 2025
stack: Angular, TypeScript, Bootstrap, Spring Boot (Java), PostgreSQL
permalink: /projects/schedule-hub/
---

## Overview

The Schedule Hub is a booking system that integrates a full Angular frontend with a Spring Boot backend. It enables users to schedule appointments while enforcing conflict detection rules to prevent overlapping or invalid bookings.

## Highlights

- Built a **full-stack scheduling system** using Angular 19 and Spring Boot.
- Implemented **conflict detection logic** in the backend to enforce buffer rules for appointments and events.
- Designed Angular components for **calendar view** and **list view**, including admin-only features.
- Created shared filtering and form components to streamline appointment creation and editing.

## Technical Details

- **Frontend:** Angular 19 standalone components with Bootstrap styling; used FullCalendar for event views.
- **Backend:** Spring Boot services with PostgreSQL database; included `Appointment` and `Event` entities, DTOs, and repositories.
- **Conflict Handling:** Buffer enforcement logic implemented in `ScheduleConflictService` and validated in both frontend and backend.
- **Testing:** Unit tests with JUnit for backend services and Jasmine/Karma for Angular components.

## Challenges & Solutions

- **Problem:** Scheduling conflicts with overlapping times.
  **Solution:** Created a custom `ScheduleConflictService` with buffer enforcement rules, validated through both unit and integration tests.

## Screenshots

<figure>
  <img src="/assets/images/schedule-landing.jpg" alt="Schedule Hub app landing page" class="project-screenshot">
  <figcaption>Schedule Hub app – landing page</figcaption>
</figure>

<figure>
  <img src="/assets/images/schedule-calendar.png" alt="Schedule Hub app calendar view" class="project-screenshot">
  <figcaption>Schedule Hub app calendar view</figcaption>
</figure>

<figure>
  <img src="/assets/images/schedule-admin.png" alt="Schedule Hub app admin panel" class="project-screenshot">
  <figcaption>Schedule Hub app admin listed calendar items view </figcaption>
</figure>

## Links

**Repos:**

- Backend: [https://github.com/quinise/ScheduleHub-backend](https://github.com/quinise/ScheduleHub-backend)
- Frontend: [https://github.com/quinise/ScheduleHub-frontend](https://github.com/quinise/ScheduleHub-frontend)
