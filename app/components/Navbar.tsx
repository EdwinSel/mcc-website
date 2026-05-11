"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const linkHrefs: Record<string, string> = {
  "Emblem & Motto": "/about/emblem-motto",
  "Mission & Vision": "/about/mission-vision",
  "History & Milestone": "/about/history-and-milestones",
  "CSR": "/about/csr",
  "Institutions": "/about/institutions",
};

type MegaColumn = {
  heading?: string;
  links: string[];
};

type NavItem = {
  label: string;
  href: string;
  mega?: MegaColumn[];
  dropdown?: string[];
};

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "#",
    mega: [
      {
        heading: "About",
        links: [
          "Emblem & Motto",
          "Mission & Vision",
          "History & Milestone",
          "CSR",
          "Institutions",
        ],
      },
      {
        heading: "Administration",
        links: [
          "MCC Association",
          "Governing Body",
          "Board of Directors",
          "Senatus",
          "Principal",
          "Bursar",
          "Vice Principals",
          "Deans",
          "Archives",
          "Self-Financed Stream (SFS) Office",
          "IQAC",
          "Principals Office",
          "Bursars Office",
          "Organogram",
        ],
      },
      {
        heading: "Alumni",
        links: [
          "Alumni Office",
          "Distinguished Alumni",
          "Register Now",
          "Prayer",
        ],
      },
    ],
  },
  {
    label: "Global Outreach",
    href: "#",
    dropdown: [
      "Dean of International Programme",
      "International Programme",
      "Student Exchange",
      "Centre for International Social Work",
      "International Students Information System",
      "Study Abroad",
      "Foreign Students Information System",
    ],
  },
  {
    label: "Research",
    href: "#",
    mega: [
      {
        heading: "Research",
        links: [
          "Deanery",
          "Policy on Research & Development",
          "Intellectual Property Rights Policy",
          "Ph.D. Programme",
          "Post Doctoral Fellowship",
          "Ethics Committee",
        ],
      },
      {
        heading: "Financial Support",
        links: [
          "Seed Money Grant",
          "Assistance Conference",
          "Annual Reports",
          "Project",
          "Facilities for Research",
          "MCC Research Colloquium",
        ],
      },
    ],
  },
  {
    label: "Students Services",
    href: "#",
    mega: [
      {
        heading: "Student Services",
        links: [
          "Dean of Students Affairs",
          "Dean of Women Students",
          "Counselling",
          "College Union",
          "Grievance Cell",
          "Internal Complaints Committee",
          "Anti Narcotic",
          "National Cadet Corps",
          "Governing Body",
        ],
      },
      {
        heading: "Services",
        links: [
          "Student Christian Movement",
          "Differently Abled",
          "Foreign Students",
          "Bishop Heber Chapel",
        ],
      },
    ],
  },
  { label: "IQAC", href: "#" },
  { label: "NIRF", href: "#" },
  { label: "Fee Payment", href: "#" },
];

export default function Navbar() {
  const [openMega, setOpenMega] = useState<string | null>(null);
  const [megaVisible, setMegaVisible] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null);

  const megaTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dropTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* ── Mega menu handlers ── */
  const onMegaEnter = (label: string) => {
    if (megaTimer.current) clearTimeout(megaTimer.current);
    if (openMega !== label) {
      setMegaVisible(false);
      setOpenMega(label);
      requestAnimationFrame(() => requestAnimationFrame(() => setMegaVisible(true)));
    } else {
      setMegaVisible(true);
    }
  };

  const onMegaLeave = () => {
    megaTimer.current = setTimeout(() => {
      setMegaVisible(false);
      setTimeout(() => setOpenMega(null), 200);
    }, 80);
  };

  const cancelMegaClose = () => {
    if (megaTimer.current) clearTimeout(megaTimer.current);
    setMegaVisible(true);
  };

  /* ── Simple dropdown handlers ── */
  const onDropEnter = (label: string) => {
    if (dropTimer.current) clearTimeout(dropTimer.current);
    setOpenDropdown(label);
  };

  const onDropLeave = () => {
    dropTimer.current = setTimeout(() => setOpenDropdown(null), 100);
  };

  const cancelDropClose = () => {
    if (dropTimer.current) clearTimeout(dropTimer.current);
  };

  return (
    <nav className="sticky top-0 z-50 bg-maroon shadow-md">
      {/* ── Main bar ── */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20 lg:h-24">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="relative w-14 h-14 lg:w-16 lg:h-16 flex-shrink-0">
              <Image src="/images/LOGO.png" alt="MCC Logo" fill className="object-contain" />
            </div>
            <div>
              <p className="font-cormorant text-white font-semibold text-base lg:text-xl leading-tight tracking-wide">
                Madras Christian College
              </p>
              <p className="font-dm text-white/60 text-[9px] lg:text-[11px] tracking-[0.2em] uppercase">
                Autonomous
              </p>
            </div>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden xl:flex items-center">
            {navItems.map((item) => {
              const hasMega = !!item.mega;
              const hasDrop = !!item.dropdown;

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => {
                    if (hasMega) onMegaEnter(item.label);
                    if (hasDrop) onDropEnter(item.label);
                  }}
                  onMouseLeave={() => {
                    if (hasMega) onMegaLeave();
                    if (hasDrop) onDropLeave();
                  }}
                >
                  <Link
                    href={item.href}
                    className={`font-dm text-[12.5px] px-3 py-2 flex items-center gap-1 whitespace-nowrap transition-colors duration-150 ${
                      openMega === item.label || openDropdown === item.label
                        ? "text-gold"
                        : "text-white/85 hover:text-white"
                    }`}
                  >
                    {item.label}
                    {(hasMega || hasDrop) && (
                      <svg
                        className={`w-2.5 h-2.5 opacity-60 mt-px transition-transform duration-200 ${
                          openMega === item.label || openDropdown === item.label ? "rotate-180" : ""
                        }`}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>

                  {/* Active underline */}
                  {(openMega === item.label || openDropdown === item.label) && (
                    <div className="absolute bottom-0 left-3 right-3 h-[2px] bg-gold" />
                  )}

                  {/* ── Simple dropdown (Global Outreach) ── */}
                  {hasDrop && (
                    <div
                      onMouseEnter={cancelDropClose}
                      onMouseLeave={onDropLeave}
                      className="absolute top-full left-0 min-w-72 bg-white shadow-xl border-t-2 border-gold/40 z-[9999] py-3"
                      style={{
                        opacity: openDropdown === item.label ? 1 : 0,
                        transform: openDropdown === item.label ? "translateY(0)" : "translateY(-6px)",
                        visibility: openDropdown === item.label ? "visible" : "hidden",
                        transition: "opacity 0.18s ease, transform 0.18s ease",
                        pointerEvents: openDropdown === item.label ? "auto" : "none",
                      }}
                    >
                      {item.dropdown!.map((link) => (
                        <a
                          key={link}
                          href="#"
                          className="block font-cormorant text-[#1a1a1a] text-[15px] px-5 py-2 leading-snug hover:text-maroon hover:bg-offwhite transition-colors duration-150"
                        >
                          {link}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile hamburger */}
          <button
            className="xl:hidden p-2 text-white flex-shrink-0"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 space-y-1.5">
              <span className={`block h-px bg-white transition-all duration-300 origin-center ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`block h-px bg-white transition-all duration-300 ${mobileOpen ? "opacity-0 scale-x-0" : ""}`} />
              <span className={`block h-px bg-white transition-all duration-300 origin-center ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* ── Full-width mega menus ── */}
      {navItems
        .filter((n) => n.mega)
        .map((item) => (
          <div
            key={item.label}
            onMouseEnter={cancelMegaClose}
            onMouseLeave={onMegaLeave}
            className="absolute left-0 right-0 top-full w-full bg-white shadow-2xl z-[9999] border-t-2 border-gold/30"
            style={{
              opacity: openMega === item.label && megaVisible ? 1 : 0,
              transform: openMega === item.label && megaVisible ? "translateY(0)" : "translateY(-8px)",
              visibility: openMega === item.label ? "visible" : "hidden",
              transition: "opacity 0.2s ease, transform 0.2s ease",
              pointerEvents: openMega === item.label ? "auto" : "none",
            }}
          >
            <div className="max-w-screen-xl mx-auto px-10 py-10">
              <div className="flex">
                {item.mega!.map((col, i) => (
                  <div
                    key={i}
                    className={`flex-1 ${i < item.mega!.length - 1 ? "border-r border-[#dfdfdf] pr-10 mr-10" : ""}`}
                  >
                    {col.heading && (
                      <p className="font-dm text-maroon text-[11px] font-bold tracking-[0.18em] uppercase mb-4 pb-2 border-b-2 border-maroon/30">
                        {col.heading}
                      </p>
                    )}
                    <ul>
                      {col.links.map((link) => (
                        <li key={link}>
                          <Link
                            href={linkHrefs[link] ?? "#"}
                            className="block font-cormorant text-[#1a1a1a] text-[15px] leading-8 hover:text-maroon transition-colors duration-150 hover:pl-2 border-l-2 border-transparent hover:border-gold pl-0 transition-all"
                          >
                            {link}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

      {/* ── Mobile menu ── */}
      <div
        className={`xl:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="bg-maroon border-t border-white/15 divide-y divide-white/10">
          {navItems.map((item) => {
            const hasSubmenu = !!(item.mega || item.dropdown);
            const allLinks = item.mega
              ? item.mega.flatMap((c) => c.links)
              : item.dropdown ?? [];

            return (
              <div key={item.label}>
                <button
                  className="w-full text-left font-dm text-white/90 text-sm px-5 py-3.5 flex justify-between items-center"
                  onClick={() =>
                    setOpenMobileSection(openMobileSection === item.label ? null : item.label)
                  }
                >
                  <span>{item.label}</span>
                  {hasSubmenu && (
                    <svg
                      className={`w-4 h-4 opacity-60 transition-transform duration-200 ${
                        openMobileSection === item.label ? "rotate-180" : ""
                      }`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </button>

                {hasSubmenu && openMobileSection === item.label && (
                  <div className="bg-[#5c1e2d] px-5 py-3 divide-y divide-white/5">
                    {item.mega
                      ? item.mega.map((col, ci) => (
                          <div key={ci} className="py-3">
                            {col.heading && (
                              <p className="font-dm text-gold text-[10px] tracking-widest uppercase mb-2">
                                {col.heading}
                              </p>
                            )}
                            {col.links.map((link) => (
                              <Link
                                key={link}
                                href={linkHrefs[link] ?? "#"}
                                className="block font-cormorant text-white/80 text-[15px] leading-8 hover:text-gold transition-colors"
                              >
                                {link}
                              </Link>
                            ))}
                          </div>
                        ))
                      : allLinks.map((link) => (
                          <a
                            key={link}
                            href="#"
                            className="block font-cormorant text-white/80 text-[15px] leading-8 hover:text-gold transition-colors"
                          >
                            {link}
                          </a>
                        ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
