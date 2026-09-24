// Blog post article content
// "The Architecture of Institutional Alignment"
// Division III: Organizational Architecture · Institutional Design · Mindvest Global

import Link from "next/link";

export function InstitutionalAlignmentContent() {
  return (
    <article style={articleStyle}>
      {/* ── Opening ───────────────────────────────────── */}
      <p style={leadStyle}>
        Walk into almost any ambitious corporate headquarters across Lagos, Nairobi, London, or Accra,
        and you will encounter the same aesthetic performance: soaring glass atriums, immaculately
        branded reception desks, and framed mission statements championing &ldquo;Excellence, Integrity,
        and Innovation.&rdquo;
      </p>

      <p style={bodyStyle}>
        Yet, step past the polished lobby into the middle-management engine rooms or the executive
        corridors after hours, and an entirely different reality emerges. Teams operate in armored
        silos. High-performing directors spend half their weekly energy navigating internal politics
        rather than market innovation. Strategic directives issued from the boardroom dissipate into
        indifference before reaching frontline execution.
      </p>

      <p style={bodyStyle}>
        The standard diagnosis from leadership is predictable: &ldquo;We have a culture problem.&rdquo;
        The standard remedy is equally predictable: hire an agency for an offsite retreat, commission
        fresh motivational posters, or launch an internal wellness perk.
      </p>

      <p style={bodyStyle}>
        Both the diagnosis and the remedy misunderstand reality. You do not have a culture problem.
        You have an architectural failure.
      </p>

      {/* ── Pull quote ────────────────────────────────── */}
      <blockquote style={quoteStyle}>
        <span style={quoteBar} />
        <p style={quoteTextStyle}>
          &ldquo;Culture is not the wallpaper you hang in the boardroom. Culture is the plumbing, the
          reinforcement beams, and the load-bearing foundation of how human beings make decisions under
          pressure. When an enterprise fractures under scale, it is never an attitude crisis — it is a
          structural design flaw.&rdquo;
        </p>
        <cite style={quoteAuthorStyle}>— Zeki Ubor, Principal & Founder, Mindvest Global</cite>
      </blockquote>

      {/* ── Section I ─────────────────────────────────── */}
      <h2 style={h2Style}>
        The Cosmetic Fallacy: Why Modern Enterprise Treats Structure as Interior Decor
      </h2>

      <p style={bodyStyle}>
        In spatial architecture, no licensed engineer attempts to resolve foundation settlement by
        repainting the facade. If a building is sinking because subterranean soil testing was ignored
        or concrete curing was compromised, applying Italian marble to the lobby floor does not save
        the building — it accelerates structural failure by adding dead weight to an already
        compromised foundation.
      </p>

      <p style={bodyStyle}>
        Yet this is precisely how modern institutions treat organizational dysfunction. When key
        talent resigns in waves, when decision latency slows product cycles to a crawl, or when merger
        integrations turn toxic, leaders reach for cosmetic interventions:
      </p>

      <ul style={ulStyle}>
        <li style={liStyle}>
          <strong>Borrowed Values Statements:</strong> Copying aspirational buzzwords from Silicon
          Valley or global conglomerates without engineering the structural incentives required to
          sustain them.
        </li>
        <li style={liStyle}>
          <strong>Performative Offsites:</strong> Spending millions on weekend retreats that generate
          temporary emotional euphoria, only for leaders to return on Monday to the exact same
          antagonistic reporting lines and bottlenecked workflows.
        </li>
        <li style={liStyle}>
          <strong>Superficial Perks:</strong> Substituting beanbags, catered lunches, and gym
          memberships for psychological safety, autonomous decision rights, and transparent operational
          accountability.
        </li>
      </ul>

      <p style={bodyStyle}>
        Human capital does not align around slogans. Human capital aligns around the invisible
        conduits of incentive, authority, clarity, and structural permission. If the architectural
        blueprint contradicts the stated values, the blueprint wins every single time.
      </p>

      {/* ── Section II ────────────────────────────────── */}
      <h2 style={h2Style}>
        The Three Structural Fractures That Cripple Scaling Institutions
      </h2>

      <p style={bodyStyle}>
        Over a decade of working across architectural practice, enterprise systems engineering, and
        executive development, one principle has remained unshakeable: systems do not fail randomly;
        they fail along predictable geometric stress points. When an institution attempts to scale its
        revenue or footprint without redesigning its human architecture, three fractures inevitably
        emerge:
      </p>

      <h3 style={h3Style}>1. The Decision Latency Chokehold</h3>
      <p style={bodyStyle}>
        As organizations expand from twenty people to two hundred or two thousand, founder-led intuition
        stops working. Yet rather than decentralizing authority through rigorous architectural protocols,
        insecure leadership centralizes control. Every budget approval, strategic response, and client
        deviation must travel up an elevator shaft of seven management tiers. The organization becomes
        an arthritic giant: capable of immense capital deployment, but unable to respond to marketplace
        shifts before nimbler competitors dismantle their advantage.
      </p>

      <h3 style={h3Style}>2. The Silo Armor Phenomenon</h3>
      <p style={bodyStyle}>
        When organizational boundaries are poorly designed, departments begin treating neighboring
        divisions not as collaborative partners, but as hostile foreign states. Sales hides lead data
        from Product; Operations views Legal as an obstructionist police force; Finance designs
        controls that preserve cash at the direct expense of operational velocity. This is not because
        department heads are malicious; it is because their performance metrics were engineered in
        isolation. The architecture rewards regional empire-building over enterprise victory.
      </p>

      <h3 style={h3Style}>3. Identity Erosion & The Attrition of the Brilliant</h3>
      <p style={bodyStyle}>
        The highest-performing talent in any company does not leave for a 15% salary bump elsewhere.
        They leave when the friction of doing exceptional work inside the institution exceeds the
        satisfaction of the mission. When an executive or creative lead spends 70% of their mental
        bandwidth fighting internal structural resistance rather than solving client problems, their
        identity begins to erode. They realize that staying requires becoming cynical — and true
        high performers would rather leave than allow institutional mediocrity to compromise their
        standards.
      </p>

      {/* ── Framework Callout Box ──────────────────────── */}
      <div style={calloutStyle}>
        <div style={calloutLabelStyle}>Organizational Architecture · Division III</div>
        <div style={calloutHeadStyle}>The Enterprise Alignment Matrix: Three Load-Bearing Pillars</div>
        <p style={calloutBodyStyle}>
          At Mindvest Global, we treat organizational restructuring not as management theory, but as
          structural engineering for human systems. Sustainable institutional scale requires aligning
          three interconnected dimensions:
        </p>
        <div style={calloutDivider} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20 }}>
          <div>
            <div style={{ fontFamily: "var(--font-dm-mono)", fontSize: 11, color: "var(--gold)", letterSpacing: "1px", textTransform: "uppercase", marginBottom: 6 }}>
              Pillar 01 · Structural Governance
            </div>
            <div style={{ fontSize: 13, color: "rgba(247,243,236,0.7)", lineHeight: 1.6 }}>
              Deconstructing decision hierarchies. We map the friction points where capital, authority,
              and accountability flow, engineering clear decision boundaries that eliminate operational
              latency.
            </div>
          </div>
          <div>
            <div style={{ fontFamily: "var(--font-dm-mono)", fontSize: 11, color: "var(--gold)", letterSpacing: "1px", textTransform: "uppercase", marginBottom: 6 }}>
              Pillar 02 · Human Capital Resonance
            </div>
            <div style={{ fontSize: 13, color: "rgba(247,243,236,0.7)", lineHeight: 1.6 }}>
              Aligning personal identity with enterprise mandate. Building leadership competency models
              and psychological safety frameworks that allow high-caliber individuals to thrive without
              burnout.
            </div>
          </div>
          <div>
            <div style={{ fontFamily: "var(--font-dm-mono)", fontSize: 11, color: "var(--gold)", letterSpacing: "1px", textTransform: "uppercase", marginBottom: 6 }}>
              Pillar 03 · Institutional Resilience
            </div>
            <div style={{ fontSize: 13, color: "rgba(247,243,236,0.7)", lineHeight: 1.6 }}>
              Designing succession blueprints, knowledge retention frameworks, and self-healing culture
              mechanisms that withstand CEO transitions and macroeconomic volatility.
            </div>
          </div>
        </div>
      </div>

      {/* ── Section III ────────────────────────────────── */}
      <h2 style={h2Style}>
        How to Re-engineer the Architecture: The 4-Stage Institutional Audit
      </h2>

      <p style={bodyStyle}>
        If you are leading an enterprise, a financial institution, or a high-growth scale-up sensing
        the tremors of structural fatigue, do not schedule another motivational town hall. Begin with a
        forensic audit of your human architecture:
      </p>

      <ol style={olStyle}>
        <li style={liStyle}>
          <strong>Conduct a Decision Flow Audit:</strong> Select five mission-critical decisions made in
          your enterprise over the last six months. Map every handoff, every signature, and every day of
          waiting from inception to execution. Identify where time was consumed by genuine deliberation
          versus bureaucratic insulation.
        </li>
        <li style={liStyle}>
          <strong>Audit the Unspoken Incentive System:</strong> Look past your written bonus handbook.
          What behaviors are actually rewarded inside your organization? Is risk-taking punished while
          quiet conformity is promoted? Does the system protect comfortable mediocrity while exhausting
          unreasonable excellence? Fix the incentive geometry before expecting cultural transformation.
        </li>
        <li style={liStyle}>
          <strong>Dismantle the Monologue:</strong> Boardrooms frequently operate in an echo chamber of
          flattering reports. Create structured, anonymized architectural inquiry channels where senior
          engineers, frontline managers, and mid-level operators can declare what is broken without fear
          of career retaliation.
        </li>
        <li style={liStyle}>
          <strong>Institutionalize Cadence Over Heroics:</strong> Great companies are not sustained by
          exhausted heroes working seventy-hour weeks to compensate for broken processes. They are
          sustained by elegant, repeatable operational rhythms that produce predictable brilliance with
          calm authority.
        </li>
      </ol>

      {/* ── Section IV ────────────────────────────────── */}
      <h2 style={h2Style}>
        The Monumental Vision: Building Institutions That Outlive Their Founders
      </h2>

      <p style={bodyStyle}>
        Across the African continent and emerging markets globally, we stand at a generational
        inflection point. We have produced extraordinary entrepreneurs, visionary founders, and heroic
        operators. But the challenge of the next fifty years is not merely the creation of individual
        enterprises; it is the construction of enduring institutions.
      </p>

      <p style={bodyStyle}>
        An institution is not defined by its revenue in a boom cycle. An institution is defined by its
        ability to reproduce excellence, retain its soul across decades, and execute its monumental vision
        long after its founding architects have stepped aside.
      </p>

      <p style={bodyStyle}>
        That caliber of longevity cannot be wished into existence. It must be blueprinted. It must be
        engineered. It must be architected.
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
            Institutional Advisory & Enterprise Partnerships
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
            Re-engineer the Architecture of Your Organization
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
            Mindvest Global partners with visionary chairmen, chief executives, and corporate boards
            to audit, restructure, and rebuild the human systems of enterprise. Explore our 6–12 month
            Transformation Retainers, Boardroom Strategy Facilitation, and Corporate Leadership Frameworks.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
            <Link
              href="/divisions/institutional-design"
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
                fontWeight: 600,
                transition: "all 0.2s",
              }}
              id="cta-explore-division-3"
            >
              Explore Division III: Organizational Architecture →
            </Link>
            <a
              href="https://calendly.com/mindvestglobalresources/30min"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "14px 24px",
                border: "1px solid var(--indigo)",
                color: "var(--indigo)",
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: 11,
                letterSpacing: "2px",
                textTransform: "uppercase",
                textDecoration: "none",
                borderRadius: 2,
                transition: "all 0.2s",
              }}
              id="cta-book-executive-call"
            >
              Book Executive Consultation ↗
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

// ─── Inline styles ─────────────────────────────────────────────────────────

const articleStyle: React.CSSProperties = {
  maxWidth: 720,
  margin: "0 auto",
  fontFamily: "var(--font-outfit), sans-serif",
  color: "var(--text)",
};

const leadStyle: React.CSSProperties = {
  fontFamily: "var(--font-cormorant), serif",
  fontSize: "clamp(22px, 2.2vw, 27px)",
  fontWeight: 400,
  lineHeight: 1.6,
  color: "var(--indigo-deep)",
  marginBottom: 28,
  letterSpacing: "-0.2px",
};

const bodyStyle: React.CSSProperties = {
  fontSize: 16.5,
  lineHeight: 1.85,
  color: "var(--text)",
  marginBottom: 24,
  fontWeight: 300,
};

const h2Style: React.CSSProperties = {
  fontFamily: "var(--font-cormorant), serif",
  fontSize: "clamp(28px, 2.8vw, 38px)",
  fontWeight: 400,
  lineHeight: 1.25,
  color: "var(--indigo)",
  marginTop: 56,
  marginBottom: 20,
  letterSpacing: "-0.3px",
};

const h3Style: React.CSSProperties = {
  fontFamily: "var(--font-cormorant), serif",
  fontSize: 22,
  fontWeight: 500,
  lineHeight: 1.35,
  color: "var(--indigo-deep)",
  marginTop: 32,
  marginBottom: 12,
};

const quoteStyle: React.CSSProperties = {
  margin: "44px 0",
  padding: "8px 0 8px 28px",
  position: "relative",
};

const quoteBar: React.CSSProperties = {
  position: "absolute",
  left: 0,
  top: 0,
  bottom: 0,
  width: 2,
  background: "linear-gradient(to bottom, var(--gold) 0%, transparent 100%)",
};

const quoteTextStyle: React.CSSProperties = {
  fontFamily: "var(--font-cormorant), serif",
  fontSize: 23,
  lineHeight: 1.55,
  fontStyle: "italic",
  color: "var(--indigo-deep)",
  margin: "0 0 12px",
  fontWeight: 400,
};

const quoteAuthorStyle: React.CSSProperties = {
  fontFamily: "var(--font-dm-mono), monospace",
  fontSize: 10,
  letterSpacing: "2px",
  textTransform: "uppercase",
  color: "var(--gold-muted)",
  fontStyle: "normal",
};

const calloutStyle: React.CSSProperties = {
  background: "linear-gradient(135deg, var(--indigo-deep) 0%, var(--indigo-mid) 100%)",
  border: "1px solid rgba(201,168,76,0.2)",
  borderRadius: 2,
  padding: "36px 40px",
  margin: "44px 0",
};

const calloutLabelStyle: React.CSSProperties = {
  fontFamily: "var(--font-dm-mono), monospace",
  fontSize: 9,
  letterSpacing: "3px",
  textTransform: "uppercase",
  color: "var(--gold)",
  marginBottom: 12,
};

const calloutHeadStyle: React.CSSProperties = {
  fontFamily: "var(--font-cormorant), serif",
  fontSize: 28,
  fontWeight: 600,
  color: "var(--cream)",
  margin: "0 0 16px",
};

const calloutBodyStyle: React.CSSProperties = {
  fontSize: 14,
  color: "rgba(247,243,236,0.7)",
  lineHeight: 1.8,
  margin: 0,
};

const calloutDivider: React.CSSProperties = {
  height: 1,
  background: "rgba(201,168,76,0.15)",
  margin: "24px 0",
};

const ulStyle: React.CSSProperties = {
  paddingLeft: 24,
  margin: "24px 0",
};

const olStyle: React.CSSProperties = {
  paddingLeft: 24,
  margin: "28px 0",
};

const liStyle: React.CSSProperties = {
  fontSize: 16,
  lineHeight: 1.85,
  color: "var(--text)",
  marginBottom: 16,
  fontWeight: 300,
};

const closingStyle: React.CSSProperties = {
  marginTop: 56,
  paddingTop: 40,
  borderTop: "1px solid var(--cream-dark)",
};
