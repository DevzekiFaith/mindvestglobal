"use client";

import { useEffect, useRef, useState } from "react";

const personas = [
  {
    age: "Ages 25 – 34 · Entry Point",
    archetype: "The Awakening",
    type: "Young professional · Early entrepreneur",
    truth: "\"I've achieved what I said I wanted. So why does it feel like someone else's life?\"",
    want: "Wants → Identity clarity · Direction · A framework for becoming",
    num: "01",
  },
  {
    age: "Ages 35 – 45 · Core",
    archetype: "The Reconstruction",
    type: "Mid-career leader · Business owner",
    truth: "\"I've built something real. But I'm quietly asking whether this is it — and afraid the answer is yes.\"",
    want: "Wants → Realignment · Deeper leadership · A life that matches their interior",
    num: "02",
  },
  {
    age: "Ages 45 – 55 · Premium",
    archetype: "The Legacy Maker",
    type: "Senior executive · Institutional leader",
    truth: "\"I have the position. But I want my leadership to mean something beyond the metrics.\"",
    want: "Wants → Legacy architecture · Cultural impact · Integrated leadership",
    num: "03",
  },
];

export default function Audience() {
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
      id="who"
      style={{
        padding: "130px 60px",
        background: "var(--white)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: "opacity 0.9s ease, transform 0.9s ease",
      }}
    >
      <div style={{ maxWidth: 1300, margin: "0 auto" }}>
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
          Who We Serve
        </div>

        <h2 style={{
          fontFamily: "var(--font-cormorant), serif",
          fontSize: "clamp(36px, 4.5vw, 62px)",
          fontWeight: 300,
          lineHeight: 1.1,
          color: "var(--indigo)",
          marginBottom: 64,
        }}>
          Smart enough to know<br />
          something is wrong.<br />
          <em style={{ fontStyle: "italic", color: "var(--gold-muted)" }}>
            Honest enough to change it.
          </em>
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 3,
          }}
          className="audience-grid"
        >
          {personas.map((persona, i) => (
            <PersonaCard key={i} persona={persona} delay={i * 120} visible={visible} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .audience-grid { grid-template-columns: 1fr !important; }
          section { padding: 80px 24px !important; }
        }
      `}</style>
    </section>
  );
}

function PersonaCard({
  persona,
  delay,
  visible,
}: {
  persona: { age: string; archetype: string; type: string; truth: string; want: string; num: string };
  delay: number;
  visible: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "52px 40px",
        background: hovered ? "var(--cream-dark)" : "var(--cream)",
        position: "relative",
        overflow: "hidden",
        transition: "background 0.35s ease",
        cursor: "default",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {/* Bottom gold line */}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        height: 3,
        width: hovered ? "100%" : "0%",
        background: "var(--gold)",
        transition: "width 0.5s ease",
      }} />

      {/* Large number bg */}
      <div style={{
        position: "absolute",
        top: 20,
        right: 20,
        fontFamily: "var(--font-cormorant), serif",
        fontSize: 80,
        fontWeight: 300,
        color: hovered ? "rgba(28,26,74,0.06)" : "rgba(28,26,74,0.04)",
        lineHeight: 1,
        transition: "color 0.3s",
        userSelect: "none",
      }}>
        {persona.num}
      </div>

      <div style={{
        fontFamily: "var(--font-dm-mono), monospace",
        fontSize: 9,
        letterSpacing: "4px",
        textTransform: "uppercase",
        color: "var(--gold-muted)",
        marginBottom: 14,
      }}>
        {persona.age}
      </div>

      <div style={{
        fontFamily: "var(--font-cormorant), serif",
        fontSize: 32,
        fontWeight: 600,
        color: "var(--indigo)",
        lineHeight: 1.1,
        marginBottom: 6,
      }}>
        {persona.archetype}
      </div>

      <div style={{
        fontFamily: "var(--font-cormorant), serif",
        fontSize: 16,
        fontStyle: "italic",
        color: "var(--muted-light)",
        marginBottom: 28,
      }}>
        {persona.type}
      </div>

      <div style={{
        fontFamily: "var(--font-cormorant), serif",
        fontSize: 17,
        color: "var(--muted)",
        lineHeight: 1.7,
        paddingLeft: 18,
        borderLeft: `2px solid ${hovered ? "var(--gold)" : "var(--cream-dark)"}`,
        marginBottom: 24,
        fontStyle: "italic",
        transition: "border-color 0.35s ease",
      }}>
        {persona.truth}
      </div>

      <div style={{
        fontFamily: "var(--font-dm-mono), monospace",
        fontSize: 10,
        letterSpacing: "2px",
        color: "var(--indigo)",
        textTransform: "uppercase",
      }}>
        {persona.want}
      </div>
    </div>
  );
}
