# POS-HJA

POS-HJA is a point-of-sale system for the HJA candy and school supplies store.

## Current Status

This repository is in its initialization phase. It currently contains the project README and an `.impeccable` workflow scaffold for tracking decisions, quality gates, and implementation notes.

The selected stack is Java, React, and SQLite.

## Project Goals

- Track sales for candy and school supply items.
- Support store inventory workflows.
- Provide user login and sign-up for store roles.
- Generate daily sales reports.
- Keep future implementation decisions documented as the project takes shape.
- Build with small, reviewable changes that can be verified before they are pushed.

## Users

- Cashier
- Inventory manager
- Admin/store owner

## Initial Workflows

- Checkout cart
- Inventory management
- Daily sales report
- User login and sign-up

## Stack

- Backend: Java
- Frontend: React
- Database: SQLite

## Desktop App

The first static desktop app design lives in `frontend/`. It uses React/Vite for the interface and Electron as the desktop app shell.

Run the desktop app locally:

```powershell
cd frontend
npm install
npm run app:dev
```

Run the browser preview only:

```powershell
cd frontend
npm run dev
```

Current app coverage:

- App shell with sidebar navigation.
- Checkout screen with product search, quick-pick products, cart, and totals.
- Inventory screen with filters and stock table.
- Reports screen with daily metrics and sales table.
- Users screen for role/account overview.
- Login screen for staff access.

## Planning Docs

- `docs/design.md` defines the visual direction, screen structure, roles, and interaction standards.
- `docs/user-flows.md` maps the main cashier, inventory, reporting, login, and admin flows.
- `docs/wireframes.md` contains low-fidelity screen layouts.
- `docs/data-model.md` drafts the first SQLite schema.

## Repository Workflow

Before making meaningful changes, check:

- `.impeccable/charter.md` for working principles.
- `.impeccable/tasks.md` for current status, open tasks, and decisions.
- `.impeccable/quality-gates.md` for verification guidance.

## Git

The local `main` branch tracks:

```text
https://github.com/Alexhzier/POS-HJA.git
```

Useful commands:

```powershell
git status
git pull
git add .
git commit -m "Describe the change"
git push
```

## Next Decisions

- Decide the initial data model for products, sales, and inventory.
- Choose the Java backend framework.
- Define the first backend API endpoint for the checkout workflow.
- Decide how authentication and role permissions should work.
