# POS-HJA Design

## Product Direction

POS-HJA is a practical point-of-sale app for a small candy and school supplies store. The interface should feel fast, calm, and easy to scan during checkout, while still giving inventory managers and owners enough detail to make decisions.

## Design Principles

- Prioritize speed at the register.
- Keep prices, quantities, totals, and stock status highly visible.
- Use role-based navigation so each user sees only the tools they need.
- Make destructive actions explicit and reversible where possible.
- Prefer dense, organized layouts over marketing-style screens.
- Use plain language for store operations.

## Primary Roles

- Cashier: runs checkout, searches products, adjusts cart quantities, completes sales.
- Inventory manager: manages products, stock counts, categories, reorder levels, and price updates.
- Admin/store owner: reviews daily sales, manages users, sees reports, and configures store settings.

## Navigation Model

Use a left sidebar on desktop/tablet and a compact bottom or drawer navigation on small screens.

Core navigation:

- Checkout
- Inventory
- Reports
- Users
- Settings

Role visibility:

- Cashier: Checkout, limited Reports for current shift if needed.
- Inventory manager: Inventory, Reports.
- Admin/store owner: Checkout, Inventory, Reports, Users, Settings.

## Visual Style

The app should look operational and trustworthy, with just enough warmth to fit a candy and school supplies store.

Suggested palette:

- Background: `#F7F8FA`
- Surface: `#FFFFFF`
- Text: `#17202A`
- Muted text: `#5D6875`
- Primary action: `#2563EB`
- Success: `#16A34A`
- Warning: `#F59E0B`
- Danger: `#DC2626`
- Accent: `#E11D48`
- Border: `#D8DEE8`

Use color sparingly:

- Blue for primary actions.
- Green for completed sales and healthy stock.
- Amber for low-stock warnings.
- Red for voids, deletion, failed payments, or critical stock.
- Pink/red accent only for small candy-store personality touches.

## Typography

- Use a readable sans-serif font stack.
- Use large numeric text for totals and quantities.
- Keep table text compact but readable.
- Avoid oversized hero-style headings inside app screens.

## Core Screens

### Login And Sign-Up

Purpose: let staff access the app with the correct role.

Expected elements:

- Store name
- Email or username field
- Password field
- Login button
- Sign-up path for approved staff setup
- Error state for invalid credentials

### Checkout

Purpose: complete a sale quickly.

Expected layout:

- Product search and barcode/manual SKU input at the top.
- Product results or quick-pick grid on the left.
- Cart on the right with item name, quantity, price, subtotal, and remove control.
- Order summary fixed in view with subtotal, discount if supported, tax if configured, and total.
- Checkout button as the strongest action.
- Clear cart and hold sale as secondary actions.

Important states:

- Empty cart
- Product not found
- Item out of stock
- Sale complete
- Sale failed

### Inventory

Purpose: manage product details and stock.

Expected layout:

- Search and filters at top.
- Product table with SKU, name, category, price, stock, reorder level, and status.
- Add product button.
- Edit product panel or modal.
- Low-stock filter.

Important states:

- No products
- Low stock
- Out of stock
- Duplicate SKU
- Unsaved changes

### Daily Sales Report

Purpose: show store performance for a selected day.

Expected layout:

- Date selector.
- Summary metrics: gross sales, transaction count, items sold, average sale.
- Sales table with time, cashier, total, payment status, and receipt/details action.
- Top-selling products section.

Important states:

- No sales for date
- Loading report
- Export unavailable

### User Management

Purpose: let admins manage staff accounts and roles.

Expected layout:

- User list with name, email/username, role, status, and last login.
- Add user action.
- Role selector.
- Activate/deactivate account controls.

## Interaction Standards

- Primary actions should be obvious and stable in position.
- Use confirmation dialogs for void sale, delete product, deactivate user, and clear cart.
- Use inline validation for forms.
- Use toast or banner feedback for successful saves and completed sales.
- Preserve entered form data when validation fails.

## Accessibility Notes

- Every interactive control needs a visible label or accessible name.
- Color cannot be the only signal for stock status or errors.
- Cart and report totals should be readable at common laptop resolutions.
- Keyboard use should support checkout search, item selection, quantity edits, and checkout.
