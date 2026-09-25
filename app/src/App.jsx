import React, { useState, useEffect, useRef, useCallback } from "react";
import SmartHireCover from "./covers/SmartHireCover";
import LibraryCover from "./covers/LibraryCover";
import NewsCover from "./covers/NewsCover";
import AnfalCover from "./covers/AnfalCover";
import MadeenaCover from "./covers/MadeenaCover";
import SmartHireProblem from "./covers/SmartHireProblem";
import SmartHireApproach from "./covers/SmartHireApproach";
import SmartHireBuild from "./covers/SmartHireBuild";
import SmartHireResult from "./covers/SmartHireResult";
import LibraryProblem from "./covers/LibraryProblem";
import LibraryApproach from "./covers/LibraryApproach";
import LibraryBuild from "./covers/LibraryBuild";
import LibraryResult from "./covers/LibraryResult";
import NewsProblem from "./covers/NewsProblem";
import NewsApproach from "./covers/NewsApproach";
import NewsBuild from "./covers/NewsBuild";
import NewsResult from "./covers/NewsResult";

// ─── Data ──────────────────────────────────────────────────────────────────
const PERSON = {
  firstName: "Syed Mohammed",
  lastName: "Raqi",
  fullName: "Syed Mohammed Raqi",
  tagline: ["DATA", "AI / ML", "WEB"],
  role: "Data Analyst",
  location: "Bhatkal, India",
  coords: "13.985° N",
  initials: "SR",
  resumeUrl: "./resume.pdf",
};

const HERO = {
  headlineTop: "I BUILD",
  headlineBottom: "WITH DATA.",
  lead: "I'm a Data Science Engineering student passionate about building innovative web applications and intelligent solutions using AI, data, and modern technologies.",
  body: "I focus on creating practical, user-friendly projects that combine clean design, automation, and real-world problem solving.",
};

const SKILLS_TICKER = ["Python", "Data Analysis", "Machine Learning", "Flask", "React.js", "SQL", "NLP", "Data Visualization", "Tailwind CSS", "Generative AI"];

const SKILL_GROUPS = [
  { title: "Programming Languages", items: ["Python", "Java", "JavaScript", "SQL", "HTML5", "CSS3"] },
  { title: "Frameworks & Libraries", items: ["Flask", "React.js", "Tailwind CSS", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"] },
  { title: "AI & Data Science", items: ["Data Analysis", "Exploratory Data Analysis (EDA)", "Machine Learning", "Natural Language Processing", "Data Visualization", "Generative AI"] },
  { title: "Databases", items: ["MySQL", "SQL Workbench"] },
  { title: "Tools & Platforms", items: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Netlify", "Vercel"] },
  { title: "Development", items: ["REST APIs", "Responsive Web Design", "Version Control", "Full-Stack Web Development"] },
];

const PROJECTS = [
  {
    name: "SmartHire AI",
    kicker: "CASE STUDY 01 • AI RECRUITMENT PLATFORM",
    metric: "AI-ASSISTED CANDIDATE SCREENING",
    Cover: SmartHireCover,
    repo: "https://github.com/SyedRaqi",
    live: "",
    stack: ["Python", "Flask", "AI/ML", "MySQL", "Tailwind CSS", "JavaScript"],
    stages: [
      { label: "THE PROBLEM", title: "Screening candidates by hand does not scale.", body: "Recruiters spend most of their time reading through applications and preparing evaluations instead of talking to people, and candidates get little feedback on where they actually stand.", StageCover: SmartHireProblem },
      { label: "THE APPROACH", title: "One platform for screening, preparation and evaluation.", body: "A Flask backend handles candidate data and evaluation logic on top of MySQL, with a modern Tailwind interface that keeps the whole hiring workflow in a single place.", StageCover: SmartHireApproach },
      { label: "THE BUILD", title: "AI-powered evaluation on top of a classic web stack.", body: "AI/ML features score and summarise candidate skills, drive interview preparation, and surface the signal from each application so decisions are based on more than a résumé skim.", StageCover: SmartHireBuild },
      { label: "THE RESULT", title: "A faster, friendlier hiring workflow.", body: "Screening, interview prep and skill evaluation run through one interface, making the process measurably quicker for recruiters and clearer for candidates.", StageCover: SmartHireResult },
    ],
  },
  {
    name: "Integrated Library Management System",
    kicker: "CASE STUDY 02 • FULL-STACK WEB",
    metric: "END-TO-END LIBRARY OPERATIONS",
    Cover: LibraryCover,
    repo: "https://github.com/SyedRaqi",
    live: "",
    stack: ["Python", "Flask", "MySQL", "HTML", "JavaScript", "Tailwind CSS"],
    stages: [
      { label: "THE PROBLEM", title: "Libraries still run on paper registers.", body: "Book records, member registration and issue/return tracking kept on paper are slow to search, easy to get wrong, and impossible to report on.", StageCover: LibraryProblem },
      { label: "THE APPROACH", title: "A structured relational model behind a responsive UI.", body: "A normalised MySQL schema models books, members and transactions, with a Flask backend exposing the operations the library actually performs each day.", StageCover: LibraryApproach },
      { label: "THE BUILD", title: "Authentication, circulation and reporting.", body: "The system covers member registration, authenticated access, issue and return flows, and reporting views — all in a responsive interface that works on any screen.", StageCover: LibraryBuild },
      { label: "THE RESULT", title: "Library operations fully digitised.", body: "Staff can find a book, register a member, or issue and return items in seconds, and reporting comes straight out of the database instead of a ledger.", StageCover: LibraryResult },
    ],
  },
  {
    name: "Cinematic News Web Application",
    kicker: "CASE STUDY 03 • INTERACTIVE FRONTEND",
    metric: "LIVE ON NETLIFY",
    Cover: NewsCover,
    repo: "https://github.com/SyedRaqi",
    live: "",
    stack: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "REST APIs", "Netlify"],
    stages: [
      { label: "THE PROBLEM", title: "News sites all look the same — and read like it.", body: "Traditional news layouts are dense lists of headlines that give no sense of hierarchy, atmosphere or reason to keep reading.", StageCover: NewsProblem },
      { label: "THE APPROACH", title: "Treat the feed as a visual experience.", body: "A cinematic layout with strong imagery, motion and clear hierarchy, built to stay readable and fast across every breakpoint.", StageCover: NewsApproach },
      { label: "THE BUILD", title: "Live articles from news APIs.", body: "Articles are fetched from news APIs and rendered into interactive, responsive views with smooth transitions, then deployed continuously from GitHub to Netlify.", StageCover: NewsBuild },
      { label: "THE RESULT", title: "Daily news worth scrolling through.", body: "An immersive browsing experience that presents the same headlines in a far more engaging way than a conventional news layout.", StageCover: NewsResult },
    ],
  },
];

const SHORTS = [
  { name: "Anfal Enterprises — Business Website", tech: "HTML · CSS · JavaScript", repo: "https://github.com/SyedRaqi", Cover: AnfalCover },
  { name: "Madeena Welfare Society — Organization Website", tech: "HTML · CSS · JavaScript", repo: "https://github.com/SyedRaqi", Cover: MadeenaCover },
];

const EXPERIENCE = [
  {
    kind: "EXPERIENCE",
    period: "2023 — PRESENT",
    title: "Data Science Engineering Projects",
    org: "Independent & Academic Work",
    points: [
      "Built multiple academic and real-world web projects using Python, Flask, JavaScript, Tailwind CSS and MySQL.",
      "Developed websites and digital solutions for Anfal Enterprises and Madeena Welfare Society, focusing on responsive design and user experience.",
      "Applied data analysis, AI/ML, database management and full-stack development across hands-on projects.",
    ],
  },
  {
    kind: "EDUCATION",
    period: "2023 — 2027",
    title: "B.E. Data Science",
    org: "Anjuman Institute of Technology",
    points: ["Focused on artificial intelligence, machine learning, data analytics, software development and modern web technologies."],
  },
  {
    kind: "EDUCATION",
    period: "PASSED OUT 2023",
    title: "Higher Secondary — Grade 12",
    org: "International Indian School, Dammam, Saudi Arabia",
    points: [],
  },
  {
    kind: "EDUCATION",
    period: "PASSED OUT 2021",
    title: "Secondary School — Grade 10",
    org: "Al Muna International School, Dammam, Saudi Arabia",
    points: [],
  },
];

const CONTACT = {
  email: "syedraqi309@gmail.com",
  phone: "+91 70221 29961",
  links: [
    { label: "GITHUB", url: "https://github.com/SyedRaqi" },
    { label: "LINKEDIN", url: "https://www.linkedin.com/in/syed-raqi-4799a72b9/" },
  ],
  footerLine: "SYED MOHAMMED RAQI • DATA ANALYST • BHATKAL, INDIA",
};

const NAV_LINKS = [
  { label: "ABOUT", id: "about" },
  { label: "SKILLS", id: "skills" },
  { label: "WORK", id: "work" },
  { label: "EXPERIENCE", id: "experience" },
  { label: "CONTACT", id: "contact" },
];

// ─── Hooks ──────────────────────────────────────────────────────────────────
function useActiveSection() {
  const [active, setActive] = useState("about");
  useEffect(() => {
    const ids = NAV_LINKS.map(l => l.id);
    const observers = ids.map(id => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach(o => o && o.disconnect());
  }, []);
  return active;
}

function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const handler = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const max = el.scrollHeight - el.clientHeight;
      setProgress(max > 0 ? scrolled / max : 0);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return progress;
}

function useSpotlight() {
  useEffect(() => {
    const handler = (e) => {
      document.documentElement.style.setProperty("--mx", `${e.clientX}px`);
      document.documentElement.style.setProperty("--my", `${e.clientY}px`);
    };
    window.addEventListener("pointermove", handler);
    return () => window.removeEventListener("pointermove", handler);
  }, []);
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("is-visible"); }),
      { rootMargin: "-80px" }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  });
}

// ─── Components ─────────────────────────────────────────────────────────────
function Atmosphere() {
  useSpotlight();
  return (
    <>
      <div className="spotlight" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />
      <div className="vignette" aria-hidden="true" />
      <div className="bar bar--top" aria-hidden="true" />
      <div className="bar bar--bottom" aria-hidden="true" />
    </>
  );
}

function Nav({ active }) {
  return (
    <nav className="nav" aria-label="Main navigation">
      <span className="nav__mark">
        <i className="nav__rec" aria-hidden="true" />
        {PERSON.initials}
      </span>
      <div className="nav__links">
        {NAV_LINKS.map(l => (
          <a key={l.id} href={`#${l.id}`} className={`nav__link${active === l.id ? " is-active" : ""}`}>
            {l.label}
          </a>
        ))}
      </div>
      <a className="nav__link" href={PERSON.resumeUrl} target="_blank" rel="noreferrer">
        Resume ↗
      </a>
    </nav>
  );
}

function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero__glow" aria-hidden="true" />
      <div className="wrap">
        <div className="hero__slate fade-up fade-up-1">
          <span className="slate">Reel 01</span>
          <i aria-hidden="true" style={{ background: "var(--gold)", width: 34, height: 1, display: "inline-block" }} />
          <span className="slate">{PERSON.tagline.join(" · ")}</span>
          <i aria-hidden="true" style={{ background: "var(--gold)", width: 34, height: 1, display: "inline-block" }} />
          <span className="slate gold">Now Showing</span>
        </div>
        <h1 className="hero__title fade-up fade-up-2">
          <span><em>{PERSON.firstName}</em></span>
          <span><em className="outline">{PERSON.lastName}</em></span>
        </h1>
        <div className="hero__sub fade-up fade-up-3">
          <span className="hero__role">{PERSON.role}</span>
          <p className="hero__logline">{HERO.lead}</p>
        </div>
        <div className="hero__actions fade-up fade-up-4">
          <a className="btn btn--gold" href="#work">View the Reel</a>
          <a className="btn" href={`mailto:${CONTACT.email}`}>Get in Touch</a>
        </div>
      </div>
      <div className="hero__foot" aria-hidden="true">
        <span className="slate">{PERSON.location}</span>
        <span className="slate">{PERSON.coords}</span>
      </div>
    </header>
  );
}

function AboutSection() {

  return (
    <section className="scene" id="about">
      <div className="wrap">
        <div className="scene__no" aria-hidden="true">01</div>
        <div className="scene__head">
          <span className="slate">Scene 01 — The Subject</span>
          <i aria-hidden="true" />
        </div>
        <h2 className="title reveal">
          I{" "}
          <em>BUILD</em>
          <br />With Data.
        </h2>
        <div className="about reveal">
          <p className="about__lead">{HERO.lead}</p>
          <div>
            <p className="about__body">{HERO.body}</p>
            <dl className="about__facts">
              {[
                ["Role", PERSON.role],
                ["Location", PERSON.location],
                ["Status", "Open to Opportunities"],
                ["Focus", "AI · Data Science · Full Stack"],
              ].map(([label, val]) => (
                <div key={label} className="about__fact">
                  <dt className="slate">{label}</dt>
                  <dd><b>{val}</b></dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="ticker reveal" aria-label="Skills list">
          <div className="ticker__track" aria-hidden="true">
            {[...SKILLS_TICKER, ...SKILLS_TICKER].map((s, i) => (
              <span key={i} className="ticker__item">{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section className="scene" id="skills">
      <div className="wrap">
        <div className="scene__no" aria-hidden="true">02</div>
        <div className="scene__head">
          <span className="slate">Scene 02 — The Crew</span>
          <i aria-hidden="true" />
        </div>
        <h2 className="title reveal">The <em>Stack.</em></h2>
        <div className="dept reveal">
          {SKILL_GROUPS.map(g => (
            <div key={g.title} className="dept__col">
              <h3>{g.title}</h3>
              <ul className="dept__list">
                {g.items.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ project, index }) {
  const [beat, setBeat] = useState(0);
  const { Cover } = project;
  const StageCover = project.stages[beat].StageCover || Cover;

  return (
    <article className="feature reveal">
      <div className="feature__head">
        <div>
          <span className="slate">{project.kicker}</span>
          <h3 className="feature__name">{project.name}</h3>
        </div>
        <span className="slate gold">{project.metric}</span>
      </div>
      <div className="feature__body">
        {/* Image frame with SVG cover */}
        <div>
          <div className="frame">
            <div className="frame__bar frame__bar--t" aria-hidden="true" />
            <StageCover />
            <div className="frame__bar frame__bar--b" aria-hidden="true" />
            <span className="frame__tag">{String(index + 1).padStart(2, "0")}</span>
            <span className="frame__tc">CASE STUDY</span>
          </div>

          {/* Chapter tabs */}
          <div className="chapters" role="tablist" aria-label={`${project.name} case study chapters`} style={{ marginTop: "1rem" }}>
            {project.stages.map((s, i) => (
              <button
                key={i}
                className="chapter"
                role="tab"
                aria-selected={beat === i}
                onClick={() => setBeat(i)}
              >
                {s.label.replace("THE ", "")}
              </button>
            ))}
          </div>
          <div className="beat" role="tabpanel">
            <span className="slate">{project.stages[beat].label}</span>
            <h4>{project.stages[beat].title}</h4>
            <p>{project.stages[beat].body}</p>
          </div>
        </div>

        {/* Right: stack + links */}
        <div>
          <div className="crew" aria-label="Tech stack">
            {project.stack.map(t => <span key={t}>{t}</span>)}
          </div>
          <div className="feature__links" style={{ marginTop: "1.4rem" }}>
            {project.repo && (
              <a className="btn" href={project.repo} target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
            )}
            {project.live && (
              <a className="btn btn--gold" href={project.live} target="_blank" rel="noreferrer">
                Live Site ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

function WorkSection() {
  return (
    <section className="scene" id="work">
      <div className="wrap">
        <div className="scene__no" aria-hidden="true">03</div>
        <div className="scene__head">
          <span className="slate">Scene 03 — The Features</span>
          <i aria-hidden="true" />
        </div>
        <h2 className="title reveal">Selected <em>Work.</em></h2>

        {PROJECTS.map((p, i) => <FeatureCard key={p.name} project={p} index={i} />)}

        {/* Shorts */}
        <div className="shorts reveal">
          <div className="scene__head" style={{ marginBottom: "0" }}>
            <span className="slate">Also</span>
            <i aria-hidden="true" />
          </div>
          {SHORTS.map(s => (
            <a key={s.name} className="short" href={s.repo} target="_blank" rel="noreferrer">
              <div style={{ flexShrink: 0, width: 110, height: 64, border: "1px solid var(--line)", overflow: "hidden" }}>
                <s.Cover />
              </div>
              <div style={{ flex: 1 }}>
                <div className="short__name">{s.name}</div>
                <span className="slate">{s.tech}</span>
              </div>
              <span className="slate" style={{ flexShrink: 0 }}>↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section className="scene" id="experience">
      <div className="wrap">
        <div className="scene__no" aria-hidden="true">04</div>
        <div className="scene__head">
          <span className="slate">Scene 04 — Production History</span>
          <i aria-hidden="true" />
        </div>
        <h2 className="title reveal">The <em>Work.</em></h2>
        <div className="reel reveal">
          {EXPERIENCE.map((e, i) => (
            <div key={i} className="reel__row">
              <div className="reel__when">
                <span className="slate">{e.kind}</span>
                <span className="slate gold">{e.period}</span>
              </div>
              <div>
                <div className="reel__title">{e.title}</div>
                <div className="reel__org">{e.org}</div>
                {e.points.length > 0 && (
                  <ul className="reel__points">
                    {e.points.map((pt, j) => <li key={j}>{pt}</li>)}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const boxRef = useRef(null);
  const handleMouseMove = useCallback((e) => {
    const el = boxRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    el.style.transform = `perspective(900px) rotateY(${dx * 10}deg) rotateX(${-dy * 7}deg) scale3d(1.02,1.02,1.02)`;
  }, []);
  const handleMouseLeave = useCallback(() => {
    if (boxRef.current) boxRef.current.style.transform = 'perspective(900px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)';
  }, []);

  return (
    <section className="scene" id="contact">
      <div className="wrap">
        <div className="scene__no" aria-hidden="true">05</div>
        <div className="scene__head reveal">
          <span className="slate">Scene 05 — The Call</span>
          <i aria-hidden="true" />
        </div>

        {/* 3D floating stage */}
        <div className="contact3d reveal">
          {/* ambient glow rings */}
          <div className="c3d__ring c3d__ring--1" aria-hidden="true" />
          <div className="c3d__ring c3d__ring--2" aria-hidden="true" />
          <div className="c3d__ring c3d__ring--3" aria-hidden="true" />

          {/* tilt card */}
          <div
            className="c3d__card"
            ref={boxRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* inner gloss */}
            <div className="c3d__gloss" aria-hidden="true" />

            {/* corner brackets */}
            <span className="c3d__corner c3d__corner--tl" aria-hidden="true" />
            <span className="c3d__corner c3d__corner--tr" aria-hidden="true" />
            <span className="c3d__corner c3d__corner--bl" aria-hidden="true" />
            <span className="c3d__corner c3d__corner--br" aria-hidden="true" />

            <p className="c3d__kicker slate">Ready to roll?</p>
            <h2 className="c3d__title">
              LET'S<br />
              <em>WORK.</em>
            </h2>
            <a className="c3d__mail" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>

            <div className="c3d__grid">
              <div className="c3d__cell">
                <span className="slate">Phone</span>
                <a href={`tel:${CONTACT.phone}`}>{CONTACT.phone}</a>
              </div>
              {CONTACT.links.filter(l => l.label !== "LINKEDIN").map(l => (
                <div key={l.label} className="c3d__cell">
                  <span className="slate">{l.label}</span>
                  <a href={l.url} target="_blank" rel="noreferrer">Visit Profile ↗</a>
                </div>
              ))}
            </div>
            <div className="c3d__social-btns">
              <a
                href="https://www.linkedin.com/in/syed-raqi-4799a72b9/"
                target="_blank"
                rel="noreferrer"
                className="c3d__linkedin"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn ↗
              </a>
              <a
                href="https://github.com/SyedRaqi"
                target="_blank"
                rel="noreferrer"
                className="c3d__linkedin"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub ↗
              </a>
            </div>
          </div>
        </div>

        <footer className="endcard">
          <span className="slate">{CONTACT.footerLine}</span>
          <a href="#top" className="slate" style={{ transition: "color .3s" }}
            onMouseEnter={e => e.target.style.color = "var(--gold)"}
            onMouseLeave={e => e.target.style.color = ""}>
            Back to Top ↑
          </a>
        </footer>
      </div>
    </section>
  );
}

// ─── App ────────────────────────────────────────────────────────────────────
export default function App() {
  const active = useActiveSection();
  const progress = useScrollProgress();
  useReveal();

  return (
    <>
      <Atmosphere />
      <div className="progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
      <Nav active={active} />
      <main>
        <Hero />
        <AboutSection />
        <SkillsSection />
        <WorkSection />
        <ExperienceSection />
        <ContactSection />
      </main>
    </>
  );
}
