"use client";

import { useEffect, useRef, useState } from "react";

const frameworkLayers = [
  { num: "V", name: "Expression & Impact", sub: "The Facade — How you show up" },
  { num: "IV", name: "Relationships & Environment", sub: "The Rooms — Who and what surrounds you" },
  { num: "III", name: "Systems & Habits", sub: "The Infrastructure — How you operate" },
  { num: "II", name: "Mindset & Beliefs", sub: "The Structure — What holds you up" },
  { num: "I", name: "Identity & Purpose", sub: "The Foundation — Who you are" },
];

const buildMethod = [
  { letter: "B", word: "Baseline", desc: "Audit where you are with radical honesty using the Architecture Audit diagnostic." },
  { letter: "U", word: "Uncover", desc: "Surface the beliefs, patterns, and foundations that have been driving the architecture." },
  { letter: "I", word: "Intentional Design", desc: "Deliberately redesign each layer — starting with identity and moving upward." },
  { letter: "L", word: "Layer & Live", desc: "Integrate the new architecture into daily life, leadership, and decision-making." },
  { letter: "D", word: "Declare & Deploy", desc: "Step into your expression and impact with the full weight of who you have become.", wide: true },
];

export default function Framework() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeLayer, setActiveLayer] = useState<number | null>(null);

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
      id="framework"
      style={{
        padding: "130px 60px",
        background: "var(--cream)",
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
          Our Methodology
        </div>

        <h2 style={{
          fontFamily: "var(--font-cormorant), serif",
          fontSize: "clamp(36px, 4.5vw, 62px)",
          fontWeight: 300,
          lineHeight: 1.1,
          color: "var(--indigo)",
          marginBottom: 64,
        }}>
          The Human<br />
          <em style={{ fontStyle: "italic", color: "var(--gold-muted)" }}>
            Architecture Framework
          </em>
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "start",
          }}
          className="framework-grid"
        >
          {/* Arch Diagram */}
          <div>
            <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
              {frameworkLayers.map((layer, i) => (
                <div
                  key={i}
                  onMouseEnter={() => setActiveLayer(i)}
                  onMouseLeave={() => setActiveLayer(null)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 20,
                    padding: "22px 28px",
                    background: activeLayer === i ? "var(--cream-dark)" : "var(--white)",
                    borderLeft: `3px solid ${activeLayer === i ? "var(--gold)" : "var(--cream-dark)"}`,
                    transition: "all 0.35s ease",
                    cursor: "default",
                    transform: activeLayer === i ? "translateX(6px)" : "translateX(0)",
                    opacity: visible ? 1 : 0,
                    transitionDelay: `${i * 80}ms`,
                    position: "relative",
                  }}
                >
                  {/* Layer fill bar */}
                  <div style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    bottom: 0,
                    width: activeLayer === i ? "100%" : "0%",
                    background: "rgba(201,168,76,0.03)",
                    transition: "width 0.4s ease",
                    pointerEvents: "none",
                  }} />
                  <div style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: 34,
                    fontWeight: 300,
                    color: activeLayer === i ? "var(--gold-muted)" : "var(--cream-dark)",
                    lineHeight: 1,
                    minWidth: 40,
                    transition: "color 0.3s",
                  }}>
                    {layer.num}
                  </div>
                  <div>
                    <div style={{
                      fontFamily: "var(--font-cormorant), serif",
                      fontSize: 20,
                      fontWeight: 600,
                      color: "var(--indigo)",
                      marginBottom: 2,
                    }}>
                      {layer.name}
                    </div>
                    <div style={{
                      fontSize: 12,
                      color: "var(--muted-light)",
                      fontFamily: "var(--font-dm-mono), monospace",
                      letterSpacing: "0.5px",
                    }}>
                      {layer.sub}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{
              textAlign: "center",
              marginTop: 20,
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: 9,
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "var(--muted-light)",
            }}>
              Human Architecture Framework — © Mindvest Global 2026
            </div>
          </div>

          {/* Right content */}
          <div>
            <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.9, marginBottom: 20 }}>
              Every human being is an architecture —{" "}
              <strong style={{ color: "var(--text)", fontWeight: 500 }}>
                designed with intention, capable of extraordinary things.
              </strong>{" "}
              The problem is that most people are building their lives on a foundation
              that was laid by someone else.
            </p>
            <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.9, marginBottom: 0 }}>
              The Human Architecture Framework gives individuals and organisations a{" "}
              <strong style={{ color: "var(--text)", fontWeight: 500 }}>
                structured methodology for redesigning from the ground up
              </strong>{" "}
              — beginning with identity, moving through mindset and systems, into
              relationships and environment, and finally into expression and impact.
            </p>

            <div style={{ width: 60, height: 1, background: "var(--gold)", margin: "40px 0" }} />

            <div style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: 10,
              letterSpacing: "5px",
              textTransform: "uppercase",
              color: "var(--gold-muted)",
              marginBottom: 12,
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}>
              <span style={{ width: 24, height: 1, background: "var(--gold-muted)", display: "inline-block" }} />
              The BUILD Method
            </div>

            <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.7, marginBottom: 20 }}>
              Our five-step transformation process applied across all engagements.
            </p>

            {/* BUILD grid */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 3,
            }}>
              {buildMethod.map((item, i) => (
                <BuildCard key={i} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .framework-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          section { padding: 80px 24px !important; }
        }
      `}</style>
    </section>
  );
}

function BuildCard({ item }: { item: { letter: string; word: string; desc: string; wide?: boolean } }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "var(--white)",
        padding: "24px",
        borderBottom: `2px solid ${hovered ? "var(--gold)" : "transparent"}`,
        transition: "all 0.3s ease",
        gridColumn: item.wide ? "span 2" : "span 1",
        cursor: "default",
      }}
    >
      <div style={{
        fontFamily: "var(--font-cormorant), serif",
        fontSize: 52,
        fontWeight: 300,
        color: hovered ? "var(--indigo)" : "var(--indigo-mid)",
        lineHeight: 1,
        marginBottom: 4,
        transition: "color 0.3s",
      }}>
        {item.letter}
      </div>
      <div style={{
        fontFamily: "var(--font-dm-mono), monospace",
        fontSize: 10,
        letterSpacing: "2px",
        textTransform: "uppercase",
        color: "var(--gold-muted)",
        marginBottom: 8,
      }}>
        {item.word}
      </div>
      <div style={{ fontSize: 12, color: "var(--muted)", lineHeight: 1.65 }}>
        {item.desc}
      </div>
    </div>
  );
}
