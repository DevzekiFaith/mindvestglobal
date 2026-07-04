"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Parallax on scroll
    const handleScroll = () => {
      const y = window.scrollY;
      if (headlineRef.current) {
        headlineRef.current.style.transform = `translateY(${y * 0.15}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      style={{
        minHeight: "100vh",
        background: "var(--indigo-deep)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "0 60px 90px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated background orbs */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
        <div style={{
          position: "absolute",
          top: "10%",
          right: "15%",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)",
          animation: "orb-drift 12s ease-in-out infinite",
        }} />
        <div style={{
          position: "absolute",
          bottom: "20%",
          left: "-5%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(40,37,107,0.6) 0%, transparent 65%)",
          animation: "orb-drift 16s ease-in-out infinite reverse",
        }} />
        <div style={{
          position: "absolute",
          top: "40%",
          left: "40%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%)",
          animation: "orb-drift 20s ease-in-out infinite 3s",
        }} />
      </div>

      {/* Grid lines */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        {[25, 50, 75].map((pct) => (
          <div key={pct} style={{
            position: "absolute",
            left: `${pct}%`,
            top: 0,
            bottom: 0,
            width: 1,
            background: "rgba(201,168,76,0.04)",
          }} />
        ))}
        {[33, 66].map((pct) => (
          <div key={pct} style={{
            position: "absolute",
            top: `${pct}%`,
            left: 0,
            right: 0,
            height: 1,
            background: "rgba(201,168,76,0.04)",
          }} />
        ))}
      </div>

      {/* Architectural arch decoration */}
      <div style={{
        position: "absolute",
        top: 100,
        right: 60,
        width: 380,
        height: 380,
        border: "1px solid rgba(201,168,76,0.1)",
        borderRadius: "50% 50% 0 0",
        animation: "archReveal 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.8s",
        opacity: 0,
      }}>
        <div style={{
          position: "absolute",
          inset: 32,
          border: "1px solid rgba(201,168,76,0.06)",
          borderRadius: "50% 50% 0 0",
        }} />
        <div style={{
          position: "absolute",
          inset: 64,
          border: "1px solid rgba(201,168,76,0.03)",
          borderRadius: "50% 50% 0 0",
        }} />
        {/* Inner gold dot */}
        <div style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "var(--gold)",
          opacity: 0.4,
          animation: "pulse-gold 3s ease infinite",
        }} />
      </div>

      {/* Roman numeral accent */}
      <div style={{
        position: "absolute",
        top: 160,
        right: 80,
        fontFamily: "var(--font-cormorant), serif",
        fontSize: 14,
        letterSpacing: "8px",
        color: "rgba(201,168,76,0.25)",
        writingMode: "vertical-rl",
        textTransform: "uppercase",
        animation: "fadeIn 1s ease forwards 1.5s",
        opacity: 0,
      }}>
        Est. MMXXVI
      </div>

      {/* Main content */}
      <div style={{ position: "relative", zIndex: 2, maxWidth: 1100 }}>
        {/* Eyebrow */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          marginBottom: 36,
          opacity: 0,
          animation: "fadeUp 0.9s ease forwards 0.3s",
        }}>
          <div style={{ width: 48, height: 1, background: "var(--gold)" }} />
          <span style={{
            fontFamily: "var(--font-dm-mono), monospace",
            fontSize: 10,
            letterSpacing: "5px",
            textTransform: "uppercase",
            color: "var(--gold)",
          }}>
            Mindvest Global Resources LLC · Est. 2026
          </span>
        </div>

        {/* Headline */}
        <h1
          ref={headlineRef}
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "clamp(54px, 9vw, 120px)",
            fontWeight: 300,
            lineHeight: 0.95,
            color: "var(--cream)",
            marginBottom: 36,
            opacity: 0,
            animation: "fadeUp 1s ease forwards 0.5s",
            letterSpacing: "-1px",
          }}
        >
          The Architecture
          <br />
          <em style={{
            fontStyle: "italic",
            color: "var(--gold-light)",
            display: "block",
          }}>
            of Becoming
          </em>
          <strong style={{
            fontWeight: 600,
            color: "var(--white)",
            display: "block",
          }}>
            Starts Here.
          </strong>
        </h1>

        {/* Sub */}
        <p style={{
          fontSize: 16,
          color: "rgba(247,243,236,0.5)",
          maxWidth: 560,
          lineHeight: 1.9,
          marginBottom: 56,
          opacity: 0,
          animation: "fadeUp 0.9s ease forwards 0.7s",
        }}>
          A transformational education enterprise built on the conviction that
          the most important structure any human being will ever build is the
          architecture of who they are becoming.
        </p>

        {/* CTAs */}
        <div style={{
          display: "flex",
          gap: 16,
          alignItems: "center",
          flexWrap: "wrap",
          opacity: 0,
          animation: "fadeUp 0.9s ease forwards 0.9s",
        }}>
          <a
            href="https://selar.com/543351n531"
            target="_blank"
            rel="noopener noreferrer"
            style={{
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
              position: "relative",
              overflow: "hidden",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "var(--gold-light)";
              el.style.transform = "translateY(-3px)";
              el.style.boxShadow = "0 16px 48px rgba(201,168,76,0.3)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "var(--gold)";
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "none";
            }}
          >
            Join the Masterclass
          </a>
          <a
            href="#divisions"
            style={{
              padding: "18px 44px",
              border: "1px solid rgba(201,168,76,0.35)",
              color: "rgba(247,243,236,0.6)",
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
              el.style.borderColor = "var(--gold)";
              el.style.color = "var(--gold)";
              el.style.transform = "translateY(-3px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "rgba(201,168,76,0.35)";
              el.style.color = "rgba(247,243,236,0.6)";
              el.style.transform = "translateY(0)";
            }}
          >
            Explore Our Work
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: "absolute",
        bottom: 44,
        right: 60,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 10,
        opacity: 0,
        animation: "fadeUp 0.8s ease forwards 1.4s",
      }}>
        <span style={{
          fontFamily: "var(--font-dm-mono), monospace",
          fontSize: 9,
          letterSpacing: "4px",
          textTransform: "uppercase",
          color: "var(--gold-muted)",
          writingMode: "vertical-rl",
        }}>
          Scroll
        </span>
        <div style={{
          width: 1,
          height: 64,
          background: "linear-gradient(to bottom, var(--gold), transparent)",
          animation: "scrollPulse 2.5s ease infinite",
        }} />
      </div>

      <style>{`
        @media (max-width: 960px) {
          section { padding: 0 24px 60px !important; }
          section > div:last-child { display: none; }
          h1 { font-size: clamp(42px, 12vw, 80px) !important; }
        }
      `}</style>
    </section>
  );
}
