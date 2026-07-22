"use client";

import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    quote:
      "This wasn't another motivational session. It gave me language for what I've always felt but couldn't name — and a structure to actually do something about it.",
    name: "A. Okafor",
    role: "Product Manager · Lagos",
    initial: "A",
  },
  {
    quote:
      "I came in sceptical. I left with three pages of notes and the clearest sense of direction I've had in years. The framework is genuinely different.",
    name: "T. Adeyemi",
    role: "Founder · Ogun State",
    initial: "T",
  },
  {
    quote:
      "Zeki speaks to the part of you that knows something needs to change before you've even said it out loud. That's rare.",
    name: "F. Eze",
    role: "HR Leader · Lagos",
    initial: "F",
  },
];

export default function Testimonials() {
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
        background: "var(--white)",
        padding: "130px 60px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div style={{
        position: "absolute",
        top: -120,
        left: "50%",
        transform: "translateX(-50%)",
        width: 800,
        height: 800,
        background: "radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 65%)",
        borderRadius: "50%",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1300, margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div
          style={{
            marginBottom: 72,
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.9s ease, transform 0.9s ease",
          }}
        >
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
            What People Say
          </div>

          <h2 style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "clamp(36px, 4.5vw, 62px)",
            fontWeight: 300,
            color: "var(--indigo)",
            lineHeight: 1.1,
            maxWidth: 640,
          }}>
            Proof of the Work.<br />
            <em style={{ fontStyle: "italic", color: "var(--gold-muted)" }}>
              In their own words.
            </em>
          </h2>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 3,
          }}
          className="testimonials-grid"
        >
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} t={t} delay={i * 130} visible={visible} />
          ))}
        </div>

        {/* Footnote */}
        <div
          style={{
            marginTop: 56,
            textAlign: "center",
            opacity: visible ? 1 : 0,
            transition: "opacity 1.2s ease",
          }}
        >
          <p style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: 16,
            fontStyle: "italic",
            color: "var(--muted)",
            lineHeight: 1.7,
          }}>
            These reflections are from early participants in The Becoming Institute.<br />
            Every name is shared with permission.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .testimonials-grid { grid-template-columns: 1fr !important; }
          section { padding: 80px 24px !important; }
        }
      `}</style>
    </section>
  );
}

function TestimonialCard({
  t,
  delay,
  visible,
}: {
  t: { quote: string; name: string; role: string; initial: string };
  delay: number;
  visible: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "52px 44px",
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
      {/* Top gold line on hover */}
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

      {/* Opening quote mark */}
      <div style={{
        fontFamily: "var(--font-cormorant), serif",
        fontSize: 80,
        lineHeight: 0.8,
        color: hovered ? "rgba(201,168,76,0.25)" : "rgba(201,168,76,0.12)",
        marginBottom: 20,
        transition: "color 0.35s",
        userSelect: "none",
      }}>
        &#8220;
      </div>

      {/* Quote text */}
      <p style={{
        fontFamily: "var(--font-cormorant), serif",
        fontSize: 20,
        fontStyle: "italic",
        color: "var(--muted)",
        lineHeight: 1.7,
        marginBottom: 36,
        borderLeft: `2px solid ${hovered ? "var(--gold)" : "var(--cream-dark)"}`,
        paddingLeft: 20,
        transition: "border-color 0.35s ease",
      }}>
        {t.quote}
      </p>

      {/* Attribution */}
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <div style={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          background: hovered ? "var(--gold)" : "rgba(201,168,76,0.15)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "var(--font-cormorant), serif",
          fontSize: 18,
          fontWeight: 600,
          color: hovered ? "var(--indigo-deep)" : "var(--gold)",
          transition: "all 0.35s ease",
          flexShrink: 0,
        }}>
          {t.initial}
        </div>
        <div>
          <div style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: 14,
            fontWeight: 600,
            color: "var(--indigo)",
            marginBottom: 2,
          }}>
            {t.name}
          </div>
          <div style={{
            fontFamily: "var(--font-dm-mono), monospace",
            fontSize: 9,
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: "var(--gold-muted)",
          }}>
            {t.role}
          </div>
        </div>
      </div>
    </div>
  );
}
