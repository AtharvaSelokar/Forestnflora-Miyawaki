import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Miyawaki Forest in Nagpur | ForestnFlora Miyawaki Plantation & CSR Projects",
  description:
    "ForestnFlora Miyawaki develops dense native Miyawaki forests, CSR plantation projects, urban forests, and industrial green belts in Nagpur, Maharashtra.",
  keywords: [
    "Miyawaki forest Nagpur",
    "Miyawaki plantation Nagpur",
    "forest development Nagpur",
    "CSR plantation Nagpur",
    "urban forest Nagpur",
    "dense forest plantation",
    "native tree plantation Maharashtra",
    "industrial green belt Nagpur",
    "ForestnFlora Miyawaki",
  ],
  alternates: {
    canonical: "https://forestnfloramiyawaki.com",
  },
  openGraph: {
    title:
      "ForestnFlora Miyawaki | Miyawaki Forest Development in Nagpur",
    description:
      "Dense native Miyawaki forests, CSR plantation projects, and urban forest development for industries, schools, institutions, and civic land.",
    url: "https://forestnfloramiyawaki.com",
    siteName: "ForestnFlora Miyawaki",
    images: [
      {
        url: "https://forestnfloramiyawaki.com/images/hero-desktop.webp",
        width: 1200,
        height: 630,
        alt: "ForestnFlora Miyawaki forest development in Nagpur",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN">
      <body>{children}</body>
    </html>
  );
}