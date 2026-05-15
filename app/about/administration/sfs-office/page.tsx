"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import Image from "next/image";

const sidebarLinks = [
  { label: "MCC Association", href: "/about/administration/mcc-association", active: false },
  { label: "Governing Body", href: "/about/administration/governing-body", active: false },
  { label: "Board of Directors", href: "/about/administration/board-of-directors", active: false },
  { label: "Senatus", href: "/about/administration/senatus", active: false },
  { label: "Principal", href: "/about/administration/principal", active: false },
  { label: "Bursar", href: "/about/administration/bursar", active: false },
  { label: "Vice Principals", href: "/about/administration/vice-principals", active: false },
  { label: "Deans", href: "/about/administration/deans", active: false },
  { label: "Archives", href: "/about/administration/archives", active: false },
  { label: "SFS Office", href: "/about/administration/sfs-office", active: true },
  { label: "IQAC", href: "/about/administration/iqac", active: false },
  { label: "Principals Office", href: "/about/administration/principals-office", active: false },
  { label: "Bursars Office", href: "/about/administration/bursars-office", active: false },
  { label: "Organogram", href: "/about/administration/organogram", active: false },
];

const keyFacts = [
  "The class timing of SFS is 1.45 p.m. to 6.15 p.m., preceded by prayer at Anderson Hall from 1.30 p.m. to 1.45 p.m.",
  "There are 16 departments under SFS with about 125 Teaching staff, 17 Non-teaching staff and 2355 students.",
  "13 courses, 6 PG courses and 2 M.Phil courses are offered under SFS.",
  "For details about courses, please refer College website: Departments — Self-financed Stream",
];

const stats = [
  { number: "16",   label: "Departments" },
  { number: "125",  label: "Teaching Staff" },
  { number: "2355", label: "Students" },
  { number: "1999", label: "Established" },
];

export default function SFSOfficePage() {
  return (
    <>
      <Navbar />

      {/* Hero Banner */}
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
              <li><Link href="/" className="text-white/60 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-white/40">/</li>
              <li><Link href="#" className="text-white/60 hover:text-gold transition-colors">About Us</Link></li>
              <li className="text-white/40">/</li>
              <li><Link href="#" className="text-white/60 hover:text-gold transition-colors">Administration</Link></li>
              <li className="text-white/40">/</li>
              <li className="text-gold">SFS Office</li>
            </ol>
          </nav>
          <h1
            className="font-cormorant text-white font-light"
            style={{ fontSize: "44px", letterSpacing: "2px" }}
          >
            Self-Financed Stream (SFS) Office
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold" />
      </section>

      {/* Mobile sidebar tabs */}
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

      {/* Page layout */}
      <div style={{ backgroundColor: "white" }}>
        <div className="max-w-[1200px] mx-auto px-6 flex gap-8 items-start py-10">

          {/* Sidebar */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <div
              className="sticky top-6 bg-white border border-[#dfdfdf] rounded-sm p-6"
              style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
            >
              <p className="font-dm text-maroon text-[12px] font-bold tracking-[0.15em] uppercase mb-4 pb-2 border-b border-[#dfdfdf]">
                Administration
              </p>
              <ul>
                {sidebarLinks.map((link, i) => (
                  <li key={link.label} className={i < sidebarLinks.length - 1 ? "border-b border-[#f0f0f0]" : ""}>
                    <Link
                      href={link.href}
                      className={`block font-cormorant text-[15px] py-2 pl-3 transition-all duration-150 border-l-[3px] ${
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

            {/* Two-column layout: text left, director card right */}
            <div className="flex flex-col lg:flex-row gap-10">

              {/* Director card — shown first on mobile */}
              <div className="lg:hidden">
                <DirectorCard />
              </div>

              {/* LEFT: main text content */}
              <div style={{ flex: "0 0 65%" }}>

                <p
                  className="font-dm uppercase"
                  style={{ fontSize: "11px", letterSpacing: "3px", color: "#D1B05D", marginBottom: "12px" }}
                >
                  ADMINISTRATION
                </p>
                <h2
                  className="font-cormorant"
                  style={{ fontSize: "36px", color: "#7B2C3A", marginBottom: "8px" }}
                >
                  Self-Financed Stream (SFS) Office
                </h2>
                <div style={{ width: "50px", height: "2px", backgroundColor: "#D1B05D", marginBottom: "28px" }} />

                {/* Intro bold italic */}
                <p
                  className="font-cormorant"
                  style={{
                    fontSize: "19px",
                    color: "#454F46",
                    fontStyle: "italic",
                    lineHeight: "1.8",
                    marginBottom: "24px",
                  }}
                >
                  Self-financed Stream was started in 1999. Degree programmes of contemporary
                  relevance and employability are offered in SFS.
                </p>

                {/* Key facts */}
                <div style={{ marginBottom: "12px" }}>
                  {keyFacts.map((fact, i) => (
                    <div
                      key={i}
                      className="font-cormorant"
                      style={{
                        display: "flex",
                        gap: "12px",
                        alignItems: "flex-start",
                        backgroundColor: "#F3F7FF",
                        borderLeft: "3px solid #D1B05D",
                        borderRadius: "4px",
                        padding: "14px 18px",
                        marginBottom: "12px",
                        fontSize: "17px",
                        color: "#333",
                        lineHeight: "1.7",
                      }}
                    >
                      <span style={{ color: "#D1B05D", flexShrink: 0, marginTop: "3px" }}>●</span>
                      <span>{fact}</span>
                    </div>
                  ))}
                </div>

                {/* Gold divider */}
                <div style={{ height: "1px", backgroundColor: "#D1B05D", margin: "32px 0" }} />

                {/* SFS Office Functions */}
                <h3
                  className="font-cormorant font-bold"
                  style={{ fontSize: "22px", color: "#1a1a1a", marginBottom: "10px" }}
                >
                  SFS Office Functions
                </h3>
                <div style={{ width: "40px", height: "2px", backgroundColor: "#D1B05D", marginBottom: "16px" }} />
                <p
                  className="font-cormorant"
                  style={{ fontSize: "17px", color: "#444", lineHeight: "1.95", textAlign: "justify" }}
                >
                  The functions of SFS office include issue of bonafide certificates, preparation
                  of time-table, conduct of CIA tests, online registration for GC/ID/GE/Soft skills
                  courses, monitoring attendance of students and forwarding leave letters of staff,
                  department letters to Principal&apos;s office, budgetary requirements, remuneration
                  details of guest lecturers to Bursar&apos;s Office and Eligibility and condonation
                  details to student Records office etc.
                </p>

                {/* Contact card */}
                <div
                  style={{
                    backgroundColor: "#F3F7FF",
                    border: "1px solid #dfdfdf",
                    borderLeft: "4px solid #D1B05D",
                    borderRadius: "6px",
                    padding: "20px 24px",
                    marginTop: "24px",
                    display: "flex",
                    gap: "32px",
                    flexWrap: "wrap",
                  }}
                >
                  <div>
                    <p className="font-dm" style={{ fontSize: "11px", color: "#999", marginBottom: "4px", letterSpacing: "1px" }}>
                      OFFICE NO
                    </p>
                    <p className="font-dm font-bold" style={{ fontSize: "14px", color: "#333" }}>
                      📞&nbsp; 044 – 2239 0881
                    </p>
                  </div>
                  <div>
                    <p className="font-dm" style={{ fontSize: "11px", color: "#999", marginBottom: "4px", letterSpacing: "1px" }}>
                      EMAIL
                    </p>
                    <a
                      href="mailto:sfs@mcc.edu.in"
                      className="font-dm font-bold"
                      style={{ fontSize: "14px", color: "#D1B05D", textDecoration: "none" }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.textDecoration = "underline";
                        (e.currentTarget as HTMLAnchorElement).style.color = "#7B2C3A";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.textDecoration = "none";
                        (e.currentTarget as HTMLAnchorElement).style.color = "#D1B05D";
                      }}
                    >
                      📧&nbsp; sfs@mcc.edu.in
                    </a>
                  </div>
                </div>

              </div>

              {/* RIGHT: Director card — hidden on mobile (shown above instead) */}
              <div className="hidden lg:block" style={{ flex: "0 0 32%" }}>
                <DirectorCard />
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Stats Banner */}
      <section style={{ backgroundColor: "#454F46", padding: "50px 24px" }}>
        <div
          className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-center"
          style={{ gap: "0" }}
        >
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center" style={{ flex: 1 }}>
              <div style={{ textAlign: "center", padding: "16px 24px", width: "100%" }}>
                <p
                  className="font-dm font-bold"
                  style={{ fontSize: "40px", color: "#D1B05D", lineHeight: "1", marginBottom: "8px" }}
                >
                  {stat.number}
                </p>
                <p
                  className="font-cormorant"
                  style={{ fontSize: "16px", color: "white", letterSpacing: "0.5px" }}
                >
                  {stat.label}
                </p>
              </div>
              {i < stats.length - 1 && (
                <div
                  className="hidden sm:block"
                  style={{ width: "1px", height: "60px", backgroundColor: "#D1B05D", opacity: 0.5, flexShrink: 0 }}
                />
              )}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

function DirectorCard() {
  return (
    <div
      className="sticky top-[100px]"
      style={{
        backgroundColor: "white",
        border: "1px solid #dfdfdf",
        borderTop: "4px solid #D1B05D",
        borderRadius: "8px",
        padding: "28px 24px",
        textAlign: "center",
        boxShadow: "0 8px 32px rgba(123,44,58,0.10)",
      }}
    >
      <div style={{ marginBottom: "16px" }}>
        <Image
          src="/images/officials/VP-SFS.jpg"
          alt="Dr J. Jannet Vennila - Director SFS"
          width={140}
          height={140}
          style={{
            borderRadius: "50%",
            border: "3px solid #D1B05D",
            objectFit: "cover",
            objectPosition: "top center",
            display: "block",
            margin: "0 auto",
            boxShadow: "0 4px 16px rgba(123,44,58,0.2)",
          }}
        />
      </div>

      <span
        className="font-dm"
        style={{
          fontSize: "10px",
          letterSpacing: "2px",
          color: "#D1B05D",
          backgroundColor: "#F3F7FF",
          padding: "4px 12px",
          borderRadius: "20px",
          display: "inline-block",
          marginBottom: "10px",
          textTransform: "uppercase",
        }}
      >
        Director, SFS
      </span>

      <p
        className="font-cormorant font-bold"
        style={{ fontSize: "20px", color: "#1a1a1a", marginBottom: "4px" }}
      >
        Dr J. Jannet Vennila
      </p>
      <p
        className="font-dm"
        style={{ fontSize: "13px", color: "#666", marginBottom: "16px" }}
      >
        Director
      </p>

      <div
        style={{
          width: "40px",
          height: "1px",
          backgroundColor: "#D1B05D",
          margin: "0 auto 20px",
        }}
      />

      <Link
        href="/about/administration/vice-principals"
        className="font-dm font-bold inline-block transition-all duration-300"
        style={{
          backgroundColor: "#7B2C3A",
          color: "white",
          padding: "10px 24px",
          borderRadius: "4px",
          fontSize: "13px",
          letterSpacing: "1px",
          textDecoration: "none",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#454F46";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#7B2C3A";
        }}
      >
        About the Director
      </Link>
    </div>
  );
}
