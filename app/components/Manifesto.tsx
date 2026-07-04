"use client";

import { useEffect, useRef, useState } from "react";

const beliefs = [
  { text: "That ", bold: "every human being is an architecture", rest: " — designed with intention, capable of extraordinary things." },
  { text: "That most people are not broken. They are simply ", bold: "building on a foundation that was never theirs.", rest: "" },
  { text: "That ", bold: "transformation is not a feeling.", rest: " It is a structure. And structures can be designed." },
  { text: "That the gap between who you are and who you are becoming is not a failure — it is ", bold: "an invitation.", rest: "" },
  { text: "That Africa does not need more performers of borrowed identities. It needs ", bold: "original architects of original lives.", rest: "" },
  { text: "That ", bold: "becoming is not a destination.", rest: " It is the most important work any human being will ever do." },
];

export default function Manifesto() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        background: "var(--cream)",
        padding: "130px 60px",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: "opacity 0.9s ease, transform 0.9s ease",
      }}
    >
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <div style={{
          fontFamily: "var(--font-dm-mono), monospace",
          fontSize: 10,
          letterSpacing: "5px",
          textTransform: "uppercase",
          color: "var(--gold-muted)",
          marginBottom: 20,
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}>
          <span style={{ width: 24, height: 1, background: "var(--gold-muted)", display: "inline-block" }} />
          We Believe
        </div>

        <h2 style={{
          fontFamily: "var(--font-cormorant), serif",
          fontSize: "clamp(36px, 4.5vw, 62px)",
          fontWeight: 300,
          lineHeight: 1.1,
          color: "var(--indigo)",
          marginBottom: 60,
        }}>
          The Mindvest<br />
          <em style={{ fontStyle: "italic", color: "var(--gold-muted)" }}>Manifesto</em>
        </h2>

        <div>
          {beliefs.map((belief, i) => (
            <ManifestoLine
              key={i}
              belief={belief}
              index={i}
              delay={i * 80}
              visible={visible}
            />
          ))}
        </div>
      </div>

      <style>{`
        section { }
        @media (max-width: 960px) {
          section { padding: 80px 24px !important; }
        }
      `}</style>
    </section>
  );
}

function ManifestoLine({
  belief,
  index,
  delay,
  visible,
}: {
  belief: { text: string; bold: string; rest: string };
  index: number;
  delay: number;
  visible: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: "var(--font-cormorant), serif",
        fontSize: "clamp(20px, 2.8vw, 32px)",
        fontWeight: 300,
        color: hovered ? "var(--indigo)" : "rgba(44,40,32,0.75)",
        lineHeight: 1.45,
        padding: "26px 0 26px 36px",
        borderBottom: "1px solid var(--cream-dark)",
        borderLeft: `2px solid ${hovered ? "var(--gold)" : "transparent"}`,
        paddingLeft: hovered ? 44 : 36,
        transition: "all 0.35s ease",
        cursor: "default",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0)" : "translateX(-20px)",
        transitionDelay: `${delay}ms`,
        display: "flex",
        alignItems: "flex-start",
        gap: 20,
      }}
    >
      <span style={{
        fontFamily: "var(--font-dm-mono), monospace",
        fontSize: 10,
        letterSpacing: "2px",
        color: "var(--gold-muted)",
        marginTop: 8,
        flexShrink: 0,
        opacity: hovered ? 1 : 0.4,
        transition: "opacity 0.3s",
      }}>
        {String(index + 1).padStart(2, "0")}
      </span>
      <span>
        {belief.text}
        <strong style={{ fontWeight: 600, color: "var(--gold-muted)" }}>
          {belief.bold}
        </strong>
        {belief.rest}
      </span>
    </div>
  );
}
