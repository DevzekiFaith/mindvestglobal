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
  title: "Mindvest Global — Architecting Human Potential",
  description:
    "Mindvest Global is a transformational education enterprise — architecting the conditions for human, leadership, and organisational becoming.",
  keywords: [
    "transformation",
    "leadership development",
    "human potential",
    "masterclass",
    "mindvest global",
    "becoming",
    "personal growth",
    "executive coaching",
    "organizational culture",
  ],
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
  },
  twitter: {
    card: "summary_large_image",
    title: "Mindvest Global — Architecting Human Potential",
    description:
      "A transformational education enterprise built on the conviction that the most important structure any human being will ever build is the architecture of who they are becoming.",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Mindvest Global",
  "url": "https://mindvestglobal.com",
  "logo": "https://mindvestglobal.com/icon.svg",
  "description": "Mindvest Global is a transformational education enterprise — architecting the conditions for human, leadership, and organisational becoming.",
  "founder": {
    "@type": "Person",
    "name": "Zeki Ubor"
  }
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Becoming a Person of Interest Masterclass",
  "description": "The flagship monthly masterclass from The Becoming Institute. A live, structured session for people ready to stop performing borrowed identities and design an original life from the inside out.",
  "provider": {
    "@type": "Organization",
    "name": "Mindvest Global",
    "sameAs": "https://mindvestglobal.com"
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
        {children}
      </body>
    </html>
  );
}
