"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  {
    num: "3",
    label: "Operating Divisions",
    desc: "The Becoming Institute · The Leadership Architecture · Organisational Architecture",
  },
  {
    num: "5",
    label: "Framework Layers",
    desc: "The Human Architecture Framework — Identity, Mindset, Systems, Relationships, Expression",
  },
  {
    num: "1",
    label: "Governing Conviction",
    desc: "Transformation is not a feeling. It is a structure. And structures can be designed.",
  },
  {
    num: "∞",
    label: "The Becoming",
    desc: "Becoming is not a destination. It is the most important work any human being will ever do.",
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      style={{
        padding: "130px 60px",
        maxWidth: 1300,
        margin: "0 auto",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: "opacity 0.9s ease, transform 0.9s ease",
      }}
    >
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 80,
        alignItems: "start",
      }} className="about-grid">
        {/* Left */}
        <div>
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
            What We Are
          </div>

          <h2 style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "clamp(36px, 4.5vw, 62px)",
            fontWeight: 300,
            lineHeight: 1.05,
            color: "var(--indigo)",
            marginBottom: 40,
          }}>
            Not a Coaching<br />
            Company. A<br />
            <em style={{ fontStyle: "italic", color: "var(--gold-muted)" }}>
              Transformation Enterprise.
            </em>
          </h2>

          <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.9, marginBottom: 24 }}>
            Mindvest Global Resources LLC is built at the intersection of{" "}
            <strong style={{ color: "var(--text)", fontWeight: 500 }}>
              identity, design, and human potential.
            </strong>{" "}
            We operate across three divisions — individual transformation, leadership
            development, and organisational culture — with one governing conviction:
          </p>

          <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.9, marginBottom: 36 }}>
            <strong style={{ color: "var(--text)", fontWeight: 500 }}>
              Most people are not broken.
            </strong>{" "}
            They are simply building on a foundation that was never theirs. Our work
            is to give them the architectural tools to build again — deliberately,
            originally, and from the inside out.
          </p>

          {/* Gold divider */}
          <div style={{ width: 60, height: 1, background: "var(--gold)", margin: "40px 0" }} />

          {/* Founder block */}
          <div style={{
            display: "flex",
            gap: 20,
            alignItems: "center",
            padding: "28px 0",
            borderTop: "1px solid var(--cream-dark)",
          }}>
            <div style={{
              width: 56,
              height: 56,
              background: "var(--indigo)",
              color: "var(--gold)",
              fontFamily: "var(--font-cormorant), serif",
              fontSize: 26,
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              position: "relative",
            }}>
              Z
              <div style={{
                position: "absolute",
                inset: -3,
                border: "1px solid rgba(201,168,76,0.2)",
              }} />
            </div>
            <div>
              <div style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: 22,
                fontWeight: 600,
                color: "var(--indigo)",
                marginBottom: 2,
              }}>
                Zeki Ubor
              </div>
              <div style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: 10,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "var(--muted-light)",
              }}>
                Founder · Architect · Transformation Practitioner
              </div>
            </div>
          </div>
        </div>

        {/* Right — stats */}
        <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} delay={i * 100} visible={visible} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          section { padding: 80px 24px !important; }
        }
      `}</style>
    </section>
  );
}

function StatCard({
  stat,
  delay,
  visible,
}: {
  stat: { num: string; label: string; desc: string };
  delay: number;
  visible: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "var(--cream)",
        padding: "32px 36px",
        borderLeft: `3px solid ${hovered ? "var(--gold)" : "transparent"}`,
        transition: "all 0.35s ease",
        cursor: "default",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0)" : "translateX(20px)",
        transitionDelay: `${delay}ms`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background accent */}
      <div style={{
        position: "absolute",
        top: 0,
        right: 0,
        width: 80,
        height: 80,
        background: "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)",
        opacity: hovered ? 1 : 0,
        transition: "opacity 0.3s",
      }} />

      <div style={{
        fontFamily: "var(--font-cormorant), serif",
        fontSize: 56,
        fontWeight: 300,
        color: hovered ? "var(--indigo)" : "var(--indigo-mid)",
        lineHeight: 1,
        marginBottom: 6,
        transition: "color 0.3s",
      }}>
        {stat.num}
      </div>
      <div style={{
        fontFamily: "var(--font-dm-mono), monospace",
        fontSize: 10,
        letterSpacing: "3px",
        textTransform: "uppercase",
        color: hovered ? "var(--gold-muted)" : "var(--muted-light)",
        transition: "color 0.3s",
        marginBottom: 8,
      }}>
        {stat.label}
      </div>
      <div style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6 }}>
        {stat.desc}
      </div>
    </div>
  );
}
