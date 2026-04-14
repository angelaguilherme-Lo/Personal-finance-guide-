import { useMemo, useState } from "react";
import Card from "../components/Card";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import useLocalStorage from "../hooks/useLocalStorage";
import { convertCurrency, formatMoney } from "../utils/currency";

export default function Expenses({ currency }) {
  const [expenses, setExpenses] = useLocalStorage("expenses", []);
  const [editingExpense, setEditingExpense] = useState(null);

  const addOrUpdateExpense = (payload) => {
    if (editingExpense) {
      setExpenses((current) =>
        current.map((item) =>
          item.id === editingExpense.id
            ? { ...item, ...payload, id: editingExpense.id }
            : item
        )
      );
      setEditingExpense(null);
      return;
    }

    setExpenses((current) => [...current, { ...payload, id: Date.now() }]);
  };

  const deleteExpense = (id) => {
    setExpenses((current) => current.filter((item) => item.id !== id));
    if (editingExpense?.id === id) {
      setEditingExpense(null);
    }
  };

  const total = useMemo(
    () =>
      expenses.reduce(
        (sum, item) =>
          sum + convertCurrency(item.amount, item.currency, currency),
        0
      ),
    [currency, expenses]
  );

  return (
    <div className="content-grid page-flow">
      <Card
        title={editingExpense ? "Edit expense" : "Add a new expense"}
        eyebrow="Manager"
        className="reveal"
      >
        <ExpenseForm
          onSubmit={addOrUpdateExpense}
          editingExpense={editingExpense}
          onCancel={() => setEditingExpense(null)}
        />
      </Card>

      <Card
        title="Expense history"
        eyebrow="Live records"
        className="reveal delay-1"
      >
        <div className="list-toolbar">
          <p>{expenses.length} entries</p>
          <strong>{formatMoney(total, currency)}</strong>
        </div>

        <ExpenseList
          expenses={expenses}
          displayCurrency={currency}
          onEdit={setEditingExpense}
          onDelete={deleteExpense}
        />
      </Card>
    </div>
  );
}