"use client";

import { useEffect, useRef, useState } from "react";

const divisions = [
  {
    roman: "I",
    sub: "Division One",
    name: "The Becoming Institute",
    desc: "For the individual who has achieved enough to know that achievement alone is not enough. Through the Human Architecture Framework, we walk people through the five layers of their own design \u2014 and help them rebuild from the inside out.",
    flagship: "Becoming a Person of Interest \u2014 Monthly Masterclass",
    accent: "rgba(201,168,76,0.15)",
    cta: { label: "Join the Masterclass", href: "https://selar.com/543351n531" },
  },
  {
    roman: "II",
    sub: "Division Two",
    name: "The Leadership Architecture",
    desc: "For the leader who manages teams but has never intentionally designed themselves. We bridge the gap between positional leadership and integrated leadership \u2014 building the inner architecture that outer influence demands.",
    flagship: "Leadership Architecture Programme \u2014 Executive Cohort",
    accent: "rgba(201,168,76,0.1)",
    cta: { label: "Enquire as a Leader", href: "mailto:mindvestglobalresources@gmail.com?subject=Leadership Architecture Enquiry" },
  },
  {
    roman: "III",
    sub: "Division Three",
    name: "Organisational Architecture",
    desc: "For organisations that sense their culture is not serving their mission. We audit, redesign, and rebuild the human architecture of culture \u2014 aligning people, values, and systems toward a common becoming.",
    flagship: "Organisational Transformation Partnership \u2014 6\u201312 Months",
    accent: "rgba(201,168,76,0.08)",
    cta: { label: "Start a Conversation", href: "mailto:mindvestglobalresources@gmail.com?subject=Organisational Architecture Enquiry" },
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
  div: { roman: string; sub: string; name: string; desc: string; flagship: string; accent: string; cta: { label: string; href: string } };
  delay: number;
  visible: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "56px 44px",
        background: hovered ? "rgba(40,37,107,0.5)" : "rgba(40,37,107,0.2)",
        border: "1px solid rgba(201,168,76,0.07)",
        position: "relative",
        overflow: "hidden",
        transition: "all 0.35s ease",
        cursor: "default",
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

      <a
        href={div.cta.href}
        target={div.cta.href.startsWith("mailto") ? undefined : "_blank"}
        rel={div.cta.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
        style={{
          display: "inline-block",
          padding: "12px 24px",
          border: "1px solid rgba(201,168,76,0.35)",
          color: "var(--gold)",
          fontFamily: "var(--font-dm-mono), monospace",
          fontSize: 10,
          letterSpacing: "2px",
          textTransform: "uppercase",
          textDecoration: "none",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.background = "var(--gold)";
          el.style.color = "var(--indigo-deep)";
          el.style.borderColor = "var(--gold)";
          el.style.transform = "translateY(-2px)";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.background = "transparent";
          el.style.color = "var(--gold)";
          el.style.borderColor = "rgba(201,168,76,0.35)";
          el.style.transform = "translateY(0)";
        }}
      >
        {div.cta.label} →
      </a>
    </div>
  );
}
