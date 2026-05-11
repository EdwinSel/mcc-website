import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import Link from "next/link";

const sidebarLinks = [
  { label: "Emblem & Motto", href: "/about/emblem-motto", active: true },
  { label: "Mission & Vision", href: "/about/mission-vision" },
  { label: "History & Milestones", href: "/about/history-and-milestones" },
  { label: "Corporate Social Responsibility", href: "/about/csr" },
  { label: "Institutions", href: "/about/institutions" },
];


export default function EmblemMottoPage() {
  return (
    <>
      <Navbar />

      {/* ── Section 1: Hero Banner ── */}
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
          {/* Breadcrumb */}
          <nav className="mb-4">
            <ol className="flex items-center gap-2 font-dm text-[12px] tracking-wide">
              <li>
                <Link href="/" className="text-white/60 hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-white/40">/</li>
              <li>
                <Link href="#" className="text-white/60 hover:text-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li className="text-white/40">/</li>
              <li className="text-gold">Emblem &amp; Motto</li>
            </ol>
          </nav>

          {/* Page title */}
          <h1
            className="font-cormorant text-white font-light"
            style={{ fontSize: "52px", letterSpacing: "2px" }}
          >
            Emblem &amp; Motto
          </h1>
        </div>

        {/* Bottom gold line */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{ height: "2px", backgroundColor: "#D1B05D" }}
        />
      </section>

      {/* ── Mobile sidebar tabs ── */}
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

      {/* ── Section 2: Two-column content + sidebar ── */}
      <section className="bg-offwhite py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex gap-8">

            {/* Sticky sidebar (desktop only) */}
            <aside className="hidden lg:block w-56 flex-shrink-0">
              <div
                className="sticky top-6 bg-white border border-[#dfdfdf] rounded-sm p-6"
                style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
              >
                <p className="font-dm text-maroon text-[12px] font-bold tracking-[0.15em] uppercase mb-4 pb-2 border-b border-[#dfdfdf]">
                  About Us
                </p>
                <ul>
                  {sidebarLinks.map((link, i) => (
                    <li
                      key={link.label}
                      className={`${i < sidebarLinks.length - 1 ? "border-b border-[#f0f0f0]" : ""}`}
                    >
                      <Link
                        href={link.href}
                        className={`block font-cormorant text-[16px] py-2.5 pl-3 transition-all duration-150 border-l-[3px] ${
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

            {/* Main content area */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-col md:flex-row gap-10 lg:gap-16">

                {/* Left: Emblem image (sticky) */}
                <div className="md:w-[300px] flex-shrink-0">
                  <div className="sticky top-6">
                    {/* Image card */}
                    <div
                      className="bg-white p-6 rounded-sm"
                      style={{
                        border: "1px solid #dfdfdf",
                        outline: "3px solid #D1B05D",
                        outlineOffset: "3px",
                        boxShadow: "0 8px 32px rgba(123,44,58,0.12)",
                        maxWidth: "320px",
                        margin: "0 auto",
                      }}
                    >
                      <Image
                        src="/images/Emblem.jpeg"
                        alt="MCC Emblem"
                        width={280}
                        height={280}
                        className="object-contain w-full"
                      />
                    </div>

                    {/* Gold divider */}
                    <div className="flex items-center gap-3 mt-5 mb-3 max-w-[320px] mx-auto">
                      <div className="flex-1 h-px bg-[#dfdfdf]" />
                      <div className="w-8 h-[2px] bg-gold" />
                      <div className="flex-1 h-px bg-[#dfdfdf]" />
                    </div>

                    {/* Caption */}
                    <p
                      className="font-cormorant italic text-maroon text-center"
                      style={{ fontSize: "15px" }}
                    >
                      The Emblem of Madras Christian College
                    </p>
                  </div>
                </div>

                {/* Right: Text content */}
                <div className="flex-1 min-w-0">

                  {/* Block 1 — The Emblem */}
                  <div className="mb-12">
                    <p
                      className="font-dm text-gold uppercase mb-3"
                      style={{ fontSize: "11px", letterSpacing: "3px" }}
                    >
                      The Emblem
                    </p>
                    <h2
                      className="font-cormorant text-maroon font-semibold leading-tight"
                      style={{ fontSize: "36px" }}
                    >
                      Symbol of Our Philosophy
                    </h2>
                    <div
                      className="mt-3 mb-6"
                      style={{ width: "40px", height: "2px", backgroundColor: "#D1B05D" }}
                    />
                    <p
                      className="font-cormorant text-[#333333]"
                      style={{ fontSize: "18px", lineHeight: "1.9" }}
                    >
                      The emblem of the college is a graphic representation of its philosophy.
                      The hand at the top of the emblem has three fingers raised in blessing.
                      The anchor signifies firmness, something on which to rely in times of
                      turbulence. The upper part of the anchor takes the form of a cross.
                    </p>
                  </div>

                  {/* Block 2 — The Motto */}
                  <div>
                    <p
                      className="font-dm text-gold uppercase mb-3"
                      style={{ fontSize: "11px", letterSpacing: "3px" }}
                    >
                      The Motto
                    </p>
                    <h2
                      className="font-cormorant text-maroon italic font-semibold leading-tight"
                      style={{ fontSize: "36px" }}
                    >
                      In Hoc Signo
                    </h2>
                    <div
                      className="mt-3 mb-6"
                      style={{ width: "40px", height: "2px", backgroundColor: "#D1B05D" }}
                    />
                    <p
                      className="font-cormorant text-[#333333]"
                      style={{ fontSize: "18px", lineHeight: "1.9" }}
                    >
                      The Latin motto, &lsquo;In hoc signo&rsquo;, is traced to an important event
                      in the life of Constantine the Great (AD 274–337), the first Christian
                      emperor of Rome. Before an important battle, he saw a cross shining in
                      the sky, and the words: &lsquo;in hoc signo vinces…&rsquo; with this on your
                      banner, you will win. The college centres its very existence on this promise.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Section 3: Featured Quote ── */}
      <section
        className="relative w-full overflow-hidden"
        style={{ backgroundColor: "#454F46", padding: "80px 24px" }}
      >
        {/* Opening quote mark */}
        <span
          className="font-cormorant text-gold absolute select-none pointer-events-none"
          style={{
            fontSize: "160px",
            lineHeight: 1,
            top: "20px",
            left: "40px",
            opacity: 0.25,
          }}
          aria-hidden
        >
          &ldquo;
        </span>

        {/* Closing quote mark */}
        <span
          className="font-cormorant text-gold absolute select-none pointer-events-none"
          style={{
            fontSize: "160px",
            lineHeight: 1,
            bottom: "0px",
            right: "40px",
            opacity: 0.25,
          }}
          aria-hidden
        >
          &rdquo;
        </span>

        <div className="relative max-w-3xl mx-auto text-center">
          <p
            className="font-cormorant italic text-white"
            style={{ fontSize: "32px", lineHeight: "1.6" }}
          >
            They are slaves who dare not be<br />
            in the right with two or three
          </p>
          <p
            className="font-dm text-gold mt-6 tracking-[2px]"
            style={{ fontSize: "14px" }}
          >
            — James Russell Lowell
          </p>
        </div>
      </section>

      {/* ── Section 4: Poem ── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-[800px] mx-auto">

          {/* Header */}
          <div className="text-center mb-10">
            <p
              className="font-dm text-gold uppercase mb-3"
              style={{ fontSize: "13px", letterSpacing: "2px" }}
            >
              Excerpt from
            </p>
            <h3
              className="font-cormorant text-maroon font-bold"
              style={{ fontSize: "28px" }}
            >
              STANZAS ON FREEDOM
            </h3>
            <p
              className="font-cormorant italic mt-2"
              style={{ fontSize: "20px", color: "#454F46", marginBottom: "32px" }}
            >
              James Russell Lowell
            </p>
            <div
              className="mx-auto"
              style={{ width: "60px", height: "2px", backgroundColor: "#D1B05D" }}
            />
          </div>

          {/* Poem card — continuous flow, no stanza breaks */}
          <div
            className="rounded-tr-sm rounded-br-sm"
            style={{
              backgroundColor: "#F3F7FF",
              borderLeft: "4px solid #D1B05D",
              padding: "40px 40px 40px 44px",
            }}
          >
            <p
              className="font-cormorant text-[#333333]"
              style={{ fontSize: "17px", lineHeight: "2" }}
            >
              Man! Whose boast it is that ye come of fathers brave and free,<br />
              If there breathe on earth a slave,<br />
              Are ye truly free and brave?<br />
              If ye do not feel the chain,<br />
              When it works a brother&apos;s pain,<br />
              Are ye not base slaves indeed, Slaves unworthy to be freed?<br />
              Women! Who shall one day bear<br />
              Sons to breathe New England (Indian) air,<br />
              if ye hear, without blush,<br />
              Deeds to make the roused blood rush<br />
              like red lava through your veins,<br />
              For your sisters now in chains– Answer!<br />
              Are ye fit to be Mother of the brave and free?<br />
              Is true freedom but to break<br />
              Fetters for our own dear sake,<br />
              And, with leathern hearts, forget. That we owe mankind a debt?<br />
              No! True freedom is to share<br />
              All the chains our brothers wear,<br />
              And, with heart and hand, to be<br />
              Earnest to make others free!<br />
              They are slaves who fear to speak<br />
              For the fallen and the weak;<br />
              They are slaves who will not choose<br />
              Hatred, scoffing, and abuse,<br />
              Rather than in silence shrink<br />
              From the truth they needs must think;
            </p>

            {/* Final two lines — bold maroon */}
            <p
              className="font-cormorant text-maroon font-bold"
              style={{ fontSize: "19px", lineHeight: "2" }}
            >
              They are slaves who dare not be<br />
              In the right with two or three.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
