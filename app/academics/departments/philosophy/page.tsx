"use client";

import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { HelpCircle, GraduationCap, BookMarked } from "lucide-react";

// ── Data ──────────────────────────────────────────────────────────────────────

type FacultyMember = {
  name: string;
  designation: string;
  email: string;
  photo: string | null;
  initials: string;
};

const faculty: FacultyMember[] = [
  { name: "V. Kumari Sunitha",   designation: "Head of the Department", email: "sunitha@mcc.edu.in",         photo: "/images/faculty/philosophy/sunitha.jpg",        initials: "KS" },
  { name: "Jojan Job",           designation: "Assistant Professor",    email: "jojan@mcc.edu.in",            photo: "/images/faculty/philosophy/jojan.jpg",          initials: "JJ" },
  { name: "D. Sam Pravin Kumar", designation: "Assistant Professor",    email: "sampravinkumar@mcc.edu.in",   photo: "/images/faculty/philosophy/sampravin.jpg",      initials: "SP" },
  { name: "M. Vijayasarathy",    designation: "Assistant Professor",    email: "vijayasarathy@mcc.edu.in",   photo: "/images/faculty/philosophy/vijayasarathy.jpg",  initials: "VS" },
  { name: "C. Sugirdharajan",    designation: "Assistant Professor",    email: "sugirdharajan@mcc.edu.in",   photo: "/images/faculty/philosophy/sugirdharajan.jpg",  initials: "CS" },
  { name: "Bins Sebastian",      designation: "Assistant Professor",    email: "binssebastian@mcc.edu.in",   photo: "/images/faculty/philosophy/bins.jpg",           initials: "BS" },
  { name: "K. Vengadachalam",    designation: "Assistant Professor",    email: "vengadachalam@mcc.edu.in",   photo: "/images/faculty/philosophy/vengadachalam.jpg",  initials: "KV" },
  { name: "S. Sekar",            designation: "Assistant Professor",    email: "segar@mcc.edu.in",            photo: "/images/faculty/philosophy/sekar.jpg",          initials: "SS" },
];

// ── Reusable helpers ──────────────────────────────────────────────────────────

function SectionTitle({ title, centered = false }: { title: string; centered?: boolean }) {
  return (
    <div style={{ marginBottom: "24px", textAlign: centered ? "center" : "left" }}>
      <h2 className="font-cormorant font-bold text-[22px] md:text-[26px]" style={{ color: "#1a1a1a", marginBottom: "10px" }}>
        {title}
      </h2>
      <div style={{ width: "50px", height: "2px", backgroundColor: "#D1B05D", margin: centered ? "0 auto" : "0" }} />
    </div>
  );
}

function BodyText({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-cormorant text-[16px] md:text-[17px]" style={{ color: "#444", lineHeight: "1.95", textAlign: "justify", marginBottom: "18px" }}>
      {children}
    </p>
  );
}

// ── Faculty Card ──────────────────────────────────────────────────────────────

function FacultyCard({ name, designation, email, photo, initials }: FacultyMember) {
  const [hovered, setHovered] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <div
      style={{
        backgroundColor: "white",
        border: "1px solid #dfdfdf",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: hovered ? "0 12px 32px rgba(0,0,0,0.12)" : "0 4px 16px rgba(0,0,0,0.06)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ height: "260px", overflow: "hidden", position: "relative" }}>
        {photo && !imgError ? (
          <Image
            src={photo}
            alt={name}
            fill
            onError={() => setImgError(true)}
            style={{ objectFit: "cover", objectPosition: "top center", transform: hovered ? "scale(1.05)" : "scale(1)", transition: "transform 0.3s ease" }}
          />
        ) : (
          <div style={{ width: "100%", height: "100%", backgroundColor: "#7B2C3A", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span className="font-dm font-bold" style={{ fontSize: "64px", color: "#D1B05D", lineHeight: 1 }}>{initials}</span>
          </div>
        )}
      </div>

      <div style={{ padding: "16px 20px 20px" }}>
        <p className="font-dm" style={{ fontSize: "10px", letterSpacing: "2px", color: "#D1B05D", textTransform: "uppercase", marginBottom: "6px" }}>
          PHILOSOPHY (AIDED)
        </p>
        <p className="font-dm font-bold" style={{ fontSize: "17px", color: "#1a1a1a", marginBottom: "4px" }}>{name}</p>
        <p className="font-dm" style={{ fontSize: "13px", color: "#666", marginBottom: "14px", lineHeight: "1.4" }}>{designation}</p>

        {email && (
          <a
            href={`mailto:${email}`}
            className="font-dm font-bold block"
            style={{ backgroundColor: "#640000", color: "white", padding: "10px 16px", borderRadius: "4px", fontSize: "12px", textAlign: "center", textDecoration: "none", marginBottom: "8px", display: "block" }}
          >
            {email}
          </a>
        )}

        <a
          href="#"
          className="font-dm font-bold block"
          style={{ backgroundColor: "#D1B05D", color: "#1a1a1a", padding: "10px 16px", borderRadius: "4px", fontSize: "12px", textAlign: "center", textDecoration: "none", display: "block" }}
        >
          More Detail
        </a>
      </div>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────

export default function PhilosophyDeptPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section
        className="min-h-[160px] h-auto md:h-[200px] px-4 py-6 md:px-0 md:py-0"
        style={{
          backgroundColor: "#7B2C3A",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: "repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 50%)",
          backgroundSize: "10px 10px",
        }}
      >
        <h1 className="font-cormorant text-[32px] md:text-[48px]" style={{ color: "#D1B05D", fontStyle: "italic", textAlign: "center", marginBottom: "12px" }}>
          Department of Philosophy
        </h1>
        <nav>
          <ol className="flex items-center gap-2 font-dm text-[13px]" style={{ color: "rgba(255,255,255,0.6)" }}>
            <li><Link href="/" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Home</Link></li>
            <li>/</li>
            <li><Link href="/academics" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Academics</Link></li>
            <li>/</li>
            <li><Link href="/academics/departments" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Departments</Link></li>
            <li>/</li>
            <li style={{ color: "#D1B05D" }}>Philosophy</li>
          </ol>
        </nav>
      </section>

      {/* Three Quick Cards */}
      <div
        className="px-4 py-6 md:px-20 md:py-10"
        style={{
          position: "relative",
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <Image className="hidden md:block" src="/images/feather.png" alt="" width={280} height={420}
          style={{ position: "absolute", left: "calc(12.5% + 120px)", top: "50%", transform: "translateY(-50%)", zIndex: 1, height: "auto", pointerEvents: "none" }}
        />
        <Image className="hidden md:block" src="/images/feather.png" alt="" width={280} height={420}
          style={{ position: "absolute", right: "calc(12.5% + 120px)", top: "50%", transform: "translateY(-50%) scaleX(-1)", zIndex: 1, height: "auto", pointerEvents: "none" }}
        />

        <div
          className="flex flex-col md:flex-row w-full md:w-[75%]"
          style={{
            position: "relative", zIndex: 2, maxWidth: "820px", margin: "0 auto",
            border: "1px solid #dfdfdf", backgroundColor: "white",
            boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
          }}
        >
          <span style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", backgroundColor: "#D1B05D", display: "block" }} />
          <span style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "5px", background: "linear-gradient(90deg, #640000, #7B2C3A, #9B3A4A)", display: "block" }} />

          <div className="w-full md:flex-1 p-6 md:p-10 text-center border-b md:border-b-0 md:border-r border-[#dfdfdf]">
            <HelpCircle size={55} color="#7B2C3A" style={{ margin: "0 auto" }} />
            <p className="font-cormorant" style={{ fontSize: "18px", color: "#7B2C3A", fontStyle: "italic", margin: "16px 0 8px" }}>
              Programmes Offered
            </p>
            <p className="font-cormorant" style={{ fontSize: "14px", color: "#888" }}>B.A, M.A, M.Phil, Ph.D</p>
          </div>

          <div className="w-full md:flex-1 p-6 md:p-10 text-center border-b md:border-b-0 md:border-r border-[#dfdfdf]">
            <GraduationCap size={55} color="#7B2C3A" style={{ margin: "0 auto" }} />
            <p className="font-cormorant" style={{ fontSize: "18px", color: "#7B2C3A", fontStyle: "italic", margin: "16px 0 8px" }}>
              Admissions
            </p>
            <QuickBtn label="UG / PG" />
            <QuickBtn label="M.Phil / Ph.D" />
          </div>

          <div className="w-full md:flex-1 p-6 md:p-10 text-center">
            <BookMarked size={55} color="#7B2C3A" style={{ margin: "0 auto" }} />
            <p className="font-cormorant" style={{ fontSize: "18px", color: "#7B2C3A", fontStyle: "italic", margin: "16px 0 8px" }}>
              Programme Outcome
            </p>
            <QuickBtn label="Click Here" />
            <QuickBtn label="Syllabus" />
          </div>
        </div>
      </div>

      {/* About Us */}
      <section className="px-4 py-8 md:px-6 md:py-[60px]" style={{ backgroundColor: "white" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <SectionTitle title="About Us" />
          <BodyText>
            The Department of Philosophy was established in 1865 as the Department of Moral &amp; Mental
            Science. Dr. Sarvepalli Radhakrishnan belonged to this Department which has a rich history.
            The courses offered in the Philosophy Department are geared to meet the requirements to
            mould a student into a well-balanced person.
          </BodyText>
        </div>
      </section>

      {/* Faculty */}
      <section className="px-4 py-8 md:px-6 md:py-[60px]" style={{ backgroundColor: "#F3F7FF" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <h2 className="font-cormorant text-[22px] md:text-[32px]" style={{ color: "#7B2C3A", marginBottom: "12px" }}>
              Our Faculty
            </h2>
            <div style={{ width: "50px", height: "2px", backgroundColor: "#D1B05D", margin: "0 auto" }} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: "24px" }}>
            {faculty.map((member) => (
              <FacultyCard key={member.email} {...member} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

// ── QuickBtn (kept co-located) ────────────────────────────────────────────────

function QuickBtn({ label }: { label: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href="#"
      className="font-dm font-bold"
      style={{
        display: "block",
        width: "160px",
        padding: "10px 0",
        textAlign: "center",
        fontSize: "13px",
        borderRadius: "3px",
        backgroundColor: hovered ? "#640000" : "#7B2C3A",
        color: "white",
        textDecoration: "none",
        margin: "8px auto",
        transition: "background-color 0.2s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {label}
    </a>
  );
}
