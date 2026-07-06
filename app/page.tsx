"use client";

import { useEffect, useState } from "react";

const services = [
  {
    title: "Miyawaki Forest",
    text: "Dense, native forests grown faster than conventional plantations with layered species and scientific soil preparation.",
    image: "/images/service-1.jpg",
  },
  {
    title: "CSR Plantation",
    text: "End-to-end CSR plantation projects — planning, execution, employee drives, documentation and impact reporting.",
    image: "/images/service-2.jpg",
  },
  {
    title: "Urban Dense Forest",
    text: "Compact green lungs for cities, schools, factories, hospitals and residential campuses.",
    image: "/images/service-3.jpg",
  },
  {
    title: "Avenue Plantation",
    text: "Roadside and boundary tree lines with hardy native species for shade, dust reduction and habitat corridors.",
    image: "/images/service-4.jpg",
  },
  {
    title: "Garden Development",
    text: "Landscaped gardens with a native-first philosophy — designed to be low-maintenance, seasonal and biodiverse.",
    image: "/images/service-5.jpg",
  },
  {
    title: "Maintenance & Monitoring",
    text: "Care programme with watering, weeding, mulching, replacement and growth monitoring with photo reports.",
    image: "/images/service-6.jpg",
  },
];

const method = [
  {
    no: "01",
    title: "Site Visit & Survey",
    text: "We visit your land, study soil, sunlight, drainage and surrounding ecology, then map out a plantation blueprint.",
  },
  {
    no: "02",
    title: "Native Species Selection",
    text: "A layered mix of native species — canopy, sub-canopy, tree and shrub — chosen for the local biome.",
  },
  {
    no: "03",
    title: "Soil Preparation",
    text: "Soil is loosened and enriched with organic biomass, natural water retainers and locally suitable amendments.",
  },
  {
    no: "04",
    title: "Dense Plantation",
    text: "Saplings are planted closely to mimic a natural forest, encouraging vertical competition and faster natural growth.",
  },
  {
    no: "05",
    title: "Mulching & Watering",
    text: "A thick mulch layer conserves moisture and feeds the soil. Drip or manual watering supports early establishment.",
  },
  {
    no: "06",
    title: "Maintenance & Monitoring",
    text: "We monitor survival, growth and gaps so the forest can gradually stand on its own roots.",
  },
];

const reasons = [
  {
    title: "Native-First Philosophy",
    text: "Only regionally native species — no ornamental fillers. Forests that belong to the local ecology.",
  },
  {
    title: "Miyawaki Method Execution",
    text: "Dense plantation, layered species selection and soil preparation are planned according to the Miyawaki approach.",
  },
  {
    title: "Maintenance Support",
    text: "Every project includes watering, mulching, monitoring and replacement support during the establishment period.",
  },
  {
    title: "Transparent Reporting",
    text: "Photo reports, survival counts and growth updates can be shared with CSR teams and project stakeholders.",
  },
  {
    title: "Nagpur-Based Team",
    text: "Local nursery network, local labour and local climate knowledge help projects move faster on ground.",
  },
  {
    title: "CSR-Ready Documentation",
    text: "Impact notes, branding boards, employee-drive coordination and project reports can be prepared for CSR use.",
  },
];

const projectStats = [
  ["Location", "Butibori MIDC, Nagpur"],
  ["Project Type", "Industrial Land Restoration"],
  ["Area", "1,500 m²"],
  ["Saplings Planted", "4,638 Native Saplings"],
  ["Native Species", "29 Indigenous Species"],
  ["Plantation Density", "Approx. 3 saplings per m²"],
  ["Method", "Miyawaki Method"],
  ["Soil Preparation", "Organic Soil Enrichment"],
  ["Focus", "Biodiversity Restoration & Dense Green Cover"],
  ["Maintenance", "Establishment Care & Growth Monitoring"],
];

const recognitionPeople = [
  {
    name: "Dr. P. Anbalagan",
    role: "CEO, MIDC",
  },
  {
    name: "Dr. Shruti Goyal",
    role: "Project Coordinator",
  },
  {
    name: "Sanjay Nagulwar",
    role: "Miyawaki Project Lead",
  },
];

const gallery = [
  "/images/gallery-1.jpg",
  "/images/gallery-2.jpg",
  "/images/gallery-3.jpg",
  "/images/gallery-4.jpg",
  "/images/gallery-5.jpg",
  "/images/gallery-6.jpg",
];

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Project", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Method", href: "#method" },
  { label: "Why Us", href: "#why" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Forestnflora Miyawaki",
  url: "https://forestnfloramiyawaki.com",
  telephone: "+918830097072",
  email: "forestnfloramiyawaki@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Plot No. 42/A, Durga Nagar, Manewada Road",
    addressLocality: "Nagpur",
    postalCode: "440024",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  areaServed: ["Nagpur", "Maharashtra", "Vidarbha"],
  description:
    "Miyawaki forest development, CSR plantation projects, urban dense forests and ecological restoration services.",
};

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -70px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-[var(--cream)] text-[var(--text)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <header className="site-cream-header fixed left-0 right-0 top-0 z-[999]">
        <div className="mx-auto flex h-[47px] max-w-[1440px] items-center justify-between px-4 md:h-[60px] md:px-10">
          <a
  href="#home"
  aria-label="ForestnFlora Miyawaki home"
  className="flex items-center gap-2.5"
  onClick={() => setMobileMenuOpen(false)}
>
  <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white/45 md:h-11 md:w-11">
    <img
      src="/images/logo.png"
      alt="ForestnFlora Miyawaki"
      className="h-full w-full object-contain"
    />
  </span>

  <span className="leading-none">
    <span className="brand block text-[17px] font-bold leading-none text-[var(--green)] md:text-[22px]">
      Forestnfloramiyawaki.com
    </span>
  </span>
</a>  

          <nav className="hidden items-center gap-7 text-[14px] font-semibold lg:flex">
            {navLinks.map((link) => (
              <a key={link.href} className="nav-link" href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="https://wa.me/918830097072"
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-full bg-[var(--whatsapp)] px-6 py-2 text-sm font-extrabold text-white shadow-sm transition-colors hover:bg-[var(--whatsapp-dark)] lg:inline-flex"
            >
              WhatsApp
            </a>

            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--card)] text-[var(--green)] shadow-md lg:hidden"
            >
              <span className="relative h-4 w-5">
                <span
                  className={`absolute left-0 top-0 h-[2px] w-5 bg-[var(--green)] transition-transform ${
                    mobileMenuOpen ? "translate-y-[7px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-[7px] h-[2px] w-5 bg-[var(--green)] transition-opacity ${
                    mobileMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 top-[14px] h-[2px] w-5 bg-[var(--green)] transition-transform ${
                    mobileMenuOpen ? "-translate-y-[7px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        <div
          className={`lg:hidden ${
            mobileMenuOpen ? "block" : "hidden"
          } mx-4 rounded-3xl border border-[var(--line)] bg-[var(--cream)]/95 p-3 shadow-2xl`}
        >
          <nav className="grid gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="mobile-nav-link rounded-2xl border border-[var(--line)] bg-[var(--card)] px-4 py-3 text-[15px] font-extrabold text-[var(--green)]"
              >
                {link.label}
              </a>
            ))}

            <a
              href="https://wa.me/918830097072"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-2xl bg-[var(--whatsapp)] px-4 py-3 text-center text-[15px] font-extrabold text-white"
            >
              WhatsApp
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
<section id="home" className="pt-[48px] md:pt-[54px]">
  <div className="relative isolate h-[calc(100svh-48px)] min-h-[560px] max-h-[720px] overflow-hidden bg-black md:h-[760px] md:max-h-none">
    <picture>
      <source media="(max-width: 767px)" srcSet="/images/hero-mobile.jpg" />
      <source media="(min-width: 768px)" srcSet="/images/hero-desktop.jpg" />
      <img
        src="/images/hero-desktop.jpg"
        alt="Miyawaki forest development in Nagpur"
        className="absolute inset-0 h-full w-full object-cover object-center"
        loading="eager"
        fetchPriority="high"
        decoding="async"
      />
    </picture>

    {/* black transparent overlay, no green block */}
    <div className="absolute inset-0 bg-black/20" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/58 via-black/18 to-transparent md:bg-gradient-to-r md:from-black/65 md:via-black/20 md:to-transparent" />

    <div className="relative z-10 mx-auto flex h-full max-w-[1440px] flex-col justify-end px-5 pb-8 md:px-10 md:pb-20">
      <p className="mb-3 text-[9px] font-extrabold uppercase tracking-[0.28em] text-[var(--gold)] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] md:mb-5 md:text-[11px] md:tracking-[0.35em]">
        Miyawaki Forest Development
      </p>

      <h1
        className="brand max-w-[850px] font-semibold tracking-[-0.04em] text-white drop-shadow-[0_5px_20px_rgba(0,0,0,0.95)]"
        style={{
          fontSize: "clamp(34px, 11vw, 76px)",
          lineHeight: "0.98",
        }}
      >
        Build a forest, not just a plantation.
      </h1>

      <p className="mt-4 max-w-2xl text-[14px] font-medium leading-7 text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)] md:mt-6 md:text-[22px] md:leading-10">
        Dense, biodiverse, native forests for CSR projects, industries, campuses
        and civic land across Nagpur and Maharashtra.
      </p>

      <div className="mt-5 grid grid-cols-2 gap-3 border-t border-white/40 pt-4 md:mt-8 md:max-w-3xl md:grid-cols-4 md:gap-5 md:pt-6">
        {[
          ["4,638+", "saplings"],
          ["29+", "species"],
          ["1,500 m²", "forest area"],
          ["3-year", "care support"],
        ].map(([value, label]) => (
          <div key={label}>
            <p className="text-[22px] font-extrabold text-white drop-shadow-[0_4px_14px_rgba(0,0,0,0.95)] md:text-[34px]">
              {value}
            </p>
            <p className="mt-1 text-[7px] font-bold uppercase tracking-[0.2em] text-white drop-shadow-[0_3px_10px_rgba(0,0,0,0.95)] md:text-[10px]">
              {label}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* About */}
      <section
        id="about"
        className="border-b border-[var(--line)] bg-[var(--cream2)] px-5 py-10 md:px-10 md:py-24"
      >
        <div className="reveal mx-auto grid max-w-[1280px] gap-8 lg:grid-cols-2 lg:items-center lg:gap-14">
          <div className="image-frame card-zoom">
            <img
              src="/images/about-forest.jpg"
              alt="Dense native forest plantation"
              className="zoom-img h-[260px] w-full object-cover md:h-[560px]"
            />
          </div>

          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-[var(--brown)] md:text-[12px] md:tracking-[0.35em]">
              About Forest N Flora
            </p>

            <h2 className="brand mt-4 text-[40px] font-semibold leading-[1.04] tracking-[-0.03em] text-[var(--green)] md:mt-6 md:text-[68px] md:leading-[0.98]">
              <span className="block">A forest is not planted.
                It is grown.
              </span>
            </h2>

            <div className="mt-6 space-y-4 text-[15px] leading-8 text-[var(--muted)] md:mt-8 md:space-y-6 md:text-[20px] md:leading-10">
              <p>
                ForestnFlora Miyawaki is a Nagpur-based Miyawaki forest
                development company dedicated to creating dense, biodiverse, and
                self-sustaining native forests for industries, institutions,
                schools, colleges, builders, CSR partners, and civic bodies.
              </p>

              <p>
                We transform unused, barren, and underutilized land into
                thriving green ecosystems through a scientifically planned
                process — from site inspection, soil improvement, and native
                species selection to plantation, maintenance, and long-term
                growth monitoring.
              </p>

              <p>
                Every forest we create is designed to restore biodiversity,
                improve environmental quality, reduce heat, and build lasting
                ecological value. Our approach is rooted in science, local
                native species, and sustainable urban greening.
              </p>
            </div>

            <div className="mt-7 border-t border-[var(--line)] pt-6 md:mt-10 md:pt-8">
              <p className="brand text-[27px] font-semibold text-[var(--green)] md:text-[30px]">
                Sanjay B Nagulwar
              </p>
              <p className="text-[15px] text-[var(--brown)] md:text-base">
                Founder · Forestnflora Miyawaki
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Butibori Project */}
      <section
        id="projects"
        className="bg-[var(--cream2)] px-5 py-10 md:px-10 md:py-24"
      >
        <div className="mx-auto max-w-[1280px]">
          <div className="reveal">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-[var(--brown)] md:text-[12px] md:tracking-[0.35em]">
              Featured Project
            </p>

            <h2 className="brand mt-4 text-[40px] font-semibold leading-[1.04] tracking-[-0.03em] text-[var(--green)] md:mt-6 md:text-[68px] md:leading-[0.98]">
              <span className="block">Butibori MIDC 
                Miyawaki Forest.
              </span>
            </h2>

            <p className="mt-4 max-w-5xl text-[15px] leading-8 text-[var(--muted)] md:mt-6 md:text-[21px] md:leading-10">
              A collaborative ecological restoration initiative developed in
              partnership with the Butibori Manufacturers Association (BMA) and
              MIDC.
            </p>
          </div>

          <div className="mt-8 grid gap-6 lg:mt-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
            <div className="reveal image-frame card-zoom">
              <img
                src="/images/project-1.jpg"
                alt="Miyawaki Plantation at Butibori MIDC, Nagpur"
                className="zoom-img h-[280px] w-full object-cover md:h-[620px]"
              />
            </div>

            <div className="reveal card-zoom border border-[var(--line)] bg-[var(--card)] p-6 md:p-10">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-[var(--brown)] md:text-[12px] md:tracking-[0.35em]">
                Project Overview
              </p>

              <h3 className="brand mt-4 text-[29px] font-semibold leading-tight text-[var(--green)] md:mt-5 md:text-[44px]">
                Industrial land transformed into a native forest.
              </h3>

              <p className="mt-5 text-[14px] leading-7 text-[var(--muted)] md:mt-6 md:text-[18px] md:leading-8">
                At Butibori MIDC, ForestnFlora Miyawaki transformed 1,500
                square metres of industrial land into a dense native forest
                through the scientifically planned Miyawaki Method. The project
                included the plantation of 4,638 native saplings across 29
                indigenous species, with the objective of restoring
                biodiversity, improving ecological value, and creating a
                long-term self-sustaining green ecosystem.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3 md:mt-8 md:gap-4">
                {projectStats.map(([label, value]) => (
                  <div
                    key={label}
                    className="card-zoom border-t border-[var(--line)] pt-3 md:pt-4"
                  >
                    <p className="text-[9px] font-extrabold uppercase tracking-[0.22em] text-[var(--brown)] md:text-[11px]">
                      {label}
                    </p>
                    <p className="mt-2 text-[14px] font-semibold text-[var(--green)] md:text-[18px]">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recognition */}
          <div className="mt-8 grid gap-6 lg:mt-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-10">
            <div className="reveal card-zoom border border-[var(--line)] bg-[var(--card)] p-6 md:p-10">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-[var(--brown)] md:text-[12px] md:tracking-[0.35em]">
                Recognition
              </p>

              <h3 className="brand mt-4 text-[30px] font-semibold leading-tight text-[var(--green)] md:mt-5 md:text-[48px]">
                Recognition & Industry Support
              </h3>

              <p className="mt-5 text-[14px] leading-7 text-[var(--muted)] md:mt-6 md:text-[18px] md:leading-8">
                The Butibori Miyawaki Plantation was acknowledged during a visit
                by Dr. P. Anbalagan, CEO, MIDC, who planted a sapling at the
                project site and appreciated the environmental initiative
                undertaken by the Butibori Manufacturers Association.
              </p>

              <p className="mt-4 text-[14px] leading-7 text-[var(--muted)] md:mt-5 md:text-[18px] md:leading-8">
                The project stands as an example of how industrial areas can
                convert unused land into dense native ecosystems through
                collaborative environmental action, scientific plantation
                methods, and long-term ecological planning.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-3 md:mt-8">
                {recognitionPeople.map((person) => (
                  <div
                    key={person.name}
                    className="card-zoom border-t border-[var(--line)] pt-4"
                  >
                    <p className="mt-3 font-semibold text-[var(--green)] md:mt-4">
                      {person.name}
                    </p>
                    <p className="mt-1 text-sm text-[var(--brown)]">
                      {person.role}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-6 border-t border-[var(--line)] pt-5 text-[14px] leading-7 text-[var(--muted)] md:mt-8 md:pt-6 md:text-[15px]">
                Project supported by the Butibori Manufacturers Association
                (BMA) in collaboration with MIDC.
              </p>
            </div>

            <div className="reveal image-frame card-zoom">
              <img
                src="/images/recognition.jpg"
                alt="Butibori Miyawaki Plantation recognition"
                className="zoom-img h-[280px] w-full object-cover md:h-[620px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="bg-[var(--cream)] px-5 py-10 md:px-10 md:py-24"
      >
        <div className="mx-auto max-w-[1280px]">
          <div className="reveal">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-[var(--brown)] md:text-[12px] md:tracking-[0.35em]">
              Services
            </p>

            <h2 className="brand mt-4 max-w-5xl text-[40px] font-semibold leading-[1.04] tracking-[-0.03em] text-[var(--green)] md:mt-6 md:text-[68px] md:leading-[0.98]">
              Complete Miyawaki Forest Development Solutions.
            </h2>

            <p className="mt-4 max-w-4xl text-[15px] leading-8 text-[var(--muted)] md:mt-6 md:text-[21px] md:leading-10">
              From dense Miyawaki forests to institutional gardens, every
              service is designed around native species and long-term care.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:mt-14 md:grid-cols-2 md:gap-8 xl:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service.title}
                className={`reveal card-zoom overflow-hidden border border-[var(--line)] bg-[var(--card)] ${
                  index % 3 === 1 ? "reveal-delay-1" : ""
                } ${index % 3 === 2 ? "reveal-delay-2" : ""}`}
              >
                <div className="image-frame relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="zoom-img h-[190px] w-full object-cover md:h-[360px]"
                  />
                  
                </div>

                <div className="p-5 md:p-10">
                  <h3 className="brand text-[26px] font-semibold leading-tight text-[var(--green)] md:text-[36px]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-[14px] leading-7 text-[var(--muted)] md:mt-5 md:text-[18px] md:leading-8">
                    {service.text}
                  </p>

                  <div className="mt-6 border-t border-[var(--line)] pt-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--brown)] md:mt-10 md:pt-6 md:text-[13px] md:tracking-[0.35em]">
                    {String(index + 1).padStart(2, "0")} / 06
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Method */}
      <section
        id="method"
        className="border-y border-[var(--line)] bg-[var(--cream2)] px-5 py-10 md:px-10 md:py-24"
      >
        <div className="mx-auto max-w-[1280px]">
          <div className="reveal">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-[var(--brown)] md:text-[12px] md:tracking-[0.35em]">
              The Miyawaki Method
            </p>

            <h2 className="brand mt-4 text-[40px] font-semibold leading-[1.04] tracking-[-0.03em] text-[var(--green)] md:mt-6 md:text-[68px] md:leading-[0.98]">
              <span className="block">From bare land to
                a living forest.
              </span>
            </h2>

            <p className="mt-4 max-w-4xl text-[15px] leading-8 text-[var(--muted)] md:mt-6 md:text-[21px] md:leading-10">
              A practical six-step process that studies the site, prepares the
              soil, selects native species and supports the forest until it
              begins to grow naturally.
            </p>
          </div>

          <div className="mt-8 grid border-[var(--line)] md:mt-16 md:grid-cols-2 md:border-l md:border-t">
            {method.map((step, index) => (
              <div
                key={step.no}
                className={`reveal card-zoom relative min-h-[230px] border-b border-[var(--line)] p-6 md:min-h-[430px] md:border-r md:p-14 ${
                  index % 2 === 1 ? "reveal-delay-1" : ""
                }`}
              >
                <p className="brand pointer-events-none absolute left-6 top-5 text-[62px] font-semibold leading-none text-[var(--green)]/10 md:left-12 md:text-[140px]">
                  {step.no}
                </p>

                <div className="relative z-10 mt-20 md:mt-44">
                  <h3 className="brand flex items-start gap-3 text-[27px] font-semibold leading-tight text-[var(--green)] md:gap-4 md:text-[40px]">
                    {step.title}
                    <span className="mt-2 h-3 w-3 shrink-0 rounded-full bg-[var(--green)] md:mt-3 md:h-4 md:w-4" />
                  </h3>

                  <p className="mt-4 max-w-xl text-[14px] leading-7 text-[var(--muted)] md:mt-5 md:text-[19px] md:leading-8">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section
        id="why"
        className="bg-[var(--cream)] px-5 py-10 md:px-10 md:py-24"
      >
        <div className="mx-auto max-w-[1280px]">
          <div className="reveal">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-[var(--brown)] md:text-[12px] md:tracking-[0.35em]">
              Why Choose Us
            </p>

            <h2 className="brand mt-4 text-[40px] font-semibold leading-[1.04] tracking-[-0.03em] text-[var(--green)] md:mt-6 md:text-[68px] md:leading-[0.98]">
              <span className="block">Six reasons
                we’re trusted.
              </span>
            </h2>

            <p className="mt-4 text-[15px] leading-8 text-[var(--muted)] md:mt-6 md:text-[21px]">
              The details that separate a photo-op plantation from a forest that
              will outlive us.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:mt-14 md:grid-cols-2 md:gap-7 xl:grid-cols-3">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className={`reveal card-zoom relative overflow-hidden bg-[var(--card)] p-6 md:p-12 ${
                  index % 3 === 1 ? "reveal-delay-1" : ""
                } ${index % 3 === 2 ? "reveal-delay-2" : ""}`}
              >
                <p className="brand absolute right-3 top-[-14px] text-[105px] font-semibold text-[var(--green)]/5 md:right-4 md:top-[-18px] md:text-[150px]">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <p className="relative z-10 text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--brown)] md:text-[13px] md:tracking-[0.35em]">
                  {String(index + 1).padStart(2, "0")} / 06
                </p>

                <h3 className="brand relative z-10 mt-5 text-[26px] font-semibold text-[var(--green)] md:mt-7 md:text-[30px]">
                  {reason.title}
                </h3>

                <p className="relative z-10 mt-4 text-[14px] leading-7 text-[var(--muted)] md:mt-5 md:text-[18px] md:leading-8">
                  {reason.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section
        id="gallery"
        className="bg-[var(--cream)] px-5 py-10 md:px-10 md:py-24"
      >
        <div className="mx-auto max-w-[1280px]">
          <div className="reveal">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-[var(--brown)] md:text-[12px] md:tracking-[0.35em]">
              Gallery
            </p>

            <h2 className="brand mt-4 text-[40px] font-semibold leading-[1.04] tracking-[-0.03em] text-[var(--green)] md:mt-6 md:text-[68px] md:leading-[0.98]">
              <span className="block">Fieldworks 
                up close.
              </span>
            </h2>

            <p className="mt-4 max-w-4xl text-[15px] leading-8 text-[var(--muted)] md:mt-6 md:text-[21px]">
              A visual diary from the ground — nurseries, plantation days, soil
              work and forests in different seasons.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:mt-14 md:grid-cols-2 md:gap-7 xl:grid-cols-3">
            {gallery.map((image, index) => (
              <div
                key={image}
                className={`reveal image-frame card-zoom ${
                  index > 3 ? "hidden md:block" : ""
                } ${index % 3 === 1 ? "reveal-delay-1" : ""} ${
                  index % 3 === 2 ? "reveal-delay-2" : ""
                }`}
              >
                <img
                  src={image}
                  alt={`Forest N Flora gallery ${index + 1}`}
                  className="zoom-img h-[220px] w-full object-cover md:h-[350px]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="border-t border-[var(--line)] bg-[var(--cream)] px-5 py-10 md:px-10 md:py-24"
      >
        <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <div className="reveal">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-[var(--brown)] md:text-[12px] md:tracking-[0.35em]">
              Get In Touch
            </p>

            <h2 className="brand mt-4 text-[40px] font-semibold leading-[1.04] tracking-[-0.03em] text-[var(--green)] md:mt-6 md:text-[68px] md:leading-[0.98]">
              <span className="block">Let’s plant
                something lasting.
              </span>
            </h2>

            <p className="mt-5 text-[15px] leading-8 text-[var(--text)] md:mt-8 md:text-[21px]">
              Tell us about your land, budget or CSR vision. We’ll get back
              within 24 hours with a scoped proposal.
            </p>

            <div className="mt-7 space-y-5 text-[15px] md:mt-10 md:space-y-7 md:text-[18px]">
              <p>
                <span className="block text-[10px] font-extrabold uppercase tracking-[0.3em] text-[var(--brown)] md:text-[12px]">
                  Call
                </span>
                 8830097072,
                8390750811
              </p>

              <p>
                <span className="block text-[10px] font-extrabold uppercase tracking-[0.3em] text-[var(--brown)] md:text-[12px]">
                  Email
                </span>
                forestnfloramiyawaki@gmail.com
              </p>

              <p>
                <span className="block text-[10px] font-extrabold uppercase tracking-[0.3em] text-[var(--brown)] md:text-[12px]">
                  Office
                </span>
                Plot No. 42/A, Durga Nagar, Manewada Road, Nagpur – 440024
              </p>
            </div>
          </div>

          <form className="reveal card-zoom hidden border border-[var(--line)] bg-[var(--cream2)] p-7 md:block md:p-12">
            {[
              "Your Name *",
              "Company / Organization",
              "Phone *",
              "Email",
              "Project Location",
            ].map((label) => (
              <label key={label} className="mb-9 block">
                <span className="mb-5 block text-[12px] font-extrabold uppercase tracking-[0.35em] text-[var(--brown)]">
                  {label}
                </span>
                <input className="w-full border-0 border-b border-[#bdb5aa] bg-transparent py-3 outline-none" />
              </label>
            ))}

            <label className="block">
              <span className="mb-5 block text-[12px] font-extrabold uppercase tracking-[0.35em] text-[var(--brown)]">
                Tell us about your project *
              </span>

              <textarea
                rows={5}
                placeholder="Land size, timelines, budget range, CSR goals..."
                className="w-full resize-none border-0 border-b border-[#bdb5aa] bg-transparent py-3 text-lg outline-none placeholder:text-[#9aa097]"
              />
            </label>

            <button
              type="button"
              className="mt-10 bg-[var(--green)] px-10 py-5 font-semibold text-white"
            >
              Send inquiry →
            </button>
          </form>
        </div>

        <div className="reveal mx-auto mt-10 max-w-[1280px] border-t border-[var(--line)] pt-8 md:mt-14 md:pt-10">
          <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-[var(--brown)] md:text-[12px]">
            Quick Contact
          </p>

          <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-3">
            <a
  href="tel:+918830097072"
  className="flex min-h-[52px] items-center justify-center rounded-full bg-[var(---green)] px-6 text-sm font-black text-white shadow-lg"
>
  Call Now
</a>

            <a
              href="mailto:forestnfloramiyawaki@gmail.com"
              className="flex min-h-[52px] items-center justify-center rounded-full border border-[var(--line)] bg-[var(--card)] px-6 text-sm font-black text-[var(--green)]"
            >
              Email Us
            </a>

            <a
              href="https://wa.me/918830097072"
              target="_blank"
              rel="noreferrer"
              className="flex min-h-[52px] items-center justify-center rounded-full bg-[var(--whatsapp)] px-6 text-sm font-black text-white shadow-lg"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-[var(--line)] bg-[var(--deep)] px-5 py-7 text-center text-sm text-white/70 md:px-10">
        © {new Date().getFullYear()} ForestnFlora Miyawaki. All rights reserved.
      </footer>
    </main>
  );
}