import Card from "../components/Card";
import useLocalStorage from "../hooks/useLocalStorage";
import { convertCurrency } from "../utils/currency";

export default function Dashboard({ currency }) {
  const [expenses] = useLocalStorage("expenses", []);
  const total = expenses.reduce(
    (sum, e) => sum + convertCurrency(e.amount, e.currency, currency),
    0
  );

  return (
    <div className="grid-3">
      <Card title="Total Expenses">
        {new Intl.NumberFormat("en-US", { style: "currency", currency }).format(total)}
      </Card>
      <Card title="Transactions">{expenses.length}</Card>
      <Card title="Tip">Track your spending daily for better savings</Card>
    </div>
  );
}