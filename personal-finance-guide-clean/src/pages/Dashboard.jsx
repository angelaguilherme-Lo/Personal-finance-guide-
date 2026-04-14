import Card from "../components/Card";
import useLocalStorage from "../hooks/useLocalStorage";
import { convertCurrency, formatMoney } from "../utils/currency";

export default function Dashboard({ currency, budget }) {
  const [expenses] = useLocalStorage("expenses", []);

  const total = expenses.reduce(
    (sum, item) => sum + convertCurrency(item.amount, item.currency, currency),
    0
  );

  const remaining = Math.max(budget - total, 0);

  const topCategory = expenses.reduce((acc, item) => {
    const value = convertCurrency(item.amount, item.currency, currency);
    acc[item.category] = (acc[item.category] || 0) + value;
    return acc;
  }, {});

  const leader = Object.entries(topCategory).sort((a, b) => b[1] - a[1])[0];

  return (
    <div className="page-flow">
      <section className="hero-card reveal">
        <div>
          <p className="section-kicker">Financial snapshot</p>
          <h2>See your money in one calm, focused space.</h2>
          <p>
            Your dashboard now groups budget, spending, and top category
            insights in a cleaner premium layout.
          </p>
        </div>
        <div className="hero-orb" aria-hidden="true" />
      </section>

      <div className="stats-grid reveal">
        <Card eyebrow="Summary" title="Total spending">
          <p className="metric">{formatMoney(total, currency)}</p>
        </Card>

        <Card eyebrow="Budget" title="Remaining budget">
          <p className="metric">{formatMoney(remaining, currency)}</p>
        </Card>

        <Card eyebrow="Focus" title="Top category">
          <p className="metric metric-small">
            {leader ? leader[0] : "No data yet"}
          </p>
        </Card>
      </div>
    </div>
  );
}