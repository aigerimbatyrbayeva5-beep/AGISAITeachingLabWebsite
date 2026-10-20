export type Subject = "Science" | "Mathematics" | "Language Acquisition" | "Humanities"

export interface Practice {
  id: number
  slug: string
  title: string
  signature: string
  summary: string
  aiRole: string
  grades: string
  duration: string
  tools: { name: string, role: string }[]
  why: string
  steps: string[]
  examples: Record<Subject, string>
  moreIdeas: string[]
  prompt: string | null
  atl: string
  profile: string
  safety: string
}

export const practices: Practice[] = [
  {
    id: 1,
    slug: "inquiry-simulation-lab",
    title: "Inquiry-based learning",
    signature: "Simulation lab",
    summary:
      "AI builds an interactive simulation or offers competing explanations. Students predict, test and decide which explanation fits the evidence.",
    aiRole: "Thinking partner",
    grades: "Grades 7–12",
    duration: "20 min to build, 1 lesson",
    tools: [
      {
        name: "Gemini Canvas or Claude",
        role: "Builds a working simulation from your description (Claude is teacher-only).",
      },
      {
        name: "ChatGPT or Gemini",
        role: "Gives students three competing explanations to test.",
      },
      {
        name: "PhET, Desmos or GeoGebra",
        role: "Free ready-made simulations and graphs.",
      },
    ],
    why: "Students learn more when they test ideas than when they are told answers. AI makes a custom simulation or a set of hypotheses in minutes.",
    steps: [
      "Choose one relationship students struggle to see.",
      "Build a simulation with the prompt, or pick one from PhET, Desmos or GeoGebra. Test it with extreme values.",
      "Students ask AI for three competing explanations of what will happen.",
      "Pairs predict, move one slider at a time and record results.",
      "They decide which explanation the evidence supports and name one limit of the model.",
    ],
    examples: {
      Science: "Enzyme activity and temperature; launch angle and range.",
      Mathematics:
        "Sliders for a, h and k: students discover how a parabola moves.",
      "Language Acquisition": "Not the best fit; use practice 7 or 18.",
      Humanities: "Supply and demand: what happens to price when supply falls?",
    },
    moreIdeas: [
      "Explorable graph lesson: AI writes a question sequence from “what do you notice?” to “write the rule”.",
    ],
    prompt:
      "Build an interactive simulation for Grade [X] about [topic]. Include sliders for [variable 1] and [variable 2], a live graph of [output] and short labels. Use correct relationships and tell me which formula you used.",
    atl: "Critical thinking (Thinking), Transfer (Thinking)",
    profile: "Inquirers, Thinkers",
    safety:
      "AI can use a wrong formula. Test every simulation before students see it.",
  },
  {
    id: 2,
    slug: "problem-based-local-challenge",
    title: "Problem-based learning",
    signature: "Local problem challenge",
    summary:
      "AI writes an authentic local problem with a client, constraints and a deliverable. Students propose solutions and judge them against the constraints.",
    aiRole: "Problem designer",
    grades: "Grades 7–12",
    duration: "1–3 lessons",
    tools: [
      {
        name: "ChatGPT or Gemini",
        role: "Writes the problem and alternative solutions.",
      },
      {
        name: "MagicSchool",
        role: "Ready generators for project briefs and rubrics.",
      },
    ],
    why: "Real problems have limits and trade-offs. Working inside realistic constraints shows students why the content matters.",
    steps: [
      "Choose the concepts the problem must use.",
      "Generate the problem with the prompt and check the numbers.",
      "Groups propose their own solutions first.",
      "They ask AI for alternatives and compare all options against the constraints.",
      "Groups present and defend their choice to the “client”.",
    ],
    examples: {
      Science:
        "Design a water filter for a village from materials under 5,000 tenge.",
      Mathematics:
        "Plan the cheapest trip from Astana to Burabay for 60 students.",
      "Language Acquisition":
        "Write a welcome guide for a new international student in 300 words.",
      Humanities:
        "Reduce traffic near the school: three options for the akimat.",
    },
    moreIdeas: [
      "Invite a real person (a parent engineer, a city official) to act as the client.",
    ],
    prompt:
      "Write an authentic problem for Grade [X] that requires [concepts]. Include a client, a realistic setting in Kazakhstan, three constraints (budget, time, safety) and a deliverable. Do not include the solution.",
    atl: "Critical thinking (Thinking), Transfer (Thinking)",
    profile: "Thinkers, Caring",
    safety: "Unrealistic numbers make the task feel fake. Check every figure.",
  },
  {
    id: 3,
    slug: "project-based-planning-coach",
    title: "Project-based learning",
    signature: "AI planning coach",
    summary:
      "Students use AI to brainstorm, plan the project in steps and get feedback at each checkpoint. The ideas and the product stay theirs.",
    aiRole: "Planning coach",
    grades: "Grades 6–12",
    duration: "2–6 weeks",
    tools: [
      {
        name: "ChatGPT or Gemini",
        role: "Brainstorming, planning and checkpoint feedback.",
      },
      {
        name: "Canva AI",
        role: "Designing the final product.",
      },
    ],
    why: "Long projects stall at planning and revision. AI helps students break work into steps and improve it, while a process journal keeps their thinking visible.",
    steps: [
      "Set a driving question and a real audience.",
      "Students brainstorm alone first, then ask AI for more ideas and choose one with reasons.",
      "AI helps split the project into weekly tasks and roles.",
      "At each checkpoint students get feedback and record what they changed and why.",
      "They build the product in Canva and present it to the audience.",
    ],
    examples: {
      Science:
        "A campaign to cut plastic waste at school, based on a waste audit.",
      Mathematics: "A business plan for a school café with break-even point.",
      "Language Acquisition":
        "A bilingual podcast series about life in Astana.",
      Humanities: "A virtual exhibition on the Silk Road.",
    },
    moreIdeas: [
      "MYP Personal Project: use the same coach approach with a process journal.",
    ],
    prompt:
      "My group's project is [driving question]; our product is [product]. Help us split the work into weekly tasks for [number] weeks and 4 roles. Ask us questions about our idea instead of giving us one.",
    atl: "Organization (Self-management), Creative thinking (Thinking), Collaboration (Social)",
    profile: "Risk-takers, Reflective",
    safety: "Ask for a short process journal at every stage.",
  },
  {
    id: 4,
    slug: "differentiated-every-reader",
    title: "Differentiated instruction",
    signature: "Same content, every reader",
    summary:
      "AI turns one text or video into versions at different levels, with scaffolds. Every student works on the same ideas and joins one discussion.",
    aiRole: "Content generator",
    grades: "Grades 6–12, all phases",
    duration: "15 min to prepare, 1 lesson",
    tools: [
      {
        name: "Diffit",
        role: "Levels any text, PDF or YouTube video and adds questions.",
      },
      {
        name: "MagicSchool",
        role: "Text leveler, scaffolds and sentence starters.",
      },
    ],
    why: "Finding the same content at several levels used to take hours. Now all students can reach the core ideas and take part in the same discussion.",
    steps: [
      "Choose the core text or video.",
      "Generate versions below, on and above level, with sentence starters and a glossary.",
      "Check that each version keeps the key ideas and terms.",
      "Students choose or are assigned a version and complete the tasks.",
      "Mixed-level groups discuss one shared big question.",
    ],
    examples: {
      Science: "One article on vaccines at three levels.",
      Mathematics: "Word problems with and without visual scaffolds.",
      "Language Acquisition":
        "A short story with a glossary for Phase 2 and inference questions for Phase 5.",
      Humanities:
        "A primary source with a simplified version and guiding questions.",
    },
    moreIdeas: [
      "Add a home-language version for new arrivals (see practice 18).",
    ],
    prompt:
      "Rewrite the text below in three versions for Grade [X]: simplified with key terms in bold, on grade level, and extended with one extra example. Keep the same key ideas and terms. Add 3 sentence starters for the simplified version. Text: [paste]",
    atl: "Communication (Communication), Affective skills (Self-management)",
    profile: "Knowledgeable, Communicators",
    safety:
      "Simplified versions can lose nuance. Compare the simplest version with the original.",
  },
  {
    id: 5,
    slug: "personalized-hint-only-tutor",
    title: "Personalized tutoring",
    signature: "Hint-only tutor",
    summary:
      "A tutor bot limited to your unit gives hints and questions, never the final answer. The chat history shows you where each student gets stuck.",
    aiRole: "Tutor",
    grades: "Grades 6–12",
    duration: "20–40 min",
    tools: [
      {
        name: "MagicStudent (MagicSchool)",
        role: "Student rooms you control; you see every chat.",
      },
      {
        name: "SchoolAI or a Gemini Gem",
        role: "Alternatives.",
      },
      {
        name: "Khanmigo",
        role: "Free only for US teachers, so not practical in Kazakhstan.",
      },
    ],
    why: "Students get stuck at different points. Hints keep the productive struggle, and the chats are excellent formative data.",
    steps: [
      "Create a tutor room limited to the unit with the prompt.",
      "Test it with a wrong answer.",
      "Students work on tasks and ask the tutor only when stuck.",
      "At the end they write down the hint that helped most.",
      "Read the chats and plan the next lesson around common gaps.",
    ],
    examples: {
      Science: "Balancing chemical equations step by step.",
      Mathematics: "Solving simultaneous equations with hints.",
      "Language Acquisition":
        "Practising past tense with corrective questions.",
      Humanities: "Planning a source analysis paragraph.",
    },
    moreIdeas: [
      "Before a test: a revision tutor that quizzes students on weak topics.",
    ],
    prompt:
      "You are a tutor for Grade [X] on [topic]. Never give the final answer. When a student is stuck, ask one guiding question or give one small hint. If they make a mistake, ask them to check that step. Praise reasoning, not just correct answers.",
    atl: "Affective skills (Self-management), Reflection (Self-management)",
    profile: "Inquirers, Reflective",
    safety:
      "Use rooms where you can see the chats, not open chatbots, for younger students.",
  },
  {
    id: 6,
    slug: "socratic-sparring",
    title: "Socratic questioning",
    signature: "Socratic sparring",
    summary:
      "AI questions a student's claim with deeper and deeper questions about evidence, assumptions and consequences, without giving its own answer.",
    aiRole: "Questioner",
    grades: "Grades 8–12",
    duration: "20–30 min",
    tools: [
      {
        name: "ChatGPT or Gemini",
        role: "For older students.",
      },
      {
        name: "MagicStudent",
        role: "For younger students in a controlled room.",
      },
    ],
    why: "Good questions make students clarify and justify their thinking. AI can question every student at once.",
    steps: [
      "Students write a claim about a big question.",
      "They share it with the questioning bot.",
      "The bot asks six questions, one at a time, from clarifying to consequences.",
      "Students revise their claim.",
      "Pairs compare how their thinking changed and which question changed it.",
    ],
    examples: {
      Science: "Is a virus alive?",
      Mathematics: "Is 0.999… equal to 1?",
      "Language Acquisition":
        "Does the language you speak shape how you think?",
      Humanities: "Was the founding of the Kazakh Khanate inevitable?",
    },
    moreIdeas: [
      "Use the saved dialogue as evidence of thinking for a TOK-style reflection.",
    ],
    prompt:
      "I will share my answer to [question]. Act as a Socratic questioner. Ask one question at a time, from clarifying questions to questions about evidence, assumptions and consequences. Do not give your opinion. Stop after 6 questions and ask how my thinking has changed.",
    atl: "Critical thinking (Thinking), Communication (Communication)",
    profile: "Thinkers, Open-minded",
    safety:
      "Ask students to highlight the question that changed their thinking most.",
  },
  {
    id: 7,
    slug: "role-play-living-museum",
    title: "Role-play",
    signature: "Living museum and conversation partners",
    summary:
      "AI plays a historical figure, a scientist, a shopkeeper or a client. Students interview or talk to the character, then check what it said.",
    aiRole: "Character",
    grades: "Grades 6–12, Phases 2–6",
    duration: "1–2 lessons",
    tools: [
      {
        name: "MagicStudent or SchoolAI",
        role: "One room per character; you see every chat.",
      },
      {
        name: "Canva AI",
        role: "Station posters.",
      },
    ],
    why: "Talking to a character makes content personal. The real learning comes when students verify the answers.",
    steps: [
      "Choose 4–5 characters linked to one topic and set up one room each.",
      "Test each character and note invented facts.",
      "Students prepare questions from sources.",
      "They rotate through the “stations” and save the chats.",
      "Each student verifies three claims and finds one the AI got wrong or simplified.",
    ],
    examples: {
      Science: "Interview Marie Curie about her experiments.",
      Mathematics:
        "A client asks students to explain the best phone plan with graphs.",
      "Language Acquisition":
        "A shop, hotel or doctor role-play that corrects one mistake per reply.",
      Humanities:
        "Abai Kunanbaev, a Silk Road merchant, a figure from Alash Orda.",
    },
    moreIdeas: [
      "Language version: students complete a goal in the conversation, then highlight three corrections.",
    ],
    prompt:
      "Play [character] in [place, year]. Answer in first person, briefly, using only well-documented facts. If something is not known, say so. Stay in character at Grade [X] level. [For language practice: after each student message, add one correction in brackets.]",
    atl: "Communication (Communication), Information literacy (Research)",
    profile: "Communicators, Open-minded",
    safety:
      "A character is a reconstruction, not the real person. Say this to students.",
  },
  {
    id: 8,
    slug: "virtual-field-trip-museum-tour",
    title: "Virtual field trips",
    signature: "AI-guided museum tour",
    summary:
      "Students explore landmarks and museums in Street View with an AI audio guide, check what it says, then record their own guide to a landmark in Kazakhstan.",
    aiRole: "Tour guide",
    grades: "Grades 7–12",
    duration: "2 lessons",
    tools: [
      {
        name: "Google Arts & Culture: Talking Tours",
        role: "Free AI audio guide in Street View. It is an experiment, so test it on a school device first.",
      },
      {
        name: "Google Arts & Culture collections",
        role: "Museum objects and virtual exhibitions.",
      },
      {
        name: "Gemini",
        role: "Helps students research their own guide.",
      },
    ],
    why: "Students visit places they cannot travel to and learn to question a guide. Creating their own guide turns them from listeners into experts.",
    steps: [
      "Choose 2–3 landmarks or a museum collection linked to the unit.",
      "Pairs take the tour, ask the AI guide their own questions and note three facts.",
      "They verify one claim in a reliable source.",
      "Each pair researches a landmark in Kazakhstan, such as the Mausoleum of Khoja Ahmed Yasawi or the Golden Man.",
      "They write and record a one-minute audio guide and compare it with the AI guide.",
    ],
    examples: {
      Science:
        "A tour of a science museum or observatory: what does each exhibit show?",
      Mathematics:
        "Geometry in architecture: measure and describe shapes in famous buildings.",
      "Language Acquisition":
        "Speaking task: record the audio guide in the target language.",
      Humanities:
        "A museum label: what does this object tell us about the people who made it?",
    },
    moreIdeas: [
      "Museum label task: students write a 100-word label explaining what an object reveals about its makers.",
    ],
    prompt:
      "I am writing a 1-minute audio guide for Grade [X] about [landmark]. Ask me 5 questions to help me research it: who built it, when, why, what it shows about the people of the time, and why it matters today. Do not write the guide for me.",
    atl: "Information literacy (Research), Communication (Communication)",
    profile: "Inquirers, Open-minded, Communicators",
    safety:
      "The AI guide's facts can be basic or wrong. The checking and the students' own guide are the learning.",
  },
  {
    id: 9,
    slug: "debate-sparring-partner",
    title: "Debate and multiple perspectives",
    signature: "AI sparring partner",
    summary:
      "AI argues the opposite side or describes an event from several perspectives. Students find weak points, prepare rebuttals and map where accounts conflict.",
    aiRole: "Opponent",
    grades: "Grades 8–12",
    duration: "1–2 lessons",
    tools: [
      {
        name: "ChatGPT or Gemini",
        role: "Gemini also works well in Kazakh and Russian.",
      },
      {
        name: "Perplexity",
        role: "Finds evidence with sources.",
      },
    ],
    why: "Students rarely meet strong counter-arguments before a debate. Hearing several perspectives also shows that every account is told from a point of view.",
    steps: [
      "Set a motion or an event linked to the unit.",
      "Students write their position with evidence.",
      "They debate the AI for 5 rounds, or ask it for 3–4 perspectives.",
      "They list the strongest counter-argument, or map agreements, conflicts and missing voices.",
      "They debate classmates or write a paragraph on how perspective shapes the story.",
    ],
    examples: {
      Science: "Should Kazakhstan build a nuclear power plant?",
      Mathematics: "Should calculators be allowed in all exams?",
      "Language Acquisition":
        "Is learning a language with an app as good as with a teacher?",
      Humanities:
        "Causes of World War I from British, German, Serbian and Ottoman views.",
    },
    moreIdeas: [
      "Ask the same question in Kazakh, Russian and English and compare the answers.",
    ],
    prompt:
      "Let's debate: [motion]. I argue [for/against]. You argue the opposite strongly but fairly, with evidence, in under 100 words per round. After 5 rounds, tell me my strongest and weakest argument.",
    atl: "Communication (Communication), Critical thinking (Thinking)",
    profile: "Communicators, Open-minded, Principled",
    safety: "Choose topics suitable for your class and check the AI's facts.",
  },
  {
    id: 10,
    slug: "games-escape-rooms-quizzes",
    title: "Game-based learning and retrieval",
    signature: "Escape rooms and misconception quizzes",
    summary:
      "AI writes escape-room stories, puzzles, quiz questions and flashcards. In quizzes, every wrong answer is a real misconception.",
    aiRole: "Game designer",
    grades: "Grades 6–12",
    duration: "30–60 min to prepare",
    tools: [
      {
        name: "ChatGPT or Gemini",
        role: "Stories, puzzles and misconception lists.",
      },
      {
        name: "Google Forms",
        role: "Digital “locks” for escape rooms.",
      },
      {
        name: "Kahoot!, Gimkit or Wayground (formerly Quizizz)",
        role: "Quizzes with AI question generation.",
      },
      {
        name: "Quizlet",
        role: "Flashcards for spaced review.",
      },
    ],
    why: "Games raise motivation, and recalling information strengthens memory. Misconception answers turn mistakes into discussion.",
    steps: [
      "Choose 4–6 concepts.",
      "Generate the escape-room story and puzzles, or a quiz where wrong answers are misconceptions.",
      "Solve everything yourself and fix errors.",
      "Build it: Google Forms sections as locks, or a quiz in Kahoot, Gimkit or Wayground.",
      "Play, then debrief: why is each wrong answer tempting?",
    ],
    examples: {
      Science: "Outbreak escape room with clues hidden in lab data.",
      Mathematics: "Math escape room: each answer unlocks the next stage.",
      "Language Acquisition":
        "False-friends quiz, such as “magazine” and “магазин”.",
      Humanities: "Time-travel challenge: order events to escape.",
    },
    moreIdeas: [
      "Retrieval: 10-minute flashcard reviews, revisiting topics after one week and one month.",
      "Gimkit KitCollab: students write questions, you approve them.",
    ],
    prompt:
      "Create a 5-stage escape room for Grade [X] on [topic]. Story: [scenario]. Each stage has a clue and a question that needs [concept], with one exact answer. Give the answers separately.",
    atl: "Collaboration (Social), Transfer (Thinking)",
    profile: "Risk-takers, Knowledgeable, Balanced",
    safety:
      "Every answer must be unambiguous, or teams get stuck for the wrong reason.",
  },
  {
    id: 11,
    slug: "collaborative-critique",
    title: "Collaborative critique",
    signature: "Spot the mistake, improve the draft",
    summary:
      "Groups get an AI answer with hidden weaknesses or one planted error. They find the problems and write a better version together.",
    aiRole: "Draft to improve",
    grades: "Grades 6–12",
    duration: "20–40 min",
    tools: [
      {
        name: "ChatGPT",
        role: "Creates drafts with planted errors.",
      },
      {
        name: "Claude",
        role: "Teacher use; good at exact planted errors.",
      },
    ],
    why: "A shared draft gives groups something concrete to argue about. Finding errors in confident AI work builds critical reading in every subject.",
    steps: [
      "Collect a typical mistake from your students' work.",
      "Generate an AI answer with that error or weakness hidden in it, plus an answer key.",
      "Each group member finds one strength and one weakness.",
      "The group agrees on the main problems and writes an improved version.",
      "Groups compare versions and explain their changes.",
    ],
    examples: {
      Science: "An AI lab method that is not a fair test.",
      Mathematics: "A worked solution with one sign error.",
      "Language Acquisition": "A paragraph with six typical learner errors.",
      Humanities: "An essay plan that ignores some perspectives.",
    },
    moreIdeas: [
      "Find the flawed worksheet: tell students some answers in the key may be wrong.",
    ],
    prompt:
      "Write a full worked solution to [problem] for Grade [X]. Include exactly one subtle error of this type: [error]. Make the rest look correct and confident. Give a separate answer key with the line of the error and why it is wrong.",
    atl: "Collaboration (Social), Critical thinking (Thinking)",
    profile: "Thinkers, Communicators",
    safety: "Give each group member a role so everyone contributes.",
  },
  {
    id: 12,
    slug: "formative-live-feedback",
    title: "Formative assessment",
    signature: "Live lesson with AI feedback",
    summary:
      "An interactive lesson where every student answers, AI gives each one feedback, and you see the whole class's thinking live. Exit tickets target misconceptions.",
    aiRole: "Feedback in the moment",
    grades: "Grades 6–12",
    duration: "15 min to prepare, 1 lesson",
    tools: [
      {
        name: "Curipod",
        role: "Interactive lessons with live AI feedback; students join with a code.",
      },
      {
        name: "MagicSchool or Wayground",
        role: "Exit tickets and diagnostic questions.",
      },
    ],
    why: "You see what every student thinks during the lesson, not after the test. Students improve their answers straight away.",
    steps: [
      "Choose a puzzling question to open the topic.",
      "Build the lesson in Curipod with a prediction poll, a drawing and one open question with AI feedback. Write clear success criteria.",
      "Students join, predict and answer.",
      "They read the feedback and improve their answer.",
      "End with a misconception exit ticket and group students by result for the next lesson.",
    ],
    examples: {
      Science: "Why does ice float?",
      Mathematics: "Which is bigger, 0.5 or 0.45? Explain.",
      "Language Acquisition":
        "Describe the picture in three sentences; AI comments on accuracy.",
      Humanities: "Why did the Aral Sea shrink?",
    },
    moreIdeas: [
      "Exit ticket: 3–5 questions where each wrong option is a known misconception.",
    ],
    prompt:
      "Write 5 multiple-choice exit ticket questions for Grade [X] on [objective]. Every wrong option must match a common misconception. Give the key and name the misconception behind each wrong option.",
    atl: "Communication (Communication), Reflection (Self-management)",
    profile: "Inquirers, Communicators, Reflective",
    safety: "AI feedback is only as good as the success criteria you give it.",
  },
  {
    id: 13,
    slug: "feedback-and-revision",
    title: "Feedback and revision",
    signature: "Feedback bot and writing conference",
    summary:
      "Students get three criterion-based comments from AI that never rewrites, revise by themselves, and discuss their writing process with the teacher.",
    aiRole: "Feedback coach",
    grades: "Grades 7–12",
    duration: "1 lesson, plus 3-minute conferences",
    tools: [
      {
        name: "MagicSchool or MagicStudent",
        role: "Feedback room with your rules.",
      },
      {
        name: "Brisk Teaching",
        role: "Free Chrome extension: feedback and writing replay inside Google Docs.",
      },
    ],
    why: "Students improve most when they act on feedback themselves. Seeing how a text was written makes the student's own work visible.",
    steps: [
      "Students write the draft in Google Docs without AI.",
      "They get three comments linked to your criteria, with no rewriting.",
      "They revise by themselves and write a short reflection.",
      "You use Brisk's writing replay to see how the text developed.",
      "Hold a 3-minute conference: the student explains one choice and one revision.",
    ],
    examples: {
      Science: "Lab report conclusion against Criterion C.",
      Mathematics: "Communication in a math investigation.",
      "Language Acquisition": "A Phase 4 email: register and accuracy.",
      Humanities: "Use of evidence in a history paragraph.",
    },
    moreIdeas: [
      "Assess draft, feedback, revision and reflection together, not just the final text.",
    ],
    prompt:
      "Read the student's text and give exactly three pieces of feedback based on these criteria: [criteria]. Point to the exact place and explain the problem, but never rewrite the student's sentences.",
    atl: "Reflection (Self-management), Communication (Communication)",
    profile: "Reflective, Principled",
    safety:
      "The writing replay starts a conversation. It is not proof of cheating.",
  },
  {
    id: 14,
    slug: "flipped-notebooklm",
    title: "Flipped learning",
    signature: "Study guide and podcast fact-check",
    summary:
      "NotebookLM turns your materials into a study guide and an audio overview for home. In class, students fact-check the AI podcast against the sources.",
    aiRole: "Resource builder",
    grades: "Grades 9–12",
    duration: "30 min to prepare, 1 lesson",
    tools: [
      {
        name: "NotebookLM",
        role: "Answers only from your sources; study guides and audio overviews.",
      },
      {
        name: "MagicSchool",
        role: "Check questions for the pre-lesson.",
      },
    ],
    why: "New content at home frees class time for discussion. Fact-checking the podcast makes students read the sources closely.",
    steps: [
      "Upload 2–3 readings to NotebookLM.",
      "Create a study guide and an audio overview; listen once yourself.",
      "Students study at home and bring one question.",
      "In class, they listen with the readings open and log claims that are missing, stretched or wrong.",
      "Groups agree on the three biggest errors and discuss why summaries distort.",
    ],
    examples: {
      Science: "Readings on climate change before a lab.",
      Mathematics: "A new theorem before problem-solving.",
      "Language Acquisition": "A short story before a literature lesson.",
      Humanities: "A source pack before a document analysis.",
    },
    moreIdeas: [
      "Primary-source station: students ask NotebookLM questions and open every cited passage.",
    ],
    prompt: null,
    atl: "Organization (Self-management), Media literacy (Research)",
    profile: "Knowledgeable, Thinkers",
    safety:
      "Check NotebookLM age rules before giving students their own accounts.",
  },
  {
    id: 15,
    slug: "case-based-game-master",
    title: "Case-based learning and decision simulations",
    signature: "AI game master",
    summary:
      "AI writes realistic cases or runs a decision game round by round. Teams make decisions, justify them with concepts and see the consequences.",
    aiRole: "Scenario writer and game master",
    grades: "Grades 9–12",
    duration: "1–2 lessons",
    tools: [
      {
        name: "ChatGPT or Claude",
        role: "Writes cases and runs the game on the projector.",
      },
      {
        name: "Canva AI",
        role: "Role cards and score sheets.",
      },
    ],
    why: "Decisions with consequences make concepts real. Each round forces students to apply what they know to a new situation.",
    steps: [
      "Choose the concepts and the decision.",
      "Play one round of the game yourself, or generate and check a case.",
      "Give teams role cards and a decision sheet.",
      "Each round: the AI announces an event, teams decide and justify in writing, the AI explains consequences.",
      "Debrief with real data, such as National Bank or stat.gov.kz figures.",
    ],
    examples: {
      Science: "A hospital decides who gets a scarce treatment.",
      Mathematics:
        "A farmer decides whether to insure crops using probability.",
      "Language Acquisition":
        "A company writes an apology after a mistake: choosing tone and words.",
      Humanities:
        "Running a bakery in Astana during inflation; a Silk Road caravan.",
    },
    moreIdeas: [
      "Classic case study: groups build a case for one outcome, swap and answer each other's questions.",
    ],
    prompt:
      "Run a decision game for Grade [X]. [Number] teams each run [business/role] in Kazakhstan. Each round, announce one realistic event, wait for each team's decision, then explain the consequences using [concepts]. Play 5 rounds and keep score.",
    atl: "Transfer (Thinking), Collaboration (Social)",
    profile: "Thinkers, Principled, Caring",
    safety:
      "Written justifications are what make it learning, not just a game.",
  },
  {
    id: 16,
    slug: "data-driven-inquiry",
    title: "Data-driven inquiry",
    signature: "Real data lab and misleading graph detective",
    summary:
      "Students analyse real data, compare their charts with AI suggestions and spot misleading graphs.",
    aiRole: "Data assistant",
    grades: "Grades 8–12",
    duration: "1–2 lessons",
    tools: [
      {
        name: "ChatGPT",
        role: "Suggests questions and charts; can create misleading graphs to analyse.",
      },
      {
        name: "Google Sheets",
        role: "Free charts. AI features in Sheets or Excel usually need a paid plan.",
      },
    ],
    why: "Every subject now uses data. Students learn to ask whether a chart is honest and a conclusion is justified.",
    steps: [
      "Find real data, for example on stat.gov.kz, or collect it in class.",
      "Students ask AI for questions and chart ideas, not answers.",
      "They make their own charts in Google Sheets.",
      "They examine misleading versions: cut axes, uneven scales, correlation shown as causation.",
      "They write a conclusion and one limitation.",
    ],
    examples: {
      Science: "Class reaction-time data.",
      Mathematics: "Population growth in Kazakh cities: linear or exponential?",
      "Language Acquisition": "A survey on languages students use at home.",
      Humanities: "Prices and wages over 30 years.",
    },
    moreIdeas: [
      "Collect real misleading graphs from news and advertising for a class “graph crimes” wall.",
    ],
    prompt:
      "Here are the first rows of my data: [paste]. Suggest three questions a Grade [X] student could investigate and which chart fits each. Do not calculate anything.",
    atl: "Information literacy (Research), Media literacy (Research), Critical thinking (Thinking)",
    profile: "Inquirers, Thinkers",
    safety: "AI-invented data proves nothing. Use real data.",
  },
  {
    id: 17,
    slug: "creative-learning",
    title: "Creative learning",
    signature: "Create, then justify",
    summary:
      "Students create stories, songs, comics or picture books with AI help, and explain every choice they made.",
    aiRole: "Creative partner",
    grades: "Grades 6–12",
    duration: "2–4 lessons",
    tools: [
      {
        name: "ChatGPT or Gemini",
        role: "Ideas and branching stories.",
      },
      {
        name: "Canva AI",
        role: "Comics, posters and picture books.",
      },
      {
        name: "Suno",
        role: "Turns students' lyrics into songs (teacher account).",
      },
      {
        name: "Google Forms or Genially",
        role: "Clickable choose-your-own-adventure stories.",
      },
    ],
    why: "Creating shows deep understanding. The written rationale shows the student's own thinking.",
    steps: [
      "Set a creative brief linked to the content.",
      "Students sketch or write their ideas by hand first.",
      "They use AI to explore variations, then choose and adapt.",
      "They build the final product.",
      "They write a rationale: what they chose, what they changed and why, and which parts are AI-made.",
    ],
    examples: {
      Science: "A comic explaining the carbon cycle.",
      Mathematics: "A song about the quadratic formula with checked lyrics.",
      "Language Acquisition":
        "A choose-your-own-adventure story in the target language.",
      Humanities: "A poster for an imaginary museum exhibition.",
    },
    moreIdeas: [
      "Choose-your-own-adventure: AI writes 3 decision points and 4 endings; students then write their own branch.",
    ],
    prompt:
      "I am creating a [product] about [topic] for [audience]. Here is my idea: [idea]. Give me three directions I could take it, with one question for each. Do not create it for me.",
    atl: "Creative thinking (Thinking), Communication (Communication)",
    profile: "Risk-takers, Communicators",
    safety:
      "Check facts in lyrics and stories. Students label which parts are AI-made.",
  },
  {
    id: 18,
    slug: "multilingual-support-kit",
    title: "Multilingual scaffolding",
    signature: "Three-language support kit",
    summary:
      "AI creates glossaries, side-by-side translations, leveled listening audio and instructions in English, Kazakh and Russian.",
    aiRole: "Language support",
    grades: "All grades and phases",
    duration: "10–30 min to prepare",
    tools: [
      {
        name: "Gemini",
        role: "Strongest for Kazakh and Russian.",
      },
      {
        name: "MagicSchool",
        role: "Glossaries and sentence frames.",
      },
      {
        name: "ElevenLabs",
        role: "Natural voices for listening tasks (teacher account).",
      },
    ],
    why: "Students learning in another language should not lose access to the content. Good support lets them take part from day one.",
    steps: [
      "List the key terms and tasks for the unit.",
      "Generate a trilingual glossary and sentence frames.",
      "For new arrivals, translate key texts side by side with the original.",
      "Create short audio: listening dialogues, or safety instructions in three languages with QR codes.",
      "Reduce support step by step as students progress.",
    ],
    examples: {
      Science:
        "Trilingual glossary for a cell unit; lab safety audio by QR code.",
      Mathematics: "Sentence frames: “First I…, because…”.",
      "Language Acquisition":
        "A listening lab: dialogues on students' favourite topics.",
      Humanities: "Key concept cards in three languages.",
    },
    moreIdeas: [
      "Pronunciation shadowing: students copy a native-like recording and compare.",
    ],
    prompt:
      "For these terms: [terms], give the English term, the Kazakh and Russian terms used in Kazakhstan school textbooks, a simple definition for Grade [X] and an example sentence. Format as a table and list terms you are unsure about.",
    atl: "Communication (Communication), Affective skills (Self-management)",
    profile: "Communicators, Caring",
    safety: "AI is weaker in Kazakh. Ask a fluent colleague to check.",
  },
  {
    id: 19,
    slug: "metacognitive-reflection",
    title: "Metacognitive reflection",
    signature: "Explain it aloud, then reflect",
    summary:
      "Students record their reasoning and get AI feedback, then a reflection bot asks about their errors and strategies.",
    aiRole: "Reflection coach",
    grades: "Grades 6–12",
    duration: "15–20 min",
    tools: [
      {
        name: "Snorkl",
        role: "Students explain on a whiteboard; AI rates accuracy and clarity.",
      },
      {
        name: "ChatGPT or MagicStudent",
        role: "Reflection questions after a task or test.",
      },
    ],
    why: "Students who think about how they learn improve faster. Explaining aloud shows gaps that written answers hide.",
    steps: [
      "Students solve a problem in Snorkl while explaining aloud.",
      "They read the feedback and record a better second attempt.",
      "After a test or project, they answer the reflection bot's questions.",
      "They write a 3-point action plan.",
      "Revisit the plan before the next similar task.",
    ],
    examples: {
      Science: "Explain why the results of a practical were reliable.",
      Mathematics: "Explain each step of solving simultaneous equations.",
      "Language Acquisition":
        "A one-minute spoken answer, then a second attempt.",
      Humanities: "Reflect on how they chose sources for research.",
    },
    moreIdeas: [
      "Error analysis after a test: careless, method or concept errors?",
    ],
    prompt:
      "Help me reflect on my [task/test]. Ask me one question at a time about what went well, what was difficult, my strategies, my errors and what I will change. After 5 questions, help me write a 3-point action plan in my own words.",
    atl: "Reflection (Self-management), Communication (Communication)",
    profile: "Reflective, Balanced",
    safety: "Keep reflections between student and teacher so they stay honest.",
  },
  {
    id: 20,
    slug: "ai-literacy-fact-checking",
    title: "AI literacy and fact-checking",
    signature: "Break the AI, catch the fake",
    summary:
      "Students train their own AI model and find where it fails, spot AI images among real art, and check viral claims with sources.",
    aiRole: "Object of investigation",
    grades: "Grades 6–12",
    duration: "1 lesson per activity",
    tools: [
      {
        name: "Google Teachable Machine",
        role: "Train an image or sound classifier; no account needed.",
      },
      {
        name: "Quick, Draw!",
        role: "See how a neural network learns from drawings.",
      },
      {
        name: "Google Arts & Culture: Odd One Out",
        role: "Spot the AI image among real artworks.",
      },
      {
        name: "Perplexity",
        role: "Answers with numbered sources.",
      },
    ],
    why: "Students will use AI all their lives. Knowing how it learns, where it fails and how to check it is a core skill today.",
    steps: [
      "Train and break: students train a classifier on leaves or rocks, then test it with unusual samples and explain the failures.",
      "Real or AI: students play Odd One Out and list the clues that give AI images away.",
      "Viral claims: students check a real claim with Perplexity, open three sources and write a verdict.",
      "Students classify AI problems they found: wrong facts, invented sources, bias, missing perspectives.",
      "The class writes guidelines for using AI responsibly in their subject.",
    ],
    examples: {
      Science: "Train a classifier for rocks, leaves or insects.",
      Mathematics:
        "Find the error in an AI solution; check its listed sources.",
      "Language Acquisition":
        "Compare AI answers about a culture for stereotypes.",
      Humanities:
        "Check fake quotes attributed to Abai; compare AI answers in three languages.",
    },
    moreIdeas: [
      "Discuss: who is the author of an AI image? Should AI images be labelled?",
    ],
    prompt:
      "Explain [topic] for Grade [X] students in 200 words and list three sources.",
    atl: "Media literacy (Research), Information literacy (Research), Critical thinking (Thinking)",
    profile: "Principled, Thinkers, Reflective",
    safety:
      "Some sources AI lists may not exist. That discovery is part of the lesson.",
  },
] as Practice[]

export const subjects: Subject[] = [
  "Science",
  "Mathematics",
  "Language Acquisition",
  "Humanities",
]

export const sourceRules = [
  "AI does the preparation; students do the thinking. They question, test, verify, create and reflect.",
  "Check everything AI produces before students see it.",
  "Age and privacy. ChatGPT is 13+ with parent consent. Claude is 18+, so it is a teacher tool. Prefer rooms where you can see every chat (MagicStudent, SchoolAI). Never enter students’ personal data.",
  "Keep the work visible. Drafts, chats and reflections show students’ own thinking.",
]
