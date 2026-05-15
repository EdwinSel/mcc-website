"use client";

import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { Plus, GraduationCap, BookMarked } from "lucide-react";

// ── Data ──────────────────────────────────────────────────────────────────────

type FacultyMember = {
  name: string;
  designation: string;
  email: string;
  photo: string | null;
  initials: string;
};

const faculty: FacultyMember[] = [
  { name: "Huldah Samuel",                 designation: "Head of the Department", email: "huldahsamuel@mcc.edu.in",         photo: "/images/faculty/mathematics/huldah.jpg",     initials: "HS" },
  { name: "Thomas Rosy",                   designation: "Assistant Professor",    email: "rosy@mcc.edu.in",                 photo: "/images/faculty/mathematics/thomas.jpg",     initials: "TR" },
  { name: "S. Sunil Varma",                designation: "Assistant Professor",    email: "sunilvarma@mcc.edu.in",           photo: "/images/faculty/mathematics/sunil.jpg",      initials: "SV" },
  { name: "C. Annai Deva Priya Darshini",  designation: "Assistant Professor",    email: "annaldevapriyadarshini@mcc.edu.in", photo: "/images/faculty/mathematics/annai.jpg",    initials: "AD" },
  { name: "D. Jayaseelan Samuel",          designation: "Assistant Professor",    email: "jayaseelansamuel@mcc.edu.in",     photo: "/images/faculty/mathematics/jayaseelan.jpg", initials: "JS" },
  { name: "K. Sathish Kumar",              designation: "Assistant Professor",    email: "sathishkumar@mcc.edu.in",         photo: "/images/faculty/mathematics/sathish.jpg",    initials: "SK" },
  { name: "S. Daniel Evans",               designation: "Assistant Professor",    email: "danielevans@mcc.edu.in",          photo: "/images/faculty/mathematics/daniel.jpg",     initials: "DE" },
  { name: "S. Stelin",                     designation: "Assistant Professor",    email: "stelinpeter@mcc.edu.in",          photo: "/images/faculty/mathematics/stelin.jpg",     initials: "ST" },
  { name: "Abhishek Krishnamurthy",        designation: "Assistant Professor",    email: "abhishek@mcc.edu.in",             photo: "/images/faculty/mathematics/abhishek.jpg",   initials: "AK" },
  { name: "E. Ruby Jenifer",               designation: "Assistant Professor",    email: "rubyjennifer@mcc.edu.in",         photo: "/images/faculty/mathematics/ruby.jpg",       initials: "RJ" },
];

// ── Reusable helpers ──────────────────────────────────────────────────────────

function SectionTitle({ title }: { title: string }) {
  return (
    <div style={{ marginBottom: "24px" }}>
      <h2 className="font-cormorant font-bold" style={{ fontSize: "26px", color: "#1a1a1a", marginBottom: "10px" }}>
        {title}
      </h2>
      <div style={{ width: "50px", height: "2px", backgroundColor: "#D1B05D" }} />
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
            style={{
              objectFit: "cover",
              objectPosition: "top center",
              transform: hovered ? "scale(1.05)" : "scale(1)",
              transition: "transform 0.3s ease",
            }}
          />
        ) : (
          <div style={{ width: "100%", height: "100%", backgroundColor: "#7B2C3A", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span className="font-dm font-bold" style={{ fontSize: "64px", color: "#D1B05D", lineHeight: 1 }}>
              {initials}
            </span>
          </div>
        )}
      </div>

      <div style={{ padding: "16px 20px 20px" }}>
        <p className="font-dm" style={{ fontSize: "10px", letterSpacing: "2px", color: "#D1B05D", textTransform: "uppercase", marginBottom: "6px" }}>
          MATHEMATICS (AIDED)
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

export default function MathematicsDeptPage() {
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
        <h1 className="font-cormorant" style={{ fontSize: "48px", color: "#D1B05D", fontStyle: "italic", textAlign: "center", marginBottom: "12px" }}>
          Department of Mathematics
        </h1>
        <nav>
          <ol className="flex items-center gap-2 font-dm text-[13px]" style={{ color: "rgba(255,255,255,0.6)" }}>
            <li><Link href="/" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Home</Link></li>
            <li>/</li>
            <li><Link href="/academics" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Academics</Link></li>
            <li>/</li>
            <li><Link href="/academics/departments" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Departments</Link></li>
            <li>/</li>
            <li style={{ color: "#D1B05D" }}>Mathematics</li>
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
        <Image
          src="/images/feather.png"
          alt=""
          width={280}
          height={420}
          style={{ position: "absolute", left: "calc(12.5% + 120px)", top: "50%", transform: "translateY(-50%)", zIndex: 1, height: "auto", pointerEvents: "none" }}
        />
        <Image
          src="/images/feather.png"
          alt=""
          width={280}
          height={420}
          style={{ position: "absolute", right: "calc(12.5% + 120px)", top: "50%", transform: "translateY(-50%) scaleX(-1)", zIndex: 1, height: "auto", pointerEvents: "none" }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            width: "75%",
            maxWidth: "820px",
            margin: "0 auto",
            display: "flex",
            border: "1px solid #dfdfdf",
            backgroundColor: "white",
            boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
          }}
        >
          <span style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", backgroundColor: "#D1B05D", display: "block" }} />
          <span style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "5px", background: "linear-gradient(90deg, #640000, #7B2C3A, #9B3A4A)", display: "block" }} />

          {/* Card 1 — Programmes Offered */}
          <div style={{ flex: 1, padding: "56px 24px 60px", textAlign: "center", borderRight: "1px solid #dfdfdf" }}>
            <Plus size={55} color="#7B2C3A" style={{ margin: "0 auto" }} />
            <p className="font-cormorant" style={{ fontSize: "18px", color: "#7B2C3A", fontStyle: "italic", margin: "16px 0 8px" }}>
              Programmes Offered
            </p>
            <p className="font-cormorant" style={{ fontSize: "14px", color: "#888" }}>B.Sc., M.Sc., M.Phil. and Ph.D</p>
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
            <QuickBtn label="Syllabus UG" />
            <QuickBtn label="Syllabus PG" />
            <QuickBtn label="Syllabus M.Phil" />
          </div>
        </div>
      </div>

      {/* About Us */}
      <section style={{ backgroundColor: "white", padding: "60px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <SectionTitle title="About Us" />
          <BodyText>
            The Department of Mathematics was established in 1871 and has the reputation of having
            distinguished mathematicians in the past. Areas of specialization include Computer
            Mathematics, Complex Analysis, Fluid Dynamics, Astronomy, Harmonic Analysis and
            Mathematics Education for the visually challenged. The Department offers Undergraduate and
            Postgraduate programmes with an appropriate blend of pure and applied Mathematics courses
            and job oriented courses.
          </BodyText>
        </div>
      </section>

      {/* Chandrayaan-3 */}
      <section style={{ backgroundColor: "white", padding: "0 24px 60px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <SectionTitle title="Live telecast of Chandrayaan -3 soft landing on Moon" />
          <BodyText>
            India&apos;s pursuit of space exploration reaches a remarkable milestone with the impending
            Chandrayaan-3 Mission, poised to achieve a soft landing on the lunar surface. This
            achievement marks a significant step forward for Indian Science, Engineering, Technology,
            and Industry, symbolising our nation&apos;s progress in space exploration.
          </BodyText>
          <BodyText>
            This eagerly anticipated event will be broadcast live on August 23, 2023, starting from
            17:20 Hrs. IST. The live coverage will be available via multiple platforms, including the
            ISRO Website, YouTube, ISRO&apos;s Facebook page, and DD National TV channel.
          </BodyText>
          <BodyText>
            The soft landing of Chandrayaan-3 is a monumental moment that not only fuels curiosity but
            also sparks a passion for exploration within the minds of our youth. It generates a profound
            sense of pride and unity as we collectively celebrate the prowess of Indian science and
            technology. It will contribute to fostering an environment of scientific inquiry and
            innovation.
          </BodyText>
        </div>
      </section>

      {/* Faculty */}
      <section style={{ backgroundColor: "#F3F7FF", padding: "60px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <h2 className="font-cormorant" style={{ fontSize: "32px", color: "#7B2C3A", marginBottom: "12px" }}>
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
