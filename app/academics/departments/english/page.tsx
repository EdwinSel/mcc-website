"use client";

import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import Image from "next/image";

// ── Data ──────────────────────────────────────────────────────────────────────

const specialPapersLeft = [
  "Women's Writings",
  "New Writing",
  "Shakespearean Criticism",
  "Critical Theory Since 1965",
  "Indian Metatheater And Perception",
];
const specialPapersRight = [
  "Myth And Literature",
  "The Postmodern Survey",
  "Translation Studies",
  "Ecology, Literature And Development",
];

const expertiseCards = [
  { title: "Renaissance & Shakespeare",  sub: "Renaissance Literature and Shakespeare Studies" },
  { title: "Contemporary Literature",    sub: "Postcolonial Literature, American Literature & World Drama" },
  { title: "Critical Theory",            sub: "Gender Studies, Feminism & Literary Stylistics" },
  { title: "Ecocriticism",               sub: "Ecology Literature & Environmental Studies" },
  { title: "Language Teaching",          sub: "English Language Teaching & Linguistics" },
  { title: "Theatre & Music",            sub: "Theatre Studies, Music and Literature" },
];

type FacultyMember = {
  name: string;
  designation: string;
  email: string;
  photo: string | null;
  initials: string;
};

const faculty: FacultyMember[] = [
  { name: "S. Franklin Daniel",       designation: "Associate Professor & Head of the Department of English", email: "hodenglish@mcc.edu.in",          photo: null, initials: "SF" },
  { name: "N. Jeyaselvi",             designation: "Associate Professor",                                      email: "njeyaselvi@mcc.edu.in",          photo: null, initials: "NJ" },
  { name: "S. Samuel Rufus",          designation: "Associate Professor",                                      email: "rufus@mcc.edu.in",               photo: null, initials: "SS" },
  { name: "Ann Thomas",               designation: "Assistant Professor",                                      email: "annthomas@mcc.edu.in",           photo: null, initials: "AT" },
  { name: "David Abraham Albert",     designation: "Assistant Professor",                                      email: "davidabraham@mcc.edu.in",        photo: null, initials: "DA" },
  { name: "G Phebe Angus",            designation: "Assistant Professor",                                      email: "phebeangus@mcc.edu.in",          photo: null, initials: "GP" },
  { name: "Christina Dhanasekaran",   designation: "Assistant Professor",                                      email: "christinadhanasekaran@mcc.edu.in", photo: null, initials: "CD" },
  { name: "J. Arun Kumar",            designation: "Assistant Professor",                                      email: "arun@mcc.edu.in",                photo: null, initials: "JA" },
  { name: "G. Udhayaraj",             designation: "Assistant Professor",                                      email: "udhayaraj@mcc.edu.in",           photo: null, initials: "GU" },
  { name: "A. Deepa Priyadarsini",    designation: "Assistant Professor",                                      email: "deepapriyadarshini@mcc.edu.in",  photo: null, initials: "AD" },
  { name: "P. Merin Wilson",          designation: "Assistant Professor",                                      email: "merinwilson@mcc.edu.in",         photo: null, initials: "PM" },
  { name: "J. Aruna",                 designation: "Assistant Professor",                                      email: "aruna@mcc.edu.in",               photo: null, initials: "JA" },
  { name: "C. Monsingh Daniel",       designation: "Assistant Professor",                                      email: "monsinghdaniel@mcc.edu.in",      photo: null, initials: "CM" },
  { name: "M. David Wesley",          designation: "Assistant Professor",                                      email: "davidwesley@mcc.edu.in",         photo: null, initials: "MD" },
  { name: "M. Samuel Jayakumar",      designation: "Assistant Professor",                                      email: "samueljayakumar@mcc.edu.in",     photo: null, initials: "MS" },
  { name: "J John Jeba Jayasingh",    designation: "Assistant Professor",                                      email: "johnjeba@mcc.edu.in",            photo: null, initials: "JJ" },
  { name: "Ebenezar Sam Paul R",      designation: "Assistant Professor",                                      email: "",                               photo: null, initials: "ES" },
];

// ── Reusable helpers ──────────────────────────────────────────────────────────

function SectionTitle({ title, centered = false }: { title: string; centered?: boolean }) {
  return (
    <div style={{ marginBottom: "24px", textAlign: centered ? "center" : "left" }}>
      <h2 className="font-cormorant font-bold" style={{ fontSize: "26px", color: "#1a1a1a", marginBottom: "10px" }}>
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
      className="font-cormorant"
      style={{ fontSize: "17px", color: "#444", lineHeight: "1.95", textAlign: "justify", marginBottom: "18px" }}
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
        <p
          className="font-dm"
          style={{ fontSize: "10px", letterSpacing: "2px", color: "#D1B05D", textTransform: "uppercase", marginBottom: "6px" }}
        >
          ENGLISH (AIDED)
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

export default function EnglishDeptPage() {
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
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 50%)",
          backgroundSize: "10px 10px",
        }}
      >
        <h1
          className="font-cormorant"
          style={{ fontSize: "48px", color: "#D1B05D", fontStyle: "italic", textAlign: "center", marginBottom: "12px" }}
        >
          Department of English
        </h1>
        <nav>
          <ol className="flex items-center gap-2 font-dm text-[13px]" style={{ color: "rgba(255,255,255,0.6)" }}>
            <li><Link href="/" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Home</Link></li>
            <li>/</li>
            <li><Link href="/academics" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Academics</Link></li>
            <li>/</li>
            <li><Link href="/academics/departments" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Departments</Link></li>
            <li>/</li>
            <li style={{ color: "#D1B05D" }}>English</li>
          </ol>
        </nav>
      </section>

      {/* Three Quick Cards */}
      <div style={{ backgroundColor: "white", borderBottom: "1px solid #dfdfdf" }}>
        <div
          className="max-w-[1000px] mx-auto flex flex-col sm:flex-row"
          style={{ borderLeft: "1px solid #dfdfdf", borderRight: "1px solid #dfdfdf" }}
        >
          {/* Card 1 — Programmes */}
          <div
            className="flex-1 flex flex-col items-center justify-center text-center"
            style={{ padding: "36px 24px", borderRight: "1px solid #dfdfdf" }}
          >
            <svg width="56" height="56" viewBox="0 0 24 24" fill="none" style={{ marginBottom: "14px" }}>
              <path d="M4 19.5A2.5 2.5 0 016.5 17H20" stroke="#7B2C3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" stroke="#7B2C3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className="font-cormorant" style={{ fontSize: "20px", color: "#7B2C3A", marginBottom: "6px" }}>
              Programmes Offered
            </p>
            <p className="font-dm" style={{ fontSize: "14px", color: "#666" }}>B.A, M.A &amp; Ph.D</p>
          </div>

          {/* Card 2 — Admissions */}
          <div
            className="flex-1 flex flex-col items-center justify-center text-center"
            style={{ padding: "36px 24px", borderRight: "1px solid #dfdfdf" }}
          >
            <svg width="56" height="56" viewBox="0 0 24 24" fill="none" style={{ marginBottom: "14px" }}>
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" stroke="#7B2C3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6 12v5c3 3 9 3 12 0v-5" stroke="#7B2C3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className="font-cormorant" style={{ fontSize: "20px", color: "#7B2C3A", marginBottom: "16px" }}>Admissions</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", width: "160px" }}>
              <a href="#" className="font-dm font-bold" style={{ backgroundColor: "#7B2C3A", color: "white", padding: "10px 32px", borderRadius: "4px", fontSize: "13px", textAlign: "center", textDecoration: "none" }}>
                UG / PG
              </a>
              <a href="#" className="font-dm font-bold" style={{ backgroundColor: "#7B2C3A", color: "white", padding: "10px 32px", borderRadius: "4px", fontSize: "13px", textAlign: "center", textDecoration: "none" }}>
                Ph.D
              </a>
            </div>
          </div>

          {/* Card 3 — Programme Outcome */}
          <div
            className="flex-1 flex flex-col items-center justify-center text-center"
            style={{ padding: "36px 24px" }}
          >
            <svg width="56" height="56" viewBox="0 0 24 24" fill="none" style={{ marginBottom: "14px" }}>
              <path d="M4 19.5A2.5 2.5 0 016.5 17H20" stroke="#7B2C3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" stroke="#7B2C3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8 7h8M8 11h6" stroke="#7B2C3A" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <p className="font-cormorant" style={{ fontSize: "20px", color: "#7B2C3A", marginBottom: "16px" }}>Programme Outcome</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", width: "160px" }}>
              <a href="#" className="font-dm font-bold" style={{ backgroundColor: "#7B2C3A", color: "white", padding: "10px 32px", borderRadius: "4px", fontSize: "13px", textAlign: "center", textDecoration: "none" }}>
                Click Here
              </a>
              <a href="#" className="font-dm font-bold" style={{ backgroundColor: "#7B2C3A", color: "white", padding: "10px 32px", borderRadius: "4px", fontSize: "13px", textAlign: "center", textDecoration: "none" }}>
                Syllabus
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* About Us */}
      <section style={{ backgroundColor: "white", padding: "60px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <SectionTitle title="About Us" />
          <BodyText>
            One among the oldest departments in the country, the Department of English Language and
            Literature has come to occupy a noteworthy place in both Literary Studies and Culture
            Studies. Established in 1837, the department has been up-to-date in curriculum planning
            and syllabus framing.
          </BodyText>
          <BodyText>
            The Department offers a broad spectrum of innovative courses under the Choice Based
            Credit System. Integrating the conventional approach of exposing the student to the
            characteristic features of each literary period and the genres and sub-genres of
            literature with the political readings of the literature of the present-day, the syllabus
            enables the students to interpret texts both aesthetically and socio-politically to
            understand the principles of Literary Studies as well as Culture Studies.
          </BodyText>
        </div>
      </section>

      {/* YouTube Video */}
      <section style={{ backgroundColor: "#F3F7FF", padding: "50px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <SectionTitle title="Department Video" />
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, borderRadius: "8px", overflow: "hidden", boxShadow: "0 8px 32px rgba(0,0,0,0.15)" }}>
              <iframe
                src="https://www.youtube.com/embed/J_9qszcPKek"
                title="Department of English — MCC"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Special Papers */}
      <section style={{ backgroundColor: "white", padding: "50px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <SectionTitle title="Special Papers Offered" />
          <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "12px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {specialPapersLeft.map((paper) => (
                <PaperTag key={paper} label={paper} />
              ))}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {specialPapersRight.map((paper) => (
                <PaperTag key={paper} label={paper} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Expertise */}
      <section style={{ backgroundColor: "#F3F7FF", padding: "50px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <SectionTitle title="Faculty Expertise" />
          <BodyText>
            The department is a flourishing academic community of teacher-scholars, who are dedicated
            to sharing their expertise in various fields of their specialization. Always
            performance-driven, the members of the distinguished faculty are continually committed to
            providing the best possible education to the Undergraduate, Postgraduate, M Phil and
            Ph D students.
          </BodyText>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: "20px" }}>
            {expertiseCards.map((card) => (
              <div
                key={card.title}
                style={{
                  backgroundColor: "#FDF8EE",
                  border: "2px solid #1a1a1a",
                  borderRadius: "8px",
                  padding: "28px 24px",
                  textAlign: "center",
                }}
              >
                <p className="font-cormorant font-bold" style={{ fontSize: "20px", color: "#1a1a1a", marginBottom: "8px" }}>
                  {card.title}
                </p>
                <p className="font-cormorant" style={{ fontSize: "15px", color: "#666", fontStyle: "italic", lineHeight: "1.5" }}>
                  {card.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* English Literature Courses */}
      <section style={{ backgroundColor: "white", padding: "50px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <SectionTitle title="Our English Literature Courses" />
          <BodyText>
            We investigate the design, purpose, meaning, modes of production and reception, and the
            uses made of literary texts. We carry out these investigations by closely examining texts
            in themselves and by bringing to the texts knowledge of relevant literary, historical,
            philosophical, and biographical contexts.
          </BodyText>
          <BodyText>
            We examine texts for their complicity in the construction of social norms and for their
            attempts to oppose or undermine such norms. The courses are designed to impart the skills
            of reading and writing and they have other goals as well.
          </BodyText>
          <BodyText>
            The department believes students should understand the &apos;meaning&apos; of literature
            in terms of social, cultural, aesthetic, and intellectual movements that are also the
            provinces of the social sciences.
          </BodyText>
        </div>
      </section>

      {/* ESL Programmes */}
      <section style={{ backgroundColor: "#F3F7FF", padding: "50px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <SectionTitle title="ESL Programmes" />
          <BodyText>
            The department provides the Part II English students at the college with the knowledge of
            the four language skills — Listening, Speaking, Reading, and Writing. Our approach to
            English language learning utilizes the Communicative English Teaching Method, a way of
            teaching that employs a number of holistic techniques to English grammar, English
            vocabulary, spoken English, English listening, and English reading and writing.
          </BodyText>
          <BodyText>
            An Action Research Seminar cum Workshop was conducted in April 2010 to implement
            enquiry-centred curriculum compacting to maximize outcome-based initiatives. The
            Department decided on six poems and five essays to be taught throughout all the four
            semesters. Additionally, a play, a novel and six short stories were to be taught in the
            first, second and third semesters respectively.
          </BodyText>
          <BodyText>
            Furthermore, in addition to the routine writing units being taught throughout the first
            three semesters, it was decided to implement a mastery-focused writing module during the
            fourth semester to prepare the students for the campus placement tests.
          </BodyText>
        </div>
      </section>

      {/* Faculty */}
      <section style={{ backgroundColor: "white", padding: "60px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <h2 className="font-cormorant" style={{ fontSize: "32px", color: "#7B2C3A", marginBottom: "12px" }}>
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

// ── PaperTag (kept co-located) ────────────────────────────────────────────────

function PaperTag({ label }: { label: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="font-cormorant"
      style={{
        backgroundColor: hovered ? "#D1B05D" : "#FDF3E0",
        color: hovered ? "white" : "#333",
        borderRadius: "6px",
        padding: "14px 20px",
        fontSize: "16px",
        textAlign: "center",
        cursor: "default",
        transition: "all 0.2s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {label}
    </div>
  );
}
