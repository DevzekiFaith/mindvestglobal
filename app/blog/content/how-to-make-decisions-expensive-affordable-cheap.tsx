// Blog post article content
// "The Architecture of Decision-Making: Cheap, Affordable, and Expensive"
// The Becoming Institute · Decision & Systems Architecture · Origin Series
// By Zeki Ubor · Mindvest Global · Lagos & Global Strategic Hubs

import Link from "next/link";

export function DecisionArchitectureContent() {
  return (
    <article style={articleStyle}>
      {/* ── Scoped responsive styles ─────────────── */}
      <style>{`
        .da-header-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 28px;
          padding-bottom: 14px;
          border-bottom: 1px solid rgba(201,168,76,0.18);
        }
        .da-story-box {
          background: #FAF8F5;
          border: 1px solid rgba(201,168,76,0.3);
          border-left: 4px solid var(--gold, #D4AF37);
          border-radius: 0 6px 6px 0;
          padding: 28px 26px !important;
          margin: 36px 0;
          box-shadow: 0 4px 20px rgba(0,0,0,0.04);
        }
        .da-story-title {
          font-family: var(--font-cormorant), serif;
          font-size: 22px;
          font-weight: 600;
          color: var(--indigo, #16133B);
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .da-briefing-box {
          background: linear-gradient(135deg, #0B0B1A 0%, #16133B 100%);
          padding: 28px 24px !important;
          border-radius: 4px;
          margin: 36px 0;
          color: #F7F3EC;
          border: 1px solid rgba(201,168,76,0.25);
          box-shadow: 0 10px 30px rgba(0,0,0,0.12);
        }
        .da-quote-block {
          margin: 36px 0;
          padding: 26px 28px !important;
          border-left: 3px solid var(--gold, #D4AF37);
          background: rgba(201,168,76,0.06);
          border-radius: 0 4px 4px 0;
        }
        .da-quote-text {
          font-family: var(--font-cormorant), serif;
          font-size: 24px;
          font-style: italic;
          color: var(--indigo, #16133B);
          line-height: 1.45;
          margin: 0 0 12px;
        }
        .da-triad-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          margin: 34px 0 38px;
        }
        .da-triad-card {
          background: #FAF8F5;
          border: 1px solid rgba(201,168,76,0.22);
          border-radius: 4px;
          padding: 24px 20px !important;
          display: flex;
          flex-direction: column;
          gap: 8px;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .da-triad-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(22,19,59,0.08);
          border-color: #D4AF37;
        }
        .da-triad-card.highlight {
          background: #16133B;
          color: #F7F3EC;
          border-color: #10B981;
          box-shadow: 0 10px 30px rgba(16,185,129,0.15);
        }
        .da-case-study {
          background: #FFFFFF;
          border: 1px solid rgba(0,0,0,0.08);
          border-radius: 6px;
          padding: 28px 24px !important;
          margin: 32px 0;
          box-shadow: 0 4px 16px rgba(0,0,0,0.04);
        }
        .da-comparison-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin: 28px 0;
        }
        .da-comparison-col {
          border: 1px solid rgba(0,0,0,0.08);
          border-radius: 4px;
          padding: 22px 18px;
          background: #FFFFFF;
        }
        .da-comparison-col.cheap-col {
          border-top: 4px solid #E11D48;
        }
        .da-comparison-col.affordable-col {
          border-top: 4px solid #D4AF37;
        }
        .da-comparison-col.expensive-col {
          border-top: 4px solid #10B981;
          background: #FAF8F5;
        }
        .da-matrix-table-wrap {
          overflow-x: auto;
          margin: 32px 0;
          border: 1px solid rgba(0,0,0,0.08);
          border-radius: 6px;
          background: #FFFFFF;
        }
        .da-matrix-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
          font-size: 14.5px;
          min-width: 600px;
        }
        .da-matrix-table th {
          background: #16133B;
          color: #FDFAF5;
          font-family: var(--font-dm-mono), monospace;
          font-size: 11px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 14px 18px;
          font-weight: 600;
        }
        .da-matrix-table td {
          padding: 14px 18px;
          border-bottom: 1px solid rgba(0,0,0,0.06);
          color: #3B332A;
          line-height: 1.6;
        }
        .da-matrix-table tr:last-child td {
          border-bottom: none;
        }
        .da-build-grid {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin: 28px 0;
        }
        .da-build-item {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          padding: 20px 22px !important;
          background: #FAF8F5;
          border: 1px solid rgba(201,168,76,0.2);
          border-radius: 4px;
        }
        .da-reflection-section {
          background: #16133B;
          color: #F7F3EC;
          padding: 38px 30px !important;
          border-radius: 6px;
          margin: 48px 0 40px;
          border: 1px solid rgba(201,168,76,0.3);
          box-shadow: 0 12px 36px rgba(0,0,0,0.2);
        }
        .da-cta-masterclass {
          background: linear-gradient(135deg, #070614 0%, #16133B 55%, #0B2920 100%);
          border: 1px solid rgba(16,185,129,0.4);
          box-shadow: 0 20px 56px rgba(0,0,0,0.4);
          padding: 44px 38px !important;
          border-radius: 8px;
          margin: 48px 0 20px;
          color: #F7F3EC;
          position: relative;
          overflow: hidden;
        }
        .da-cta-masterclass::before {
          content: "";
          position: absolute;
          top: -120px;
          right: -120px;
          width: 360px;
          height: 360px;
          background: radial-gradient(circle, rgba(16,185,129,0.2) 0%, transparent 70%);
          pointer-events: none;
        }
        .da-cta-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 18px 40px;
          background: #10B981;
          color: #FDFAF5;
          font-family: var(--font-dm-mono), monospace;
          font-size: 11.5px;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-weight: 700;
          text-decoration: none;
          border-radius: 3px;
          box-shadow: 0 6px 24px rgba(16,185,129,0.35);
          transition: all 0.3s ease;
          border: 1px solid rgba(16,185,129,0.6);
        }
        .da-cta-btn-primary:hover {
          background: #059669;
          transform: translateY(-2px);
          box-shadow: 0 10px 32px rgba(16,185,129,0.5);
        }
        .da-cta-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 18px 32px;
          background: transparent;
          color: #D4AF37;
          font-family: var(--font-dm-mono), monospace;
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-weight: 600;
          text-decoration: none;
          border-radius: 3px;
          border: 1px solid rgba(212,175,55,0.4);
          transition: all 0.3s ease;
        }
        .da-cta-btn-secondary:hover {
          background: rgba(212,175,55,0.08);
          border-color: #D4AF37;
          color: #F7F3EC;
        }

        @media (max-width: 860px) {
          .da-triad-grid,
          .da-comparison-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          .da-cta-masterclass {
            padding: 30px 20px !important;
          }
          .da-cta-btn-row {
            flex-direction: column !important;
            align-items: stretch !important;
          }
          .da-cta-btn-primary,
          .da-cta-btn-secondary {
            justify-content: center !important;
            text-align: center !important;
            width: 100% !important;
            box-sizing: border-box !important;
          }
          .da-build-item {
            flex-direction: column !important;
            gap: 12px !important;
          }
          .da-story-box {
            padding: 20px 18px !important;
          }
        }
      `}</style>

      {/* ── Transit & Dispatch Header ─────────────── */}
      <div className="da-header-meta">
        <div style={headerTagStyle}>
          <span style={dotStyle} />
          <span>Strategic Dispatch · Decision &amp; Systems Architecture · The Becoming Institute</span>
        </div>
        <div style={geoTagStyle}>
          <span>Lagos, Nigeria · Global Distribution · Executive Thought Leadership</span>
        </div>
      </div>

      {/* ── Lead Paragraph ────────────────────────────── */}
      <p style={leadStyle}>
        When faced with high-stakes situational direction in enterprise or personal destiny, most leaders believe they are 
        simply choosing between paths, products, or prices. They are not. They are choosing between three distinct energetic 
        and architectural realities: <strong>Cheap, Affordable, and Expensive.</strong>
      </p>

      <p style={bodyStyle}>
        How you interpret and navigate these three terms in the heat of a decision dictates whether your enterprise compounds into 
        sovereign authority, or quietly drowns under the invisible weight of accumulated compromise.
      </p>

      {/* ── Narrative Vignette 1: The Master Builder ──── */}
      <div className="da-story-box">
        <div className="da-story-title">
          <span>◆ The Site Engineer’s Lesson: “Concrete Never Forgets”</span>
        </div>
        <p style={{ fontSize: 15.5, color: "#3B332A", lineHeight: 1.8, margin: "0 0 14px" }}>
          Early in my architectural career, I stood on a sodden construction site in Lagos on a drizzly Tuesday morning. 
          A young site engineer was in a heated argument with the sixty-year-old master builder overseeing the foundation pour. 
          The project was running slightly over budget, and the young engineer had found an alternative supplier offering a cheap, 
          locally dredged river sand mix that would shave 18% off the cost of the ground beams.
        </p>
        <p style={{ fontSize: 15.5, color: "#3B332A", lineHeight: 1.8, margin: "0 0 14px" }}>
          <em>“It looks the same once the cement mixes in,”</em> the young engineer pleaded. <em>“No one will ever know. The client saves money today, and our margins stay clean.”</em>
        </p>
        <p style={{ fontSize: 15.5, color: "#3B332A", lineHeight: 1.8, margin: 0 }}>
          The old master builder did not shout. He reached down into the mud, lifted a handful of the cheap silt mix, 
          and let the watery slurry slip through his fingers. Then he placed a firm hand on the young man’s shoulder and said something 
          I have carried into every boardroom and consulting room since:
          <br /><br />
          <strong style={{ color: "var(--indigo, #16133B)" }}>
            “Son, concrete never forgets. The cost savings will be praised on an Excel sheet and filed away in three months. 
            But the earth under this building will remember this compromise for fifty years. If you put cheap sand in the dark, 
            the building will scream in the light.”
          </strong>
        </p>
      </div>

      <p style={bodyStyle}>
        That moment was my initiation into the physics of human and enterprise architecture. 
        What is true of steel, aggregate, and reinforced concrete is doubly true of human decisions, executive leadership, 
        technology stacks, and brand reputation.
      </p>

      {/* ── Visual Triad Overview ────────────────────────── */}
      <div className="da-triad-grid">
        <div className="da-triad-card">
          <div style={triadNumStyle}>01</div>
          <div style={triadLabelStyle}>The Deceptive Trap</div>
          <div style={triadTitleStyle}>Cheap</div>
          <p style={triadDescStyle}>
            Demands minimal cash upfront, but extracts catastrophic downstream interest: reputational erosion, employee turnover, 
            technical debt, and endless rework. Cheap is the most expensive path you can ever take.
          </p>
        </div>

        <div className="da-triad-card">
          <div style={triadNumStyle}>02</div>
          <div style={triadLabelStyle}>The Operational Anchor</div>
          <div style={triadTitleStyle}>Affordable</div>
          <p style={triadDescStyle}>
            Calibrated strictly to your present perimeter and monthly cash flow. It maintains current equilibrium, but when mistaken 
            for strategic ambition, it permanently locks you into linear survival.
          </p>
        </div>

        <div className="da-triad-card highlight">
          <div style={{ ...triadNumStyle, color: "#10B981" }}>03</div>
          <div style={{ ...triadLabelStyle, color: "#10B981" }}>The Sovereign Multiplier</div>
          <div style={{ ...triadTitleStyle, color: "#FDFAF5" }}>Expensive</div>
          <p style={{ ...triadDescStyle, color: "rgba(247,243,236,0.85)" }}>
            Demands upfront psychological courage and bold capital commitment, but permanently eliminates operational chaos, 
            establishes pricing authority, and buys back decades of time.
          </p>
        </div>
      </div>

      {/* ── Executive Briefing Box (AI & Speakable) ──────── */}
      <aside id="key-takeaways" className="da-briefing-box">
        <div style={briefingLabelStyle}>
          <span>⚡ Executive Briefing · The Triad of Decision Architecture</span>
        </div>
        <div style={briefingDividerStyle} />
        <ul style={briefingListStyle}>
          <li style={briefingItemStyle}>
            <strong>Price vs. Total Lifetime Cost:</strong> Price is simply the fiat currency that changes hands at the transaction desk. 
            Cost is the sum total of emotional stress, lost momentum, cognitive friction, and compromised brand equity endured over the decision’s entire lifecycle.
          </li>
          <li style={briefingItemStyle}>
            <strong>The Compounding Irony of Cheap:</strong> Choosing "cheap" in software, talent, advisory, or personal wellness creates 
            unseen architectural debt that inevitably demands liquidation at 10x the original cost.
          </li>
          <li style={briefingItemStyle}>
            <strong>The Discipline of Affordable:</strong> "Affordable" is vital for baseline cash-flow preservation, but toxic if made the ceiling 
            for transformation. It solves for <em>can I pay for this today?</em> rather than <em>what does this multiply tomorrow?</em>
          </li>
          <li style={briefingItemStyle}>
            <strong>The Asymmetric Yield of Expensive:</strong> High-yield architectural decisions are expensive upfront because they bundle speed, 
            unquestioned certainty, sovereign positioning, and structural permanence into a single stroke.
          </li>
        </ul>
      </aside>

      {/* ── Section I: What is Situational Direction? ───── */}
      <section id="what-is-situational-direction">
        <h2 style={h2Style}>1. What is "Situational Direction"?</h2>
        <p style={bodyStyle}>
          In classical architecture, every load-bearing column transfers weight downward through a calculated vector. 
          If the column deviates by just one degree from true vertical, that deviation creates an eccentric load. At ten feet high, 
          the deviation is negligible. At one hundred feet, the eccentric load creates shear forces powerful enough to tear the building in half.
        </p>
        <p style={bodyStyle}>
          This is what we define as <strong>Situational Direction</strong>.
        </p>
        <p style={bodyStyle}>
          Situational Direction is the irreversible trajectory set in motion the instant you commit resources to a choice. 
          When a founder chooses a co-founder, when a CEO signs off on an ERP platform, when a professional decides whether to spend 
          their evening scrolling or attending an intensive immersion, they are not just taking an action—they are tilting the column of their future.
        </p>

        <div className="da-quote-block">
          <p className="da-quote-text">
            “You do not make decisions in a vacuum; decisions make the rooms in which you will be forced to live. 
            Choose cheaply in the blueprint, and you will spend the rest of your life paying rent to your own regret.”
          </p>
          <div style={quoteAuthorStyle}>— Zeki Ubor, Principal &amp; Systems Architect</div>
        </div>
      </section>

      {/* ── Section II: Tale of Two Founders (Detailed Narrative) ─ */}
      <section id="the-tale-of-two-founders">
        <h2 style={h2Style}>2. The Tale of Two Founders: David and Kolawole</h2>
        <p style={bodyStyle}>
          To understand how Situational Direction plays out in the real world of commercial enterprise, let us examine two founders 
          I advised who launched supply-chain logistics platforms in Lagos during the exact same macroeconomic cycle. Both had access to 
          approximately $100,000 in initial capitalization.
        </p>

        <div className="da-case-study">
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#E11D48", display: "inline-block" }} />
            <h3 style={{ fontFamily: "var(--font-cormorant)", fontSize: 22, color: "#16133B", margin: 0 }}>
              David’s Playbook: The Tyranny of the Cheap Bargain
            </h3>
          </div>
          <p style={{ fontSize: 15.5, color: "#3B332A", lineHeight: 1.8 }}>
            David fancied himself a master negotiator and a "lean hacker." When setting up his core technology and warehouse operations, 
            he looked at top-tier senior logistics directors who demanded $3,500 per month and recoiled. Instead, he hired three junior 
            freelancers at $600 per month. He purchased a cracked template software system for $80, chose the cheapest unvetted third-party 
            trucking fleet, and retained a cheap generalist accountant rather than an institutional tax strategist.
          </p>
          <p style={{ fontSize: 15.5, color: "#3B332A", lineHeight: 1.8 }}>
            On paper, David looked like a genius in Month 3. His burn rate was less than half of what the market anticipated. 
            He boasted about how much money he had saved.
          </p>
          <p style={{ fontSize: 15.5, color: "#3B332A", lineHeight: 1.8 }}>
            <strong>Then the structural rot arrived in Month 8.</strong>
          </p>
          <p style={{ fontSize: 15.5, color: "#3B332A", lineHeight: 1.8 }}>
            During their highest-volume holiday surge, the cheap trucking fleet suffered three catastrophic breakdowns with no backup protocol. 
            $140,000 worth of perishable FMCG goods spoiled on the highway. Because David’s cheap accountant had skipped proper marine and transit 
            insurance to save $400 a month, the loss fell entirely on David’s balance sheet. Worse, the junior developers’ unvetted codebase crashed 
            under the traffic spike, losing real-time tracking for forty enterprise clients.
          </p>
          <p style={{ fontSize: 15.5, color: "#3B332A", lineHeight: 1.8 }}>
            David spent the next year working 18-hour days firefighting angry lawsuits, apologizing to furious corporate brands, 
            and borrowing predatory bridge loans. In Year Two, he had to scrap his entire software stack and spend $110,000 hiring an elite 
            firm to rebuild from zero. His health collapsed; his marriage was severely strained; his brand in the market was permanently branded "unreliable."
          </p>
          <div style={{ padding: "12px 16px", background: "rgba(225,29,72,0.06)", borderLeft: "3px solid #E11D48", fontSize: 14, color: "#9F1239", fontWeight: 600 }}>
            David thought he was saving money. In reality, he bought corporate catastrophe on an installment plan.
          </div>
        </div>

        <div className="da-case-study" style={{ borderTop: "4px solid #10B981" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#10B981", display: "inline-block" }} />
            <h3 style={{ fontFamily: "var(--font-cormorant)", fontSize: 22, color: "#16133B", margin: 0 }}>
              Kolawole’s Playbook: The Multiplier of the Expensive Anchor
            </h3>
          </div>
          <p style={{ fontSize: 15.5, color: "#3B332A", lineHeight: 1.8 }}>
            Kolawole started with the exact same initial capital. But Kolawole understood architectural physics. 
            Before writing a single line of customer software, he committed nearly 45% of his early budget to hire a battle-tested 
            Operations Director who had spent twelve years scaling DHL and Maersk operations across West Africa.
          </p>
          <p style={{ fontSize: 15.5, color: "#3B332A", lineHeight: 1.8 }}>
            It felt terrifyingly expensive. It kept Kolawole awake at night wondering if his small company was overreaching. 
            He also invested in enterprise-grade cloud architecture and engaged an elite corporate law firm to draft iron-clad Service Level Agreements.
          </p>
          <p style={{ fontSize: 15.5, color: "#3B332A", lineHeight: 1.8 }}>
            <strong>What happened in Month 8?</strong>
          </p>
          <p style={{ fontSize: 15.5, color: "#3B332A", lineHeight: 1.8 }}>
            When the same holiday supply crunch hit, Kolawole’s Operations Director had already negotiated secondary fleet redundancy 
            and pre-cleared corridor protocols. While competitors stalled, Kolawole’s platform delivered 99.4% on-time fulfillment. 
            Two multinational pharmaceutical conglomerates noticed. Within 90 days, they transferred their entire regional distribution 
            contracts to Kolawole because they knew his infrastructure was unfailing.
          </p>
          <p style={{ fontSize: 15.5, color: "#3B332A", lineHeight: 1.8 }}>
            Because Kolawole was not trapped in warehouse basements fixing software bugs or pacifying lawyers, his mind was clear. 
            He had the emotional and strategic bandwidth to architect an institutional Series A round at an $18 Million valuation. 
            His clients gladly paid a 30% price premium over David’s rates because certainty is priceless in business.
          </p>
          <div style={{ padding: "12px 16px", background: "rgba(16,185,129,0.08)", borderLeft: "3px solid #10B981", fontSize: 14, color: "#065F46", fontWeight: 700 }}>
            Kolawole’s "expensive" decision was the cheapest thing he ever did. It bought him speed, market dominance, and profound mental peace.
          </div>
        </div>
      </section>

      {/* ── Section III: Personal Decisions Narrative ──── */}
      <section id="personal-decisions-the-2am-executive">
        <h2 style={h2Style}>3. Personal Decisions: The 2:00 AM Executive Dilemma</h2>
        <p style={bodyStyle}>
          This dynamic is not restricted to balance sheets and commercial contracts. It operates with terrifying precision in 
          your personal identity, health, relationships, and cognitive development.
        </p>

        <p style={bodyStyle}>
          Consider a senior executive I met recently in London. He earns hundreds of thousands of pounds annually. 
          He drives a pristine German luxury automobile, wears tailored Italian wool suits, and lives in a coveted residential enclave. 
          Yet, sitting across from me at dinner, his hands were trembling with exhaustion, his eyes were bloodshot, and his vitality was completely depleted.
        </p>

        <p style={bodyStyle}>
          For six years, he had been trapped in what he called "executive burnout." When I asked him why he had never invested in an intensive 
          identity recalibration, a personal health architect, or private advisory to restructure his life operating systems, he gave me a telling answer:
        </p>

        <p style={{ ...leadStyle, fontSize: 20, color: "#555", fontStyle: "italic", borderLeft: "3px solid var(--gold)", paddingLeft: 18 }}>
          “Zeki, those executive transformation programs and private immersions cost $15,000 to $25,000. That just feels too expensive right now.”
        </p>

        <p style={bodyStyle}>
          Look at the tragic mathematics of that statement.
        </p>
        <p style={bodyStyle}>
          This man readily spent $15,000 a year on alcohol, fine dinners, high-end gadgets, and lavish weekend escapes—cheap emotional 
          band-aids designed to numb the agony of an unexamined life. He was willing to pay a fortune for the <em>symptoms</em> of his exhaustion, 
          yet deemed the cure "too expensive."
        </p>
        <p style={bodyStyle}>
          Two months after our conversation, he suffered an acute cardiovascular crisis. The hospital bills, the forced leave of absence, 
          and the missed promotion cost him over £180,000 in immediate financial damage, not to mention the terror visited upon his family.
        </p>
        <p style={bodyStyle}>
          <strong>Cheap is always a loan shark. It offers you a small handout today and returns tomorrow to take your health, your peace, and your future.</strong>
        </p>
      </section>

      {/* ── Section IV: Deep Comparative Table Matrix ──── */}
      <section id="the-comparative-matrix">
        <h2 style={h2Style}>4. The Enterprise and Personal Decision Matrix</h2>
        <p style={bodyStyle}>
          To make this framework directly actionable for your board, your executive team, and your personal life, 
          let us cross-examine the three dimensions across core operational domains:
        </p>

        <div className="da-matrix-table-wrap">
          <table className="da-matrix-table">
            <thead>
              <tr>
                <th>Domain</th>
                <th>Cheap (The Trap)</th>
                <th>Affordable (The Basecamp)</th>
                <th>Expensive (The Multiplier)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Enterprise Talent</strong></td>
                <td>Discount freelancers who require constant supervision; high turnover; missed deadlines.</td>
                <td>Competent salaried staff who execute standard SOPs within current revenue perimeters.</td>
                <td>Sovereign leaders who own outcomes, invent solutions, and create 10x value autonomously.</td>
              </tr>
              <tr>
                <td><strong>Technology &amp; Systems</strong></td>
                <td>Hacked plugins, free tiers, duct-taped spreadsheets with zero security or scalability.</td>
                <td>Standard commercial SaaS that handles current volume reliably without custom leverage.</td>
                <td>Institutional architecture, proprietary workflows, and automated engines that compound.</td>
              </tr>
              <tr>
                <td><strong>Strategic Advisory</strong></td>
                <td>Free social media tips, fragmented YouTube videos, opinions from unqualified peers.</td>
                <td>General business books, industry trade journals, standard networking events.</td>
                <td>High-impact private advisory and masterclasses with proven architects who see blind spots.</td>
              </tr>
              <tr>
                <td><strong>Personal Identity</strong></td>
                <td>Consuming cheap dopamine, imitating influencers, seeking superficial applause.</td>
                <td>Routine self-help books, conventional career progression, staying within social norms.</td>
                <td>Deep identity reconstruction, spiritual grounding, and unrelenting personal standard.</td>
              </tr>
              <tr>
                <td><strong>Client Selection</strong></td>
                <td>Taking demanding, price-sensitive clients who drain morale and delay payments.</td>
                <td>Standard mid-tier accounts that pay market rates and keep cash flow predictable.</td>
                <td>Sovereign Tier-1 partnerships who respect your authority and pay substantial premiums.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Section V: The B-U-I-L-D Decision Framework ──── */}
      <section id="the-build-decision-framework">
        <h2 style={h2Style}>5. The B-U-I-L-D Decision Engineering Filter</h2>
        <p style={bodyStyle}>
          How do you apply this in practice when facing a crossroads? At The Becoming Institute, we teach the 
          <strong> B-U-I-L-D Decision Filter</strong> to help leaders eliminate cognitive bias and choose with architectural clarity:
        </p>

        <div className="da-build-grid">
          <div className="da-build-item">
            <div style={buildBadgeStyle}>B</div>
            <div>
              <span style={buildWordStyle}>Baseline the Real Lifetime Cost</span>
              <p style={buildDescStyle}>
                Never judge a proposal by its sticker price. Calculate the 36-month cost of maintenance, management overhead, 
                team frustration, and failure probability. An option that costs $5,000 today but wastes 20 hours a month of executive time 
                costs over $70,000 in reality.
              </p>
            </div>
          </div>

          <div className="da-build-item">
            <div style={buildBadgeStyle}>U</div>
            <div>
              <span style={buildWordStyle}>Unmask the Directional Current</span>
              <p style={buildDescStyle}>
                Every decision moves you toward sovereign expansion or toward operational fatigue. Ask: <em>If our entire enterprise 
                was built on this standard of decision-making, would we be an industry leader or a fragile survivor?</em>
              </p>
            </div>
          </div>

          <div className="da-build-item">
            <div style={buildBadgeStyle}>I</div>
            <div>
              <span style={buildWordStyle}>Identify the Leverage Ratio</span>
              <p style={buildDescStyle}>
                Will this choice multiply our capacity, or merely add linear weight? If an expensive tool, hire, or immersion frees up 
                50% of your cognitive bandwidth to architect high-ticket deals, its return is mathematically infinite.
              </p>
            </div>
          </div>

          <div className="da-build-item">
            <div style={buildBadgeStyle}>L</div>
            <div>
              <span style={buildWordStyle}>Layer the Commitment with Relentless Excellence</span>
              <p style={buildDescStyle}>
                Do not make an expensive investment and then starve it with cheap execution. If you hire world-class talent, give them 
                sovereign authority. If you enroll in a masterclass, do the exercises completely without distraction.
              </p>
            </div>
          </div>

          <div className="da-build-item">
            <div style={buildBadgeStyle}>D</div>
            <div>
              <span style={buildWordStyle}>Deploy from Future Sovereignty</span>
              <p style={buildDescStyle}>
                Never decide from the anxiety of where you were yesterday; decide as the entity you are determined to become. 
                Paupers make decisions based on what they can afford to lose; architects make decisions based on what they are called to build.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Executive Reflection Box ──────────────────────── */}
      <section className="da-reflection-section">
        <div style={{ fontFamily: "var(--font-dm-mono)", fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: "var(--gold)", marginBottom: 12 }}>
          Boardroom &amp; Personal Audit
        </div>
        <h3 style={{ fontFamily: "var(--font-cormorant)", fontSize: 26, color: "#FDFAF5", margin: "0 0 16px" }}>
          Four Questions to Audit Before Your Next Major Commitment
        </h3>
        <p style={{ fontSize: 15, color: "rgba(247,243,236,0.8)", lineHeight: 1.7, marginBottom: 20 }}>
          Before you sign the next proposal, hire the next executive, or choose where to invest your capital this quarter, 
          confront these diagnostic realities:
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 16 }}>
          {[
            "Where in our company or personal life are we currently paying a heavy 'cheap tax' because of a low-cost compromise made months ago?",
            "Are our executive choices being governed by immediate cash anxiety (scarcity) or future structural capacity (multiplication)?",
            "What is the single 'expensive' strategic decision we have been postponing that could permanently solve our greatest operational bottleneck?",
            "If we evaluated our current options through the lens of peace of mind, long-term dignity, and market authority, what would we decide today?",
          ].map((q, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 14, fontSize: 15, color: "rgba(247,243,236,0.9)", lineHeight: 1.6 }}>
              <span style={{ color: "var(--gold)", fontWeight: 700, fontFamily: "var(--font-dm-mono)", fontSize: 13 }}>0{i + 1}.</span>
              <span>{q}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Primary Call to Action: November Masterclass ──── */}
      <section className="da-cta-masterclass" id="success-multiplier-masterclass">
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", background: "rgba(16,185,129,0.15)", border: "1px solid rgba(16,185,129,0.4)", borderRadius: 20, marginBottom: 18 }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#10B981", display: "inline-block", boxShadow: "0 0 10px #10B981" }} />
          <span style={{ fontFamily: "var(--font-dm-mono)", fontSize: 10, letterSpacing: 2, color: "#10B981", textTransform: "uppercase", fontWeight: 700 }}>
            Origin Flagship Event · November 14, 2026
          </span>
        </div>

        <h3 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(28px, 4.2vw, 44px)", fontWeight: 300, color: "#FDFAF5", lineHeight: 1.15, margin: "0 0 16px" }}>
          Step Into Asymmetric Multiplication:<br />
          <em style={{ fontStyle: "italic", color: "#10B981" }}>The Success Multiplier Program</em>
        </h3>

        <p style={{ fontSize: 16, color: "rgba(247,243,236,0.85)", lineHeight: 1.85, maxWidth: 700, margin: "0 0 28px" }}>
          You were never designed to grow by linear addition or exhaust yourself in cheap compromises. 
          True personal and enterprise breakthrough is an order of <strong>multiplication</strong>.
          <br /><br />
          Join Zeki Ubor and an elite cohort of founders, executives, and leaders on the <strong>Origin Platform</strong> for the 
          <strong> Success Multiplier Masterclass</strong> on November 14. In this live, structured strategic immersion, you will 
          discover how to decouple income from physical exhaustion, eliminate decision friction, and architect high-leverage frameworks 
          that compound your authority and capital across the coming decade.
        </p>

        <div className="da-cta-btn-row" style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
          <a
            href="https://www.origin.com.ng/events?event=22"
            target="_blank"
            rel="noopener noreferrer"
            className="da-cta-btn-primary"
          >
            <span>Reserve Your Seat (Origin ↗)</span>
            <span style={{ fontSize: 14 }}>→</span>
          </a>

          <Link href="/divisions/the-becoming-institute" className="da-cta-btn-secondary">
            <span>The Becoming Institute →</span>
          </Link>
        </div>

        <div style={{ marginTop: 24, fontSize: 12, color: "rgba(247,243,236,0.5)", fontFamily: "var(--font-dm-mono)" }}>
          Strictly limited cohort seats to ensure high-impact interactive Q&amp;A and personal strategic calibration · Hosted on Origin
        </div>
      </section>

      {/* ── Closing Signature ────────────────────────────── */}
      <div style={signatureRowStyle}>
        <div>
          <div style={signatureAuthorStyle}>Zeki Ubor</div>
          <div style={signatureTitleStyle}>
            Human &amp; Systems Architect · Founder, The Becoming Institute &amp; Mindvest Global
          </div>
        </div>
        <div style={signatureBrandStyle}>
          The Architecture of Becoming · Lagos &amp; Global Strategic Hubs
        </div>
      </div>
    </article>
  );
}

// ── Styles ─────────────────────────────────────────────────────────────────

const articleStyle: React.CSSProperties = {
  maxWidth: 860,
  margin: "0 auto",
  color: "#2C2621",
  fontFamily: "var(--font-sans, system-ui, sans-serif)",
  fontSize: 17,
  lineHeight: 1.85,
  paddingBottom: 60,
};

const headerTagStyle: React.CSSProperties = {
  fontFamily: "var(--font-dm-mono), monospace",
  fontSize: 11,
  letterSpacing: "1.5px",
  textTransform: "uppercase",
  color: "var(--gold-muted, #C9A84C)",
  display: "flex",
  alignItems: "center",
  gap: 8,
};

const dotStyle: React.CSSProperties = {
  width: 7,
  height: 7,
  borderRadius: "50%",
  background: "#10B981",
  display: "inline-block",
  boxShadow: "0 0 8px #10B981",
};

const geoTagStyle: React.CSSProperties = {
  fontFamily: "var(--font-dm-mono), monospace",
  fontSize: 10,
  letterSpacing: "1px",
  textTransform: "uppercase",
  color: "rgba(0,0,0,0.4)",
};

const leadStyle: React.CSSProperties = {
  fontFamily: "var(--font-cormorant), serif",
  fontSize: "clamp(21px, 2.8vw, 27px)",
  fontWeight: 400,
  lineHeight: 1.55,
  color: "var(--indigo, #16133B)",
  margin: "0 0 28px",
};

const triadNumStyle: React.CSSProperties = {
  fontFamily: "var(--font-dm-mono), monospace",
  fontSize: 12,
  fontWeight: 700,
  color: "var(--gold, #D4AF37)",
};

const triadLabelStyle: React.CSSProperties = {
  fontFamily: "var(--font-dm-mono), monospace",
  fontSize: 10,
  letterSpacing: "1.5px",
  textTransform: "uppercase",
  color: "rgba(0,0,0,0.45)",
};

const triadTitleStyle: React.CSSProperties = {
  fontFamily: "var(--font-cormorant), serif",
  fontSize: 22,
  fontWeight: 600,
  color: "var(--indigo, #16133B)",
};

const triadDescStyle: React.CSSProperties = {
  fontSize: 13.5,
  color: "#4A433D",
  lineHeight: 1.6,
  margin: 0,
};

const briefingLabelStyle: React.CSSProperties = {
  fontFamily: "var(--font-dm-mono), monospace",
  fontSize: 10.5,
  letterSpacing: "2.5px",
  textTransform: "uppercase",
  color: "var(--gold, #D4AF37)",
  fontWeight: 600,
};

const briefingDividerStyle: React.CSSProperties = {
  height: 1,
  background: "rgba(201,168,76,0.25)",
  margin: "12px 0 16px",
};

const briefingListStyle: React.CSSProperties = {
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  flexDirection: "column",
  gap: 12,
};

const briefingItemStyle: React.CSSProperties = {
  fontSize: 14.5,
  lineHeight: 1.65,
  color: "rgba(247,243,236,0.9)",
};

const h2Style: React.CSSProperties = {
  fontFamily: "var(--font-cormorant), serif",
  fontSize: "clamp(24px, 3.2vw, 34px)",
  fontWeight: 400,
  color: "var(--indigo, #16133B)",
  lineHeight: 1.25,
  margin: "44px 0 18px",
};

const bodyStyle: React.CSSProperties = {
  margin: "0 0 20px",
  fontSize: 16.5,
  lineHeight: 1.8,
  color: "#3B332A",
};

const quoteAuthorStyle: React.CSSProperties = {
  fontFamily: "var(--font-dm-mono), monospace",
  fontSize: 11,
  letterSpacing: "1.5px",
  textTransform: "uppercase",
  color: "var(--gold-muted, #C9A84C)",
};

const buildBadgeStyle: React.CSSProperties = {
  width: 36,
  height: 36,
  borderRadius: 3,
  background: "var(--indigo, #16133B)",
  color: "var(--gold, #D4AF37)",
  fontFamily: "var(--font-dm-mono), monospace",
  fontSize: 15,
  fontWeight: 700,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
};

const buildWordStyle: React.CSSProperties = {
  fontFamily: "var(--font-cormorant), serif",
  fontSize: 18,
  fontWeight: 600,
  color: "var(--indigo, #16133B)",
  display: "block",
  marginBottom: 4,
};

const buildDescStyle: React.CSSProperties = {
  fontSize: 14.5,
  color: "#4A433D",
  lineHeight: 1.6,
  margin: 0,
};

const signatureRowStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  gap: 16,
  marginTop: 48,
  paddingTop: 24,
  borderTop: "1px solid rgba(0,0,0,0.1)",
};

const signatureAuthorStyle: React.CSSProperties = {
  fontFamily: "var(--font-cormorant), serif",
  fontSize: 20,
  fontWeight: 600,
  color: "var(--indigo, #16133B)",
};

const signatureTitleStyle: React.CSSProperties = {
  fontSize: 12,
  color: "#777",
  marginTop: 2,
};

const signatureBrandStyle: React.CSSProperties = {
  fontFamily: "var(--font-dm-mono), monospace",
  fontSize: 10,
  letterSpacing: "1px",
  textTransform: "uppercase",
  color: "rgba(0,0,0,0.4)",
};
