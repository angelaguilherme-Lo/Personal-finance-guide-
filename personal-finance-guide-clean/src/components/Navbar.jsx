const pages = [
  { id: "dashboard", label: "Overview" },
  { id: "expenses", label: "Expenses" },
  { id: "budget", label: "Budget" },
  { id: "education", label: "Tips" },
];

export default function Navbar({ page, setPage, currency, setCurrency }) {
  return (
    <header className="topbar">
      <div>
        <p className="brand-kicker">Personal finance guide</p>
        <h1>Track smarter, spend with clarity.</h1>
      </div>

      <div className="topbar-actions">
        <nav className="nav-pills" aria-label="Primary navigation">
          {pages.map((item) => (
            <button
              key={item.id}
              type="button"
              className={page === item.id ? "is-active" : ""}
              onClick={() => setPage(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <label className="currency-switcher">
          <span>Display currency</span>
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="JPY">JPY</option>
          </select>
        </label>
      </div>
    </header>
  );
}