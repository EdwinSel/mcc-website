export default function QuickLinks() {
  const links = [
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "ADMISSION",
      description: "Begin your journey at MCC. Apply now for undergraduate and postgraduate programmes for 2026–27.",
      href: "#",
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: "ACADEMICS",
      description: "Explore 70+ programmes across Science, Arts, Humanities, Commerce, and Professional courses.",
      href: "#",
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      title: "EXAMINATIONS",
      description: "Download hall tickets, view timetables, check results and access official exam notifications.",
      href: "#",
    },
  ];

  return (
    <section className="bg-maroon py-10 px-4 sm:px-6">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
        {links.map((link) => (
          <a
            key={link.title}
            href={link.href}
            className="group flex items-start gap-5 bg-dark p-7 lg:p-8 border-l-[3px] border-gold hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-all duration-300 cursor-pointer"
          >
            <span className="text-gold flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300">
              {link.icon}
            </span>
            <div>
              <h3 className="font-dm text-gold font-bold text-[11px] tracking-[0.18em] mb-2.5">
                {link.title}
              </h3>
              <p className="font-cormorant text-white/65 text-[17px] leading-relaxed">
                {link.description}
              </p>
              <span className="inline-flex items-center gap-1.5 font-dm text-[11px] text-gold/70 group-hover:text-gold mt-3 transition-colors tracking-widest uppercase">
                Learn More
                <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
