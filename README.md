# POS-HJA

POS-HJA is a planned point-of-sale system for the HJA candy and school supplies store.

## Current Status

This repository is in its initialization phase. It currently contains the project README and an `.impeccable` workflow scaffold for tracking decisions, quality gates, and implementation notes.

No application stack has been selected yet.

## Project Goals

- Track sales for candy and school supply items.
- Support store inventory workflows.
- Keep future implementation decisions documented as the project takes shape.
- Build with small, reviewable changes that can be verified before they are pushed.

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

- Choose the application stack.
- Define the first POS workflow to build.
- Decide the initial data model for products, sales, and inventory.
