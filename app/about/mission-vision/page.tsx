"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";

const sidebarLinks = [
  { label: "Emblem & Motto", href: "/about/emblem-motto", active: false },
  { label: "Mission & Vision", href: "/about/mission-vision", active: true },
  { label: "History & Milestones", href: "/about/history-and-milestones", active: false },
  { label: "Corporate Social Responsibility", href: "/about/csr", active: false },
  { label: "Institutions", href: "/about/institutions", active: false },
];

const coreValues = ["Academic Excellence", "Spiritual Vitality", "Social Relevance"];

const cardBase: React.CSSProperties = {
  backgroundColor: "#fff",
  border: "1px solid #dfdfdf",
  borderRadius: "8px",
  boxShadow: "0 4px 24px rgba(123,44,58,0.08)",
  overflow: "visible",
  transition: "all 0.3s ease",
};

function onEnter(e: React.MouseEvent<HTMLDivElement>) {
  e.currentTarget.style.transform = "translateY(-6px)";
  e.currentTarget.style.boxShadow = "0 20px 56px rgba(123,44,58,0.18)";
}
function onLeave(e: React.MouseEvent<HTMLDivElement>) {
  e.currentTarget.style.transform = "translateY(0)";
  e.currentTarget.style.boxShadow = "0 4px 24px rgba(123,44,58,0.08)";
}

function IconCircle({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex justify-center">
      <div
        style={{
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          backgroundColor: "#FFFFFF",
          border: "4px solid #D1B05D",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 8px 24px rgba(209,176,93,0.3)",
          marginTop: "-75px",
          flexShrink: 0,
        }}
      >
        <img
          src={src}
          alt={alt}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            borderRadius: "50%",
            display: "block",
            padding: "15px",
          }}
        />
      </div>
    </div>
  );
}

function CardTitle({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h2
        className="font-cormorant text-maroon font-bold text-center"
        style={{ fontSize: "30px", marginTop: "16px" }}
      >
        {children}
      </h2>
      <div
        style={{
          width: "50px",
          height: "2px",
          backgroundColor: "#D1B05D",
          margin: "12px auto 20px",
        }}
      />
    </>
  );
}

export default function MissionVisionPage() {
  return (
    <>
      <Navbar />

      {/* ── Section 1: Hero Banner ── */}
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
              <li className="text-gold">Mission &amp; Vision</li>
            </ol>
          </nav>
          <h1
            className="font-cormorant text-white font-light"
            style={{ fontSize: "52px", letterSpacing: "2px" }}
          >
            Mission &amp; Vision
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold" />
      </section>

      {/* ── Mobile sidebar tabs ── */}
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

      {/* ── Section 2 + 3: Sidebar + Cards ── */}
      <section style={{ backgroundColor: "#F3F7FF", padding: "100px 24px 70px" }}>
        <div className="max-w-[1200px] mx-auto flex gap-8 items-start">

          {/* Sticky sidebar — desktop only */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <div
              className="sticky top-6 bg-white border border-[#dfdfdf] rounded-sm p-6"
              style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
            >
              <p className="font-dm text-maroon text-[12px] font-bold tracking-[0.15em] uppercase mb-4 pb-2 border-b border-[#dfdfdf]">
                About Us
              </p>
              <ul>
                {sidebarLinks.map((link, i) => (
                  <li
                    key={link.label}
                    className={i < sidebarLinks.length - 1 ? "border-b border-[#f0f0f0]" : ""}
                  >
                    <Link
                      href={link.href}
                      className={`block font-cormorant text-[16px] py-2.5 pl-3 transition-all duration-150 border-l-[3px] ${
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

            {/* Row 1: Mission + Vision */}
            <div className="flex flex-col md:flex-row gap-8">

              {/* Mission Card */}
              <div
                className="flex-1"
                style={cardBase}
                onMouseEnter={onEnter}
                onMouseLeave={onLeave}
              >
                <IconCircle src="/images/Mission_vision/mission.jpeg" alt="Mission" />
                <div style={{ padding: "0 32px 36px" }}>
                  <CardTitle>Mission</CardTitle>
                  <p
                    className="font-cormorant text-[#444444] text-justify"
                    style={{ fontSize: "18px", lineHeight: "1.9" }}
                  >
                    Madras Christian College (MCC) with the inspiration of the love of God offers
                    to people of all communities education of the whole person, which is congruous
                    with God&apos;s revelation in Christ of the true nature of humanity and is
                    appropriate to the needs of India and of the world.
                  </p>
                </div>
              </div>

              {/* Vision Card */}
              <div
                className="flex-1"
                style={cardBase}
                onMouseEnter={onEnter}
                onMouseLeave={onLeave}
              >
                <IconCircle src="/images/Mission_vision/vision.jpeg" alt="Vision" />
                <div style={{ padding: "0 32px 36px" }}>
                  <CardTitle>Vision</CardTitle>
                  <p
                    className="font-cormorant text-[#444444] text-justify"
                    style={{ fontSize: "18px", lineHeight: "1.9" }}
                  >
                    Madras Christian College aspires to be an institution of excellence
                    transforming lives through education with a commitment to service.
                  </p>
                </div>
              </div>
            </div>

            {/* Row 2: Core Values — centered, 50% width on md+ */}
            <div className="w-full md:w-1/2 mx-auto" style={{ marginTop: "48px" }}>
              <div
                style={cardBase}
                onMouseEnter={onEnter}
                onMouseLeave={onLeave}
              >
                <IconCircle src="/images/Mission_vision/core_values.jpeg" alt="Core Values" />
                <div style={{ padding: "0 32px 36px" }}>
                  <CardTitle>Core Values</CardTitle>
                  <ul className="text-center">
                    {coreValues.map((value) => (
                      <li
                        key={value}
                        className="font-cormorant text-[#333333]"
                        style={{ fontSize: "18px", lineHeight: "2.4" }}
                      >
                        <span style={{ color: "#D1B05D", marginRight: "10px" }}>●</span>
                        {value}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Section 4: Quote Banner ── */}
      <section
        className="relative w-full overflow-hidden"
        style={{ backgroundColor: "#454F46", padding: "70px 24px" }}
      >
        <span
          className="font-cormorant text-gold absolute select-none pointer-events-none"
          style={{ fontSize: "100px", lineHeight: 1, top: "20px", left: "40px", opacity: 0.25 }}
          aria-hidden
        >
          &ldquo;
        </span>
        <span
          className="font-cormorant text-gold absolute select-none pointer-events-none"
          style={{ fontSize: "100px", lineHeight: 1, bottom: "0px", right: "40px", opacity: 0.25 }}
          aria-hidden
        >
          &rdquo;
        </span>

        <div className="relative max-w-3xl mx-auto text-center">
          <p
            className="font-cormorant italic text-white"
            style={{ fontSize: "30px", lineHeight: "1.7" }}
          >
            An institution of excellence transforming lives through<br />
            education with a commitment to service.
          </p>
          <p
            className="font-dm text-gold"
            style={{ fontSize: "13px", letterSpacing: "2px", marginTop: "20px" }}
          >
            — Madras Christian College Vision
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
