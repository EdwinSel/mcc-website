"use client";

import { useRef } from "react";

const institutions = [
  { name: "Institute for Advance Christian Studies",           abbr: "IACS",  bg: "from-[#2d1a3a] to-[#4a2060]" },
  { name: "Institute for Administrative Service Coaching",     abbr: "IASC",  bg: "from-[#1a2d3a] to-[#204060]" },
  { name: "Dr. Devanesen Centre for Human Resource Development", abbr: "DCHRD", bg: "from-[#1a3a2d] to-[#204040]" },
  { name: "Centre for Peace Studies",                          abbr: "CPS",   bg: "from-[#3a2d1a] to-[#604020]" },
  { name: "Centre for Women's Studies",                        abbr: "CWS",   bg: "from-[#3a1a2d] to-[#601a40]" },
  { name: "School of Continuing Education",                    abbr: "SCE",   bg: "from-[#1a3a3a] to-[#204848]" },
  { name: "Entrepreneurship Development Cell",                 abbr: "EDC",   bg: "from-[#2d3a1a] to-[#405020]" },
  { name: "Ideation Club",                                     abbr: "IC",    bg: "from-[#3a1a1a] to-[#602020]" },
  { name: "MCC Institution Innovation Council",                abbr: "IIC",   bg: "from-[#1a1a3a] to-[#202060]" },
  { name: "Design Studio",                                     abbr: "DS",    bg: "from-[#3a2a1a] to-[#604830]" },
  { name: "Corporate Social Responsibility",                   abbr: "CSR",   bg: "from-[#1a3a1a] to-[#205020]" },
  { name: "IRINS",                                             abbr: "IRINS", bg: "from-[#2a1a3a] to-[#481060]" },
];

// Card = 280px wide, gap = 16px
// Desktop (lg): 4 cards  → 4×280 + 3×16 = 1168px
// Tablet  (md): 2 cards  → 2×280 + 1×16 =  576px
// Mobile       : 1 card  →          280px
const CARD_W = 280;
const GAP    = 16;
const SCROLL_BY = CARD_W + GAP; // 296px — move exactly one card

export default function Institutions() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: dir === "left" ? -SCROLL_BY : SCROLL_BY, behavior: "smooth" });
  };

  return (
    <section className="bg-white py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-screen-xl mx-auto">

        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="font-cormorant text-maroon text-3xl lg:text-4xl font-semibold">
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

          {/* Arrows */}
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 border border-border flex items-center justify-center text-[#888] hover:border-maroon hover:text-maroon transition-colors"
              aria-label="Previous"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 border border-border flex items-center justify-center text-[#888] hover:border-maroon hover:text-maroon transition-colors"
              aria-label="Next"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Clip window — exactly N cards wide, no partial cards leak out */}
        <div className="overflow-hidden w-[280px] md:w-[576px] lg:w-[1168px]">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none", scrollBehavior: "smooth" }}
          >
            {institutions.map((inst) => (
              <a
                key={inst.name}
                href="#"
                className="group flex-shrink-0 w-[280px] h-[320px] snap-start cursor-pointer flex flex-col"
              >
                {/* Upper gradient area — fixed height */}
                <div className={`relative flex-1 bg-gradient-to-br ${inst.bg} overflow-hidden`}>
                  {/* Decorative rings */}
                  <div className="absolute top-4 right-4 w-20 h-20 border border-white/10 rounded-full" />
                  <div className="absolute top-8 right-8 w-12 h-12 border border-white/10 rounded-full" />
                  <div className="absolute bottom-4 left-4 w-16 h-16 border border-white/10" />
                  {/* Abbreviation watermark */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-cormorant text-white/10 font-bold text-5xl select-none">
                      {inst.abbr}
                    </span>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>

                {/* Label strip — fixed height 80px */}
                <div className="h-20 bg-maroon group-hover:bg-[#5c1e2d] transition-colors duration-300 px-4 flex items-center">
                  <h3 className="font-cormorant text-white text-[16px] font-medium leading-snug line-clamp-2">
                    {inst.name}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
