"use client";

import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { Users, GraduationCap, BookMarked } from "lucide-react";

// ── Data ──────────────────────────────────────────────────────────────────────

type FacultyMember = {
  name: string;
  designation: string;
  email: string;
  photo: string | null;
  initials: string;
};

const faculty: FacultyMember[] = [
  { name: "D. Prince Annadurai",        designation: "Assistant Professor", email: "princeannadurai@mcc.edu.in", photo: "/images/faculty/social-work/prince-annadurai.jpg", initials: "PA" },
  { name: "B. Prince Solomon Devadass", designation: "Assistant Professor", email: "solomon.prince@mcc.edu.in",  photo: "/images/faculty/social-work/prince-solomon.jpg",  initials: "PS" },
  { name: "S. Sudharsan",               designation: "Assistant Professor", email: "sudharsan@mcc.edu.in",       photo: "/images/faculty/social-work/sudharsan.jpg",       initials: "SS" },
];

// ── Reusable helpers ──────────────────────────────────────────────────────────

function SectionTitle({ title }: { title: string }) {
  return (
    <div style={{ marginBottom: "24px" }}>
      <h2 className="font-cormorant font-bold" style={{ fontSize: "26px", color: "#1a1a1a", marginBottom: "10px" }}>
        {title}
      </h2>
      <div style={{ width: "50px", height: "2px", backgroundColor: "#D1B05D" }} />
    </div>
  );
}

function BodyText({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-cormorant" style={{ fontSize: "17px", color: "#444", lineHeight: "1.95", textAlign: "justify", marginBottom: "18px" }}>
      {children}
    </p>
  );
}

function BulletPoint({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "14px" }}>
      <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#D1B05D", flexShrink: 0, marginTop: "9px" }} />
      <p className="font-cormorant" style={{ fontSize: "17px", color: "#444", lineHeight: "1.85", margin: 0, textAlign: "justify" }}>
        {children}
      </p>
    </div>
  );
}

function NumberedPoint({ number, children }: { number: number; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "10px" }}>
      <span className="font-cormorant font-bold" style={{ fontSize: "17px", color: "#7B2C3A", flexShrink: 0, minWidth: "20px" }}>
        ({number})
      </span>
      <p className="font-cormorant" style={{ fontSize: "17px", color: "#444", lineHeight: "1.85", margin: 0, textAlign: "justify" }}>
        {children}
      </p>
    </div>
  );
}

function ProgrammeBox({ number, children }: { number: number; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: "16px", backgroundColor: "#FFE4B5", borderRadius: "8px", padding: "14px 20px", marginBottom: "10px" }}>
      <span className="font-dm font-bold" style={{ fontSize: "16px", color: "#7B2C3A", flexShrink: 0, minWidth: "22px" }}>
        {number}.
      </span>
      <p className="font-cormorant" style={{ fontSize: "17px", color: "#444", lineHeight: "1.8", margin: 0 }}>
        {children}
      </p>
    </div>
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
            style={{
              objectFit: "cover",
              objectPosition: "top center",
              transform: hovered ? "scale(1.05)" : "scale(1)",
              transition: "transform 0.3s ease",
            }}
          />
        ) : (
          <div style={{ width: "100%", height: "100%", backgroundColor: "#7B2C3A", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span className="font-dm font-bold" style={{ fontSize: "64px", color: "#D1B05D", lineHeight: 1 }}>
              {initials}
            </span>
          </div>
        )}
      </div>

      <div style={{ padding: "16px 20px 20px" }}>
        <p className="font-dm" style={{ fontSize: "10px", letterSpacing: "2px", color: "#D1B05D", textTransform: "uppercase", marginBottom: "6px" }}>
          SOCIAL WORK (AIDED)
        </p>
        <p className="font-dm font-bold" style={{ fontSize: "17px", color: "#1a1a1a", marginBottom: "4px" }}>{name}</p>
        <p className="font-dm" style={{ fontSize: "13px", color: "#666", marginBottom: "14px", lineHeight: "1.4" }}>{designation}</p>

        {email && (
          <a
            href={`mailto:${email}`}
            className="font-dm font-bold block"
            style={{ backgroundColor: "#640000", color: "white", padding: "10px 16px", borderRadius: "4px", fontSize: "12px", textAlign: "center", textDecoration: "none", marginBottom: "8px", display: "block" }}
          >
            {email}
          </a>
        )}

        <a
          href="#"
          className="font-dm font-bold block"
          style={{ backgroundColor: "#D1B05D", color: "#1a1a1a", padding: "10px 16px", borderRadius: "4px", fontSize: "12px", textAlign: "center", textDecoration: "none", display: "block" }}
        >
          More Detail
        </a>
      </div>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────

export default function SocialWorkDeptPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section
        style={{
          height: "200px",
          backgroundColor: "#7B2C3A",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: "repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 50%)",
          backgroundSize: "10px 10px",
        }}
      >
        <h1 className="font-cormorant" style={{ fontSize: "48px", color: "#D1B05D", fontStyle: "italic", textAlign: "center", marginBottom: "12px" }}>
          Department of Social Work
        </h1>
        <nav>
          <ol className="flex items-center gap-2 font-dm text-[13px]" style={{ color: "rgba(255,255,255,0.6)" }}>
            <li><Link href="/" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Home</Link></li>
            <li>/</li>
            <li><Link href="/academics" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Academics</Link></li>
            <li>/</li>
            <li><Link href="/academics/departments" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Departments</Link></li>
            <li>/</li>
            <li style={{ color: "#D1B05D" }}>Social Work</li>
          </ol>
        </nav>
      </section>

      {/* Three Quick Cards */}
      <div
        style={{
          position: "relative",
          padding: "40px 80px",
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <Image
          src="/images/feather.png"
          alt=""
          width={280}
          height={420}
          style={{ position: "absolute", left: "calc(12.5% + 120px)", top: "50%", transform: "translateY(-50%)", zIndex: 1, height: "auto", pointerEvents: "none" }}
        />
        <Image
          src="/images/feather.png"
          alt=""
          width={280}
          height={420}
          style={{ position: "absolute", right: "calc(12.5% + 120px)", top: "50%", transform: "translateY(-50%) scaleX(-1)", zIndex: 1, height: "auto", pointerEvents: "none" }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            width: "75%",
            maxWidth: "820px",
            margin: "0 auto",
            display: "flex",
            border: "1px solid #dfdfdf",
            backgroundColor: "white",
            boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
          }}
        >
          <span style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", backgroundColor: "#D1B05D", display: "block" }} />
          <span style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "5px", background: "linear-gradient(90deg, #640000, #7B2C3A, #9B3A4A)", display: "block" }} />

          {/* Card 1 — Programmes Offered */}
          <div style={{ flex: 1, padding: "56px 24px 60px", textAlign: "center", borderRight: "1px solid #dfdfdf" }}>
            <Users size={55} color="#7B2C3A" style={{ margin: "0 auto" }} />
            <p className="font-cormorant" style={{ fontSize: "18px", color: "#7B2C3A", fontStyle: "italic", margin: "16px 0 8px" }}>
              Programmes Offered
            </p>
            <p className="font-cormorant" style={{ fontSize: "13px", color: "#888", lineHeight: "1.7" }}>
              M. S. W (Community Development<br />and Medical Psychiatry)
            </p>
          </div>

          {/* Card 2 — Admissions */}
          <div style={{ flex: 1, padding: "56px 24px 60px", textAlign: "center", borderRight: "1px solid #dfdfdf" }}>
            <GraduationCap size={55} color="#7B2C3A" style={{ margin: "0 auto" }} />
            <p className="font-cormorant" style={{ fontSize: "18px", color: "#7B2C3A", fontStyle: "italic", margin: "16px 0 8px" }}>
              Admissions
            </p>
            <QuickBtn label="M.S.W" />
          </div>

          {/* Card 3 — Programme Outcome */}
          <div style={{ flex: 1, padding: "56px 24px 60px", textAlign: "center" }}>
            <BookMarked size={55} color="#7B2C3A" style={{ margin: "0 auto" }} />
            <p className="font-cormorant" style={{ fontSize: "18px", color: "#7B2C3A", fontStyle: "italic", margin: "16px 0 8px" }}>
              Programme Outcome
            </p>
            <QuickBtn label="Academics" />
          </div>
        </div>
      </div>

      {/* About Us */}
      <section style={{ backgroundColor: "white", padding: "60px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <SectionTitle title="About Us" />
          <BodyText>
            The Department of Social Work congruent with the Mission of Madras Christian College offers
            Human Rights and Value based Professional Social work education as a vocation of service
            through building of character, experiencing transformational development and acquiring
            critical consciousness in order to empower people to promote an egalitarian and just society.
          </BodyText>
          <BodyText>
            The Department of Social work offers a Master Degree in Social work (MSW). Social work is
            a practice profession and therefore the objectives of the MSW course are to prepare
            candidates for a career in Social work.
          </BodyText>
        </div>
      </section>

      {/* Objectives */}
      <section style={{ backgroundColor: "white", padding: "0 24px 60px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <SectionTitle title="Objectives of the Post-Graduate course in Social Work" />
          <BodyText>
            The objectives of the MSW course are to prepare candidates for a career in Social work
            through a professional training programme aimed at developing in them:
          </BodyText>
          <div style={{ marginBottom: "20px" }}>
            <BulletPoint>Scientific knowledge about the dynamics of problems and issues in our society.</BulletPoint>
            <BulletPoint>Theoretical knowledge about the dynamics of individuals, groups and communities.</BulletPoint>
            <BulletPoint>An ability to critique the ideologies that lead to systematic domination, marginalization and rights violation of vulnerable groups.</BulletPoint>
            <BulletPoint>Necessary skills for Social work practice.</BulletPoint>
            <BulletPoint>An ability to apply skills in social work practice and social work research in different fields for achieving desirable change, development and empowerment of people.</BulletPoint>
          </div>
          <BodyText>
            Attitudes and values necessary for working with people and organizations for achieving the
            goals of social work profession namely
          </BodyText>
          <div style={{ paddingLeft: "8px", marginBottom: "18px" }}>
            <NumberedPoint number={1}>to enhance people&apos;s capacity for social functioning</NumberedPoint>
            <NumberedPoint number={2}>to improve the quality of life for everyone</NumberedPoint>
            <NumberedPoint number={3}>to promote social justice</NumberedPoint>
            <NumberedPoint number={4}>to provide opportunities for people to develop their capacities to become participating and contributing citizens.</NumberedPoint>
          </div>
        </div>
      </section>

      {/* Brief History */}
      <section style={{ backgroundColor: "white", padding: "0 24px 60px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <SectionTitle title="Brief History of Social Service Programme in MCC" />
          <BodyText>
            The Social Service Programme was shifted from Madras in 1937 to a suburb which was located
            25 km South of the city. This quiet suburban setting with only small rural communities
            around has now changed to a complex urban scenario necessitating the inclusion of urban
            concerns in the extension services of the College and prompting programmes of rural welfare.
            Hence, the Social Service programme was deeply aware of the need to relate campus training
            to rural welfare and development.
          </BodyText>
          <BodyText>
            The once small panchayat has grown in the past two decades to a large municipality with a
            resident population of 1, 50,000. The spillover and the steady spread of the city in the
            direction of Tambaram are now rapidly transforming the municipality to a satellite town of
            the metropolis of Madras. Concurrent with and responding to these developments in its
            locale, the College has been recasting its thrusts in the area of extension programmes and
            social services. The earlier emphasis on service orientation is now replaced by
            training-cum-service concept, and the autonomous status granted to the College in 1978 has
            enabled the college to introduce the same in the regular programmes that in earlier years
            had only either the academic or the service component.
          </BodyText>
        </div>
      </section>

      {/* RSL and CIRDS */}
      <section style={{ backgroundColor: "white", padding: "0 24px 60px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <SectionTitle title="The RSL and the CIRDS" />
          <BodyText>
            Recognizing the need for a well-organized unit for rendering social service to villages
            around, the College founded the Rural Service League (RSL) in the late &apos;30s soon
            after moving from Madras to Tambaram. The College community gave all possible support to
            the RSL that had Dr. Malcolm Adiseshiah, Dr M. Sargurudas and Dr Chandran Devanesan as
            its leaders. Many students were motivated over the years for services to the rural
            communities as well as other less privileged and needy sections of the neighborhood
            population.
          </BodyText>
          <BodyText>
            The interest and the service orientation remain with several students long after they leave
            the College. The alumni chapter in UK, with the enthusiastic support of Jonathan Callaghan
            (19), a British Student at the Imperial College of Science and Technology, was engaged in
            raising funds in the early &apos;70s for a project of the Rural Service League. Jonathan
            died in an accident in 1976 and his death spurred his family and friends to enhance the
            scope of the project into a Memorial in his name on campus at Tambaram. The Jonathan
            Callaghan Memorial Centre for Integrated Rural Development Studies (CIRDS) offered from
            1983 a postgraduate diploma programme in rural development studies and this later on led
            to the establishment of a full time master&apos;s programme in social work.
          </BodyText>
        </div>
      </section>

      {/* History of Social Services */}
      <section style={{ backgroundColor: "white", padding: "0 24px 60px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <SectionTitle title="History of Social Services Initiation at MCC, Tambaram" />
          <BodyText>
            In 1940 a serious epidemic of Cholera broke out in the villages around Mappedu. Large
            scale deaths occurred. When the news of the epidemic reached the College, Professor Malcolm
            Adiseshiah with a band of students visited the villages and arranged for burying the dead
            and provided medical relief to others. The academic community was struck for the first time
            with the realities of Rural India. The Rural Service League was formed and the team
            relocated Mappedu village with planned roads and house plots along with a community well.
            From this small beginning the Rural Service League soon adopted 14 villages and provided
            educational facilities for children, conducted adult literacy programmes and extended
            medical aid. The R.S. L. School at Old Tambaram which began as evening classes under a
            mango tree has now good buildings, 30 teachers and over 900 students, and is a Government
            recognized Middle School.
          </BodyText>
          <BodyText>
            The principal Thrust of the College in social service shifted again from Old Tambaram to
            Mappedu village in 1971 when the Family Life Institute (FLI) was established. Today the
            FLI provides medical services, non-formal education, a nursery school, and tailoring and
            envelope-making units.
          </BodyText>
          <BodyText>
            Under the leadership of Mrs. Agnes Martin the Staff wives Fellowship of the College started
            the Maternity and Child Welfare Center in late &apos;30s in West Tambaram and for many
            years to come it was the only hospital in Tambaram. Today it also has a primary school
            called the Oxfam School.
          </BodyText>
        </div>
      </section>

      {/* Additional History */}
      <section style={{ backgroundColor: "white", padding: "0 24px 60px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <BodyText>
            During the mid &apos;40s the Student Christian Movement of the College started a Leprosy
            Clinic at Pammal Village. Bi-weekly visits to the clinic by students and staff continue
            to be organized and about 300 patients benefit from this programme.
          </BodyText>
          <BodyText>
            The College Farm was started in 1965 and today it is a model mixed farm and offering
            training programmes in poultry, sheep rearing, dairy, piggery and agriculture. It extends
            over an area of 60 acres.
          </BodyText>
          <BodyText>
            In 1969 when the Government of India introduced the National Service Scheme for the first
            time, the College was given two units each with 100 students. Today with four units, the
            students participate in a variety of programmes in the evenings during week days and for
            longer periods at weekends and during vacations.
          </BodyText>
          <BodyText>
            Community and Social Service was introduced by the University of Madras under the
            Vice-Chancellorship of Dr. Malcolm Adiseshiah. The College took this programme seriously
            and today all postgraduate and undergraduate students have to put in 60 hours of Community
            and Social Service before being declared eligible for their respective degrees. The
            programmes are an encounter for the students with the social realities of the neighbourhood.
          </BodyText>
          <BodyText>
            The Student Services for the Blind is yet another campus association started in 1956 and
            the students and staff enrolled as members help visually handicapped students in the
            College. With the changing needs of students with disability, it is now called Students
            Service for the Differently Abled.
          </BodyText>
          <BodyText>
            The College has moved on to formal training-cum-service programmes with the establishment
            of the CIRDS. From offering a diploma programme in Integrated Rural Development Studies,
            the Centre is now offering the Master&apos;s Degree in Social Work (MSW).
          </BodyText>
        </div>
      </section>

      {/* MSW Academic Programme */}
      <section style={{ backgroundColor: "white", padding: "0 24px 60px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <SectionTitle title="MSW Academic Programme:" />
          <BodyText>
            The 2-year Master of Social Work (MSW) spread over 4 semesters consists of theory, field
            work and research projects. The Department offers two specializations during the II year
            namely Community Development and Medical &amp; Psychiatric Social Work and a student will
            have to choose one of them at the end of the 1st year.
          </BodyText>
          <BodyText>
            A complete revamping of the curriculum was carried out during the academic year 2015 and
            efforts were made to update the curriculum, provide new papers and also to bring changes
            in the evaluation patterns.
          </BodyText>
        </div>
      </section>

      {/* MSW Programme Consists Of */}
      <section style={{ backgroundColor: "white", padding: "0 24px 60px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <SectionTitle title="The MSW programme consists of:" />
          <ProgrammeBox number={1}>Core Courses, Which Are Mandatory For All Students.</ProgrammeBox>
          <ProgrammeBox number={2}>Supportive Courses That Are Mandatory For All Students.</ProgrammeBox>
          <ProgrammeBox number={3}>Specialization Elective Courses: A Student Can Choose Community Development OR Medical &amp; Psychiatric Social Work.</ProgrammeBox>
          <ProgrammeBox number={4}>General Elective Courses Which A Student Can Choose From Amongst The Courses Approved By The Department.</ProgrammeBox>
          <ProgrammeBox number={5}>Research Project (Mandatory Course) – Dissertation And Viva Voce.</ProgrammeBox>
          <ProgrammeBox number={6}>Field Work, Which Includes Rural Camp And Study Tour; And Block Internship.</ProgrammeBox>
          <ProgrammeBox number={7}>Soft Skills.</ProgrammeBox>
        </div>
      </section>

      {/* Highlights */}
      <section style={{ backgroundColor: "white", padding: "0 24px 60px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <SectionTitle title="Highlights of innovations introduced:" />
          <BulletPoint>New electives were introduced in areas such as Disaster Management, International Social Work, Conflict Resolution &amp; Peace Building, Social Work with Families &amp; Children.</BulletPoint>
          <BulletPoint>Term papers were introduced as ESE for 2 credit papers (Electives) with clear guidelines.</BulletPoint>
          <BulletPoint>A specialization paper on Community Development Practices was introduced.</BulletPoint>
          <BulletPoint>Current and new developments were updated.</BulletPoint>
          <BulletPoint>Concepts related to qualitative research were introduced in the curriculum.</BulletPoint>
        </div>
      </section>

      {/* Concurrent Field Work */}
      <section style={{ backgroundColor: "white", padding: "0 24px 60px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <SectionTitle title="Concurrent Field Work Practicum:" />
          <BodyText>
            Concurrent fieldwork is an integral part of the total training programme in Social Work
            and is an inseparable part of the social work programme. It consists of practicing social
            work skills for intervention under the guidance of professional social workers in selected
            placements. Such placements provide an opportunity to the learner to apply theory to
            practice and gain firsthand experience. Under the concurrent fieldwork there will be no
            classroom lectures on two days in a week and on such days the students will report to the
            placement organizations. Fieldwork will commence with orientation visits to selected social
            work organizations. The organizations selected for fieldwork practicum should have a
            well-defined fieldwork programme, willingness to give facilities for training for students
            and a policy of maintaining high standards of welfare programmes. Fieldwork will be
            organized under competent supervision provided by the field supervisors, who are members
            of the organization staffing. Dual supervision will be adopted in the fieldwork practicum
            where the department faculty and the field supervisors assume responsibilities for the
            supervision of the students through individual weekly conferences and periodical
            consultations with the field supervisors. Two days a week are set aside for concurrent
            fieldwork of 15 hours per week. Each semester shall have a minimum of 24 days of concurrent
            fieldwork spread over 12 weeks with 15 hours per week. Six credits are assigned for
            fieldwork practicum in each semester. A student shall earn a total of 24 credits in 4
            semesters of fieldwork practicum.
          </BodyText>
          <BodyText>
            In addition to this, as part of field work, the student shall attend a rural camp in the
            second semester for a minimum of 10 days and submit a written report after the camp and
            in the III semester the students will go for a study tour to places of social work interest
            for a period not exceeding 10 days and submit a report of the same.
          </BodyText>
        </div>
      </section>

      {/* Block Internship */}
      <section style={{ backgroundColor: "white", padding: "0 24px 60px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <SectionTitle title="Block Internship Programme:" />
          <BodyText>
            Block internship is in addition to concurrent fieldwork practicum. It should occur at the
            end of the 2-year period and it may sometimes lead to students&apos; employment in the
            organization. Completion of block internship is a requirement for course completion. The
            internship should be for 30 days with 8 hours per day totaling to 240 hours with 2 credits.
          </BodyText>
          <BodyText>
            International Block Placement: Students have over the last 5 years explored the
            opportunities to do their block internship aboard either with our international partners
            or through the contacts with INGO&apos;s established during their international study
            tour. These placements have provided them with an international cross-cultural experience
            of social work practice.
          </BodyText>
        </div>
      </section>

      {/* Faculty */}
      <section style={{ backgroundColor: "#F3F7FF", padding: "60px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <h2 className="font-cormorant" style={{ fontSize: "32px", color: "#7B2C3A", marginBottom: "12px" }}>
              Our Faculty
            </h2>
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
        width: "160px",
        padding: "10px 0",
        textAlign: "center",
        fontSize: "13px",
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
