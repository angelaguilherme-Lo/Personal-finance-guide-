import { convertCurrency } from "../utils/currency";

export default function ExpenseList({ expenses = [], displayCurrency = "USD" }) {
  if (!Array.isArray(expenses)) return null; // Safety check

  return (
    <div>
      {expenses.map((exp) => {
        const converted = convertCurrency(
          exp.amount || 0,
          exp.currency || "USD",
          displayCurrency
        );

        return (
          <div key={exp.id} className="expense-item">
            <span>{exp.name || "Unnamed"}</span>
            <span>
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: exp.currency || "USD",
              }).format(exp.amount || 0)} →{" "}
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: displayCurrency,
              }).format(converted)}
            </span>
          </div>
        );
      })}
    </div>
  );
}