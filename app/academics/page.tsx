"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import { useState } from "react";

const cards = [
  { num: "01", tag: "PROGRAMMES", title: "Courses Offered",            desc: "Explore 70+ undergraduate, postgraduate and doctoral programmes across arts, science and commerce.", href: "/academics/courses-offered" },
  { num: "02", tag: "ACADEMICS",  title: "Departments",                desc: "Explore our departments across Aided and Self-Financed streams offering world-class programmes in Arts, Science and Commerce.", href: "/academics/departments" },
  { num: "03", tag: "SYSTEM",     title: "Choice Based Credit System", desc: "Flexible curriculum allowing students to choose interdisciplinary courses.", href: "#" },
  { num: "04", tag: "EDUCATION",  title: "Value Education",            desc: "Holistic development through ethics, spirituality and social responsibility.", href: "#" },
  { num: "05", tag: "STUDIES",    title: "Environmental Studies",      desc: "Fostering environmental awareness and sustainable development practices.", href: "#" },
  { num: "06", tag: "NETWORK",    title: "Centres",                    desc: "Specialized research and academic centres driving innovation and excellence.", href: "#" },
];

const stats = [
  { number: "70+",  label: "Programmes" },
  { number: "348",  label: "Faculty Members" },
  { number: "7000", label: "Students" },
  { number: "1837", label: "Established" },
];

function AcademicCard({ num, tag, title, desc, href }: typeof cards[0]) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={href}
      style={{
        display: "block",
        backgroundColor: hovered ? "#fffdf7" : "white",
        border: "1px solid #dfdfdf",
        borderRadius: "10px",
        padding: "28px 32px",
        overflow: "hidden",
        position: "relative",
        transition: "all 0.35s ease",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered ? "0 12px 40px rgba(123,44,58,0.15)" : "none",
        textDecoration: "none",
        cursor: "pointer",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Large number watermark */}
      <span
        style={{
          position: "absolute",
          right: "-10px",
          top: "-15px",
          fontSize: "100px",
          fontFamily: "DM Sans, sans-serif",
          fontWeight: 900,
          color: hovered ? "rgba(123,44,58,0.08)" : "rgba(123,44,58,0.05)",
          lineHeight: 1,
          pointerEvents: "none",
          zIndex: 0,
          userSelect: "none",
          transition: "color 0.35s ease",
        }}
      >
        {num}
      </span>

      {/* Left accent bar */}
      <span
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "4px",
          backgroundColor: "#D1B05D",
          borderRadius: "10px 0 0 10px",
          transform: hovered ? "scaleY(1)" : "scaleY(0)",
          transformOrigin: "bottom",
          transition: "transform 0.3s ease",
        }}
      />

      {/* Card content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <span
          className="font-dm"
          style={{
            fontSize: "10px",
            letterSpacing: "2px",
            textTransform: "uppercase",
            backgroundColor: "#F3F7FF",
            color: "#D1B05D",
            padding: "4px 10px",
            borderRadius: "20px",
            display: "inline-block",
            marginBottom: "12px",
          }}
        >
          {tag}
        </span>

        <h3
          className="font-cormorant font-bold"
          style={{ fontSize: "22px", color: "#1a1a1a", lineHeight: "1.3", marginBottom: "10px" }}
        >
          {title}
        </h3>

        <p
          className="font-cormorant"
          style={{ fontSize: "15px", color: "#666", lineHeight: "1.5", marginBottom: "0" }}
        >
          {desc}
        </p>

        <span
          className="font-dm font-bold"
          style={{
            display: "block",
            marginTop: "12px",
            fontSize: "20px",
            color: "#D1B05D",
            transition: "transform 0.2s ease",
            transform: hovered ? "translateX(6px)" : "translateX(0)",
          }}
        >
          →
        </span>
      </div>
    </Link>
  );
}

function StreamCard({
  gradient,
  watermark,
  established,
  title,
  desc,
}: {
  gradient: string;
  watermark: string;
  established: string;
  title: string;
  desc: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        flex: 1,
        background: gradient,
        borderRadius: "12px",
        padding: "48px 40px",
        height: "280px",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered ? "0 16px 48px rgba(0,0,0,0.25)" : "0 8px 24px rgba(0,0,0,0.15)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Watermark */}
      <span
        style={{
          position: "absolute",
          right: "-20px",
          bottom: "-20px",
          fontSize: "120px",
          fontFamily: "DM Sans, sans-serif",
          fontWeight: 900,
          color: "rgba(255,255,255,0.05)",
          lineHeight: 1,
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        {watermark}
      </span>

      <div>
        <p
          className="font-dm"
          style={{ fontSize: "11px", letterSpacing: "3px", color: "#D1B05D", marginBottom: "12px" }}
        >
          {established}
        </p>
        <h3
          className="font-cormorant"
          style={{ fontSize: "36px", color: "white", marginBottom: "12px" }}
        >
          {title}
        </h3>
        <p
          className="font-cormorant"
          style={{ fontSize: "17px", color: "rgba(255,255,255,0.8)", fontStyle: "italic", lineHeight: "1.6" }}
        >
          {desc}
        </p>
      </div>

      <button
        style={{
          display: "inline-block",
          border: "1px solid #D1B05D",
          color: hovered ? "#7B2C3A" : "#D1B05D",
          backgroundColor: hovered ? "#D1B05D" : "transparent",
          padding: "10px 24px",
          borderRadius: "4px",
          fontSize: "13px",
          letterSpacing: "0.5px",
          cursor: "pointer",
          transition: "all 0.3s ease",
          fontFamily: "DM Sans, sans-serif",
          alignSelf: "flex-start",
          marginTop: "20px",
        }}
      >
        Explore →
      </button>
    </div>
  );
}

export default function AcademicsPage() {
  return (
    <>
      <Navbar />

      {/* Hero Banner */}
      <section
        className="relative w-full flex flex-col items-center justify-center text-center overflow-hidden"
        style={{
          height: "400px",
          backgroundImage: `linear-gradient(135deg, rgba(123,44,58,0.92) 0%, rgba(69,79,70,0.85) 100%), url('https://mccmainbucket.s3.ap-south-1.amazonaws.com/wp-content/uploads/2026/02/08074646/sports-1.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-[900px] mx-auto px-6">
          <p
            className="font-dm"
            style={{ fontSize: "11px", letterSpacing: "4px", color: "#D1B05D", textTransform: "uppercase", marginBottom: "16px" }}
          >
            MADRAS CHRISTIAN COLLEGE
          </p>
          <h1
            className="font-cormorant text-white font-light"
            style={{ fontSize: "72px", letterSpacing: "2px", lineHeight: 1, marginBottom: "16px" }}
          >
            Academics
          </h1>
          <p
            className="font-cormorant text-white/80"
            style={{ fontSize: "20px", fontStyle: "italic", marginBottom: "24px" }}
          >
            Excellence in Education Since 1837
          </p>
          <nav>
            <ol className="flex items-center justify-center gap-2 font-dm text-[13px]" style={{ color: "rgba(255,255,255,0.6)" }}>
              <li><Link href="/" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Home</Link></li>
              <li>/</li>
              <li style={{ color: "#D1B05D" }}>Academics</li>
            </ol>
          </nav>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold" />
      </section>

      {/* Intro Strip */}
      <section style={{ backgroundColor: "white", padding: "50px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <p
            className="font-cormorant"
            style={{ fontSize: "22px", color: "#454F46", fontStyle: "italic", lineHeight: "1.7", marginBottom: "28px" }}
          >
            &ldquo;Committed to academic excellence through innovative teaching, research and holistic education&rdquo;
          </p>
          <div style={{ width: "80px", height: "2px", backgroundColor: "#D1B05D", margin: "0 auto" }} />
        </div>
      </section>

      {/* Academic Cards Grid */}
      <section style={{ backgroundColor: "#F3F7FF", padding: "70px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* Section heading */}
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <p
              className="font-dm"
              style={{ fontSize: "11px", letterSpacing: "3px", color: "#D1B05D", textTransform: "uppercase", marginBottom: "12px" }}
            >
              EXPLORE
            </p>
            <h2
              className="font-cormorant"
              style={{ fontSize: "40px", color: "#7B2C3A", marginBottom: "14px" }}
            >
              Academic Programmes
            </h2>
            <div style={{ width: "60px", height: "2px", backgroundColor: "#D1B05D", margin: "0 auto" }} />
          </div>

          {/* Cards grid */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            style={{ gap: "24px" }}
          >
            {cards.map((card) => (
              <AcademicCard key={card.num} {...card} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section style={{ backgroundColor: "#7B2C3A", padding: "60px 24px" }}>
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-center">
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center" style={{ flex: 1 }}>
              <div style={{ textAlign: "center", padding: "16px 24px", width: "100%" }}>
                <p
                  className="font-dm font-bold"
                  style={{ fontSize: "44px", color: "#D1B05D", lineHeight: "1", marginBottom: "8px" }}
                >
                  {stat.number}
                </p>
                <p
                  className="font-cormorant"
                  style={{ fontSize: "16px", color: "white" }}
                >
                  {stat.label}
                </p>
              </div>
              {i < stats.length - 1 && (
                <div
                  className="hidden sm:block"
                  style={{ width: "1px", height: "60px", backgroundColor: "#D1B05D", opacity: 0.4, flexShrink: 0 }}
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
