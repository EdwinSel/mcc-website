"use client";

import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { Shield, GraduationCap, BookMarked } from "lucide-react";

// ── Data ──────────────────────────────────────────────────────────────────────

type FacultyMember = {
  name: string;
  designation: string;
  email: string;
  orcid?: string;
  photo: string | null;
  initials: string;
};

const faculty: FacultyMember[] = [
  { name: "R. Sridhar",              designation: "Assistant Professor", email: "sridhar@mcc.edu.in",      photo: "/images/faculty/political-science/sridhar.jpg", initials: "RS" },
  { name: "S. Sudha",                designation: "Assistant Professor", email: "sudha@mcc.edu.in",        photo: "/images/faculty/political-science/sudha.jpg",   initials: "SS" },
  { name: "J. Diviyan",              designation: "Assistant Professor", email: "jdiviyan@mcc.edu.in",     photo: "/images/faculty/political-science/diviyan.jpg", initials: "JD" },
  { name: "R. Vidya",                designation: "Assistant Professor", email: "vidya@mcc.edu.in",        photo: "/images/faculty/political-science/vidya.jpg",   initials: "RV" },
  { name: "Ashik J. Bonofer",        designation: "Assistant Professor", email: "bonofer@mcc.edu.in",      orcid: "https://orcid.org/0000-0002-8222-263X", photo: "/images/faculty/political-science/ashik.jpg",   initials: "AJ" },
  { name: "Haans J. Freddy",         designation: "Assistant Professor", email: "haansfreddy@mcc.edu.in",  photo: "/images/faculty/political-science/haans.jpg",   initials: "HJ" },
  { name: "Adarsh Vijay",            designation: "Assistant Professor", email: "adarshvijay@mcc.edu.in",  photo: "/images/faculty/political-science/adarsh.jpg",  initials: "AV" },
  { name: "G. Joseph Samuel Rajan",  designation: "Assistant Professor", email: "josephrajan@mcc.edu.in",  photo: "/images/faculty/political-science/joseph.jpg",  initials: "GJ" },
  { name: "S. Kiran Raghul Raj",     designation: "Assistant Professor", email: "kiranraghul@mcc.edu.in",  photo: "/images/faculty/political-science/kiran.jpg",   initials: "SK" },
];

// ── Reusable helpers ──────────────────────────────────────────────────────────

function SectionTitle({ title, centered = false }: { title: string; centered?: boolean }) {
  return (
    <div style={{ marginBottom: "24px", textAlign: centered ? "center" : "left" }}>
      <h2 className="font-cormorant font-bold" style={{ fontSize: "26px", color: "#1a1a1a", marginBottom: "10px" }}>
        {title}
      </h2>
      <div style={{ width: "50px", height: "2px", backgroundColor: "#D1B05D", margin: centered ? "0 auto" : "0" }} />
    </div>
  );
}

function BodyText({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-cormorant" style={{ fontSize: "17px", color: "#444", lineHeight: "1.95", textAlign: "justify", marginBottom: "18px" }}>
      {children}
    </p>
  );
}

// ── Faculty Card ──────────────────────────────────────────────────────────────

function FacultyCard({ name, designation, email, orcid, photo, initials }: FacultyMember) {
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
          POLITICAL SCIENCE (AIDED)
        </p>
        <p className="font-dm font-bold" style={{ fontSize: "17px", color: "#1a1a1a", marginBottom: "4px" }}>{name}</p>
        <p className="font-dm" style={{ fontSize: "13px", color: "#666", marginBottom: orcid ? "8px" : "14px", lineHeight: "1.4" }}>{designation}</p>

        {orcid && (
          <a
            href={orcid}
            target="_blank"
            rel="noopener noreferrer"
            className="font-dm"
            style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#A6CE39", textDecoration: "none", marginBottom: "14px" }}
          >
            {/* ORCID logo */}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#A6CE39" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947-.947-.431-.947-.947.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.016-5.325 5.016h-3.919V7.416zm1.444 1.303v7.444h2.297c2.359 0 3.962-1.444 3.962-3.722 0-1.991-1.453-3.722-3.934-3.722h-2.325z"/>
            </svg>
            ORCID iD
          </a>
        )}

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

export default function PoliticalScienceDeptPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section
        style={{
          height: "200px",
          backgroundColor: "#7B2C3A",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: "repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 50%)",
          backgroundSize: "10px 10px",
        }}
      >
        <h1 className="font-cormorant" style={{ fontSize: "44px", color: "#D1B05D", fontStyle: "italic", textAlign: "center", marginBottom: "12px" }}>
          Department of Political Science
        </h1>
        <nav>
          <ol className="flex items-center gap-2 font-dm text-[13px]" style={{ color: "rgba(255,255,255,0.6)" }}>
            <li><Link href="/" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Home</Link></li>
            <li>/</li>
            <li><Link href="/academics" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Academics</Link></li>
            <li>/</li>
            <li><Link href="/academics/departments" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Departments</Link></li>
            <li>/</li>
            <li style={{ color: "#D1B05D" }}>Political Science</li>
          </ol>
        </nav>
      </section>

      {/* Three Quick Cards */}
      <div
        style={{
          position: "relative",
          padding: "40px 80px",
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <Image src="/images/feather.png" alt="" width={280} height={420}
          style={{ position: "absolute", left: "calc(12.5% + 120px)", top: "50%", transform: "translateY(-50%)", zIndex: 1, height: "auto", pointerEvents: "none" }}
        />
        <Image src="/images/feather.png" alt="" width={280} height={420}
          style={{ position: "absolute", right: "calc(12.5% + 120px)", top: "50%", transform: "translateY(-50%) scaleX(-1)", zIndex: 1, height: "auto", pointerEvents: "none" }}
        />

        <div
          style={{
            position: "relative", zIndex: 2, width: "75%", maxWidth: "820px", margin: "0 auto",
            display: "flex", border: "1px solid #dfdfdf", backgroundColor: "white",
            boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
          }}
        >
          <span style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", backgroundColor: "#D1B05D", display: "block" }} />
          <span style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "5px", background: "linear-gradient(90deg, #640000, #7B2C3A, #9B3A4A)", display: "block" }} />

          {/* Card 1 — Programmes Offered */}
          <div style={{ flex: 1, padding: "56px 24px 60px", textAlign: "center", borderRight: "1px solid #dfdfdf" }}>
            <Shield size={55} color="#7B2C3A" style={{ margin: "0 auto" }} />
            <p className="font-cormorant" style={{ fontSize: "18px", color: "#7B2C3A", fontStyle: "italic", margin: "16px 0 8px" }}>
              Programmes Offered
            </p>
            <p className="font-cormorant" style={{ fontSize: "14px", color: "#888" }}>B.A, M.A, M.Phil, Ph.D</p>
          </div>

          {/* Card 2 — Admissions */}
          <div style={{ flex: 1, padding: "56px 24px 60px", textAlign: "center", borderRight: "1px solid #dfdfdf" }}>
            <GraduationCap size={55} color="#7B2C3A" style={{ margin: "0 auto" }} />
            <p className="font-cormorant" style={{ fontSize: "18px", color: "#7B2C3A", fontStyle: "italic", margin: "16px 0 8px" }}>
              Admissions
            </p>
            <QuickBtn label="UG / PG" />
            <QuickBtn label="M.Phil / Ph.D" />
          </div>

          {/* Card 3 — Programme Outcome */}
          <div style={{ flex: 1, padding: "56px 24px 60px", textAlign: "center" }}>
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
      <section style={{ backgroundColor: "white", padding: "60px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <SectionTitle title="About Us" />
          <BodyText>
            During the course of an institutional self-study under the stewardship of Dr. Chandran D.S.
            Devanesen, the first Indian Principal of the college, Political Science as an academic
            discipline was introduced at the master&apos;s level in 1963. In 1965, the Department of
            Politics and Public Administration, headed by Dr M.Abel, was born out of the erstwhile
            Department of History and Politics. In the year 1967, Political Science was introduced at
            the Bachelor&apos;s level. In 1981, Dr. A. Mantramurti became the Head of the Department
            after Dr. M. Abel, who retired as the Principal of the college. Later in the same year, the
            nomenclature was changed to Department of Political Science and Public Administration. In
            1985 the composite Department was bifurcated into two independent Departments, viz.
            Department of Political Science and Department of Public Administration. The Department of
            Political Science was continued to be headed by Dr. A. Mantramurti, till he became
            Principal of the college in 1999. The Department was headed by Prof. Ravindernath Chanana,
            1999 to 2002, Dr J. Ramesh Sundar, 2002 to 2014, Dr A Subraminian, 2014 to 2015 and Dr
            Crobsy Vijayakumar, from 2015 to 2017. Currently, the department is headed by Dr. K. Palani.
          </BodyText>
          <BodyText>
            The Department has an illustrious record of professors who had served as faculty in the
            likes of Rev. Duncan Forrester, Prof. Padmavati Arumugam, Dr S.Krishnasamy, Prof.
            S.N.Balasundaram, Prof. Ms Mercy David, Dr R. Stephen Samuel, Dr Julius Karunakaran,
            Dr M. Suresh Babu, Dr S.Jeevenendam, Dr P.Ebenezer Benjamin, Dr M. Jabaraulla Khan,
            Dr D. William Gnansekaran, Dr Kingsley Alfred Chandrasekar, Mr A. Ravi Kumar,
            Mr P.W.C. Davidar, Mr Gunashankar and Mr Sudharshan.
          </BodyText>
        </div>
      </section>

      {/* Faculty */}
      <section style={{ backgroundColor: "#F3F7FF", padding: "60px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <h2 className="font-cormorant" style={{ fontSize: "32px", color: "#7B2C3A", marginBottom: "12px" }}>Our Faculty</h2>
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
