"use client";

import { useEffect, useState } from "react";

export default function ElevationPopup() {
  const [isCardVisible, setIsCardVisible] = useState(false);
  const [isBadgeVisible, setIsBadgeVisible] = useState(false);

  useEffect(() => {
    // Show popup card after 9 seconds on page load (staggered with Origin popup)
    const timer = setTimeout(() => {
      setIsCardVisible(true);
    }, 9000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsCardVisible(false);
    setIsBadgeVisible(true);
  };

  const handleBadgeClick = () => {
    setIsBadgeVisible(false);
    setIsCardVisible(true);
  };

  const handleAction = () => {
    // Hide popup card and show badge
    setIsCardVisible(false);
    setIsBadgeVisible(true);

    // Find the Elevation Studio button in the bottom CTA section
    const target = document.getElementById("cta-elevation-btn");
    if (target) {
      // Smooth scroll to the button
      target.scrollIntoView({ behavior: "smooth", block: "center" });

      // Add high-impact flashing highlight class
      setTimeout(() => {
        target.classList.add("pulse-highlight");
        
        // Remove class after animation finishes so it can run again
        setTimeout(() => {
          target.classList.remove("pulse-highlight");
        }, 1800);
      }, 500); // Small delay to let scroll finish
    }
  };

  return (
    <>
      {/* CSS Animations */}
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes goldBadgeGlow {
          0%, 100% { box-shadow: 0 4px 20px rgba(201, 168, 76, 0.3), 0 0 0 0 rgba(201, 168, 76, 0.4); }
          50% { box-shadow: 0 4px 25px rgba(201, 168, 76, 0.5), 0 0 0 12px rgba(201, 168, 76, 0); }
        }
        @keyframes popIn {
          from { opacity: 0; transform: scale(0.8) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>

      {/* 1. Large Popup Card */}
      {isCardVisible && (
        <div
          style={{
            position: "fixed",
            bottom: "32px",
            right: "32px",
            width: "360px",
            maxWidth: "calc(100vw - 64px)",
            background: "rgba(28, 26, 74, 0.9)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(201, 168, 76, 0.25)",
            borderRadius: "16px",
            padding: "24px",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.5)",
            zIndex: 9999,
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            animation: "slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
          }}
        >
          {/* Top row: Logo and Close */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            {/* Elevation Studio Logo */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <svg
                width="28"
                height="28"
                viewBox="0 0 512 512"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ flexShrink: 0 }}
              >
                <rect x="16" y="16" width="480" height="480" rx="130" fill="#12103A" stroke="#C9A84C" strokeWidth="16" />
                <rect x="130" y="280" width="70" height="125" fill="#C9A84C" />
                <rect x="220" y="210" width="70" height="195" fill="#C9A84C" />
                <path d="M 310 405 L 310 180 L 345 120 L 380 180 L 380 405 Z" fill="#C9A84C" />
                <circle cx="345" cy="105" r="16" fill="#C9A84C" />
                <rect x="100" y="405" width="312" height="15" fill="#C9A84C" />
                <line x1="130" y1="280" x2="310" y2="180" stroke="#C9A84C" strokeWidth="8" opacity="0.6" />
              </svg>
              <span style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: "12px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "var(--gold)",
                fontWeight: "bold",
              }}>
                Elevation Studio
              </span>
            </div>

            {/* Close Button */}
            <button
              onClick={handleClose}
              style={{
                background: "none",
                border: "none",
                color: "rgba(247, 243, 236, 0.5)",
                fontSize: "24px",
                lineHeight: "1",
                cursor: "pointer",
                padding: "0",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(247, 243, 236, 0.5)")}
              aria-label="Close"
            >
              &times;
            </button>
          </div>

          {/* Sales Caption */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <h4 style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "18px",
              fontWeight: 600,
              color: "var(--cream)",
              margin: 0,
            }}>
              Architect Your Environment
            </h4>
            <p style={{
              fontSize: "13px",
              color: "rgba(247, 243, 236, 0.65)",
              lineHeight: "1.6",
              margin: 0,
            }}>
              Ready to design physical and digital architectures that elevate human experience? Visit Elevation Studio to craft your spaces.
            </p>
          </div>

          {/* Action Button */}
          <button
            onClick={handleAction}
            style={{
              width: "100%",
              padding: "12px 20px",
              background: "linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%)",
              color: "var(--indigo-deep)",
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: "10px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              fontWeight: 700,
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
              boxShadow: "0 4px 15px rgba(201, 168, 76, 0.2)",
              textAlign: "center",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = "translateY(-1px)";
              el.style.boxShadow = "0 8px 20px rgba(201, 168, 76, 0.35)";
              el.style.background = "linear-gradient(135deg, var(--gold-light) 0%, var(--gold) 100%)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "0 4px 15px rgba(201, 168, 76, 0.2)";
              el.style.background = "linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%)";
            }}
          >
            Explore Studio &rarr;
          </button>
        </div>
      )}

      {/* 2. Floating Elevation Studio Logo Badge */}
      {isBadgeVisible && (
        <button
          onClick={handleBadgeClick}
          style={{
            position: "fixed",
            bottom: "104px", // Stacked above the Origin badge (32px + 56px + 16px gap = 104px)
            right: "32px",
            width: "56px",
            height: "56px",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0",
            zIndex: 9999,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            animation: "popIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards, goldBadgeGlow 3s infinite",
            transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.15)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
          title="Click to view Elevation Studio information"
          aria-label="Open Elevation Studio Info"
        >
          <svg
            width="56"
            height="56"
            viewBox="0 0 512 512"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="16" y="16" width="480" height="480" rx="130" fill="#12103A" stroke="#C9A84C" strokeWidth="16" />
            <rect x="130" y="280" width="70" height="125" fill="#C9A84C" />
            <rect x="220" y="210" width="70" height="195" fill="#C9A84C" />
            <path d="M 310 405 L 310 180 L 345 120 L 380 180 L 380 405 Z" fill="#C9A84C" />
            <circle cx="345" cy="105" r="16" fill="#C9A84C" />
            <rect x="100" y="405" width="312" height="15" fill="#C9A84C" />
            <line x1="130" y1="280" x2="310" y2="180" stroke="#C9A84C" strokeWidth="8" opacity="0.6" />
          </svg>
        </button>
      )}
    </>
  );
}
