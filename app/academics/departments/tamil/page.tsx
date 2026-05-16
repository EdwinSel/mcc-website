"use client";

import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { Languages, GraduationCap, BookMarked } from "lucide-react";

// ── Data ──────────────────────────────────────────────────────────────────────

type FacultyMember = {
  name: string;
  designation: string;
  email: string;
  photo: string | null;
  initials: string;
};

const faculty: FacultyMember[] = [
  { name: "N. Kanikkaraju",        designation: "Associate Professor & Head of Department", email: "kanikkai76@mcc.edu.in",   photo: null, initials: "NK" },
  { name: "J. Sudarvizhi",         designation: "Associate Professor",                       email: "sudarvizhi@mcc.edu.in",   photo: null, initials: "JS" },
  { name: "S. Sathasivam",         designation: "Associate Professor",                       email: "sathasivam@mcc.edu.in",   photo: null, initials: "SS" },
  { name: "T. Sebulon Prabu Durai",designation: "Assistant Professor",                       email: "sebulon@mcc.edu.in",      photo: null, initials: "TP" },
  { name: "S. Muthukandhan",       designation: "Assistant Professor",                       email: "muthukandhan@mcc.edu.in", photo: null, initials: "SM" },
  { name: "S. Stalin",             designation: "Assistant Professor",                       email: "stalin.s@mcc.edu.in",     photo: null, initials: "SS" },
  { name: "D. Meshak",             designation: "Assistant Professor",                       email: "meshak@mcc.edu.in",       photo: null, initials: "DM" },
];

// ── Reusable helpers ──────────────────────────────────────────────────────────

function SectionTitle({ title, centered = false }: { title: string; centered?: boolean }) {
  return (
    <div style={{ marginBottom: "24px", textAlign: centered ? "center" : "left" }}>
      <h2 className="font-cormorant font-bold text-[22px] md:text-[26px]" style={{ color: "#1a1a1a", marginBottom: "10px" }}>
        {title}
      </h2>
      <div
        style={{
          width: "50px",
          height: "2px",
          backgroundColor: "#D1B05D",
          margin: centered ? "0 auto" : "0",
        }}
      />
    </div>
  );
}

function BodyText({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="font-cormorant text-[16px] md:text-[17px]"
      style={{ color: "#444", lineHeight: "1.95", textAlign: "justify", marginBottom: "18px" }}
    >
      {children}
    </p>
  );
}

// ── Faculty Card ──────────────────────────────────────────────────────────────

function FacultyCard({ name, designation, email, photo, initials }: FacultyMember) {
  const [hovered, setHovered] = useState(false);

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
      {/* Photo / Initials area */}
      <div style={{ height: "260px", overflow: "hidden", position: "relative" }}>
        {photo ? (
          <Image
            src={photo}
            alt={name}
            fill
            style={{
              objectFit: "cover",
              objectPosition: "top center",
              transform: hovered ? "scale(1.05)" : "scale(1)",
              transition: "transform 0.3s ease",
            }}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "#7B2C3A",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span className="font-dm font-bold" style={{ fontSize: "64px", color: "#D1B05D", lineHeight: 1 }}>
              {initials}
            </span>
          </div>
        )}
      </div>

      {/* Card body */}
      <div style={{ padding: "16px 20px 20px" }}>
        <p className="font-dm" style={{ fontSize: "10px", letterSpacing: "2px", color: "#D1B05D", textTransform: "uppercase", marginBottom: "6px" }}>
          TAMIL (AIDED)
        </p>
        <p className="font-dm font-bold" style={{ fontSize: "17px", color: "#1a1a1a", marginBottom: "4px" }}>
          {name}
        </p>
        <p className="font-dm" style={{ fontSize: "13px", color: "#666", marginBottom: "14px", lineHeight: "1.4" }}>
          {designation}
        </p>

        {email && (
          <a
            href={`mailto:${email}`}
            className="font-dm font-bold block"
            style={{
              backgroundColor: "#640000",
              color: "white",
              padding: "10px 16px",
              borderRadius: "4px",
              fontSize: "12px",
              textAlign: "center",
              textDecoration: "none",
              marginBottom: "8px",
              display: "block",
            }}
          >
            {email}
          </a>
        )}

        <a
          href="#"
          className="font-dm font-bold block"
          style={{
            backgroundColor: "#D1B05D",
            color: "#1a1a1a",
            padding: "10px 16px",
            borderRadius: "4px",
            fontSize: "12px",
            textAlign: "center",
            textDecoration: "none",
            display: "block",
          }}
        >
          More Details
        </a>
      </div>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────

export default function TamilDeptPage() {
  return (
    <>
      <Navbar />

      {/* Hero — FIX 1 */}
      <section
        className="min-h-[160px] h-auto md:h-[200px] px-4 py-6 md:px-0 md:py-0"
        style={{
          backgroundColor: "#7B2C3A",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 50%)",
          backgroundSize: "10px 10px",
        }}
      >
        <h1
          className="font-cormorant text-[32px] md:text-[48px]"
          style={{ color: "#D1B05D", fontStyle: "italic", textAlign: "center", marginBottom: "12px" }}
        >
          Department of Tamil
        </h1>
        <nav>
          <ol className="flex items-center gap-2 font-dm text-[13px]" style={{ color: "rgba(255,255,255,0.6)" }}>
            <li><Link href="/" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Home</Link></li>
            <li>/</li>
            <li><Link href="/academics" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Academics</Link></li>
            <li>/</li>
            <li><Link href="/academics/departments" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Departments</Link></li>
            <li>/</li>
            <li style={{ color: "#D1B05D" }}>Tamil</li>
          </ol>
        </nav>
      </section>

      {/* Three Quick Cards — FIX 2 */}
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
        {/* Left feather — hidden on mobile */}
        <Image
          className="hidden md:block"
          src="/images/feather.png"
          alt=""
          width={280}
          height={420}
          style={{
            position: "absolute",
            left: "calc(12.5% + 120px)",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 1,
            height: "auto",
            pointerEvents: "none",
          }}
        />

        {/* Right feather — hidden on mobile */}
        <Image
          className="hidden md:block"
          src="/images/feather.png"
          alt=""
          width={280}
          height={420}
          style={{
            position: "absolute",
            right: "calc(12.5% + 120px)",
            top: "50%",
            transform: "translateY(-50%) scaleX(-1)",
            zIndex: 1,
            height: "auto",
            pointerEvents: "none",
          }}
        />

        {/* Cards box — stacks vertically on mobile */}
        <div
          className="flex flex-col md:flex-row w-full md:w-[75%]"
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "820px",
            margin: "0 auto",
            border: "1px solid #dfdfdf",
            backgroundColor: "white",
            boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
          }}
        >
          {/* Top gold line */}
          <span style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", backgroundColor: "#D1B05D", display: "block" }} />
          {/* Bottom maroon gradient */}
          <span style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "5px", background: "linear-gradient(90deg, #640000, #7B2C3A, #9B3A4A)", display: "block" }} />

          {/* Card 1 — Programmes Offered */}
          <div className="w-full md:flex-1 p-6 md:p-10 text-center border-b md:border-b-0 md:border-r border-[#dfdfdf]">
            <Languages size={55} color="#7B2C3A" style={{ margin: "0 auto" }} />
            <p className="font-cormorant" style={{ fontSize: "18px", color: "#7B2C3A", fontStyle: "italic", margin: "16px 0 8px" }}>
              Programmes Offered
            </p>
            <p className="font-cormorant" style={{ fontSize: "14px", color: "#888" }}>B.A, M.A, M.Phil, Ph.D</p>
          </div>

          {/* Card 2 — Admissions */}
          <div className="w-full md:flex-1 p-6 md:p-10 text-center border-b md:border-b-0 md:border-r border-[#dfdfdf]">
            <GraduationCap size={55} color="#7B2C3A" style={{ margin: "0 auto" }} />
            <p className="font-cormorant" style={{ fontSize: "18px", color: "#7B2C3A", fontStyle: "italic", margin: "16px 0 8px" }}>
              Admissions
            </p>
            <QuickBtn label="UG / PG" />
            <QuickBtn label="M.Phil / Ph.D" />
          </div>

          {/* Card 3 — Programme Outcome (no border) */}
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

      {/* About Us — FIX 3 & FIX 10 */}
      <section className="px-4 py-8 md:px-6 md:py-[60px]" style={{ backgroundColor: "white" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <SectionTitle title="About Us" />
          <BodyText>
            The Department of Tamil was established in 1968. It was a part of the vernacular
            departments since 1871. It has the pride of having had such great Tamil stalwarts
            such as Parithimar Kalaignar, Maraimalai Adigal, S.D. Sugumar and P. Alala Sundaram
            on the faculty. The department offers many job oriented and currently relevant subjects
            such as Journalism and Mass Communication and Dramatics at the Undergraduate level
            and Computer in Tamil Research and Linguistics, Folkloristics and Modern
            Christian Literature at the Postgraduate level. The department also offers Tamil
            language under Foundation Courses, Basic Tamil for students who have not studied
            Tamil and Advanced Tamil for students (who have done +2 Tamil) not studying
            Tamil under Part-1.
          </BodyText>
        </div>
      </section>

      {/* Faculty — FIX 6 & FIX 9 & FIX 10 */}
      <section className="px-4 py-8 md:px-6 md:py-[60px]" style={{ backgroundColor: "white" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <h2 className="font-cormorant text-[22px] md:text-[32px]" style={{ color: "#7B2C3A", marginBottom: "12px" }}>
              Our Faculty
            </h2>
            <div style={{ width: "50px", height: "2px", backgroundColor: "#D1B05D", margin: "0 auto" }} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: "24px" }}>
            {faculty.map((member) => (
              <FacultyCard key={member.email || member.name} {...member} />
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
