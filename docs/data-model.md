# POS-HJA Data Model

The initial database is SQLite. The schema should support checkout, inventory management, daily reports, and user login/sign-up.

## Entity Overview

Core entities:

- users
- products
- categories
- sales
- sale_items
- inventory_adjustments

Optional later entities:

- shifts
- payment_methods
- discounts
- suppliers

## Relationships

```text
users 1--many sales
categories 1--many products
sales 1--many sale_items
products 1--many sale_items
products 1--many inventory_adjustments
users 1--many inventory_adjustments
```

## Tables

### users

Stores staff accounts and roles.

| Column | Type | Notes |
| --- | --- | --- |
| id | INTEGER PRIMARY KEY | Auto-increment user id |
| name | TEXT NOT NULL | Display name |
| username | TEXT NOT NULL UNIQUE | Login username |
| email | TEXT UNIQUE | Optional email |
| password_hash | TEXT NOT NULL | Never store plain passwords |
| role | TEXT NOT NULL | cashier, inventory_manager, admin |
| is_active | INTEGER NOT NULL DEFAULT 1 | 1 active, 0 inactive |
| created_at | TEXT NOT NULL | ISO timestamp |
| updated_at | TEXT NOT NULL | ISO timestamp |

### categories

Groups products for filtering and reports.

| Column | Type | Notes |
| --- | --- | --- |
| id | INTEGER PRIMARY KEY | Auto-increment category id |
| name | TEXT NOT NULL UNIQUE | Candy, school supplies, etc. |
| created_at | TEXT NOT NULL | ISO timestamp |
| updated_at | TEXT NOT NULL | ISO timestamp |

### products

Stores sellable items and inventory values.

| Column | Type | Notes |
| --- | --- | --- |
| id | INTEGER PRIMARY KEY | Auto-increment product id |
| sku | TEXT NOT NULL UNIQUE | Barcode or manual SKU |
| name | TEXT NOT NULL | Product name |
| category_id | INTEGER | References categories.id |
| price_cents | INTEGER NOT NULL | Store currency as cents |
| stock_quantity | INTEGER NOT NULL DEFAULT 0 | Current stock |
| reorder_level | INTEGER NOT NULL DEFAULT 0 | Low-stock threshold |
| is_active | INTEGER NOT NULL DEFAULT 1 | Hide without deleting history |
| created_at | TEXT NOT NULL | ISO timestamp |
| updated_at | TEXT NOT NULL | ISO timestamp |

### sales

Stores each completed sale.

| Column | Type | Notes |
| --- | --- | --- |
| id | INTEGER PRIMARY KEY | Auto-increment sale id |
| cashier_user_id | INTEGER NOT NULL | References users.id |
| subtotal_cents | INTEGER NOT NULL | Sum before tax/discount |
| discount_cents | INTEGER NOT NULL DEFAULT 0 | Future-ready |
| tax_cents | INTEGER NOT NULL DEFAULT 0 | Future-ready |
| total_cents | INTEGER NOT NULL | Final amount |
| status | TEXT NOT NULL | completed, voided |
| completed_at | TEXT NOT NULL | ISO timestamp |
| created_at | TEXT NOT NULL | ISO timestamp |

### sale_items

Stores products sold in each sale.

| Column | Type | Notes |
| --- | --- | --- |
| id | INTEGER PRIMARY KEY | Auto-increment sale item id |
| sale_id | INTEGER NOT NULL | References sales.id |
| product_id | INTEGER NOT NULL | References products.id |
| product_name_snapshot | TEXT NOT NULL | Preserve history after rename |
| sku_snapshot | TEXT NOT NULL | Preserve history after SKU change |
| unit_price_cents | INTEGER NOT NULL | Price at sale time |
| quantity | INTEGER NOT NULL | Quantity sold |
| line_total_cents | INTEGER NOT NULL | unit price x quantity |

### inventory_adjustments

Tracks manual stock changes outside normal checkout.

| Column | Type | Notes |
| --- | --- | --- |
| id | INTEGER PRIMARY KEY | Auto-increment adjustment id |
| product_id | INTEGER NOT NULL | References products.id |
| user_id | INTEGER NOT NULL | References users.id |
| change_quantity | INTEGER NOT NULL | Positive or negative |
| reason | TEXT NOT NULL | restock, correction, damaged, returned |
| note | TEXT | Optional explanation |
| created_at | TEXT NOT NULL | ISO timestamp |

## Initial Indexes

- `idx_products_name` on `products(name)`
- `idx_products_sku` on `products(sku)`
- `idx_sales_completed_at` on `sales(completed_at)`
- `idx_sale_items_sale_id` on `sale_items(sale_id)`
- `idx_inventory_adjustments_product_id` on `inventory_adjustments(product_id)`

## Data Rules

- Prices should be stored as integer cents.
- Product deletion should be soft-delete through `is_active`.
- Sales should keep product name, SKU, and price snapshots.
- Stock should decrease only after a sale is successfully saved.
- Voided sales should not be deleted.
- Passwords must be hashed by the backend before storage.

## First Schema Questions

- Should sales tax be used now or later?
- Should barcode scanning be supported immediately?
- Should inventory manager accounts be allowed to run checkout?
- Should sign-up be open, invite-only, or admin-created?
