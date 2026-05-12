"use client";

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
  { label: "Vice Principals", href: "/about/administration/vice-principals", active: true },
  { label: "Deans", href: "/about/administration/deans", active: false },
  { label: "Archives", href: "/about/administration/archives", active: false },
  { label: "SFS Office", href: "/about/administration/sfs-office", active: false },
  { label: "IQAC", href: "/about/administration/iqac", active: false },
  { label: "Principals Office", href: "/about/administration/principals-office", active: false },
  { label: "Bursars Office", href: "/about/administration/bursars-office", active: false },
  { label: "Organogram", href: "/about/administration/organogram", active: false },
];

const vpProfiles = [
  {
    photo: "/images/officials/vp-aided.jpg",
    alt: "R Sridhar - Vice Principal Administration",
    name: "Dr. R. Sridhar",
    lines: ["Vice – Principal", "Administration"],
    emails: ["vice-principal@mcc.edu.in", "sridhar@mcc.edu.in"],
  },
  {
    photo: "/images/officials/VP-SFS.jpg",
    alt: "J. Jannet Vennila - Vice Principal SFS",
    name: "Dr. J. Jannet Vennila",
    lines: ["Vice – Principal", "Self – Financed Stream"],
    emails: ["vice-principalsfs@mcc.edu.in"],
  },
];

function VPCard({
  photo,
  alt,
  name,
  lines,
  emails,
}: {
  photo: string;
  alt: string;
  name: string;
  lines: string[];
  emails: string[];
}) {
  return (
    <div
      style={{
        flex: 1,
        backgroundColor: "white",
        border: "1px solid #dfdfdf",
        borderRadius: "12px",
        padding: "40px 32px",
        textAlign: "center",
        boxShadow: "0 8px 32px rgba(123,44,58,0.08)",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.borderColor = "#D1B05D";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.borderColor = "#dfdfdf";
      }}
    >
      <div style={{ maxWidth: "180px", margin: "0 auto 24px" }}>
        <Image
          src={photo}
          alt={alt}
          width={180}
          height={180}
          style={{
            objectFit: "cover",
            borderRadius: "50%",
            border: "4px solid #D1B05D",
            width: "100%",
            height: "auto",
            display: "block",
            boxShadow: "0 8px 24px rgba(123,44,58,0.2)",
          }}
        />
      </div>

      <p className="font-cormorant font-bold" style={{ fontSize: "24px", color: "#1a1a1a" }}>
        {name}
      </p>

      <div style={{ marginTop: "8px" }}>
        {lines.map((line, i) => (
          <p key={i} className="font-dm text-maroon" style={{ fontSize: "14px", lineHeight: "1.6" }}>
            {line}
          </p>
        ))}
      </div>

      <div style={{ width: "48px", height: "1px", backgroundColor: "#D1B05D", margin: "14px auto" }} />

      <div>
        {emails.map((email) => (
          <a
            key={email}
            href={`mailto:${email}`}
            className="font-dm block transition-all duration-150 hover:underline"
            style={{ fontSize: "13px", color: "#D1B05D", lineHeight: "1.8" }}
          >
            {email}
          </a>
        ))}
      </div>
    </div>
  );
}

export default function VicePrincipalsPage() {
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
              <li><Link href="#" className="text-white/60 hover:text-gold transition-colors">About Us</Link></li>
              <li className="text-white/40">/</li>
              <li><Link href="#" className="text-white/60 hover:text-gold transition-colors">Administration</Link></li>
              <li className="text-white/40">/</li>
              <li className="text-gold">Vice Principals</li>
            </ol>
          </nav>
          <h1 className="font-cormorant text-white font-light" style={{ fontSize: "52px", letterSpacing: "2px" }}>
            Vice Principals
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
                link.active ? "border-gold text-maroon font-semibold" : "border-transparent text-[#555] hover:text-maroon"
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
            <div className="sticky top-6 bg-white border border-[#dfdfdf] rounded-sm p-6" style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
              <p className="font-dm text-maroon text-[12px] font-bold tracking-[0.15em] uppercase mb-4 pb-2 border-b border-[#dfdfdf]">
                Administration
              </p>
              <ul>
                {sidebarLinks.map((link, i) => (
                  <li key={link.label} className={i < sidebarLinks.length - 1 ? "border-b border-[#f0f0f0]" : ""}>
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
          <div className="flex-1 min-w-0 py-6">

            {/* Intro */}
            <div style={{ marginBottom: "40px" }}>
              <p className="font-dm uppercase" style={{ fontSize: "11px", letterSpacing: "3px", color: "#D1B05D", marginBottom: "12px" }}>
                ADMINISTRATION
              </p>
              <h2 className="font-cormorant text-maroon" style={{ fontSize: "36px", marginBottom: "8px" }}>
                Vice Principals
              </h2>
              <div style={{ width: "50px", height: "2px", backgroundColor: "#D1B05D", marginBottom: "20px" }} />
            </div>

            {/* VP Profile Cards */}
            <div className="flex flex-col sm:flex-row gap-8">
              {vpProfiles.map((vp) => (
                <VPCard key={vp.name} {...vp} />
              ))}
            </div>


          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
