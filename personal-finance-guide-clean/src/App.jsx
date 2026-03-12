import React, { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Expenses from "./pages/Expenses";
import Budget from "./pages/Budget";
import Education from "./pages/Education";
import Navbar from "./components/Navbar";

export default function App() {
  const [page, setPage] = useState("dashboard");
  const [currency, setCurrency] = useState("USD"); // Default display currency

  const renderPage = () => {
    switch (page) {
      case "expenses":
        return <Expenses currency={currency} />;   // Pass currency
      case "budget":
        return <Budget currency={currency} />;
      case "education":
        return <Education currency={currency} />;
      default:
        return <Dashboard currency={currency} />;
    }
  };

  return (
    <div>
      <Navbar setPage={setPage} currency={currency} setCurrency={setCurrency} />
      <div className="container">{renderPage()}</div>
    </div>
  );
}