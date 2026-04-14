import { useEffect, useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Expenses from "./pages/Expenses";
import Budget from "./pages/Budget";
import Education from "./pages/Education";
import useLocalStorage from "./hooks/useLocalStorage";

export default function App() {
  const [page, setPage] = useState("dashboard");
  const [currency, setCurrency] = useState("USD");
  const [budget, setBudget] = useLocalStorage("budget", 2500);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [page]);

  const pageContent = useMemo(() => {
    switch (page) {
      case "expenses":
        return <Expenses currency={currency} />;
      case "budget":
        return (
          <Budget
            budget={budget}
            setBudget={setBudget}
            currency={currency}
          />
        );
      case "education":
        return <Education />;
      default:
        return <Dashboard currency={currency} budget={budget} />;
    }
  }, [page, currency, budget, setBudget]);

  return (
    <div className="app-shell">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <Navbar
        page={page}
        setPage={setPage}
        currency={currency}
        setCurrency={setCurrency}
      />

      <main className="main-content">{pageContent}</main>
    </div>
  );
}