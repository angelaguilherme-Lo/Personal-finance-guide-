import React, { useState } from "react";
import Card from "../components/Card";

export default function Budget() {
  const [budget, setBudget] = useState(0);

  return (
    <Card title="Set Budget">
      <input
        className="input"
        type="number"
        placeholder="Enter budget"
        value={budget}
        onChange={(e) => setBudget(Number(e.target.value))}
      />
      <p style={{ marginTop: "10px" }}>Current Budget: ${budget}</p>
    </Card>
  );
}