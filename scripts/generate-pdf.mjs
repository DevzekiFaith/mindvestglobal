import fs from "fs";
import path from "path";

// Pure Node.js script to create a valid, beautifully formatted multi-page PDF
function buildPdf() {
  const objects = [];
  let objCount = 0;

  function addObj(content) {
    objCount++;
    objects.push({ id: objCount, content });
    return objCount;
  }

  // Page 1 Stream Content
  const p1Stream = `
q
% Background Header
0.058 0.09 0.164 rg
0 700 612 142 re f

% Gold accent line
0.788 0.584 0.184 rg
0 697 612 3 re f

% Header Text
BT
/F2 11 Tf
0.96 0.62 0.043 rg
50 790 Td
(MINDVEST GLOBAL RESOURCES) Tj
ET

BT
/F2 20 Tf
1 1 1 rg
50 758 Td
(Executive Advisory & Architecture Catalog) Tj
ET

BT
/F1 10 Tf
0.7 0.75 0.8 rg
50 735 Td
(Service Offerings, Keynote Engagements & Pricing Framework - 2026 Edition) Tj
ET

% Executive Positioning Box
q
0.074 0.114 0.2 rg
0.788 0.584 0.184 RG
1 w
45 590 522 90 re B
0.788 0.584 0.184 rg
45 590 4 90 re f

BT
/F2 10 Tf
0.788 0.584 0.184 rg
58 662 Td
(EXECUTIVE POSITIONING & VALUE PHILOSOPHY) Tj
ET

BT
/F1 9 Tf
0.9 0.93 0.98 rg
58 642 Td
(At Mindvest Global Resources, we do not provide generic consulting or hourly advisory. We engineer high-yield) Tj
0 -13 Td
(human capital, deliver transformational keynote addresses, design resilient corporate governance, and build) Tj
0 -13 Td
(scalable organizational architectures. Our pricing structure reflects enterprise-level outcomes-transforming) Tj
0 -13 Td
(leadership alignment, driving market authority, and securing measurable bottom-line yield.) Tj
ET
Q

% Section 1 Header
BT
/F2 13 Tf
0.07 0.1 0.2 rg
45 558 Td
(1. Advisory & Speaking Catalog Master Pricing Table) Tj
ET

BT
/F1 9 Tf
0.4 0.45 0.5 rg
45 542 Td
(Outcome-based fee schedules across keynotes, leadership, and corporate transformation.) Tj
ET

% Master Pricing Table Header
q
0.074 0.114 0.2 rg
45 505 522 22 re f
BT
/F2 8 Tf
1 1 1 rg
52 512 Td
(SERVICE LINE) Tj
135 0 Td
(CORE DELIVERABLES & SCOPE) Tj
180 0 Td
(TARGET CLIENT PROFILE) Tj
95 0 Td
(INVESTMENT LEVEL) Tj
ET
Q

% Row 1: Executive Keynote Speaking
q
0.97 0.98 1 rg
45 440 522 65 re f
0.85 0.88 0.92 RG
0.5 w
45 440 522 65 re S

BT
/F2 9 Tf
0.07 0.1 0.2 rg
52 488 Td
(Executive Keynote) Tj
0 -11 Td
(Speaking) Tj
/F1 7.5 Tf
0.4 0.45 0.5 rg
0 -11 Td
(On-Site / Virtual) Tj
ET

BT
/F1 8 Tf
0.15 0.2 0.25 rg
187 488 Td
(High-impact keynotes on Leadership Architecture,) Tj
0 -11 Td
(Organizational Re-engineering, Mindset) Tj
0 -11 Td
(Transformation, and Enterprise Vision.) Tj
ET

BT
/F1 8 Tf
0.2 0.25 0.3 rg
367 488 Td
(Corporate AGMs, industry) Tj
0 -11 Td
(summits, executive retreats,) Tj
0 -11 Td
(global conferences.) Tj
ET

BT
/F2 9 Tf
0.788 0.584 0.184 rg
462 488 Td
(N1,000,000 -) Tj
0 -11 Td
(N2,500,000) Tj
/F1 7 Tf
0.4 0.45 0.5 rg
0 -10 Td
(per keynote session) Tj
ET
Q

% Row 2: The Becoming Coaching
q
1 1 1 rg
45 375 522 65 re f
0.85 0.88 0.92 RG
0.5 w
45 375 522 65 re S

BT
/F2 9 Tf
0.07 0.1 0.2 rg
52 423 Td
(The Becoming) Tj
0 -11 Td
(Coaching) Tj
/F1 7.5 Tf
0.4 0.45 0.5 rg
0 -11 Td
(12-Week Program) Tj
ET

BT
/F1 8 Tf
0.15 0.2 0.25 rg
187 423 Td
(Personal vision architecture, high-performance) Tj
0 -11 Td
(executive mindset, identity re-engineering,) Tj
0 -11 Td
(strategic branding, elite accountability.) Tj
ET

BT
/F1 8 Tf
0.2 0.25 0.3 rg
367 423 Td
(Mid-to-senior executives,) Tj
0 -11 Td
(high-yield founders, emerging) Tj
0 -11 Td
(C-suite leaders.) Tj
ET

BT
/F2 9 Tf
0.788 0.584 0.184 rg
462 423 Td
(N750,000 -) Tj
0 -11 Td
(N1,500,000) Tj
/F1 7 Tf
0.4 0.45 0.5 rg
0 -10 Td
(per coachee) Tj
ET
Q

% Row 3: Leadership Architecture
q
0.97 0.98 1 rg
45 310 522 65 re f
0.85 0.88 0.92 RG
0.5 w
45 310 522 65 re S

BT
/F2 9 Tf
0.07 0.1 0.2 rg
52 358 Td
(Leadership) Tj
0 -11 Td
(Architecture) Tj
/F1 7.5 Tf
0.4 0.45 0.5 rg
0 -11 Td
(60-90 Day Project) Tj
ET

BT
/F1 8 Tf
0.15 0.2 0.25 rg
187 358 Td
(On-site executive alignment workshops,) Tj
0 -11 Td
(bespoke executive pipelines, succession) Tj
0 -11 Td
(planning, and decision-rights mapping.) Tj
ET

BT
/F1 8 Tf
0.2 0.25 0.3 rg
367 358 Td
(Expanding mid-market) Tj
0 -11 Td
(enterprises, scale-ups, and) Tj
0 -11 Td
(family businesses.) Tj
ET

BT
/F2 9 Tf
0.788 0.584 0.184 rg
462 358 Td
(N2,500,000 -) Tj
0 -11 Td
(N5,000,000) Tj
/F1 7 Tf
0.4 0.45 0.5 rg
0 -10 Td
(flat project fee) Tj
ET
Q

% Row 4: Organisational Architecture
q
1 1 1 rg
45 245 522 65 re f
0.85 0.88 0.92 RG
0.5 w
45 245 522 65 re S

BT
/F2 9 Tf
0.07 0.1 0.2 rg
52 293 Td
(Organisational) Tj
0 -11 Td
(Architecture) Tj
/F1 7.5 Tf
0.4 0.45 0.5 rg
0 -11 Td
(Corporate Retainer) Tj
ET

BT
/F1 8 Tf
0.15 0.2 0.25 rg
187 293 Td
(End-to-end corporate restructuring, process) Tj
0 -11 Td
(engineering, culture transformation, strategic) Tj
0 -11 Td
(policy blueprints, quarterly board advisory.) Tj
ET

BT
/F1 8 Tf
0.2 0.25 0.3 rg
367 293 Td
(Established corporate groups,) Tj
0 -11 Td
(multi-division enterprises,) Tj
0 -11 Td
(institutional clients.) Tj
ET

BT
/F2 9 Tf
0.788 0.584 0.184 rg
462 293 Td
(N5,000,000 -) Tj
0 -11 Td
(N15,000,000+) Tj
/F1 7 Tf
0.4 0.45 0.5 rg
0 -10 Td
(or N1.5M-N3M/mo retainer) Tj
ET
Q

% Footer
0.85 0.88 0.92 RG
0.5 w
45 50 522 0.5 re S

BT
/F1 8 Tf
0.4 0.45 0.5 rg
45 35 Td
(Mindvest Global Resources Ltd. - Confidential Advisory Catalog) Tj
435 0 Td
(Page 1 of 2) Tj
ET
Q
`;

  // Page 2 Stream Content (Purely Section 2 Frameworks + Corporate Box, NO Section 3)
  const p2Stream = `
q
% Header Band
0.058 0.09 0.164 rg
0 740 612 102 re f

0.788 0.584 0.184 rg
0 737 612 3 re f

BT
/F2 11 Tf
0.96 0.62 0.043 rg
50 805 Td
(MINDVEST GLOBAL RESOURCES) Tj
ET

BT
/F2 17 Tf
1 1 1 rg
50 778 Td
(2. Detailed Service Scope & Delivery Frameworks) Tj
ET

BT
/F1 9 Tf
0.7 0.75 0.8 rg
50 758 Td
(Comprehensive strategic scope and executive delivery architectures across four core pillars.) Tj
ET

% Grid of 4 Pillars
% Pillar 1: Executive Speaking
q
0.97 0.98 1 rg
0.85 0.88 0.92 RG
0.5 w
45 460 250 250 re B
0.074 0.114 0.2 rg
45 685 250 25 re f

BT
/F2 9 Tf
0.96 0.62 0.043 rg
55 693 Td
(KEYNOTE ADDRESS) Tj
ET

BT
/F2 11 Tf
0.07 0.1 0.2 rg
55 665 Td
(Executive Speaking) Tj
/F1 8 Tf
0.4 0.45 0.5 rg
0 -13 Td
(On-site keynotes and high-stakes retreat presentations.) Tj
ET

BT
/F1 8.5 Tf
0.15 0.2 0.25 rg
55 625 Td
(  60-90 min keynote presentation) Tj
0 -16 Td
(  Customized event theme alignment) Tj
0 -16 Td
(  Pre-event executive discovery interview) Tj
0 -16 Td
(  Audience Q&A & strategic engagement) Tj
0 -16 Td
(  VIP strategy roundtable inclusion) Tj
0 -16 Td
(  Post-event executive summary brief) Tj
ET
Q

% Pillar 2: The Becoming Coaching
q
0.97 0.98 1 rg
0.85 0.88 0.92 RG
0.5 w
317 460 250 250 re B
0.074 0.114 0.2 rg
317 685 250 25 re f

BT
/F2 9 Tf
0.96 0.62 0.043 rg
327 693 Td
(HUMAN CAPITAL) Tj
ET

BT
/F2 11 Tf
0.07 0.1 0.2 rg
327 665 Td
(The Becoming Coaching) Tj
/F1 8 Tf
0.4 0.45 0.5 rg
0 -13 Td
(High-touch 1-on-1 aligning personal authority.) Tj
ET

BT
/F1 8.5 Tf
0.15 0.2 0.25 rg
327 625 Td
(  Weekly 90-min 1-on-1 advisory coaching) Tj
0 -16 Td
(  Executive personal audit & benchmarking) Tj
0 -16 Td
(  Identity & mental model re-engineering) Tj
0 -16 Td
(  Origin Platform publishing & ecosystem access) Tj
0 -16 Td
(  24/7 strategic desk priority chat) Tj
0 -16 Td
(  Quarterly trajectory review & audit) Tj
ET
Q

% Pillar 3: Leadership Architecture
q
0.97 0.98 1 rg
0.85 0.88 0.92 RG
0.5 w
45 190 250 250 re B
0.074 0.114 0.2 rg
45 415 250 25 re f

BT
/F2 9 Tf
0.96 0.62 0.043 rg
55 423 Td
(GOVERNANCE & KEYNOTES) Tj
ET

BT
/F2 11 Tf
0.07 0.1 0.2 rg
55 395 Td
(Leadership Architecture) Tj
/F1 8 Tf
0.4 0.45 0.5 rg
0 -13 Td
(Structuring leadership engines & alignment.) Tj
ET

BT
/F1 8.5 Tf
0.15 0.2 0.25 rg
55 355 Td
(  On-site executive speaking sessions) Tj
0 -16 Td
(  Competency model & executive mapping) Tj
0 -16 Td
(  Succession planning blueprints) Tj
0 -16 Td
(  C-suite governance frameworks) Tj
0 -16 Td
(  Board alignment & synergy workshops) Tj
0 -16 Td
(  Decision-rights matrix deployment) Tj
ET
Q

% Pillar 4: Organisational Architecture
q
0.97 0.98 1 rg
0.85 0.88 0.92 RG
0.5 w
317 190 250 250 re B
0.074 0.114 0.2 rg
317 415 250 25 re f

BT
/F2 9 Tf
0.96 0.62 0.043 rg
327 423 Td
(ENTERPRISE SCALE) Tj
ET

BT
/F2 11 Tf
0.07 0.1 0.2 rg
327 395 Td
(Organisational Architecture) Tj
/F1 8 Tf
0.4 0.45 0.5 rg
0 -13 Td
(Total structural re-engineering for maximum yield.) Tj
ET

BT
/F1 8.5 Tf
0.15 0.2 0.25 rg
327 355 Td
(  Full-scale corporate restructuring) Tj
0 -16 Td
(  Process optimization & workflows) Tj
0 -16 Td
(  Culture & high-performance systems) Tj
0 -16 Td
(  Multi-division brand alignment) Tj
0 -16 Td
(  Quarterly board advisory seats) Tj
0 -16 Td
(  Operating model modernization) Tj
ET
Q

% Institutional Engagement Box
q
0.074 0.114 0.2 rg
45 80 522 90 re f
0.788 0.584 0.184 RG
1 w
45 80 522 90 re S

BT
/F2 11 Tf
1 1 1 rg
60 145 Td
(Mindvest Global Resources Ltd.) Tj
ET

BT
/F1 9 Tf
0.85 0.9 0.95 rg
60 128 Td
(Email: support@mindvestglobalresources.com.ng) Tj
0 -13 Td
(Platform: origin.com.ng) Tj
0 -13 Td
(Location: Ogun / Lagos State, Nigeria) Tj
ET

BT
/F2 10 Tf
0.96 0.62 0.043 rg
365 145 Td
(CONFIDENTIAL DOCUMENT) Tj
/F1 8.5 Tf
0.7 0.75 0.8 rg
0 -14 Td
(For Internal Governance & Client Proposals) Tj
0 -13 Td
(Advisory Retainers - Keynote Engagements) Tj
ET
Q

% Footer
0.85 0.88 0.92 RG
0.5 w
45 50 522 0.5 re S

BT
/F1 8 Tf
0.4 0.45 0.5 rg
45 35 Td
(Mindvest Global Resources Ltd. - Confidential Advisory Catalog) Tj
435 0 Td
(Page 2 of 2) Tj
ET
Q
`;

  // Object 1: Catalog
  const catId = addObj("<< /Type /Catalog /Pages 2 0 R >>");
  
  // Object 2: Pages (Will update after pages defined)
  const pagesId = addObj("<< /Type /Pages /Kids [3 0 R 5 0 R] /Count 2 >>");

  // Object 3: Page 1
  const p1Id = addObj("<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 7 0 R /F2 8 0 R >> >> >>");
  
  // Object 4: Page 1 Stream
  const p1StreamClean = p1Stream.trim();
  const p1StreamId = addObj(`<< /Length ${Buffer.byteLength(p1StreamClean, "latin1")} >>\nstream\n${p1StreamClean}\nendstream`);

  // Object 5: Page 2
  const p2Id = addObj("<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 6 0 R /Resources << /Font << /F1 7 0 R /F2 8 0 R >> >> >>");

  // Object 6: Page 2 Stream
  const p2StreamClean = p2Stream.trim();
  const p2StreamId = addObj(`<< /Length ${Buffer.byteLength(p2StreamClean, "latin1")} >>\nstream\n${p2StreamClean}\nendstream`);

  // Object 7: Standard Font (Helvetica)
  const f1Id = addObj("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>");

  // Object 8: Bold Font (Helvetica-Bold)
  const f2Id = addObj("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>");

  // Assemble PDF Buffer
  let pdf = "%PDF-1.4\n";
  const xref = [0];

  for (const obj of objects) {
    xref.push(Buffer.byteLength(pdf, "latin1"));
    pdf += `${obj.id} 0 obj\n${obj.content}\nendobj\n`;
  }

  const xrefOffset = Buffer.byteLength(pdf, "latin1");
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;

  for (let i = 1; i <= objects.length; i++) {
    const offsetStr = String(xref[i]).padStart(10, "0");
    pdf += `${offsetStr} 00000 n \n`;
  }

  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;

  return Buffer.from(pdf, "latin1");
}

const docsDir = path.join(process.cwd(), "public", "docs");
if (!fs.existsSync(docsDir)) {
  fs.mkdirSync(docsDir, { recursive: true });
}

const outputPath = path.join(docsDir, "Mindvest_Advisory_Catalog_Updated.pdf");
const pdfBuffer = buildPdf();
fs.writeFileSync(outputPath, pdfBuffer);
console.log(`Successfully generated PDF at: ${outputPath} (${pdfBuffer.length} bytes)`);
