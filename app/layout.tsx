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
  ],
  openGraph: {
    title: "Mindvest Global — Architecting Human Potential",
    description:
      "A transformational education enterprise built on the conviction that the most important structure any human being will ever build is the architecture of who they are becoming.",
    type: "website",
  },
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
    >
      <body style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
