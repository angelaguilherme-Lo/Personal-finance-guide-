import Card from "../components/Card";
import { formatMoney } from "../utils/currency";

export default function Budget({ budget, setBudget, currency }) {
  return (
    <div className="page-flow">
      <Card
        title="Budget planner"
        eyebrow="Spending control"
        className="reveal"
      >
        <label className="budget-input">
          <span>Set your target budget</span>
          <input
            type="number"
            min="0"
            step="0.01"
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
          />
        </label>

        <p className="budget-note">
          Current budget: {formatMoney(budget, currency)}
        </p>
      </Card>
    </div>
  );
}