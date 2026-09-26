// Blog post article content
// "The Architecture of Executive Gravitas"
// Division II: Leadership Architecture · Executive Authority · Mindvest Global

import Link from "next/link";

export function ExecutiveGravitasContent() {
  return (
    <article style={articleStyle}>
      {/* ── Opening ───────────────────────────────────── */}
      <p style={leadStyle}>
        In boardrooms and executive suites from London to Johannesburg, an invisible industry has
        flourished around a singular obsession: teaching leaders how to perform presence.
        Executives spend fortunes on media trainers who teach them when to lower their vocal octave,
        public speaking consultants who choreograph hand gestures, and charisma coaches who preach
        the gospel of &ldquo;power posing.&rdquo;
      </p>

      <p style={bodyStyle}>
        Yet anyone who has sat in high-stakes negotiations, hostile shareholder meetings, or crisis
        cabinets knows the brutal truth: you can spot rehearsed charisma within thirty seconds. It
        feels thin. It sounds brittle. And the moment genuine pressure is applied, the theatrical
        veneer collapses, leaving an insecure operator frantically scrambling for control.
      </p>

      <p style={bodyStyle}>
        True authority cannot be rehearsed. You cannot download gravitas from a two-day presentation
        bootcamp, because gravitas is not a rhetorical technique. It is an architectural condition.
      </p>

      {/* ── Pull quote ────────────────────────────────── */}
      <blockquote style={quoteStyle}>
        <span style={quoteBar} />
        <p style={quoteTextStyle}>
          &ldquo;Presence is not an act of projection; it is a state of structural congruence. When a
          leader&rsquo;s internal architecture is resolved, they do not need to fill the room with noise.
          Their silence carries load.&rdquo;
        </p>
        <cite style={quoteAuthorStyle}>— Zeki Ubor, Principal & Founder, Mindvest Global</cite>
      </blockquote>

      {/* ── Section I ─────────────────────────────────── */}
      <h2 style={h2Style}>
        The Performance Trap: The Exhaustion of Counterfeit Authority
      </h2>

      <p style={bodyStyle}>
        There is a fundamental difference between <em>positional power</em> and <em>architectural
        authority</em>. Positional power is bestowed by an organization: a title, an equity slice,
        a reporting hierarchy, a corner office. It allows you to enforce compliance, demand
        attendance, and dictate deliverables. But positional power is inherently fragile. It exists
        only so long as the institutional contract remains intact.
      </p>

      <p style={bodyStyle}>
        Architectural authority, by contrast, is internal. It is the unshakeable center of gravity
        that causes a room to quietly orient itself around a leader before they have spoken a single
        word. It cannot be revoked by a board reshuffle or diminished by market volatility, because it
        was never anchored in external validation to begin with.
      </p>

      <p style={bodyStyle}>
        When executives lack architectural authority, they compensate through performance. They
        become hyper-verbal, dominating meetings to prove intellect. They micro-manage operational
        minutiae because delegation feels like a surrender of relevance. They cultivate an aura of
        unapproachable urgency, mistaking frantic responsiveness for strategic indispensability.
      </p>

      <p style={bodyStyle}>
        The psychological cost of this counterfeit authority is catastrophic. Maintaining a facade
        demands immense cognitive energy. By the time these leaders reach the pinnacle of their
        careers, they are hollowed out by the structural exhaustion of defending an identity they
        never truly owned.
      </p>

      {/* ── Section II ────────────────────────────────── */}
      <h2 style={h2Style}>
        The Anatomy of Gravitas: Three Load-Bearing Disciplines
      </h2>

      <p style={bodyStyle}>
        In spatial engineering, a building stands tall not because it shouts at the sky, but because
        its weight distribution, subterranean pilings, and dampening systems dissipate kinetic shocks
        with silent efficiency. True executive gravitas operates on identical physical principles:
      </p>

      <h3 style={h3Style}>1. Radical Internal Congruence</h3>
      <p style={bodyStyle}>
        Gravitas is what happens when who you are in private matches who you are in public. Incongruence
        is instantly sensed by human beings at a neurological level. When an executive advocates for
        bold institutional transformation while harboring paralyzing personal self-doubt, the room
        detects the micro-hesitations, the nervous humor, the compensatory rigidity. Gravitas begins
        with deconstruction: confronting and dismantling the inherited anxieties and borrowed masks
        that compromise personal authority.
      </p>

      <h3 style={h3Style}>2. The Discipline of Spatial and Verbal Economy</h3>
      <p style={bodyStyle}>
        Amateur leaders believe influence is measured in volume and speaking time. Master architects
        of leadership know that power increases as unnecessary mass is eliminated. Watch an executive
        who possesses authentic gravitas: they do not interrupt. They do not hurry to fill pauses.
        When they speak, their sentences are stripped of apologetic qualifiers, nervous filler, and
        hedging preamble. Every word carries structural mass because it is backed by clarity of intent.
      </p>

      <h3 style={h3Style}>3. The Non-Anxious Presence Under Load</h3>
      <p style={bodyStyle}>
        In moments of organizational crisis—supply chain rupture, regulatory audits, sudden executive
        defection—an institution operates in limbic panic. Cortisol surges; rumors propagate; survival
        instincts override strategic vision. The leader who commands gravitas acts as a kinetic damper.
        They do not absorb the panic; they ground it. Their physiological composure signals to the
        entire human ecosystem: <em>The foundation holds. We are in command.</em>
      </p>

      {/* ── Framework Callout Box ──────────────────────── */}
      <div style={calloutStyle}>
        <div style={calloutLabelStyle}>Leadership Architecture · Division II</div>
        <div style={calloutHeadStyle}>The Executive Authority Blueprint: Three Core Pillars</div>
        <p style={calloutBodyStyle}>
          At Mindvest Global, our Leadership Architecture practice is engineered for founders,
          C-suite executives, and institutional heads who refuse to rely on performative theatrics.
          We rebuild executive presence through three rigorous architectural phases:
        </p>
        <div style={calloutDivider} />
        <div
          className="blog-callout-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 20,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "var(--font-dm-mono)",
                fontSize: 11,
                color: "var(--gold)",
                letterSpacing: "1px",
                textTransform: "uppercase",
                marginBottom: 6,
              }}
            >
              Pillar 01 · Identity Deconstruction
            </div>
            <div style={{ fontSize: 13, color: "rgba(247,243,236,0.7)", lineHeight: 1.6 }}>
              Stripping away performative posturing, borrowed corporate archetypes, and subconscious
              validation loops to anchor executive presence in radical personal truth.
            </div>
          </div>
          <div>
            <div
              style={{
                fontFamily: "var(--font-dm-mono)",
                fontSize: 11,
                color: "var(--gold)",
                letterSpacing: "1px",
                textTransform: "uppercase",
                marginBottom: 6,
              }}
            >
              Pillar 02 · Emotional Tensile Strength
            </div>
            <div style={{ fontSize: 13, color: "rgba(247,243,236,0.7)", lineHeight: 1.6 }}>
              Engineering the internal shock-absorbers required to remain non-anxious, strategically
              lucid, and sovereign under extreme boardroom ambiguity and crisis.
            </div>
          </div>
          <div>
            <div
              style={{
                fontFamily: "var(--font-dm-mono)",
                fontSize: 11,
                color: "var(--gold)",
                letterSpacing: "1px",
                textTransform: "uppercase",
                marginBottom: 6,
              }}
            >
              Pillar 03 · Structural Room Command
            </div>
            <div style={{ fontSize: 13, color: "rgba(247,243,236,0.7)", lineHeight: 1.6 }}>
              Mastering verbal economy, physical spatial authority, and strategic alignment to
              command high-stakes rooms without raising your voice or demanding deference.
            </div>
          </div>
        </div>
      </div>

      {/* ── Section III ────────────────────────────────── */}
      <h2 style={h2Style}>
        Building What Cannot Be Shaken: The Shift from Role to Reality
      </h2>

      <p style={bodyStyle}>
        The world does not need more polished speakers reading scripts prepared by communications
        teams. The emerging global economy—defined by rapid technological disruption, macroeconomic
        shocks, and institutional distrust—demands leaders whose presence is an immovable anchor.
      </p>

      <p style={bodyStyle}>
        When an executive steps out of the performance trap and does the deep, quiet work of internal
        architecture, everything changes. Negotiations shift from combative posturing to quiet alignment.
        Teams stop protecting turf and begin taking bold, autonomous ownership. And the leader
        discovers a profound, liberating truth:
      </p>

      <p style={bodyStyle}>
        You do not need to fight for respect when your very presence reflects structural integrity.
        Authority is not something you demand from others; it is the natural consequence of having
        mastered yourself.
      </p>

      {/* ── Closing Division CTA ──────────────────────── */}
      <div style={closingStyle}>
        <div
          style={{
            background: "var(--cream)",
            border: "1px solid rgba(201,168,76,0.25)",
            padding: "44px 40px",
            borderRadius: 2,
            position: "relative",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: 10,
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "var(--gold-muted)",
              marginBottom: 12,
            }}
          >
            Executive Development & Leadership Advisory
          </div>
          <h3
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: 32,
              fontWeight: 400,
              color: "var(--indigo)",
              margin: "0 0 16px",
              lineHeight: 1.2,
            }}
          >
            Architect Your Executive Gravitas
          </h3>
          <p
            style={{
              fontSize: 15,
              color: "var(--text-light)",
              lineHeight: 1.8,
              margin: "0 0 28px",
              maxWidth: 620,
            }}
          >
            Mindvest Global partners with senior founders, managing directors, and institutional
            executives through private intensives, executive retreats, and boardroom keynotes.
            Explore our 2-Day Executive Immersion or book a private strategy deep-dive with Zeki Ubor.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
            <Link
              href="/divisions/leadership-architecture"
              style={{
                display: "inline-block",
                padding: "14px 28px",
                background: "var(--indigo)",
                color: "var(--cream)",
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: 11,
                letterSpacing: "2px",
                textTransform: "uppercase",
                textDecoration: "none",
                borderRadius: 2,
                transition: "opacity 0.2s ease",
              }}
            >
              Explore Division II: Leadership Architecture →
            </Link>
            <a
              href="https://calendly.com/mindvestglobalresources/30min"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "13px 26px",
                border: "1px solid var(--gold-muted)",
                color: "var(--gold-muted)",
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: 11,
                letterSpacing: "2px",
                textTransform: "uppercase",
                textDecoration: "none",
                borderRadius: 2,
              }}
            >
              Book Executive Call (Calendly ↗)
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

// ─── Inline Style Tokens ───────────────────────────────────────────────────────
const articleStyle: React.CSSProperties = {
  fontSize: 17,
  lineHeight: 1.85,
  color: "var(--text-body, #2C2825)",
  maxWidth: 720,
  margin: "0 auto",
};

const leadStyle: React.CSSProperties = {
  fontFamily: "var(--font-cormorant), Georgia, serif",
  fontSize: "clamp(20px, 2.2vw, 24px)",
  fontWeight: 400,
  lineHeight: 1.6,
  color: "var(--indigo, #0F172A)",
  marginBottom: 32,
  letterSpacing: "-0.01em",
};

const bodyStyle: React.CSSProperties = {
  marginBottom: 26,
  color: "rgba(44,40,37,0.85)",
};

const h2Style: React.CSSProperties = {
  fontFamily: "var(--font-cormorant), Georgia, serif",
  fontSize: "clamp(26px, 2.8vw, 34px)",
  fontWeight: 400,
  lineHeight: 1.25,
  color: "var(--indigo, #0F172A)",
  marginTop: 56,
  marginBottom: 20,
  letterSpacing: "-0.01em",
};

const h3Style: React.CSSProperties = {
  fontFamily: "var(--font-cormorant), Georgia, serif",
  fontSize: "clamp(20px, 2vw, 23px)",
  fontWeight: 500,
  lineHeight: 1.35,
  color: "var(--indigo, #0F172A)",
  marginTop: 36,
  marginBottom: 12,
};

const quoteStyle: React.CSSProperties = {
  margin: "44px 0",
  padding: "24px 32px",
  background: "rgba(201,168,76,0.06)",
  borderLeft: "3px solid var(--gold-muted, #C9A84C)",
  borderRadius: "0 4px 4px 0",
  position: "relative",
};

const quoteBar: React.CSSProperties = {
  display: "none",
};

const quoteTextStyle: React.CSSProperties = {
  fontFamily: "var(--font-cormorant), Georgia, serif",
  fontSize: "clamp(19px, 2vw, 23px)",
  fontStyle: "italic",
  lineHeight: 1.55,
  color: "var(--indigo, #0F172A)",
  margin: "0 0 12px",
};

const quoteAuthorStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--font-dm-mono), monospace",
  fontSize: 11,
  letterSpacing: "1.5px",
  textTransform: "uppercase",
  color: "var(--gold-muted, #C9A84C)",
  fontStyle: "normal",
};

const calloutStyle: React.CSSProperties = {
  background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
  border: "1px solid rgba(201,168,76,0.35)",
  borderRadius: 4,
  padding: "36px 32px",
  margin: "48px 0",
  color: "#F7F3EC",
};

const calloutLabelStyle: React.CSSProperties = {
  fontFamily: "var(--font-dm-mono), monospace",
  fontSize: 10,
  letterSpacing: "3px",
  textTransform: "uppercase",
  color: "var(--gold, #D4AF37)",
  marginBottom: 8,
};

const calloutHeadStyle: React.CSSProperties = {
  fontFamily: "var(--font-cormorant), Georgia, serif",
  fontSize: "clamp(20px, 2.2vw, 26px)",
  fontWeight: 400,
  color: "#F7F3EC",
  marginBottom: 12,
  lineHeight: 1.3,
};

const calloutBodyStyle: React.CSSProperties = {
  fontSize: 14,
  lineHeight: 1.7,
  color: "rgba(247,243,236,0.8)",
  marginBottom: 20,
};

const calloutDivider: React.CSSProperties = {
  height: 1,
  background: "rgba(201,168,76,0.2)",
  margin: "20px 0",
};

const closingStyle: React.CSSProperties = {
  marginTop: 64,
  paddingTop: 36,
  borderTop: "1px solid rgba(201,168,76,0.2)",
};
