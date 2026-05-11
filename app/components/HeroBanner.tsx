"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const slides = [
  {
    src: "/images/banner/1.jpg",
    alt: "Madras Christian College Campus",
  },
  {
    src: "/images/banner/2.jpg",
    alt: "MCC Academic Building",
  },
  {
    src: "/images/banner/3.jpg",
    alt: "MCC Campus Life",
  },
];

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (transitioning || index === current) return;
      setTransitioning(true);
      setTimeout(() => {
        setCurrent(index);
        setVisible(index);
        setTransitioning(false);
      }, 500);
    },
    [current, transitioning]
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length);
  }, [current, goTo]);

  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <section className="relative w-full overflow-hidden bg-dark" style={{ height: "75vh", minHeight: "500px", maxHeight: "700px" }}>
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{ opacity: i === visible ? (transitioning ? 0 : 1) : 0 }}
          aria-hidden={i !== current}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover object-center"
            priority={i === 0}
          />
        </div>
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/65 pointer-events-none" />

      {/* Hero text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pointer-events-none">
        <p
          className="font-cormorant italic text-gold leading-none mb-5"
          style={{ fontSize: "clamp(3rem, 10vw, 7rem)" }}
        >
          In Hoc Signo
        </p>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-px bg-gold/70" />
          <div className="w-1.5 h-1.5 bg-gold rounded-full" />
          <div className="w-16 h-px bg-gold/70" />
        </div>
        <h1 className="font-cormorant text-white font-light tracking-widest text-xl sm:text-2xl lg:text-3xl uppercase">
          Madras Christian College
        </h1>
        <p className="font-dm text-white/70 text-xs sm:text-sm mt-3 tracking-[0.25em] uppercase">
          Established 1837 &nbsp;·&nbsp; Chennai, India
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-3 pointer-events-auto">
          <a
            href="#"
            className="font-dm bg-maroon text-white text-xs px-8 py-3.5 hover:bg-[#5c1e2d] transition-colors duration-200 tracking-[0.15em] uppercase"
          >
            Apply Now — 2026
          </a>
          <a
            href="#"
            className="font-dm border border-white/60 text-white text-xs px-8 py-3.5 hover:bg-white/10 transition-colors duration-200 tracking-[0.15em] uppercase"
          >
            Explore Campus
          </a>
        </div>
      </div>

      {/* Prev arrow */}
      <button
        onClick={prev}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white/90 transition-colors duration-200 p-3 group"
        aria-label="Previous slide"
      >
        <svg
          className="w-7 h-7 lg:w-9 lg:h-9"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next arrow */}
      <button
        onClick={next}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white/90 transition-colors duration-200 p-3"
        aria-label="Next slide"
      >
        <svg
          className="w-7 h-7 lg:w-9 lg:h-9"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dot / line indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
            className={`transition-all duration-400 rounded-full ${
              i === current
                ? "w-8 h-[2px] bg-gold"
                : "w-2 h-[2px] bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
