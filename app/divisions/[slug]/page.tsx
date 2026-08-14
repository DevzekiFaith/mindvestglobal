import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DivisionDetailClient, { type DivisionData } from "./DivisionDetailClient";

// Division details database matching user specifications
const becomingOriginData = {
  name: "Origin",
  label: "Explore Origin",
  href: "https://www.origin.com.ng",
  tagline: "The Digital Learning Platform",
  desc: "Access the Origin masterclass sequence, live cohorts, and digital curriculum for The Becoming Institute.",
};

const becomingInstituteData: DivisionData = {
  roman: "I",
  sub: "Personal Evolution",
  name: "The Becoming Institute",
  desc: "A sanctuary for individual transformation. Deconstruct limiting identities and build a self that commands interest.",
  detailHeading: "For Individuals: The Becoming Institute",
  detailDesc: "A sanctuary for personal evolution. We deconstruct legacy identities and blueprint a version of yourself that is engineered for global resonance.",
  bulletPoints: [
    "Personal Evolution Frameworks",
    "Group Coaching Cohort — 8 weeks",
    "Private 1:1 Coaching",
  ],
  ctaLabel: "Inquire for Coaching",
  ctaActionType: "modal",
  nextSlug: "leadership-architecture",
  nextName: "Leadership Architecture",
  accent: "rgba(201,168,76,0.15)",
  origin: becomingOriginData,
};

const leadershipFounderData = {
  name: "Zeki Ubor",
  role: "Principal & Founder · Human & Systems Architect",
  image: "/images/zeki-portrait.png",
  quote: "You cannot transform others on a foundation you haven't designed yourself. Everything I build, I have first been through.",
  bio: "Spatial & BIM Architect, systems engineer, and human architecture practitioner uniting architectural discipline with high-level executive development.",
  credentials: [
    "Senior Spatial & BIM Architect — 10+ Years in Architectural Practice",
    "Software & Systems Engineer — Modern Web & Enterprise Architecture",
    "Principal Practitioner — Human & Leadership Architecture Frameworks",
  ],
  links: [
    {
      label: "Book Executive Call (Calendly ↗)",
      href: "https://calendly.com/mindvestglobalresources/30min",
      highlight: true,
    },
    {
      label: "The Becoming Podcast (YouTube ↗)",
      href: "https://youtube.com/@thebecomingwithzekiubor?si=QC9bC_6enotC-g0R",
    },
    {
      label: "Elevation Studio (Spatial Design ↗)",
      href: "https://www.elevationstudiong.com.ng",
    },
    {
      label: "Mindvest Global (LinkedIn ↗)",
      href: "https://www.linkedin.com/company/mindvest-global",
    },
  ],
};

const leadershipArchitectureData: DivisionData = {
  roman: "II",
  sub: "Executive Authority",
  name: "Leadership Architecture",
  desc: "Frameworks for leaders, founders, and executives to design their influence with architectural precision and unshakeable authority.",
  detailHeading: "For Leaders: The Leadership Architecture",
  detailDesc: "Providing executives and entrepreneurs with the structural frameworks to lead with unshakeable authority and visionary precision. Engineered specifically for senior leaders who demand high-density breakthroughs without disrupting weekday business operations.",
  bulletPoints: [
    "2-Day Executive Immersion / Retreat — High-impact intensive to deconstruct limiting operational identities and architect commanding authority",
    "1-Day Private Strategy Intensive (1:1 with Zeki) — High-density deep dive to blueprint your personal presence, decision frameworks, and executive influence",
    "Keynote Speaking & Executive Offsites — Transformational keynotes and boardroom facilitation on Architecting Influence, Positional Authority & Strategic Vision",
  ],
  ctaLabel: "Book Executive Discovery Call",
  ctaActionType: "calendly",
  ctaHref: "https://calendly.com/mindvestglobalresources/30min",
  secondaryCtaLabel: "Inquire / Work With Zeki",
  secondaryCtaActionType: "modal",
  nextSlug: "institutional-design",
  nextName: "Organizational Architecture",
  accent: "rgba(201,168,76,0.1)",
  founder: leadershipFounderData,
};

const institutionalDesignData: DivisionData = {
  roman: "III",
  sub: "Institutional Design",
  name: "Organizational Architecture",
  image: "/images/organizational-session.jpg",
  desc: "Structural design for institutions seeking to align their human capital with their monumental vision.",
  detailHeading: "For Organizations: Organizational Architecture",
  detailDesc: "Designing the internal mechanisms of institutions to ensure their human capital is aligned with their monumental vision. We audit, redesign, and rebuild the architecture of enterprise culture.",
  bulletPoints: [
    "Culture Transformation & Alignment — Comprehensive audit and architectural redesign of institutional values, behavior, and team dynamics",
    "Corporate Leadership Training & Workshops — High-impact executive and management frameworks to scale human capital with monumental vision",
    "Strategic Consulting Retainers (6–12 Months) — Dedicated embedded advisory for enterprise scaling, institutional resilience, and systems governance",
  ],
  ctaLabel: "Partner With Mindvest Global",
  ctaActionType: "institutional-modal",
  secondaryCtaLabel: "Book Executive Call",
  secondaryCtaActionType: "calendly",
  secondaryCtaHref: "https://calendly.com/mindvestglobalresources/30min",
  nextSlug: "personal-evolution",
  nextName: "The Becoming Institute",
  accent: "rgba(201,168,76,0.08)",
};

const divisionsData: Record<string, DivisionData> = {
  "personal-evolution": becomingInstituteData,
  "the-becoming-institute": becomingInstituteData,
  "thebecoming": becomingInstituteData,
  "the-becoming": becomingInstituteData,
  "becoming": becomingInstituteData,

  "leadership-architecture": leadershipArchitectureData,
  "executive-authority": leadershipArchitectureData,

  "institutional-design": institutionalDesignData,
  "organizational-architecture": institutionalDesignData,
  "organisational-architecture": institutionalDesignData,
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = divisionsData[slug];
  if (!data) {
    return {
      title: "Division Not Found | Mindvest Global",
    };
  }
  return {
    title: `${data.name} — ${data.sub} | Mindvest Global`,
    description: data.detailDesc,
    openGraph: {
      title: `${data.name} — ${data.sub} | Mindvest Global`,
      description: data.detailDesc,
      type: "website",
    },
  };
}

export async function generateStaticParams() {
  return [
    { slug: "personal-evolution" },
    { slug: "the-becoming-institute" },
    { slug: "thebecoming" },
    { slug: "the-becoming" },
    { slug: "becoming" },
    { slug: "leadership-architecture" },
    { slug: "executive-authority" },
    { slug: "institutional-design" },
    { slug: "organizational-architecture" },
    { slug: "organisational-architecture" },
  ];
}

export default async function DivisionPage({ params }: PageProps) {
  const { slug } = await params;
  const data = divisionsData[slug];

  if (!data) {
    notFound();
  }

  return <DivisionDetailClient data={data} />;
}
