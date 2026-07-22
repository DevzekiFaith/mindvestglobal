import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mindvestglobal.com"),
  title: {
    default: "Mindvest Global — Architecting Human Potential | Lagos & Ogun, Nigeria",
    template: "%s | Mindvest Global",
  },
  description:
    "Mindvest Global Resources LLC is a transformational education enterprise founded by Zeki Ubor. Three divisions: The Becoming Institute, Leadership Architecture, and Organisational Architecture.",
  keywords: [
    "Mindvest Global",
    "Zeki Ubor",
    "Architecting Human Potential",
    "The Becoming Institute",
    "Human Architecture Framework",
    "Leadership Architecture",
    "Organisational Architecture",
    "Becoming a Person of Interest Masterclass",
    "Becoming Podcast Zeki Ubor",
    "Leadership Development Lagos Nigeria",
    "Corporate Culture Transformation Ogun State",
    "Executive Coaching Lagos",
    "Human Potential Enterprise Nigeria",
    "Personal Growth Masterclass",
  ],
  authors: [{ name: "Zeki Ubor", url: "https://youtube.com/@thebecomingwithzekiubor?si=QC9bC_6enotC-g0R" }],
  creator: "Zeki Ubor",
  publisher: "Mindvest Global Resources LLC",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "https://mindvestglobal.com",
  },
  openGraph: {
    title: "Mindvest Global — Architecting Human Potential",
    description:
      "A transformational education enterprise built on the conviction that the most important structure any human being will ever build is the architecture of who they are becoming.",
    type: "website",
    url: "https://mindvestglobal.com",
    siteName: "Mindvest Global",
    locale: "en_US",
    images: [
      {
        url: "/images/becoming-stage-1.png",
        width: 1200,
        height: 630,
        alt: "Mindvest Global — The Architecture of Becoming",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mindvest Global — Architecting Human Potential",
    description:
      "A transformational education enterprise built on the conviction that the most important structure any human being will ever build is the architecture of who they are becoming.",
    images: ["/images/becoming-stage-1.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Mindvest Global Resources LLC",
  "alternateName": "Mindvest Global",
  "url": "https://mindvestglobal.com",
  "logo": "https://mindvestglobal.com/icon.svg",
  "description": "Mindvest Global is a transformational education enterprise architecting the conditions for human, leadership, and organisational becoming in Lagos and Ogun State, Nigeria.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Lagos / Ogun State",
    "addressCountry": "NG"
  },
  "email": "mindvestglobalresources@gmail.com",
  "sameAs": [
    "https://www.linkedin.com/company/mindvest-global",
    "https://youtube.com/@thebecomingwithzekiubor?si=QC9bC_6enotC-g0R",
    "https://selar.com/543351n531",
    "https://sof-beta.vercel.app/"
  ],
  "founder": {
    "@type": "Person",
    "name": "Zeki Ubor",
    "jobTitle": "Principal & Founder",
    "url": "https://youtube.com/@thebecomingwithzekiubor?si=QC9bC_6enotC-g0R",
    "sameAs": [
      "https://www.linkedin.com/company/mindvest-global",
      "https://youtube.com/@thebecomingwithzekiubor?si=QC9bC_6enotC-g0R"
    ]
  }
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Becoming a Person of Interest Masterclass",
  "description": "The flagship monthly masterclass from The Becoming Institute. A live, structured session for people ready to stop performing borrowed identities and design an original life from the inside out.",
  "provider": {
    "@type": "Organization",
    "name": "Mindvest Global Resources LLC",
    "sameAs": "https://mindvestglobal.com"
  },
  "offers": {
    "@type": "Offer",
    "price": "15000",
    "priceCurrency": "NGN",
    "url": "https://selar.com/543351n531"
  }
};

const podcastSchema = {
  "@context": "https://schema.org",
  "@type": "PodcastSeries",
  "name": "Becoming — Podcast",
  "description": "Hosted by Zeki Ubor, Exploring the Architecture of Becoming, leadership, identity, and personal design.",
  "url": "https://youtube.com/@thebecomingwithzekiubor?si=QC9bC_6enotC-g0R",
  "author": {
    "@type": "Person",
    "name": "Zeki Ubor"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} ${dmMono.variable}`}
      suppressHydrationWarning
    >
      <body style={{ fontFamily: "var(--font-dm-sans), sans-serif" }} suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(podcastSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
