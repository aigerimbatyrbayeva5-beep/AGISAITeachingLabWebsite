import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"

export type Language = "en" | "ru" | "kk"

const dictionaries = {
  en: {
    home: "Home",
    activities: "Activities",
    practices: "Teaching Practices",
    tools: "AI Tools",
    guide: "IB & AI Guide",
    toolsLibrary: "AI Tools Library",
    policy: "AGIS AI Policy",
    search: "Search activities, tools, or topics...",
    heroEyebrow: "AI TEACHING LAB",
    heroTitle: "Smarter Teaching.",
    heroTitleAccent: "Brighter Learning.",
    heroDescription:
      "A practical library of AI-powered teaching practices created for the Astana Garden community.",
    explore: "Explore Activities",
    how: "How It Works",
    departments: "Departments",
    teachingPractices: "AI Teaching Practices",
    classroomReady: "Classroom-ready and IB aligned",
    ibAligned: "IB Aligned",
    responsibleAi: "Responsible AI",
    responsibleSubtitle: "Guidance, ethics and safe use",
    exploreSubject: "Explore by Subject",
    browsePractice: "Browse by Teaching Practice",
    featured: "Featured Activities",
    startHere: "START HERE",
    featuredDescription: "Ready-to-use ideas chosen from the practice bank.",
    exploreAll: "Explore all 20",
    libraryTitle: "Explore Our AI Tools Library",
    libraryDescription:
      "Discover AI tools for lesson planning, assessment, differentiation, creativity, and classroom engagement.",
    openLibrary: "Open AI Tools Library",
    contactTitle: "AI Coordinator",
    contactDescription:
      "For questions about AI integration, teaching practices, or responsible AI use at AGIS, please contact the AI Coordinator.",
    exploreFooter: "Explore",
    reminder: "Responsible AI reminder",
    policyLink: "AI Use Policy 2026–27",
    readPolicy: "Read AGIS AI Policy",
    translationReview: "",
    menu: "Open navigation menu",
    closeMenu: "Close navigation menu",
  },
  ru: {
    home: "Главная",
    activities: "Задания",
    practices: "Методики преподавания",
    tools: "Инструменты ИИ",
    guide: "IB и ИИ",
    toolsLibrary: "Библиотека инструментов ИИ",
    policy: "Политика AGIS по ИИ",
    search: "Поиск заданий, инструментов или тем...",
    heroEyebrow: "ЛАБОРАТОРИЯ ИИ В ОБУЧЕНИИ",
    heroTitle: "Умнее преподавание.",
    heroTitleAccent: "Ярче обучение.",
    heroDescription:
      "Практическая библиотека методик преподавания с использованием ИИ, созданная для сообщества Astana Garden.",
    explore: "Смотреть задания",
    how: "Как это работает",
    departments: "Предметные области",
    teachingPractices: "Методик с использованием ИИ",
    classroomReady: "Готовы к уроку и согласованы с IB",
    ibAligned: "Соответствует IB",
    responsibleAi: "Ответственный ИИ",
    responsibleSubtitle: "Рекомендации, этика и безопасность",
    exploreSubject: "Поиск по предмету",
    browsePractice: "Поиск по методике",
    featured: "Рекомендуемые задания",
    startHere: "НАЧНИТЕ ЗДЕСЬ",
    featuredDescription: "Готовые идеи из банка педагогических практик.",
    exploreAll: "Все 20 методик",
    libraryTitle: "Библиотека инструментов ИИ",
    libraryDescription:
      "Откройте инструменты ИИ для планирования уроков, оценивания, дифференциации, творчества и вовлечения класса.",
    openLibrary: "Открыть библиотеку",
    contactTitle: "Координатор по ИИ",
    contactDescription:
      "По вопросам интеграции ИИ, педагогических практик или ответственного использования ИИ в AGIS обращайтесь к координатору по ИИ.",
    exploreFooter: "Разделы",
    reminder: "Напоминание об ответственном ИИ",
    policyLink: "Политика использования ИИ 2026–27",
    readPolicy: "Прочитать политику AGIS по ИИ",
    translationReview:
      "Перевод методических материалов отмечен для профессиональной проверки. Английская версия остаётся авторитетным источником.",
    menu: "Открыть меню",
    closeMenu: "Закрыть меню",
  },
  kk: {
    home: "Басты бет",
    activities: "Іс-әрекеттер",
    practices: "Оқыту тәжірибелері",
    tools: "ЖИ құралдары",
    guide: "IB және ЖИ нұсқаулығы",
    toolsLibrary: "ЖИ құралдары кітапханасы",
    policy: "AGIS ЖИ саясаты",
    search: "Іс-әрекет, құрал немесе тақырып іздеу...",
    heroEyebrow: "ОҚЫТУДАҒЫ ЖИ ЗЕРТХАНАСЫ",
    heroTitle: "Оқыту ақылдырақ.",
    heroTitleAccent: "Оқу жарқынырақ.",
    heroDescription:
      "Astana Garden қауымдастығына арналған ЖИ қолдайтын оқыту тәжірибелерінің практикалық кітапханасы.",
    explore: "Тапсырмаларды қарау",
    how: "Қалай жұмыс істейді",
    departments: "Пәндік бағыт",
    teachingPractices: "ЖИ оқыту тәжірибесі",
    classroomReady: "Сабаққа дайын және IB-мен үйлесімді",
    ibAligned: "IB-мен үйлесімді",
    responsibleAi: "Жауапты ЖИ",
    responsibleSubtitle: "Нұсқаулық, этика және қауіпсіздік",
    exploreSubject: "Пән бойынша қарау",
    browsePractice: "Оқыту тәжірибесі бойынша қарау",
    featured: "Ұсынылатын іс-әрекеттер",
    startHere: "ОСЫНДА БАСТАҢЫЗ",
    featuredDescription: "Тәжірибелер банкіндегі сабаққа дайын идеялар.",
    exploreAll: "20 тәжірибенің барлығы",
    libraryTitle: "ЖИ құралдары кітапханасын зерттеңіз",
    libraryDescription:
      "Сабақты жоспарлау, бағалау, саралау, шығармашылық және сыныпты тартуға арналған ЖИ құралдарын табыңыз.",
    openLibrary: "ЖИ құралдары кітапханасын ашу",
    contactTitle: "ЖИ үйлестірушісі",
    contactDescription:
      "AGIS-тегі ЖИ интеграциясы, оқыту тәжірибелері немесе ЖИ-ді жауапты пайдалану туралы сұрақтар бойынша ЖИ үйлестірушісіне хабарласыңыз.",
    exploreFooter: "Бөлімдер",
    reminder: "Жауапты ЖИ туралы еске салу",
    policyLink: "ЖИ пайдалану саясаты 2026–27",
    readPolicy: "AGIS ЖИ саясатын оқу",
    translationReview:
      "Әдістемелік материалдар аудармасы кәсіби тексеруге белгіленген. Ағылшын нұсқасы беделді дереккөз болып қалады.",
    menu: "Мәзірді ашу",
    closeMenu: "Мәзірді жабу",
  },
} as const

type DictionaryKey = keyof typeof dictionaries.en
type I18nValue = {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: DictionaryKey) => string
}

const I18nContext = createContext<I18nValue | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("agis-language")
    return saved === "ru" || saved === "kk" ? saved : "en"
  })
  useEffect(() => {
    document.documentElement.lang = language
  }, [language])
  function setLanguage(next: Language) {
    localStorage.setItem("agis-language", next)
    document.documentElement.lang = next === "kk" ? "kk" : next
    setLanguageState(next)
  }
  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: (key: DictionaryKey) => dictionaries[language][key],
    }),
    [language],
  )
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const value = useContext(I18nContext)
  if (!value) throw new Error("useI18n must be used inside I18nProvider")
  return value
}
