import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE_URL = "https://forestnfloramiyawaki.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  verification: {
    google: "google164e10555a209a38",
  },

  title: {
    default: "ForestnFlora Miyawaki | Miyawaki Forest Development in India",
    template: "%s | ForestnFlora Miyawaki",
  },

  description:
    "ForestnFlora Miyawaki develops dense native Miyawaki forests, CSR plantation projects, urban forests, biodiversity restoration, native tree plantations and industrial green belts across Nagpur, Maharashtra and selected locations across India.",

  keywords: [
    "Miyawaki forest India",
    "Miyawaki forest Nagpur",
    "Miyawaki plantation",
    "CSR plantation India",
    "CSR plantation Maharashtra",
    "Urban forest development",
    "Native tree plantation",
    "Industrial green belt",
    "Dense forest plantation",
    "Biodiversity restoration",
    "ForestnFlora Miyawaki"
  ],

  applicationName: "ForestnFlora Miyawaki",
  authors: [{ name: "ForestnFlora Miyawaki", url: SITE_URL }],
  creator: "ForestnFlora Miyawaki",
  publisher: "ForestnFlora Miyawaki",
  category: "Environmental Services",

  alternates: { canonical: "/" },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "ForestnFlora Miyawaki | Miyawaki Forest Development in India",
    description:
      "Dense native Miyawaki forests, CSR plantation projects, urban forests and industrial green belts for industries, institutions and communities.",
    url: SITE_URL,
    siteName: "ForestnFlora Miyawaki",
    locale: "en_IN",
    type: "website",
    images: [{
      url: "/images/hero-desktop.jpg",
      width: 1200,
      height: 630,
      alt: "ForestnFlora Miyawaki"
    }]
  },

  twitter: {
    card: "summary_large_image",
    title: "ForestnFlora Miyawaki",
    description:
      "Miyawaki forests, CSR plantations, urban forests and native tree plantations.",
    images: ["/images/hero-desktop.jpg"],
  },

  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "ForestnFlora Miyawaki",
  },

  appLinks: {
    web: {
      url: SITE_URL,
      should_fallback: true,
    },
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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

const schemas = [
{
"@context":"https://schema.org",
"@type":"Organization",
"@id":`${SITE_URL}/#organization`,
"name":"ForestnFlora Miyawaki",
"url":SITE_URL,
"logo":`${SITE_URL}/images/logo.png`,
"image":`${SITE_URL}/images/hero-desktop.jpg`
},
{
"@context":"https://schema.org",
"@type":"LocalBusiness",
"@id":`${SITE_URL}/#localbusiness`,
"name":"ForestnFlora Miyawaki",
"url":SITE_URL,
"telephone":"+918830097072",
"email":"forestnfloramiyawaki@gmail.com",
"priceRange":"$$",
"address":{
"@type":"PostalAddress",
"streetAddress":"Plot No. 42/A, Durga Nagar, Manewada Road",
"addressLocality":"Nagpur",
"addressRegion":"Maharashtra",
"postalCode":"440024",
"addressCountry":"IN"
},
"areaServed":[
{"@type":"Country","name":"India"},
{"@type":"AdministrativeArea","name":"Maharashtra"},
{"@type":"City","name":"Nagpur"}
]
},
{
"@context":"https://schema.org",
"@type":"WebSite",
"url":SITE_URL,
"name":"ForestnFlora Miyawaki",
"potentialAction":{
"@type":"SearchAction",
target: `${SITE_URL}/?q={search_term_string}`,
"query-input":"required name=search_term_string"
}
}
];

export default function RootLayout({children}:{children:React.ReactNode}) {
  return (
    <html lang="en-IN">
      <body className="antialiased">
        {schemas.map((schema, i)=>(
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}
          />
        ))}
        {children}
      </body>
    </html>
  );
}
