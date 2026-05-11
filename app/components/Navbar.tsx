"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "#",
    dropdown: ["History", "Vision & Mission", "Administration", "Accreditation", "Contact Us"],
  },
  {
    label: "Global Outreach",
    href: "#",
    dropdown: ["International Relations", "MoUs & Partnerships", "Overseas Alumni"],
  },
  {
    label: "Research",
    href: "#",
    dropdown: ["Research Centres", "Publications", "Projects", "PhD Programmes"],
  },
  {
    label: "Student Services",
    href: "#",
    dropdown: ["Admissions", "Scholarships", "Hostel", "Library", "Sports"],
  },
  { label: "IQAC", href: "#" },
  { label: "NIRF", href: "#" },
  { label: "Fee Payment", href: "#", highlight: true },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className="sticky top-0 z-50 bg-maroon shadow-lg">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 min-w-0 flex-shrink-0">
            <div className="relative w-14 h-14 lg:w-16 lg:h-16 flex-shrink-0">
              <Image
                src="/images/LOGO.png"
                alt="MCC Logo"
                fill
                className="object-contain"
              />
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

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative group"
                onMouseEnter={() => link.dropdown && setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={`font-dm text-[12px] 2xl:text-[13px] tracking-wide px-2.5 2xl:px-3 py-2 flex items-center gap-1 transition-colors duration-200 whitespace-nowrap ${
                    link.highlight
                      ? "bg-gold text-maroon font-semibold px-3 py-1.5 rounded-sm hover:bg-[#c4a54f]"
                      : "text-white/85 hover:text-white"
                  }`}
                >
                  {link.label}
                  {link.dropdown && (
                    <svg
                      className="w-2.5 h-2.5 opacity-60 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {link.dropdown && openDropdown === link.label && (
                  <div className="absolute top-full left-0 min-w-52 bg-white shadow-2xl border-t-2 border-gold z-50 py-1">
                    {link.dropdown.map((item) => (
                      <a
                        key={item}
                        href="#"
                        className="block font-dm text-[12px] text-maroon px-5 py-2.5 hover:bg-offwhite border-l-2 border-transparent hover:border-gold hover:pl-4 transition-all duration-150"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="xl:hidden p-2 text-white flex-shrink-0"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            <div className="w-5 space-y-1">
              <span
                className={`block h-px bg-white transition-all duration-300 origin-center ${
                  mobileOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`block h-px bg-white transition-all duration-300 ${mobileOpen ? "opacity-0 scale-x-0" : ""}`}
              />
              <span
                className={`block h-px bg-white transition-all duration-300 origin-center ${
                  mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`xl:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="bg-maroon border-t border-white/15 divide-y divide-white/10">
          {navLinks.map((link) => (
            <div key={link.label}>
              <button
                className="w-full text-left font-dm text-white/90 text-sm px-5 py-3.5 flex justify-between items-center"
                onClick={() =>
                  setOpenDropdown(openDropdown === link.label ? null : link.label)
                }
              >
                <span>{link.label}</span>
                {link.dropdown && (
                  <svg
                    className={`w-4 h-4 opacity-60 transition-transform duration-200 ${
                      openDropdown === link.label ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </button>
              {link.dropdown && openDropdown === link.label && (
                <div className="bg-[#5c1e2d] pl-4 divide-y divide-white/5">
                  {link.dropdown.map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="block font-dm text-white/70 text-sm px-5 py-3 hover:text-gold transition-colors"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
