"use client";

import { useEffect, useState } from "react";

export default function OriginPopup() {
  const [isCardVisible, setIsCardVisible] = useState(false);
  const [isBadgeVisible, setIsBadgeVisible] = useState(false);

  useEffect(() => {
    // Show popup card after 6 seconds on page load
    const timer = setTimeout(() => {
      setIsCardVisible(true);
    }, 6000);
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

    // Find the Origin button in the Hero section
    const target = document.getElementById("hero-origin-btn");
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
        @keyframes badgeGlow {
          0%, 100% { box-shadow: 0 4px 20px rgba(16, 185, 129, 0.3), 0 0 0 0 rgba(16, 185, 129, 0.4); }
          50% { box-shadow: 0 4px 25px rgba(16, 185, 129, 0.5), 0 0 0 12px rgba(16, 185, 129, 0); }
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
            {/* Origin Logo */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <svg
                width="28"
                height="28"
                viewBox="0 0 512 512"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ flexShrink: 0 }}
              >
                <rect x="16" y="16" width="480" height="480" rx="130" fill="#10B981" stroke="#FDFAF5" strokeWidth="32" />
                <circle cx="256" cy="256" r="138" stroke="#FDFAF5" strokeWidth="56" />
              </svg>
              <span style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: "12px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "var(--gold)",
                fontWeight: "bold",
              }}>
                Origin Course
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
              Uncover Your Baseline Design
            </h4>
            <p style={{
              fontSize: "13px",
              color: "rgba(247, 243, 236, 0.65)",
              lineHeight: "1.6",
              margin: 0,
            }}>
              Ready to design your original core identity? Step into your origin sequence and deploy your potential with the Origin platform.
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
            Explore Origin &rarr;
          </button>
        </div>
      )}

      {/* 2. Floating Origin Logo Badge */}
      {isBadgeVisible && (
        <button
          onClick={handleBadgeClick}
          style={{
            position: "fixed",
            bottom: "32px",
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
            animation: "popIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards, badgeGlow 3s infinite",
            transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.15)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
          title="Click to view Origin course information"
          aria-label="Open Origin Info"
        >
          <svg
            width="56"
            height="56"
            viewBox="0 0 512 512"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="16" y="16" width="480" height="480" rx="130" fill="#10B981" stroke="#FDFAF5" strokeWidth="32" />
            <circle cx="256" cy="256" r="138" stroke="#FDFAF5" strokeWidth="56" />
          </svg>
        </button>
      )}
    </>
  );
}
