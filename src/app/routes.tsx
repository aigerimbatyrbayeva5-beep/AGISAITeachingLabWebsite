import { FormEvent, ReactNode, useEffect, useMemo, useState } from "react"
import {
  Link,
  NavLink,
  Outlet,
  createBrowserRouter,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router"
import { Practice, Subject, practices, sourceRules, subjects } from "../data"
import { Language, useI18n } from "../i18n"

const AI_TOOLS_LIBRARY_URL =
  "https://aigerimbatyrbayeva5-beep.github.io/AGISAIToolsLibrary/"
const AI_POLICY_URL =
  "https://gardenschoolastana-my.sharepoint.com/personal/a_batyrbayeva_ags_edu_kz/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fa_batyrbayeva_ags_edu_kz%2FDocuments%2F%D0%98%D0%98%20%D0%9F%D0%BE%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D0%B0%20AGIS%2FAGIS_AI_Use_Policy%202026-27%2Epdf&parent=%2Fpersonal%2Fa_batyrbayeva_ags_edu_kz%2FDocuments%2F%D0%98%D0%98%20%D0%9F%D0%BE%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D0%B0%20AGIS&ga=1"

type IconName = "arrow" | "book" | "briefcase" | "check" | "chevron" | "copy" | "filter" | "globe" | "home" | "light" | "menu" | "reset" | "search" | "shield" | "spark" | "users" | "x"

function Icon({ name, size = 20 }: { name: IconName, size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    book: (
      <>
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
      </>
    ),
    briefcase: (
      <>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    chevron: <path d="m9 18 6-6-6-6" />,
    copy: (
      <>
        <rect x="9" y="9" width="13" height="13" rx="2" />
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
      </>
    ),
    filter: <path d="M4 5h16M7 12h10M10 19h4" />,
    globe: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
      </>
    ),
    home: (
      <>
        <path d="m3 11 9-8 9 8" />
        <path d="M5 10v10h14V10M9 20v-6h6v6" />
      </>
    ),
    light: (
      <>
        <path d="M9 18h6M10 22h4" />
        <path d="M8.5 15.5A7 7 0 1 1 15.5 15.5c-.9.7-1.5 1.4-1.5 2.5h-4c0-1.1-.6-1.8-1.5-2.5Z" />
      </>
    ),
    menu: <path d="M4 6h16M4 12h16M4 18h16" />,
    reset: (
      <>
        <path d="M3 12a9 9 0 1 0 3-6.7L3 8" />
        <path d="M3 3v5h5" />
      </>
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </>
    ),
    shield: (
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    spark: (
      <>
        <path d="m12 3-1.3 3.7L7 8l3.7 1.3L12 13l1.3-3.7L17 8l-3.7-1.3L12 3Z" />
        <path d="m5 14-.8 2.2L2 17l2.2.8L5 20l.8-2.2L8 17l-2.2-.8L5 14ZM19 13l-.6 1.4L17 15l1.4.6L19 17l.6-1.4L21 15l-1.4-.6L19 13Z" />
      </>
    ),
    users: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" />
      </>
    ),
    x: <path d="M18 6 6 18M6 6l12 12" />,
  }
  return (
    <svg
      aria-hidden="true"
      className="icon"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  )
}

function Brand() {
  return (
    <Link className="brand" to="/" aria-label="AGIS AI Teaching Lab home">
      <img
        src="/assets/agis-logo.png"
        alt="Astana Garden International School floral logo"
      />
      <span>
        <strong>ASTANA GARDEN</strong>
        <small>INTERNATIONAL SCHOOL</small>
      </span>
    </Link>
  )
}

function Header() {
  const navigate = useNavigate()
  const location = useLocation()
  const { language, setLanguage, t } = useI18n()
  const [query, setQuery] = useState("")
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])
  function submit(event: FormEvent) {
    event.preventDefault()
    navigate(
      `/activities${
        query.trim() ? `?q=${encodeURIComponent(query.trim())}` : ""
      }`,
    )
  }
  return (
    <header className="site-header">
      <div className="header-inner">
        <Brand />
        <button
          className="menu-toggle"
          aria-label={menuOpen ? t("closeMenu") : t("menu")}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <Icon name={menuOpen ? "x" : "menu"} />
        </button>
        <nav className={menuOpen ? "open" : ""} aria-label="Main navigation">
          <NavLink to="/" end>
            <Icon name="home" size={18} />
            {t("home")}
          </NavLink>
          <NavLink to="/activities">
            <Icon name="spark" size={18} />
            {t("activities")}
          </NavLink>
          <NavLink to="/practices">
            <Icon name="light" size={18} />
            {t("practices")}
          </NavLink>
          <NavLink to="/tools">
            <Icon name="briefcase" size={18} />
            {t("tools")}
          </NavLink>
          <NavLink to="/guide">
            <Icon name="book" size={18} />
            {t("guide")}
          </NavLink>
          <a href={AI_TOOLS_LIBRARY_URL} target="_blank" rel="noopener noreferrer">
            <Icon name="globe" size={18} />
            {t("toolsLibrary")}
          </a>
        </nav>
        <form className="header-search" onSubmit={submit} role="search">
          <Icon name="search" size={19} />
          <input
            aria-label={t("search")}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t("search")}
          />
        </form>
        <LanguageSelector
          language={language}
          setLanguage={setLanguage}
          className="header-languages"
        />
      </div>
    </header>
  )
}

function LanguageSelector({
  language,
  setLanguage,
  className = "",
}: {
  language: Language
  setLanguage: (language: Language) => void
  className?: string
}) {
  return (
    <div className={`language-selector ${className}`} aria-label="Language">
      {(["en", "ru", "kk"] as Language[]).map((item) => (
        <button
          key={item}
          className={language === item ? "active" : ""}
          aria-pressed={language === item}
          onClick={() => setLanguage(item)}
        >
          {item === "kk" ? "KZ" : item.toUpperCase()}
        </button>
      ))}
    </div>
  )
}

function Footer() {
  const { language, setLanguage, t } = useI18n()
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <img src="/assets/agis-logo.png" alt="" />
          <div>
            <strong>AGIS AI Teaching Lab</strong>
            <p>{t("heroDescription")}</p>
          </div>
        </div>
        <div className="footer-links">
          <strong>{t("exploreFooter")}</strong>
          <Link to="/activities">{t("activities")}</Link>
          <Link to="/tools">{t("tools")}</Link>
          <Link to="/guide">{t("guide")}</Link>
          <a href={AI_TOOLS_LIBRARY_URL} target="_blank" rel="noopener noreferrer">
            {t("toolsLibrary")}
          </a>
          <a href={AI_POLICY_URL} target="_blank" rel="noopener noreferrer">
            {t("policyLink")}
          </a>
        </div>
        <div>
          <strong>{t("contactTitle")}</strong>
          <p>Aigerim Batyrbayeva</p>
          <a href="mailto:a.batyrbayeva@ags.edu.kz">
            a.batyrbayeva@ags.edu.kz
          </a>
          <p>{t("contactDescription")}</p>
        </div>
        <div>
          <strong>{t("reminder")}</strong>
          <p>
            AI does the preparation; students do the thinking. Check everything
            AI produces before students see it.
          </p>
          <LanguageSelector language={language} setLanguage={setLanguage} />
        </div>
      </div>
      <div className="footer-bottom">
        Astana Garden International School · Content prepared by Aigerim
        Batyrbayeva, AI Coordinator
      </div>
    </footer>
  )
}

function Root() {
  const location = useLocation()
  const { language, t } = useI18n()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [location.pathname])
  return (
    <>
      <Header />
      {language !== "en" && (
        <div className="translation-review" role="status">
          {t("translationReview")}
        </div>
      )}
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

const subjectMeta: Record<Subject, {
  image: string
  label: string
  description: string
}> = {
  Science: {
    image: "/assets/subject-science.jpg",
    label: "Science",
    description: "Experiments, models, simulations, inquiry",
  },
  Mathematics: {
    image: "/assets/subject-mathematics.jpg",
    label: "Mathematics",
    description: "Problem-solving, patterns, error analysis",
  },
  "Language Acquisition": {
    image: "/assets/subject-languages.jpg",
    label: "Language Acquisition",
    description: "Conversation, writing, reading, role-play",
  },
  Humanities: {
    image: "/assets/subject-humanities.jpg",
    label: "Humanities",
    description: "Debates, historical inquiry, case studies",
  },
}

function BeeMascot() {
  return (
    <div className="bee-stage">
      <img
        src="/assets/agis-bee-mascot.png"
        alt="Friendly 3D bee mascot in a green school hoodie holding a tablet"
      />
    </div>
  )
}

function HomePage() {
  const { t } = useI18n()
  const homeSubjects: Subject[] = [
    "Science",
    "Mathematics",
    "Humanities",
    "Language Acquisition",
  ]
  return (
    <>
      <section className="hero-shell">
        <div className="hero">
          <div className="hex h1" />
          <div className="hex h2" />
          <div className="hex h3" />
          <div className="hero-copy">
            <p className="eyebrow">{t("heroEyebrow")}</p>
            <h1>
              {t("heroTitle")}
              <br />
              <span>{t("heroTitleAccent")}</span>
            </h1>
            <p className="hero-description">{t("heroDescription")}</p>
            <div className="hero-actions">
              <Link className="btn primary" to="/activities">
                <Icon name="search" />
                {t("explore")}
                <Icon name="arrow" />
              </Link>
              <a className="btn secondary" href="#how-it-works">
                <Icon name="light" />
                {t("how")}
              </a>
            </div>
          </div>
          <BeeMascot />
          <div className="hero-photo">
            <img
              src="/assets/agis-school.png"
              alt="Original architectural rendering of Astana Garden International School"
            />
            <div className="photo-badge">
              Curious
              <br />
              Creators
              <br />
              Responsible
              <br />
              Global Citizens
            </div>
          </div>
        </div>
      </section>

      <section
        className="metrics"
        id="how-it-works"
        aria-label="Library overview"
      >
        <div>
          <span className="metric-icon">
            <Icon name="users" />
          </span>
          <p>
            <strong>4</strong>
            <b>{t("departments")}</b>
            <small>Science · Mathematics · Humanities · Languages</small>
          </p>
        </div>
        <div>
          <span className="metric-icon">
            <Icon name="book" />
          </span>
          <p>
            <strong>20</strong>
            <b>{t("teachingPractices")}</b>
            <small>{t("classroomReady")}</small>
          </p>
        </div>
        <div>
          <span className="metric-icon letters">ib</span>
          <p>
            <strong>{t("ibAligned")}</strong>
            <b>Learner Profile & ATL skills</b>
          </p>
        </div>
        <div>
          <span className="metric-icon">
            <Icon name="shield" />
          </span>
          <p>
            <strong>{t("responsibleAi")}</strong>
            <b>{t("responsibleSubtitle")}</b>
          </p>
        </div>
      </section>

      <section className="page-section">
        <SectionHeading
          title={t("exploreSubject")}
          link="/activities"
          linkText="View all activities"
        />
        <div className="subject-grid">
          {homeSubjects.map((subject) => {
            const meta = subjectMeta[subject]
            return (
              <Link
                className={`subject-card ${subject.toLowerCase().replace(/ /g, "-")}`}
                key={subject}
                to={`/activities?subject=${encodeURIComponent(subject)}`}
              >
                <img src={meta.image} alt="" />
                <span className="subject-tint" />
                <div>
                  <span className="round-icon">
                    <Icon
                      name={
                        subject === "Humanities"
                          ? "globe"
                          : subject === "Language Acquisition"
                            ? "users"
                            : subject === "Science"
                              ? "spark"
                              : "light"
                      }
                    />
                  </span>
                  <h3>{meta.label}</h3>
                  <p>{meta.description}</p>
                </div>
                <span className="card-arrow">
                  <Icon name="arrow" />
                </span>
              </Link>
            )
          })}
        </div>
      </section>

      <section className="page-section practice-browse">
        <SectionHeading
          title={t("browsePractice")}
          link="/practices"
          linkText="View all practices"
        />
        <div className="practice-pills">
          {practices.slice(0, 8).map((practice) => (
            <Link key={practice.id} to={`/practices/${practice.slug}`}>
              <span>{String(practice.id).padStart(2, "0")}</span>
              {practice.title}
            </Link>
          ))}
        </div>
      </section>

      <section className="featured-section page-section">
        <div className="featured-title">
          <div>
            <p className="eyebrow">{t("startHere")}</p>
            <h2>{t("featured")}</h2>
            <p>{t("featuredDescription")}</p>
          </div>
          <Link className="btn secondary" to="/activities">
            {t("exploreAll")}
            <Icon name="arrow" />
          </Link>
        </div>
        <div className="featured-grid">
          {[practices[0], practices[10], practices[19]].map((practice) => (
            <PracticeCard practice={practice} key={practice.id} />
          ))}
        </div>
      </section>
      <section className="library-promo page-section">
        <div>
          <span className="promo-icon"><Icon name="spark" size={30} /></span>
          <p className="eyebrow">AGIS DIGITAL RESOURCE</p>
          <h2>{t("libraryTitle")}</h2>
          <p>{t("libraryDescription")}</p>
        </div>
        <a
          className="btn primary"
          href={AI_TOOLS_LIBRARY_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("openLibrary")} <Icon name="arrow" />
        </a>
      </section>
      <section className="contact-strip page-section">
        <div>
          <p className="eyebrow">CONTACT</p>
          <h2>{t("contactTitle")}</h2>
          <strong>Aigerim Batyrbayeva</strong>
          <p>{t("contactDescription")}</p>
        </div>
        <a className="btn secondary" href="mailto:a.batyrbayeva@ags.edu.kz">
          a.batyrbayeva@ags.edu.kz
        </a>
      </section>
    </>
  )
}

function SectionHeading({
  title,
  link,
  linkText,
}: {
  title: string
  link: string
  linkText: string
}) {
  return (
    <div className="section-heading">
      <h2>{title}</h2>
      <Link to={link}>
        {linkText}
        <Icon name="arrow" size={18} />
      </Link>
    </div>
  )
}

function PracticeCard({ practice }: { practice: Practice }) {
  const tags = subjects.filter(
    (s) => !practice.examples[s].startsWith("Not the best fit"),
  )
  return (
    <article className="practice-card">
      <div className="card-top">
        <span className="practice-number">
          {String(practice.id).padStart(2, "0")}
        </span>
        <span className="ai-role">{practice.aiRole}</span>
      </div>
      <p className="card-kicker">{practice.title}</p>
      <h3>{practice.signature}</h3>
      <p className="card-summary">{practice.summary}</p>
      <div className="badges">
        <span>{practice.grades}</span>
        <span>{practice.duration}</span>
      </div>
      <div className="tag-row">
        {tags.map((tag) => (
          <span key={tag}>{subjectMeta[tag].label}</span>
        ))}
      </div>
      <div className="card-tools">
        <strong>Tools</strong>
        <p>{practice.tools.map((tool) => tool.name).join(" · ")}</p>
      </div>
      <Link className="card-link" to={`/practices/${practice.slug}`}>
        View practice <Icon name="arrow" size={18} />
      </Link>
    </article>
  )
}

function FilterSelect({
  label,
  value,
  options,
  onChange,
}: {
  label: string
  value: string
  options: string[]
  onChange: (value: string) => void
}) {
  return (
    <label className="filter-field">
      <span>{label}</span>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="">All</option>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  )
}

function LibraryPage() {
  const [params, setParams] = useSearchParams()
  const [query, setQuery] = useState(params.get("q") || "")
  const [subject, setSubject] = useState(params.get("subject") || "")
  const [grade, setGrade] = useState("")
  const [tool, setTool] = useState("")
  const [atl, setAtl] = useState("")
  const [profile, setProfile] = useState("")
  const toolOptions = useMemo(
    () =>
      [...new Set(practices.flatMap((p) => p.tools.map((t) => t.name)))].sort(),
    [],
  )
  const atlOptions = useMemo(
    () =>
      [
        ...new Set(
          practices.flatMap((p) =>
            p.atl.split(", ").map((x) => x.replace(/\s*\(.*/, "")),
          ),
        ),
      ].sort(),
    [],
  )
  const profileOptions = useMemo(
    () => [...new Set(practices.flatMap((p) => p.profile.split(", ")))].sort(),
    [],
  )
  const filtered = practices.filter((practice) => {
    const haystack = JSON.stringify(practice).toLowerCase()
    const gradeNumber = Number(grade)
    const gradeMatch =
      !grade ||
      (() => {
        const [min, max] = practice.grades.match(/\d+/g)?.map(Number) || []
        return gradeNumber >= min && gradeNumber <= max
      })()
    return (
      (!query || haystack.includes(query.toLowerCase())) &&
      (!subject ||
        !practice.examples[(subject as Subject)].startsWith(
          "Not the best fit",
        )) &&
      gradeMatch &&
      (!tool || practice.tools.some((item) => item.name === tool)) &&
      (!atl || practice.atl.includes(atl)) &&
      (!profile || practice.profile.split(", ").includes(profile))
    )
  })
  function reset() {
    setQuery("")
    setSubject("")
    setGrade("")
    setTool("")
    setAtl("")
    setProfile("")
    setParams({})
  }
  return (
    <div className="library-page">
      <PageIntro
        eyebrow="ACTIVITY LIBRARY"
        title="20 ways to make AI useful in learning"
        description="Search the complete, source-derived practice bank. Combine filters to find the right fit for your class."
      />
      <div className="library-layout">
        <aside className="filters">
          <div className="filter-heading">
            <h2>
              <Icon name="filter" />
              Filters
            </h2>
            <button onClick={reset}>
              <Icon name="reset" size={16} />
              Reset
            </button>
          </div>
          <label className="filter-field">
            <span>Search</span>
            <div className="input-wrap">
              <Icon name="search" size={18} />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Title, topic, tool..."
              />
            </div>
          </label>
          <FilterSelect
            label="Department"
            value={subject}
            onChange={setSubject}
            options={[...subjects]}
          />
          <FilterSelect
            label="Grade"
            value={grade}
            onChange={setGrade}
            options={["6", "7", "8", "9", "10", "11", "12"]}
          />
          <FilterSelect
            label="AI tool"
            value={tool}
            onChange={setTool}
            options={toolOptions}
          />
          <FilterSelect
            label="ATL skill"
            value={atl}
            onChange={setAtl}
            options={atlOptions}
          />
          <FilterSelect
            label="Learner Profile"
            value={profile}
            onChange={setProfile}
            options={profileOptions}
          />
        </aside>
        <section className="results">
          <div className="results-head">
            <p>
              <strong>{filtered.length}</strong> of 20 practices
            </p>
            {query && <span>Search: “{query}”</span>}
          </div>
          {filtered.length ? (
            <div className="practice-grid">
              {filtered.map((practice) => (
                <PracticeCard practice={practice} key={practice.id} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <Icon name="search" size={34} />
              <h2>No practices match</h2>
              <p>Try removing a filter or searching a broader term.</p>
              <button className="btn primary" onClick={reset}>
                Reset filters
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  )
}

function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <section className="page-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  )
}

const officialToolLinks: Record<string, string> = {
  ChatGPT: "https://chatgpt.com/",
  Gemini: "https://gemini.google.com/",
  Claude: "https://claude.ai/",
  MagicSchool: "https://www.magicschool.ai/",
  MagicStudent: "https://www.magicschool.ai/magicstudent",
  SchoolAI: "https://schoolai.com/",
  Khanmigo: "https://www.khanmigo.ai/",
  Diffit: "https://www.diffit.me/",
  Canva: "https://www.canva.com/",
  PhET: "https://phet.colorado.edu/",
  Desmos: "https://www.desmos.com/",
  GeoGebra: "https://www.geogebra.org/",
  Perplexity: "https://www.perplexity.ai/",
  "Google Arts & Culture": "https://artsandculture.google.com/",
  "Google Forms": "https://docs.google.com/forms/",
  "Google Sheets": "https://sheets.google.com/",
  Curipod: "https://curipod.com/",
  "Brisk Teaching": "https://www.briskteaching.com/",
  Snorkl: "https://snorkl.app/",
  "Kahoot!": "https://kahoot.com/",
  Gimkit: "https://www.gimkit.com/",
  Wayground: "https://wayground.com/",
  Quizlet: "https://quizlet.com/",
  NotebookLM: "https://notebooklm.google.com/",
  Suno: "https://suno.com/",
  ElevenLabs: "https://elevenlabs.io/",
  Genially: "https://genially.com/",
  "Google Teachable Machine": "https://teachablemachine.withgoogle.com/",
  "Quick, Draw!": "https://quickdraw.withgoogle.com/",
}

function ToolNameLinks({ name }: { name: string }) {
  const matches = Object.entries(officialToolLinks)
    .filter(([tool]) => {
      const escaped = tool.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
      return new RegExp(`(^|[^a-z])${escaped}([^a-z]|$)`, "i").test(name)
    })
    .sort(([a], [b]) => name.indexOf(a) - name.indexOf(b))
  if (!matches.length) return <strong>{name}</strong>
  return (
    <div className="tool-name-links">
      {matches.map(([tool, url]) => (
        <a key={tool} href={url} target="_blank" rel="noopener noreferrer">
          {tool} <Icon name="arrow" size={13} />
        </a>
      ))}
    </div>
  )
}

function DetailPage() {
  const { slug } = useParams()
  const practice = practices.find((item) => item.slug === slug)
  const [tab, setTab] = useState<Subject>("Science")
  const [copied, setCopied] = useState(false)
  if (!practice) return <NotFound />
  const related = practices
    .filter(
      (item) =>
        item.id !== practice.id &&
        (item.atl
          .split(", ")
          .some((skill) =>
            practice.atl.includes(skill.replace(/\s*\(.*/, "")),
          ) ||
          item.tools.some((tool) =>
            practice.tools.some((t) => t.name === tool.name),
          )),
    )
    .slice(0, 3)
  async function copyPrompt() {
    if (!practice?.prompt) return
    await navigator.clipboard.writeText(practice.prompt)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }
  return (
    <div className="detail-page">
      <div className="breadcrumbs">
        <Link to="/">Home</Link>
        <Icon name="chevron" size={15} />
        <Link to="/activities">Practices</Link>
        <Icon name="chevron" size={15} />
        <span>{practice.title}</span>
      </div>
      <header className="detail-hero">
        <div>
          <span className="practice-number large">
            {String(practice.id).padStart(2, "0")}
          </span>
          <p className="eyebrow">{practice.title}</p>
          <h1>{practice.signature}</h1>
          <p>{practice.summary}</p>
          <div className="badges large">
            <span>{practice.aiRole}</span>
            <span>{practice.grades}</span>
            <span>{practice.duration}</span>
          </div>
        </div>
        <div className="detail-mark">
          <Icon name="light" size={64} />
          <span>AI role</span>
          <strong>{practice.aiRole}</strong>
        </div>
      </header>

      <div className="detail-content">
        <div className="detail-main">
          <section>
            <p className="section-label">HOW AI IS USED</p>
            <h2>AI supports the setup. Students lead the thinking.</h2>
            <p className="lead">{practice.summary}</p>
          </section>
          <section className="why-card">
            <span>
              <Icon name="spark" />
            </span>
            <div>
              <p className="section-label">WHY IT WORKS</p>
              <p>{practice.why}</p>
            </div>
          </section>
          <section>
            <p className="section-label">TEACHER STEPS</p>
            <h2>Run this activity</h2>
            <div className="timeline">
              {practice.steps.map((step, index) => (
                <div key={step}>
                  <span>{index + 1}</span>
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </section>
          <section>
            <p className="section-label">SUBJECT EXAMPLES</p>
            <h2>Use it across departments</h2>
            <div className="tabs" role="tablist" aria-label="Subject examples">
              {subjects.map((subject) => (
                <button
                  role="tab"
                  aria-selected={tab === subject}
                  className={tab === subject ? "active" : ""}
                  key={subject}
                  onClick={() => setTab(subject)}
                >
                  {subjectMeta[subject].label}
                </button>
              ))}
            </div>
            <div className="tab-panel" role="tabpanel">
              <span className="round-icon">
                <Icon name="book" />
              </span>
              <p>{practice.examples[tab]}</p>
            </div>
          </section>
          <section>
            <p className="section-label">MORE IDEAS</p>
            <h2>Extend the practice</h2>
            {practice.moreIdeas.map((idea) => (
              <p className="idea" key={idea}>
                <Icon name="arrow" size={18} />
                {idea}
              </p>
            ))}
          </section>
          <section className="prompt-card">
            <div className="prompt-head">
              <div>
                <p className="section-label">PROMPT TO COPY</p>
                <h2>Reusable classroom prompt</h2>
              </div>
              {practice.prompt && (
                <button onClick={copyPrompt}>
                  <Icon name={copied ? "check" : "copy"} />
                  {copied ? "Copied" : "Copy prompt"}
                </button>
              )}
            </div>
            {practice.prompt ? (
              <blockquote>{practice.prompt}</blockquote>
            ) : (
              <p className="no-prompt">
                No reusable prompt is provided in the source document for this
                practice.
              </p>
            )}
          </section>
          <section className="safety-card">
            <Icon name="shield" size={30} />
            <div>
              <h2>Keep it safe and honest</h2>
              <p>{practice.safety}</p>
            </div>
          </section>
        </div>
        <aside className="detail-side">
          <section>
            <p className="section-label">RECOMMENDED TOOLS</p>
            {practice.tools.map((tool) => (
              <div className="tool-mini" key={tool.name}>
                <ToolNameLinks name={tool.name} />
                <p>{tool.role}</p>
              </div>
            ))}
            <Link to="/tools">
              Browse all tools <Icon name="arrow" size={17} />
            </Link>
          </section>
          <section>
            <p className="section-label">IB ALIGNMENT</p>
            <strong>ATL skills</strong>
            <div className="tag-row">
              {practice.atl.split(", ").map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <strong>Learner Profile</strong>
            <div className="tag-row gold">
              {practice.profile.split(", ").map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </section>
        </aside>
      </div>
      <section className="related page-section">
        <SectionHeading
          title="Related practices"
          link="/activities"
          linkText="Back to library"
        />
        <div className="featured-grid">
          {related.map((item) => (
            <PracticeCard practice={item} key={item.id} />
          ))}
        </div>
      </section>
    </div>
  )
}

type ToolEntry = {
  name: string
  summary: string
  category: string
  url?: string
  match: string[]
  featured?: boolean
}
const toolCatalog: ToolEntry[] = [
  {
    name: "MagicSchool / MagicStudent",
    summary:
      "Teacher generators; MagicStudent rooms let students use AI under your rules while you see every chat.",
    category: "Teacher preparation",
    url: "https://www.magicschool.ai/",
    match: ["MagicSchool", "MagicStudent"],
    featured: true,
  },
  {
    name: "ChatGPT",
    summary: "General assistant: questions, drafts, debate and data ideas.",
    category: "Teacher preparation",
    url: "https://chatgpt.com/",
    match: ["ChatGPT"],
  },
  {
    name: "Gemini",
    summary:
      "General assistant; Canvas builds simulations and Gems are reusable custom bots.",
    category: "Teacher preparation",
    url: "https://gemini.google.com/",
    match: ["Gemini"],
  },
  {
    name: "Claude",
    summary:
      "Builds interactive tools and simulations; useful for precise planted errors. Adults 18+ only.",
    category: "Teacher preparation",
    url: "https://claude.ai/",
    match: ["Claude"],
  },
  {
    name: "Diffit",
    summary: "Levels texts, PDFs and videos; translates into 50+ languages.",
    category: "Teacher preparation",
    url: "https://web.diffit.me/",
    match: ["Diffit"],
  },
  {
    name: "SchoolAI",
    summary: "Student rooms and personas where teachers can see chats.",
    category: "Student interaction",
    url: "https://schoolai.com/",
    match: ["SchoolAI"],
  },
  {
    name: "Khanmigo",
    summary:
      "AI tutor by Khan Academy. The source notes free access is limited to US teachers.",
    category: "Student interaction",
    match: ["Khanmigo"],
  },
  {
    name: "Snorkl",
    summary: "Spoken explanations on a whiteboard with AI feedback.",
    category: "Student interaction",
    url: "https://snorkl.app/",
    match: ["Snorkl"],
  },
  {
    name: "Canva AI",
    summary:
      "Design with Magic Studio AI tools; Canva for Education is free for verified teachers and students.",
    category: "Creation",
    url: "https://www.canva.com/education/",
    match: ["Canva AI"],
  },
  {
    name: "Suno",
    summary: "Turns lyrics into songs.",
    category: "Creation",
    url: "https://suno.com/",
    match: ["Suno"],
  },
  {
    name: "ElevenLabs",
    summary: "Natural text-to-speech voices in many languages.",
    category: "Creation",
    url: "https://elevenlabs.io/",
    match: ["ElevenLabs"],
  },
  {
    name: "Genially",
    summary: "Clickable stories and interactive escape-room activities.",
    category: "Creation",
    url: "https://genially.com/",
    match: ["Genially"],
  },
  {
    name: "Curipod",
    summary: "Interactive lessons with live AI feedback.",
    category: "Assessment",
    url: "https://curipod.com/",
    match: ["Curipod"],
  },
  {
    name: "Brisk Teaching",
    summary: "Chrome extension for feedback and writing replay in Google Docs.",
    category: "Assessment",
    url: "https://www.briskteaching.com/",
    match: ["Brisk Teaching"],
  },
  {
    name: "Kahoot!, Gimkit & Wayground",
    summary:
      "Live quiz and lesson tools with generation, game modes and student participation.",
    category: "Assessment",
    match: ["Kahoot", "Gimkit", "Wayground"],
  },
  {
    name: "Quizlet",
    summary: "Flashcards and study games; some AI modes are paid.",
    category: "Assessment",
    url: "https://quizlet.com/",
    match: ["Quizlet"],
  },
  {
    name: "Google Forms & Sheets",
    summary: "Escape-room locks, data collection, charts and analysis.",
    category: "Assessment",
    match: ["Google Forms", "Google Sheets"],
  },
  {
    name: "NotebookLM",
    summary:
      "Answers from supplied sources; creates study guides and audio overviews.",
    category: "Research",
    url: "https://notebooklm.google.com/",
    match: ["NotebookLM"],
  },
  {
    name: "Perplexity",
    summary: "Answers with numbered sources that students can open and verify.",
    category: "Research",
    url: "https://www.perplexity.ai/",
    match: ["Perplexity"],
  },
  {
    name: "Google Arts & Culture",
    summary:
      "Collections, Talking Tours, Odd One Out and other AI experiments.",
    category: "Research",
    url: "https://artsandculture.google.com/",
    match: ["Google Arts & Culture"],
  },
  {
    name: "PhET, Desmos & GeoGebra",
    summary: "Free simulations, graphing and geometry tools.",
    category: "Simulations",
    match: ["PhET", "Desmos", "GeoGebra"],
  },
  {
    name: "Google Teachable Machine",
    summary: "Train image, sound or pose classifiers with no account needed.",
    category: "Simulations",
    url: "https://teachablemachine.withgoogle.com/",
    match: ["Google Teachable Machine"],
  },
  {
    name: "Quick, Draw!",
    summary: "See how a neural network learns by letting it guess a drawing.",
    category: "Simulations",
    url: "https://quickdraw.withgoogle.com/",
    match: ["Quick, Draw"],
  },
]

function practiceUsesTool(practice: Practice, tool: ToolEntry) {
  return practice.tools.some((item) =>
    tool.match.some((match) => item.name.includes(match)),
  )
}

function ToolsPage() {
  const { t } = useI18n()
  const categories = [...new Set(toolCatalog.map((tool) => tool.category))]
  return (
    <div>
      <PageIntro
        eyebrow="AI TOOLS DIRECTORY"
        title="Choose the tool by its learning role"
        description="Tools cited in the practice bank, grouped by classroom purpose. Open each tool once before a lesson: free plans and access rules change."
      />
      <section className="tools-library-link page-section">
        <div>
          <p className="section-label">AGIS AI TOOLS LIBRARY</p>
          <h2>{t("libraryTitle")}</h2>
          <p>{t("libraryDescription")}</p>
        </div>
        <a
          className="btn primary"
          href={AI_TOOLS_LIBRARY_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("openLibrary")} <Icon name="arrow" />
        </a>
      </section>
      <section className="page-section tool-feature">
        {toolCatalog
          .filter((tool) => tool.featured)
          .map((tool) => (
            <ToolCard tool={tool} key={tool.name} featured />
          ))}
      </section>
      <div className="page-section tool-directory">
        {categories.map((category) => (
          <section key={category}>
            <div className="directory-heading">
              <span>
                <Icon
                  name={
                    category === "Assessment"
                      ? "check"
                      : category === "Research"
                        ? "search"
                        : category === "Simulations"
                          ? "spark"
                          : "light"
                  }
                />
              </span>
              <div>
                <p className="section-label">CATEGORY</p>
                <h2>{category}</h2>
              </div>
            </div>
            <div className="tools-grid">
              {toolCatalog
                .filter((tool) => tool.category === category)
                .map((tool) => (
                  <ToolCard tool={tool} key={tool.name} />
                ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}

function ToolCard({
  tool,
  featured = false,
}: {
  tool: ToolEntry
  featured?: boolean
}) {
  const linked = practices.filter((practice) =>
    practiceUsesTool(practice, tool),
  )
  return (
    <article className={`tool-card ${featured ? "featured-tool" : ""}`}>
      <div className="tool-card-head">
        <span>
          <Icon name={featured ? "spark" : "briefcase"} />
        </span>
        {featured && <b>FEATURED</b>}
      </div>
      <h3>{tool.name}</h3>
      <p>{tool.summary}</p>
      <div className="tool-practices">
        <strong>
          Used in {linked.length}{" "}
          {linked.length === 1 ? "practice" : "practices"}
        </strong>
        {linked.slice(0, 5).map((practice) => (
          <Link key={practice.id} to={`/practices/${practice.slug}`}>
            {String(practice.id).padStart(2, "0")} {practice.signature}
          </Link>
        ))}
      </div>
      {tool.url && (
        <a
          className="official-link"
          href={tool.url}
          target="_blank"
          rel="noreferrer"
        >
          Official site <Icon name="arrow" size={17} />
        </a>
      )}
    </article>
  )
}

function GuidePage() {
  const { t } = useI18n()
  const atlSkills = [
    ...new Set(
      practices.flatMap((p) =>
        p.atl.split(", ").map((x) => x.replace(/\s*\(.*/, "")),
      ),
    ),
  ].sort()
  const profiles = [
    ...new Set(practices.flatMap((p) => p.profile.split(", "))),
  ].sort()
  const [mode, setMode] = useState<"atl" | "profile">("atl")
  const options = mode === "atl" ? atlSkills : profiles
  const [selected, setSelected] = useState(options[0])
  useEffect(() => {
    setSelected((mode === "atl" ? atlSkills : profiles)[0])
  }, [mode])
  const matching = practices.filter((practice) =>
    mode === "atl"
      ? practice.atl.includes(selected)
      : practice.profile.split(", ").includes(selected),
  )
  return (
    <div>
      <PageIntro
        eyebrow="IB & AI GUIDE"
        title="Keep learning—not the technology—at the center"
        description="Browse source-mapped ATL skills and Learner Profile attributes, then open a practice that makes the connection visible."
      />
      <div className="policy-cta page-section">
        <div>
          <span><Icon name="shield" size={30} /></span>
          <div>
            <strong>{t("policy")}</strong>
            <p>Official school policy for responsible and academically honest AI use.</p>
          </div>
        </div>
        <a
          className="btn primary"
          href={AI_POLICY_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("readPolicy")} <Icon name="arrow" />
        </a>
      </div>
      <section className="guide-browser page-section">
        <div className="guide-tabs">
          <button
            className={mode === "atl" ? "active" : ""}
            onClick={() => setMode("atl")}
          >
            ATL skills
          </button>
          <button
            className={mode === "profile" ? "active" : ""}
            onClick={() => setMode("profile")}
          >
            Learner Profile
          </button>
        </div>
        <div className="guide-grid">
          <div className="guide-options">
            {options.map((option) => (
              <button
                className={selected === option ? "active" : ""}
                onClick={() => setSelected(option)}
                key={option}
              >
                {option}
                <span>
                  {
                    practices.filter((p) =>
                      mode === "atl"
                        ? p.atl.includes(option)
                        : p.profile.includes(option),
                    ).length
                  }
                </span>
              </button>
            ))}
          </div>
          <div className="guide-results">
            <p className="section-label">
              {mode === "atl" ? "ATL SKILL" : "LEARNER PROFILE"}
            </p>
            <h2>{selected}</h2>
            <p>{matching.length} source-mapped practices</p>
            {matching.map((practice) => (
              <Link key={practice.id} to={`/practices/${practice.slug}`}>
                <span>{String(practice.id).padStart(2, "0")}</span>
                <div>
                  <strong>{practice.signature}</strong>
                  <small>{practice.title}</small>
                </div>
                <Icon name="arrow" />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="responsible page-section">
        <div className="responsible-heading">
          <span>
            <Icon name="shield" size={34} />
          </span>
          <div>
            <p className="section-label">SOURCE GUIDANCE</p>
            <h2>Responsible AI, every time</h2>
          </div>
        </div>
        <div className="rule-grid">
          {sourceRules.map((rule, index) => (
            <article key={rule}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{rule}</p>
            </article>
          ))}
        </div>
        <div className="addition-note">
          <strong>Additional implementation guidance</strong>
          <p>
            Use teacher verification, privacy protection, visible process
            evidence and clear academic-integrity expectations as a pre-flight
            check before any AI-supported lesson.
          </p>
          <a href={AI_POLICY_URL} target="_blank" rel="noopener noreferrer">
            {t("readPolicy")} <Icon name="arrow" size={16} />
          </a>
        </div>
      </section>
    </div>
  )
}

function NotFound() {
  return (
    <div className="not-found">
      <span>404</span>
      <h1>Page not found</h1>
      <p>The resource may have moved. Return to the full practice library.</p>
      <Link className="btn primary" to="/activities">
        Browse practices
      </Link>
    </div>
  )
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: "activities", Component: LibraryPage },
      { path: "practices", Component: LibraryPage },
      { path: "practices/:slug", Component: DetailPage },
      { path: "tools", Component: ToolsPage },
      { path: "guide", Component: GuidePage },
      { path: "*", Component: NotFound },
    ],
  },
])
