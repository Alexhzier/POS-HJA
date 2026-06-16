# Quality Gates

Use the smallest gate that gives real confidence for the change.

## Documentation Or Config

- Validate formatting where a formatter exists.
- Re-read changed instructions for clarity and consistency.
- Confirm file paths and commands are accurate.

## Application Code

- Run the most focused test or typecheck that covers the edited area.
- Add or update tests when the repo already has a natural test location and the behavior is non-trivial.
- Run broader checks when touching shared contracts, build config, routing, auth, persistence, or user-facing workflows.

## Frontend Work

- Start the app when practical and inspect the changed screen.
- Check desktop and mobile layouts for overflow, overlap, and broken interactions.
- Verify loading, empty, error, and success states when the change affects them.

## Handoff

- Summarize what changed.
- Mention the exact verification run.
- Name any residual risk or skipped check.
