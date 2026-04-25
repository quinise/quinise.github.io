---
title: My Gem Tarot (iOS App)
layout: project-page
role: Programmer
dates: May 2021
stack: Swift 5.3, CoreData, Tarot Meanings REST API
gallery: |
  <img src="/assets/images/tarot-findCard.gif" alt="MyGemTarot app find card and see details feature" class="project-screenshot">
  <figcaption>MyGemTarot app demo – user finding a card and viewing its details</figcaption>

  <img src="/assets/images/tarot-edit.gif" alt="MyGemTarot app edit card notes feature" class="project-screenshot">
  <figcaption>MyGemTarot app demo – user viewing saved card notes</figcaption>
permalink: /projects/my-gem-tarot/
---

## Overview

An original iOS application built in Swift, My Gem Tarot integrates tarot card readings with gem information. The app consumes a REST API for tarot card meanings, persists readings locally, and provides a smooth navigation experience by suit.

## Highlights

- Originated, mocked-up, and designed the app concept.
- Made asynchronous API calls to the **Tarot Card Meanings REST API**.
- Created models to structure API data.
- Implemented **CoreData** to persist readings and support CRUD operations.
- Developed and styled multiple views; bound data from models using Swift property wrappers.
- Enabled navigation by tarot card suit and gem association.

## Technical Details

- **Frontend:** SwiftUI views styled and bound to models.
- **Persistence:** CoreData integration for offline access and CRUD operations.
- **Networking:** Async REST calls to Tarot Card Meanings API.

## Repo Link

- [Repo](https://github.com/quinise/MyGemTarot)
