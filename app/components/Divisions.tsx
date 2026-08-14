"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const divisions = [
  {
    roman: "I",
    sub: "Personal Evolution",
    name: "The Becoming Institute",
    desc: "A sanctuary for individual transformation. Deconstruct limiting identities and build a self that commands interest.",
    flagship: "Becoming a Person of Interest — Monthly Masterclass",
    accent: "rgba(201,168,76,0.15)",
    slug: "personal-evolution",
  },
  {
    roman: "II",
    sub: "Executive Authority",
    name: "Leadership Architecture",
    desc: "Frameworks for leaders to design their influence with architectural precision and unshakeable authority.",
    flagship: "Leadership Architecture — 1–2 Day Executive Immersion",
    accent: "rgba(201,168,76,0.1)",
    slug: "leadership-architecture",
  },
  {
    roman: "III",
    sub: "Institutional Design",
    name: "Organizational Architecture",
    desc: "Structural design for institutions seeking to align their human capital with their monumental vision.",
    flagship: "Organisational Transformation Partnership — 6–12 Months",
    accent: "rgba(201,168,76,0.08)",
    slug: "institutional-design",
  },
];

export default function Divisions() {
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
      id="divisions"
      style={{
        background: "var(--indigo-deep)",
        padding: "130px 60px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration */}
      <div style={{
        position: "absolute",
        top: -200,
        right: -200,
        width: 700,
        height: 700,
        background: "radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 65%)",
        borderRadius: "50%",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute",
        bottom: -100,
        left: -100,
        width: 500,
        height: 500,
        background: "radial-gradient(circle, rgba(40,37,107,0.6) 0%, transparent 65%)",
        borderRadius: "50%",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1300, margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "end",
            marginBottom: 80,
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.9s ease, transform 0.9s ease",
          }}
          className="div-header"
        >
          <div>
            <div style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: 10,
              letterSpacing: "5px",
              textTransform: "uppercase",
              color: "var(--gold)",
              marginBottom: 20,
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}>
              <span style={{ width: 24, height: 1, background: "var(--gold)", display: "inline-block" }} />
              Our Work
            </div>
            <h2 style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "clamp(40px, 5vw, 70px)",
              fontWeight: 300,
              color: "var(--cream)",
              lineHeight: 1.0,
            }}>
              Three Divisions.<br />
              <em style={{ fontStyle: "italic", color: "var(--gold-light)" }}>
                One Architecture.
              </em>
            </h2>
          </div>
          <p style={{ fontSize: 15, color: "rgba(247,243,236,0.4)", lineHeight: 1.85 }}>
            Every programme, every framework, every conversation inside Mindvest Global
            is an act of building. We work at the individual, leadership, and institutional
            level — because transformation that stops at the person rarely reaches the
            organisation.
          </p>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 2,
          }}
          className="div-grid"
        >
          {divisions.map((div, i) => (
            <DivisionCard key={i} div={div} delay={i * 150} visible={visible} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .div-header { grid-template-columns: 1fr !important; gap: 32px !important; }
          .div-grid { grid-template-columns: 1fr !important; }
          section { padding: 80px 24px !important; }
        }
      `}</style>
    </section>
  );
}

function DivisionCard({
  div,
  delay,
  visible,
}: {
  div: { roman: string; sub: string; name: string; desc: string; flagship: string; accent: string; slug: string };
  delay: number;
  visible: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={`/divisions/${div.slug}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "block",
        textDecoration: "none",
        padding: "56px 44px",
        background: hovered ? "rgba(40,37,107,0.5)" : "rgba(40,37,107,0.2)",
        border: "1px solid rgba(201,168,76,0.07)",
        position: "relative",
        overflow: "hidden",
        transition: "all 0.35s ease",
        cursor: "pointer",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {/* Top gold line */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: 2,
        background: "var(--gold)",
        transform: hovered ? "scaleX(1)" : "scaleX(0)",
        transformOrigin: "left",
        transition: "transform 0.45s ease",
      }} />

      {/* Corner accent */}
      <div style={{
        position: "absolute",
        top: 20,
        right: 20,
        width: 40,
        height: 40,
        border: "1px solid rgba(201,168,76,0.15)",
        opacity: hovered ? 1 : 0,
        transition: "opacity 0.3s",
      }} />

      {/* Roman number bg */}
      <div style={{
        fontFamily: "var(--font-cormorant), serif",
        fontSize: 90,
        fontWeight: 300,
        color: hovered ? "rgba(201,168,76,0.12)" : "rgba(201,168,76,0.06)",
        lineHeight: 1,
        marginBottom: 24,
        transition: "color 0.3s",
        letterSpacing: "-2px",
      }}>
        {div.roman}
      </div>

      <div style={{
        fontFamily: "var(--font-dm-mono), monospace",
        fontSize: 9,
        letterSpacing: "3px",
        textTransform: "uppercase",
        color: "var(--gold)",
        marginBottom: 10,
      }}>
        {div.sub}
      </div>

      <h3 style={{
        fontFamily: "var(--font-cormorant), serif",
        fontSize: 28,
        fontWeight: 600,
        color: "var(--cream)",
        marginBottom: 20,
        lineHeight: 1.2,
      }}>
        {div.name}
      </h3>

      <p style={{
        fontSize: 14,
        color: "rgba(247,243,236,0.42)",
        lineHeight: 1.85,
        marginBottom: 28,
      }}>
        {div.desc}
      </p>

      <div style={{
        fontFamily: "var(--font-dm-mono), monospace",
        fontSize: 10,
        letterSpacing: "2px",
        color: "var(--gold-muted)",
        paddingTop: 20,
        borderTop: "1px solid rgba(201,168,76,0.12)",
        marginBottom: 20,
      }}>
        Flagship Programme
        <strong style={{
          color: "var(--gold)",
          display: "block",
          marginTop: 6,
          fontSize: 12,
          letterSpacing: "0.5px",
          fontFamily: "var(--font-cormorant), serif",
          fontStyle: "italic",
          fontWeight: 400,
        }}>
          {div.flagship}
        </strong>
      </div>

      <div
        style={{
          display: "inline-block",
          padding: "12px 24px",
          border: hovered ? "1px solid var(--gold)" : "1px solid rgba(201,168,76,0.35)",
          background: hovered ? "var(--gold)" : "transparent",
          color: hovered ? "var(--indigo-deep)" : "var(--gold)",
          fontFamily: "var(--font-dm-mono), monospace",
          fontSize: 10,
          letterSpacing: "2px",
          textTransform: "uppercase",
          transition: "all 0.3s ease",
          transform: hovered ? "translateY(-2px)" : "translateY(0)",
        }}
      >
        Explore Details →
      </div>
    </Link>
  );
}
