import React, { useState } from "react";

export default function ExpenseForm({ addExpense }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("USD");

  const currencies = ["USD", "EUR", "GBP", "JPY"];

  const submit = (e) => {
    e.preventDefault();
    if (!name || !amount) return;
    addExpense({ id: Date.now(), name, amount: Number(amount), currency });
    setName("");
    setAmount("");
    setCurrency("USD");
  };

  return (
    <form
      onSubmit={submit}
      style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "20px" }}
    >
      <input
        className="input"
        placeholder="Expense name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="input"
        placeholder="Amount"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select
        className="input"
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
        style={{ maxWidth: "100px" }}
      >
        {currencies.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
      <button className="button">Add</button>
    </form>
  );
}