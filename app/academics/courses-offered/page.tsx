"use client";

import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";

// ── Data ──────────────────────────────────────────────────────────────────────

const aidedUG = {
  heading: "Aided Stream — Undergraduate Programme",
  badge: "AIDED", badgeBg: "#7B2C3A", count: "13 Programmes",
  left: [
    "B.A. English Language and Literature",
    "B.A. Tamil Literature",
    "B.A. History",
    "B.A. Political Science",
    "B.A. Economics",
    "B.A. Philosophy",
    "B.Com. — Commerce",
  ],
  right: [
    "B.Sc. Mathematics",
    "B.Sc. Statistics",
    "B.Sc. Physics",
    "B.Sc. Chemistry",
    "B.Sc. Plant Biology and Plant Biotechnology",
    "B.Sc. Zoology",
  ],
};

const aidedPG = {
  heading: "Aided Stream — Postgraduate Programme",
  badge: "AIDED", badgeBg: "#7B2C3A", count: "15 Programmes",
  left: [
    "M.A. English Language and Literature",
    "M.A. Tamil Literature",
    "M.A. History",
    "M.A. Political Science",
    "M.A. Public Administration",
    "M.A. Economics",
    "M.A. Philosophy",
    "M.Com. — Commerce",
  ],
  right: [
    "M.S.W. (Community Development & Medical Psychiatry)",
    "M.Sc. Mathematics",
    "M.Sc. Statistics",
    "M.Sc. Physics",
    "M.Sc. Chemistry",
    "M.Sc. Plant Biology and Plant Biotechnology",
    "M.Sc. Zoology",
  ],
};

const sfsUG = {
  heading: "Self-Financed Stream — Undergraduate Programme",
  badge: "SFS", badgeBg: "#454F46", count: "18 Programmes",
  left: [
    "B.A. English Language and Literature",
    "B.A. Journalism",
    "B.A. History (Vocational) — (Archeology and Museology) — (Shift I)",
    "B.S.W. Social Work",
    "B.Com. — Commerce",
    "B.Com. Accounting and Finance",
    "B.Com. Professional Accounting",
    "B.B.A. Business Administration",
    "B.Sc. Geography, Tourism and Travel Management",
  ],
  right: [
    "B.Sc. Hospitality and Tourism",
    "B.Sc. Mathematics",
    "B.Sc. Physics",
    "B.Sc. Microbiology",
    "B.C.A. Computer Application",
    "B.Sc. Computer Science",
    "B.Sc. Visual Communication",
    "B.Sc. Physical Education, Health Education and Sports",
    "B.Sc. Psychology",
  ],
};

const sfsPG = {
  heading: "Self-Financed Stream — Postgraduate Programme",
  badge: "SFS", badgeBg: "#454F46", count: "8 Programmes",
  left: [
    "M.S.W. Social Work (Human Resource Management)",
    "M.Com. Computer-Oriented Business Application",
    "M.A. Communication",
    "M.Sc. Chemistry",
  ],
  right: [
    "M.Sc. Applied Microbiology",
    "M.C.A. Computer Application",
    "M.Sc. Data Science",
  ],
};

const aidedPhD = {
  heading: "Aided Stream — Research Programme — Ph.D",
  badge: "AIDED", badgeBg: "#7B2C3A", count: "17 Departments",
  left: [
    "English",
    "Tamil",
    "History",
    "Political Science",
    "Public Administration",
    "Economics",
    "Philosophy",
    "Commerce",
    "Botany",
  ],
  right: [
    "Mathematics",
    "Statistics",
    "Physics",
    "Chemistry",
    "Zoology",
    "Telugu (Part-Time)",
    "Social Work (Part-Time)",
  ],
};

const sfsPhD = {
  heading: "Self-Financed Stream — Research Programme — Ph.D",
  badge: "SFS", badgeBg: "#454F46", count: "3 Departments",
  left: [
    "Microbiology",
    "Commerce (Part-Time)",
  ],
  right: [
    "Social Work (Part-Time)",
  ],
};

const tabs = [
  "Aided Stream",
  "Self-Financed Stream",
  "Research Programme - Ph.D",
  "All Programmes",
];

const allStats = [
  { number: "13", label: "UG Aided Programmes" },
  { number: "15", label: "PG Aided Programmes" },
  { number: "18", label: "UG SFS Programmes" },
  { number: "8",  label: "PG SFS Programmes" },
];

// ── Components ────────────────────────────────────────────────────────────────

function CourseItem({ name }: { name: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "10px",
        padding: "10px 0",
        borderBottom: "1px solid #f5f5f5",
      }}
    >
      <span
        style={{
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          backgroundColor: "#D1B05D",
          flexShrink: 0,
          marginTop: "6px",
        }}
      />
      <span className="font-cormorant" style={{ fontSize: "16px", color: "#333", lineHeight: "1.4" }}>
        {name}
      </span>
    </div>
  );
}

type ProgrammeData = {
  heading: string;
  badge: string;
  badgeBg: string;
  count: string;
  left: string[];
  right: string[];
};

function ProgrammeSection({ heading, badge, badgeBg, count, left, right }: ProgrammeData) {
  return (
    <div style={{ marginBottom: "32px" }}>
      {/* Section heading */}
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "8px",
          padding: "20px 28px",
          marginBottom: "24px",
          borderLeft: "5px solid #7B2C3A",
          boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
          <h3 className="font-cormorant font-bold" style={{ fontSize: "24px", color: "#1a1a1a", margin: 0 }}>
            {heading}
          </h3>
          <span
            className="font-dm"
            style={{
              backgroundColor: badgeBg,
              color: "white",
              fontSize: "10px",
              textTransform: "uppercase",
              padding: "4px 12px",
              borderRadius: "20px",
              letterSpacing: "1px",
            }}
          >
            {badge}
          </span>
        </div>
        <span
          className="font-dm"
          style={{
            fontSize: "12px",
            color: "#D1B05D",
            backgroundColor: "#F3F7FF",
            padding: "4px 12px",
            borderRadius: "20px",
            flexShrink: 0,
          }}
        >
          {count}
        </span>
      </div>

      {/* Courses list */}
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "8px",
          padding: "28px 32px",
          border: "1px solid #dfdfdf",
          boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "0 40px" }}>
          <div className="sm:border-r sm:border-[#efefef] sm:pr-8">
            {left.map((course) => <CourseItem key={course} name={course} />)}
          </div>
          <div>
            {right.map((course) => <CourseItem key={course} name={course} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

function StreamLabel({ label, color }: { label: string; color: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        margin: "40px 0 20px",
      }}
    >
      <div style={{ width: "4px", height: "28px", backgroundColor: color, borderRadius: "2px" }} />
      <p className="font-dm font-bold" style={{ fontSize: "11px", letterSpacing: "3px", color, textTransform: "uppercase" }}>
        {label}
      </p>
    </div>
  );
}

// ── Filter config ─────────────────────────────────────────────────────────────

const filters = [
  { id: "all",       label: "All Programmes" },
  { id: "aided-ug",  label: "Aided — UG" },
  { id: "aided-pg",  label: "Aided — PG" },
  { id: "sfs-ug",    label: "SFS — UG" },
  { id: "sfs-pg",    label: "SFS — PG" },
  { id: "phd-aided", label: "Ph.D — Aided" },
  { id: "phd-sfs",   label: "Ph.D — SFS" },
];

// ── Main Page ─────────────────────────────────────────────────────────────────

export default function CoursesOfferedPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [visible, setVisible] = useState(true);

  function handleFilter(id: string) {
    if (id === activeFilter) return;
    setVisible(false);
    setTimeout(() => { setActiveFilter(id); setVisible(true); }, 150);
  }

  const show = (id: string) => activeFilter === "all" || activeFilter === id;

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
              <li><Link href="/academics" className="text-white/60 hover:text-gold transition-colors">Academics</Link></li>
              <li className="text-white/40">/</li>
              <li className="text-gold">Courses Offered</li>
            </ol>
          </nav>
          <h1 className="font-cormorant text-white font-light" style={{ fontSize: "52px", letterSpacing: "2px" }}>
            Courses Offered
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold" />
      </section>

      {/* Content area */}
      <section style={{ backgroundColor: "#F3F7FF", padding: "50px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

          {/* Filter chips */}
          <div
            className="flex flex-wrap gap-2"
            style={{ marginBottom: "36px" }}
          >
            {filters.map((f) => {
              const isActive = activeFilter === f.id;
              return (
                <button
                  key={f.id}
                  onClick={() => handleFilter(f.id)}
                  className="font-dm"
                  style={{
                    padding: "8px 18px",
                    fontSize: "13px",
                    borderRadius: "20px",
                    border: isActive ? "1px solid #7B2C3A" : "1px solid #dfdfdf",
                    backgroundColor: isActive ? "#7B2C3A" : "white",
                    color: isActive ? "white" : "#555",
                    fontWeight: isActive ? 600 : 400,
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    outline: "none",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      (e.currentTarget as HTMLButtonElement).style.borderColor = "#7B2C3A";
                      (e.currentTarget as HTMLButtonElement).style.color = "#7B2C3A";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      (e.currentTarget as HTMLButtonElement).style.borderColor = "#dfdfdf";
                      (e.currentTarget as HTMLButtonElement).style.color = "#555";
                    }
                  }}
                >
                  {f.label}
                </button>
              );
            })}
          </div>

          {/* Programmes list */}
          <div style={{ transition: "opacity 0.15s ease", opacity: visible ? 1 : 0 }}>

            {/* Aided Stream */}
            {(show("aided-ug") || show("aided-pg")) && (
              <StreamLabel label="Aided Stream" color="#7B2C3A" />
            )}
            {show("aided-ug")  && <ProgrammeSection {...aidedUG} />}
            {show("aided-pg")  && <ProgrammeSection {...aidedPG} />}

            {/* SFS */}
            {(show("sfs-ug") || show("sfs-pg")) && (
              <StreamLabel label="Self-Financed Stream" color="#454F46" />
            )}
            {show("sfs-ug")   && <ProgrammeSection {...sfsUG} />}
            {show("sfs-pg")   && <ProgrammeSection {...sfsPG} />}

            {/* Ph.D */}
            {(show("phd-aided") || show("phd-sfs")) && (
              <StreamLabel label="Research Programmes — Ph.D" color="#D1B05D" />
            )}
            {show("phd-aided") && <ProgrammeSection {...aidedPhD} />}
            {show("phd-sfs")   && <ProgrammeSection {...sfsPhD} />}

            {/* Summary */}
            <div style={{ marginTop: "56px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "24px" }}>
                <div style={{ width: "4px", height: "32px", backgroundColor: "#D1B05D", borderRadius: "2px" }} />
                <h3 className="font-cormorant font-bold" style={{ fontSize: "26px", color: "#1a1a1a", margin: 0 }}>
                  Programme Summary
                </h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4" style={{ gap: "16px" }}>
                {allStats.map((stat) => (
                  <div
                    key={stat.label}
                    style={{
                      backgroundColor: "white",
                      border: "1px solid #dfdfdf",
                      borderTop: "3px solid #D1B05D",
                      borderRadius: "8px",
                      padding: "24px 16px",
                      textAlign: "center",
                      boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                    }}
                  >
                    <p className="font-dm font-bold" style={{ fontSize: "36px", color: "#7B2C3A", margin: 0, lineHeight: 1 }}>
                      {stat.number}
                    </p>
                    <p className="font-cormorant" style={{ fontSize: "15px", color: "#666", marginTop: "10px" }}>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ backgroundColor: "#7B2C3A", padding: "50px 24px", textAlign: "center" }}>
        <h2 className="font-cormorant text-white" style={{ fontSize: "32px", marginBottom: "10px" }}>
          Interested in Joining MCC?
        </h2>
        <p
          className="font-cormorant text-white/80"
          style={{ fontSize: "18px", fontStyle: "italic", marginBottom: "28px" }}
        >
          Apply for Admission 2026
        </p>
        <button
          className="font-dm font-bold"
          style={{
            backgroundColor: "#D1B05D",
            color: "#7B2C3A",
            padding: "14px 40px",
            borderRadius: "4px",
            fontSize: "14px",
            border: "none",
            cursor: "pointer",
            transition: "filter 0.2s ease",
            letterSpacing: "0.5px",
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1.1)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1)"; }}
        >
          Apply Now →
        </button>
      </section>

      <Footer />
    </>
  );
}
