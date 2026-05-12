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
  { label: "Principal", href: "/about/administration/principal", active: true },
  { label: "Bursar", href: "/about/administration/bursar", active: false },
  { label: "Vice Principals", href: "/about/administration/vice-principals", active: false },
  { label: "Deans", href: "/about/administration/deans", active: false },
  { label: "Archives", href: "/about/administration/archives", active: false },
  { label: "SFS Office", href: "/about/administration/sfs-office", active: false },
  { label: "IQAC", href: "/about/administration/iqac", active: false },
  { label: "Principals Office", href: "/about/administration/principals-office", active: false },
  { label: "Bursars Office", href: "/about/administration/bursars-office", active: false },
  { label: "Organogram", href: "/about/administration/organogram", active: false },
];

const messageParagraphs = [
  `It's my pleasure in greeting everyone, following the assumption of the role of Principal and Secretary of Madras Christian College from 1st of June 2020. Although it is a challenging dispensation to assume the leadership role, it is from the hope that God calls His children to be leaders in a given occasion as per the measure of grace that he bestows to encounter challenges.`,
  `Madras Christian College has been recognized among the top liberal arts and science colleges in India from its inception. The legacy inherited from our forefathers does play a vital role in keeping the past glory intact. However, it is high time that we recognize to add value to the past glory and keep it vibrating. One thing that we are proud of MCC is about its culture. Theologically 'Culture' is a term that includes one's faith. How do we identify ourselves with the culture of Madras Christian College? I perceive that the culture of MCC is in line with that constituted by Christ and anyone who subscribes to this faith naturally gets grafted to the culture of this College.`,
  `Dr. Boyd in his words describe that the founder of Madras Christian College is Jesus Christ. God demonstrates this organic union in Jesus Christ by grafting Gentiles who were counted as 'the branches of the wild Olive tree' and deemed as 'uncircumcised heathens' into the family of God (Ephesians 2:11-13). This perspective would impel us and liberate us from constricted mindset and subsequently leading to a wider understanding of what God wants us as a community to accomplish in the present dispensation.`,
  `Unlike earlier dispensations, Madras Christian College is now facing relatively a challenging task ahead of its trajectory with regard to socio-political developments. This solicits a need to contextualize its practices and realigning its popularly held views in line with the Mission of the College and ensuing challenges. I appeal to the community together to unite for a common cause of Mission of the College amidst holding varied opinions and apprehensions. The unity that I advocate is not a uniformity of opinions but a unity amidst diverse opinions.`,
  `Accepting this truth and keeping in mind the institutional development, let us come together for hailing His name through academic excellence, spiritual vitality and social relevance.`,
];

export default function PrincipalPage() {
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
              <li className="text-gold">Principal</li>
            </ol>
          </nav>
          <h1 className="font-cormorant text-white font-light" style={{ fontSize: "52px", letterSpacing: "2px" }}>
            Principal
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

                {/* Photo */}
                <Image
                  src="/images/principal/Principal.jpg"
                  alt="Dr P. Wilson - Principal"
                  width={380}
                  height={420}
                  style={{
                    objectFit: "cover",
                    borderRadius: "8px",
                    border: "4px solid #D1B05D",
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                />

                {/* Name + designation */}
                <div style={{ textAlign: "center", marginTop: "16px" }}>
                  <p className="font-cormorant font-bold text-maroon" style={{ fontSize: "22px" }}>
                    Dr P. Wilson
                  </p>
                  <p className="font-dm text-[#666]" style={{ fontSize: "14px", marginTop: "4px" }}>
                    Principal &amp; Secretary
                  </p>
                </div>

                {/* Contact info */}
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
                    <span className="font-dm text-[#444]" style={{ fontSize: "14px" }}>
                      principal@mcc.edu.in
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span style={{ fontSize: "16px" }}>📞</span>
                    <span className="font-dm text-[#444]" style={{ fontSize: "14px" }}>
                      044-22390675
                    </span>
                  </div>
                </div>
              </div>

              {/* Right column: Message */}
              <div className="flex-1 min-w-0">
                <p className="font-dm uppercase" style={{ fontSize: "11px", letterSpacing: "3px", color: "#D1B05D", marginBottom: "12px" }}>
                  PRINCIPAL&apos;S MESSAGE
                </p>
                <h2 className="font-cormorant text-maroon" style={{ fontSize: "34px", marginBottom: "8px" }}>
                  A Message from the Principal
                </h2>
                <div style={{ width: "50px", height: "2px", backgroundColor: "#D1B05D", marginBottom: "28px" }} />

                <p className="font-cormorant italic text-[#333]" style={{ fontSize: "18px", marginBottom: "4px" }}>
                  Dear All
                </p>
                <p className="font-cormorant text-[#333]" style={{ fontSize: "18px", marginBottom: "20px" }}>
                  Warm greetings from Madras Christian College
                </p>

                {messageParagraphs.map((para, i) => (
                  <p
                    key={i}
                    className="font-cormorant text-[#444]"
                    style={{
                      fontSize: "17px",
                      lineHeight: "1.95",
                      textAlign: "justify",
                      marginBottom: "18px",
                    }}
                  >
                    {para}
                  </p>
                ))}

                {/* Signature */}
                <div style={{ marginTop: "32px" }}>
                  <div style={{ width: "100%", height: "1px", backgroundColor: "#D1B05D", marginBottom: "16px" }} />
                  <p className="font-cormorant font-bold text-maroon" style={{ fontSize: "20px" }}>
                    P. Wilson
                  </p>
                  <p className="font-dm text-[#666]" style={{ fontSize: "14px", marginTop: "4px" }}>
                    Principal and Secretary
                  </p>
                  <p className="font-dm text-[#888]" style={{ fontSize: "13px", marginTop: "2px" }}>
                    Madras Christian College
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
