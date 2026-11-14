// Blog post article content
// "The Power of the Room: How Authentic Community Shifts Your Reach, Deepens Support, and Multiplies Your Power to Serve"
// Alisa Consulting · Leadership Architecture · Mindvest Global

import Link from "next/link";

export function PowerOfTheRoomContent() {
  return (
    <article className="pr-article" style={articleStyle}>
      {/* ── Scoped Mobile & Responsive Styles ─────────────── */}
      <style>{`
        .pr-article {
          width: 100%;
          max-width: 780px;
          margin: 0 auto;
          box-sizing: border-box;
          overflow-wrap: break-word;
          word-wrap: break-word;
        }

        .pr-pillars-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin: 32px 0 36px;
        }

        .pr-pillar-card {
          background: var(--cream, #F7F3EC);
          border: 1px solid rgba(201, 168, 76, 0.22);
          padding: 24px 20px;
          border-radius: 2px;
          box-shadow: 0 2px 10px rgba(28, 26, 74, 0.03);
          box-sizing: border-box;
        }

        .pr-action-block {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin: 32px 0 36px;
        }

        .pr-action-item {
          display: flex;
          gap: 16px;
          padding: 20px 24px;
          background: var(--cream, #F7F3EC);
          border: 1px solid rgba(201, 168, 76, 0.22);
          border-radius: 2px;
          align-items: flex-start;
          box-sizing: border-box;
        }

        .pr-transform-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin: 32px 0;
        }

        .pr-transform-item {
          background: var(--cream, #F7F3EC);
          border: 1px solid rgba(201, 168, 76, 0.22);
          padding: 20px 18px;
          border-radius: 2px;
          box-sizing: border-box;
        }

        .pr-alisa-banner {
          margin-top: 64px;
          padding: 48px 40px;
          background: linear-gradient(135deg, #1C1A4A 0%, #12103A 100%);
          border: 1px solid rgba(201, 168, 76, 0.4);
          border-radius: 4px;
          box-shadow: 0 20px 50px rgba(18, 16, 58, 0.25);
          box-sizing: border-box;
        }

        .pr-alisa-btn-row {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        .pr-alisa-btn-primary,
        .pr-alisa-btn-secondary {
          box-sizing: border-box;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .pr-alisa-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(201, 168, 76, 0.4);
        }

        .pr-alisa-btn-secondary:hover {
          transform: translateY(-2px);
          background: #134636;
        }

        .pr-quote-box {
          margin: 40px 0;
          padding: 24px 32px;
          background: rgba(201, 168, 76, 0.08);
          border-left: 3px solid var(--gold, #C9A84C);
          border-radius: 0 4px 4px 0;
          box-sizing: border-box;
        }

        .pr-closing-box {
          margin-top: 48px;
          padding: 24px 28px;
          border-left: 3px solid var(--gold, #C9A84C);
          background: var(--cream, #F7F3EC);
          border-radius: 0 4px 4px 0;
          box-sizing: border-box;
        }

        /* ── Tablet screens: ≤860px ────────────────────────── */
        @media (max-width: 860px) {
          .pr-pillars-grid {
            grid-template-columns: 1fr !important;
            gap: 14px !important;
          }
          .pr-transform-grid {
            grid-template-columns: 1fr !important;
            gap: 14px !important;
          }
          .pr-alisa-banner {
            padding: 36px 26px !important;
            margin-top: 48px !important;
          }
          .pr-quote-box {
            padding: 20px 22px !important;
            margin: 32px 0 !important;
          }
          .pr-action-item {
            padding: 18px 20px !important;
          }
        }

        /* ── Mobile screens: ≤600px ─────────────────────────── */
        @media (max-width: 600px) {
          .pr-article {
            font-size: 15px !important;
            line-height: 1.75 !important;
          }
          .pr-alisa-banner {
            padding: 28px 18px !important;
            margin-top: 40px !important;
            border-radius: 2px !important;
          }
          .pr-alisa-btn-row {
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 12px !important;
          }
          .pr-alisa-btn-primary,
          .pr-alisa-btn-secondary {
            width: 100% !important;
            justify-content: center !important;
            text-align: center !important;
            padding: 14px 18px !important;
            font-size: 10px !important;
          }
          .pr-action-item {
            padding: 16px 16px !important;
            gap: 12px !important;
          }
          .pr-quote-box {
            padding: 18px 16px !important;
            margin: 28px 0 !important;
          }
          .pr-closing-box {
            padding: 18px 16px !important;
            margin-top: 36px !important;
          }
        }

        /* ── Small mobile: ≤380px ──────────────────────────── */
        @media (max-width: 380px) {
          .pr-alisa-banner {
            padding: 22px 14px !important;
          }
          .pr-pillar-card {
            padding: 18px 14px !important;
          }
          .pr-action-item {
            padding: 14px 12px !important;
          }
          .pr-quote-box {
            padding: 14px 12px !important;
          }
          .pr-closing-box {
            padding: 14px 12px !important;
          }
        }
      `}</style>

      {/* ── Opening ───────────────────────────────────── */}
      <p style={leadStyle}>
        There is a quiet, seductive myth that many dedicated founders, professionals, and
        visionaries buy into: that real strength means carrying the entire weight by yourself.
      </p>

      <p style={bodyStyle}>
        We convince ourselves that if our vision is authentic, we must grind in private until
        we produce something undeniable. But when you build in isolation, your reach is strictly
        bounded by your own energy, your perspective is constrained by your personal blind spots,
        and the emotional stamina required to keep going can wear dangerously thin.
      </p>

      <p style={bodyStyle}>
        Human beings are not isolated silos; we are relational architectures. We grow, heal,
        and expand through meaningful connection. The moment you make the courageous decision
        to step out of isolation and join an aligned community, the entire equation shifts.
        The journey stops being about solitary endurance—and becomes about{" "}
        <strong style={{ color: "var(--indigo, #1C1A4A)", fontWeight: 600 }}>
          shared elevation and exponential reach.
        </strong>
      </p>

      {/* ── Pull Quote 1 ──────────────────────────────── */}
      <blockquote className="pr-quote-box" style={quoteStyle}>
        <p style={quoteTextStyle}>
          &ldquo;When you step into a room of aligned hearts and sharp minds, you don&rsquo;t
          just gain contacts. You gain mirrors that reflect your potential, hands that steady
          your ladder, and voices that speak your name in rooms you haven&rsquo;t yet entered.&rdquo;
        </p>
        <cite style={quoteAuthorStyle}>— Zeki Ubor, Principal &amp; Founder, Mindvest Global</cite>
      </blockquote>

      {/* ── Section I ─────────────────────────────────── */}
      <h2 style={h2Style}>
        1. How Community Naturally Multiplies Your Reach
      </h2>

      <p style={bodyStyle}>
        Building an audience, clientele, or advisory network from zero in an indifferent world
        is exhausting. Cold outreach, algorithms, and transactional marketing demand immense
        friction for fractional returns.
      </p>

      <p style={bodyStyle}>
        Inside a high-trust community, however, credibility travels at the speed of human
        affection. When you enter a respected room with genuine presence, something remarkable
        happens:
      </p>

      <div className="pr-pillars-grid" style={pillarsGridStyle}>
        <div className="pr-pillar-card" style={pillarCardStyle}>
          <div style={pillarNumberStyle}>01</div>
          <h3 style={pillarTitleStyle}>Shared Goodwill</h3>
          <p style={pillarDescStyle}>
            The established trust of the ecosystem naturally embraces you. People are receptive
            to your ideas, open to your services, and willing to listen because they trust the
            shared room you both inhabit.
          </p>
        </div>

        <div className="pr-pillar-card" style={pillarCardStyle}>
          <div style={pillarNumberStyle}>02</div>
          <h3 style={pillarTitleStyle}>Warm Bridges Over Cold Pitches</h3>
          <p style={pillarDescStyle}>
            You no longer have to shout to be discovered. When one member experiences your
            excellence, they become an enthusiastic ambassador, connecting you directly to three
            others who need your exact expertise.
          </p>
        </div>

        <div className="pr-pillar-card" style={pillarCardStyle}>
          <div style={pillarNumberStyle}>03</div>
          <h3 style={pillarTitleStyle}>Unseen Horizons</h3>
          <p style={pillarDescStyle}>
            You gain immediate sightlines into joint ventures, high-leverage partnerships, and
            institutional collaborations that were completely invisible when you were operating alone.
          </p>
        </div>
      </div>

      <p style={bodyStyle}>
        What might take three years of solitary trial-and-error can often occur in three months
        inside the right circle, simply because{" "}
        <em style={{ color: "var(--indigo, #1C1A4A)", fontWeight: 500 }}>
          trust has already been cultivated in the soil.
        </em>
      </p>

      {/* ── Section II ────────────────────────────────── */}
      <h2 style={h2Style}>
        2. The Shift from Transactional Networking to Genuine Service
      </h2>

      <p style={bodyStyle}>
        Traditional networking often feels draining and hollow because it is rooted in
        extraction—people entering rooms calculating what they can take from one another.
        Authentic community operates on an entirely different frequency:{" "}
        <strong style={{ color: "var(--indigo, #1C1A4A)" }}>
          entering with a genuine desire to serve.
        </strong>
      </p>

      <div className="pr-action-block" style={actionBlockStyle}>
        <div className="pr-action-item" style={actionItemStyle}>
          <span style={actionBulletStyle}>✦</span>
          <div>
            <h4 style={actionHeadingStyle}>Listen to the Room First</h4>
            <p style={actionTextStyle}>
              Discover what your peers are building, where they are experiencing friction, and
              what they genuinely care about. Proximity becomes power only when accompanied by
              attentive empathy.
            </p>
          </div>
        </div>

        <div className="pr-action-item" style={actionItemStyle}>
          <span style={actionBulletStyle}>✦</span>
          <div>
            <h4 style={actionHeadingStyle}>Deliver Generous, Low-Friction Value</h4>
            <p style={actionTextStyle}>
              Connect two leaders who should know each other. Share a lesson from an expensive
              mistake you navigated. Offer quiet encouragement when a fellow founder is having
              a grueling week.
            </p>
          </div>
        </div>

        <div className="pr-action-item" style={actionItemStyle}>
          <span style={actionBulletStyle}>✦</span>
          <div>
            <h4 style={actionHeadingStyle}>Bring Your Authentic Reality</h4>
            <p style={actionTextStyle}>
              You do not need to perform perfection. Authenticity is deeply magnetic. When you
              are transparent about your growth edges, the room breathes a sigh of relief—and
              rallies around you with actionable, protective wisdom.
            </p>
          </div>
        </div>
      </div>

      <p style={bodyStyle}>
        When your foundational question is <em>“How can I contribute to this room?”</em>, the
        community responds with unshakeable loyalty, lifting your reputation higher than any
        self-promotional campaign ever could.
      </p>

      {/* ── Pull Quote 2 ──────────────────────────────── */}
      <blockquote className="pr-quote-box" style={quoteStyle}>
        <p style={quoteTextStyle}>
          &ldquo;Reputation is not what you tell the market about yourself. It is what an
          invested community joyfully tells the market on your behalf because they have felt the
          integrity of your contribution.&rdquo;
        </p>
        <cite style={quoteAuthorStyle}>— Zeki Ubor</cite>
      </blockquote>

      {/* ── Section III ───────────────────────────────── */}
      <h2 style={h2Style}>
        3. The Lifeline of True Peer Support
      </h2>

      <p style={bodyStyle}>
        Beyond increased reach and commercial opportunities, the greatest gift of community is{" "}
        <strong style={{ color: "var(--indigo, #1C1A4A)" }}>
          emotional and intellectual companionship
        </strong>.
      </p>

      <p style={bodyStyle}>
        Leadership can be an intensely lonely discipline. Founders and senior executives spend
        their days holding space for teams, investors, and clients. But who holds space for
        the leader?
      </p>

      <ul style={listStyle}>
        <li style={listItemStyle}>
          <strong style={{ color: "var(--indigo, #1C1A4A)" }}>A Safe Sounding Board:</strong> A closed door where you can explore raw,
          unpolished ideas without fear of judgment, stress-test critical decisions, and catch
          fatal assumptions before they cost capital.
        </li>
        <li style={listItemStyle}>
          <strong style={{ color: "var(--indigo, #1C1A4A)" }}>Stamina Restoration:</strong> On days when your mental clarity wavers under
          immense operational pressure, an aligned circle holds conviction on your behalf until
          your sovereign strength returns.
        </li>
        <li style={listItemStyle}>
          <strong style={{ color: "var(--indigo, #1C1A4A)" }}>Compressed Learning Curves:</strong> Someone in that circle has already
          navigated the exact operational bottleneck, founder dispute, or scaling crisis you
          are confronting right now. A thirty-minute conversation with an experienced peer can
          save you eighteen months of painful detour.
        </li>
      </ul>

      {/* ── Section IV ────────────────────────────────── */}
      <h2 style={h2Style}>
        4. From Human Connection to Corporate Architecture
      </h2>

      <p style={bodyStyle}>
        What is true for an individual navigating their personal evolution is identically true
        for organizations.
      </p>

      <p style={bodyStyle}>
        An enterprise is not merely a collection of employment contracts, KPI dashboards, and
        software stacks. <strong>An enterprise is a human community organized around shared
        conviction and strategic execution.</strong>
      </p>

      <p style={bodyStyle}>
        When corporate leaders understand how to cultivate genuine connection, psychological
        safety, and reciprocal trust internally:
      </p>

      <div className="pr-transform-grid" style={transformationGridStyle}>
        <div className="pr-transform-item" style={transformItemStyle}>
          <span style={transformTagStyle}>Result 01</span>
          <h4 style={transformTitleStyle}>Departmental Silos Collapse</h4>
          <p style={transformDescStyle}>
            Teams stop protecting private turf and begin collaborating with fluid, high-velocity
            clarity.
          </p>
        </div>

        <div className="pr-transform-item" style={transformItemStyle}>
          <span style={transformTagStyle}>Result 02</span>
          <h4 style={transformTitleStyle}>Executive Bottlenecks Dissolve</h4>
          <p style={transformDescStyle}>
            Senior leads operate with decentralized decision rights, liberating the founder to
            focus on long-range vision.
          </p>
        </div>

        <div className="pr-transform-item" style={transformItemStyle}>
          <span style={transformTagStyle}>Result 03</span>
          <h4 style={transformTitleStyle}>Unshakeable Market Gravitas</h4>
          <p style={transformDescStyle}>
            Clients and strategic partners immediately sense the coherence of an organization
            that executes with authentic internal integrity.
          </p>
        </div>
      </div>

      <p style={bodyStyle}>
        This is where human connection matures from personal enrichment into{" "}
        <strong style={{ color: "var(--indigo, #1C1A4A)" }}>
          enduring institutional architecture.
        </strong>
      </p>

      {/* ── Strategic Services: Alisa Consulting ─────── */}
      <div className="pr-alisa-banner" style={alisaBannerStyle}>
        <div style={alisaTagStyle}>
          Strategic Advisory · Enterprise Governance · Executive Architecture
        </div>

        <h3 style={alisaHeadingStyle}>
          Alisa Consulting: Architecting Leadership Capacity &amp; Corporate Execution
        </h3>

        <p style={alisaSubtitleStyle}>
          The Strategic Advisory Arm of Mindvest Global
        </p>

        <p style={alisaBodyStyle}>
          While community nurtures personal connection and expands your network, enduring
          enterprises require rigorous, load-bearing architecture to scale that momentum.
          <strong style={{ color: "#FFFFFF" }}> Alisa Consulting</strong> partners with founders, boards, and C-Suite
          leadership teams to translate relational alignment into high-yield organizational systems.
        </p>

        <div style={serviceListStyle}>
          <div style={serviceCardStyle}>
            <div style={serviceHeaderStyle}>
              <span style={serviceBadgeStyle}>Focus I</span>
              <h4 style={serviceTitleStyle}>Leadership Architecture &amp; Executive Alignment</h4>
            </div>
            <p style={serviceDescStyle}>
              Confidential advisory for founders and executive teams to eliminate cognitive
              drag, resolve C-Suite friction, install the B-U-I-L-D Decision Framework, and
              restore sovereign mental stamina under peak pressure.
            </p>
          </div>

          <div style={serviceCardStyle}>
            <div style={serviceHeaderStyle}>
              <span style={serviceBadgeStyle}>Focus II</span>
              <h4 style={serviceTitleStyle}>Corporate Architecture &amp; Structural Governance</h4>
            </div>
            <p style={serviceDescStyle}>
              Installing decentralized decision sovereignty across departments, de-bottlenecking
              founder reliance, and eliminating expensive operational drift across business pipelines.
            </p>
          </div>

          <div style={serviceCardStyle}>
            <div style={serviceHeaderStyle}>
              <span style={serviceBadgeStyle}>Focus III</span>
              <h4 style={serviceTitleStyle}>High-Trust Culture &amp; Ecosystem Design</h4>
            </div>
            <p style={serviceDescStyle}>
              Re-architecting internal communication protocols to eliminate passive-aggression,
              foster authentic ownership, and build a high-retention corporate culture where
              top-tier talent flourishes.
            </p>
          </div>
        </div>

        <div style={alisaCtaWrapperStyle}>
          <div style={alisaCtaTextStyle}>
            Ready to transition from operational friction to unshakeable institutional clarity?
          </div>
          <div className="pr-alisa-btn-row" style={alisaBtnRowStyle}>
            <a
              href="https://calendly.com/mindvestglobalresources/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="pr-alisa-btn-primary"
              style={alisaPrimaryBtnStyle}
            >
              Book Advisory Discovery Call ↗
            </a>
            <a
              href="https://wa.me/2349119059859?text=Hello%20Alisa%20Consulting%20Desk,%20I%20am%20reaching%20out%20to%20inquire%20about%20Leadership%20and%20Corporate%20Architecture%20advisory."
              target="_blank"
              rel="noopener noreferrer"
              className="pr-alisa-btn-secondary"
              style={alisaSecondaryBtnStyle}
            >
              <span style={greenDotStyle} />
              Alisa Desk (WhatsApp) ↗
            </a>
          </div>
        </div>
      </div>

      {/* ── Closing Note ──────────────────────────────── */}
      <div className="pr-closing-box" style={closingNoteStyle}>
        <p style={{ margin: 0, fontSize: 15, color: "var(--indigo, #1C1A4A)", fontStyle: "italic", lineHeight: 1.7 }}>
          Every institutional breakthrough begins with an honest human conversation.
          Whether you are seeking personal alignment or corporate architecture, you were
          never meant to build alone.
        </p>
      </div>
    </article>
  );
}

// ─── Styles ──────────────────────────────────────────────────────────────────
const articleStyle: React.CSSProperties = {
  maxWidth: 780,
  margin: "0 auto",
  fontFamily: "var(--font-dm-sans), sans-serif",
  color: "rgba(44, 40, 37, 0.88)",
  lineHeight: 1.85,
  fontSize: 16,
};

const leadStyle: React.CSSProperties = {
  fontFamily: "var(--font-cormorant), Georgia, serif",
  fontSize: "clamp(22px, 2.5vw, 28px)",
  fontWeight: 400,
  fontStyle: "italic",
  color: "var(--indigo, #1C1A4A)",
  lineHeight: 1.5,
  marginBottom: 28,
  paddingBottom: 28,
  borderBottom: "1px solid rgba(201, 168, 76, 0.25)",
};

const bodyStyle: React.CSSProperties = {
  fontSize: 16,
  lineHeight: 1.85,
  color: "rgba(44, 40, 37, 0.85)",
  marginBottom: 24,
};

const h2Style: React.CSSProperties = {
  fontFamily: "var(--font-cormorant), Georgia, serif",
  fontSize: "clamp(26px, 3.2vw, 36px)",
  fontWeight: 400,
  color: "var(--indigo, #1C1A4A)",
  margin: "48px 0 20px",
  lineHeight: 1.25,
  letterSpacing: "-0.5px",
};

const quoteStyle: React.CSSProperties = {
  margin: "40px 0",
  padding: "24px 32px",
  background: "rgba(201, 168, 76, 0.08)",
  borderLeft: "3px solid var(--gold, #C9A84C)",
  borderRadius: "0 4px 4px 0",
};

const quoteTextStyle: React.CSSProperties = {
  fontFamily: "var(--font-cormorant), Georgia, serif",
  fontSize: "clamp(20px, 2.2vw, 26px)",
  fontWeight: 400,
  fontStyle: "italic",
  color: "var(--indigo, #1C1A4A)",
  lineHeight: 1.45,
  margin: "0 0 12px 0",
};

const quoteAuthorStyle: React.CSSProperties = {
  fontFamily: "var(--font-dm-mono), monospace",
  fontSize: 10,
  letterSpacing: "3px",
  textTransform: "uppercase",
  color: "var(--gold-muted, #C9A84C)",
  display: "block",
};

const pillarsGridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: 16,
  margin: "32px 0 36px",
};

const pillarCardStyle: React.CSSProperties = {
  background: "var(--cream, #F7F3EC)",
  border: "1px solid rgba(201, 168, 76, 0.22)",
  padding: "24px 20px",
  borderRadius: 2,
  boxShadow: "0 2px 10px rgba(28, 26, 74, 0.03)",
};

const pillarNumberStyle: React.CSSProperties = {
  fontFamily: "var(--font-dm-mono), monospace",
  fontSize: 10,
  letterSpacing: "3px",
  color: "var(--gold, #C9A84C)",
  marginBottom: 10,
  fontWeight: 600,
};

const pillarTitleStyle: React.CSSProperties = {
  fontFamily: "var(--font-cormorant), Georgia, serif",
  fontSize: 20,
  fontWeight: 600,
  color: "var(--indigo, #1C1A4A)",
  margin: "0 0 10px 0",
  lineHeight: 1.25,
};

const pillarDescStyle: React.CSSProperties = {
  fontSize: 14,
  color: "rgba(44, 40, 37, 0.76)",
  lineHeight: 1.6,
  margin: 0,
};

const actionBlockStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 16,
  margin: "32px 0 36px",
};

const actionItemStyle: React.CSSProperties = {
  display: "flex",
  gap: 16,
  padding: "20px 24px",
  background: "var(--cream, #F7F3EC)",
  border: "1px solid rgba(201, 168, 76, 0.22)",
  borderRadius: 2,
  alignItems: "flex-start",
};

const actionBulletStyle: React.CSSProperties = {
  color: "var(--gold, #C9A84C)",
  fontSize: 16,
  lineHeight: 1.4,
};

const actionHeadingStyle: React.CSSProperties = {
  fontFamily: "var(--font-cormorant), Georgia, serif",
  fontSize: 19,
  color: "var(--indigo, #1C1A4A)",
  margin: "0 0 6px 0",
  fontWeight: 600,
};

const actionTextStyle: React.CSSProperties = {
  fontSize: 14,
  lineHeight: 1.65,
  color: "rgba(44, 40, 37, 0.78)",
  margin: 0,
};

const listStyle: React.CSSProperties = {
  paddingLeft: 20,
  marginBottom: 32,
};

const listItemStyle: React.CSSProperties = {
  fontSize: 15,
  color: "rgba(44, 40, 37, 0.82)",
  lineHeight: 1.8,
  marginBottom: 12,
};

const transformationGridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: 16,
  margin: "32px 0",
};

const transformItemStyle: React.CSSProperties = {
  background: "var(--cream, #F7F3EC)",
  border: "1px solid rgba(201, 168, 76, 0.22)",
  padding: "20px 18px",
  borderRadius: 2,
};

const transformTagStyle: React.CSSProperties = {
  fontFamily: "var(--font-dm-mono), monospace",
  fontSize: 9,
  letterSpacing: "2.5px",
  color: "var(--gold-muted, #C9A84C)",
  textTransform: "uppercase",
  display: "block",
  marginBottom: 8,
};

const transformTitleStyle: React.CSSProperties = {
  fontFamily: "var(--font-cormorant), Georgia, serif",
  fontSize: 18,
  color: "var(--indigo, #1C1A4A)",
  margin: "0 0 8px 0",
  fontWeight: 600,
};

const transformDescStyle: React.CSSProperties = {
  fontSize: 13.5,
  color: "rgba(44, 40, 37, 0.75)",
  lineHeight: 1.6,
  margin: 0,
};

// ─── Alisa Consulting Strategic Banner (Dark Card on White Page) ─────────────
const alisaBannerStyle: React.CSSProperties = {
  marginTop: 64,
  padding: "48px 40px",
  background: "linear-gradient(135deg, #1C1A4A 0%, #12103A 100%)",
  border: "1px solid rgba(201, 168, 76, 0.4)",
  borderRadius: 4,
  boxShadow: "0 20px 50px rgba(18, 16, 58, 0.25)",
};

const alisaTagStyle: React.CSSProperties = {
  fontFamily: "var(--font-dm-mono), monospace",
  fontSize: 10,
  letterSpacing: "3px",
  textTransform: "uppercase",
  color: "var(--gold, #C9A84C)",
  marginBottom: 12,
  fontWeight: 600,
};

const alisaHeadingStyle: React.CSSProperties = {
  fontFamily: "var(--font-cormorant), Georgia, serif",
  fontSize: "clamp(26px, 3.4vw, 36px)",
  fontWeight: 400,
  color: "#FFFFFF",
  margin: "0 0 8px 0",
  lineHeight: 1.2,
};

const alisaSubtitleStyle: React.CSSProperties = {
  fontFamily: "var(--font-cormorant), Georgia, serif",
  fontSize: 18,
  fontStyle: "italic",
  color: "var(--gold-light, #E8D595)",
  margin: "0 0 20px 0",
};

const alisaBodyStyle: React.CSSProperties = {
  fontSize: 15,
  lineHeight: 1.75,
  color: "rgba(255, 255, 255, 0.88)",
  marginBottom: 28,
};

const serviceListStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 16,
  marginBottom: 36,
};

const serviceCardStyle: React.CSSProperties = {
  background: "rgba(255, 255, 255, 0.05)",
  border: "1px solid rgba(201, 168, 76, 0.22)",
  padding: "22px 24px",
  borderRadius: 2,
};

const serviceHeaderStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 12,
  marginBottom: 8,
};

const serviceBadgeStyle: React.CSSProperties = {
  fontFamily: "var(--font-dm-mono), monospace",
  fontSize: 9,
  letterSpacing: "2px",
  color: "var(--indigo-deep, #12103A)",
  background: "var(--gold, #C9A84C)",
  padding: "3px 8px",
  fontWeight: 700,
  textTransform: "uppercase",
  borderRadius: 1,
};

const serviceTitleStyle: React.CSSProperties = {
  fontFamily: "var(--font-cormorant), Georgia, serif",
  fontSize: 20,
  fontWeight: 600,
  color: "#FFFFFF",
  margin: 0,
};

const serviceDescStyle: React.CSSProperties = {
  fontSize: 14,
  color: "rgba(255, 255, 255, 0.8)",
  lineHeight: 1.65,
  margin: 0,
};

const alisaCtaWrapperStyle: React.CSSProperties = {
  borderTop: "1px solid rgba(201, 168, 76, 0.25)",
  paddingTop: 28,
  display: "flex",
  flexDirection: "column",
  gap: 16,
};

const alisaCtaTextStyle: React.CSSProperties = {
  fontSize: 15,
  fontFamily: "var(--font-cormorant), Georgia, serif",
  fontStyle: "italic",
  color: "rgba(255, 255, 255, 0.9)",
};

const alisaBtnRowStyle: React.CSSProperties = {
  display: "flex",
  gap: 14,
  flexWrap: "wrap",
};

const alisaPrimaryBtnStyle: React.CSSProperties = {
  padding: "15px 30px",
  background: "linear-gradient(135deg, var(--gold, #C9A84C) 0%, #dfc374 100%)",
  color: "var(--indigo-deep, #12103A)",
  fontFamily: "var(--font-dm-mono), monospace",
  fontSize: 10.5,
  letterSpacing: "2px",
  textTransform: "uppercase",
  fontWeight: 700,
  textDecoration: "none",
  display: "inline-block",
  boxShadow: "0 4px 16px rgba(201, 168, 76, 0.25)",
  borderRadius: 2,
};

const alisaSecondaryBtnStyle: React.CSSProperties = {
  padding: "15px 26px",
  background: "#0d2e23",
  color: "#e8f5e9",
  border: "1px solid rgba(16, 185, 129, 0.4)",
  fontFamily: "var(--font-dm-mono), monospace",
  fontSize: 10.5,
  letterSpacing: "2px",
  textTransform: "uppercase",
  fontWeight: 600,
  textDecoration: "none",
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  borderRadius: 2,
};

const greenDotStyle: React.CSSProperties = {
  width: 7,
  height: 7,
  borderRadius: "50%",
  background: "#10B981",
  display: "inline-block",
  boxShadow: "0 0 6px #10B981",
};

const closingNoteStyle: React.CSSProperties = {
  marginTop: 48,
  padding: "24px 28px",
  borderLeft: "3px solid var(--gold, #C9A84C)",
  background: "var(--cream, #F7F3EC)",
  borderRadius: "0 4px 4px 0",
};
