import { useEffect, useState } from "react";

const defaultForm = {
  name: "",
  amount: "",
  currency: "USD",
  category: "General",
};

export default function ExpenseForm({ onSubmit, editingExpense, onCancel }) {
  const [form, setForm] = useState(defaultForm);

  useEffect(() => {
    if (editingExpense) {
      setForm({
        name: editingExpense.name,
        amount: editingExpense.amount,
        currency: editingExpense.currency,
        category: editingExpense.category || "General",
      });
    } else {
      setForm(defaultForm);
    }
  }, [editingExpense]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.name.trim() || !form.amount) return;

    onSubmit({
      ...form,
      amount: Number(form.amount),
    });

    if (!editingExpense) {
      setForm(defaultForm);
    }
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          <span>Expense name</span>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Groceries, rent, fuel..."
          />
        </label>

        <label>
          <span>Amount</span>
          <input
            name="amount"
            type="number"
            min="0"
            step="0.01"
            value={form.amount}
            onChange={handleChange}
            placeholder="0.00"
          />
        </label>

        <label>
          <span>Currency</span>
          <select
            name="currency"
            value={form.currency}
            onChange={handleChange}
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="JPY">JPY</option>
          </select>
        </label>

        <label>
          <span>Category</span>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
          >
            <option value="General">General</option>
            <option value="Housing">Housing</option>
            <option value="Food">Food</option>
            <option value="Transport">Transport</option>
            <option value="Bills">Bills</option>
            <option value="Leisure">Leisure</option>
          </select>
        </label>
      </div>

      <div className="form-actions">
        <button className="btn btn-primary" type="submit">
          {editingExpense ? "Update expense" : "Add expense"}
        </button>

        {editingExpense && (
          <button className="btn btn-secondary" type="button" onClick={onCancel}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}