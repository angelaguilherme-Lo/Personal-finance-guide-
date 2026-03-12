import React from "react";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import useLocalStorage from "../hooks/useLocalStorage";

export default function Expenses({ currency }) {  // Must receive currency
  const [expenses, setExpenses] = useLocalStorage("expenses", []); // default []

  const addExpense = (exp) => setExpenses([...expenses, exp]);

  return (
    <div>
      <ExpenseForm addExpense={addExpense} />
      <ExpenseList expenses={expenses} displayCurrency={currency} /> {/* Must pass displayCurrency */}
    </div>
  );
}