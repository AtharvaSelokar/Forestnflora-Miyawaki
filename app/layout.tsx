import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const heading = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const body = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://forestnfloramiyawaki.com"),
  title: "Forestnflora Miyawaki | Miyawaki Forest Development in Nagpur",
  description:
    "Forestnflora Miyawaki creates dense native forests, CSR plantation projects, urban dense forests and Miyawaki forest development projects across Nagpur and Maharashtra.",
  keywords: [
    "Miyawaki forest Nagpur",
    "Miyawaki plantation Nagpur",
    "CSR plantation Nagpur",
    "urban dense forest Nagpur",
    "native forest development Maharashtra",
    "Butibori MIDC Miyawaki plantation",
    "tree plantation CSR Maharashtra",
    "industrial green belt plantation",
  ],
  alternates: {
    canonical: "https://forestnfloramiyawaki.com",
  },
  openGraph: {
    title: "Forestnflora Miyawaki | Build a Forest, Not Just a Plantation",
    description:
      "Dense, biodiverse native forests for CSR projects, industries, campuses and civic land across Nagpur and Maharashtra.",
    url: "https://forestnfloramiyawaki.com",
    siteName: "Forestnflora Miyawaki",
    images: [
      {
        url: "/images/hero-forest.jpg",
        width: 1200,
        height: 630,
        alt: "Forestnflora Miyawaki dense native forest development",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${heading.variable} ${body.variable}`}>
        {children}
      </body>
    </html>
  );
}