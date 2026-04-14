import { convertCurrency, formatMoney } from "../utils/currency";

export default function ExpenseList({
  expenses = [],
  displayCurrency = "USD",
  onEdit,
  onDelete,
}) {
  if (!expenses.length) {
    return (
      <div className="empty-state">
        <p>No expenses yet. Add your first entry to build your tracker.</p>
      </div>
    );
  }

  return (
    <div className="expense-stack">
      {expenses.map((expense) => {
        const convertedAmount = convertCurrency(
          expense.amount,
          expense.currency,
          displayCurrency
        );

        return (
          <article className="expense-row" key={expense.id}>
            <div>
              <div className="expense-row-top">
                <h3>{expense.name}</h3>
                <span className="expense-tag">{expense.category}</span>
              </div>
              <p>
                Saved in {expense.currency} · Displayed in {displayCurrency}
              </p>
            </div>

            <div className="expense-row-actions">
              <strong>{formatMoney(convertedAmount, displayCurrency)}</strong>

              <div className="action-group">
                <button
                  className="btn btn-ghost"
                  type="button"
                  onClick={() => onEdit(expense)}
                >
                  Edit
                </button>

                <button
                  className="btn btn-danger"
                  type="button"
                  onClick={() => onDelete(expense.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}