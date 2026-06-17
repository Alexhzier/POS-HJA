# POS-HJA Wireframes

These wireframes are low-fidelity layout guides. They define screen structure before visual polish.

## App Shell

```text
+------------------------------------------------------------------+
| POS-HJA                                      User Name | Log Out  |
+------------+-----------------------------------------------------+
| Checkout   | Page Title                                           |
| Inventory  |                                                     |
| Reports    | Main content area                                   |
| Users      |                                                     |
| Settings   |                                                     |
+------------+-----------------------------------------------------+
```

Mobile navigation can collapse into a top menu button or bottom navigation with the most important role-specific screens.

## Login

```text
+--------------------------------------+
| POS-HJA                              |
| Candy and School Supplies POS        |
|                                      |
| Username or Email                    |
| [____________________________]       |
| Password                             |
| [____________________________]       |
|                                      |
| [ Log In ]                           |
| Create staff account                 |
+--------------------------------------+
```

## Checkout

```text
+--------------------------------------------------------------------------------+
| Checkout                                                       Cashier: Maria   |
+--------------------------------------------------------------------------------+
| Search product, SKU, or barcode                                                     |
| [__________________________________________________________] [Add]              |
+----------------------------------------------+---------------------------------+
| Product Results / Quick Picks                | Cart                            |
|                                              |                                 |
| [Notebook]  $2.50  In stock                  | Notebook        x2      $5.00   |
| [Pencil]    $0.50  In stock                  | Chocolate Bar   x1      $1.25   |
| [Candy]     $1.25  Low stock                 |                                 |
|                                              | Subtotal                $6.25   |
|                                              | Tax                     $0.00   |
|                                              | Total                   $6.25   |
|                                              |                                 |
|                                              | [Complete Sale]                 |
|                                              | [Clear Cart] [Hold Sale]        |
+----------------------------------------------+---------------------------------+
```

Checkout notes:

- Search should keep focus after adding an item.
- Cart totals should stay visible.
- Low-stock and out-of-stock statuses should appear before checkout.

## Inventory

```text
+--------------------------------------------------------------------------------+
| Inventory                                      [Add Product]                    |
+--------------------------------------------------------------------------------+
| Search [________________] Category [All v] Status [All v] Low Stock [ ]        |
+--------------------------------------------------------------------------------+
| SKU      | Product Name       | Category       | Price  | Stock | Status       |
| CAND-01  | Chocolate Bar      | Candy          | $1.25  | 8     | Low Stock    |
| SCH-01   | Notebook           | School Supply  | $2.50  | 40    | In Stock     |
| SCH-02   | Pencil             | School Supply  | $0.50  | 100   | In Stock     |
+--------------------------------------------------------------------------------+
| Edit panel or modal: name, SKU, category, price, stock, reorder level           |
+--------------------------------------------------------------------------------+
```

Inventory notes:

- SKU should be unique.
- Low-stock rows should be visible but not visually overwhelming.
- Product edits should show validation inline.

## Daily Sales Report

```text
+--------------------------------------------------------------------------------+
| Daily Sales Report                         Date [ 2026-06-17 ]                 |
+--------------------------------------------------------------------------------+
| Gross Sales        Transactions       Items Sold        Average Sale            |
| $324.50            78                 212               $4.16                   |
+--------------------------------------------------------------------------------+
| Time     | Cashier | Items | Total  | Status    | Action                       |
| 09:12 AM | Maria   | 3     | $6.25  | Complete  | View                         |
| 09:18 AM | Alex    | 1     | $2.50  | Complete  | View                         |
+--------------------------------------------------------------------------------+
| Top Selling Products                                                           |
| Chocolate Bar - 42 sold                                                        |
| Pencil - 37 sold                                                               |
+--------------------------------------------------------------------------------+
```

Report notes:

- Date selection should be fast.
- Empty days should show a clear no-sales state.
- Sale details should be available from the report table.

## Users

```text
+--------------------------------------------------------------------------------+
| Users                                             [Add User]                    |
+--------------------------------------------------------------------------------+
| Name       | Username/Email       | Role               | Status | Action       |
| Maria      | maria@example.com    | Cashier            | Active | Edit         |
| Jordan     | jordan@example.com   | Inventory Manager  | Active | Edit         |
| Alex       | alex@example.com     | Admin/Store Owner  | Active | Edit         |
+--------------------------------------------------------------------------------+
| User form: name, username/email, role, password setup, active status            |
+--------------------------------------------------------------------------------+
```

User notes:

- Only admins should access this screen.
- Role changes should be confirmed when they reduce privileges.
- Deactivation should not delete sale history.
