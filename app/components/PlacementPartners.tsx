import Image from "next/image";

const row1 = Array.from({ length: 15 }, (_, i) => `/images/Placement/${i + 1}.png`);
const row2 = Array.from({ length: 14 }, (_, i) => `/images/Placement/${i + 16}.png`);

function MarqueeRow({ images, speed }: { images: string[]; speed: string }) {
  const doubled = [...images, ...images];
  return (
    <div className="overflow-hidden">
      <div
        className="flex gap-4"
        style={{ animation: `marquee ${speed} linear infinite` }}
      >
        {doubled.map((src, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-36 h-20 border border-border bg-white flex items-center justify-center p-3 hover:border-gold/50 hover:shadow-sm transition-all duration-300 group"
          >
            <Image
              src={src}
              alt={`Placement partner ${(i % images.length) + 1}`}
              width={120}
              height={56}
              className="object-contain w-full h-full grayscale group-hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PlacementPartners() {
  return (
    <section className="bg-white py-16 lg:py-20 border-t border-border">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="font-dm text-gold text-[11px] tracking-[0.25em] uppercase mb-3">
            Careers &amp; Industry Connect
          </p>
          <h2 className="font-cormorant text-maroon text-3xl lg:text-4xl font-semibold">
            Placement Partners
          </h2>
          <div className="mt-3 flex items-center justify-center gap-3">
            <div className="w-16 h-px bg-border" />
            <div className="w-8 h-[2px] bg-gold" />
            <div className="w-16 h-px bg-border" />
          </div>
        </div>

        {/* Marquee rows */}
        <div className="relative space-y-4">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          <MarqueeRow images={row1} speed="35s" />
          <MarqueeRow images={row2} speed="28s" />
        </div>
      </div>
    </section>
  );
}
