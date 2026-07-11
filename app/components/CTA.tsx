"use client";

import { useEffect, useRef, useState } from "react";

export default function CTA() {
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
      id="contact"
      style={{
        padding: "130px 60px",
        background: "var(--white)",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div style={{
        position: "absolute",
        top: -100,
        left: "50%",
        transform: "translateX(-50%)",
        width: 700,
        height: 700,
        background: "radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 65%)",
        borderRadius: "50%",
        pointerEvents: "none",
      }} />

      {/* Corner decorations */}
      <div style={{
        position: "absolute",
        top: 40,
        left: 40,
        width: 80,
        height: 80,
        border: "1px solid rgba(201,168,76,0.15)",
        borderRadius: "50% 0 0 0",
      }} />
      <div style={{
        position: "absolute",
        bottom: 40,
        right: 40,
        width: 80,
        height: 80,
        border: "1px solid rgba(201,168,76,0.15)",
        borderRadius: "0 0 50% 0",
      }} />

      <div style={{
        maxWidth: 800,
        margin: "0 auto",
        position: "relative",
        zIndex: 1,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: "opacity 0.9s ease, transform 0.9s ease",
      }}>
        <div style={{
          fontFamily: "var(--font-dm-mono), monospace",
          fontSize: 10,
          letterSpacing: "5px",
          textTransform: "uppercase",
          color: "var(--gold-muted)",
          marginBottom: 28,
        }}>
          Begin the Work
        </div>

        <h2 style={{
          fontFamily: "var(--font-cormorant), serif",
          fontSize: "clamp(44px, 6.5vw, 88px)",
          fontWeight: 300,
          color: "var(--indigo)",
          lineHeight: 1.05,
          marginBottom: 28,
          letterSpacing: "-1px",
        }}>
          Ready to Start<br />
          <em style={{ fontStyle: "italic", color: "var(--gold-muted)" }}>
            Becoming?
          </em>
        </h2>

        <p style={{
          fontSize: 16,
          color: "var(--muted)",
          lineHeight: 1.85,
          marginBottom: 52,
          maxWidth: 600,
          margin: "0 auto 52px",
        }}>
          Whether you're an individual who knows something needs to change, a leader
          who wants to go deeper, or an organisation ready for transformation — the
          work starts with one conversation.
        </p>

        <div style={{
          display: "flex",
          gap: 16,
          justifyContent: "center",
          flexWrap: "wrap",
        }}>
          <a
            href="https://selar.com/543351n531"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "18px 44px",
              background: "var(--indigo)",
              color: "var(--cream)",
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: 11,
              letterSpacing: "3px",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "all 0.3s",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "var(--indigo-mid)";
              el.style.transform = "translateY(-3px)";
              el.style.boxShadow = "0 16px 48px rgba(28,26,74,0.25)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "var(--indigo)";
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "none";
            }}
          >
            Join the Masterclass
          </a>
          <a
            href="mailto:hello@mindvestglobal.com"
            style={{
              padding: "18px 44px",
              border: "1px solid var(--indigo)",
              color: "var(--indigo)",
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: 11,
              letterSpacing: "3px",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "all 0.3s",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "var(--indigo)";
              el.style.color = "var(--cream)";
              el.style.transform = "translateY(-3px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "transparent";
              el.style.color = "var(--indigo)";
              el.style.transform = "translateY(0)";
            }}
          >
            Send an Enquiry
          </a>
          <a
            href="https://elevationstudio.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "18px 44px",
              background: "linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%)",
              color: "var(--indigo-deep)",
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: 11,
              letterSpacing: "3px",
              textTransform: "uppercase",
              fontWeight: 700,
              textDecoration: "none",
              transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
              border: "1px solid rgba(201,168,76,0.4)",
              display: "inline-block",
              boxShadow: "0 4px 15px rgba(201, 168, 76, 0.2)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = "translateY(-3px)";
              el.style.boxShadow = "0 12px 24px rgba(201, 168, 76, 0.4)";
              el.style.background = "linear-gradient(135deg, var(--gold-light) 0%, var(--gold) 100%)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "0 4px 15px rgba(201, 168, 76, 0.2)";
              el.style.background = "linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%)";
            }}
          >
            Elevation Studio ↗
          </a>
        </div>

        {/* Divider */}
        <div style={{
          marginTop: 80,
          paddingTop: 48,
          borderTop: "1px solid var(--cream-dark)",
          display: "flex",
          justifyContent: "center",
          gap: 48,
          flexWrap: "wrap",
        }}>
          {[
            { label: "Email", value: "hello@mindvestglobal.com" },
            { label: "Location", value: "Ogun / Lagos State · Nigeria" },
            { label: "Est.", value: "2026" },
          ].map((item, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: 9,
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "var(--gold-muted)",
                marginBottom: 6,
              }}>
                {item.label}
              </div>
              <div style={{ fontSize: 13, color: "var(--muted)" }}>
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          section { padding: 80px 24px !important; }
        }
      `}</style>
    </section>
  );
}
