import type { Metadata } from "next";
import Image, { getImageProps } from "next/image";
import Link from "next/link";

const SITE_URL = "https://forestnfloramiyawaki.com";
const PAGE_URL = `${SITE_URL}/miyawaki-forest-nagpur`;
const PHONE_DISPLAY = "+91 8830097072";
const PHONE_LINK = "+918830097072";

const WHATSAPP_URL =
  "https://wa.me/918830097072?text=Hello%20ForestnFlora%20Miyawaki%2C%20I%20want%20to%20discuss%20a%20Miyawaki%20forest%20project%20in%20Nagpur.";

export const metadata: Metadata = {
  title: "Miyawaki Forest in Nagpur | CSR Plantation & Green Belts",
  description:
    "ForestnFlora develops Miyawaki forests in Nagpur for industries, CSR initiatives, institutions, schools, townships and suitable urban land.",
  alternates: {
    canonical: PAGE_URL,
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
    title: "Miyawaki Forest Development in Nagpur | ForestnFlora",
    description:
      "Miyawaki plantation, CSR plantation, native forest development and industrial green belt solutions in Nagpur.",
    url: PAGE_URL,
    siteName: "ForestnFlora Miyawaki",
    images: [
      {
        url: `${SITE_URL}/images/hero-desktop.webp`,
        width: 1920,
        height: 1080,
        alt: "Dense native Miyawaki forest development in Nagpur",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Miyawaki Forest Development in Nagpur | ForestnFlora",
    description:
      "Miyawaki plantation, CSR plantation and industrial green belt development services in Nagpur.",
    images: [`${SITE_URL}/images/hero-desktop.webp`],
  },
};

const projectStats = [
  { value: "4,638", label: "Native saplings" },
  { value: "29", label: "Indigenous species" },
  { value: "1,500 m²", label: "Project area" },
  { value: "Butibori MIDC", label: "Project location" },
];

const audiences = [
  {
    number: "01",
    title: "Industries & MIDC Units",
    text: "Dense native forests and industrial green belts for factory campuses, unused industrial plots and long-term green-cover initiatives.",
  },
  {
    number: "02",
    title: "CSR Teams & Companies",
    text: "End-to-end CSR plantation support including planning, execution, employee participation, documentation and growth monitoring.",
  },
  {
    number: "03",
    title: "Schools & Colleges",
    text: "Native forest spaces that support environmental education, biodiversity awareness and greener educational campuses.",
  },
  {
    number: "04",
    title: "Institutions & Hospitals",
    text: "Planned native green spaces for institutional land, large campuses and underutilised open areas.",
  },
  {
    number: "05",
    title: "Builders & Townships",
    text: "Urban dense forests and native green zones for residential developments, townships and community spaces.",
  },
  {
    number: "06",
    title: "Civic & Public Land",
    text: "Ecological restoration and native tree plantation solutions for suitable public, community and urban land.",
  },
];

const benefits = [
  {
    title: "Dense Native Green Cover",
    text: "A layered mix of locally suitable native trees and shrubs creates a compact and biodiverse forest ecosystem.",
  },
  {
    title: "Biodiversity Restoration",
    text: "Native species can provide food, shelter and habitat value for birds, insects and other local life.",
  },
  {
    title: "Productive Use of Open Land",
    text: "Unused and underutilised land can become a planned green ecosystem with long-term ecological value.",
  },
  {
    title: "Support for CSR Initiatives",
    text: "Projects can be supported with plantation records, photographs and progress reporting for stakeholders.",
  },
  {
    title: "Suitable for Urban Locations",
    text: "The method can be planned for suitable industrial plots, institutions, campuses and compact urban spaces.",
  },
  {
    title: "Long-Term Growth Monitoring",
    text: "Establishment care, replacement support and monitoring help the plantation during its important early stage.",
  },
];

const process = [
  {
    step: "01",
    title: "Site Visit & Assessment",
    text: "We study land area, sunlight, drainage, soil condition, access, water availability and the surrounding environment.",
  },
  {
    step: "02",
    title: "Forest Planning",
    text: "The plantation layout, species layers, sapling requirement and implementation plan are prepared for the site.",
  },
  {
    step: "03",
    title: "Native Species Selection",
    text: "Locally suitable canopy trees, sub-trees, shrubs and supporting species are selected in a diverse combination.",
  },
  {
    step: "04",
    title: "Soil Preparation",
    text: "The soil is loosened and improved using suitable organic inputs, biomass and site-specific amendments.",
  },
  {
    step: "05",
    title: "Dense Plantation & Mulching",
    text: "Saplings are planted in a planned mixed pattern and protected with a moisture-conserving mulch layer.",
  },
  {
    step: "06",
    title: "Maintenance & Monitoring",
    text: "Watering, weeding, replacement, survival observation and growth monitoring support forest establishment.",
  },
];

const whyChooseUs = [
  "Nagpur-based project team with practical knowledge of local climate and land conditions.",
  "Focus on locally suitable native species instead of ornamental plantation alone.",
  "Complete support from assessment and soil preparation to plantation and establishment care.",
  "Experience with industrial land restoration through the Butibori MIDC Miyawaki project.",
  "Plantation records, photographs and progress-reporting support for CSR stakeholders.",
  "Site-specific planning based on land condition, objectives, resources and long-term growth.",
];

const serviceAreas = [
  "Nagpur City",
  "Butibori",
  "Hingna",
  "MIHAN",
  "Kalmeshwar",
  "Wardha",
  "Vidarbha",
  "Maharashtra",
  "Selected Projects Across India",
];

const faqs = [
  {
    question: "What is a Miyawaki forest?",
    answer:
      "A Miyawaki forest is a densely planted native forest developed using a layered mix of locally suitable species. The process generally includes site assessment, native species selection, soil improvement, dense plantation, mulching and establishment care.",
  },
  {
    question: "Do you develop Miyawaki forests in Nagpur?",
    answer:
      "Yes. ForestnFlora Miyawaki is based in Nagpur and provides Miyawaki plantation, native forest development, CSR plantation and industrial green-development services in Nagpur and nearby regions.",
  },
  {
    question: "How much land is required for a Miyawaki forest?",
    answer:
      "The suitable area depends on the site, project objective, land shape, access and available resources. Small urban plots as well as larger industrial and institutional land can be assessed before a proposal is prepared.",
  },
  {
    question: "What is the cost of a Miyawaki plantation in Nagpur?",
    answer:
      "Project cost depends on land area, soil condition, selected native species, plantation density, water arrangement, site access, protection requirements and the maintenance period. A site assessment is the best way to prepare an accurate proposal.",
  },
  {
    question: "Do you provide CSR plantation services in Nagpur?",
    answer:
      "Yes. ForestnFlora supports suitable CSR plantation projects with assessment, planning, native species selection, execution, photo documentation and growth-monitoring support according to the agreed scope.",
  },
  {
    question: "Do you provide industrial green belt development?",
    answer:
      "Yes. Suitable industrial and MIDC land can be assessed for Miyawaki forest development, native tree plantation, boundary plantation, green-cover creation and long-term ecological restoration.",
  },
  {
    question: "Do you provide plantation maintenance?",
    answer:
      "Yes. Maintenance support can include watering, weeding, mulching, gap replacement, survival observation and periodic growth monitoring according to the project agreement.",
  },
  {
    question: "Which native species are used in Nagpur?",
    answer:
      "Species are selected after considering local ecology, site conditions, soil, climate and project objectives. The final combination may include suitable native canopy trees, smaller trees and shrub-layer species.",
  },
  {
    question: "Do you work outside Nagpur?",
    answer:
      "Yes. Projects may be undertaken across Maharashtra and selected locations in India depending on land area, project scale, site conditions and execution requirements.",
  },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Miyawaki Forest in Nagpur",
      item: PAGE_URL,
    },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${PAGE_URL}#service`,
  name: "Miyawaki Forest Development in Nagpur",
  serviceType:
    "Miyawaki forest development, CSR plantation, native tree plantation and industrial green belt development",
  description:
    "ForestnFlora provides site assessment, native species selection, soil preparation, Miyawaki plantation, establishment care and growth monitoring in Nagpur.",
  url: PAGE_URL,
  image: `${SITE_URL}/images/hero-desktop.webp`,
  areaServed: [
    { "@type": "City", name: "Nagpur" },
    { "@type": "AdministrativeArea", name: "Vidarbha" },
    { "@type": "AdministrativeArea", name: "Maharashtra" },
  ],
  provider: {
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#organization`,
    name: "ForestnFlora Miyawaki",
    url: SITE_URL,
    telephone: PHONE_LINK,
    email: "forestnfloramiyawaki@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plot No. 42/A, Durga Nagar, Manewada Road",
      addressLocality: "Nagpur",
      addressRegion: "Maharashtra",
      postalCode: "440024",
      addressCountry: "IN",
    },
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

function HeroImage() {
  const common = {
    alt: "Dense native Miyawaki forest development in Nagpur",
    sizes: "100vw",
    quality: 82,
  };

  const {
    props: { srcSet: desktopImage },
  } = getImageProps({
    ...common,
    src: "/images/hero-desktop.webp",
    width: 1920,
    height: 1080,
  });

  const {
    props: { srcSet: mobileImage, ...mobileImageProps },
  } = getImageProps({
    ...common,
    src: "/images/hero-mobile.webp",
    width: 900,
    height: 1600,
  });

  return (
    <picture>
      <source media="(min-width: 768px)" srcSet={desktopImage} />
      <source media="(max-width: 767px)" srcSet={mobileImage} />
      <img
        {...mobileImageProps}
        alt={common.alt}
        loading="eager"
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
    </picture>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-[var(--brown)] md:text-[12px]">
      {children}
    </p>
  );
}

export default function MiyawakiForestNagpurPage() {
  return (
    <main className="min-h-screen bg-[var(--cream)] text-[var(--text)]">
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={faqJsonLd} />

      <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--cream)]/95 shadow-sm backdrop-blur-md">
        <div className="mx-auto flex h-[58px] max-w-[1440px] items-center justify-between gap-3 px-4 md:h-[68px] md:px-10">
          <Link
            href="/"
            aria-label="ForestnFlora Miyawaki home"
            className="flex min-w-0 items-center gap-2"
          >
            <Image
              src="/images/logo.png"
              alt="ForestnFlora Miyawaki logo"
              width={40}
              height={40}
              priority
              className="h-8 w-8 shrink-0 object-contain md:h-10 md:w-10"
            />

            <span className="brand min-w-0 truncate text-[14px] font-bold text-[var(--green)] md:text-[19px]">
              <span className="md:hidden">ForestnFlora</span>
              <span className="hidden md:inline">
                Forestnfloramiyawaki.com
              </span>
            </span>
          </Link>

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-7 text-sm font-semibold lg:flex"
          >
            <Link href="/" className="transition-colors hover:text-[var(--green-soft)]">
              Home
            </Link>
            <Link href="/#services" className="transition-colors hover:text-[var(--green-soft)]">
              Services
            </Link>
            <Link href="/#projects" className="transition-colors hover:text-[var(--green-soft)]">
              Projects
            </Link>
            <Link href="/#contact" className="transition-colors hover:text-[var(--green-soft)]">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <details className="group relative lg:hidden">
              <summary
                aria-label="Open navigation menu"
                className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-full border border-[var(--line)] bg-white text-xl font-bold text-[var(--green)]"
              >
                ☰
              </summary>

              <nav
                aria-label="Mobile navigation"
                className="absolute right-0 top-12 z-50 grid w-52 overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--card)] p-2 text-sm font-bold shadow-2xl"
              >
                <Link href="/" className="rounded-xl px-4 py-3 hover:bg-[var(--cream2)]">
                  Home
                </Link>
                <Link href="/#services" className="rounded-xl px-4 py-3 hover:bg-[var(--cream2)]">
                  Services
                </Link>
                <Link href="/#projects" className="rounded-xl px-4 py-3 hover:bg-[var(--cream2)]">
                  Projects
                </Link>
                <Link href="/#contact" className="rounded-xl px-4 py-3 hover:bg-[var(--cream2)]">
                  Contact
                </Link>
              </nav>
            </details>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[var(--whatsapp)] px-4 py-2 text-[11px] font-extrabold text-white shadow-sm transition hover:bg-[var(--whatsapp-dark)] md:px-6 md:text-sm"
            >
              Get Proposal
            </a>
          </div>
        </div>
      </header>

      <section className="relative isolate min-h-[760px] overflow-hidden bg-[var(--deep)] sm:min-h-[720px] md:min-h-[760px]">
        <HeroImage />
        <div className="absolute inset-0 bg-gradient-to-b from-[#06180f]/20 via-[#06180f]/42 to-[#06180f]/95" />

        <div className="relative z-10 mx-auto flex min-h-[760px] max-w-[1440px] flex-col justify-end px-5 pb-8 pt-20 sm:min-h-[720px] md:min-h-[760px] md:px-10 md:pb-16">
          <nav
            aria-label="Breadcrumb"
            className="mb-4 flex items-center gap-2 text-[11px] font-semibold text-white/75 md:mb-6"
          >
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Miyawaki Forest Nagpur</span>
          </nav>

          <p className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[var(--gold)] md:text-[12px] md:tracking-[0.36em]">
            Native Forest Development · Nagpur
          </p>

          <h1 className="brand mt-4 max-w-[1050px] text-[38px] font-semibold leading-[1] tracking-[-0.04em] text-white drop-shadow-[0_5px_20px_rgba(0,0,0,0.75)] sm:text-[48px] md:mt-5 md:text-[80px]">
            Miyawaki Forest Development in Nagpur
          </h1>

          <p className="mt-5 max-w-3xl text-[15px] font-medium leading-7 text-white drop-shadow-[0_3px_12px_rgba(0,0,0,0.75)] sm:text-[17px] md:mt-6 md:text-[22px] md:leading-10">
            ForestnFlora plans and develops dense, biodiverse native forests
            for industries, CSR initiatives, institutions, educational
            campuses, builders and suitable civic land across Nagpur.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row md:mt-7">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[52px] items-center justify-center rounded-full bg-[var(--whatsapp)] px-8 text-sm font-extrabold text-white shadow-xl transition hover:bg-[var(--whatsapp-dark)]"
            >
              Discuss Your Project →
            </a>

            <a
              href={`tel:${PHONE_LINK}`}
              className="flex min-h-[52px] items-center justify-center rounded-full border border-white bg-white px-8 text-sm font-extrabold text-[var(--green)] shadow-xl transition hover:bg-[var(--cream)]"
            >
              Call {PHONE_DISPLAY}
            </a>
          </div>

          <p className="mt-7 text-[9px] font-extrabold uppercase tracking-[0.22em] text-white/70 md:text-[11px]">
            Butibori MIDC Featured Project
          </p>

          <div className="mt-3 grid grid-cols-2 gap-4 border-t border-white/35 pt-5 md:max-w-4xl md:grid-cols-4 md:pt-6">
            {projectStats.map((stat) => (
              <div key={stat.label}>
                <p className="text-[23px] font-black text-white md:text-[34px]">
                  {stat.value}
                </p>
                <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.16em] text-white/75 md:text-[10px] md:tracking-[0.19em]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--line)] bg-[var(--cream2)] px-5 py-14 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <SectionLabel>Miyawaki Plantation in Nagpur</SectionLabel>

            <h2 className="brand mt-5 text-[39px] font-semibold leading-[1.03] tracking-[-0.03em] text-[var(--green)] md:text-[65px]">
              Transform unused land into a living native forest.
            </h2>

            <div className="mt-7 space-y-5 text-[15px] leading-8 text-[var(--muted)] md:text-[19px] md:leading-9">
              <p>
                Nagpur has industrial areas, institutional campuses,
                educational land, residential developments and urban spaces
                where planned native plantation can create meaningful
                long-term environmental value.
              </p>

              <p>
                Our approach combines site assessment, native-species
                planning, soil preparation, dense mixed plantation, mulching
                and establishment-stage monitoring.
              </p>

              <p>
                Every forest is planned according to its land, ecological
                setting, water availability, project purpose and long-term
                maintenance requirements—not through a single standard
                plantation formula.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[28px]">
            <Image
              src="/images/about-forest.webp"
              alt="Dense native Miyawaki plantation developed near Nagpur"
              width={1200}
              height={900}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-[320px] w-full object-cover md:h-[620px]"
            />
          </div>
        </div>
      </section>

      <section className="bg-[var(--cream)] px-5 py-14 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1280px]">
          <SectionLabel>Who We Work With</SectionLabel>

          <h2 className="brand mt-5 max-w-5xl text-[39px] font-semibold leading-[1.03] tracking-[-0.03em] text-[var(--green)] md:text-[65px]">
            Miyawaki forest solutions for organisations across Nagpur.
          </h2>

          <p className="mt-6 max-w-4xl text-[15px] leading-8 text-[var(--muted)] md:text-[20px] md:leading-9">
            We work with organisations seeking long-term native green cover,
            biodiversity restoration and measurable environmental impact.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {audiences.map((audience) => (
              <article
                key={audience.number}
                className="border border-[var(--line)] bg-[var(--card)] p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl md:p-10"
              >
                <p className="text-[11px] font-extrabold tracking-[0.24em] text-[var(--brown)]">
                  {audience.number}
                </p>
                <h3 className="brand mt-5 text-[26px] font-semibold text-[var(--green)] md:text-[32px]">
                  {audience.title}
                </h3>
                <p className="mt-4 text-[14px] leading-7 text-[var(--muted)] md:text-[17px] md:leading-8">
                  {audience.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-[var(--cream2)] px-5 py-14 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
            <div>
              <SectionLabel>Project Benefits</SectionLabel>

              <h2 className="brand mt-5 text-[39px] font-semibold leading-[1.03] tracking-[-0.03em] text-[var(--green)] md:text-[62px]">
                Why develop a Miyawaki forest in Nagpur?
              </h2>

              <p className="mt-6 text-[15px] leading-8 text-[var(--muted)] md:text-[19px] md:leading-9">
                A well-planned native forest can convert suitable open land
                into a more diverse and ecologically valuable green space.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {benefits.map((benefit) => (
                <article
                  key={benefit.title}
                  className="border-t border-[var(--line)] bg-[var(--card)] p-6 md:p-8"
                >
                  <h3 className="brand text-[23px] font-semibold text-[var(--green)] md:text-[28px]">
                    {benefit.title}
                  </h3>
                  <p className="mt-4 text-[14px] leading-7 text-[var(--muted)] md:text-[17px] md:leading-8">
                    {benefit.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--cream)] px-5 py-14 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1280px]">
          <SectionLabel>Our Process</SectionLabel>

          <h2 className="brand mt-5 max-w-5xl text-[39px] font-semibold leading-[1.03] tracking-[-0.03em] text-[var(--green)] md:text-[65px]">
            From site assessment to forest establishment.
          </h2>

          <p className="mt-6 max-w-4xl text-[15px] leading-8 text-[var(--muted)] md:text-[20px] md:leading-9">
            Every plantation is planned according to land, soil, local
            ecology, project objectives and maintenance requirements.
          </p>

          <div className="mt-10 grid border-l border-t border-[var(--line)] md:grid-cols-2">
            {process.map((item) => (
              <article
                key={item.step}
                className="relative min-h-[280px] overflow-hidden border-b border-r border-[var(--line)] p-7 md:min-h-[360px] md:p-12"
              >
                <p
                  aria-hidden="true"
                  className="brand absolute right-5 top-2 text-[90px] font-semibold leading-none text-[var(--green)]/5 md:text-[135px]"
                >
                  {item.step}
                </p>

                <div className="relative z-10">
                  <p className="text-[11px] font-extrabold tracking-[0.25em] text-[var(--brown)]">
                    STEP {item.step}
                  </p>
                  <h3 className="brand mt-10 text-[28px] font-semibold text-[var(--green)] md:text-[39px]">
                    {item.title}
                  </h3>
                  <p className="mt-5 max-w-xl text-[14px] leading-7 text-[var(--muted)] md:text-[18px] md:leading-8">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--line)] bg-[var(--cream2)] px-5 py-14 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          <div>
            <SectionLabel>On-Ground Plantation Work</SectionLabel>

            <h2 className="brand mt-5 text-[39px] font-semibold leading-[1.03] tracking-[-0.03em] text-[var(--green)] md:text-[62px]">
              Carefully executed plantation, not just project planning.
            </h2>

            <p className="mt-6 text-[15px] leading-8 text-[var(--muted)] md:text-[19px] md:leading-9">
              Our team supports site preparation, sapling placement, dense
              mixed plantation, mulching and early-stage maintenance. The work
              is carried out according to the approved layout, selected native
              species and actual site conditions.
            </p>

            <p className="mt-5 text-[15px] leading-8 text-[var(--muted)] md:text-[19px] md:leading-9">
              This planned execution helps establish a diverse native forest
              ecosystem rather than only creating a conventional row
              plantation.
            </p>
          </div>

          <figure>
            <div className="overflow-hidden rounded-[28px]">
              <Image
                src="/images/miyawaki-plantation-nagpur.webp"
                alt="ForestnFlora team carrying out Miyawaki plantation work in Nagpur"
                width={1600}
                height={1000}
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="h-[320px] w-full object-cover md:h-[560px]"
              />
            </div>

            <figcaption className="mt-4 text-[12px] leading-6 text-[var(--muted)] md:text-[14px]">
              On-ground native sapling plantation and forest establishment
              work by ForestnFlora Miyawaki.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="bg-[var(--deep)] px-5 py-14 text-white md:px-10 md:py-24">
        <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
          <div className="overflow-hidden rounded-[28px]">
            <Image
              src="/images/project-1.webp"
              alt="Butibori MIDC Miyawaki forest project near Nagpur"
              width={1400}
              height={1000}
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="h-[330px] w-full object-cover md:h-[650px]"
            />
          </div>

          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-[var(--gold)] md:text-[12px]">
              Featured Project · Butibori MIDC
            </p>

            <h2 className="brand mt-5 text-[39px] font-semibold leading-[1.03] tracking-[-0.03em] text-white md:text-[62px]">
              Industrial land transformed into a dense native forest.
            </h2>

            <p className="mt-7 text-[15px] leading-8 text-white/75 md:text-[19px] md:leading-9">
              At Butibori MIDC, ForestnFlora transformed 1,500 square metres
              of industrial land through a planned Miyawaki plantation
              involving 4,638 native saplings across 29 indigenous species.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-5">
              {[
                ["1,500 m²", "Forest area"],
                ["4,638", "Native saplings"],
                ["29", "Indigenous species"],
                ["Approx. 3/m²", "Plantation density"],
              ].map(([value, label]) => (
                <div key={label} className="border-t border-white/20 pt-5">
                  <p className="text-[25px] font-black text-white md:text-[32px]">
                    {value}
                  </p>
                  <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.18em] text-white/55">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/#projects"
              className="mt-9 inline-flex min-h-[52px] items-center justify-center rounded-full border border-white/30 px-8 text-center text-sm font-extrabold text-white transition hover:bg-white hover:text-[var(--deep)]"
            >
              Explore Our Featured Project →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[var(--cream2)] px-5 py-14 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1280px]">
          <SectionLabel>CSR Plantation & Industrial Green Belts</SectionLabel>

          <h2 className="brand mt-5 max-w-5xl text-[39px] font-semibold leading-[1.03] tracking-[-0.03em] text-[var(--green)] md:text-[65px]">
            CSR plantation and industrial green belt development in Nagpur.
          </h2>

          <p className="mt-6 max-w-4xl text-[15px] leading-8 text-[var(--muted)] md:text-[19px] md:leading-9">
            We provide practical native green-development solutions for
            organisations seeking meaningful, measurable and long-term
            environmental work.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <article className="border border-[var(--line)] bg-[var(--card)] p-7 md:p-11">
              <h3 className="brand text-[29px] font-semibold text-[var(--green)] md:text-[40px]">
                CSR Miyawaki Forest Projects
              </h3>

              <p className="mt-5 text-[15px] leading-8 text-[var(--muted)] md:text-[18px]">
                Support for planning, execution, employee participation,
                plantation records, photographs and periodic reporting
                according to the agreed project scope.
              </p>

              <ul className="mt-7 space-y-3 text-[14px] leading-7 text-[var(--text)] md:text-[17px]">
                <li>✓ Site assessment and project planning</li>
                <li>✓ Native species and plantation design</li>
                <li>✓ Employee plantation-drive coordination</li>
                <li>✓ Photo documentation and progress updates</li>
                <li>✓ Establishment care and monitoring support</li>
              </ul>
            </article>

            <article className="border border-[var(--line)] bg-[var(--card)] p-7 md:p-11">
              <h3 className="brand text-[29px] font-semibold text-[var(--green)] md:text-[40px]">
                Industrial Green Belt Development
              </h3>

              <p className="mt-5 text-[15px] leading-8 text-[var(--muted)] md:text-[18px]">
                Suitable industrial land can be assessed for native
                plantation, dense green-cover development and long-term
                ecological restoration.
              </p>

              <ul className="mt-7 space-y-3 text-[14px] leading-7 text-[var(--text)] md:text-[17px]">
                <li>✓ Industrial land assessment</li>
                <li>✓ Native plantation planning</li>
                <li>✓ Miyawaki forest development</li>
                <li>✓ Boundary and avenue plantation</li>
                <li>✓ Maintenance and growth monitoring</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[var(--cream)] px-5 py-14 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <SectionLabel>Why ForestnFlora</SectionLabel>

            <h2 className="brand mt-5 text-[39px] font-semibold leading-[1.03] tracking-[-0.03em] text-[var(--green)] md:text-[62px]">
              Local understanding. Native species. Complete execution.
            </h2>

            <p className="mt-6 text-[15px] leading-8 text-[var(--muted)] md:text-[19px]">
              We focus on forests planned for the site and supported through
              their establishment phase—not only a one-day plantation event.
            </p>
          </div>

          <div className="grid gap-4">
            {whyChooseUs.map((reason) => (
              <div
                key={reason}
                className="flex gap-5 border-b border-[var(--line)] py-5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--green)] text-[16px] font-black text-white">
                  ✓
                </span>
                <p className="pt-1 text-[15px] leading-8 text-[var(--text)] md:text-[18px]">
                  {reason}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-[var(--cream2)] px-5 py-14 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1280px]">
          <SectionLabel>Areas We Serve</SectionLabel>

          <h2 className="brand mt-5 max-w-5xl text-[39px] font-semibold leading-[1.03] tracking-[-0.03em] text-[var(--green)] md:text-[65px]">
            Miyawaki forest projects in Nagpur and nearby regions.
          </h2>

          <p className="mt-6 max-w-4xl text-[15px] leading-8 text-[var(--muted)] md:text-[19px] md:leading-9">
            Our Nagpur-based team serves the city, nearby industrial areas and
            surrounding districts. Larger projects may also be undertaken
            across Maharashtra and selected locations in India.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-[var(--line)] bg-[var(--card)] px-5 py-3 text-[13px] font-bold text-[var(--green)] md:text-[15px]"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--cream)] px-5 py-14 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1050px]">
          <SectionLabel>Frequently Asked Questions</SectionLabel>

          <h2 className="brand mt-5 text-[39px] font-semibold leading-[1.03] tracking-[-0.03em] text-[var(--green)] md:text-[62px]">
            Questions about Miyawaki forest development in Nagpur.
          </h2>

          <div className="mt-10 divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-6">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                  <h3 className="brand text-[21px] font-semibold leading-snug text-[var(--green)] md:text-[28px]">
                    {faq.question}
                  </h3>
                  <span
                    aria-hidden="true"
                    className="mt-1 text-[24px] font-light text-[var(--brown)] transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>

                <p className="mt-5 max-w-4xl pr-8 text-[14px] leading-8 text-[var(--muted)] md:text-[18px]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--green)] px-5 py-14 text-white md:px-10 md:py-24">
        <div className="mx-auto max-w-[1100px] text-center">
          <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-[var(--gold)] md:text-[12px]">
            Start Your Project
          </p>

          <h2 className="brand mt-5 text-[39px] font-semibold leading-[1.02] tracking-[-0.03em] md:text-[67px]">
            Planning a Miyawaki forest in Nagpur?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-[15px] leading-8 text-white/80 md:text-[20px] md:leading-9">
            Share your land location, approximate area and project objective.
            Our team can discuss the site and prepare the next steps.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[54px] items-center justify-center rounded-full bg-[var(--whatsapp)] px-9 text-sm font-extrabold text-white shadow-xl transition hover:bg-[var(--whatsapp-dark)]"
            >
              Enquire on WhatsApp →
            </a>

            <a
              href={`tel:${PHONE_LINK}`}
              className="flex min-h-[54px] items-center justify-center rounded-full border border-white/40 px-9 text-sm font-extrabold text-white transition hover:bg-white hover:text-[var(--green)]"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[var(--deep)] px-5 py-10 text-white/70 md:px-10">
        <div className="mx-auto grid max-w-[1280px] gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="brand text-[25px] font-semibold text-white">
              ForestnFlora Miyawaki
            </p>

            <p className="mt-3 max-w-xl text-[14px] leading-7">
              Miyawaki forest development, CSR plantation, industrial green
              belts, urban forests and native forest restoration in Nagpur,
              Maharashtra and selected project locations.
            </p>
          </div>

          <nav
            aria-label="Footer navigation"
            className="grid gap-3 text-sm md:justify-self-end"
          >
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <Link href="/#projects" className="hover:text-white">
              Featured Project
            </Link>
            <Link href="/#services" className="hover:text-white">
              Services
            </Link>
            <Link href="/#contact" className="hover:text-white">
              Contact ForestnFlora
            </Link>
          </nav>
        </div>

        <div className="mx-auto mt-9 max-w-[1280px] border-t border-white/10 pt-6 text-center text-[13px]">
          © {new Date().getFullYear()} ForestnFlora Miyawaki. All rights
          reserved.
        </div>
      </footer>
    </main>
  );
}