const boxes = [
  {
    bg: "#7B2C3A",
    iconBg: "#5c1e2d",
    title: "ADMISSION",
    description: "Apply for UG & PG programmes 2026–27",
    href: "#",
    icon: (
      <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="#D1B05D" strokeWidth={1.3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    bg: "#454F46",
    iconBg: "#363c37",
    title: "ACADEMICS",
    description: "Explore 70+ programmes across all disciplines",
    href: "#",
    icon: (
      <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="#D1B05D" strokeWidth={1.3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
  {
    bg: "#640000",
    iconBg: "#4a0000",
    title: "EXAMINATIONS",
    description: "Hall tickets, timetables, results & notifications",
    href: "#",
    icon: (
      <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="#D1B05D" strokeWidth={1.3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

export default function QuickLinks() {
  return (
    <div className="flex flex-col md:flex-row w-full" style={{ minHeight: "110px" }}>
      {boxes.map((box, i) => (
        <a
          key={box.title}
          href={box.href}
          className="group flex-1 flex items-stretch overflow-hidden hover:brightness-110 transition-all duration-300 cursor-pointer"
          style={{ backgroundColor: box.bg }}
        >
          {/* Icon panel — diagonal right edge */}
          <div
            className="flex-shrink-0 w-28 flex items-center justify-center self-stretch"
            style={{
              backgroundColor: box.iconBg,
              clipPath: "polygon(0 0, 100% 0, 74% 100%, 0 100%)",
            }}
          >
            <div className="pr-7 group-hover:scale-110 transition-transform duration-300">
              {box.icon}
            </div>
          </div>

          {/* Text panel */}
          <div className="flex-1 flex flex-col justify-center px-6 py-4">
            <h3 className="font-dm text-white font-bold text-[12px] tracking-[0.18em] uppercase mb-1">
              {box.title}
            </h3>
            <p
              className="font-cormorant text-[15px] leading-snug"
              style={{ color: i === 0 ? "#F3F7FF" : "#dfdfdf" }}
            >
              {box.description}
            </p>
          </div>

          {/* Thin right divider (not on last box) */}
          {i < boxes.length - 1 && (
            <div className="w-px self-stretch" style={{ backgroundColor: "rgba(255,255,255,0.1)" }} />
          )}
        </a>
      ))}
    </div>
  );
}
