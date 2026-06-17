# POS-HJA User Flows

## Flow 1: Cashier Checkout

Goal: cashier completes a sale and the system records it in SQLite.

1. Cashier logs in.
2. App opens to Checkout.
3. Cashier searches by product name, SKU, or barcode input.
4. Cashier adds product to cart.
5. Cashier adjusts quantities if needed.
6. System checks stock availability.
7. Cashier reviews cart total.
8. Cashier completes sale.
9. System saves the sale, sale items, user, timestamp, and totals.
10. System reduces stock quantities.
11. App shows sale complete state and clears the cart.

Failure paths:

- Product is not found.
- Product is out of stock.
- Quantity is higher than available stock.
- Sale save fails.

## Flow 2: Inventory Product Setup

Goal: inventory manager creates or updates a product.

1. Inventory manager logs in.
2. User opens Inventory.
3. User selects Add Product or edits an existing product.
4. User enters SKU, name, category, price, stock quantity, and reorder level.
5. System validates required fields and SKU uniqueness.
6. User saves.
7. System stores product changes.
8. Inventory table refreshes with updated stock status.

Failure paths:

- Required field is missing.
- SKU already exists.
- Price or stock value is invalid.
- Save fails.

## Flow 3: Daily Sales Report

Goal: admin/store owner reviews daily performance.

1. Admin/store owner logs in.
2. User opens Reports.
3. User selects a date.
4. System loads sales for the selected date.
5. System calculates gross sales, transaction count, items sold, and average sale.
6. User reviews sale list and top-selling products.
7. User opens sale details if needed.

Failure paths:

- No sales exist for selected date.
- Report calculation fails.
- Sale details are unavailable.

## Flow 4: User Login

Goal: staff member signs in and sees allowed screens.

1. User enters username or email.
2. User enters password.
3. System validates credentials.
4. System loads the user's role.
5. App routes the user to the correct default screen.

Default screens:

- Cashier: Checkout
- Inventory manager: Inventory
- Admin/store owner: Reports or Checkout

Failure paths:

- Credentials are invalid.
- Account is inactive.
- Role is missing or unsupported.

## Flow 5: Admin User Management

Goal: admin/store owner creates and manages staff access.

1. Admin/store owner logs in.
2. User opens Users.
3. User adds a staff account or edits an existing account.
4. User assigns a role.
5. System validates the account details.
6. User saves.
7. System updates staff access.

Failure paths:

- Email or username already exists.
- Role is not selected.
- Admin attempts to deactivate their own active session without confirmation.

## Role Permissions

| Capability | Cashier | Inventory Manager | Admin/Store Owner |
| --- | --- | --- | --- |
| Checkout cart | Yes | Optional | Yes |
| Complete sale | Yes | Optional | Yes |
| View inventory | Limited | Yes | Yes |
| Edit products | No | Yes | Yes |
| View daily reports | Limited | Yes | Yes |
| Manage users | No | No | Yes |
| Configure settings | No | No | Yes |
