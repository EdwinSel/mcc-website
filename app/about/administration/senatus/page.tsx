"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";

const sidebarLinks = [
  { label: "MCC Association", href: "/about/administration/mcc-association", active: false },
  { label: "Governing Body", href: "/about/administration/governing-body", active: false },
  { label: "Board of Directors", href: "/about/administration/board-of-directors", active: false },
  { label: "Senatus", href: "/about/administration/senatus", active: true },
  { label: "Principal", href: "/about/administration/principal", active: false },
  { label: "Bursar", href: "/about/administration/bursar", active: false },
  { label: "Vice Principals", href: "/about/administration/vice-principals", active: false },
  { label: "Deans", href: "/about/administration/deans", active: false },
  { label: "Archives", href: "/about/administration/archives", active: false },
  { label: "SFS Office", href: "/about/administration/sfs-office", active: false },
  { label: "IQAC", href: "/about/administration/iqac", active: false },
  { label: "Principals Office", href: "/about/administration/principals-office", active: false },
  { label: "Bursars Office", href: "/about/administration/bursars-office", active: false },
  { label: "Organogram", href: "/about/administration/organogram", active: false },
];

type Member = { name: string; role?: string };

const members: Member[] = [
  { name: "Dr P. Wilson", role: "Principal & Secretary" },
  { name: "Mr Cyrus Kallupurackal", role: "Bursar" },
  { name: "Dr R. Venkataramanujam", role: "Dean of Humanities" },
  { name: "Dr V. Mahalakshmi", role: "Dean of Sciences" },
  { name: "Dr C. Livingstone", role: "Warden, Selaiyur Hall" },
  { name: "Dr B. Prince Solomon Devadass", role: "Warden, St. Thomas's Hall" },
  { name: "Dr N. Joshua Jayaseelan", role: "Warden, Bishop Heber Hall" },
  { name: "Dr Ananthi Rachel Livingstone", role: "Warden, Martin Hall" },
  { name: "Dr Shirmila", role: "Warden, Margaret Hall" },
  { name: "Dr Ann Thomas", role: "Warden, Barnes Hall" },
  { name: "Dr E. Caroline Victoria", role: "Staff Nominee" },
  { name: "Dr Haans J. Freddy", role: "Staff Nominee" },
  { name: "Mr Christopher Charles", role: "Staff Nominee" },
  { name: "Dr Niren Andrew", role: "Vice-President, College Union Society" },
  { name: "Mr R. M. Ravibharathi", role: "Student Chairman, College Union Society" },
  { name: "Mr N. Vigneshwar", role: "Student Secretary, College Union Society" },
];

const invitees: Member[] = [
  { name: "Dr Huldah Samuel", role: "Dean of Students Affairs" },
  { name: "Dr S. Ravi Shankar", role: "Controller of Examinations" },
  { name: "Dr J. Logamanya Tilak", role: "Director, Council of Wardens" },
  { name: "Dr R. Belinda", role: "Director, Extension Programmes" },
];

const HONORIFICS = [
  "Rt Rev Dr", "Prof. Dr.", "Prof Dr", "Dr Mrs", "Rev Dr",
  "Prof.", "Prof", "Dr.", "Dr", "Rev.", "Rev", "Rt",
  "Mr.", "Mr", "Mrs.", "Mrs", "Ms.", "Ms",
];

function getInitials(fullName: string): string {
  let name = fullName.trim();
  for (const h of HONORIFICS) {
    if (name.startsWith(h + " ")) {
      name = name.slice(h.length + 1).trim();
      break;
    }
  }
  const parts = name.split(/\s+/);
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function MemberCard({ member, accent = "linear-gradient(135deg, #7B2C3A, #454F46)" }: { member: Member; accent?: string }) {
  const initials = getInitials(member.name);
  return (
    <div
      style={{
        backgroundColor: "white",
        border: "1px solid #dfdfdf",
        borderLeft: "3px solid transparent",
        borderRadius: "6px",
        padding: "18px 20px",
        display: "flex",
        alignItems: "center",
        gap: "14px",
        transition: "all 0.3s ease",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.borderLeft = "3px solid #D1B05D";
        el.style.backgroundColor = "#fffdf7";
        el.style.transform = "translateX(4px)";
        const avatar = el.querySelector<HTMLElement>("[data-avatar]");
        if (avatar) avatar.style.boxShadow = "0 4px 16px rgba(123,44,58,0.3)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.borderLeft = "3px solid transparent";
        el.style.backgroundColor = "white";
        el.style.transform = "translateX(0)";
        const avatar = el.querySelector<HTMLElement>("[data-avatar]");
        if (avatar) avatar.style.boxShadow = "none";
      }}
    >
      <div
        data-avatar
        style={{
          width: "44px",
          height: "44px",
          borderRadius: "50%",
          background: accent,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          transition: "box-shadow 0.3s ease",
        }}
      >
        <span className="font-dm font-bold text-white" style={{ fontSize: "14px" }}>
          {initials}
        </span>
      </div>
      <div>
        <p className="font-cormorant" style={{ fontSize: "17px", fontWeight: 600, color: "#1a1a1a", lineHeight: 1.3 }}>
          {member.name}
        </p>
        {member.role && (
          <p className="font-dm italic text-[#888]" style={{ fontSize: "12px", marginTop: "3px", lineHeight: 1.4 }}>
            {member.role}
          </p>
        )}
      </div>
    </div>
  );
}

export default function SenatusPage() {
  return (
    <>
      <Navbar />

      {/* Hero Banner */}
      <section
        className="relative w-full flex flex-col justify-center overflow-hidden"
        style={{
          height: "220px",
          backgroundColor: "#7B2C3A",
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 50%)",
          backgroundSize: "10px 10px",
        }}
      >
        <div className="max-w-[1200px] mx-auto px-6 w-full">
          <nav className="mb-4">
            <ol className="flex items-center gap-2 font-dm text-[12px] tracking-wide">
              <li><Link href="/" className="text-white/60 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-white/40">/</li>
              <li><Link href="#" className="text-white/60 hover:text-gold transition-colors">About Us</Link></li>
              <li className="text-white/40">/</li>
              <li><Link href="#" className="text-white/60 hover:text-gold transition-colors">Administration</Link></li>
              <li className="text-white/40">/</li>
              <li className="text-gold">Senatus</li>
            </ol>
          </nav>
          <h1 className="font-cormorant text-white font-light" style={{ fontSize: "52px", letterSpacing: "2px" }}>
            Senatus
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold" />
      </section>

      {/* Mobile sidebar tabs */}
      <div className="lg:hidden bg-white border-b border-[#dfdfdf] overflow-x-auto">
        <div className="flex whitespace-nowrap px-4">
          {sidebarLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`font-dm text-[12px] px-4 py-3 border-b-2 transition-colors inline-block ${
                link.active ? "border-gold text-maroon font-semibold" : "border-transparent text-[#555] hover:text-maroon"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Page layout */}
      <div style={{ backgroundColor: "white" }}>
        <div className="max-w-[1200px] mx-auto px-6 flex gap-8 items-start py-10">

          {/* Sidebar */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <div className="sticky top-6 bg-white border border-[#dfdfdf] rounded-sm p-6" style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
              <p className="font-dm text-maroon text-[12px] font-bold tracking-[0.15em] uppercase mb-4 pb-2 border-b border-[#dfdfdf]">
                Administration
              </p>
              <ul>
                {sidebarLinks.map((link, i) => (
                  <li key={link.label} className={i < sidebarLinks.length - 1 ? "border-b border-[#f0f0f0]" : ""}>
                    <Link
                      href={link.href}
                      className={`block font-cormorant text-[15px] py-2 pl-3 transition-all duration-150 border-l-[3px] ${
                        link.active
                          ? "border-gold text-maroon font-semibold"
                          : "border-transparent text-[#333] hover:text-maroon hover:border-gold"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">

            {/* Intro */}
            <div style={{ padding: "30px 0 24px" }}>
              <p className="font-dm uppercase" style={{ fontSize: "11px", letterSpacing: "3px", color: "#D1B05D", marginBottom: "12px" }}>
                ADMINISTRATION
              </p>
              <h2 className="font-cormorant text-maroon" style={{ fontSize: "36px", marginBottom: "8px" }}>
                Senatus Members
              </h2>
              <div style={{ width: "50px", height: "2px", backgroundColor: "#D1B05D", marginBottom: "20px" }} />
              <p className="font-cormorant text-[#444444]" style={{ fontSize: "18px", lineHeight: "1.9", maxWidth: "680px" }}>
                The Senatus is the academic governing body of Madras Christian College, comprising
                the Principal, Deans, Wardens, and other key academic members.
              </p>
            </div>

            {/* Members Grid */}
            <div style={{ backgroundColor: "#F3F7FF", borderRadius: "8px", padding: "32px" }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {members.map((member, i) => (
                  <MemberCard key={i} member={member} />
                ))}
              </div>
            </div>

            {/* Invitees */}
            <div style={{ padding: "40px 0 60px" }}>
              <div style={{ marginBottom: "20px" }}>
                <h2 className="font-cormorant text-maroon" style={{ fontSize: "22px" }}>
                  Invitees
                </h2>
                <div style={{ width: "40px", height: "2px", backgroundColor: "#D1B05D", marginTop: "6px" }} />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {invitees.map((member, i) => (
                  <MemberCard
                    key={i}
                    member={member}
                    accent="#454F46"
                  />
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
