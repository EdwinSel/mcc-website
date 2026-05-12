"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";

const sidebarLinks = [
  { label: "MCC Association", href: "/about/administration/mcc-association", active: false },
  { label: "Governing Body", href: "/about/administration/governing-body", active: true },
  { label: "Board of Directors", href: "/about/administration/board-of-directors", active: false },
  { label: "Senatus", href: "/about/administration/senatus", active: false },
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

type Member = { name: string; role?: string; placeholder?: boolean };

const members: Member[] = [
  { name: "Mr P.C.R. Suresh" },
  { name: "Dr S. Alfred Devaprasad" },
  { name: "Dr Ravi T. Santosham" },
  { name: "Dr A. Mercy Pushpalatha" },
  { name: "Dr K. Sudarkodi", role: "JDCE (Government Nominee)" },
  { name: "Prof. Dr. S. Vincent", role: "Member Secretary, Tamil Nadu State Council for Science & Technology" },
  { name: "Dr R. Venkataramanujam", role: "Staff Nominee" },
  { name: "Dr V. Mahalakshmi", role: "Staff Nominee" },
  { name: "(University Nominee)", placeholder: true },
];

const officeBearers = [
  { role: "Principal & Secretary", name: "Dr P. Wilson" },
  { role: "Bursar", name: "Mr Cyrus Kallupurackal" },
  { role: "Staff Nominee", name: "Dr R. Venkataramanujam" },
];

const HONORIFICS = [
  "Rt Rev Dr", "Prof. Dr.", "Prof Dr", "Dr Mrs", "Rev Dr",
  "Prof", "Dr", "Rev", "Rt", "Mr", "Mrs", "Ms",
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

function AvatarCircle({
  initials,
  size = 44,
  fontSize = 14,
  style,
}: {
  initials: string;
  size?: number;
  fontSize?: number;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
        background: "linear-gradient(135deg, #7B2C3A, #454F46)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style,
      }}
    >
      <span className="font-dm font-bold text-white" style={{ fontSize: `${fontSize}px` }}>
        {initials}
      </span>
    </div>
  );
}

function MemberCard({ member }: { member: Member }) {
  if (member.placeholder) {
    return (
      <div
        style={{
          backgroundColor: "#F3F7FF",
          border: "1px dashed #bbb",
          borderRadius: "6px",
          padding: "18px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "80px",
        }}
      >
        <span
          className="font-cormorant italic text-[#999]"
          style={{ fontSize: "16px" }}
        >
          {member.name}
        </span>
      </div>
    );
  }

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
          background: "linear-gradient(135deg, #7B2C3A, #454F46)",
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
        <p
          className="font-cormorant"
          style={{ fontSize: "17px", fontWeight: 600, color: "#1a1a1a", lineHeight: 1.3 }}
        >
          {member.name}
        </p>
        {member.role && (
          <p
            className="font-dm italic text-[#888]"
            style={{ fontSize: "12px", marginTop: "3px", lineHeight: 1.4 }}
          >
            {member.role}
          </p>
        )}
      </div>
    </div>
  );
}

function OfficeBearerCard({ role, name }: { role: string; name: string }) {
  const initials = getInitials(name);
  return (
    <div
      style={{
        flex: 1,
        backgroundColor: "white",
        border: "1px solid #dfdfdf",
        borderTop: "4px solid #7B2C3A",
        borderRadius: "8px",
        padding: "28px 24px",
        textAlign: "center",
        boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.borderTop = "4px solid #D1B05D";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.borderTop = "4px solid #7B2C3A";
      }}
    >
      <AvatarCircle initials={initials} size={64} fontSize={18} style={{ margin: "0 auto 16px" }} />
      <span
        className="font-dm"
        style={{
          display: "inline-block",
          backgroundColor: "#F3F7FF",
          color: "#7B2C3A",
          fontSize: "11px",
          textTransform: "uppercase",
          letterSpacing: "1px",
          padding: "4px 12px",
          borderRadius: "20px",
          marginBottom: "10px",
        }}
      >
        {role}
      </span>
      <p
        className="font-cormorant"
        style={{ fontSize: "20px", fontWeight: 700, color: "#1a1a1a" }}
      >
        {name}
      </p>
    </div>
  );
}

export default function GoverningBodyPage() {
  return (
    <>
      <Navbar />

      {/* Section 1: Hero Banner */}
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
              <li>
                <Link href="/" className="text-white/60 hover:text-gold transition-colors">Home</Link>
              </li>
              <li className="text-white/40">/</li>
              <li>
                <Link href="#" className="text-white/60 hover:text-gold transition-colors">About Us</Link>
              </li>
              <li className="text-white/40">/</li>
              <li>
                <Link href="#" className="text-white/60 hover:text-gold transition-colors">Administration</Link>
              </li>
              <li className="text-white/40">/</li>
              <li className="text-gold">Governing Body</li>
            </ol>
          </nav>
          <h1
            className="font-cormorant text-white font-light"
            style={{ fontSize: "52px", letterSpacing: "2px" }}
          >
            Governing Body
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
                link.active
                  ? "border-gold text-maroon font-semibold"
                  : "border-transparent text-[#555] hover:text-maroon"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Section 2: Page layout — sidebar + content */}
      <div style={{ backgroundColor: "white" }}>
        <div className="max-w-[1200px] mx-auto px-6 flex gap-8 items-start py-10">

          {/* Sticky sidebar — desktop only */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <div
              className="sticky top-6 bg-white border border-[#dfdfdf] rounded-sm p-6"
              style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
            >
              <p className="font-dm text-maroon text-[12px] font-bold tracking-[0.15em] uppercase mb-4 pb-2 border-b border-[#dfdfdf]">
                Administration
              </p>
              <ul>
                {sidebarLinks.map((link, i) => (
                  <li
                    key={link.label}
                    className={i < sidebarLinks.length - 1 ? "border-b border-[#f0f0f0]" : ""}
                  >
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

            {/* Section 3: Intro */}
            <div style={{ padding: "30px 0 24px" }}>
              <p
                className="font-dm uppercase"
                style={{ fontSize: "11px", letterSpacing: "3px", color: "#D1B05D", marginBottom: "12px" }}
              >
                ADMINISTRATION
              </p>
              <h2
                className="font-cormorant text-maroon"
                style={{ fontSize: "36px", marginBottom: "8px" }}
              >
                Governing Body
              </h2>
              <div style={{ width: "50px", height: "2px", backgroundColor: "#D1B05D", marginBottom: "20px" }} />
              <p
                className="font-cormorant text-[#444444]"
                style={{ fontSize: "18px", lineHeight: "1.9", maxWidth: "680px" }}
              >
                The Governing Body of Madras Christian College comprises distinguished members
                who provide strategic direction and oversight to the institution.
              </p>
            </div>

            {/* Sections 4 + 5: Chairman & Members — blue background */}
            <div style={{ backgroundColor: "#F3F7FF", borderRadius: "8px", padding: "40px 32px" }}>

              {/* Section 4: Chairman Card */}
              <div style={{ maxWidth: "400px", margin: "0 auto 40px" }}>
                <div
                  style={{
                    backgroundColor: "white",
                    border: "1px solid #dfdfdf",
                    borderTop: "4px solid #D1B05D",
                    borderRadius: "8px",
                    padding: "32px",
                    boxShadow: "0 8px 32px rgba(123,44,58,0.12)",
                    textAlign: "center",
                  }}
                >
                  <span
                    className="font-dm font-bold"
                    style={{
                      backgroundColor: "#D1B05D",
                      color: "white",
                      fontSize: "11px",
                      textTransform: "uppercase",
                      letterSpacing: "2px",
                      padding: "6px 20px",
                      borderRadius: "20px",
                      display: "inline-block",
                      marginBottom: "16px",
                    }}
                  >
                    CHAIRMAN
                  </span>
                  <h3
                    className="font-cormorant text-maroon font-bold"
                    style={{ fontSize: "26px", marginBottom: "14px" }}
                  >
                    Mr K.M. Mammen
                  </h3>
                  <div style={{ width: "60px", height: "1px", backgroundColor: "#D1B05D", margin: "0 auto" }} />
                </div>
              </div>

              {/* Section 5: Members Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {members.map((member, i) => (
                  <MemberCard key={i} member={member} />
                ))}
              </div>
            </div>

            {/* Section 6: Office Bearers */}
            <div style={{ padding: "40px 0 60px" }}>
              <div className="flex flex-col sm:flex-row gap-6">
                {officeBearers.map((ob) => (
                  <OfficeBearerCard key={ob.name} role={ob.role} name={ob.name} />
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
