"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const sidebarLinks = [
  { label: "MCC Association", href: "/about/administration/mcc-association", active: false },
  { label: "Governing Body", href: "/about/administration/governing-body", active: false },
  { label: "Board of Directors", href: "/about/administration/board-of-directors", active: false },
  { label: "Senatus", href: "/about/administration/senatus", active: false },
  { label: "Principal", href: "/about/administration/principal", active: false },
  { label: "Bursar", href: "/about/administration/bursar", active: false },
  { label: "Vice Principals", href: "/about/administration/vice-principals", active: false },
  { label: "Deans", href: "/about/administration/deans", active: false },
  { label: "Archives", href: "/about/administration/archives", active: true },
  { label: "SFS Office", href: "/about/administration/sfs-office", active: false },
  { label: "IQAC", href: "/about/administration/iqac", active: false },
  { label: "Principals Office", href: "/about/administration/principals-office", active: false },
  { label: "Bursars Office", href: "/about/administration/bursars-office", active: false },
  { label: "Organogram", href: "/about/administration/organogram", active: false },
];

function SectionHeading({ title }: { title: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "28px" }}>
      <div
        style={{
          width: "4px",
          height: "36px",
          backgroundColor: "#D1B05D",
          borderRadius: "2px",
          flexShrink: 0,
        }}
      />
      <h2
        className="font-cormorant font-bold"
        style={{ fontSize: "28px", color: "#1a1a1a", margin: 0 }}
      >
        {title}
      </h2>
    </div>
  );
}

function BodyText({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="font-cormorant"
      style={{ fontSize: "17px", color: "#444", lineHeight: "1.95", textAlign: "justify", marginBottom: "20px" }}
    >
      {children}
    </p>
  );
}

function PhotoCard({ src, caption, height = 280 }: { src: string; caption: string; height?: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        flex: 1,
        backgroundColor: "white",
        border: `1px solid ${hovered ? "#D1B05D" : "#dfdfdf"}`,
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ height: `${height}px`, overflow: "hidden", position: "relative" }}>
        <Image
          src={src}
          alt={caption}
          fill
          style={{
            objectFit: "cover",
            transform: hovered ? "scale(1.05)" : "scale(1)",
            transition: "transform 0.3s ease",
          }}
        />
      </div>
      <div style={{ padding: "16px 20px", textAlign: "center" }}>
        <p className="font-cormorant" style={{ fontSize: "16px", color: "#333", fontStyle: "italic" }}>
          {caption}
        </p>
      </div>
    </div>
  );
}

const sopItems = [
  "Faculty, Research Scholars, Students of MCC and from outside can have access to the archives.",
  "Researchers from outside the College have to write to the Principal, Madras Christian College, Tambaram, Chennai, for access. Researchers from outside should submit a bonafide certificate for access and an authorization along with bonafide in case of deputing another research scholar.",
  "Researchers from within the College have to write to the Head, Department of History, Madras Christian College, Tambaram, Chennai, for access.",
  "Once permission is granted, requisitions for the material can be made to the Archive-in-Charge in advance through mail or letter or in person.",
  "Documents should be handled with utmost care. Marking, folding, pinning, stapling or leaning upon the documents should be avoided.",
  "Digitized source materials cannot be copied to any external drive or e-mailed.",
  "Archives-in-Charge reserves the right to deny records that are brittle and confidential.",
  "Use of pencils is preferred over pens in the Research Room.",
  "Use of mobile cameras/digital cameras, scanners, etc. will be strictly prohibited inside Research Room.",
  "Water bottles, beverages and edible items will not be permitted inside the Reading Room.",
];

const feeItems = [
  "Access fee is valid for one year.",
  "No access fee for Researchers from MCC.",
  "Access fee for researchers outside MCC is Rs. 1000/- and Rs.2000/- for Foreigners. The charges are the same in case the request is through mail.",
  "Fees should be paid through DD or Cheque favouring The Bursar, Madras Christian College, Chennai.",
  "The charges for scanning (Rs 10/- per page), printing (Rs 5/- per page) and photocopying (Rs 2/- per page) are excluded from the access fee and is applicable to all the researchers.",
];

export default function ArchivesPage() {
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
              <li className="text-gold">Archives</li>
            </ol>
          </nav>
          <h1 className="font-cormorant text-white font-light" style={{ fontSize: "52px", letterSpacing: "2px" }}>
            Archives
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
      <div>
        <div className="max-w-[1200px] mx-auto px-6 flex gap-8 items-start">

          {/* Sidebar */}
          <aside className="hidden lg:block w-56 flex-shrink-0 py-10">
            <div
              className="sticky top-6 bg-white border border-[#dfdfdf] rounded-sm p-6"
              style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
            >
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

            {/* ── SECTION 3: Intro Header ── */}
            <div style={{ backgroundColor: "white", padding: "40px 0 20px 0" }}>
              <p
                className="font-dm uppercase"
                style={{ fontSize: "11px", letterSpacing: "3px", color: "#D1B05D", marginBottom: "12px" }}
              >
                SPECIAL COLLECTIONS
              </p>
              <h2
                className="font-cormorant"
                style={{ fontSize: "38px", color: "#7B2C3A", marginBottom: "6px" }}
              >
                Madras Christian College
              </h2>
              <h3
                className="font-cormorant"
                style={{ fontSize: "28px", color: "#454F46", fontStyle: "italic", marginBottom: "14px" }}
              >
                Archives and Special Collections
              </h3>
              <div style={{ width: "60px", height: "2px", backgroundColor: "#D1B05D" }} />
            </div>

            {/* ── SECTION 4: Featured Video ── */}
            <div style={{ backgroundColor: "#F3F7FF", borderRadius: "10px", padding: "40px 32px", marginBottom: "40px" }}>
              <h3
                className="font-cormorant"
                style={{ fontSize: "24px", color: "#7B2C3A", marginBottom: "14px" }}
              >
                Dr S Radhakrishnan&apos;s Life Traced Through Archival Records
              </h3>
              <div style={{ width: "50px", height: "2px", backgroundColor: "#D1B05D", marginBottom: "28px" }} />
              <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                <div
                  style={{
                    position: "relative",
                    paddingBottom: "56.25%",
                    height: 0,
                    borderRadius: "8px",
                    overflow: "hidden",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
                  }}
                >
                  <iframe
                    src="https://www.youtube.com/embed/w20kfYcoP5Q"
                    title="Dr S Radhakrishnan's Life Traced Through Archival Records"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      border: "none",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* ── SECTION 5: Historical Photographs ── */}
            <div style={{ backgroundColor: "white", marginBottom: "40px" }}>
              <SectionHeading title="Historical Photographs" />
              <div className="flex flex-col sm:flex-row gap-6">
                <PhotoCard
                  src="/images/Archives/Archive-photo1.jpg"
                  caption="Class Photo"
                />
                <PhotoCard
                  src="/images/Archives/Archive-photo2.jpeg"
                  caption="Christian College Building, Madras"
                />
              </div>
            </div>

            {/* ── SECTION 6: History ── */}
            <div style={{ backgroundColor: "#F3F7FF", borderRadius: "10px", padding: "40px 32px", marginBottom: "40px" }}>
              <SectionHeading title="History" />
              <BodyText>
                Among many unique features of Madras Christian College, one is the College Archives and its special collections. It is the oldest educational archives in Tamil Nadu. Madras Christian College Archives is a repository of rare books and a treasure mine for inquisitive researchers. The idea of archives for the College was conceived by Principal Dr. Chandran D.S. Devanesan in 1960s. Dr. Mithra G. Augustine (1981-88) was instrumental in commissioning and earmarking the Archives as a special unit under the supervision of an archivist when the Miller Memorial Library was shifted to the new premises in 1982.
              </BodyText>
              <BodyText>
                During the tenure of Dr. Alexander Mantramurti (1999-2005) the documentation of the Books and periodicals in the archival collection was carried out as per international standards as part of preservation programme initiated by then archivist in-charge Dr. Y. Vincent Kumaradoss, Reader, Department of History, MCC. The Project was funded by the National Archives of India and the College in part. Mr. G. Sundar, Director, Roja Muthiah Research Library, Chennai, and a Consultant on archives and libraries was invited to take up the project. A systematic classification and cataloguing of the books and periodicals in the archival collection was made. The catalogue in the printed form was made available in three volumes under following categories — a) Serial Holdings b) Author-Title Catalogue b) Title Catalogue.
              </BodyText>
              <BodyText>
                Digitizing manuscripts and some rare photographs was done in 2006, which was funded by the United Board for Christian Higher Education in Asia, by the then Archives-in-Charge Dr. Mrs. Vasanthi Vijayakumar, Associate Professor, Department of History. In 2016, all the College Magazines published since 1883 were digitized. This was a giant leap towards the process of digitization in the archives. New archival materials were also added periodically into the existing collections. Following the demise of Dr. C. J. Nirmal, Former Head of the Department of History in 2019, his collection of books were donated to the Archives. In 2020, College Calendars and manuscripts of Rev. Miller, Rev. Kellet were also digitised with the help of funding from the College.
              </BodyText>

              {/* Manuscript photos */}
              <div className="flex flex-col sm:flex-row gap-6" style={{ marginTop: "32px" }}>
                <PhotoCard
                  src="/images/Archives/Archive-Photo3.jpg"
                  caption="Rare Manuscript — Paraphrasis"
                  height={420}
                />
                <PhotoCard
                  src="/images/Archives/Archive-Photo8.jpg"
                  caption="Handwritten Letter from Archives"
                  height={420}
                />
              </div>
            </div>

            {/* ── SECTION 7: Our Collections ── */}
            <div style={{ backgroundColor: "white", marginBottom: "40px" }}>
              <SectionHeading title="Our Collections" />
              <BodyText>
                The Archives collection has approximately 3000 books and journals. The collection includes the complete set of Madras Christian College Magazine. The Madras Christian College magazine is a treasure trove which was first published in 1883. Initially it was a monthly magazine with articles of high standards from reputed scholars both within and from outside the College. It consists separate sections for Scientific jottings, literature review, Notes and extracts which reported on world events and college notes. Every minor detail about the faculty and the students were recorded meticulously including the correspondences and queries.
              </BodyText>
              <BodyText>
                The college calendar published since 1891 is a source of information about the courses, faculty, syllabi and the graduates of the College. One will be amazed to see the list of prize winners and scholarship holders. The scrupulous detailing of every graduate at the end of the calendar until 1920 even made the administration issue Part I and Part II of the calendars.
              </BodyText>
              <BodyText>
                College Handbooks, admission records, MCC Alumni Association Bulletins and Letters and a wide range of rare books covering history, politics, archaeology, numismatics, education, economics, literature, religion, art and architecture, Christian missions, travelogues and memoirs are also part of the collection. Rare books of various languages — Latin, Greek, German, French, Hebrew and various Indian languages are also part of the collections.
              </BodyText>
              <BodyText>
                Paper manuscripts of Rev. William Miller, Rev. Frederick Kellet, letters of Rev. Gordon Mathew, Prof. Corley and others are a treasured source. Rev. Kellet&apos;s handwritten notes on Indian History in five volumes are a prized possession. Rev. William Miller&apos;s 25 handwritten notes on English language and theology is a rare collection. Our special collections also include old gadgets like century old typewriters, the early tube light, a manual calculator.
              </BodyText>
              <BodyText>
                The Archives has approximately 1500 photographs of different sizes, which include a group of prints of missionaries, early Tamil Christians and officers in Madras taken in the 19th century. In addition, photos of many distinguished alumni such as (to name a few) Dr. S. Radhakrishnan, Mohammad Usman, S. Sathyamurthy, Gemini Ganesan, Gen. Sundarji and Dr. Raja Ramanna and other public figures; and prints of graduating classes since 1906 are present in the collection. Photos of visits of important national leaders like C. Rajagopalachari, M.G. Ramachandran, Mahatma Gandhi, V.V. Giri, Rajiv Gandhi are also preserved.
              </BodyText>
              <BodyText>
                Researchers, Government officials, alumni and faculty, both past and the present use this facility for research on various fields. Internships are also given for students of the college and from outside. With the help of MCC archives, scholars have produced their M.Phil. and Ph.D. dissertations. Researchers from all over India and abroad, also access the archives either by paying a visit here or by mail. The catalogue of the archives is available in the college website.
              </BodyText>
            </div>

            {/* ── SECTION 8: Our Contributions ── */}
            <div style={{ backgroundColor: "#F3F7FF", borderRadius: "10px", padding: "40px 32px", marginBottom: "40px" }}>
              <SectionHeading title="Our Contributions" />
              <BodyText>
                The Archives primarily serves the College community in their research work. MCC Archives played a key role in the writing of the following books: Dr. K. Joshua&apos;s Life and Legacy of Madras Christian College, Dr. Gnanachandran Johnson&apos;s Miller Oru Mamanidhar and Dr. Mithra G. Augustine&apos;s Community in Madras Christian College. Faculty frequently visit the archives for research. The students from the Departments of History, Tamil, English and others access archives for their academic programmes. Using the resources of the MCC archives, many research scholars have produced their M.Phil. and Ph.D. dissertations. Since archival studies is a component of two courses offered by the Department of History, the students are given a hands-on training in MCC Archives. The students of History Vocational course played a vital role in cataloguing and preserving the books.
              </BodyText>
              <BodyText>
                Researchers, Government officials, alumni and faculty from other institutions also avail the services of the MCC Archives. Researchers from across India and abroad, access the archives either by paying a visit here or by corresponding through mail. Such support was extended to Dr. Darren Duerksen, Associate Professor of Intercultural and Religious Studies, Fresno Pacific University and Dr. Phillip Walter, Emeritus Fellow, Merton College, University of Oxford among many others.
              </BodyText>
            </div>

            {/* ── SECTION 9: Facilities Available ── */}
            <div style={{ backgroundColor: "white", marginBottom: "40px" }}>
              <SectionHeading title="Facilities Available" />
              <BodyText>
                The archives comprise of a stack room and a well-furnished reading room. A desktop is available to access the digitized documents. A photocopier and a printer is also available to make copies of the document.
              </BodyText>

              {/* Book cover images */}
              <div
                className="flex flex-col sm:flex-row items-center justify-center gap-8"
                style={{ marginTop: "32px" }}
              >
                {[
                  { src: "/images/Archives/Archive-photo4.jpeg", maxW: "200px" },
                  { src: "/images/Archives/Archive-Photo5.jpg",  maxW: "200px" },
                  { src: "/images/Archives/Archive-Photo6.jpeg", maxW: "300px" },
                ].map(({ src, maxW }, i) => (
                  <div
                    key={i}
                    style={{
                      maxWidth: maxW,
                      width: "100%",
                      borderRadius: "6px",
                      overflow: "hidden",
                      boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
                      backgroundColor: "#f8f5ef",
                    }}
                  >
                    <div style={{ position: "relative", height: "280px" }}>
                      <Image
                        src={src}
                        alt={`Archive publication ${i + 1}`}
                        fill
                        style={{ objectFit: "contain", padding: "8px" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── SECTION 10: Standard Operating Procedure ── */}
            <div
              style={{
                backgroundColor: "#F3F7FF",
                borderRadius: "10px",
                padding: "40px 32px",
                marginBottom: "40px",
              }}
            >
              <div className="flex flex-col lg:flex-row gap-10">

                {/* Left: SOP */}
                <div style={{ flex: "0 0 55%" }}>
                  <h3
                    className="font-cormorant font-bold"
                    style={{ fontSize: "22px", color: "#1a1a1a", marginBottom: "20px", lineHeight: "1.4" }}
                  >
                    Standard Operating Procedure to be followed in MCC Archives
                  </h3>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {sopItems.map((item, i) => (
                      <li
                        key={i}
                        className="font-cormorant"
                        style={{
                          fontSize: "17px",
                          color: "#333",
                          lineHeight: "2",
                          display: "flex",
                          gap: "10px",
                          alignItems: "flex-start",
                        }}
                      >
                        <span style={{ color: "#D1B05D", flexShrink: 0, marginTop: "2px" }}>●</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: Image + fees */}
                <div style={{ flex: "0 0 40%" }}>
                  <div
                    style={{
                      position: "relative",
                      height: "320px",
                      borderRadius: "8px",
                      overflow: "hidden",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                      marginBottom: "28px",
                    }}
                  >
                    <Image
                      src="/images/Archives/Archive-Photo7.jpg"
                      alt="MCC Archives reading room"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>

                  {/* Access fee */}
                  <h4
                    className="font-cormorant font-bold"
                    style={{ fontSize: "18px", color: "#7B2C3A", marginBottom: "10px" }}
                  >
                    Access fee and other charges
                  </h4>
                  <div style={{ width: "40px", height: "2px", backgroundColor: "#D1B05D", marginBottom: "16px" }} />
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {feeItems.map((item, i) => (
                      <li
                        key={i}
                        className="font-cormorant"
                        style={{
                          fontSize: "16px",
                          color: "#333",
                          lineHeight: "2",
                          display: "flex",
                          gap: "10px",
                          alignItems: "flex-start",
                        }}
                      >
                        <span style={{ color: "#D1B05D", flexShrink: 0, marginTop: "2px" }}>●</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
