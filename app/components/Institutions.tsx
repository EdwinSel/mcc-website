"use client";

import { useRef } from "react";

const institutions = [
  {
    name: "School of Continuing Education",
    description: "Lifelong learning programmes, certificate courses and skill development initiatives.",
    bg: "from-[#2d1a3a] to-[#4a2060]",
    abbr: "SCE",
  },
  {
    name: "MCC–MRF Innovation Park",
    description: "Fostering entrepreneurship, start-ups and industry-academia collaboration.",
    bg: "from-[#1a2d3a] to-[#204060]",
    abbr: "MRFIP",
  },
  {
    name: "MCC–Boyd Tandon Business School",
    description: "Shaping future business leaders with globally benchmarked management education.",
    bg: "from-[#1a3a2d] to-[#204040]",
    abbr: "BTBS",
  },
  {
    name: "Placement & Alumni Relations",
    description: "A robust network connecting students with 5000+ alumni across 40+ countries.",
    bg: "from-[#3a2d1a] to-[#604020]",
    abbr: "P&A",
  },
  {
    name: "Centre for Distance Education",
    description: "Accredited distance learning programmes making quality education accessible.",
    bg: "from-[#3a1a2d] to-[#601a40]",
    abbr: "CDE",
  },
  {
    name: "Language Centre",
    description: "Excellence in languages including French, German, Tamil, Sanskrit and more.",
    bg: "from-[#1a3a3a] to-[#204848]",
    abbr: "LC",
  },
];

export default function Institutions() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -360 : 360,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-white py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="font-cormorant text-maroon text-3xl lg:text-4xl font-semibold text-center sm:text-left">
              Institutions
            </h2>
            <div className="mt-2.5 flex items-center gap-3">
              <div className="w-10 h-[2px] bg-gold" />
              <div className="h-px w-32 bg-border" />
            </div>
            <p className="font-cormorant text-[#888] text-lg mt-2 italic">
              Centres of learning and innovation within MCC
            </p>
          </div>
          <div className="hidden sm:flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 border border-border flex items-center justify-center text-[#888] hover:border-maroon hover:text-maroon transition-colors"
              aria-label="Scroll left"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 border border-border flex items-center justify-center text-[#888] hover:border-maroon hover:text-maroon transition-colors"
              aria-label="Scroll right"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Scrollable row */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-4 scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {institutions.map((inst) => (
            <a
              key={inst.name}
              href="#"
              className="group flex-shrink-0 w-72 lg:w-80 cursor-pointer"
            >
              {/* Card image area */}
              <div
                className={`relative w-full h-52 bg-gradient-to-br ${inst.bg} overflow-hidden`}
              >
                {/* Decorative pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 w-24 h-24 border border-white rounded-full" />
                  <div className="absolute top-8 right-8 w-16 h-16 border border-white rounded-full" />
                  <div className="absolute bottom-4 left-4 w-20 h-20 border border-white" />
                </div>
                {/* Abbreviation watermark */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-cormorant text-white/10 font-bold select-none"
                    style={{ fontSize: "clamp(3rem, 8vw, 5rem)" }}>
                    {inst.abbr}
                  </span>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>

              {/* Card label strip */}
              <div className="bg-maroon group-hover:bg-[#5c1e2d] transition-colors duration-300 px-5 py-4">
                <h3 className="font-cormorant text-white text-[18px] font-medium leading-snug">
                  {inst.name}
                </h3>
                <p className="font-cormorant text-white/60 text-[14px] mt-1 leading-snug">
                  {inst.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
