import type { Metadata } from "next";
import Image, { getImageProps } from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

const SITE_URL = "https://forestnfloramiyawaki.com";
const PAGE_URL = `${SITE_URL}/csr-tree-plantation-nagpur`;
const PHONE_DISPLAY = "+91 8830097072";
const PHONE_LINK = "+918830097072";

const WHATSAPP_URL =
  "https://wa.me/918830097072?text=Hello%20ForestnFlora%20Miyawaki%2C%20I%20want%20to%20discuss%20a%20CSR%20tree%20plantation%20project%20in%20Nagpur.";

export const metadata: Metadata = {
  title: "CSR Tree Plantation in Nagpur | ForestnFlora",
  description:
    "ForestnFlora provides CSR tree plantation, Miyawaki forest projects, employee plantation drives, documentation and growth monitoring in Nagpur.",
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
    title: "CSR Tree Plantation in Nagpur | ForestnFlora Miyawaki",
    description:
      "CSR plantation projects, employee plantation drives, Miyawaki forests and long-term growth monitoring for companies in Nagpur.",
    url: PAGE_URL,
    siteName: "ForestnFlora Miyawaki",
    images: [
      {
        url: `${SITE_URL}/images/csr-tree-plantation-nagpur-hero.webp`,
        width: 1920,
        height: 1080,
        alt: "CSR tree plantation project in Nagpur by ForestnFlora Miyawaki",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CSR Tree Plantation in Nagpur | ForestnFlora",
    description:
      "CSR plantation, employee engagement, Miyawaki forest development and project reporting in Nagpur.",
    images: [`${SITE_URL}/images/csr-tree-plantation-nagpur-hero.webp`],
  },
};

const heroStats = [
  { value: "4,638", label: "Native saplings" },
  { value: "29", label: "Indigenous species" },
  { value: "1,500 m²", label: "Featured project area" },
  { value: "Nagpur", label: "Local execution base" },
];

const csrServices = [
  {
    number: "01",
    title: "CSR Miyawaki Forest Projects",
    text: "Dense native forest projects planned for companies seeking long-term environmental and biodiversity initiatives.",
  },
  {
    number: "02",
    title: "Employee Plantation Drives",
    text: "Structured plantation activities for employees with site coordination, sapling placement and on-ground execution support.",
  },
  {
    number: "03",
    title: "Industrial Green Belt Projects",
    text: "Native tree plantation and dense green-cover development for suitable industrial, MIDC and factory land.",
  },
  {
    number: "04",
    title: "Institutional Plantation",
    text: "CSR-supported plantation projects for schools, colleges, hospitals, institutions and public-interest campuses.",
  },
  {
    number: "05",
    title: "Project Documentation",
    text: "Plantation records, project photographs, species details and progress updates according to the agreed project scope.",
  },
  {
    number: "06",
    title: "Maintenance & Monitoring",
    text: "Watering, weeding, replacement, survival checks and growth monitoring during the establishment period.",
  },
];

const deliverables = [
  "Initial project discussion and site feasibility review",
  "Site assessment and plantation-area planning",
  "Locally suitable native species strategy",
  "Soil preparation and plantation execution",
  "Employee participation support, where required",
  "Project photographs and plantation records",
  "Maintenance and survival monitoring",
  "Periodic progress updates according to scope",
];

const process = [
  {
    step: "01",
    title: "Project Brief",
    text: "We understand the company, location, land area, CSR objective, expected timeline and participation requirements.",
  },
  {
    step: "02",
    title: "Site Assessment",
    text: "The site is reviewed for soil, water, sunlight, drainage, access, existing vegetation and execution feasibility.",
  },
  {
    step: "03",
    title: "CSR Project Plan",
    text: "We prepare the plantation approach, proposed area, species strategy, execution scope and maintenance requirements.",
  },
  {
    step: "04",
    title: "Resource Mobilisation",
    text: "Saplings, organic inputs, labour, tools and plantation resources are arranged according to the project scale.",
  },
  {
    step: "05",
    title: "Plantation Execution",
    text: "Soil preparation, native species plantation, mulching and employee engagement activities are completed as agreed.",
  },
  {
    step: "06",
    title: "Monitoring & Reporting",
    text: "Maintenance, survival observation, replacement support and project updates are provided according to the agreement.",
  },
];

const benefits = [
  {
    title: "Visible Environmental Action",
    text: "A well-executed plantation creates a clear and measurable on-ground environmental initiative.",
  },
  {
    title: "Employee Engagement",
    text: "Plantation activities can involve employees in a structured and meaningful environmental programme.",
  },
  {
    title: "Native Biodiversity",
    text: "Locally suitable native species can support habitat value for birds, insects and other local life.",
  },
  {
    title: "Long-Term Green Cover",
    text: "Dense native plantation can help convert suitable open land into a growing ecological asset.",
  },
  {
    title: "Project Documentation",
    text: "Photographs, plantation records and updates help CSR stakeholders understand project progress.",
  },
  {
    title: "Establishment Support",
    text: "Maintenance and monitoring help the plantation during its most important early-growth stage.",
  },
];

const gallery = [
  {
    src: "/images/service-2.webp",
    alt: "Employees participating in a CSR tree plantation drive in Nagpur",
    caption: "Employee plantation drive and on-ground participation",
  },
  {
    src: "/images/project-1.webp",
    alt: "Dense native CSR Miyawaki forest project in Nagpur",
    caption: "CSR Miyawaki forest and dense native plantation",
  },
  {
    src: "/images/csr-plantation-project-india1.webp",
    alt: "CSR plantation growth monitoring and documentation in Nagpur",
    caption: "Plantation monitoring, documentation and progress updates",
  },
];

const whyChooseUs = [
  "Nagpur-based execution team with local project understanding.",
  "Experience with industrial Miyawaki plantation at Butibori MIDC.",
  "Focus on locally suitable native species and site-specific planning.",
  "Complete support from project planning to plantation and establishment care.",
  "Project photographs, plantation records and reporting support.",
  "Practical planning based on land condition, resources, logistics and CSR goals.",
];

const faqs = [
  {
    question: "Do you provide CSR tree plantation services in Nagpur?",
    answer:
      "Yes. ForestnFlora provides CSR plantation planning, native species selection, soil preparation, plantation execution, employee engagement support, documentation and growth monitoring in Nagpur.",
  },
  {
    question: "Can a Miyawaki forest be developed as a CSR project?",
    answer:
      "Yes. A Miyawaki forest can form part of a company’s environmental or biodiversity initiative. The project can include planning, native plantation, documentation, employee participation and monitoring according to the agreed scope.",
  },
  {
    question: "What is the cost of a CSR plantation project in Nagpur?",
    answer:
      "Cost depends on land area, soil condition, selected species, plantation density, water availability, site access, protection needs, employee engagement requirements and maintenance duration. A site discussion is required for an accurate proposal.",
  },
  {
    question: "Do you organise employee plantation drives?",
    answer:
      "Yes. Employee plantation activities can be planned with site preparation, sapling placement, participation flow, supervision and photography according to the project requirements.",
  },
  {
    question: "What documentation is provided?",
    answer:
      "Depending on the agreed scope, documentation may include plantation photographs, species details, sapling counts, project-area details and periodic progress updates.",
  },
  {
    question: "Do you provide plantation maintenance?",
    answer:
      "Yes. Maintenance support may include watering, weeding, mulching, gap replacement, survival observation and growth monitoring according to the project agreement.",
  },
  {
    question: "Can CSR plantation be done on industrial land?",
    answer:
      "Yes. Suitable industrial and MIDC land can be assessed for Miyawaki forest development, native plantation, boundary plantation and industrial green belt creation.",
  },
  {
    question: "How much land is required?",
    answer:
      "The suitable area depends on the project objective, available land, access, water, surrounding conditions and budget. Both compact plots and larger industrial or institutional land can be assessed.",
  },
  {
    question: "Which areas do you serve?",
    answer:
      "ForestnFlora is based in Nagpur and serves Nagpur city, Butibori, Hingna, MIHAN, nearby industrial areas and selected projects across Maharashtra.",
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
      name: "CSR Tree Plantation Nagpur",
      item: PAGE_URL,
    },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${PAGE_URL}#service`,
  name: "CSR Tree Plantation Services in Nagpur",
  serviceType:
    "CSR tree plantation, CSR Miyawaki forest development, employee plantation drives and industrial green belt development",
  description:
    "ForestnFlora provides CSR tree plantation planning, native species selection, plantation execution, employee engagement, documentation and monitoring in Nagpur.",
  url: PAGE_URL,
  image: gallery.map((image) => `${SITE_URL}${image.src}`),
  areaServed: [
    {
      "@type": "City",
      name: "Nagpur",
    },
    {
      "@type": "AdministrativeArea",
      name: "Maharashtra",
    },
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
    alt: "CSR tree plantation project in Nagpur by ForestnFlora Miyawaki",
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

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-[var(--brown)] md:text-[12px]">
      {children}
    </p>
  );
}

export default function CsrTreePlantationNagpurPage() {
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
              href="/miyawaki-forest-maharashtra"
              className="transition-colors hover:text-[var(--green-soft)]"
            >
              Maharashtra
            </Link>
            <Link
              href="/miyawaki-forest-india"
              className="transition-colors hover:text-[var(--green-soft)]"
            >
              India
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
                  href="/miyawaki-forest-maharashtra"
                  className="rounded-xl px-4 py-3 hover:bg-[var(--cream2)]"
                >
                  Miyawaki Forest Maharashtra
                </Link>
                <Link
                  href="/miyawaki-forest-india"
                  className="rounded-xl px-4 py-3 hover:bg-[var(--cream2)]"
                >
                  Miyawaki Forest India
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

      <section className="relative isolate min-h-[790px] overflow-hidden bg-[var(--deep)] sm:min-h-[750px] md:min-h-[790px]">
        <HeroImage />
        <div className="absolute inset-0 bg-gradient-to-b from-[#06180f]/20 via-[#06180f]/42 to-[#06180f]/95" />

        <div className="relative z-10 mx-auto flex min-h-[790px] max-w-[1440px] flex-col justify-end px-5 pb-8 pt-20 sm:min-h-[750px] md:min-h-[790px] md:px-10 md:pb-16">
          <nav
            aria-label="Breadcrumb"
            className="mb-4 flex items-center gap-2 text-[10px] font-semibold text-white/75 md:mb-6 md:text-[12px]"
          >
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">CSR Tree Plantation Nagpur</span>
          </nav>

          <p className="text-[9px] font-extrabold uppercase tracking-[0.25em] text-[var(--gold)] md:text-[12px] md:tracking-[0.36em]">
            Corporate Plantation Projects · Nagpur
          </p>

          <h1 className="brand mt-4 max-w-[1120px] text-[37px] font-semibold leading-[1] tracking-[-0.04em] text-white drop-shadow-[0_5px_20px_rgba(0,0,0,0.78)] sm:text-[48px] md:mt-5 md:text-[78px]">
            CSR Tree Plantation Projects in Nagpur
          </h1>

          <p className="mt-5 max-w-3xl text-[15px] font-medium leading-7 text-white drop-shadow-[0_3px_12px_rgba(0,0,0,0.8)] sm:text-[17px] md:mt-6 md:text-[22px] md:leading-10">
            ForestnFlora plans and executes CSR plantation projects,
            employee plantation drives, Miyawaki forests and industrial green
            belts for companies and institutions in Nagpur.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row md:mt-7">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[52px] w-full items-center justify-center rounded-full bg-[var(--whatsapp)] px-7 text-sm font-extrabold text-white shadow-xl transition hover:bg-[var(--whatsapp-dark)] sm:w-auto"
            >
              Request CSR Proposal →
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
            <SectionLabel>CSR Plantation Company in Nagpur</SectionLabel>

            <h2 className="brand mt-5 text-[39px] font-semibold leading-[1.04] tracking-[-0.03em] text-[var(--green)] md:text-[65px]">
              Corporate plantation projects planned for measurable impact.
            </h2>

            <div className="mt-7 space-y-5 text-[15px] leading-8 text-[var(--muted)] md:text-[19px] md:leading-9">
              <p>
                ForestnFlora supports companies, CSR teams and institutions
                with practical plantation projects designed around the site,
                environmental objectives and long-term establishment needs.
              </p>

              <p>
                Our services can include site assessment, native species
                planning, soil preparation, plantation execution, employee
                participation, project photography and growth monitoring.
              </p>

              <p>
                Every CSR tree plantation project is planned according to land
                condition, available water, access, plantation goals and the
                agreed maintenance scope.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[26px]">
            <Image
              src="/images/corporate-planation.webp"
              alt="Corporate CSR tree plantation project in Nagpur"
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
          <SectionLabel>CSR Plantation Services</SectionLabel>

          <h2 className="brand mt-5 max-w-5xl text-[39px] font-semibold leading-[1.04] tracking-[-0.03em] text-[var(--green)] md:text-[65px]">
            Complete CSR plantation solutions for companies in Nagpur.
          </h2>

          <p className="mt-6 max-w-4xl text-[15px] leading-8 text-[var(--muted)] md:text-[20px] md:leading-9">
            From plantation planning to monitoring, each service is structured
            around the project site and CSR objectives.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {csrServices.map((service) => (
              <article
                key={service.number}
                className="relative overflow-hidden border border-[var(--line)] bg-[var(--card)] p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl md:p-10"
              >
                <p
                  aria-hidden="true"
                  className="brand absolute right-3 top-[-15px] text-[105px] font-semibold leading-none text-[var(--green)]/5"
                >
                  {service.number}
                </p>

                <p className="relative z-10 text-[10px] font-extrabold tracking-[0.24em] text-[var(--brown)]">
                  SERVICE {service.number}
                </p>

                <h3 className="brand relative z-10 mt-7 text-[27px] font-semibold leading-tight text-[var(--green)] md:text-[34px]">
                  {service.title}
                </h3>

                <p className="relative z-10 mt-4 text-[14px] leading-7 text-[var(--muted)] md:text-[17px] md:leading-8">
                  {service.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-[var(--cream2)] px-5 py-14 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <SectionLabel>CSR Project Deliverables</SectionLabel>

            <h2 className="brand mt-5 text-[39px] font-semibold leading-[1.04] tracking-[-0.03em] text-[var(--green)] md:text-[62px]">
              A clear scope from planning to project reporting.
            </h2>

            <p className="mt-6 text-[15px] leading-8 text-[var(--muted)] md:text-[19px] md:leading-9">
              Deliverables are finalised according to project location,
              plantation type, budget, employee involvement and maintenance
              requirements.
            </p>
          </div>

          <div className="grid gap-3">
            {deliverables.map((item) => (
              <div
                key={item}
                className="flex gap-4 border-b border-[var(--line)] py-5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--green)] text-[16px] font-black text-white">
                  ✓
                </span>

                <p className="pt-1 text-[15px] leading-8 text-[var(--text)] md:text-[18px]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--cream)] px-5 py-14 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1280px]">
          <SectionLabel>CSR Project Gallery</SectionLabel>

          <h2 className="brand mt-5 max-w-5xl text-[39px] font-semibold leading-[1.04] tracking-[-0.03em] text-[var(--green)] md:text-[65px]">
            Show the complete CSR plantation journey.
          </h2>

          <p className="mt-6 max-w-4xl text-[15px] leading-8 text-[var(--muted)] md:text-[20px] md:leading-9">
            Use three real photographs to show employee participation, dense
            native plantation and long-term monitoring.
          </p>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {gallery.map((image) => (
              <figure
                key={image.src}
                className="overflow-hidden rounded-[24px] border border-[var(--line)] bg-[var(--card)]"
              >
                <div className="overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={1000}
                    height={800}
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="aspect-[5/4] w-full object-cover"
                  />
                </div>

                <figcaption className="p-5 text-[14px] font-semibold leading-6 text-[var(--green)] md:p-6 md:text-[17px]">
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
              <SectionLabel>CSR Project Benefits</SectionLabel>

              <h2 className="brand mt-5 text-[39px] font-semibold leading-[1.04] tracking-[-0.03em] text-[var(--green)] md:text-[62px]">
                Why companies choose native plantation projects.
              </h2>

              <p className="mt-6 text-[15px] leading-8 text-[var(--muted)] md:text-[19px] md:leading-9">
                A planned CSR plantation can combine environmental action,
                employee involvement and long-term green-cover development.
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
          <SectionLabel>Our CSR Project Process</SectionLabel>

          <h2 className="brand mt-5 max-w-5xl text-[39px] font-semibold leading-[1.04] tracking-[-0.03em] text-[var(--green)] md:text-[65px]">
            From project brief to plantation monitoring.
          </h2>

          <div className="mt-10 grid border-l border-t border-[var(--line)] md:grid-cols-2">
            {process.map((stage) => (
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
              alt="Butibori MIDC industrial Miyawaki forest project near Nagpur"
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
              At Butibori MIDC, ForestnFlora transformed 1,500 square metres
              of industrial land through a planned Miyawaki plantation with
              4,638 native saplings across 29 indigenous species.
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
        <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <SectionLabel>Why ForestnFlora</SectionLabel>

            <h2 className="brand mt-5 text-[39px] font-semibold leading-[1.04] tracking-[-0.03em] text-[var(--green)] md:text-[62px]">
              Local execution. Native species. Structured CSR support.
            </h2>

            <p className="mt-6 text-[15px] leading-8 text-[var(--muted)] md:text-[19px]">
              We focus on plantation projects that are planned for the site and
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

      <section className="bg-[var(--cream)] px-5 py-14 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1050px]">
          <SectionLabel>Frequently Asked Questions</SectionLabel>

          <h2 className="brand mt-5 text-[39px] font-semibold leading-[1.04] tracking-[-0.03em] text-[var(--green)] md:text-[62px]">
            Questions about CSR plantation projects in Nagpur.
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

      <section className="border-y border-[var(--line)] bg-[var(--cream2)] px-5 py-14 md:px-10 md:py-20">
        <div className="mx-auto max-w-[1280px]">
          <SectionLabel>Related ForestnFlora Pages</SectionLabel>

          <h2 className="brand mt-5 max-w-4xl text-[38px] font-semibold leading-[1.04] tracking-[-0.03em] text-[var(--green)] md:text-[58px]">
            Explore our regional forest development services.
          </h2>

          <div className="mt-9 grid gap-4 md:grid-cols-3">
            <Link
              href="/miyawaki-forest-nagpur"
              className="border border-[var(--line)] bg-[var(--card)] p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="brand text-[25px] font-semibold text-[var(--green)]">
                Miyawaki Forest Nagpur
              </h3>
              <p className="mt-3 text-[14px] leading-7 text-[var(--muted)]">
                Explore local Miyawaki forest development and native
                plantation services.
              </p>
            </Link>

            <Link
              href="/miyawaki-forest-maharashtra"
              className="border border-[var(--line)] bg-[var(--card)] p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="brand text-[25px] font-semibold text-[var(--green)]">
                Miyawaki Forest Maharashtra
              </h3>
              <p className="mt-3 text-[14px] leading-7 text-[var(--muted)]">
                View regional Miyawaki forest and plantation services across
                Maharashtra.
              </p>
            </Link>

            <Link
              href="/miyawaki-forest-india"
              className="border border-[var(--line)] bg-[var(--card)] p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="brand text-[25px] font-semibold text-[var(--green)]">
                Miyawaki Forest India
              </h3>
              <p className="mt-3 text-[14px] leading-7 text-[var(--muted)]">
                Explore selected large-scale native forest projects across
                India.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[var(--green)] px-5 py-14 text-white md:px-10 md:py-24">
        <div className="mx-auto max-w-[1100px] text-center">
          <p className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-[var(--gold)] md:text-[12px]">
            Start Your CSR Project
          </p>

          <h2 className="brand mt-5 text-[39px] font-semibold leading-[1.03] tracking-[-0.03em] md:text-[67px]">
            Planning a CSR tree plantation in Nagpur?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-[15px] leading-8 text-white/80 md:text-[20px] md:leading-9">
            Share the project location, approximate land area, organisation
            name, employee participation needs and CSR objectives.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[54px] w-full items-center justify-center rounded-full bg-[var(--whatsapp)] px-9 text-sm font-extrabold text-white shadow-xl transition hover:bg-[var(--whatsapp-dark)] sm:w-auto"
            >
              Request CSR Proposal →
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
              CSR tree plantation, Miyawaki forest development, employee
              plantation drives, industrial green belts and native forest
              restoration in Nagpur and Maharashtra.
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
            <Link
              href="/miyawaki-forest-maharashtra"
              className="hover:text-white"
            >
              Miyawaki Forest Maharashtra
            </Link>
            <Link href="/miyawaki-forest-india" className="hover:text-white">
              Miyawaki Forest India
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
