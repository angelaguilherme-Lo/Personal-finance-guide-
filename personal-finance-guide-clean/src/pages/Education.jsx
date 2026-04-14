import Card from "../components/Card";

const tips = [
  "Use a monthly budget cap before discretionary spending starts.",
  "Review recurring costs weekly so subscriptions do not pile up silently.",
  "Group expenses by category to spot lifestyle changes faster.",
];

export default function Education() {
  return (
    <div className="tips-grid page-flow">
      {tips.map((tip, index) => (
        <Card
          key={tip}
          title={`Tip ${index + 1}`}
          eyebrow="Financial habit"
          className="reveal"
        >
          <p>{tip}</p>
        </Card>
      ))}
    </div>
  );
}