"use client";

import { useEffect, useRef, useState } from "react";

export default function Masterclass() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [seatsLeft] = useState(7);

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
      id="masterclass"
      style={{
        background: "var(--indigo)",
        padding: "130px 60px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Large decorative quote mark */}
      <div style={{
        position: "absolute",
        top: -80,
        left: 40,
        fontFamily: "var(--font-cormorant), serif",
        fontSize: 600,
        color: "rgba(201,168,76,0.03)",
        lineHeight: 1,
        pointerEvents: "none",
        userSelect: "none",
      }}>
        "
      </div>

      {/* Decorative lines */}
      <div style={{
        position: "absolute",
        top: 0,
        right: 0,
        width: 300,
        height: 300,
        border: "1px solid rgba(201,168,76,0.06)",
        borderRadius: "50% 0 0 50%",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1300, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "center",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.9s ease, transform 0.9s ease",
          }}
          className="masterclass-grid"
        >
          {/* Left */}
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
              Next Programme
            </div>

            <h2 style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "clamp(40px, 5vw, 68px)",
              fontWeight: 300,
              color: "var(--cream)",
              lineHeight: 1.05,
              marginBottom: 28,
            }}>
              Becoming a<br />
              <em style={{ fontStyle: "italic", color: "var(--gold-light)" }}>
                Person of Interest
              </em>
            </h2>

            <p style={{
              fontSize: 15,
              color: "rgba(247,243,236,0.45)",
              lineHeight: 1.85,
              marginBottom: 44,
            }}>
              The flagship monthly masterclass from The Becoming Institute. A live,
              structured session for people who are ready to stop performing borrowed
              identities and start designing an original life — deliberately,
              architecturally, and from the inside out.
            </p>

            {/* Feature list */}
            {[
              "Live, interactive format with Q&A",
              "Structured around the Human Architecture Framework",
              "Limited seats for intimate, high-impact experience",
              "Recording available for registered participants",
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  marginBottom: 12,
                  fontSize: 14,
                  color: "rgba(247,243,236,0.5)",
                }}
              >
                <span style={{
                  width: 16,
                  height: 16,
                  border: "1px solid rgba(201,168,76,0.4)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  fontSize: 8,
                  color: "var(--gold)",
                }}>
                  ◆
                </span>
                {item}
              </div>
            ))}

            <a
              href="https://selar.com/543351n531"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                marginTop: 40,
                padding: "18px 44px",
                background: "var(--gold)",
                color: "var(--indigo-deep)",
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: 11,
                letterSpacing: "3px",
                textTransform: "uppercase",
                fontWeight: 500,
                textDecoration: "none",
                transition: "all 0.3s",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "var(--gold-light)";
                el.style.transform = "translateY(-3px)";
                el.style.boxShadow = "0 16px 48px rgba(201,168,76,0.25)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "var(--gold)";
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
              }}
            >
              Reserve Your Seat
            </a>
          </div>

          {/* Event card */}
          <div>
            <div style={{
              background: "rgba(40,37,107,0.5)",
              border: "1px solid rgba(201,168,76,0.18)",
              padding: "48px 44px",
              position: "relative",
              overflow: "hidden",
            }}>
              {/* Card corner accent */}
              <div style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: 0,
                height: 0,
                borderTop: "60px solid rgba(201,168,76,0.08)",
                borderLeft: "60px solid transparent",
              }} />

              <div style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: 10,
                letterSpacing: "4px",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: 20,
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}>
                <span style={{ width: 24, height: 1, background: "var(--gold)", display: "inline-block" }} />
                Inaugural Session
              </div>

              <h3 style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: 30,
                fontWeight: 600,
                color: "var(--white)",
                marginBottom: 32,
                lineHeight: 1.2,
              }}>
                Becoming a Person of Interest
              </h3>

              {/* Event details */}
              {[
                { icon: "📅", text: "30th May 2026" },
                { icon: "📍", text: "Virtual — Live & Interactive" },
                { icon: "⏱", text: "3 Hours · Q&A Included" },
                { icon: "👥", text: "Limited Seats — Intimate Session" },
              ].map((detail, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: 16,
                    alignItems: "center",
                    fontSize: 14,
                    color: "rgba(247,243,236,0.5)",
                    marginBottom: 12,
                  }}
                >
                  <div style={{
                    width: 32,
                    height: 32,
                    background: "rgba(201,168,76,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 14,
                    flexShrink: 0,
                  }}>
                    {detail.icon}
                  </div>
                  {detail.text}
                </div>
              ))}

              {/* Seats indicator */}
              <div style={{
                margin: "24px 0",
                padding: "16px",
                background: "rgba(201,168,76,0.07)",
                border: "1px solid rgba(201,168,76,0.15)",
              }}>
                <div style={{
                  fontFamily: "var(--font-dm-mono), monospace",
                  fontSize: 9,
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  color: "var(--gold-muted)",
                  marginBottom: 8,
                }}>
                  Seats Remaining
                </div>
                <div style={{ display: "flex", gap: 4 }}>
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div
                      key={i}
                      style={{
                        width: 16,
                        height: 16,
                        background: i < seatsLeft ? "var(--gold)" : "rgba(201,168,76,0.15)",
                        transition: "background 0.3s",
                      }}
                    />
                  ))}
                  <span style={{
                    fontFamily: "var(--font-dm-mono), monospace",
                    fontSize: 10,
                    color: "var(--gold)",
                    marginLeft: 8,
                    alignSelf: "center",
                  }}>
                    {seatsLeft} left
                  </span>
                </div>
              </div>

              <div style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: 44,
                fontWeight: 300,
                color: "var(--gold-light)",
                marginBottom: 6,
                lineHeight: 1,
              }}>
                ₦15,000
              </div>
              <div style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: 10,
                letterSpacing: "2px",
                color: "var(--gold-muted)",
                marginBottom: 28,
              }}>
                Launch investment · Seats filling fast
              </div>

              <a
                href="https://selar.com/543351n531"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: "100%",
                  textAlign: "center",
                  display: "block",
                  padding: "16px",
                  background: "var(--gold)",
                  color: "var(--indigo-deep)",
                  fontFamily: "var(--font-dm-mono), monospace",
                  fontSize: 11,
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  fontWeight: 500,
                  textDecoration: "none",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "var(--gold-light)";
                  el.style.boxShadow = "0 8px 32px rgba(201,168,76,0.3)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "var(--gold)";
                  el.style.boxShadow = "none";
                }}
              >
                Secure Your Seat →
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .masterclass-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          section { padding: 80px 24px !important; }
        }
      `}</style>
    </section>
  );
}
