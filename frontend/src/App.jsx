import { useMemo, useState } from 'react'
import {
  Archive,
  BarChart3,
  LogIn,
  PackagePlus,
  ReceiptText,
  Search,
  ShieldCheck,
  ShoppingCart,
  UserRound,
  UsersRound,
} from 'lucide-react'
import './App.css'

const products = [
  {
    sku: 'CAND-01',
    name: 'Chocolate Bar',
    category: 'Candy',
    price: '$1.25',
    stock: 8,
    status: 'Low stock',
  },
  {
    sku: 'SCH-01',
    name: 'Notebook',
    category: 'School Supply',
    price: '$2.50',
    stock: 40,
    status: 'In stock',
  },
  {
    sku: 'SCH-02',
    name: 'Pencil',
    category: 'School Supply',
    price: '$0.50',
    stock: 100,
    status: 'In stock',
  },
  {
    sku: 'CAND-07',
    name: 'Gummy Pack',
    category: 'Candy',
    price: '$1.75',
    stock: 0,
    status: 'Out of stock',
  },
]

const cartItems = [
  { name: 'Notebook', quantity: 2, price: '$2.50', total: '$5.00' },
  { name: 'Chocolate Bar', quantity: 1, price: '$1.25', total: '$1.25' },
  { name: 'Pencil', quantity: 4, price: '$0.50', total: '$2.00' },
]

const sales = [
  { time: '09:12 AM', cashier: 'Maria', items: 3, total: '$6.25', status: 'Complete' },
  { time: '09:18 AM', cashier: 'Alex', items: 1, total: '$2.50', status: 'Complete' },
  { time: '09:26 AM', cashier: 'Maria', items: 6, total: '$9.75', status: 'Complete' },
]

const staff = [
  { name: 'Maria Santos', username: 'maria', role: 'Cashier', status: 'Active' },
  { name: 'Jordan Lee', username: 'jordan', role: 'Inventory Manager', status: 'Active' },
  { name: 'Alex Hzier', username: 'alex', role: 'Admin/Store Owner', status: 'Active' },
]

const navigation = [
  { id: 'checkout', label: 'Checkout', icon: ShoppingCart },
  { id: 'inventory', label: 'Inventory', icon: Archive },
  { id: 'reports', label: 'Reports', icon: BarChart3 },
  { id: 'users', label: 'Users', icon: UsersRound },
  { id: 'login', label: 'Login', icon: LogIn },
]

function StatusBadge({ status }) {
  const tone = status === 'Out of stock' ? 'danger' : status === 'Low stock' ? 'warning' : 'success'
  return <span className={`status status-${tone}`}>{status}</span>
}

function AppShell({ activeScreen, setActiveScreen, children }) {
  const activeItem = navigation.find((item) => item.id === activeScreen)

  return (
    <div className="app-shell">
      <aside className="sidebar" aria-label="Primary navigation">
        <div className="brand-block">
          <div className="brand-mark">PH</div>
          <div>
            <p className="brand-name">POS-HJA</p>
            <p className="brand-subtitle">Candy & School Supplies</p>
          </div>
        </div>

        <nav className="nav-list">
          {navigation.map((item) => {
            const Icon = item.icon
            return (
              <button
                className={`nav-button ${activeScreen === item.id ? 'is-active' : ''}`}
                key={item.id}
                onClick={() => setActiveScreen(item.id)}
                type="button"
                title={item.label}
              >
                <Icon size={18} aria-hidden="true" />
                <span>{item.label}</span>
              </button>
            )
          })}
        </nav>

        <div className="role-card">
          <ShieldCheck size={18} aria-hidden="true" />
          <div>
            <p>Signed in preview</p>
            <strong>Admin/Store Owner</strong>
          </div>
        </div>
      </aside>

      <main className="workspace">
        <header className="topbar">
          <div>
            <p className="eyebrow">Official app design</p>
            <h1>{activeItem?.label ?? 'Checkout'}</h1>
          </div>
          <div className="operator-chip">
            <UserRound size={18} aria-hidden="true" />
            <span>Alex Hzier</span>
          </div>
        </header>
        {children}
      </main>
    </div>
  )
}

function CheckoutScreen() {
  const subtotal = '$8.25'

  return (
    <section className="screen-grid checkout-layout">
      <div className="panel product-panel">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">Fast register</p>
            <h2>Find products</h2>
          </div>
          <button className="icon-button" type="button" title="Add product manually">
            <PackagePlus size={18} aria-hidden="true" />
          </button>
        </div>

        <label className="search-field">
          <Search size={18} aria-hidden="true" />
          <span className="sr-only">Search product, SKU, or barcode</span>
          <input placeholder="Search product, SKU, or barcode" />
        </label>

        <div className="quick-grid">
          {products.slice(0, 3).map((product) => (
            <button className="product-tile" key={product.sku} type="button">
              <span>{product.name}</span>
              <strong>{product.price}</strong>
              <StatusBadge status={product.status} />
            </button>
          ))}
        </div>
      </div>

      <div className="panel cart-panel">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">Current sale</p>
            <h2>Cart</h2>
          </div>
          <span className="cart-count">{cartItems.length} items</span>
        </div>

        <div className="cart-lines">
          {cartItems.map((item) => (
            <div className="cart-line" key={item.name}>
              <div>
                <strong>{item.name}</strong>
                <span>
                  {item.quantity} x {item.price}
                </span>
              </div>
              <strong>{item.total}</strong>
            </div>
          ))}
        </div>

        <div className="totals">
          <div>
            <span>Subtotal</span>
            <strong>{subtotal}</strong>
          </div>
          <div>
            <span>Tax</span>
            <strong>$0.00</strong>
          </div>
          <div className="grand-total">
            <span>Total</span>
            <strong>{subtotal}</strong>
          </div>
        </div>

        <div className="action-row">
          <button className="primary-action" type="button">
            <ReceiptText size={18} aria-hidden="true" />
            Complete Sale
          </button>
          <button className="secondary-action" type="button">
            Clear
          </button>
        </div>
      </div>
    </section>
  )
}

function InventoryScreen() {
  return (
    <section className="panel full-panel">
      <div className="panel-heading">
        <div>
          <p className="eyebrow">Stock control</p>
          <h2>Inventory Management</h2>
        </div>
        <button className="primary-action compact" type="button">
          <PackagePlus size={18} aria-hidden="true" />
          Add Product
        </button>
      </div>

      <div className="filter-row">
        <label className="search-field">
          <Search size={18} aria-hidden="true" />
          <span className="sr-only">Search inventory</span>
          <input placeholder="Search inventory" />
        </label>
        <select aria-label="Category filter">
          <option>All categories</option>
          <option>Candy</option>
          <option>School Supply</option>
        </select>
        <select aria-label="Stock status filter">
          <option>All stock</option>
          <option>Low stock</option>
          <option>Out of stock</option>
        </select>
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>SKU</th>
              <th>Product</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.sku}>
                <td>{product.sku}</td>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>{product.stock}</td>
                <td>
                  <StatusBadge status={product.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

function ReportsScreen() {
  return (
    <section className="reports-stack">
      <div className="metric-grid">
        {[
          ['Gross sales', '$324.50'],
          ['Transactions', '78'],
          ['Items sold', '212'],
          ['Average sale', '$4.16'],
        ].map(([label, value]) => (
          <div className="metric" key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
          </div>
        ))}
      </div>

      <div className="panel full-panel">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">Today</p>
            <h2>Daily Sales Report</h2>
          </div>
          <input className="date-input" type="date" defaultValue="2026-06-17" aria-label="Report date" />
        </div>

        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Time</th>
                <th>Cashier</th>
                <th>Items</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {sales.map((sale) => (
                <tr key={`${sale.time}-${sale.cashier}`}>
                  <td>{sale.time}</td>
                  <td>{sale.cashier}</td>
                  <td>{sale.items}</td>
                  <td>{sale.total}</td>
                  <td>
                    <span className="status status-success">{sale.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

function UsersScreen() {
  return (
    <section className="panel full-panel">
      <div className="panel-heading">
        <div>
          <p className="eyebrow">Access control</p>
          <h2>Users</h2>
        </div>
        <button className="primary-action compact" type="button">
          <UsersRound size={18} aria-hidden="true" />
          Add User
        </button>
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Role</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {staff.map((user) => (
              <tr key={user.username}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.role}</td>
                <td>
                  <span className="status status-success">{user.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

function LoginScreen() {
  return (
    <section className="login-screen">
      <div className="login-panel">
        <div className="brand-mark large">PH</div>
        <p className="eyebrow">Staff access</p>
        <h2>Sign in to POS-HJA</h2>
        <label>
          Username or email
          <input placeholder="alex" />
        </label>
        <label>
          Password
          <input placeholder="Enter password" type="password" />
        </label>
        <button className="primary-action" type="button">
          <LogIn size={18} aria-hidden="true" />
          Log In
        </button>
        <p className="help-text">Staff accounts are approved by an admin/store owner.</p>
      </div>
    </section>
  )
}

function App() {
  const [activeScreen, setActiveScreen] = useState('checkout')
  const screen = useMemo(() => {
    if (activeScreen === 'inventory') return <InventoryScreen />
    if (activeScreen === 'reports') return <ReportsScreen />
    if (activeScreen === 'users') return <UsersScreen />
    if (activeScreen === 'login') return <LoginScreen />
    return <CheckoutScreen />
  }, [activeScreen])

  return (
    <AppShell activeScreen={activeScreen} setActiveScreen={setActiveScreen}>
      {screen}
    </AppShell>
  )
}

export default App
