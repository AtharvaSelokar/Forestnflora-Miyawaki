
import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE_URL = "https://forestnfloramiyawaki.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title:
    "ForestnFlora Miyawaki | Miyawaki Forest Development in Nagpur",

  description:
    "ForestnFlora Miyawaki develops dense native Miyawaki forests, CSR plantation projects, urban forests and industrial green belts in Nagpur, Maharashtra and selected locations across India.",

  keywords: [
    "Miyawaki forest Nagpur",
    "Miyawaki plantation Nagpur",
    "Miyawaki forest India",
    "Miyawaki forest company",
    "CSR plantation Nagpur",
    "CSR plantation India",
    "urban forest development",
    "native tree plantation Maharashtra",
    "industrial green belt Nagpur",
    "industrial green belt development",
    "biodiversity restoration",
    "ForestnFlora Miyawaki",
  ],

  applicationName: "ForestnFlora Miyawaki",

  authors: [
    {
      name: "ForestnFlora Miyawaki",
      url: SITE_URL,
    },
  ],

  creator: "ForestnFlora Miyawaki",
  publisher: "ForestnFlora Miyawaki",
  category: "Environmental Services",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title:
      "ForestnFlora Miyawaki | Miyawaki Forest Development in Nagpur",

    description:
      "Dense native Miyawaki forests, CSR plantation projects, urban forests and industrial green belt development for industries, institutions, schools, builders and civic land.",

    url: SITE_URL,

    siteName: "ForestnFlora Miyawaki",

    images: [
      {
        url: "/images/hero-desktop.jpg",
        width: 1200,
        height: 630,
        alt: "ForestnFlora Miyawaki forest development in Nagpur",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "ForestnFlora Miyawaki | Miyawaki Forest Development",

    description:
      "Miyawaki forests, CSR plantation, urban forest development and industrial green belts in Nagpur and selected locations across India.",

    images: ["/images/hero-desktop.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#183f2a",
  colorScheme: "light",
};

const organizationJsonLd = {
  "@context": "https://schema.org",

  "@type": "LocalBusiness",

  "@id": `${SITE_URL}/#organization`,

  name: "ForestnFlora Miyawaki",

  alternateName: "ForestnFlora",

  url: SITE_URL,

  logo: `${SITE_URL}/images/logo.png`,

  image: `${SITE_URL}/images/hero-desktop.jpg`,

  description:
    "ForestnFlora Miyawaki develops dense native forests, CSR plantation projects, urban forests and industrial green belts.",

  telephone: "+918830097072",

  email: "forestnfloramiyawaki@gmail.com",

  address: {
    "@type": "PostalAddress",

    streetAddress:
      "Plot No. 42/A, Durga Nagar, Manewada Road",

    addressLocality: "Nagpur",

    addressRegion: "Maharashtra",

    postalCode: "440024",

    addressCountry: "IN",
  },

  areaServed: [
    {
      "@type": "City",
      name: "Nagpur",
    },
    {
      "@type": "AdministrativeArea",
      name: "Maharashtra",
    },
    {
      "@type": "Country",
      name: "India",
    },
  ],

  contactPoint: {
    "@type": "ContactPoint",

    telephone: "+918830097072",

    contactType: "customer service",

    areaServed: "IN",

    availableLanguage: [
      "English",
      "Hindi",
      "Marathi",
    ],
  },
};

function JsonLd({
  data,
}: {
  data: object;
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(
          /</g,
          "\\u003c"
        ),
      }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body className="antialiased">
        <JsonLd data={organizationJsonLd} />

        {children}
      </body>
    </html>
  );
}
