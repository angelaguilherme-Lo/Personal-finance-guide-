export default function Navbar({ setPage, currency, setCurrency }) {
  const pages = ["dashboard", "expenses", "budget", "education"];
  const currencies = ["USD", "EUR", "GBP", "JPY"];

  return (
    <div className="navbar">
      <h1>Finance Guide</h1>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        {pages.map((p) => (
          <button key={p} onClick={() => setPage(p)}>
            {p.charAt(0).toUpperCase() + p.slice(1)}
          </button>
        ))}

        {/* Currency selector */}
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="input"
          style={{ maxWidth: "100px" }}
        >
          {currencies.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>
    </div>
  );
}