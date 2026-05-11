const news = [
  {
    date: { day: "08", month: "May" },
    tag: "Announcement",
    title: "MCC Ranks in Top 50 NAAC Accredited Institutions Across India",
    excerpt: "The National Assessment and Accreditation Council has placed Madras Christian College among the premier institutions with A++ grade.",
  },
  {
    date: { day: "05", month: "May" },
    tag: "Research",
    title: "Department of Zoology Publishes Landmark Study in Nature Ecology",
    excerpt: "Faculty and research scholars from the Department of Zoology have co-authored a paper in the prestigious Nature journal.",
  },
  {
    date: { day: "02", month: "May" },
    tag: "Placement",
    title: "Record 94% Placement for Class of 2025 — Over 180 Companies Recruited",
    excerpt: "The Placement Cell reports the highest-ever placement rate for the graduating batch, with top firms from IT, Finance and Research sectors.",
  },
  {
    date: { day: "28", month: "Apr" },
    tag: "Award",
    title: "MCC Receives the Best Green Campus Award at National Education Summit",
    excerpt: "The college was recognised for its sustainable practices, biodiversity initiatives and solar energy adoption across the 180-acre campus.",
  },
];

const events = [
  {
    date: { day: "15", month: "May" },
    tag: "Cultural",
    title: "Epsilon — Annual Cultural Fest 2026",
    venue: "MCC Open Air Theatre",
    time: "9:00 AM onwards",
  },
  {
    date: { day: "20", month: "May" },
    tag: "Academic",
    title: "International Symposium on Climate Science & Biodiversity",
    venue: "Ewart Hall, MCC",
    time: "10:00 AM",
  },
  {
    date: { day: "22", month: "May" },
    tag: "Sports",
    title: "MCC Inter-Collegiate Athletics Championship",
    venue: "MCC Sports Complex",
    time: "8:00 AM",
  },
  {
    date: { day: "01", month: "Jun" },
    tag: "Admission",
    title: "Open Day — Campus Tours & Faculty Interaction 2026",
    venue: "Administrative Block",
    time: "9:00 AM – 4:00 PM",
  },
];

const tagColor: Record<string, string> = {
  Announcement: "bg-[#f0eaff] text-[#6b21a8]",
  Research: "bg-[#e0f2fe] text-[#0369a1]",
  Placement: "bg-[#dcfce7] text-[#15803d]",
  Award: "bg-[#fef9c3] text-[#854d0e]",
  Cultural: "bg-[#fce7f3] text-[#9d174d]",
  Academic: "bg-[#e0f2fe] text-[#0369a1]",
  Sports: "bg-[#dcfce7] text-[#15803d]",
  Admission: "bg-[#fff7ed] text-[#9a3412]",
};

export default function NewsEvents() {
  return (
    <section className="bg-offwhite py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* News Column */}
          <div>
            <div className="mb-8">
              <h2 className="font-cormorant text-maroon text-3xl lg:text-4xl font-semibold">
                News &amp; Updates
              </h2>
              <div className="mt-2 flex items-center gap-3">
                <div className="w-10 h-[2px] bg-gold" />
                <div className="h-[1px] flex-1 bg-border" />
              </div>
            </div>

            <div className="space-y-1">
              {news.map((item, i) => (
                <a
                  key={i}
                  href="#"
                  className="group flex gap-4 p-4 border border-transparent hover:border-border hover:bg-white transition-all duration-200 cursor-pointer"
                >
                  {/* Date box */}
                  <div className="flex-shrink-0 w-14 h-14 bg-maroon flex flex-col items-center justify-center text-white">
                    <span className="font-dm font-bold text-lg leading-none">{item.date.day}</span>
                    <span className="font-cormorant text-[11px] tracking-wide mt-0.5 uppercase opacity-80">
                      {item.date.month}
                    </span>
                  </div>

                  <div className="min-w-0">
                    <span
                      className={`inline-block font-dm text-[10px] font-semibold px-2 py-0.5 rounded-sm mb-2 tracking-wide ${tagColor[item.tag] || "bg-gray-100 text-gray-600"}`}
                    >
                      {item.tag}
                    </span>
                    <h4 className="font-cormorant text-darktext text-[17px] leading-snug font-medium group-hover:text-maroon transition-colors line-clamp-2">
                      {item.title}
                    </h4>
                    <p className="font-cormorant text-[#666] text-[15px] mt-1 leading-snug line-clamp-2 hidden sm:block">
                      {item.excerpt}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 font-dm text-[11px] text-maroon tracking-[0.15em] uppercase mt-6 hover:gap-3 transition-all"
            >
              View All News
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Events Column */}
          <div>
            <div className="mb-8">
              <h2 className="font-cormorant text-maroon text-3xl lg:text-4xl font-semibold">
                Upcoming Events
              </h2>
              <div className="mt-2 flex items-center gap-3">
                <div className="w-10 h-[2px] bg-gold" />
                <div className="h-[1px] flex-1 bg-border" />
              </div>
            </div>

            <div className="space-y-3">
              {events.map((event, i) => (
                <a
                  key={i}
                  href="#"
                  className="group flex gap-4 p-4 border border-border bg-white hover:border-gold/40 hover:shadow-sm transition-all duration-200 cursor-pointer"
                >
                  {/* Date box */}
                  <div className="flex-shrink-0 w-14 h-14 border border-maroon flex flex-col items-center justify-center">
                    <span className="font-dm font-bold text-maroon text-lg leading-none">{event.date.day}</span>
                    <span className="font-cormorant text-maroon text-[11px] tracking-wide mt-0.5 uppercase opacity-70">
                      {event.date.month}
                    </span>
                  </div>

                  <div className="min-w-0">
                    <span
                      className={`inline-block font-dm text-[10px] font-semibold px-2 py-0.5 rounded-sm mb-2 tracking-wide ${tagColor[event.tag] || "bg-gray-100 text-gray-600"}`}
                    >
                      {event.tag}
                    </span>
                    <h4 className="font-cormorant text-darktext text-[17px] leading-snug font-medium group-hover:text-maroon transition-colors">
                      {event.title}
                    </h4>
                    <div className="flex flex-wrap gap-x-4 gap-y-0.5 mt-1.5">
                      <span className="font-dm text-[11px] text-[#888] flex items-center gap-1">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {event.venue}
                      </span>
                      <span className="font-dm text-[11px] text-[#888] flex items-center gap-1">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {event.time}
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 font-dm text-[11px] text-maroon tracking-[0.15em] uppercase mt-6 hover:gap-3 transition-all"
            >
              View All Events
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
