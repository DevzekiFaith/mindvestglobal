export default function StatementStrip() {
  const items = [
    "We don't change people",
    "We create the conditions in which people finally become who they already are",
    "Transformation is not a feeling — it is a structure",
    "And structures can be designed",
    "Every human being is an architecture",
    "The becoming is the most important work you will ever do",
  ];

  // Duplicate for infinite scroll
  const allItems = [...items, ...items];

  return (
    <div style={{ background: "var(--gold)", overflow: "hidden", position: "relative" }}>
      <div
        style={{
          display: "flex",
          animation: "stripScroll 28s linear infinite",
          whiteSpace: "nowrap",
        }}
      >
        {allItems.map((item, i) => (
          <div
            key={i}
            style={{
              padding: "17px 52px",
              fontFamily: "var(--font-cormorant), serif",
              fontSize: 18,
              fontStyle: "italic",
              color: "var(--indigo-deep)",
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              gap: 28,
            }}
          >
            {item}
            <span style={{
              width: 5,
              height: 5,
              background: "var(--indigo-deep)",
              borderRadius: "50%",
              opacity: 0.35,
              flexShrink: 0,
              display: "inline-block",
            }} />
          </div>
        ))}
      </div>
    </div>
  );
}
