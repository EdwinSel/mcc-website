"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";

const sidebarLinks = [
  { label: "Emblem & Motto", href: "/about/emblem-motto", active: false },
  { label: "Mission & Vision", href: "/about/mission-vision", active: false },
  { label: "History & Milestones", href: "/about/history-and-milestones", active: true },
  { label: "Corporate Social Responsibility", href: "/about/csr", active: false },
  { label: "Institutions", href: "/about/institutions", active: false },
];

const introStats = [
  { number: "1837", label: "Founded" },
  { number: "185+", label: "Years of Excellence" },
  { number: "7000", label: "Students" },
  { number: "70+", label: "Programmes" },
];

type Milestone = { year: string; side: "left" | "right"; events: string[] };

const milestones: Milestone[] = [
  { year: "1837", side: "left",  events: ["General Assembly School founded in George Town"] },
  { year: "1865", side: "right", events: ["School upgraded to College with F.A. Classes"] },
  { year: "1867", side: "left",  events: ["Junior B.A. Class commenced"] },
  { year: "1877", side: "right", events: ["Institution named Madras Christian College"] },
  { year: "1937", side: "left",  events: [
    "Centenary of the Institution and shift to Tambaram",
    "Establishment of Men's Halls: Schuyer Hall, St. Thomas's Hall, Bishop Heber Hall",
  ]},
  { year: "1938", side: "right", events: ["College hosted International Missionary Conference"] },
  { year: "1939", side: "left",  events: ["Admission of women students"] },
  { year: "1950", side: "right", events: ["Establishment of Women's Hostel in Guindy"] },
  { year: "1962", side: "left",  events: ["125th year of founding of Institution"] },
  { year: "1968", side: "right", events: ["Women's Hostel shifted to College Campus"] },
  { year: "1978", side: "left",  events: ["Autonomy granted"] },
  { year: "1983", side: "right", events: ["School of Continuing Education started"] },
  { year: "1987", side: "left",  events: [
    "150th year of founding of Institution",
    "Institute for advanced christian studies started",
  ]},
  { year: "1999", side: "right", events: ["Self-Financed Stream started (MCA in 1993)"] },
  { year: "2003", side: "left",  events: ["Introduction of Choice Based Credit System (CBCS)"] },
  { year: "2009", side: "right", events: ["Margaret Hall, the second Hall for women dedicated"] },
  { year: "2010", side: "left",  events: ["Centre for Media Studies inaugurated"] },
  { year: "2012", side: "right", events: ["175th year of founding of Institution"] },
  { year: "2013", side: "left",  events: [
    "MCC Community College started",
    "Global Alumni Reunion held",
  ]},
  { year: "2014", side: "right", events: ["Introduction of B.Voc. courses"] },
  { year: "2015", side: "left",  events: [
    "Installation of 100 KVA Solar Power Plant",
    "Introduction of the Indoor Sports Stadium",
  ]},
  { year: "2016", side: "right", events: [
    "UGC — College with Potential for Excellence",
    "James Hall — third Women's Hall dedicated",
    "MCC Alumni Association 125th year Global Reunion",
    "MCC-Boyd Business School",
  ]},
  { year: "2017", side: "left",  events: [
    "'Sport for All' programme commenced",
    "Renowned Mc Nicol Lounge for Women dedicated",
  ]},
  { year: "2018", side: "right", events: [
    "USAID — ASHA 500 kWp Solar Power Plant commissioned",
    "MCC Kotagiri Community College",
    "MCC-Hamlin Hope Centre",
    "QSC Building",
    "Modern Students' Centre",
  ]},
  { year: "2020", side: "left",  events: [
    "Sewage Treatment Plant (STP) installed",
    "MCC Research Colloquium (MCC-RC)",
    "MCC Institution's Innovation Council (MCC-IIC)",
    "MCC Entrepreneurship Development Cell (MCC-EDC)",
    "Launch of Ideation Club",
    "Prof. Edward Barnes Tree Plantation Drive 2020",
  ]},
  { year: "2021", side: "right", events: [
    "Inauguration of MCC-MRF Innovation Park",
    "Setting up of MCC Covid Task Force",
    "MCC-Covida Tele-Counselling Centre",
    "IMA Tambaram Doctors Day 2021 hosted",
    "Recognised as Examination Centre for Bachelor of Christian Studies under Serampore College",
    "Launch of Wildlife Conservation Club",
    "MCC National Digital Library of India Club",
    "Introduction of Best Innovator Awards",
    "Recognition of the School of Continuing Education as Learners' Support Centre of the University of Madras",
    "Expansion of the office of the DSA with Associate DSAs for Aided and SFS",
    "Initiated Seed Money Grant to faculty members",
  ]},
  { year: "2022", side: "left",  events: [
    "Recognition of MCC Community College as Training Centre under the National Skill Development Corporation (NSDC)",
    "Launch of Weston Centre for Teaching & Learning",
    "Inauguration of the Research Scholars Lounge",
    "Inauguration of the MCC-MRF Innovation Park Prototype",
    "Paper Publication Awards for Faculty, Scholars and Students",
    "Establishment of Vice-Principals' Office (Administration & SFS)",
  ]},
  { year: "2024", side: "right", events: [
    "Establishment of Alumni and Development Office",
    "SIMA Resource Centre",
    "Dedication of Refurbished Nursing Training Centre at MCC — FLI",
    "Construction of Kitchen-diner at MCC-PERRC",
    "Inauguration of washrooms at the Department of Commerce, Pavilion and Rededication of Men's Washroom at Pavilion",
    "Establishment and dedication of Dept of Commerce (Daksh) faculty room & office",
    "Dedication of Bharati Atrial tower",
  ]},
  { year: "2025", side: "left",  events: ["Self-Financed Stream Silver Jubilee Celebrations"] },
];

/* ── Shared card component ── */
function MilestoneCard({ events, side }: { events: string[]; side: "left" | "right" }) {
  return (
    <div
      className="transition-all duration-300"
      style={{
        backgroundColor: "white",
        border: "1px solid #dfdfdf",
        borderRadius: "6px",
        padding: "24px 28px",
        boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
        width: "100%",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-3px)";
        e.currentTarget.style.borderColor = "#D1B05D";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.borderColor = "#dfdfdf";
      }}
    >
      {events.length === 1 ? (
        <p
          className="font-cormorant text-[#333333]"
          style={{ fontSize: "17px", lineHeight: "1.7", textAlign: side === "left" ? "right" : "left" }}
        >
          {events[0]}
        </p>
      ) : (
        <ul>
          {events.map((ev, i) => (
            <li
              key={i}
              className="font-cormorant text-[#333333]"
              style={{
                fontSize: "17px",
                lineHeight: "1.7",
                display: "flex",
                flexDirection: side === "left" ? "row-reverse" : "row",
                alignItems: "flex-start",
                gap: "8px",
              }}
            >
              <span style={{ color: "#D1B05D", flexShrink: 0, marginTop: "3px" }}>•</span>
              <span>{ev}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/* ── Desktop year circle ── */
function YearCircle({ year }: { year: string }) {
  return (
    <div
      style={{
        flexShrink: 0,
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        backgroundColor: "#7B2C3A",
        border: "3px solid #D1B05D",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        zIndex: 10,
      }}
    >
      <span
        className="font-dm font-bold text-white"
        style={{ fontSize: "11px", textAlign: "center", lineHeight: 1.2 }}
      >
        {year}
      </span>
    </div>
  );
}

/* ── Gold connector helpers ── */
const DOT: React.CSSProperties = {
  position: "absolute",
  width: "8px",
  height: "8px",
  borderRadius: "50%",
  backgroundColor: "#D1B05D",
  top: "-3.5px",
};

const LINE_W = 32; // px gap between card edge and circle

export default function HistoryMilestonesPage() {
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
              <li className="text-gold">History &amp; Milestones</li>
            </ol>
          </nav>
          <h1
            className="font-cormorant text-white font-light"
            style={{ fontSize: "52px", letterSpacing: "2px" }}
          >
            History &amp; Milestones
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold" />
      </section>

      {/* ── Section 2: Intro Strip ── */}
      <section style={{ backgroundColor: "#454F46", padding: "40px 24px" }}>
        <div className="max-w-[1200px] mx-auto text-center">
          <p
            className="font-cormorant italic text-white"
            style={{ fontSize: "26px", marginBottom: "32px" }}
          >
            Madras Christian College — Serving India Since 1837
          </p>

          <div className="flex flex-wrap items-center justify-center">
            {introStats.map((stat, i) => (
              <div key={stat.label} className="flex items-center">
                <div className="text-center px-8 py-2">
                  <p className="font-dm font-bold text-gold" style={{ fontSize: "32px" }}>
                    {stat.number}
                  </p>
                  <p className="font-cormorant text-white" style={{ fontSize: "14px" }}>
                    {stat.label}
                  </p>
                </div>
                {i < introStats.length - 1 && (
                  <div style={{ width: "1px", height: "48px", backgroundColor: "#D1B05D", opacity: 0.5 }} />
                )}
              </div>
            ))}
          </div>
        </div>
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

      {/* ── Section 3: Timeline ── */}
      <section style={{ backgroundColor: "#F3F7FF", padding: "80px 24px" }}>
        <div className="max-w-[1200px] mx-auto flex gap-8 items-start">

          {/* Sidebar (desktop) */}
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

          {/* Timeline area */}
          <div className="flex-1 min-w-0">

            {/* ════ DESKTOP TIMELINE (md+) ════ */}
            <div className="hidden md:block">
              <div style={{ position: "relative" }}>

                {/* Vertical center line */}
                <div style={{
                  position: "absolute",
                  left: "50%",
                  top: 0,
                  bottom: 0,
                  width: "2px",
                  backgroundColor: "#D1B05D",
                  transform: "translateX(-50%)",
                  zIndex: 0,
                }} />

                {milestones.map((m) => (
                  <div
                    key={m.year}
                    style={{
                      position: "relative",
                      display: "flex",
                      alignItems: "flex-start",
                      marginBottom: "48px",
                    }}
                  >
                    {/* Left half */}
                    <div style={{
                      width: `calc(50% - 30px)`,
                      paddingRight: `${LINE_W}px`,
                      display: "flex",
                      justifyContent: "flex-end",
                    }}>
                      {m.side === "left" && (
                        <div style={{ position: "relative", width: "100%" }}>
                          <MilestoneCard events={m.events} side="left" />
                          {/* connector: card-right → circle */}
                          <div style={{
                            position: "absolute",
                            top: "34px",
                            right: `-${LINE_W}px`,
                            width: `${LINE_W}px`,
                            height: "1px",
                            backgroundColor: "#D1B05D",
                          }}>
                            <div style={{ ...DOT, left: 0 }} />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Year circle */}
                    <YearCircle year={m.year} />

                    {/* Right half */}
                    <div style={{
                      width: `calc(50% - 30px)`,
                      paddingLeft: `${LINE_W}px`,
                    }}>
                      {m.side === "right" && (
                        <div style={{ position: "relative" }}>
                          {/* connector: circle → card-left */}
                          <div style={{
                            position: "absolute",
                            top: "34px",
                            left: `-${LINE_W}px`,
                            width: `${LINE_W}px`,
                            height: "1px",
                            backgroundColor: "#D1B05D",
                          }}>
                            <div style={{ ...DOT, right: 0 }} />
                          </div>
                          <MilestoneCard events={m.events} side="right" />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ════ MOBILE TIMELINE (below md) ════ */}
            <div className="block md:hidden">
              <div style={{ position: "relative", paddingLeft: "52px" }}>

                {/* Left vertical line */}
                <div style={{
                  position: "absolute",
                  left: "19px",
                  top: 0,
                  bottom: 0,
                  width: "2px",
                  backgroundColor: "#D1B05D",
                }} />

                {milestones.map((m) => (
                  <div
                    key={`m-${m.year}`}
                    style={{ position: "relative", marginBottom: "28px" }}
                  >
                    {/* Circle on left line */}
                    <div style={{
                      position: "absolute",
                      left: "-52px",
                      top: "0px",
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      backgroundColor: "#7B2C3A",
                      border: "3px solid #D1B05D",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      zIndex: 10,
                    }}>
                      <span
                        className="font-dm font-bold text-white"
                        style={{ fontSize: "8px", textAlign: "center", lineHeight: 1.2 }}
                      >
                        {m.year}
                      </span>
                    </div>

                    {/* Short connector */}
                    <div style={{
                      position: "absolute",
                      left: "-12px",
                      top: "19px",
                      width: "12px",
                      height: "1px",
                      backgroundColor: "#D1B05D",
                    }} />

                    <MilestoneCard events={m.events} side="right" />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Section 4: Closing Banner ── */}
      <section
        className="text-center"
        style={{ backgroundColor: "#7B2C3A", padding: "60px 24px" }}
      >
        <p
          className="font-cormorant italic text-white"
          style={{ fontSize: "36px", marginBottom: "16px" }}
        >
          A Legacy of Excellence
        </p>
        <p
          className="font-cormorant text-gold mx-auto"
          style={{ fontSize: "18px", maxWidth: "600px", lineHeight: "1.7" }}
        >
          From a humble school in George Town to one of India&apos;s finest institutions
          — the journey continues.
        </p>
      </section>

      <Footer />
    </>
  );
}
