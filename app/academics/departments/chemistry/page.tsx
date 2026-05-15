"use client";

import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { FlaskConical, GraduationCap, BookMarked } from "lucide-react";

// ── Data ──────────────────────────────────────────────────────────────────────

type FacultyMember = {
  name: string;
  designation: string;
  email: string;
  photo: string | null;
  initials: string;
};

const faculty: FacultyMember[] = [
  { name: "Paul Wilson",           designation: "Principal and Secretary",  email: "wilson@mcc.edu.in",                photo: "/images/faculty/chemistry/paul.jpg",         initials: "PW" },
  { name: "E. Iyyappan",           designation: "Head of the Department",   email: "hodchemistry-aided@mcc.edu.in",    photo: "/images/faculty/chemistry/iyyappan.jpg",     initials: "EI" },
  { name: "Nimmy Edwin",           designation: "Assistant Professor",      email: "nimmy@mcc.edu.in",                 photo: "/images/faculty/chemistry/nimmy.jpg",        initials: "NE" },
  { name: "C. Amirthavalli",       designation: "Assistant Professor",      email: "camirthavalli@mcc.edu.in",         photo: "/images/faculty/chemistry/amirthavalli.jpg", initials: "CA" },
  { name: "T. Jaba Priya",         designation: "Assistant Professor",      email: "jabapriya@mcc.edu.in",             photo: "/images/faculty/chemistry/jaba.jpg",         initials: "JP" },
  { name: "T. Mary Vergheese",     designation: "Assistant Professor",      email: "maryvergheese@mcc.edu.in",         photo: "/images/faculty/chemistry/mary.jpg",         initials: "MV" },
  { name: "R. Kavitha",            designation: "Assistant Professor",      email: "rkavitha@mcc.edu.in",              photo: "/images/faculty/chemistry/kavitha.jpg",      initials: "RK" },
  { name: "D. Reuben Jonathan",    designation: "Assistant Professor",      email: "dreubenj@mcc.edu.in",              photo: "/images/faculty/chemistry/reuben.jpg",       initials: "RJ" },
  { name: "R. Vijay Solomon",      designation: "Assistant Professor",      email: "vjsolo@mcc.edu.in",                photo: "/images/faculty/chemistry/vijay.jpg",        initials: "VS" },
  { name: "E. Rajkumar",           designation: "Assistant Professor",      email: "erajkumar@mcc.edu.in",             photo: "/images/faculty/chemistry/rajkumar.jpg",     initials: "ER" },
  { name: "G. Gnanamani Simiyon",  designation: "Assistant Professor",      email: "simiyon@mcc.edu.in",               photo: "/images/faculty/chemistry/gnanamani.jpg",    initials: "GS" },
  { name: "M. Aulice Scibioh",     designation: "Assistant Professor",      email: "scibioh@mcc.edu.in",               photo: "/images/faculty/chemistry/aulice.jpg",       initials: "AS" },
  { name: "Rakhi Yadav",           designation: "Assistant Professor",      email: "rakhiyadav@mcc.edu.in",            photo: "/images/faculty/chemistry/rakhi.jpg",        initials: "RY" },
  { name: "N. Prabhu",             designation: "Assistant Professor",      email: "jnprabhu@mcc.edu.in",              photo: "/images/faculty/chemistry/prabhu.jpg",       initials: "NP" },
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
          CHEMISTRY (AIDED)
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

export default function ChemistryDeptPage() {
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
          Department of Chemistry
        </h1>
        <nav>
          <ol className="flex items-center gap-2 font-dm text-[13px]" style={{ color: "rgba(255,255,255,0.6)" }}>
            <li><Link href="/" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Home</Link></li>
            <li>/</li>
            <li><Link href="/academics" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Academics</Link></li>
            <li>/</li>
            <li><Link href="/academics/departments" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Departments</Link></li>
            <li>/</li>
            <li style={{ color: "#D1B05D" }}>Chemistry</li>
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
            <FlaskConical size={55} color="#7B2C3A" style={{ margin: "0 auto" }} />
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
            <QuickBtn label="UG Programme Outcomes" />
            <QuickBtn label="PG Programme Outcomes" />
            <QuickBtn label="UG Syllabus" />
            <QuickBtn label="PG Syllabus" />
          </div>
        </div>
      </div>

      {/* About Us */}
      <section style={{ backgroundColor: "white", padding: "60px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <SectionTitle title="About Us" />
          <BodyText>
            From 1919–1926, the Department of Chemistry was under the umbrella of Natural Sciences with
            the Department of Physics in Madras Christian College and became an independent department
            in 1927, under the headship of Prof. Edward Barnes, fondly known as an architect of the
            college campus. The Department has continued to place its imprint in scholarship – both
            nationally and internationally, under the dynamic leadership of successive heads, namely
            Dr S.V. Anantakrishnan (Student of Prof. C. K. Ingold), Dr I. M. Mathai, Dr R. Gopalan,
            Dr V. J. Philip, Dr R. Wilfred Sugumar, Dr R. Joel Karunakaran, and Dr P. Wilson. During
            the tenure of Dr S.V. Anantakrishnan, the Department obtained permission from the
            University of Madras to offer an M.Sc. by research and a PhD programme. Later in the year
            1958, the Department started offering a regular M.Sc. programme. In 2005, it was recognized
            as a DST-FIST-sponsored Department, obtaining grants to develop infrastructure for teaching
            and research. In the year 2016, under the leadership of Dr P. Wilson (presently, Principal
            &amp; Secretary, MCC), the department witnessed a significant refurbishment of academic
            laboratories (UG and PG) and a seminar hall (a popular venue for PhD viva voce examination)
            with state-of-art facilities, through the gift of benevolence by Mrs Indra Krishnamurthy
            Nooyi – former CEO of PepsiCo and an alumna of the Department. In the last ten years, the
            Department has received Major and Minor research project grants of around one crore from
            various funding agencies such as DST-SERB, UGC, UBCHEA, TNSCST etc. Furthermore, the
            department has published over 150 research articles in Scopus-indexed journals over the
            past five years. In 2021, the audio-visual room was refurbished with air-conditioning and
            state-of-art facilities such as
          </BodyText>
          <BodyText>
            a smartboard, gifted by Dr C. J. Alexander, an alumnus of the department. On the academic
            front, the UG, PG and M.Phil. syllabi have been revised, new courses have been introduced,
            and innovative pedagogics adopted.
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
        width: "175px",
        padding: "10px 0",
        textAlign: "center",
        fontSize: "12px",
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
