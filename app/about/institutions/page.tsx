"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";

const sidebarLinks = [
  { label: "Emblem & Motto", href: "/about/emblem-motto", active: false },
  { label: "Mission & Vision", href: "/about/mission-vision", active: false },
  { label: "History & Milestones", href: "/about/history-and-milestones", active: false },
  { label: "Corporate Social Responsibility", href: "/about/csr", active: false },
  { label: "Institutions", href: "/about/institutions", active: true },
];

type CardData = { name: string; location?: string; tag: string; href: string };

const schools: CardData[] = [
  { name: "MCC Higher Secondary School", location: "Chetpet", tag: "School", href: "#" },
  { name: "MCC Matriculation Higher Secondary School", location: "Chetpet", tag: "School", href: "#" },
  { name: "MCC Public School", location: "Chetpet", tag: "School", href: "#" },
  { name: "MCC Campus Matriculation Higher Secondary School", location: "East Tambaram", tag: "School", href: "#" },
];

const colleges: CardData[] = [
  { name: "MCC Rural Service League School", tag: "Institution", href: "#" },
  { name: "School of Continuing Education", tag: "College", href: "#" },
  { name: "MCC Boyd – Tandon School of Business", tag: "Business School", href: "#" },
  { name: "MCC Community College", location: "West Tambaram", tag: "Community College", href: "#" },
  { name: "MCC Kotagiri Community College", location: "Kotagiri", tag: "Community College", href: "#" },
  { name: "MCC Hanshin Hope Centre", tag: "Centre", href: "#" },
  { name: "Jonathan Callaghan Memorial Centre and Family Life Institute", tag: "Institute", href: "#" },
  { name: "MCC Pulicat Community College and Estuarine Biological Laboratory", location: "Pulicat (EBLP)", tag: "Community College", href: "#" },
];

const stats = [
  { number: "12+", label: "Institutions" },
  { number: "5+", label: "Community Colleges" },
  { number: "4",   label: "Schools" },
  { number: "185+", label: "Years of Excellence" },
];

/* ── Building placeholder icon ── */
function BuildingIcon() {
  return (
    <svg
      width="60" height="60" viewBox="0 0 24 24"
      fill="none" stroke="rgba(255,255,255,0.22)"
      strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"
    >
      <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  );
}

/* ── Institution card ── */
function InstitutionCard({ name, location, tag, href }: CardData) {
  return (
    <a
      href={href}
      className="group block bg-white border border-[#dfdfdf] rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
      style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}
    >
      {/* Gradient image area */}
      <div
        className="relative flex items-center justify-center group-hover:brightness-110 transition-all duration-300"
        style={{ height: "180px", background: "linear-gradient(135deg, #7B2C3A 0%, #454F46 100%)" }}
      >
        <BuildingIcon />
        {/* Type tag — top-right */}
        <span
          className="absolute top-3 right-3 font-dm uppercase text-white"
          style={{ backgroundColor: "#D1B05D", fontSize: "10px", padding: "4px 10px" }}
        >
          {tag}
        </span>
      </div>

      {/* Body */}
      <div style={{ padding: "20px" }}>
        <h3
          className="font-cormorant font-semibold text-[#1a1a1a] group-hover:text-maroon transition-colors"
          style={{ fontSize: "18px", lineHeight: "1.4", minHeight: "50px" }}
        >
          {name}
        </h3>
        {location && (
          <span
            className="font-dm text-maroon bg-[#F3F7FF] inline-block"
            style={{ fontSize: "11px", padding: "3px 10px", borderRadius: "20px", marginTop: "8px" }}
          >
            {location}
          </span>
        )}
        <div style={{ marginTop: "12px" }}>
          <span
            className="font-dm text-gold group-hover:translate-x-1 inline-block transition-transform"
            style={{ fontSize: "12px", letterSpacing: "1px" }}
          >
            Learn More →
          </span>
        </div>
      </div>
    </a>
  );
}

/* ── Section category heading ── */
function CategoryHeading({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div style={{ borderLeft: "4px solid #D1B05D", paddingLeft: "16px", marginBottom: "32px" }}>
      <h2 className="font-cormorant text-maroon" style={{ fontSize: "28px" }}>
        {title}
      </h2>
      <p className="font-cormorant italic text-[#666]" style={{ fontSize: "16px", marginTop: "4px" }}>
        {subtitle}
      </p>
    </div>
  );
}

export default function InstitutionsPage() {
  return (
    <>
      <Navbar />

      {/* ── Section 1: Hero Banner ── */}
      <section
        className="relative w-full flex flex-col justify-center overflow-hidden"
        style={{
          height: "220px",
          backgroundColor: "#7B2C3A",
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 50%)",
          backgroundSize: "10px 10px",
        }}
      >
        <div className="max-w-[1200px] mx-auto px-6 w-full">
          <nav className="mb-4">
            <ol className="flex items-center gap-2 font-dm text-[12px] tracking-wide">
              <li>
                <Link href="/" className="text-white/60 hover:text-gold transition-colors">Home</Link>
              </li>
              <li className="text-white/40">/</li>
              <li>
                <Link href="#" className="text-white/60 hover:text-gold transition-colors">About Us</Link>
              </li>
              <li className="text-white/40">/</li>
              <li className="text-gold">Institutions</li>
            </ol>
          </nav>
          <h1
            className="font-cormorant text-white font-light"
            style={{ fontSize: "52px", letterSpacing: "2px" }}
          >
            Institutions
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold" />
      </section>

      {/* ── Mobile sidebar tabs ── */}
      <div className="lg:hidden bg-white border-b border-[#dfdfdf] overflow-x-auto">
        <div className="flex whitespace-nowrap px-4">
          {sidebarLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`font-dm text-[12px] px-4 py-3 border-b-2 transition-colors inline-block ${
                link.active
                  ? "border-gold text-maroon font-semibold"
                  : "border-transparent text-[#555] hover:text-maroon"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* ── Sections 2–5: Sidebar + main content ── */}
      <section className="bg-white" style={{ padding: "50px 24px 70px" }}>
        <div className="max-w-[1200px] mx-auto flex gap-8 items-start">

          {/* Sidebar */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <div
              className="sticky top-6 bg-white border border-[#dfdfdf] rounded-sm p-6"
              style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
            >
              <p className="font-dm text-maroon text-[12px] font-bold tracking-[0.15em] uppercase mb-4 pb-2 border-b border-[#dfdfdf]">
                About Us
              </p>
              <ul>
                {sidebarLinks.map((link, i) => (
                  <li key={link.label} className={i < sidebarLinks.length - 1 ? "border-b border-[#f0f0f0]" : ""}>
                    <Link
                      href={link.href}
                      className={`block font-cormorant text-[16px] py-2.5 pl-3 transition-all duration-150 border-l-[3px] ${
                        link.active
                          ? "border-gold text-maroon font-semibold"
                          : "border-transparent text-[#333] hover:text-maroon hover:border-gold"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">

            {/* Section 3: Intro */}
            <div style={{ paddingBottom: "48px" }}>
              <p
                className="font-dm text-gold uppercase"
                style={{ fontSize: "11px", letterSpacing: "3px", marginBottom: "14px" }}
              >
                Our Network
              </p>
              <h2
                className="font-cormorant text-maroon font-semibold"
                style={{ fontSize: "38px", lineHeight: "1.2", marginBottom: "16px" }}
              >
                Institutions Under MCC
              </h2>
              <div style={{ width: "50px", height: "2px", backgroundColor: "#D1B05D", marginBottom: "24px" }} />
              <p
                className="font-cormorant text-[#444444]"
                style={{ fontSize: "18px", lineHeight: "1.9", maxWidth: "700px" }}
              >
                Madras Christian College oversees a wide network of educational institutions
                across Tamil Nadu, each committed to academic excellence and community service.
              </p>
            </div>

            {/* Section 4: Schools */}
            <div
              style={{
                backgroundColor: "#F3F7FF",
                borderRadius: "8px",
                padding: "40px 32px 50px",
                marginBottom: "0",
              }}
            >
              <CategoryHeading
                title="Schools"
                subtitle="Associated Schools under Madras Christian College"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {schools.map((card) => (
                  <InstitutionCard key={card.name} {...card} />
                ))}
              </div>
            </div>

            {/* Section 5: Colleges */}
            <div style={{ padding: "50px 0 0" }}>
              <CategoryHeading
                title="Colleges & Special Institutions"
                subtitle="Extended network of colleges and special institutions under MCC"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {colleges.map((card) => (
                  <InstitutionCard key={card.name} {...card} />
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Section 6: Stats Banner ── */}
      <section className="text-center" style={{ backgroundColor: "#454F46", padding: "50px 24px" }}>
        <div className="flex flex-wrap items-center justify-center max-w-[960px] mx-auto">
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center">
              <div className="text-center px-10 py-3">
                <p className="font-dm font-bold text-gold" style={{ fontSize: "40px" }}>
                  {stat.number}
                </p>
                <p className="font-cormorant text-white" style={{ fontSize: "16px", marginTop: "6px" }}>
                  {stat.label}
                </p>
              </div>
              {i < stats.length - 1 && (
                <div style={{ width: "1px", height: "60px", backgroundColor: "#D1B05D", opacity: 0.4 }} />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── Section 7: Image Note Banner ── */}
      <section className="bg-white" style={{ padding: "48px 24px" }}>
        <div
          style={{
            maxWidth: "700px",
            margin: "0 auto 60px",
            backgroundColor: "#F3F7FF",
            border: "1px solid #D1B05D",
            borderRadius: "8px",
            padding: "30px",
            textAlign: "center",
          }}
        >
          {/* Camera icon */}
          <svg
            width="28" height="28" viewBox="0 0 24 24"
            fill="none" stroke="#D1B05D" strokeWidth="1.5"
            strokeLinecap="round" strokeLinejoin="round"
            style={{ display: "inline-block" }}
          >
            <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
            <circle cx="12" cy="13" r="4" />
          </svg>
          <p
            className="font-cormorant italic text-[#666]"
            style={{ fontSize: "16px", marginTop: "12px" }}
          >
            Institution images will be added soon
          </p>
          <p className="font-dm text-[#888]" style={{ fontSize: "13px", marginTop: "8px" }}>
            Each card above has an image placeholder ready for photos
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
