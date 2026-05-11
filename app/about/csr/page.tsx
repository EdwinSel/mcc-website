"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";

const sidebarLinks = [
  { label: "Emblem & Motto", href: "/about/emblem-motto", active: false },
  { label: "Mission & Vision", href: "/about/mission-vision", active: false },
  { label: "History & Milestones", href: "/about/history-and-milestones", active: false },
  { label: "Corporate Social Responsibility", href: "/about/csr", active: true },
  { label: "Institutions", href: "/about/institutions", active: false },
];

const csrActivities = [
  "MCC Pulicat Community College",
  "MCC Kotagiri Community College",
  "MCC Community College, West Tambaram",
  "MCC Rural Service League School",
  "MCC — Integrated Child Development Centre",
  "Manna Scheme",
  "Scholarships",
  "MCC Covid Task Force",
];

const impactStats = [
  { number: "8+",    label: "CSR Initiatives" },
  { number: "5+",    label: "Community Colleges" },
  { number: "1000+", label: "Lives Impacted" },
  { number: "185+",  label: "Years of Service" },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="font-dm text-maroon font-bold uppercase inline-block border-b-2 border-gold"
      style={{ fontSize: "13px", letterSpacing: "2px", paddingBottom: "8px", marginBottom: "24px" }}
    >
      {children}
    </p>
  );
}

function ActivityCard({ title }: { title: string }) {
  return (
    <a
      href="#"
      className="group flex flex-col justify-between rounded-lg border border-[#dfdfdf] bg-white transition-all duration-300 hover:-translate-y-1 hover:bg-maroon hover:border-maroon hover:shadow-xl"
      style={{ padding: "28px 24px", minHeight: "120px", boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}
    >
      <div>
        <span
          className="font-dm uppercase text-gold bg-[#F3F7FF] group-hover:bg-white/20 group-hover:text-white transition-colors"
          style={{
            fontSize: "10px",
            letterSpacing: "2px",
            padding: "4px 10px",
            borderRadius: "20px",
            marginBottom: "12px",
            display: "inline-block",
          }}
        >
          CSR Activity
        </span>
        <h3
          className="font-cormorant font-bold text-[#1a1a1a] group-hover:text-white transition-colors"
          style={{ fontSize: "18px", lineHeight: "1.4" }}
        >
          {title}
        </h3>
      </div>
      <div style={{ marginTop: "16px" }}>
        <span
          className="font-dm text-gold group-hover:text-white transition-colors"
          style={{ fontSize: "12px", letterSpacing: "1px" }}
        >
          Learn More →
        </span>
      </div>
    </a>
  );
}

export default function CSRPage() {
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
              <li className="text-gold">CSR</li>
            </ol>
          </nav>
          <h1
            className="font-cormorant text-white font-light leading-tight"
            style={{ fontSize: "52px", letterSpacing: "2px" }}
          >
            Corporate Social Responsibility
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

      {/* ── Sections 3–5: Sidebar + Main content ── */}
      <section className="bg-white" style={{ padding: "50px 24px 60px" }}>
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

            {/* Section 3: Intro text (white) */}
            <div style={{ paddingBottom: "48px" }}>
              <p
                className="font-dm text-gold uppercase"
                style={{ fontSize: "11px", letterSpacing: "3px", marginBottom: "14px" }}
              >
                Our Commitment
              </p>
              <h2
                className="font-cormorant text-maroon font-semibold"
                style={{ fontSize: "38px", lineHeight: "1.2", marginBottom: "16px" }}
              >
                Serving Communities,<br />Transforming Lives
              </h2>
              <div style={{ width: "50px", height: "2px", backgroundColor: "#D1B05D", marginBottom: "24px" }} />
              <p
                className="font-cormorant text-[#444444]"
                style={{ fontSize: "18px", lineHeight: "1.9", maxWidth: "700px" }}
              >
                Madras Christian College has always believed that education must go beyond the
                classroom. Our CSR initiatives reflect our deep commitment to social justice,
                community development, and the holistic welfare of society.
              </p>
            </div>

            {/* Sections 4+5: #F3F7FF block */}
            <div style={{ backgroundColor: "#F3F7FF", borderRadius: "8px", padding: "40px 32px 60px" }}>

              {/* Section 4: CSR Policy Card */}
              <div style={{ marginBottom: "48px" }}>
                <SectionLabel>CSR Policy and Committee</SectionLabel>

                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 bg-white rounded-md transition-all duration-300"
                  style={{
                    maxWidth: "500px",
                    padding: "28px 32px",
                    border: "1px solid #dfdfdf",
                    borderLeft: "4px solid #D1B05D",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderLeftColor = "#7B2C3A";
                    e.currentTarget.style.transform = "translateX(4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderLeftColor = "#D1B05D";
                    e.currentTarget.style.transform = "translateX(0)";
                  }}
                >
                  {/* Document icon */}
                  <div style={{ flexShrink: 0 }}>
                    <svg
                      width="40" height="40" viewBox="0 0 24 24"
                      fill="none" stroke="#D1B05D" strokeWidth="1.5"
                      strokeLinecap="round" strokeLinejoin="round"
                    >
                      <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>

                  {/* Labels */}
                  <div className="flex-1 min-w-0">
                    <p className="font-cormorant text-maroon font-semibold" style={{ fontSize: "20px" }}>
                      File on Composition
                    </p>
                    <p className="font-dm text-[#888]" style={{ fontSize: "13px", marginTop: "4px" }}>
                      CSR Policy Document
                    </p>
                  </div>

                  {/* Arrow */}
                  <svg
                    width="20" height="20" viewBox="0 0 24 24"
                    fill="none" stroke="#D1B05D" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round"
                    style={{ flexShrink: 0 }}
                  >
                    <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>

              {/* Section 5: CSR Activities */}
              <div>
                <SectionLabel>CSR Activities</SectionLabel>
                <p
                  className="font-cormorant italic text-[#666]"
                  style={{ fontSize: "16px", marginBottom: "24px", marginTop: "-12px" }}
                >
                  Our outreach programmes across Tamil Nadu
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {csrActivities.map((activity) => (
                    <ActivityCard key={activity} title={activity} />
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── Section 6: Impact Numbers ── */}
      <section className="text-center" style={{ backgroundColor: "#454F46", padding: "60px 24px" }}>
        <p className="font-cormorant text-white" style={{ fontSize: "36px", marginBottom: "12px" }}>
          Our Impact
        </p>
        <div
          className="mx-auto"
          style={{ width: "50px", height: "2px", backgroundColor: "#D1B05D", marginBottom: "48px" }}
        />
        <div className="flex flex-wrap items-center justify-center max-w-[960px] mx-auto">
          {impactStats.map((stat, i) => (
            <div key={stat.label} className="flex items-center">
              <div className="text-center px-10 py-3">
                <p className="font-dm font-bold text-gold" style={{ fontSize: "40px" }}>
                  {stat.number}
                </p>
                <p className="font-cormorant text-white" style={{ fontSize: "16px", marginTop: "6px" }}>
                  {stat.label}
                </p>
              </div>
              {i < impactStats.length - 1 && (
                <div
                  style={{ width: "1px", height: "60px", backgroundColor: "#D1B05D", opacity: 0.4 }}
                />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── Section 7: Call to Action ── */}
      <section className="bg-white text-center" style={{ padding: "60px 24px" }}>
        <p className="font-cormorant text-maroon" style={{ fontSize: "28px", marginBottom: "12px" }}>
          Interested in our CSR initiatives?
        </p>
        <p className="font-cormorant text-[#666]" style={{ fontSize: "18px", marginBottom: "32px" }}>
          Contact us to learn more about our community programmes
        </p>
        <a
          href="#"
          className="inline-block font-dm text-white bg-maroon border-2 border-maroon hover:bg-white hover:text-maroon transition-all duration-300"
          style={{ padding: "14px 40px", fontSize: "14px", letterSpacing: "2px" }}
        >
          Contact Us
        </a>
      </section>

      <Footer />
    </>
  );
}
