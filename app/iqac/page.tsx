"use client";

import { useState, useEffect } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";

const menuItems = [
  "Objectives and Functions",
  "Composition of IQAC",
  "Annual Reports",
  "Minutes and Action Taken Report",
  "Committees",
  "AQAR",
  "National Institutional Ranking Framework (NIRF)",
  "Self-Study Report (SSR)",
  "RTI",
  "Programmes Offered",
  "Graduate Attributes and Programme Outcomes",
  "Memorandum of Understanding",
  "College Calendar",
  "Feedback",
];

const objectivesBullets = [
  "Development and application of quality benchmarks/parameters for the various academic and administrative activities of the college.",
  "Dissemination of information on the various quality parameters of higher education.",
  "Organization of workshops, seminars on quality related themes and promotion of quality circles.",
  "Documentation of the various programmes/activities leading to quality improvement.",
  "Preparation of Annual Quality Assurance Report (AQAR) to be submitted to National Assessment and Accreditation Council.",
];

const stats = [
  { number: "2004",  label: "Established" },
  { number: "A++",   label: "NAAC Grade" },
  { number: "20+",   label: "Years of Excellence" },
  { number: "100%",  label: "Quality Commitment" },
];

function ObjectivesContent() {
  return (
    <div>
      <p
        className="font-cormorant"
        style={{
          fontSize: "17px",
          color: "#444",
          lineHeight: "1.95",
          textAlign: "justify",
          marginBottom: "28px",
        }}
      >
        Based on the recommendations of the NAAC, the Internal Quality Assurance Cell (IQAC) was
        setup at Madras Christian College during 2004-2005. The Cell monitors the quality
        parameters in the College and ensures that the standards of excellence reflected in the
        vision and mission of the College are met and sustained. The IQAC aims to develop a system
        for conscious, consistent and catalytic action to improve the academic and administrative
        performance of the institution.
      </p>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {objectivesBullets.map((item, i) => (
          <li
            key={i}
            className="font-cormorant"
            style={{
              fontSize: "17px",
              color: "#333",
              lineHeight: "2",
              display: "flex",
              gap: "12px",
              alignItems: "flex-start",
              marginBottom: "8px",
            }}
          >
            <span style={{ color: "#D1B05D", flexShrink: 0, marginTop: "3px" }}>●</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const compositionDocs = [
  { year: "Composition for the year 2025-26", file: "IQAC-Composition%20on-2025-2026.pdf", raw: "IQAC-Composition on-2025-2026.pdf" },
  { year: "Composition for the year 2024-25", file: "IQAC-Composition%20on-2024-2025.pdf", raw: "IQAC-Composition on-2024-2025.pdf" },
  { year: "Composition for the year 2023-24", file: "IQAC-Composition%20on-2023-2024.pdf", raw: "IQAC-Composition on-2023-2024.pdf" },
  { year: "Composition for the year 2022-23", file: "IQAC-Composition%20on-2022-2023.pdf", raw: "IQAC-Composition on-2022-2023.pdf" },
  { year: "Composition for the year 2020-22", file: "IQAC-Composition-on-2020-2022-.pdf",  raw: "IQAC-Composition-on-2020-2022-.pdf" },
];

function DocCard({ year, file, raw }: { year: string; file: string; raw: string }) {
  const path = `/Docs/Compisistion-Docs/${file}`;
  const downloadPath = `/Docs/Compisistion-Docs/${raw}`;

  return (
    <div
      style={{
        backgroundColor: "white",
        border: "1px solid #dfdfdf",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.borderColor = "#D1B05D";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.borderColor = "#dfdfdf";
      }}
    >
      {/* PDF preview area */}
      <div style={{ height: "220px", backgroundColor: "#F3F7FF", position: "relative", overflow: "hidden" }}>
        <iframe
          src={path}
          style={{ width: "100%", height: "300px", border: "none", pointerEvents: "none", marginTop: "-20px" }}
          title={year}
        />
        <span
          className="font-dm"
          style={{
            position: "absolute",
            bottom: "8px",
            right: "8px",
            backgroundColor: "#7B2C3A",
            color: "white",
            padding: "4px 8px",
            borderRadius: "4px",
            fontSize: "10px",
          }}
        >
          PDF
        </span>
      </div>

      {/* Card footer */}
      <div style={{ padding: "16px" }}>
        <p
          className="font-cormorant font-bold"
          style={{ fontSize: "17px", color: "#1a1a1a", marginBottom: "12px" }}
        >
          {year}
        </p>
        <div style={{ display: "flex", gap: "8px" }}>
          <button
            className="font-dm"
            onClick={() => window.open(path, "_blank")}
            style={{
              flex: 1,
              backgroundColor: "#F3F7FF",
              color: "#7B2C3A",
              border: "1px solid #7B2C3A",
              padding: "8px 16px",
              borderRadius: "4px",
              fontSize: "12px",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#7B2C3A";
              (e.currentTarget as HTMLButtonElement).style.color = "white";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#F3F7FF";
              (e.currentTarget as HTMLButtonElement).style.color = "#7B2C3A";
            }}
          >
            View
          </button>
          <a
            href={downloadPath}
            download={raw}
            className="font-dm"
            style={{
              flex: 1,
              backgroundColor: "#7B2C3A",
              color: "white",
              padding: "8px 16px",
              borderRadius: "4px",
              fontSize: "12px",
              textAlign: "center",
              textDecoration: "none",
              transition: "background-color 0.2s ease",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#454F46";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#7B2C3A";
            }}
          >
            Download
          </a>
        </div>
      </div>
    </div>
  );
}

function CompositionContent() {
  return (
    <div>
      <p
        className="font-cormorant"
        style={{ fontSize: "16px", color: "#666", fontStyle: "italic", marginBottom: "32px" }}
      >
        The IQAC composition includes members from various academic and administrative departments
        ensuring comprehensive quality oversight.
      </p>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        style={{ gap: "24px" }}
      >
        {compositionDocs.map((doc) => (
          <DocCard key={doc.file} {...doc} />
        ))}
      </div>
    </div>
  );
}

const annualReportGroups = [
  {
    year: "2023 - 2024",
    aided: "Principals-Report-2023-2024-Aided.pdf",
    sfs:   "Principals-Report-2023-2024-SFS.pdf",
  },
  {
    year: "2022 - 2023",
    aided: "Principals-Report-2022-2023-Aided.pdf",
    sfs:   "Principals-Report-2022-2023-SFS.pdf",
  },
  {
    year: "2021 - 2022",
    aided: "Principals-Report-2021-22-Aided.pdf",
    sfs:   "Principals-Report-2021-2022-SFS.pdf",
  },
];

function ReportCard({
  file,
  streamLabel,
  bg,
}: {
  file: string;
  streamLabel: string;
  bg: string;
}) {
  const url = `/Docs/Annual%20Reports/${file}`;
  return (
    <div
      onClick={() => window.open(url, "_blank")}
      style={{
        flex: "1 1 48%",
        backgroundColor: bg,
        borderRadius: "8px",
        overflow: "hidden",
        height: "160px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "12px",
        cursor: "pointer",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.filter = "brightness(1.15)";
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.25)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.filter = "brightness(1)";
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
        <path
          d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polyline
          points="14,2 14,8 20,8"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line x1="16" y1="13" x2="8" y2="13" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="16" y1="17" x2="8" y2="17" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <polyline points="10,9 9,9 8,9" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <div style={{ textAlign: "center" }}>
        <p className="font-dm font-bold" style={{ fontSize: "16px", color: "white", marginBottom: "4px" }}>
          Principal&apos;s Report
        </p>
        <p className="font-dm" style={{ fontSize: "13px", color: "rgba(255,255,255,0.8)" }}>
          {streamLabel}
        </p>
      </div>
    </div>
  );
}

function AnnualReportsContent() {
  return (
    <div>
      {/* Legend */}
      <div style={{ display: "flex", gap: "24px", marginBottom: "24px", flexWrap: "wrap" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ display: "inline-block", width: "16px", height: "16px", backgroundColor: "#7B2C3A", borderRadius: "3px" }} />
          <span className="font-dm" style={{ fontSize: "13px", color: "#666" }}>Aided Stream</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ display: "inline-block", width: "16px", height: "16px", backgroundColor: "#454F46", borderRadius: "3px" }} />
          <span className="font-dm" style={{ fontSize: "13px", color: "#666" }}>Self-Financed Stream</span>
        </div>
      </div>

      {/* Year groups */}
      {annualReportGroups.map((group, i) => (
        <div key={group.year}>
          <h3
            className="font-cormorant font-bold"
            style={{
              fontSize: "22px",
              color: "#1a1a1a",
              borderBottom: "2px solid #dfdfdf",
              paddingBottom: "8px",
              marginBottom: "20px",
              marginTop: i === 0 ? "0" : "36px",
            }}
          >
            {group.year}
          </h3>
          <div className="flex flex-col sm:flex-row" style={{ gap: "4%" }}>
            <ReportCard file={group.aided} streamLabel="Aided Stream"           bg="#7B2C3A" />
            <ReportCard file={group.sfs}   streamLabel="Self - Financed Stream" bg="#454F46" />
          </div>
        </div>
      ))}
    </div>
  );
}

const minutesGroups = [
  {
    year: "2023 - 2024",
    dates: ["September 12, 2023", "October 7, 2023", "December 16, 2023", "May 20, 2024"],
  },
  {
    year: "2022 - 2023",
    dates: ["July 29, 2022", "September 6, 2022", "November 30, 2022", "April 13, 2023"],
  },
  {
    year: "2021 - 2022",
    dates: ["August 27, 2021", "November 12, 2021", "February 8, 2022", "March 24, 2022"],
  },
  {
    year: "2020 - 2021",
    dates: ["August 3, 2020", "September 16, 2020", "January 20, 2021", "May 28, 2021"],
  },
];

function MinutesLinkItem({ label }: { label: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "6px 0",
        borderBottom: "1px solid #f5f5f5",
        cursor: "pointer",
        transition: "all 0.2s",
      }}
      onMouseEnter={(e) => {
        const icon = e.currentTarget.querySelector(".link-icon") as HTMLElement;
        const text = e.currentTarget.querySelector(".link-text") as HTMLElement;
        if (icon) icon.style.transform = "translateX(3px)";
        if (text) { text.style.color = "#454F46"; text.style.textDecoration = "underline"; }
      }}
      onMouseLeave={(e) => {
        const icon = e.currentTarget.querySelector(".link-icon") as HTMLElement;
        const text = e.currentTarget.querySelector(".link-text") as HTMLElement;
        if (icon) icon.style.transform = "translateX(0)";
        if (text) { text.style.color = "#7B2C3A"; text.style.textDecoration = "none"; }
      }}
    >
      <span
        className="link-icon"
        style={{ color: "#D1B05D", fontSize: "14px", flexShrink: 0, transition: "transform 0.2s" }}
      >
        ✦
      </span>
      <a
        href="#"
        className="link-text font-cormorant"
        style={{ fontSize: "16px", color: "#7B2C3A", textDecoration: "none", transition: "all 0.2s" }}
        onClick={(e) => e.preventDefault()}
      >
        {label}
      </a>
    </div>
  );
}

function MinutesContent() {
  return (
    <div>
      {minutesGroups.map((group, i) => (
        <div key={group.year}>
          <h3
            className="font-cormorant font-bold"
            style={{
              fontSize: "22px",
              color: "#1a1a1a",
              borderBottom: "2px solid #dfdfdf",
              paddingBottom: "8px",
              marginBottom: "20px",
              marginTop: i === 0 ? "0" : "36px",
            }}
          >
            {group.year}
          </h3>
          <div className="flex flex-col sm:flex-row gap-8">
            {/* Minutes column */}
            <div style={{ flex: 1 }}>
              <h4
                className="font-cormorant"
                style={{ fontSize: "18px", color: "#7B2C3A", marginBottom: "16px" }}
              >
                Minutes of the Meeting
              </h4>
              {group.dates.map((date) => (
                <MinutesLinkItem key={`min-${date}`} label={date} />
              ))}
            </div>
            {/* Action Taken Report column */}
            <div style={{ flex: 1 }}>
              <h4
                className="font-cormorant"
                style={{ fontSize: "18px", color: "#7B2C3A", marginBottom: "16px" }}
              >
                Action Taken Report
              </h4>
              {group.dates.map((date) => (
                <MinutesLinkItem key={`atr-${date}`} label={date} />
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* Bottom note */}
      <div
        style={{
          backgroundColor: "#F3F7FF",
          border: "1px solid #D1B05D",
          borderRadius: "6px",
          padding: "16px 20px",
          marginTop: "32px",
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <span style={{ color: "#D1B05D", fontSize: "18px", flexShrink: 0 }}>ℹ️</span>
        <p
          className="font-cormorant"
          style={{ fontSize: "15px", color: "#666", fontStyle: "italic", margin: 0 }}
        >
          Links to documents will be updated soon.
        </p>
      </div>
    </div>
  );
}

function ComingSoonContent({ title }: { title: string }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "340px",
        textAlign: "center",
        gap: "14px",
      }}
    >
      <svg
        width="56"
        height="56"
        viewBox="0 0 24 24"
        fill="none"
        style={{ color: "#dfdfdf" }}
      >
        <circle cx="12" cy="12" r="10" stroke="#dfdfdf" strokeWidth="1.5" />
        <path
          d="M12 7v5l3 3"
          stroke="#dfdfdf"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <p
        className="font-cormorant"
        style={{ fontSize: "24px", color: "#7B2C3A", margin: 0 }}
      >
        {title}
      </p>
      <p
        className="font-cormorant"
        style={{ fontSize: "16px", color: "#888", fontStyle: "italic", margin: 0 }}
      >
        Content will be added soon.
      </p>
      <p
        className="font-dm"
        style={{ fontSize: "13px", color: "#aaa", margin: 0 }}
      >
        Click other menu items to explore
      </p>
    </div>
  );
}

export default function IQACPage() {
  const [activeMenu, setActiveMenu] = useState("Objectives and Functions");
  const [visible, setVisible] = useState(true);

  function handleMenuClick(item: string) {
    if (item === activeMenu) return;
    setVisible(false);
    setTimeout(() => {
      setActiveMenu(item);
      setVisible(true);
    }, 160);
  }

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
          <nav className="mb-3">
            <ol className="flex items-center gap-2 font-dm text-[12px] tracking-wide">
              <li>
                <Link href="/" className="text-white/60 hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-white/40">/</li>
              <li className="text-gold">IQAC</li>
            </ol>
          </nav>
          <h1
            className="font-cormorant text-white font-light"
            style={{ fontSize: "52px", letterSpacing: "2px", marginBottom: "4px" }}
          >
            IQAC
          </h1>
          <p
            className="font-cormorant text-white/80"
            style={{ fontSize: "20px", fontStyle: "italic" }}
          >
            Internal Quality Assurance Cell
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold" />
      </section>

      {/* Intro Banner */}
      <div style={{ backgroundColor: "#454F46", padding: "20px 40px", textAlign: "center" }}>
        <p
          className="font-dm font-bold"
          style={{ fontSize: "16px", color: "#D1B05D", letterSpacing: "2px", margin: 0 }}
        >
          NAAC Accredited — A++ Grade
        </p>
      </div>

      {/* Mobile: horizontal scrollable tabs */}
      <div
        className="md:hidden bg-[#7B2C3A] overflow-x-auto"
        style={{ scrollbarWidth: "none" }}
      >
        <div className="flex whitespace-nowrap">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => handleMenuClick(item)}
              className="font-dm flex-shrink-0"
              style={{
                fontSize: "12px",
                padding: "14px 16px",
                color: activeMenu === item ? "#D1B05D" : "rgba(255,255,255,0.75)",
                borderBottom: activeMenu === item ? "3px solid #D1B05D" : "3px solid transparent",
                background: activeMenu === item ? "rgba(0,0,0,0.2)" : "transparent",
                border: "none",
                cursor: "pointer",
                transition: "all 0.2s ease",
                borderBottomStyle: "solid",
                borderBottomWidth: "3px",
                borderBottomColor: activeMenu === item ? "#D1B05D" : "transparent",
              }}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Main layout */}
      <div
        className="flex flex-col md:flex-row"
        style={{ backgroundColor: "#F3F7FF", minHeight: "600px" }}
      >
        {/* Left sidebar — desktop only */}
        <aside
          className="hidden md:block flex-shrink-0"
          style={{ width: "280px", backgroundColor: "#7B2C3A" }}
        >
          {menuItems.map((item) => {
            const isActive = activeMenu === item;
            return (
              <button
                key={item}
                onClick={() => handleMenuClick(item)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  width: "100%",
                  padding: "16px 20px",
                  borderBottom: "1px solid rgba(255,255,255,0.1)",
                  borderLeft: isActive ? "4px solid #D1B05D" : "4px solid transparent",
                  backgroundColor: isActive ? "#640000" : "transparent",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "all 0.2s ease",
                  outline: "none",
                  border: "none",
                  borderBottom: "1px solid rgba(255,255,255,0.1)",
                  borderLeft: isActive ? "4px solid #D1B05D" : "4px solid transparent",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)";
                    const arrow = e.currentTarget.querySelector(".arrow") as HTMLElement;
                    if (arrow) arrow.style.transform = "translateX(4px)";
                    const text = e.currentTarget.querySelector(".menu-text") as HTMLElement;
                    if (text) text.style.color = "#D1B05D";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = "transparent";
                    const arrow = e.currentTarget.querySelector(".arrow") as HTMLElement;
                    if (arrow) arrow.style.transform = "translateX(0)";
                    const text = e.currentTarget.querySelector(".menu-text") as HTMLElement;
                    if (text) text.style.color = "white";
                  }
                }}
              >
                <span
                  className="arrow"
                  style={{
                    color: "#D1B05D",
                    fontSize: "18px",
                    lineHeight: 1,
                    flexShrink: 0,
                    transition: "transform 0.2s ease",
                    transform: isActive ? "rotate(90deg)" : "rotate(0deg)",
                    display: "inline-block",
                  }}
                >
                  ›
                </span>
                <span
                  className="menu-text font-dm"
                  style={{
                    fontSize: "13px",
                    color: isActive ? "#D1B05D" : "white",
                    lineHeight: "1.4",
                    transition: "color 0.2s ease",
                  }}
                >
                  {item}
                </span>
              </button>
            );
          })}
        </aside>

        {/* Right content area */}
        <div
          style={{
            flex: 1,
            backgroundColor: "white",
            padding: "40px",
            borderLeft: "1px solid #dfdfdf",
            minHeight: "500px",
            transition: "opacity 0.16s ease",
            opacity: visible ? 1 : 0,
          }}
        >
          {/* Content heading */}
          <div style={{ marginBottom: "28px" }}>
            <p
              className="font-dm uppercase"
              style={{ fontSize: "11px", letterSpacing: "3px", color: "#D1B05D", marginBottom: "10px" }}
            >
              IQAC
            </p>
            <h2
              className="font-cormorant"
              style={{ fontSize: "30px", color: "#7B2C3A", marginBottom: "10px" }}
            >
              {activeMenu}
            </h2>
            <div style={{ width: "50px", height: "2px", backgroundColor: "#D1B05D" }} />
          </div>

          {activeMenu === "Objectives and Functions" ? (
            <ObjectivesContent />
          ) : activeMenu === "Composition of IQAC" ? (
            <CompositionContent />
          ) : activeMenu === "Annual Reports" ? (
            <AnnualReportsContent />
          ) : activeMenu === "Minutes and Action Taken Report" ? (
            <MinutesContent />
          ) : (
            <ComingSoonContent title={activeMenu} />
          )}
        </div>
      </div>

      {/* Stats Banner */}
      <section style={{ backgroundColor: "#454F46", padding: "40px 24px" }}>
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-center">
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center" style={{ flex: 1 }}>
              <div style={{ textAlign: "center", padding: "16px 24px", width: "100%" }}>
                <p
                  className="font-dm font-bold"
                  style={{ fontSize: "36px", color: "#D1B05D", lineHeight: "1", marginBottom: "8px" }}
                >
                  {stat.number}
                </p>
                <p
                  className="font-cormorant"
                  style={{ fontSize: "15px", color: "white", letterSpacing: "0.5px" }}
                >
                  {stat.label}
                </p>
              </div>
              {i < stats.length - 1 && (
                <div
                  className="hidden sm:block"
                  style={{
                    width: "1px",
                    height: "50px",
                    backgroundColor: "#D1B05D",
                    opacity: 0.4,
                    flexShrink: 0,
                  }}
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
