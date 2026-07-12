import type { Metadata } from "next";
import Image, { getImageProps } from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

const SITE_URL = "https://forestnfloramiyawaki.com";
const PAGE_URL = `${SITE_URL}/miyawaki-forest-maharashtra`;
const PHONE_DISPLAY = "+91 8830097072";
const PHONE_LINK = "+918830097072";

const WHATSAPP_URL =
  "https://wa.me/918830097072?text=Hello%20ForestnFlora%20Miyawaki%2C%20I%20want%20to%20discuss%20a%20Miyawaki%20forest%20project%20in%20Maharashtra.";

export const metadata: Metadata = {
  title: "Miyawaki Forest in Maharashtra | ForestnFlora",
  description:
    "ForestnFlora develops Miyawaki forests, CSR plantation projects, urban forests and industrial green belts across Maharashtra.",
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
    title: "Miyawaki Forest Development in Maharashtra | ForestnFlora",
    description:
      "Dense native forests, CSR plantation projects, urban forests and industrial green belt development across Maharashtra.",
    url: PAGE_URL,
    siteName: "ForestnFlora Miyawaki",
    images: [
      {
        url: `${SITE_URL}/images/hero-desktop.jpg`,
        width: 1920,
        height: 1080,
        alt: "Dense native Miyawaki forest development in Maharashtra",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Miyawaki Forest Development in Maharashtra | ForestnFlora",
    description:
      "Miyawaki plantation, CSR forest projects and industrial green belt development across Maharashtra.",
    images: [`${SITE_URL}/images/hero-desktop.jpg`],
  },
};

const heroStats = [
  { value: "4,638", label: "Native saplings" },
  { value: "29", label: "Indigenous species" },
  { value: "1,500 m²", label: "Featured project area" },
  { value: "Maharashtra", label: "Regional project focus" },
];

const audiences = [
  {
    number: "01",
    title: "Industries & MIDC Units",
    text: "Dense native forests and industrial green belts for factory campuses, unused plots and long-term environmental initiatives.",
  },
  {
    number: "02",
    title: "CSR Teams & Companies",
    text: "End-to-end CSR plantation support including project planning, plantation execution, documentation and growth monitoring.",
  },
  {
    number: "03",
    title: "Schools & Colleges",
    text: "Native forest spaces that support environmental education, biodiversity awareness and greener campuses.",
  },
  {
    number: "04",
    title: "Institutions & Hospitals",
    text: "Planned native green spaces for institutional land, healthcare campuses and underutilised open areas.",
  },
  {
    number: "05",
    title: "Builders & Townships",
    text: "Urban dense forests and native green zones for residential developments, townships and community spaces.",
  },
  {
    number: "06",
    title: "Civic & Public Land",
    text: "Native tree plantation and ecological restoration for suitable public, community and urban land.",
  },
];

const solutions = [
  {
    number: "01",
    title: "Site Assessment",
    text: "We study land area, soil, drainage, sunlight, water availability, access and surrounding ecology.",
  },
  {
    number: "02",
    title: "Forest Planning",
    text: "The forest area, layout, species layers, sapling requirement and implementation plan are prepared for the site.",
  },
  {
    number: "03",
    title: "Native Species Selection",
    text: "Locally suitable canopy trees, smaller trees, shrubs and supporting native species are selected for the region.",
  },
  {
    number: "04",
    title: "Soil Preparation",
    text: "The soil is loosened and improved using suitable organic inputs, biomass and site-specific amendments.",
  },
  {
    number: "05",
    title: "Dense Plantation",
    text: "Saplings are planted in a planned mixed pattern, followed by mulching and initial establishment care.",
  },
  {
    number: "06",
    title: "Maintenance & Monitoring",
    text: "Watering, weeding, gap replacement, survival observation and growth monitoring support establishment.",
  },
];

const benefits = [
  {
    title: "Dense Native Green Cover",
    text: "A layered native plantation can create compact green cover on suitable industrial, institutional and urban land.",
  },
  {
    title: "Biodiversity Restoration",
    text: "Locally suitable species can support habitat value for birds, insects and other local life.",
  },
  {
    title: "Use of Underutilised Land",
    text: "Suitable unused land can be transformed into a planned native ecosystem with long-term environmental value.",
  },
  {
    title: "CSR Environmental Impact",
    text: "Projects can support corporate environmental initiatives through visible plantation work and progress reporting.",
  },
  {
    title: "Urban Forest Development",
    text: "Dense native forests can be planned for campuses, residential projects, institutions and compact urban spaces.",
  },
  {
    title: "Long-Term Establishment",
    text: "Projects are planned around maintenance, monitoring and continued growth rather than a one-day plantation event.",
  },
];

const projectStages = [
  {
    step: "01",
    title: "Project Discussion",
    text: "We understand the project location, land area, organisation, timeline and environmental objectives.",
  },
  {
    step: "02",
    title: "Site Feasibility",
    text: "The site is assessed for soil, water, sunlight, drainage, access and practical execution requirements.",
  },
  {
    step: "03",
    title: "Regional Planning",
    text: "The species strategy, soil approach, plantation layout and execution scope are prepared for the location.",
  },
  {
    step: "04",
    title: "Resource Mobilisation",
    text: "Plants, organic inputs, labour, equipment and site resources are planned according to location and scale.",
  },
  {
    step: "05",
    title: "Plantation Execution",
    text: "Soil preparation, native plantation, mulching and early-stage support are completed according to the agreed plan.",
  },
  {
    step: "06",
    title: "Establishment Support",
    text: "Maintenance, replacement, survival observation and monitoring can be provided according to the project agreement.",
  },
];

const serviceAreas = [
  "Nagpur",
  "Butibori",
  "Hingna",
  "Wardha",
  "Amravati",
  "Chandrapur",
  "Bhandara",
  "Gondia",
  "Akola",
  "Yavatmal",
  "Pune",
  "Nashik",
  "Mumbai Region",
  "Selected Locations Across Maharashtra",
];

const whyChooseUs = [
  "Nagpur-based execution team with practical experience in Maharashtra conditions.",
  "Focus on locally suitable native species and site-specific plantation planning.",
  "Complete support from assessment and soil preparation to plantation and establishment care.",
  "Experience with industrial land restoration through the Butibori MIDC project.",
  "Project photographs, plantation records and progress-reporting support for CSR stakeholders.",
  "Practical execution planning based on land, logistics, project scale and maintenance requirements.",
];

const faqs = [
  {
    question: "Do you develop Miyawaki forests across Maharashtra?",
    answer:
      "Yes. ForestnFlora is based in Nagpur and may undertake suitable CSR, industrial, institutional and native forest projects across Maharashtra depending on location, project scale, feasibility and execution requirements.",
  },
  {
    question: "What is a Miyawaki forest?",
    answer:
      "A Miyawaki forest is a densely planted native forest developed using a layered combination of locally suitable species. The process generally includes assessment, soil improvement, species selection, dense plantation, mulching and establishment care.",
  },
  {
    question: "What is the cost of a Miyawaki forest in Maharashtra?",
    answer:
      "Project cost depends on land area, soil condition, selected species, plantation density, water availability, site access, protection needs, logistics and maintenance duration. A site discussion and assessment are required for an accurate proposal.",
  },
  {
    question: "Can companies develop Miyawaki forests under CSR?",
    answer:
      "Yes. A native forest project can support a company’s environmental or biodiversity initiative. ForestnFlora can provide planning, execution, documentation, project photography and monitoring support according to the agreed scope.",
  },
  {
    question: "Do you provide industrial green belt development?",
    answer:
      "Yes. Suitable industrial and MIDC land may be assessed for Miyawaki forest development, native tree plantation, boundary plantation, dense green cover and ecological restoration.",
  },
  {
    question: "How are native species selected?",
    answer:
      "Species selection considers regional ecology, soil, rainfall, climate, land condition and project objectives. The final mix may include suitable canopy trees, smaller trees and shrub-layer species.",
  },
  {
    question: "How much land is required?",
    answer:
      "Suitable land area depends on project objectives, access, available resources and surrounding conditions. Both compact urban plots and larger industrial or institutional land can be assessed.",
  },
  {
    question: "Do you provide plantation maintenance?",
    answer:
      "Yes. Depending on the project agreement, support may include watering, weeding, mulching, gap replacement, survival observation and periodic growth monitoring.",
  },
  {
    question: "Which areas of Maharashtra do you serve?",
    answer:
      "ForestnFlora is based in Nagpur and serves suitable projects in Vidarbha and selected locations across Maharashtra. Project acceptance depends on scale, feasibility, logistics and maintenance requirements.",
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
      name: "Miyawaki Forest Maharashtra",
      item: PAGE_URL,
    },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${PAGE_URL}#service`,
  name: "Miyawaki Forest Development in Maharashtra",
  serviceType:
    "Miyawaki forest development, CSR plantation, native forest development and industrial green belt development",
  description:
    "ForestnFlora provides planning, native species selection, soil preparation, dense plantation, maintenance and growth monitoring for suitable projects across Maharashtra.",
  url: PAGE_URL,
  image: [
    `${SITE_URL}/images/hero-desktop.jpg`,
    `${SITE_URL}/images/miyawaki-forest-maharashtra.jpg`,
    `${SITE_URL}/images/project-1.jpg`,
  ],
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Maharashtra",
  },
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
    alt: "Dense native Miyawaki forest development in Maharashtra",
    sizes: "100vw",
    quality: 82,
  };

  const {
    props: { srcSet: desktopImage },
  } = getImageProps({
    ...common,
    src: "/images/hero-desktop.jpg",
    width: 1920,
    height: 1080,
  });

  const {
    props: { srcSet: mobileImage, ...mobileImageProps },
  } = getImageProps({
    ...common,
    src: "/images/hero-mobile.jpg",
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

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-[var(--brown)] md:text-[12px]">
      {children}
    </p>
  );
}

export default function MiyawakiForestMaharashtraPage() {
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
            <Link
              href="/miyawaki-forest-nagpur"
              className="transition-colors hover:text-[var(--green-soft)]"
            >
              Nagpur
            </Link>
            <Link
              href="/miyawaki-forest-india"
              className="transition-colors hover:text-[var(--green-soft)]"
            >
              India
            </Link>
            <Link
              href="/#services"
              className="transition-colors hover:text-[var(--green-soft)]"
            >
              Services
            </Link>
            <Link
              href="/#projects"
              className="transition-colors hover:text-[var(--green-soft)]"
            >
              Projects
            </Link>
            <Link
              href="/#contact"
              className="transition-colors hover:text-[var(--green-soft)]"
            >
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
                className="absolute right-0 top-12 z-50 grid w-60 overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--card)] p-2 text-sm font-bold shadow-2xl"
              >
                <Link href="/" className="rounded-xl px-4 py-3 hover:bg-[var(--cream2)]">
                  Home
                </Link>
                <Link
                  href="/miyawaki-forest-nagpur"
                  className="rounded-xl px-4 py-3 hover:bg-[var(--cream2)]"
                >
                  Miyawaki Forest Nagpur
                </Link>
                <Link
                  href="/miyawaki-forest-india"
                  className="rounded-xl px-4 py-3 hover:bg-[var(--cream2)]"
                >
                  Miyawaki Forest India
                </Link>
                <Link
                  href="/#services"
                  className="rounded-xl px-4 py-3 hover:bg-[var(--cream2)]"
                >
                  Services
                </Link>
                <Link
                  href="/#projects"
                  className="rounded-xl px-4 py-3 hover:bg-[var(--cream2)]"
                >
                  Projects
                </Link>
                <Link
                  href="/#contact"
                  className="rounded-xl px-4 py-3 hover:bg-[var(--cream2)]"
                >
                  Contact
                </Link>
              </nav>
            </details>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 rounded-full bg-[var(--whatsapp)] px-4 py-2 text-[11px] font-extrabold text-white shadow-sm transition hover:bg-[var(--whatsapp-dark)] md:px-6 md:text-sm"
            >
              Get Proposal
            </a>
          </div>
        </div>
      </header>

      <section className="relative isolate min-h-[780px] overflow-hidden bg-[var(--deep)] sm:min-h-[740px] md:min-h-[780px]">
        <HeroImage />
        <div className="absolute inset-0 bg-gradient-to-b from-[#06180f]/20 via-[#06180f]/42 to-[#06180f]/95" />

        <div className="relative z-10 mx-auto flex min-h-[780px] max-w-[1440px] flex-col justify-end px-5 pb-8 pt-20 sm:min-h-[740px] md:min-h-[780px] md:px-10 md:pb-16">
          <nav
            aria-label="Breadcrumb"
            className="mb-4 flex items-center gap-2 text-[10px] font-semibold text-white/75 md:mb-6 md:text-[12px]"
          >
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Miyawaki Forest Maharashtra</span>
          </nav>

          <p className="text-[9px] font-extrabold uppercase tracking-[0.25em] text-[var(--gold)] md:text-[12px] md:tracking-[0.36em]">
            Native Forest Development · Maharashtra
          </p>

          <h1 className="brand mt-4 max-w-[1100px] text-[38px] font-semibold leading-[1] tracking-[-0.04em] text-white drop-shadow-[0_5px_20px_rgba(0,0,0,0.78)] sm:text-[48px] md:mt-5 md:text-[78px]">
            Miyawaki Forest Development Across Maharashtra
          </h1>

          <p className="mt-5 max-w-3xl text-[15px] font-medium leading-7 text-white drop-shadow-[0_3px_12px_rgba(0,0,0,0.8)] sm:text-[17px] md:mt-6 md:text-[22px] md:leading-10">
            ForestnFlora plans and develops dense native forests for CSR
            initiatives, industries, institutions, educational campuses,
            builders and suitable urban land across Maharashtra.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row md:mt-7">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[52px] w-full items-center justify-center rounded-full bg-[var(--whatsapp)] px-7 text-sm font-extrabold text-white shadow-xl transition hover:bg-[var(--whatsapp-dark)] sm:w-auto"
            >
              Discuss Your Project →
            </a>

            <a
              href={`tel:${PHONE_LINK}`}
              className="flex min-h-[52px] w-full items-center justify-center rounded-full border border-white bg-white px-7 text-sm font-extrabold text-[var(--green)] shadow-xl transition hover:bg-[var(--cream)] sm:w-auto"
            >
              Call {PHONE_DISPLAY}
            </a>
          </div>

          <p className="mt-7 text-[9px] font-extrabold uppercase tracking-[0.22em] text-white/70 md:text-[11px]">
            Butibori MIDC Featured Project
          </p>

          <div className="mt-3 grid grid-cols-2 gap-x-5 gap-y-5 border-t border-white/35 pt-5 md:max-w-5xl md:grid-cols-4 md:pt-6">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <p className="text-[23px] font-black leading-tight text-white md:text-[34px]">
                  {stat.value}
                </p>
                <p className="mt-2 text-[8px] font-bold uppercase tracking-[0.16em] text-white/75 md:text-[10px]">
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
            <SectionLabel>Miyawaki Forest Company in Maharashtra</SectionLabel>

            <h2 className="brand mt-5 text-[39px] font-semibold leading-[1.04] tracking-[-0.03em] text-[var(--green)] md:text-[65px]">
              Native forests planned for Maharashtra’s land and ecology.
            </h2>

            <div className="mt-7 space-y-5 text-[15px] leading-8 text-[var(--muted)] md:text-[19px] md:leading-9">
              <p>
                Maharashtra has industrial estates, institutions,
                educational campuses, residential developments and urban land
                where planned native forests can create long-term ecological
                value.
              </p>

              <p>
                ForestnFlora provides complete support from site discussion and
                assessment to native species selection, soil preparation,
                plantation, establishment care and monitoring.
              </p>

              <p>
                Each project is planned according to regional ecology, soil,
                rainfall, water availability, project objectives and
                maintenance requirements.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[26px]">
            <Image
              src="/images/miyawaki-forest-maharashtra.jpg"
              alt="Dense native Miyawaki forest development in Maharashtra"
              width={1400}
              height={1000}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-[340px] w-full object-cover md:h-[640px]"
            />
          </div>
        </div>
      </section>

      <section className="bg-[var(--cream)] px-5 py-14 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1280px]">
          <SectionLabel>Who We Work With</SectionLabel>

          <h2 className="brand mt-5 max-w-5xl text-[39px] font-semibold leading-[1.04] tracking-[-0.03em] text-[var(--green)] md:text-[65px]">
            Native forest solutions for organisations across Maharashtra.
          </h2>

          <p className="mt-6 max-w-4xl text-[15px] leading-8 text-[var(--muted)] md:text-[20px] md:leading-9">
            We support organisations seeking meaningful, measurable and
            long-term environmental work.
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

                <h3 className="brand mt-5 text-[27px] font-semibold leading-tight text-[var(--green)] md:text-[33px]">
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
          <SectionLabel>Complete Project Solutions</SectionLabel>

          <h2 className="brand mt-5 max-w-5xl text-[39px] font-semibold leading-[1.04] tracking-[-0.03em] text-[var(--green)] md:text-[65px]">
            From site assessment to forest establishment.
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {solutions.map((solution) => (
              <article
                key={solution.number}
                className="relative overflow-hidden border border-[var(--line)] bg-[var(--card)] p-7 md:p-10"
              >
                <p
                  aria-hidden="true"
                  className="brand absolute right-3 top-[-15px] text-[105px] font-semibold leading-none text-[var(--green)]/5"
                >
                  {solution.number}
                </p>

                <p className="relative z-10 text-[10px] font-extrabold tracking-[0.24em] text-[var(--brown)]">
                  STEP {solution.number}
                </p>

                <h3 className="brand relative z-10 mt-7 text-[27px] font-semibold leading-tight text-[var(--green)] md:text-[34px]">
                  {solution.title}
                </h3>

                <p className="relative z-10 mt-4 text-[14px] leading-7 text-[var(--muted)] md:text-[17px] md:leading-8">
                  {solution.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--cream)] px-5 py-14 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          <div>
            <SectionLabel>On-Ground Plantation Work</SectionLabel>

            <h2 className="brand mt-5 text-[39px] font-semibold leading-[1.04] tracking-[-0.03em] text-[var(--green)] md:text-[62px]">
              Planned execution for real forest establishment.
            </h2>

            <p className="mt-6 text-[15px] leading-8 text-[var(--muted)] md:text-[19px] md:leading-9">
              Our team supports soil preparation, sapling placement, dense
              mixed plantation, mulching and early-stage maintenance according
              to the approved plan and actual site conditions.
            </p>

            <p className="mt-5 text-[15px] leading-8 text-[var(--muted)] md:text-[19px] md:leading-9">
              The goal is to establish a diverse native ecosystem rather than
              only complete a conventional one-day plantation event.
            </p>
          </div>

          <figure>
            <div className="overflow-hidden rounded-[26px]">
              <Image
                src="/images/miyawaki-plantation-maharashtra.jpg"
                alt="ForestnFlora carrying out Miyawaki plantation work in Maharashtra"
                width={1600}
                height={1000}
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="h-[320px] w-full object-cover md:h-[560px]"
              />
            </div>

            <figcaption className="mt-4 text-[12px] leading-6 text-[var(--muted)] md:text-[14px]">
              Native sapling plantation and forest establishment work by
              ForestnFlora Miyawaki.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-[var(--cream2)] px-5 py-14 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
            <div>
              <SectionLabel>Project Benefits</SectionLabel>

              <h2 className="brand mt-5 text-[39px] font-semibold leading-[1.04] tracking-[-0.03em] text-[var(--green)] md:text-[62px]">
                Why develop a Miyawaki forest in Maharashtra?
              </h2>

              <p className="mt-6 text-[15px] leading-8 text-[var(--muted)] md:text-[19px] md:leading-9">
                A carefully planned native forest can convert suitable open
                land into a more diverse and ecologically valuable green space.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {benefits.map((benefit) => (
                <article
                  key={benefit.title}
                  className="border-t border-[var(--line)] bg-[var(--card)] p-6 md:p-8"
                >
                  <h3 className="brand text-[24px] font-semibold leading-tight text-[var(--green)] md:text-[29px]">
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
          <SectionLabel>Maharashtra Project Execution</SectionLabel>

          <h2 className="brand mt-5 max-w-5xl text-[39px] font-semibold leading-[1.04] tracking-[-0.03em] text-[var(--green)] md:text-[65px]">
            A practical process for regional projects.
          </h2>

          <div className="mt-10 grid border-l border-t border-[var(--line)] md:grid-cols-2">
            {projectStages.map((stage) => (
              <article
                key={stage.step}
                className="relative min-h-[265px] overflow-hidden border-b border-r border-[var(--line)] p-7 md:min-h-[355px] md:p-12"
              >
                <p
                  aria-hidden="true"
                  className="brand absolute right-5 top-1 text-[90px] font-semibold leading-none text-[var(--green)]/5 md:text-[135px]"
                >
                  {stage.step}
                </p>

                <div className="relative z-10">
                  <p className="text-[10px] font-extrabold tracking-[0.24em] text-[var(--brown)]">
                    STEP {stage.step}
                  </p>

                  <h3 className="brand mt-9 text-[28px] font-semibold leading-tight text-[var(--green)] md:text-[39px]">
                    {stage.title}
                  </h3>

                  <p className="mt-5 max-w-xl text-[14px] leading-7 text-[var(--muted)] md:text-[18px] md:leading-8">
                    {stage.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--deep)] px-5 py-14 text-white md:px-10 md:py-24">
        <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
          <div className="overflow-hidden rounded-[26px]">
            <Image
              src="/images/project-1.jpg"
              alt="Butibori MIDC Miyawaki forest project in Maharashtra"
              width={1400}
              height={1000}
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="h-[340px] w-full object-cover md:h-[650px]"
            />
          </div>

          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-[var(--gold)] md:text-[12px]">
              Project Proof · Butibori MIDC
            </p>

            <h2 className="brand mt-5 text-[39px] font-semibold leading-[1.04] tracking-[-0.03em] text-white md:text-[62px]">
              Industrial land transformed into a dense native forest.
            </h2>

            <p className="mt-7 text-[15px] leading-8 text-white/75 md:text-[19px] md:leading-9">
              At Butibori MIDC near Nagpur, ForestnFlora transformed 1,500
              square metres of industrial land through a planned Miyawaki
              plantation involving 4,638 native saplings across 29 indigenous
              species.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-5">
              {[
                ["1,500 m²", "Forest area"],
                ["4,638", "Native saplings"],
                ["29", "Indigenous species"],
                ["Approx. 3/m²", "Plantation density"],
              ].map(([value, label]) => (
                <div key={label} className="border-t border-white/20 pt-5">
                  <p className="text-[24px] font-black text-white md:text-[32px]">
                    {value}
                  </p>

                  <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.17em] text-white/55">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/#projects"
              className="mt-9 inline-flex min-h-[52px] w-full items-center justify-center rounded-full border border-white/30 px-8 text-center text-sm font-extrabold text-white transition hover:bg-white hover:text-[var(--deep)] sm:w-auto"
            >
              Explore Our Featured Project →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[var(--cream2)] px-5 py-14 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1280px]">
          <SectionLabel>Areas We Serve</SectionLabel>

          <h2 className="brand mt-5 max-w-5xl text-[39px] font-semibold leading-[1.04] tracking-[-0.03em] text-[var(--green)] md:text-[65px]">
            Miyawaki forest projects across Maharashtra.
          </h2>

          <p className="mt-6 max-w-4xl text-[15px] leading-8 text-[var(--muted)] md:text-[19px] md:leading-9">
            ForestnFlora is based in Nagpur and serves suitable projects in
            Vidarbha and selected locations across Maharashtra. Project
            acceptance depends on land area, location, feasibility, logistics
            and maintenance requirements.
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
        <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <SectionLabel>Why ForestnFlora</SectionLabel>

            <h2 className="brand mt-5 text-[39px] font-semibold leading-[1.04] tracking-[-0.03em] text-[var(--green)] md:text-[62px]">
              Maharashtra experience. Native species. Complete execution.
            </h2>

            <p className="mt-6 text-[15px] leading-8 text-[var(--muted)] md:text-[19px]">
              We focus on building forests planned around the site and
              supported through establishment—not only a one-day plantation
              event.
            </p>
          </div>

          <div className="grid gap-3">
            {whyChooseUs.map((reason) => (
              <div
                key={reason}
                className="flex gap-4 border-b border-[var(--line)] py-5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--whatsapp)] text-[16px] font-black text-white">
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
        <div className="mx-auto max-w-[1050px]">
          <SectionLabel>Frequently Asked Questions</SectionLabel>

          <h2 className="brand mt-5 text-[39px] font-semibold leading-[1.04] tracking-[-0.03em] text-[var(--green)] md:text-[62px]">
            Questions about Miyawaki forests in Maharashtra.
          </h2>

          <div className="mt-10 divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-6">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-5">
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

                <p className="mt-5 max-w-4xl pr-7 text-[14px] leading-8 text-[var(--muted)] md:text-[18px]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--cream)] px-5 py-14 md:px-10 md:py-20">
        <div className="mx-auto max-w-[1280px]">
          <SectionLabel>Explore ForestnFlora</SectionLabel>

          <h2 className="brand mt-5 max-w-4xl text-[38px] font-semibold leading-[1.04] tracking-[-0.03em] text-[var(--green)] md:text-[58px]">
            Explore our local and national service pages.
          </h2>

          <div className="mt-9 grid gap-4 md:grid-cols-3">
            <Link
              href="/miyawaki-forest-nagpur"
              className="border border-[var(--line)] bg-[var(--card)] p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="brand text-[25px] font-semibold text-[var(--green)]">
                Miyawaki Forest in Nagpur
              </h3>
              <p className="mt-3 text-[14px] leading-7 text-[var(--muted)]">
                Explore local Miyawaki plantation and forest development
                services in Nagpur.
              </p>
            </Link>

            <Link
              href="/miyawaki-forest-india"
              className="border border-[var(--line)] bg-[var(--card)] p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="brand text-[25px] font-semibold text-[var(--green)]">
                Miyawaki Forest in India
              </h3>
              <p className="mt-3 text-[14px] leading-7 text-[var(--muted)]">
                View ForestnFlora’s India-level Miyawaki forest development
                services.
              </p>
            </Link>

            <Link
              href="/#projects"
              className="border border-[var(--line)] bg-[var(--card)] p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="brand text-[25px] font-semibold text-[var(--green)]">
                Butibori MIDC Project
              </h3>
              <p className="mt-3 text-[14px] leading-7 text-[var(--muted)]">
                See ForestnFlora’s featured industrial Miyawaki forest project
                near Nagpur.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[var(--green)] px-5 py-14 text-white md:px-10 md:py-24">
        <div className="mx-auto max-w-[1100px] text-center">
          <p className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-[var(--gold)] md:text-[12px]">
            Start Your Project
          </p>

          <h2 className="brand mt-5 text-[39px] font-semibold leading-[1.03] tracking-[-0.03em] md:text-[67px]">
            Planning a Miyawaki forest in Maharashtra?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-[15px] leading-8 text-white/80 md:text-[20px] md:leading-9">
            Share the project location, approximate land area, organisation
            name and objectives. Our team can discuss the requirements and
            possible next steps.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[54px] w-full items-center justify-center rounded-full bg-[var(--whatsapp)] px-9 text-sm font-extrabold text-white shadow-xl transition hover:bg-[var(--whatsapp-dark)] sm:w-auto"
            >
              Enquire on WhatsApp →
            </a>

            <a
              href={`tel:${PHONE_LINK}`}
              className="flex min-h-[54px] w-full items-center justify-center rounded-full border border-white bg-white px-9 text-sm font-extrabold text-[var(--green)] transition hover:bg-[var(--cream)] sm:w-auto"
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
              belts, urban forests and native forest restoration in
              Maharashtra and selected locations across India.
            </p>
          </div>

          <nav
            aria-label="Footer navigation"
            className="grid gap-3 text-sm md:justify-self-end"
          >
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <Link href="/miyawaki-forest-nagpur" className="hover:text-white">
              Miyawaki Forest Nagpur
            </Link>
            <Link href="/miyawaki-forest-india" className="hover:text-white">
              Miyawaki Forest India
            </Link>
            <Link href="/#services" className="hover:text-white">
              Services
            </Link>
            <Link href="/#projects" className="hover:text-white">
              Featured Project
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