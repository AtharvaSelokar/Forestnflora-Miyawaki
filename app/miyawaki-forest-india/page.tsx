import type { Metadata } from "next";
import Image, { getImageProps } from "next/image";
import Link from "next/link";

const SITE_URL = "https://forestnfloramiyawaki.com";
const PAGE_URL = `${SITE_URL}/miyawaki-forest-india`;
const PHONE_DISPLAY = "+91 8830097072";
const PHONE_LINK = "+918830097072";

const WHATSAPP_URL =
  "https://wa.me/918830097072?text=Hello%20ForestnFlora%20Miyawaki%2C%20I%20want%20to%20discuss%20a%20Miyawaki%20forest%20project%20in%20India.";

export const metadata: Metadata = {
  title: "Miyawaki Forest Development Company in India | ForestnFlora",
  description:
    "ForestnFlora develops dense native Miyawaki forests across India for CSR projects, industries, institutions, urban land and biodiversity restoration.",
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
    title: "Miyawaki Forest Development Company in India | ForestnFlora",
    description:
      "Dense native Miyawaki forests, CSR plantation, urban forests and industrial green belt development for selected projects across India.",
    url: PAGE_URL,
    siteName: "ForestnFlora Miyawaki",
    images: [
      {
        url: `${SITE_URL}/images/hero-desktop.webp`,
        width: 1920,
        height: 1080,
        alt: "Dense native Miyawaki forest development in India",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Miyawaki Forest Development Company in India | ForestnFlora",
    description:
      "Miyawaki plantation, CSR forest projects, native forests and industrial green belt development across India.",
    images: [`${SITE_URL}/images/hero-desktop.webp`],
  },
};

const heroStats = [
  { value: "4,638", label: "Native saplings" },
  { value: "29", label: "Indigenous species" },
  { value: "1,500 m²", label: "Featured project area" },
  { value: "India", label: "Selected project locations" },
];

const projectTypes = [
  {
    title: "CSR Plantation Projects",
    text: "Native forest projects for companies seeking meaningful environmental initiatives, employee engagement, documentation and long-term growth monitoring.",
  },
  {
    title: "Industries & Manufacturing Units",
    text: "Miyawaki forests, industrial green belts and native plantations for suitable factory land, industrial campuses and underutilised open areas.",
  },
  {
    title: "Schools, Colleges & Universities",
    text: "Dense native forests that can support environmental education, biodiversity awareness and greener educational campuses.",
  },
  {
    title: "Institutions & Healthcare Campuses",
    text: "Planned native green spaces for hospitals, institutions, large campuses and suitable open land.",
  },
  {
    title: "Builders, Townships & Campuses",
    text: "Urban dense forests and native green zones for residential projects, townships, commercial campuses and community spaces.",
  },
  {
    title: "Civic & Public Land",
    text: "Native forest development and ecological restoration solutions for suitable urban, public and community land.",
  },
];

const solutions = [
  {
    number: "01",
    title: "Site Assessment & Feasibility",
    text: "We study available land, sunlight, drainage, soil condition, access, water availability, surrounding ecology and project objectives before planning.",
  },
  {
    number: "02",
    title: "Native Forest Planning",
    text: "The proposed forest area, plantation layout, species layers, approximate sapling quantity and implementation approach are planned for the site.",
  },
  {
    number: "03",
    title: "Native Species Selection",
    text: "Locally suitable canopy trees, smaller trees, shrubs and supporting native species are selected after considering regional ecology and site conditions.",
  },
  {
    number: "04",
    title: "Soil Preparation & Enrichment",
    text: "The soil is loosened and improved using suitable organic materials, biomass, moisture-supporting inputs and site-specific amendments.",
  },
  {
    number: "05",
    title: "Dense Plantation & Mulching",
    text: "Saplings are planted in a planned mixed pattern, followed by suitable mulching and early-stage watering support.",
  },
  {
    number: "06",
    title: "Maintenance & Growth Monitoring",
    text: "Watering, weeding, replacement, survival observation and periodic growth monitoring support the forest during establishment.",
  },
];

const benefits = [
  {
    title: "Dense Native Green Cover",
    text: "A diverse, layered plantation can create compact native green cover on suitable industrial, institutional and urban land.",
  },
  {
    title: "Biodiversity Restoration",
    text: "Locally suitable native species can support greater ecological diversity and habitat value for birds, insects and other life.",
  },
  {
    title: "Restoration of Underutilised Land",
    text: "Suitable barren and underutilised land can become a planned native ecosystem with long-term environmental value.",
  },
  {
    title: "CSR Environmental Impact",
    text: "Miyawaki projects can support corporate environmental initiatives through visible plantation activity, documentation and progress monitoring.",
  },
  {
    title: "Urban Forest Development",
    text: "Dense native plantation can be planned for suitable campuses, institutions, residential projects and compact urban spaces.",
  },
  {
    title: "Long-Term Ecological Planning",
    text: "The project is planned around site conditions, native species, establishment needs and continued growth rather than a one-day plantation event.",
  },
];

const executionStages = [
  {
    step: "01",
    title: "Project Discussion",
    text: "We understand the location, approximate land area, organisation, purpose, expected timeline and project objectives.",
  },
  {
    step: "02",
    title: "Site Assessment",
    text: "The site is evaluated for soil, water, sunlight, drainage, access, existing vegetation and practical execution requirements.",
  },
  {
    step: "03",
    title: "Project Planning",
    text: "A plantation plan is developed with the proposed area, species strategy, soil-preparation approach, execution scope and maintenance requirements.",
  },
  {
    step: "04",
    title: "Project Mobilisation",
    text: "Plants, organic materials, labour, equipment and other required resources are planned according to location and project scale.",
  },
  {
    step: "05",
    title: "Plantation Execution",
    text: "Soil preparation, native species plantation, mulching and initial establishment activities are completed according to the agreed scope.",
  },
  {
    step: "06",
    title: "Establishment Support",
    text: "Maintenance, survival observation, gap replacement and growth-monitoring support can be provided according to the project agreement.",
  },
];

const whyChooseUs = [
  "Experience developing a large Miyawaki plantation on industrial land at Butibori MIDC.",
  "Focus on locally suitable native species and site-specific planning.",
  "End-to-end support from site assessment and soil preparation to plantation and establishment care.",
  "CSR plantation documentation, project photographs and progress-reporting support.",
  "Practical planning based on land conditions, project scale, resources and environmental objectives.",
  "Nagpur-based execution experience with availability for selected projects across Maharashtra and India.",
];

const nationalModel = [
  {
    title: "Regional Site Understanding",
    text: "Local climate, soil conditions, regional ecology and suitable native species are considered before finalising the plantation approach.",
  },
  {
    title: "Project Mobilisation",
    text: "Plants, organic inputs, labour, equipment and execution resources are planned according to the location and project scale.",
  },
  {
    title: "Long-Term Establishment Support",
    text: "Maintenance responsibilities, monitoring requirements and project reporting are defined according to the agreed scope.",
  },
];

const projectGallery = [
  {
    src: "/images/miyawaki-soil-preparation-india.webp",
    alt: "Organic soil preparation for a Miyawaki forest project in India",
    caption: "Soil preparation and organic enrichment",
  },
  {
    src: "/images/native-species-plantation-india.webp",
    alt: "Mixed native species plantation for dense forest development in India",
    caption: "Dense plantation with locally suitable native species",
  },
  {
    src: "/images/csr-plantation-project-india.webp",
    alt: "Corporate CSR plantation project and employee participation in India",
    caption: "CSR plantation and employee participation",
  },
  
];

const faqs = [
  {
    question: "What is a Miyawaki forest?",
    answer:
      "A Miyawaki forest is a densely planted native forest developed using a layered combination of locally suitable plant species. The process generally includes site assessment, soil improvement, native species selection, dense plantation, mulching and establishment care.",
  },
  {
    question: "Does ForestnFlora undertake Miyawaki projects across India?",
    answer:
      "ForestnFlora is based in Nagpur, Maharashtra and may undertake selected CSR, industrial, institutional and native forest projects across India depending on project size, location, feasibility and execution requirements.",
  },
  {
    question: "What organisations can develop a Miyawaki forest?",
    answer:
      "Suitable projects may be developed for industries, companies, CSR teams, schools, colleges, universities, institutions, hospitals, builders, townships, residential campuses and civic bodies.",
  },
  {
    question: "Can companies develop Miyawaki forests under CSR initiatives?",
    answer:
      "A native forest project can form part of a company’s environmental or biodiversity initiative. ForestnFlora can support site assessment, planning, execution, project photography, plantation documentation and growth-monitoring reports according to the agreed scope.",
  },
  {
    question: "What is the cost of a Miyawaki forest project in India?",
    answer:
      "Project cost depends on land area, location, soil condition, plantation density, selected species, water availability, site access, protection requirements, logistics and maintenance duration. A project discussion and site assessment are required for an accurate proposal.",
  },
  {
    question: "How much land is required for a Miyawaki plantation?",
    answer:
      "Suitable project size depends on available land, project objectives, access, surrounding conditions and resources. Both compact urban plots and larger industrial or institutional land can be assessed.",
  },
  {
    question: "How are native species selected for different regions?",
    answer:
      "Species selection should consider regional ecology, local climate, soil conditions, rainfall, site characteristics and project objectives. The final mix may include locally suitable canopy trees, smaller trees and shrub-layer species.",
  },
  {
    question: "Do you provide industrial green belt development?",
    answer:
      "Yes. Suitable industrial land may be assessed for Miyawaki forest development, native tree plantation, dense green-cover creation, industrial green belts, boundary plantations and ecological restoration.",
  },
  {
    question: "Do you provide plantation maintenance and growth monitoring?",
    answer:
      "Yes. Depending on the project agreement, support may include watering, weeding, mulching, gap replacement, survival observation, project photographs and periodic growth monitoring.",
  },
  {
    question: "What information is needed to request a proposal?",
    answer:
      "Share the project location, approximate land area, organisation name, intended purpose, expected timeline, available water arrangement and any CSR or environmental objectives.",
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
      name: "Miyawaki Forest India",
      item: PAGE_URL,
    },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${PAGE_URL}#service`,
  name: "Miyawaki Forest Development in India",
  serviceType:
    "Miyawaki forest development, CSR plantation, dense native forest development, urban forests and industrial green belts",
  description:
    "ForestnFlora provides planning, native species selection, soil preparation, dense Miyawaki plantation, maintenance and growth monitoring for selected projects across India.",
  url: PAGE_URL,
  image: [
    `${SITE_URL}/images/hero-desktop.webp`,
    `${SITE_URL}/images/miyawaki-forest-india-established.webp`,
  ],
  areaServed: {
    "@type": "Country",
    name: "India",
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
    alt: "Dense native Miyawaki forest development in India",
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
    <p className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-[var(--brown)] md:text-[12px]">
      {children}
    </p>
  );
}

export default function MiyawakiForestIndiaPage() {
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
                className="absolute right-0 top-12 z-50 grid w-56 overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--card)] p-2 text-sm font-bold shadow-2xl"
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
            <span aria-current="page">Miyawaki Forest India</span>
          </nav>

          <p className="text-[9px] font-extrabold uppercase tracking-[0.25em] text-[var(--gold)] md:text-[12px] md:tracking-[0.36em]">
            Native Forest Development · India
          </p>

          <h1 className="brand mt-4 max-w-[1100px] text-[38px] font-semibold leading-[1] tracking-[-0.04em] text-white drop-shadow-[0_5px_20px_rgba(0,0,0,0.78)] sm:text-[48px] md:mt-5 md:text-[78px]">
            Miyawaki Forest Development for Projects Across India
          </h1>

          <p className="mt-5 max-w-3xl text-[15px] font-medium leading-7 text-white drop-shadow-[0_3px_12px_rgba(0,0,0,0.8)] sm:text-[17px] md:mt-6 md:text-[22px] md:leading-10">
            ForestnFlora plans and develops dense, biodiverse native forests
            for CSR initiatives, industries, institutions, educational
            campuses, builders and suitable urban land across selected
            project locations in India.
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
            <SectionLabel>Miyawaki Forest Company in India</SectionLabel>

            <h2 className="brand mt-5 text-[39px] font-semibold leading-[1.04] tracking-[-0.03em] text-[var(--green)] md:text-[65px]">
              Native forests planned for land, ecology and long-term growth.
            </h2>

            <div className="mt-7 space-y-5 text-[15px] leading-8 text-[var(--muted)] md:text-[19px] md:leading-9">
              <p>
                India has industrial land, institutional campuses,
                educational spaces, residential developments and urban areas
                where native forest development can create meaningful
                long-term ecological value.
              </p>

              <p>
                ForestnFlora provides end-to-end project support including
                discussion, assessment, native species planning, soil
                preparation, dense plantation, maintenance and monitoring.
              </p>

              <p>
                Based in Nagpur, we are available for suitable projects across
                Maharashtra and selected locations in India depending on
                project scale, feasibility and execution requirements.
              </p>

              <p>
                Every forest is planned according to regional ecology, land
                condition, resources and project objectives—not through one
                standard formula for every location.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[26px]">
            <Image
              src="/images/miyawaki-forest-india-established.webp"
              alt="Established dense native Miyawaki forest in India"
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
            Native forest solutions for organisations across India.
          </h2>

          <p className="mt-6 max-w-4xl text-[15px] leading-8 text-[var(--muted)] md:text-[20px] md:leading-9">
            Our Miyawaki plantation and biodiversity restoration solutions are
            designed for organisations seeking meaningful on-ground
            environmental work.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {projectTypes.map((project) => (
              <article
                key={project.title}
                className="border border-[var(--line)] bg-[var(--card)] p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl md:p-10"
              >
                <h3 className="brand text-[27px] font-semibold leading-tight text-[var(--green)] md:text-[33px]">
                  {project.title}
                </h3>
                <p className="mt-4 text-[14px] leading-7 text-[var(--muted)] md:text-[17px] md:leading-8">
                  {project.text}
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
            Complete Miyawaki forest development from planning to establishment.
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
        <div className="mx-auto max-w-[1280px]">
          <SectionLabel>From Planning to Forest</SectionLabel>

          <h2 className="brand mt-5 max-w-5xl text-[39px] font-semibold leading-[1.04] tracking-[-0.03em] text-[var(--green)] md:text-[65px]">
            The on-ground work behind a dense native forest.
          </h2>

          <p className="mt-6 max-w-4xl text-[15px] leading-8 text-[var(--muted)] md:text-[20px] md:leading-9">
            Miyawaki forest development involves detailed site planning, soil
            improvement, native species, plantation execution and continued
            establishment care.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {projectGallery.map((image) => (
              <figure
                key={image.src}
                className="overflow-hidden rounded-[24px] bg-[var(--card)]"
              >
                <div className="overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={1000}
                    height={750}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>

                <figcaption className="p-5 text-[14px] font-semibold text-[var(--green)] md:p-6 md:text-[17px]">
                  {image.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-[var(--cream2)] px-5 py-14 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
            <div>
              <SectionLabel>Project Benefits</SectionLabel>

              <h2 className="brand mt-5 text-[39px] font-semibold leading-[1.04] tracking-[-0.03em] text-[var(--green)] md:text-[62px]">
                Why develop a dense native forest?
              </h2>

              <p className="mt-6 text-[15px] leading-8 text-[var(--muted)] md:text-[19px] md:leading-9">
                A carefully planned native forest can transform suitable open
                land into a more diverse and ecologically valuable ecosystem.
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
          <SectionLabel>India Project Execution</SectionLabel>

          <h2 className="brand mt-5 max-w-5xl text-[39px] font-semibold leading-[1.04] tracking-[-0.03em] text-[var(--green)] md:text-[65px]">
            A practical process for regional and large-scale projects.
          </h2>

          <div className="mt-10 grid border-l border-t border-[var(--line)] md:grid-cols-2">
            {executionStages.map((stage) => (
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
              src="/images/project-1.webp"
              alt="Butibori MIDC industrial Miyawaki forest project by ForestnFlora"
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
          <SectionLabel>Projects Across India</SectionLabel>

          <h2 className="brand mt-5 max-w-5xl text-[39px] font-semibold leading-[1.04] tracking-[-0.03em] text-[var(--green)] md:text-[65px]">
            Regional planning with project-specific execution.
          </h2>

          <p className="mt-6 max-w-4xl text-[15px] leading-8 text-[var(--muted)] md:text-[19px] md:leading-9">
            ForestnFlora is based in Nagpur and is available for selected CSR,
            industrial, institutional and large-scale native forest projects
            across India. Acceptance depends on location, land area,
            feasibility, logistics, scope and maintenance requirements.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {nationalModel.map((item) => (
              <article
                key={item.title}
                className="border border-[var(--line)] bg-[var(--card)] p-7 md:p-10"
              >
                <h3 className="brand text-[27px] font-semibold leading-tight text-[var(--green)] md:text-[33px]">
                  {item.title}
                </h3>
                <p className="mt-5 text-[14px] leading-7 text-[var(--muted)] md:text-[17px] md:leading-8">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--cream)] px-5 py-14 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <SectionLabel>Why ForestnFlora</SectionLabel>

            <h2 className="brand mt-5 text-[39px] font-semibold leading-[1.04] tracking-[-0.03em] text-[var(--green)] md:text-[62px]">
              Native species. Site-specific planning. Complete execution.
            </h2>

            <p className="mt-6 text-[15px] leading-8 text-[var(--muted)] md:text-[19px]">
              We focus on building forests planned around the site and
              supported through establishment—not only completing a one-day
              plantation activity.
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
            Questions about Miyawaki forest development in India.
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
            Explore our services and project experience.
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
              href="/#services"
              className="border border-[var(--line)] bg-[var(--card)] p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="brand text-[25px] font-semibold text-[var(--green)]">
                Forest Development Services
              </h3>
              <p className="mt-3 text-[14px] leading-7 text-[var(--muted)]">
                View Miyawaki forest, CSR plantation, urban forest and
                maintenance services.
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
            Planning a Miyawaki forest project in India?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-[15px] leading-8 text-white/80 md:text-[20px] md:leading-9">
            Share the project location, approximate land area, organisation
            name and project objectives. Our team can discuss the requirements
            and possible next steps.
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
              Miyawaki forest development, CSR plantation, dense native
              forests, industrial green belts, urban forest development and
              ecological restoration for suitable projects across India.
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