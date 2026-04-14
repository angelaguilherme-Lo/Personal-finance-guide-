export default function Card({ title, eyebrow, children, className = "" }) {
  return (
    <section className={`panel ${className}`.trim()}>
      {(eyebrow || title) && (
        <header className="panel-header">
          {eyebrow && <span className="panel-eyebrow">{eyebrow}</span>}
          {title && <h2>{title}</h2>}
        </header>
      )}
      {children}
    </section>
  );
}