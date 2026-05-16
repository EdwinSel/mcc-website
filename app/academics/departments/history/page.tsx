"use client";

import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { Clock, GraduationCap, BookMarked } from "lucide-react";

// ── Data ──────────────────────────────────────────────────────────────────────

type FacultyMember = {
  name: string;
  designation: string;
  email: string;
  photo: string | null;
  initials: string;
};

const faculty: FacultyMember[] = [
  { name: "R. Venkataramanujam",    designation: "Head of the Department", email: "venkat@mcc.edu.in",          photo: "/images/faculty/history/venkat.jpg",       initials: "RV" },
  { name: "V. Chitra",              designation: "Assistant Professor",     email: "vchitra@mcc.edu.in",         photo: "/images/faculty/history/chitra.jpg",       initials: "VC" },
  { name: "K. Ashok",               designation: "Assistant Professor",     email: "ashok@mcc.edu.in",           photo: "/images/faculty/history/ashok.jpg",        initials: "KA" },
  { name: "R. Sheba",               designation: "Assistant Professor",     email: "sheba@mcc.edu.in",           photo: "/images/faculty/history/sheba.jpg",        initials: "RS" },
  { name: "Marilyn Gracey Augustine",designation: "Assistant Professor",    email: "marilyngracey@mcc.edu.in",   photo: "/images/faculty/history/marilyn.jpg",      initials: "MG" },
  { name: "M. Sabeera Sulthana Bijli",designation: "Assistant Professor",   email: "sabeera@mcc.edu.in",         photo: "/images/faculty/history/sabeera.jpg",      initials: "MS" },
  { name: "P. Jayapradaban",         designation: "Assistant Professor",    email: "jayapradaban@mcc.edu.in",    photo: "/images/faculty/history/jayapradaban.jpg", initials: "PJ" },
  { name: "P. Sadasivam",            designation: "Assistant Professor",    email: "psadasivam@mcc.edu.in",      photo: "/images/faculty/history/sadasivam.jpg",    initials: "PS" },
  { name: "Sreedevi K.C.",           designation: "Assistant Professor",    email: "sreedevikc@mcc.edu.in",      photo: "/images/faculty/history/sreedevi.jpg",     initials: "SK" },
  { name: "W. Christina Kokila",     designation: "Assistant Professor",    email: "christinakokila@mcc.edu.in", photo: "/images/faculty/history/christina.jpg",    initials: "WC" },
  { name: "A. Gughan Babu",          designation: "Assistant Professor",    email: "gughanbabu@mcc.edu.in",      photo: "/images/faculty/history/gughan.jpg",       initials: "AG" },
  { name: "S. Deepika",              designation: "Assistant Professor",    email: "sdeepika@mcc.edu.in",        photo: "/images/faculty/history/deepika.jpg",      initials: "SD" },
];

const highlights = [
  "An updated and varied curriculum caters to the needs of the changing world, such as Historians and Historical Writings, the History of Madras, the Contemporary World, the Ecological History of India, the History of Science and Technology in Modern India, the History of North-East India, economic history of India, International Relations, etc.",
  "Comprehensive coverage of Indian History equips students for competitive exams, CTET, NET and SET.",
  "Diversity of Courses on history of various countries such as History of Europe, History of USA, History of England, History of China and Japan, History of West Asia and History of South East Asia that are relevant for contemporary knowledge of world politics.",
  "Our unique programme B.A. History (Vocational): Archaeology and Museology provides specialized courses such as History of Technologies in Ancient India, Epigraphy and Numismatics, Techniques of Museum Display and Methods of Museology, etc.",
  "Innovation based internal continuous assessment component to kindle the creative and innovative genius of the students and to augment their skills.",
  "Skill Based Training with Project submission offers a Project based learning experience for the students.",
  "Special Lectures, Endowment Lectures, Seminars/Conferences/Workshops provide the much-needed exposure to the latest developments in the field by eminent scholars.",
  "Annual Department Tours and Trips enhances the learning experience with field exposure.",
  "The Service Learning and extension activities provide the students with experiential learning and an opportunity to convert their knowledge into practical experience that benefits the community.",
];

const prizes = [
  { name: "Russel Prize",                                          class: "I B.A. History",                                                                                    amount: "No Cash Prize" },
  { name: "E.M. Macphail Prize",                                   class: "II B.A. History",                                                                                   amount: "Rs. 1200/-" },
  { name: "Mallaya Naidu Prize",                                    class: "III B.A. History",                                                                                  amount: "No Cash Prize" },
  { name: "Thurso Prize",                                           class: "III B.A. History",                                                                                  amount: "Rs. 800/-" },
  { name: "Dr Chandran D.S. Devanesen Prize",                      class: "III B.A. History",                                                                                  amount: "Rs. 500/-" },
  { name: "Prof. P. Corley Prize",                                  class: "I M.A. History",                                                                                    amount: "No Cash Prize" },
  { name: "M. Sargurudoss Prize",                                   class: "I M.A. History",                                                                                    amount: "No Cash Prize" },
  { name: "Kellet Prize II",                                        class: "II M.A. History",                                                                                   amount: "No Cash Prize" },
  { name: "Clarence David Prize",                                   class: "II M.A. History",                                                                                   amount: "No Cash Prize" },
  { name: "Shanmugam Memorial Prize",                               class: "II M.A. History",                                                                                   amount: "No Cash Prize" },
  { name: "Faculty Special Prize for Best Outgoing UG Student",    class: "III B.A. History / III B.A. History (Vocational): Archaeology and Museology",                       amount: "Rs. 6000/-" },
  { name: "Nambi Arooran Prize for the Best UG student in American History", class: "III B.A. History",                                                                         amount: "Rs. 750/-" },
];

const scholarships = [
  { name: "Thurso Studentship",                                                                 class: "I B.A. History",                                                         amount: "Rs. 250/-" },
  { name: "",                                                                                    class: "II B.A. History",                                                        amount: "Rs. 250/-" },
  { name: "",                                                                                    class: "III B.A. History",                                                       amount: "Rs. 250/-" },
  { name: "Rev. Canon RA Manuel Scholarship",                                                   class: "I M.A. History",                                                         amount: "Rs. 14,000/-" },
  { name: "Dr Sundar Krishnaswamy and Mrs Padma Krishnaswamy Undergraduate Scholarship",        class: "II B.A. History",                                                        amount: "Rs. 29,430/-" },
  { name: "",                                                                                    class: "II B.A. History (Vocational): Archaeology and Museology",               amount: "" },
  { name: "Dr Sundar Krishnaswamy and Mrs Padma Krishnaswamy Postgraduate Scholarship",         class: "I M.A. History",                                                         amount: "Rs. 29,430/-" },
  { name: "Rev. Basil Manuel Scholarship",                                                      class: "B.A. History",                                                           amount: "Rs. 25,000/-" },
  { name: "",                                                                                    class: "B.A. History (Vocational): Archaeology and Museology",                  amount: "" },
  { name: "",                                                                                    class: "M.A. History",                                                           amount: "" },
];

// ── Reusable helpers ──────────────────────────────────────────────────────────

function SectionTitle({ title, centered = false }: { title: string; centered?: boolean }) {
  return (
    <div style={{ marginBottom: "24px", textAlign: centered ? "center" : "left" }}>
      <h2 className="font-cormorant font-bold text-[22px] md:text-[26px]" style={{ color: "#1a1a1a", marginBottom: "10px" }}>
        {title}
      </h2>
      <div style={{ width: "50px", height: "2px", backgroundColor: "#D1B05D", margin: centered ? "0 auto" : "0" }} />
    </div>
  );
}

function BodyText({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-cormorant text-[16px] md:text-[17px]" style={{ color: "#444", lineHeight: "1.95", textAlign: "justify", marginBottom: "18px" }}>
      {children}
    </p>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-cormorant font-bold" style={{ fontSize: "20px", color: "#7B2C3A", marginBottom: "12px", marginTop: "24px" }}>
      {children}
    </p>
  );
}

// ── Faculty Card ──────────────────────────────────────────────────────────────

function FacultyCard({ name, designation, email, photo, initials }: FacultyMember) {
  const [hovered, setHovered] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <div
      style={{
        backgroundColor: "white",
        border: "1px solid #dfdfdf",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: hovered ? "0 12px 32px rgba(0,0,0,0.12)" : "0 4px 16px rgba(0,0,0,0.06)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ height: "260px", overflow: "hidden", position: "relative" }}>
        {photo && !imgError ? (
          <Image
            src={photo}
            alt={name}
            fill
            onError={() => setImgError(true)}
            style={{ objectFit: "cover", objectPosition: "top center", transform: hovered ? "scale(1.05)" : "scale(1)", transition: "transform 0.3s ease" }}
          />
        ) : (
          <div style={{ width: "100%", height: "100%", backgroundColor: "#7B2C3A", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span className="font-dm font-bold" style={{ fontSize: "64px", color: "#D1B05D", lineHeight: 1 }}>{initials}</span>
          </div>
        )}
      </div>
      <div style={{ padding: "16px 20px 20px" }}>
        <p className="font-dm" style={{ fontSize: "10px", letterSpacing: "2px", color: "#D1B05D", textTransform: "uppercase", marginBottom: "6px" }}>
          HISTORY (AIDED)
        </p>
        <p className="font-dm font-bold" style={{ fontSize: "17px", color: "#1a1a1a", marginBottom: "4px" }}>{name}</p>
        <p className="font-dm" style={{ fontSize: "13px", color: "#666", marginBottom: "14px", lineHeight: "1.4" }}>{designation}</p>
        {email && (
          <a href={`mailto:${email}`} className="font-dm font-bold block"
            style={{ backgroundColor: "#640000", color: "white", padding: "10px 16px", borderRadius: "4px", fontSize: "12px", textAlign: "center", textDecoration: "none", marginBottom: "8px", display: "block" }}>
            {email}
          </a>
        )}
        <a href="#" className="font-dm font-bold block"
          style={{ backgroundColor: "#D1B05D", color: "#1a1a1a", padding: "10px 16px", borderRadius: "4px", fontSize: "12px", textAlign: "center", textDecoration: "none", display: "block" }}>
          More Detail
        </a>
      </div>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────

export default function HistoryDeptPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section
        className="min-h-[160px] h-auto md:h-[200px] px-4 py-6 md:px-0 md:py-0"
        style={{
          backgroundColor: "#7B2C3A",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: "repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 50%)",
          backgroundSize: "10px 10px",
        }}
      >
        <h1 className="font-cormorant text-[32px] md:text-[48px]" style={{ color: "#D1B05D", fontStyle: "italic", textAlign: "center", marginBottom: "12px" }}>
          Department of History
        </h1>
        <nav>
          <ol className="flex items-center gap-2 font-dm text-[13px]" style={{ color: "rgba(255,255,255,0.6)" }}>
            <li><Link href="/" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Home</Link></li>
            <li>/</li>
            <li><Link href="/academics" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Academics</Link></li>
            <li>/</li>
            <li><Link href="/academics/departments" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Departments</Link></li>
            <li>/</li>
            <li style={{ color: "#D1B05D" }}>History</li>
          </ol>
        </nav>
      </section>

      {/* Three Quick Cards */}
      <div
        className="px-4 py-6 md:px-20 md:py-10"
        style={{
          position: "relative",
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <Image className="hidden md:block" src="/images/feather.png" alt="" width={280} height={420}
          style={{ position: "absolute", left: "calc(12.5% + 120px)", top: "50%", transform: "translateY(-50%)", zIndex: 1, height: "auto", pointerEvents: "none" }}
        />
        <Image className="hidden md:block" src="/images/feather.png" alt="" width={280} height={420}
          style={{ position: "absolute", right: "calc(12.5% + 120px)", top: "50%", transform: "translateY(-50%) scaleX(-1)", zIndex: 1, height: "auto", pointerEvents: "none" }}
        />

        <div
          className="flex flex-col md:flex-row w-full md:w-[75%]"
          style={{
            position: "relative", zIndex: 2, maxWidth: "820px", margin: "0 auto",
            border: "1px solid #dfdfdf", backgroundColor: "white",
            boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
          }}
        >
          <span style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", backgroundColor: "#D1B05D", display: "block" }} />
          <span style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "5px", background: "linear-gradient(90deg, #640000, #7B2C3A, #9B3A4A)", display: "block" }} />

          {/* Card 1 — Programmes Offered */}
          <div className="w-full md:flex-1 p-6 md:p-10 text-center border-b md:border-b-0 md:border-r border-[#dfdfdf]">
            <Clock size={55} color="#7B2C3A" style={{ margin: "0 auto" }} />
            <p className="font-cormorant" style={{ fontSize: "18px", color: "#7B2C3A", fontStyle: "italic", margin: "16px 0 10px" }}>
              Programmes Offered
            </p>
            <p className="font-cormorant" style={{ fontSize: "13px", color: "#888", lineHeight: "1.9" }}>
              B.A. History<br />
              B.A. History (Vocational):<br />Archaeology &amp; Museology<br />
              M.A. History<br />
              Ph.D
            </p>
          </div>

          {/* Card 2 — Admissions */}
          <div className="w-full md:flex-1 p-6 md:p-10 text-center border-b md:border-b-0 md:border-r border-[#dfdfdf]">
            <GraduationCap size={55} color="#7B2C3A" style={{ margin: "0 auto" }} />
            <p className="font-cormorant" style={{ fontSize: "18px", color: "#7B2C3A", fontStyle: "italic", margin: "16px 0 8px" }}>
              Admissions
            </p>
            <QuickBtn label="UG / PG" />
            <QuickBtn label="Ph.D" />
          </div>

          {/* Card 3 — Programme Outcome */}
          <div className="w-full md:flex-1 p-6 md:p-10 text-center">
            <BookMarked size={55} color="#7B2C3A" style={{ margin: "0 auto" }} />
            <p className="font-cormorant" style={{ fontSize: "18px", color: "#7B2C3A", fontStyle: "italic", margin: "16px 0 8px" }}>
              Programme Outcome
            </p>
            <QuickBtn label="B.A. History Syllabus" />
            <QuickBtn label="B.A. History (Voc.) Syllabus" />
            <QuickBtn label="M.A. History Syllabus" />
          </div>
        </div>
      </div>

      {/* About Us */}
      <section className="px-4 py-8 md:px-6 md:py-[60px]" style={{ backgroundColor: "white" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <SectionTitle title="About Us" />
          <BodyText>
            The Department of History, established in 1887, is one of the oldest in the country. Ever
            since the college began offering F.A. programme in 1865 history was a required subject.
            B.A. (Honours) was introduced in 1911 and after a few years M.A. programme was introduced.
            In 1993 the Department was chosen by UGC to introduce Archaeology and Museology as special
            subjects under its vocationalization initiative.
          </BodyText>
          <BodyText>
            The syllabi of both the undergraduate and postgraduate courses are geared to equip students
            to face competitive exams such as the Civil Services and UGC NET / SET. Keeping in tune
            with the changing times, the department has introduced papers of contemporary relevance
            like Gender Studies, Human Rights, International Relations, Indian Art, Ecological History
            and History of North East.
          </BodyText>
          <BodyText>
            The Department was put on a national map in 2022 after it hosted the 81st Session of the
            Indian History Congress. Thiru M.K. Stalin, Honourable Chief Minister of Tamil Nadu
            inaugurated the three-day Congress. Leading historians of the country lead the six sessions
            and more than one thousand participants presented their research papers.
          </BodyText>
          <BodyText>
            The department has produced eminent historians, civil servants, police officers,
            archaeologists, educationists, journalists, and entrepreneurs.
          </BodyText>
        </div>
      </section>

      {/* Highlights of the Programmes */}
      <section className="px-4 py-8 md:px-6 md:py-[60px]" style={{ backgroundColor: "#F3F7FF" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <SectionTitle title="Highlights of the Programmes" />
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
            {highlights.map((item, i) => (
              <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#D1B05D", flexShrink: 0, marginTop: "8px" }} />
                <p className="font-cormorant text-[16px] md:text-[17px]" style={{ color: "#444", lineHeight: "1.75", margin: 0 }}>{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Annual Calendar of Events */}
      <section className="px-4 py-8 md:px-6 md:py-[60px]" style={{ backgroundColor: "white" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <SectionTitle title="Annual Calendar of Events" />
          <p className="font-cormorant" style={{ fontSize: "19px", color: "#7B2C3A", fontStyle: "italic", marginBottom: "20px" }}>
            History Association Events
          </p>
          <BodyText>
            The History Association of the Department of History, founded in 1891, is one of the oldest
            associations in the country. It is a semi-academic student body, and all Department students
            are members.
          </BodyText>
          <BodyText>
            <strong>Freshers Meet:</strong> The students of the Department welcome the freshers officially
            in a fun-filled event.
          </BodyText>
          <BodyText>
            <strong>Inaugural of its Activities:</strong> The History Association begins its activities
            with an inaugural in the academic year. An eminent scholar delivers a special lecture.
          </BodyText>
          <BodyText>
            <strong>Special Lectures:</strong> The Association arranges special lectures for the students
            throughout the academic year. One important event is the Madras Day celebrations, which are
            commemorated with a special lecture and an exhibition.
          </BodyText>
          <BodyText>
            <strong>Istoria:</strong> Istoria is the annual student intercollegiate competition organized
            by the Association. Students from the city colleges compete in various competitions, such as
            debates, quiz, creative writing, etc.
          </BodyText>
          <BodyText>
            <strong>Annual History Students Conference:</strong> Students from our college and outside
            come and present their research papers on a given theme. It is a forum especially for
            undergraduate and postgraduate students to present their research papers.
          </BodyText>
          <BodyText>
            <strong>Farewell:</strong> The events of the Association end with the farewell day organized
            for the final-year students.
          </BodyText>
        </div>
      </section>

      {/* Endowment Lectures */}
      <section className="px-4 py-8 md:px-6 md:py-[60px]" style={{ backgroundColor: "#F3F7FF" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <SectionTitle title="Endowment Lectures" />
          <BodyText>
            Dr Chandran Devanesen Endowment Lecture, Dr C. Minakshi Endowment Lecture and Dr C.J. Nirmal
            Endowment Lecture are annual events. In 2023-24, they were delivered by Prof. N. Rajendran,
            Former Vice-Chancellor, Alagappa University, Dr V. Venkatraman, Former Principal, Rajapalayam
            Rajus&apos; College and Dr M. Lakshmanan, Former Head of the Department, Department of History,
            Presidency College, Chennai, respectively.
          </BodyText>
          <BodyText>
            Renowned historians such as Dr. Ramachandra Guha, Prof. Mridula Mukherjee, Prof. Aditya
            Mukherjee, Prof. Rajan Gurukkal, Dr. Esterine Kire, Prof. R. Mahalakshmi, Prof. K.A.
            Manikumar were among those who had delivered the lectures earlier.
          </BodyText>
        </div>
      </section>

      {/* List of Special Events */}
      <section className="px-4 py-8 md:px-6 md:py-[60px]" style={{ backgroundColor: "white" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <SectionTitle title="List of Special Events" />
          <SubHeading>81st Session of Indian History Congress</SubHeading>
          <BodyText>
            The 81st Session of the Indian History Congress was hosted by the Department of History,
            Madras Christian College, between 27th and 29th December 2022. Previously, the Indian
            History Congress was held four times in the state of Tamil Nadu, viz., in 1944 at the
            University of Madras, in 1945 at Annamalai University, in 1984 at Annamalai University
            and in 1996 at the University of Madras. Hon&apos;ble Chief Minister of Tamil Nadu, Thiru M.K.
            Stalin, inaugurated the 81st Session of the Congress. Thiru Dr. K. Ponmudi, Hon&apos;ble
            Minister for Higher Education, and Thiru Thangam Thenarasu, Hon&apos;ble Minister for
            Industries, Tamil Official Language and Tamil Culture and Archaeology, graced the occasion.
            Prominent historian and office bearers of the Indian History Congress, Prof. Kesavan
            Veluthat, Prof. Shireen Moosvi, Prof Dr. Mahalakshmi, Dr. Burton Cletus, Dr. P. Subbarayalu,
            and Prof. Bodh Prakash were present. Renowned historians, professors, and research scholars
            from across India attended the event. More than 1000 research papers were presented and an
            estimated 1500 delegates participated in the session, which was divided into six sections
            viz. Ancient Indian History, Medieval Indian History, Modern Indian History, Contemporary
            India, Archaeology and Countries other than India. Out of six special panels, Madras
            Christian College organized two special panels: Archaeology and Cultural Heritage of Tamil
            Nadu and Discourse on Dravidian Studies.
          </BodyText>
          <SubHeading>Special Lectures / Conferences / Seminars and Workshops</SubHeading>
          <BodyText>
            Almost every year the Department organizes special lectures, conferences, seminars and
            workshops for the benefit of students. Even during lockdowns, the Department organized a
            series of seven International Webinar Series and three national webinars under the title
            Azadi Ka Amrith Mahatsov commemorating the 75 years of India&apos;s independence. A national
            skill development programme on Paleography was organized in the online mode in 2021.
          </BodyText>
          <BodyText>
            The recent events are the Special Lecture by Kim Yongjun of the Korea University
            commemorating the Centenary of the Declaration of the Harappan Civilization, Seminar on
            Contemporary Polity, Society and Culture – commemorating Prof. M.S.S Pandian&apos;s
            contributions; and Workshop on Stone Tool Knapping.
          </BodyText>
          <SubHeading>Exhibitions</SubHeading>
          <BodyText>
            Under the banner of Vestiges of Madras, the Department regularly organizes exhibitions
            commemorating Madras Day. The exhibits would consist of Archaeological exhibits, coins,
            stamps and exhibits from other partners.
          </BodyText>
        </div>
      </section>

      {/* Excavation Training and Field Visits */}
      <section className="px-4 py-8 md:px-6 md:py-[60px]" style={{ backgroundColor: "#F3F7FF" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <SectionTitle title="Excavation Training and Field Visits" />
          <BodyText>
            As a part of experiential learning the Department of History organizes practical training
            for vocational students by taking them to the excavation sites and giving them hands-on
            experience. Recently, the students participated in the Vadakkupattu excavation, which was
            conducted by the Archaeological Survey of India. The five-days training in excavation was
            instrumental in gaining experience on a variety of in archaeological excavation and
            exploration. Students benefitted by learning basic cleaning of the site to laying down
            trench to recording of evidence. The students also visited the Chettimedu excavation site
            near Chengelpet which was excavated by the Department of Ancient Indian History of the
            University of Madras.
          </BodyText>
          <SubHeading>Pyrsos</SubHeading>
          <BodyText>
            Pyrsos is the Department of History Bi-annual Newsletter, which is a platform especially
            for students to express themselves through articles, sketches, paintings etc.
          </BodyText>
        </div>
      </section>

      {/* Prizes and Scholarships */}
      <section className="px-4 py-8 md:px-6 md:py-[60px]" style={{ backgroundColor: "white" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <SectionTitle title="Prizes and Scholarships" />
          <BodyText>
            The Department has many prizes and scholarships that are awarded to students annually.
            There are prizes, merit scholarships, means scholarships and merit cum means scholarships.
          </BodyText>

          {/* Prizes table */}
          <SubHeading>Prizes</SubHeading>
          <p className="font-cormorant" style={{ fontSize: "15px", color: "#666", fontStyle: "italic", marginBottom: "16px" }}>
            (Prizes shall be either awarded individually or shared among students)
          </p>
          <div style={{ overflowX: "auto", marginBottom: "40px" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "15px" }}>
              <thead>
                <tr style={{ backgroundColor: "#7B2C3A" }}>
                  <th className="font-dm" style={{ padding: "12px 16px", color: "white", textAlign: "left", fontWeight: 600, fontSize: "13px" }}>Prize</th>
                  <th className="font-dm" style={{ padding: "12px 16px", color: "white", textAlign: "left", fontWeight: 600, fontSize: "13px" }}>Class</th>
                  <th className="font-dm" style={{ padding: "12px 16px", color: "white", textAlign: "left", fontWeight: 600, fontSize: "13px" }}>Amount (Approx.)</th>
                </tr>
              </thead>
              <tbody>
                {prizes.map((row, i) => (
                  <tr key={i} style={{ backgroundColor: i % 2 === 0 ? "white" : "#F3F7FF", borderBottom: "1px solid #dfdfdf" }}>
                    <td className="font-cormorant" style={{ padding: "12px 16px", color: "#333", verticalAlign: "top" }}>{row.name}</td>
                    <td className="font-cormorant" style={{ padding: "12px 16px", color: "#555", verticalAlign: "top" }}>{row.class}</td>
                    <td className="font-cormorant" style={{ padding: "12px 16px", color: "#555", verticalAlign: "top", whiteSpace: "nowrap" }}>{row.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Scholarships table */}
          <SubHeading>Scholarships</SubHeading>
          <p className="font-cormorant" style={{ fontSize: "15px", color: "#666", fontStyle: "italic", marginBottom: "16px" }}>
            (Scholarships shall be awarded either individually or shared among students based on merit &amp; need)
          </p>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "15px" }}>
              <thead>
                <tr style={{ backgroundColor: "#7B2C3A" }}>
                  <th className="font-dm" style={{ padding: "12px 16px", color: "white", textAlign: "left", fontWeight: 600, fontSize: "13px" }}>Scholarship</th>
                  <th className="font-dm" style={{ padding: "12px 16px", color: "white", textAlign: "left", fontWeight: 600, fontSize: "13px" }}>Class</th>
                  <th className="font-dm" style={{ padding: "12px 16px", color: "white", textAlign: "left", fontWeight: 600, fontSize: "13px" }}>Amount (Approx.)</th>
                </tr>
              </thead>
              <tbody>
                {scholarships.map((row, i) => (
                  <tr key={i} style={{ backgroundColor: i % 2 === 0 ? "white" : "#F3F7FF", borderBottom: "1px solid #dfdfdf" }}>
                    <td className="font-cormorant" style={{ padding: "12px 16px", color: "#333", verticalAlign: "top" }}>{row.name}</td>
                    <td className="font-cormorant" style={{ padding: "12px 16px", color: "#555", verticalAlign: "top" }}>{row.class}</td>
                    <td className="font-cormorant" style={{ padding: "12px 16px", color: "#555", verticalAlign: "top", whiteSpace: "nowrap" }}>{row.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section className="px-4 py-8 md:px-6 md:py-[60px]" style={{ backgroundColor: "#F3F7FF" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <h2 className="font-cormorant text-[22px] md:text-[32px]" style={{ color: "#7B2C3A", marginBottom: "12px" }}>Our Faculty</h2>
            <div style={{ width: "50px", height: "2px", backgroundColor: "#D1B05D", margin: "0 auto" }} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: "24px" }}>
            {faculty.map((member) => (
              <FacultyCard key={member.email} {...member} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

// ── QuickBtn (kept co-located) ────────────────────────────────────────────────

function QuickBtn({ label }: { label: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href="#"
      className="font-dm font-bold"
      style={{
        display: "block",
        width: "190px",
        padding: "10px 0",
        textAlign: "center",
        fontSize: "12px",
        borderRadius: "3px",
        backgroundColor: hovered ? "#640000" : "#7B2C3A",
        color: "white",
        textDecoration: "none",
        margin: "8px auto",
        transition: "background-color 0.2s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {label}
    </a>
  );
}
