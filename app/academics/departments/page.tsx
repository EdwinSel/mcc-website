"use client";

import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import {
  BookOpen, Info, Languages, Clock, Shield, Grid3x3,
  TrendingUp, HelpCircle, ShoppingCart, Users, Plus,
  BarChart2, Target, FlaskConical, Leaf, Dog, Activity,
  Newspaper, MessageSquare, MapPin, Navigation, Laptop,
  Code, Code2, Image, Brain, Database, Microscope,
  Gift,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

// ── Data ──────────────────────────────────────────────────────────────────────

type Dept = { name: string; Icon: LucideIcon; href: string };

const aidedDepts: Dept[] = [
  { name: "English",            Icon: BookOpen,      href: "/academics/departments/english" },
  { name: "Tamil",              Icon: Info,          href: "/academics/departments/tamil" },
  { name: "Languages",          Icon: Languages,     href: "/academics/departments/languages" },
  { name: "History",            Icon: Clock,         href: "/academics/departments/history" },
  { name: "Political Science",  Icon: Shield,        href: "/academics/departments/political-science" },
  { name: "Public Administration", Icon: Grid3x3,   href: "/academics/departments/public-administration" },
  { name: "Economics",          Icon: TrendingUp,    href: "/academics/departments/economics" },
  { name: "Philosophy",         Icon: HelpCircle,    href: "/academics/departments/philosophy" },
  { name: "Commerce",           Icon: ShoppingCart,  href: "/academics/departments/commerce" },
  { name: "Social Work",        Icon: Users,         href: "/academics/departments/social-work" },
  { name: "Mathematics",        Icon: Plus,          href: "/academics/departments/mathematics" },
  { name: "Statistics",         Icon: BarChart2,     href: "/academics/departments/statistics" },
  { name: "Physics",            Icon: Target,        href: "/academics/departments/physics" },
  { name: "Chemistry",          Icon: FlaskConical,  href: "/academics/departments/chemistry" },
  { name: "Botany",             Icon: Leaf,          href: "/academics/departments/botany" },
  { name: "Zoology",            Icon: Dog,           href: "/academics/departments/zoology" },
  { name: "Physical Education", Icon: Activity,      href: "/academics/departments/physical-education" },
];

const sfsDepts: Dept[] = [
  { name: "English (SFS)",         Icon: BookOpen,      href: "/academics/departments/english-sfs" },
  { name: "Tamil (SFS)",           Icon: Info,          href: "/academics/departments/tamil-sfs" },
  { name: "Languages (SFS)",       Icon: Languages,     href: "/academics/departments/languages-sfs" },
  { name: "Journalism",            Icon: Newspaper,     href: "/academics/departments/journalism" },
  { name: "Social Work (SFS)",     Icon: Users,         href: "/academics/departments/social-work-sfs" },
  { name: "Commerce (SFS)",        Icon: ShoppingCart,  href: "/academics/departments/commerce-sfs" },
  { name: "Business Admin",        Icon: Gift,          href: "/academics/departments/business-admin" },
  { name: "Communication",         Icon: MessageSquare, href: "/academics/departments/communication" },
  { name: "Geography",             Icon: MapPin,        href: "/academics/departments/geography" },
  { name: "Tourism Studies",       Icon: Navigation,    href: "/academics/departments/tourism-studies" },
  { name: "Mathematics (SFS)",     Icon: Plus,          href: "/academics/departments/mathematics-sfs" },
  { name: "Physics (SFS)",         Icon: Target,        href: "/academics/departments/physics-sfs" },
  { name: "Chemistry (SFS)",       Icon: FlaskConical,  href: "/academics/departments/chemistry-sfs" },
  { name: "Microbiology",          Icon: Microscope,    href: "/academics/departments/microbiology" },
  { name: "Computer App (BCA)",    Icon: Laptop,        href: "/academics/departments/computer-application-bca" },
  { name: "Computer Sci (B.Sc)",   Icon: Code,          href: "/academics/departments/computer-science-bsc" },
  { name: "Computer Sci (MCA)",    Icon: Code2,         href: "/academics/departments/computer-science-mca" },
  { name: "Visual Communication",  Icon: Image,         href: "/academics/departments/visual-communication" },
  { name: "Physical Education",    Icon: Activity,      href: "/academics/departments/physical-education-sfs" },
  { name: "Psychology",            Icon: Brain,         href: "/academics/departments/psychology" },
  { name: "Data Science",          Icon: Database,      href: "/academics/departments/data-science" },
];

const stats = [
  { number: "17",   label: "Aided Departments" },
  { number: "21",   label: "SFS Departments" },
  { number: "348",  label: "Faculty Members" },
  { number: "7000", label: "Students" },
];

// ── DeptCard ──────────────────────────────────────────────────────────────────

function DeptCard({ name, Icon, href }: Dept) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={href}
      style={{
        display: "block",
        backgroundColor: "white",
        border: "1px solid #dfdfdf",
        borderRadius: "12px",
        padding: "28px 20px",
        textAlign: "center",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
        textDecoration: "none",
        transition: "all 0.3s ease",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 12px 32px rgba(123,44,58,0.12)"
          : "0 2px 12px rgba(0,0,0,0.04)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top accent bar */}
      <span
        style={{
          position: "absolute",
          top: 0, left: 0, right: 0,
          height: "4px",
          backgroundColor: "#D1B05D",
          transform: hovered ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "left",
          transition: "transform 0.3s ease",
          display: "block",
        }}
      />

      {/* Icon area */}
      <div
        style={{
          width: "60px",
          height: "60px",
          borderRadius: "12px",
          backgroundColor: hovered ? "#7B2C3A" : "#F3F7FF",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 16px auto",
          transition: "background-color 0.3s ease",
        }}
      >
        <Icon
          size={28}
          color={hovered ? "white" : "#7B2C3A"}
          style={{ transition: "color 0.3s ease" }}
        />
      </div>

      {/* Department name */}
      <p
        className="font-cormorant"
        style={{
          fontSize: "16px",
          color: "#1a1a1a",
          fontWeight: 600,
          lineHeight: "1.3",
          marginBottom: "8px",
        }}
      >
        {name}
      </p>

      {/* Arrow */}
      <span
        className="font-dm"
        style={{
          fontSize: "14px",
          color: "#D1B05D",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.2s ease",
          display: "block",
        }}
      >
        →
      </span>
    </Link>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────

export default function DepartmentsPage() {
  const [activeStream, setActiveStream] = useState<"aided" | "sfs">("aided");
  const [visible, setVisible] = useState(true);

  function switchStream(stream: "aided" | "sfs") {
    if (stream === activeStream) return;
    setVisible(false);
    setTimeout(() => { setActiveStream(stream); setVisible(true); }, 150);
  }

  const depts = activeStream === "aided" ? aidedDepts : sfsDepts;
  const streamLabel = activeStream === "aided" ? "AIDED STREAM" : "SELF-FINANCED STREAM";

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
              <li className="text-gold">Departments</li>
            </ol>
          </nav>
          <h1 className="font-cormorant text-white font-light" style={{ fontSize: "52px", letterSpacing: "2px" }}>
            Departments
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold" />
      </section>

      {/* Stream Toggle */}
      <div style={{ backgroundColor: "white", padding: "30px 0", textAlign: "center" }}>
        <div style={{ display: "inline-flex" }}>
          <button
            className="font-dm"
            onClick={() => switchStream("aided")}
            style={{
              padding: "12px 40px",
              fontSize: "14px",
              borderRadius: "4px 0 0 4px",
              border: "1px solid",
              borderColor: activeStream === "aided" ? "#7B2C3A" : "#dfdfdf",
              backgroundColor: activeStream === "aided" ? "#7B2C3A" : "white",
              color: activeStream === "aided" ? "white" : "#666",
              fontWeight: activeStream === "aided" ? 600 : 400,
              cursor: "pointer",
              transition: "all 0.2s ease",
              outline: "none",
            }}
          >
            AIDED STREAM
          </button>
          <button
            className="font-dm"
            onClick={() => switchStream("sfs")}
            style={{
              padding: "12px 40px",
              fontSize: "14px",
              borderRadius: "0 4px 4px 0",
              border: "1px solid",
              borderColor: activeStream === "sfs" ? "#7B2C3A" : "#dfdfdf",
              borderLeft: "none",
              backgroundColor: activeStream === "sfs" ? "#7B2C3A" : "white",
              color: activeStream === "sfs" ? "white" : "#666",
              fontWeight: activeStream === "sfs" ? 600 : 400,
              cursor: "pointer",
              transition: "all 0.2s ease",
              outline: "none",
            }}
          >
            SELF-FINANCED STREAM
          </button>
        </div>

        {/* Stream pill */}
        <div style={{ marginTop: "16px" }}>
          <span
            className="font-dm"
            style={{
              display: "inline-block",
              border: "1px solid #D1B05D",
              color: "#7B2C3A",
              fontSize: "11px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              padding: "6px 20px",
              borderRadius: "20px",
            }}
          >
            {streamLabel}
          </span>
        </div>
      </div>

      {/* Departments Grid */}
      <section style={{ backgroundColor: "#F3F7FF", padding: "50px 24px" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            transition: "opacity 0.15s ease",
            opacity: visible ? 1 : 0,
          }}
        >
          <div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"
            style={{ gap: "20px" }}
          >
            {depts.map((dept) => (
              <DeptCard key={dept.href} {...dept} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section style={{ backgroundColor: "#454F46", padding: "40px 24px" }}>
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-center">
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center" style={{ flex: 1 }}>
              <div style={{ textAlign: "center", padding: "16px 24px", width: "100%" }}>
                <p className="font-dm font-bold" style={{ fontSize: "36px", color: "#D1B05D", lineHeight: 1, marginBottom: "8px" }}>
                  {stat.number}
                </p>
                <p className="font-cormorant" style={{ fontSize: "15px", color: "white" }}>
                  {stat.label}
                </p>
              </div>
              {i < stats.length - 1 && (
                <div
                  className="hidden sm:block"
                  style={{ width: "1px", height: "50px", backgroundColor: "#D1B05D", opacity: 0.4, flexShrink: 0 }}
                />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Note Banner */}
      <div style={{ backgroundColor: "white", padding: "40px 24px" }}>
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            backgroundColor: "#F3F7FF",
            border: "1px solid #D1B05D",
            borderRadius: "8px",
            padding: "30px",
            textAlign: "center",
          }}
        >
          <p className="font-cormorant" style={{ fontSize: "16px", color: "#666", fontStyle: "italic", margin: 0 }}>
            Click on any department to explore faculty, courses, research and more.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}
