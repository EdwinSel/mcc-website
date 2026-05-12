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
  { label: "Bursar", href: "/about/administration/bursar", active: true },
  { label: "Vice Principals", href: "/about/administration/vice-principals", active: false },
  { label: "Deans", href: "/about/administration/deans", active: false },
  { label: "Archives", href: "/about/administration/archives", active: false },
  { label: "SFS Office", href: "/about/administration/sfs-office", active: false },
  { label: "IQAC", href: "/about/administration/iqac", active: false },
  { label: "Principals Office", href: "/about/administration/principals-office", active: false },
  { label: "Bursars Office", href: "/about/administration/bursars-office", active: false },
  { label: "Organogram", href: "/about/administration/organogram", active: false },
];

export default function BursarPage() {
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
              <li className="text-gold">Bursar</li>
            </ol>
          </nav>
          <h1 className="font-cormorant text-white font-light" style={{ fontSize: "52px", letterSpacing: "2px" }}>
            Bursar
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
            <div className="flex flex-col md:flex-row gap-10">

              {/* Left column: Photo + contact */}
              <div className="w-full md:w-[35%] flex-shrink-0">
                <div style={{ maxWidth: "280px", margin: "0 auto" }}>
                  <Image
                    src="/images/officials/Bursar.jpg"
                    alt="Mr Cyrus Kallupurackal - Bursar"
                    width={280}
                    height={280}
                    style={{
                      objectFit: "cover",
                      borderRadius: "50%",
                      border: "4px solid #D1B05D",
                      width: "100%",
                      height: "auto",
                      display: "block",
                    }}
                  />
                </div>

                <div style={{ textAlign: "center", marginTop: "20px" }}>
                  <p className="font-cormorant font-bold text-maroon" style={{ fontSize: "22px" }}>
                    Mr Cyrus Kallupurackal
                  </p>
                  <p className="font-dm text-[#666]" style={{ fontSize: "14px", marginTop: "4px" }}>
                    Bursar
                  </p>
                  <p className="font-dm text-[#888]" style={{ fontSize: "13px", marginTop: "2px" }}>
                    Treasurer, MCC Association
                  </p>
                </div>

                <div
                  style={{
                    backgroundColor: "#F3F7FF",
                    borderLeft: "4px solid #D1B05D",
                    borderRadius: "4px",
                    padding: "16px 20px",
                    marginTop: "16px",
                  }}
                >
                  <div className="flex items-center gap-3" style={{ marginBottom: "10px" }}>
                    <span style={{ fontSize: "16px" }}>📧</span>
                    <span className="font-dm text-[#444]" style={{ fontSize: "14px" }}>bursar@mcc.edu.in</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span style={{ fontSize: "16px" }}>📞</span>
                    <span className="font-dm text-[#444]" style={{ fontSize: "14px" }}>044-22390675</span>
                  </div>
                </div>
              </div>

              {/* Right column: Profile */}
              <div className="flex-1 min-w-0">
                <p className="font-dm uppercase" style={{ fontSize: "11px", letterSpacing: "3px", color: "#D1B05D", marginBottom: "12px" }}>
                  BURSAR&apos;S PROFILE
                </p>
                <h2 className="font-cormorant text-maroon" style={{ fontSize: "34px", marginBottom: "8px" }}>
                  Mr Cyrus Kallupurackal
                </h2>
                <div style={{ width: "50px", height: "2px", backgroundColor: "#D1B05D", marginBottom: "28px" }} />

                <div
                  style={{
                    backgroundColor: "#F3F7FF",
                    border: "1px solid #dfdfdf",
                    borderLeft: "4px solid #D1B05D",
                    borderRadius: "4px",
                    padding: "12px 20px",
                    marginBottom: "24px",
                  }}
                >
                  <span className="font-dm text-maroon" style={{ fontSize: "14px" }}>
                    Bursar &nbsp;|&nbsp; Treasurer, MCC Association
                  </span>
                </div>

                <p
                  className="font-cormorant text-[#444]"
                  style={{ fontSize: "18px", lineHeight: "1.95", textAlign: "justify" }}
                >
                  Mr Cyrus Kallupurackal is a Chartered Accountant with over 13 years of experience
                  in Accounting, Finance, Audit and Taxation. He did a certificate course on
                  International Taxation and another on IFRS conducted by the Institute of Chartered
                  Accountants of India. He has experience in Health Care and Tyre Industries. Prior
                  to joining MCC, he served as Chief Financial Officer of Kothari Petrochemicals Ltd.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
