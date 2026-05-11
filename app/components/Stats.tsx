import Image from "next/image";

const stats = [
  {
    number: "7,000+",
    label: "Students",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    number: "348",
    label: "Faculty Members",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ),
  },
  {
    number: "50+",
    label: "Global Partners",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    number: "70+",
    label: "Programmes",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
];

export default function Stats() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/sats-section-bg.jpg"
          alt="MCC Campus aerial view"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-dark/88" />
      </div>

      <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="font-dm text-gold text-[11px] tracking-[0.25em] uppercase mb-3">
            By The Numbers
          </p>
          <h2 className="font-cormorant text-white text-3xl lg:text-4xl font-light">
            A Legacy of Excellence Since 1837
          </h2>
        </div>

        {/* Divider lines via CSS grid — each cell gets a right border except the last */}
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-gold/20">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center py-10 px-6 text-center"
            >
              <div className="text-white/30 mb-5">{stat.icon}</div>
              <p
                className="font-dm text-white font-bold"
                style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)" }}
              >
                {stat.number}
              </p>
              <div className="w-8 h-px bg-gold/50 my-3" />
              <p className="font-cormorant text-white/60 text-lg tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
