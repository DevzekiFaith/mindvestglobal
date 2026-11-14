"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MASTERCLASSES = [
  {
    id: "person-of-interest",
    tabLabel: "Person of Interest",
    badge: "Monthly Programme · The Becoming Institute",
    titleLine1: "Becoming a",
    titleLine2: "Person of Interest",
    desc: "The flagship monthly masterclass from The Becoming Institute. A live, structured session for people who are ready to stop performing borrowed identities and start designing an original life — deliberately, architecturally, and from the inside out.",
    ctaLabel: "Reserve Your Seat (Origin ↗)",
    ctaHref: "https://origin.com.ng/events",
  },
  {
    id: "success-multiplier",
    tabLabel: "Success Multiplier",
    badge: "Strategic Immersion · Origin Series",
    titleLine1: "The",
    titleLine2: "Success Multiplier",
    desc: "The high-yield strategic masterclass from The Becoming Institute. A live, structured immersion designed to eliminate operational friction, unlock sovereign decision leverage, and multiply personal and enterprise velocity.",
    ctaLabel: "Join Success Multiplier (Origin ↗)",
    ctaHref: "https://origin.com.ng/events?event=22",
  },
];

export default function Masterclass() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Auto-interchange every 4.8 seconds when not hovered
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === 0 ? 1 : 0));
    }, 4800);
    return () => clearInterval(timer);
  }, [isPaused]);

  const current = MASTERCLASSES[currentIndex];

  return (
    <section
      ref={sectionRef}
      id="masterclass"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      style={{
        background: "var(--indigo)",
        padding: "130px 60px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Large decorative quote mark */}
      <div
        style={{
          position: "absolute",
          top: -80,
          left: 40,
          fontFamily: "var(--font-cormorant), serif",
          fontSize: 600,
          color: "rgba(201,168,76,0.03)",
          lineHeight: 1,
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        &ldquo;
      </div>

      {/* Decorative lines */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: 300,
          height: 300,
          border: "1px solid rgba(201,168,76,0.06)",
          borderRadius: "50% 0 0 50%",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 960, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.9s ease, transform 0.9s ease",
          }}
        >
          {/* Masterclass Toggle Pills */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "4px",
              background: "rgba(18, 16, 58, 0.65)",
              border: "1px solid rgba(201, 168, 76, 0.22)",
              borderRadius: "24px",
              marginBottom: 24,
            }}
          >
            {MASTERCLASSES.map((mc, idx) => (
              <button
                key={mc.id}
                type="button"
                onClick={() => {
                  setCurrentIndex(idx);
                  setIsPaused(true);
                }}
                style={{
                  padding: "6px 18px",
                  background: currentIndex === idx ? "var(--gold)" : "transparent",
                  color: currentIndex === idx ? "var(--indigo-deep)" : "rgba(247, 243, 236, 0.6)",
                  fontFamily: "var(--font-dm-mono), monospace",
                  fontSize: "10px",
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  fontWeight: currentIndex === idx ? 700 : 500,
                  border: "none",
                  borderRadius: "20px",
                  cursor: "pointer",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                {mc.tabLabel}
              </button>
            ))}
          </div>

          {/* Header pill badge */}
          <div
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: 10,
              letterSpacing: "5px",
              textTransform: "uppercase",
              color: "var(--gold)",
              marginBottom: 20,
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <span style={{ width: 24, height: 1, background: "var(--gold)", display: "inline-block" }} />
            <AnimatePresence mode="wait">
              <motion.span
                key={current.badge}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                {current.badge}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Dynamic Interchanging Title */}
          <div
            style={{
              minHeight: "clamp(96px, 12vw, 165px)",
              display: "flex",
              alignItems: "flex-start",
              marginBottom: 28,
            }}
          >
            <AnimatePresence mode="wait">
              <motion.h2
                key={current.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontSize: "clamp(42px, 5.5vw, 76px)",
                  fontWeight: 300,
                  color: "var(--cream)",
                  lineHeight: 1.05,
                  margin: 0,
                }}
              >
                {current.titleLine1 && (
                  <>
                    {current.titleLine1}
                    <br />
                  </>
                )}
                <em style={{ fontStyle: "italic", color: "var(--gold-light)" }}>
                  {current.titleLine2}
                </em>
              </motion.h2>
            </AnimatePresence>
          </div>

          {/* Description */}
          <div
            style={{
              minHeight: "clamp(75px, 8vw, 95px)",
              marginBottom: 44,
              maxWidth: 780,
            }}
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={current.desc}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                style={{
                  fontSize: 17,
                  color: "rgba(247,243,236,0.65)",
                  lineHeight: 1.85,
                  margin: 0,
                }}
              >
                {current.desc}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Feature list in sleek 2-column grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "18px 32px",
              marginBottom: 48,
              maxWidth: 820,
            }}
          >
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
                  fontSize: 15,
                  color: "rgba(247,243,236,0.7)",
                }}
              >
                <span
                  style={{
                    width: 18,
                    height: 18,
                    border: "1px solid rgba(201,168,76,0.4)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    fontSize: 8,
                    color: "var(--gold)",
                  }}
                >
                  ◆
                </span>
                {item}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div
            style={{
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
              alignItems: "center",
              marginTop: 40,
            }}
          >
            <AnimatePresence mode="wait">
              <motion.a
                key={current.ctaHref}
                href={current.ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 6 }}
                transition={{ duration: 0.3 }}
                style={{
                  padding: "18px 44px",
                  background: "var(--gold)",
                  color: "var(--indigo-deep)",
                  fontFamily: "var(--font-dm-mono), monospace",
                  fontSize: 11,
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  fontWeight: 600,
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
                {current.ctaLabel}
              </motion.a>
            </AnimatePresence>

            <a
              href="https://origin.com.ng/events"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                padding: "18px 44px",
                background: "#10B981",
                color: "#FDFAF5",
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: "11px",
                letterSpacing: "3px",
                textTransform: "uppercase",
                fontWeight: 700,
                textDecoration: "none",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                border: "1px solid rgba(16, 185, 129, 0.4)",
                boxShadow: "0 4px 20px rgba(16, 185, 129, 0.15)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "#059669";
                el.style.transform = "translateY(-3px)";
                el.style.boxShadow = "0 12px 30px rgba(16, 185, 129, 0.4)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "#10B981";
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "0 4px 20px rgba(16, 185, 129, 0.15)";
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 512 512"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ flexShrink: 0, marginRight: "2px" }}
              >
                <rect x="16" y="16" width="480" height="480" rx="130" fill="#10B981" stroke="#FDFAF5" strokeWidth="32" />
                <circle cx="256" cy="256" r="138" stroke="#FDFAF5" strokeWidth="56" />
              </svg>
              <span style={{ fontWeight: 700 }}>Origin Events</span>
              <span style={{ fontSize: "14px" }}>↗</span>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          section#masterclass { padding: 90px 24px !important; }
        }
        @media (max-width: 600px) {
          section#masterclass { padding: 70px 18px !important; }
        }
      `}</style>
    </section>
  );
}
