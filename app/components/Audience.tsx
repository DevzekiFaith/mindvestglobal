"use client";

import { useEffect, useRef, useState } from "react";

const personas = [
  {
    age: "Ages 25 \u2013 34 \u00b7 Entry Point",
    archetype: "The Awakening",
    type: "Young professional \u00b7 Early entrepreneur",
    truth: "\"I've achieved what I said I wanted. So why does it feel like someone else's life?\"",
    want: "Wants \u2192 Identity clarity \u00b7 Direction \u00b7 A framework for becoming",
    num: "01",
    cta: { label: "Join the Masterclass", href: "https://selar.com/543351n531" },
  },
  {
    age: "Ages 35 \u2013 45 \u00b7 Core",
    archetype: "The Reconstruction",
    type: "Mid-career leader \u00b7 Business owner",
    truth: "\"I've built something real. But I'm quietly asking whether this is it \u2014 and afraid the answer is yes.\"",
    want: "Wants \u2192 Realignment \u00b7 Deeper leadership \u00b7 A life that matches their interior",
    num: "02",
    cta: { label: "Explore Leadership Architecture", href: "mailto:mindvestglobalresources@gmail.com?subject=Leadership Architecture Enquiry" },
  },
  {
    age: "Ages 45 \u2013 55 \u00b7 Premium",
    archetype: "The Legacy Maker",
    type: "Senior executive \u00b7 Institutional leader",
    truth: "\"I have the position. But I want my leadership to mean something beyond the metrics.\"",
    want: "Wants \u2192 Legacy architecture \u00b7 Cultural impact \u00b7 Integrated leadership",
    num: "03",
    cta: { label: "Start a Conversation", href: "mailto:mindvestglobalresources@gmail.com?subject=Organisational Architecture Enquiry" },
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
  persona: { age: string; archetype: string; type: string; truth: string; want: string; num: string; cta: { label: string; href: string } };
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
        marginBottom: 28,
      }}>
        {persona.want}
      </div>

      <a
        href={persona.cta.href}
        target={persona.cta.href.startsWith("mailto") ? undefined : "_blank"}
        rel={persona.cta.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
        style={{
          display: "inline-block",
          padding: "11px 22px",
          border: "1px solid rgba(28,26,74,0.25)",
          color: "var(--indigo)",
          fontFamily: "var(--font-dm-mono), monospace",
          fontSize: 9,
          letterSpacing: "2px",
          textTransform: "uppercase",
          textDecoration: "none",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.background = "var(--indigo)";
          el.style.color = "var(--cream)";
          el.style.transform = "translateY(-2px)";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.background = "transparent";
          el.style.color = "var(--indigo)";
          el.style.transform = "translateY(0)";
        }}
      >
        {persona.cta.label} →
      </a>
    </div>
  );
}
