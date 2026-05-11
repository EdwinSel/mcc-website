const institutionLinks = [
  "School of Continuing Education",
  "MCC–MRF Innovation Park",
  "MCC–Boyd Tandon Business School",
  "Placement & Alumni Relations",
  "Centre for Distance Education",
  "Language Centre",
];

const adminLinks = [
  "Administration",
  "Governing Body",
  "Finance Committee",
  "Academic Council",
  "IQAC Reports",
  "RTI Disclosures",
];

const regulationsLinks = [
  "Admission Policy",
  "Fee Structure",
  "Examination Rules",
  "Attendance Policy",
  "Anti-Ragging Policy",
  "Student Grievance",
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1 — Contact */}
          <div className="lg:col-span-1">
            <h3 className="font-cormorant text-white text-2xl font-semibold mb-1">
              Madras Christian College
            </h3>
            <p className="font-dm text-gold text-[10px] tracking-[0.2em] uppercase mb-5">
              Autonomous · Est. 1837
            </p>

            <div className="space-y-3 font-dm text-[13px] text-white/60">
              <div className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="leading-relaxed">
                  Madras Christian College, East Tambaram,<br />Chennai – 600 059, Tamil Nadu, India
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+91 44 2239 3441</span>
              </div>
              <div className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@mcc.edu.in</span>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex gap-3 mt-6">
              {["facebook", "twitter", "youtube", "linkedin"].map((social) => (
                <a
                  key={social}
                  href="#"
                  aria-label={social}
                  className="w-8 h-8 border border-white/20 flex items-center justify-center text-gold/70 hover:text-gold hover:border-gold/50 transition-all duration-200"
                >
                  {social === "facebook" && (
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  )}
                  {social === "twitter" && (
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  )}
                  {social === "youtube" && (
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
                    </svg>
                  )}
                  {social === "linkedin" && (
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Institutions */}
          <div>
            <h4 className="font-cormorant text-white text-xl font-medium mb-5 pb-2 border-b border-white/10">
              Institutions
            </h4>
            <ul className="space-y-2.5">
              {institutionLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-dm text-[13px] text-white/55 hover:text-gold transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-px bg-gold/0 group-hover:bg-gold/70 group-hover:w-3 transition-all duration-200" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Administration */}
          <div>
            <h4 className="font-cormorant text-white text-xl font-medium mb-5 pb-2 border-b border-white/10">
              Administration
            </h4>
            <ul className="space-y-2.5">
              {adminLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-dm text-[13px] text-white/55 hover:text-gold transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-px bg-gold/0 group-hover:bg-gold/70 group-hover:w-3 transition-all duration-200" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Regulations */}
          <div>
            <h4 className="font-cormorant text-white text-xl font-medium mb-5 pb-2 border-b border-white/10">
              Regulations
            </h4>
            <ul className="space-y-2.5">
              {regulationsLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-dm text-[13px] text-white/55 hover:text-gold transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-px bg-gold/0 group-hover:bg-gold/70 group-hover:w-3 transition-all duration-200" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            {/* NAAC badge */}
            <div className="mt-8 border border-gold/30 p-3 inline-block">
              <p className="font-dm text-gold text-[10px] tracking-widest uppercase">NAAC Accredited</p>
              <p className="font-cormorant text-white text-2xl font-bold mt-0.5">A++</p>
              <p className="font-dm text-white/50 text-[10px]">Grade — CGPA 3.61</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gold/20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-dm text-white/40 text-[12px] text-center sm:text-left">
            &copy; 2026 Madras Christian College, Chennai. All Rights Reserved.
          </p>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Use", "Sitemap"].map((item) => (
              <a
                key={item}
                href="#"
                className="font-dm text-white/40 text-[12px] hover:text-gold transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
