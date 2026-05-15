"use client";

import { useState } from "react";
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
  { label: "Deans", href: "/about/administration/deans", active: true },
  { label: "Archives", href: "/about/administration/archives", active: false },
  { label: "SFS Office", href: "/about/administration/sfs-office", active: false },
  { label: "IQAC", href: "/about/administration/iqac", active: false },
  { label: "Principals Office", href: "/about/administration/principals-office", active: false },
  { label: "Bursars Office", href: "/about/administration/bursars-office", active: false },
  { label: "Organogram", href: "/about/administration/organogram", active: false },
];

const deans = [
  {
    image: "/images/officials/Deans/Dr-Venkat.png",
    name: "R. Venkataramanujam",
    role: "Dean - Humanities",
    emails: ["deanhumanities@mcc.edu.in", "venkat@mcc.edu.in"],
  },
  {
    image: "/images/officials/Deans/Dr-Mahalakshmi.png",
    name: "V. Mahalakshmi",
    role: "Dean - Sciences",
    emails: ["deansciences@mcc.edu.in", "mahalakshmi@mcc.edu.in"],
  },
  {
    image: "/images/officials/Deans/Dr-Tabitha.png",
    name: "Tabitha Durai",
    role: "Dean - Research and Development",
    emails: ["deanrd@mcc.edu.in", "tabitha@mcc.edu.in"],
  },
  {
    image: "/images/officials/Deans/Dr-Hulda.png",
    name: "Huldah Samuel",
    role: "Dean - Student Affairs",
    emails: ["dsa@mcc.edu.in", "huldahsamuel@mcc.edu.in"],
  },
  {
    image: "/images/officials/Deans/dr-Selvakumari.png",
    name: "D. Selvakumari",
    role: "Dean - Women Students",
    emails: ["dws@mcc.edu.in", "selvakumari@mcc.edu.in"],
  },
  {
    image: "/images/officials/Deans/Dr-Rufus.png",
    name: "S. Samuel Rufus",
    role: "Dean - International Programme",
    emails: ["deanip@mcc.edu.in", "rufus@mcc.edu.in"],
  },
  {
    image: "/images/officials/Deans/Dr-Amirthavalli.png",
    name: "C. Amirthavalli",
    role: "Dean - Internal Quality Assurance Cell",
    emails: ["iqac@mcc.edu.in", "camirthavalli@mcc.edu.in"],
  },
];

const associateDeans = [
  {
    image: "/images/officials/Deans/Dr-Kalyani.png",
    name: "S. Kalyani",
    role: "Associate Dean - Research And Development - Humanities",
    emails: ["skalyani@mcc.edu.in"],
  },
  {
    image: "/images/officials/Deans/Dr-Hamumantharao.png",
    name: "P. Hanumantha Rao",
    role: "Associate Dean - Research And Development - Sciences",
    emails: ["hanumantharao@mcc.edu.in"],
  },
  {
    image: "/images/officials/Deans/Dr-Vijay-devanesan.png",
    name: "V. Vijay Devanesan",
    role: "Associate Dean - Student Affairs - Aided",
    emails: ["vijaydevanesan@gmail.com", "adsa@mcc.edu.in"],
  },
  {
    image: "/images/officials/Deans/Dr-Tony-thomas.png",
    name: "Tony Thomas",
    role: "Associate Dean - Student Affairs - Self Financed",
    emails: ["iadsasfs@mcc.edu.in", "tonythomas@mcc.edu.in"],
  },
  {
    image: "/images/officials/Deans/Dr-Arun.png",
    name: "Arun Kumar Joseph",
    role: "Associate Dean - International Programme",
    emails: ["adip@mcc.edu.in", "arun@mcc.edu.in"],
  },
  {
    image: "/images/officials/Deans/Dr-Serena.png",
    name: "Millicent Serena",
    role: "Associate Dean - International Programme",
    emails: ["adipsfs@mcc.edu.in", "millicentserena@mcc.edu.in"],
  },
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

function PersonCard({
  image,
  name,
  role,
  emails,
}: {
  image: string;
  name: string;
  role: string;
  emails: string[];
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      style={{
        backgroundColor: "white",
        border: "1px solid #dfdfdf",
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.12)";
        e.currentTarget.style.borderColor = "#D1B05D";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.06)";
        e.currentTarget.style.borderColor = "#dfdfdf";
      }}
    >
      {/* Image area */}
      <div
        style={{
          height: "260px",
          overflow: "hidden",
          backgroundColor: "#F3F7FF",
          position: "relative",
        }}
      >
        {imgError ? (
          <div
            style={{
              width: "100%",
              height: "100%",
              background: "linear-gradient(135deg, #7B2C3A, #454F46)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              className="font-dm font-bold"
              style={{ color: "white", fontSize: "24px" }}
            >
              {getInitials(name)}
            </span>
          </div>
        ) : (
          <Image
            src={image}
            alt={name}
            width={300}
            height={260}
            onError={() => setImgError(true)}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top center",
              transition: "transform 0.3s ease",
              display: "block",
            }}
            className="hover:scale-105"
          />
        )}
      </div>

      {/* Card body */}
      <div style={{ padding: "20px 18px 24px" }}>
        <p
          className="font-cormorant font-bold"
          style={{ fontSize: "19px", color: "#1a1a1a", marginBottom: "4px" }}
        >
          {name}
        </p>
        <p
          className="font-dm"
          style={{
            fontSize: "13px",
            color: "#7B2C3A",
            lineHeight: "1.4",
            marginBottom: "12px",
          }}
        >
          {role}
        </p>
        <div
          style={{
            width: "40px",
            height: "1px",
            backgroundColor: "#D1B05D",
            marginBottom: "12px",
          }}
        />
        <div>
          {emails.map((email) => (
            <a
              key={email}
              href={`mailto:${email}`}
              className="font-dm block"
              style={{
                fontSize: "12px",
                color: "#D1B05D",
                lineHeight: "1.8",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.textDecoration = "underline";
                (e.currentTarget as HTMLAnchorElement).style.color = "#7B2C3A";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.textDecoration = "none";
                (e.currentTarget as HTMLAnchorElement).style.color = "#D1B05D";
              }}
            >
              {email}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function SectionHeading({ title }: { title: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "14px",
        marginBottom: "32px",
      }}
    >
      <div
        style={{
          width: "4px",
          height: "36px",
          backgroundColor: "#D1B05D",
          borderRadius: "2px",
          flexShrink: 0,
        }}
      />
      <h2
        className="font-cormorant"
        style={{ fontSize: "28px", color: "#7B2C3A", margin: 0 }}
      >
        {title}
      </h2>
    </div>
  );
}

export default function DeansPage() {
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
              <li>
                <Link href="/" className="text-white/60 hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-white/40">/</li>
              <li>
                <Link href="#" className="text-white/60 hover:text-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li className="text-white/40">/</li>
              <li>
                <Link href="#" className="text-white/60 hover:text-gold transition-colors">
                  Administration
                </Link>
              </li>
              <li className="text-white/40">/</li>
              <li className="text-gold">Deans</li>
            </ol>
          </nav>
          <h1
            className="font-cormorant text-white font-light"
            style={{ fontSize: "52px", letterSpacing: "2px" }}
          >
            Deans
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
                  <li
                    key={link.label}
                    className={i < sidebarLinks.length - 1 ? "border-b border-[#f0f0f0]" : ""}
                  >
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

            {/* Intro */}
            <div style={{ paddingTop: "10px", marginBottom: "40px" }}>
              <p
                className="font-dm uppercase"
                style={{ fontSize: "11px", letterSpacing: "3px", color: "#D1B05D", marginBottom: "12px" }}
              >
                ADMINISTRATION
              </p>
              <h2
                className="font-cormorant text-maroon"
                style={{ fontSize: "36px", marginBottom: "8px" }}
              >
                Deans &amp; Associate Deans
              </h2>
              <div style={{ width: "50px", height: "2px", backgroundColor: "#D1B05D" }} />
            </div>

            {/* Deans grid */}
            <div
              style={{
                backgroundColor: "#F3F7FF",
                borderRadius: "10px",
                padding: "32px",
                marginBottom: "40px",
              }}
            >
              <SectionHeading title="Deans" />
              <div
                className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"
                style={{ gap: "24px" }}
              >
                {deans.map((dean) => (
                  <PersonCard key={dean.name} {...dean} />
                ))}
              </div>
            </div>

            {/* Associate Deans grid */}
            <div
              style={{
                backgroundColor: "#F3F7FF",
                borderRadius: "10px",
                padding: "32px",
                marginBottom: "10px",
              }}
            >
              <SectionHeading title="Associate Deans" />
              <div
                className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"
                style={{ gap: "24px" }}
              >
                {associateDeans.map((ad) => (
                  <PersonCard key={ad.name} {...ad} />
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
