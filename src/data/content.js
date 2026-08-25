export const profile = {
  name: 'Junaid Aslam',
  initials: 'JA',
  roles: [
    'Full-Stack Software Engineer',
    'SDET · Playwright · Pytest',
    'AI-Assisted Developer',
    'Freelance MVP Builder',
  ],
  location: 'Lisbon, Portugal',
  email: 'junaidaslam.muet@gmail.com',
  github: 'https://github.com/20sw084',
  githubHandle: 'github.com/20sw084',
  linkedin: 'https://www.linkedin.com/in/20sw084/',
  linkedinHandle: 'linkedin.com/in/20sw084',
  upwork: 'https://www.upwork.com/freelancers/~01e3372ae04f24797d',
  upworkHandle: 'Upwork · 4.8★',
  summary:
    "I build and ship full-stack products — backend services, APIs, and the interfaces on top of them — for teams that need working software, not a longer roadmap. Four years in, split between independent client delivery and in-house fintech work. Take a rough requirement, design the data model and API, build the service, wire up the client, containerise it, ship it, then stay on to maintain it.",
  aiNote:
    "Cursor and Claude Code are in my daily toolchain. They compress the unglamorous 60% of delivery — scaffolding, test coverage, refactors, boilerplate, migrations — so the time stays on architecture and edge cases. In practice, that's the difference between a six-week MVP and a six-month one.",
  openTo: [
    'Contract & freelance engagements — available now',
    'Part-time / working-student roles in Italy & Portugal',
    'Full-time remote Software Engineer roles — EU, UK, US, Canada',
  ],
  stats: [
    { value: '4+', label: 'years shipping software' },
    { value: '70+', label: 'freelance projects delivered' },
    { value: '4.8★', label: 'Upwork & Fiverr rating' },
    { value: '3', label: 'regions served' },
    { value: '94', label: 'public GitHub repos' },
    { value: '45%', label: 'fewer prod defects at Troon' },
  ],
}

export const experience = [
  {
    company: 'Troon Technologies',
    role: 'Software Engineer',
    period: 'Jan 2025 — Oct 2025',
    duration: '10 mos',
    place: 'Islamabad, Pakistan · Remote',
    bullets: [
      'Built and shipped multi-tenant virtual account management, crypto-to-fiat conversion modules, and high-limit card issuance UI using Nest.js, React, Tailwind CSS, and PostgreSQL — cut partner fintech integration time from 3 months to 5 days.',
      'Designed REST API orchestration connecting U.S./EU banking rails, SAFE Trust custody, and third-party liquidity providers, enabling multi-asset settlement and cutting manual compliance work by 25 hrs/week.',
      'Introduced event-driven audit logging, automated KYC/AML abstractions, and SOC 2-ready access controls — accelerated MVP delivery from 6 months to under 5, and cut production release defects by 45%.',
    ],
    tags: ['Nest.js', 'React', 'Tailwind', 'PostgreSQL', 'Fintech'],
  },
  {
    company: 'FAST-NUCES, Karachi Campus',
    role: 'Lab Instructor',
    period: 'Jul 2025 — Oct 2025',
    duration: '3 mos',
    place: 'Karachi, Pakistan',
    bullets: [
      'Delivered programming lab instruction to 200+ undergrads across Programming Fundamentals, OOP, and Data Structures & Algorithms — designed assignments and assessment criteria.',
      'Mentored students in debugging, code structure, and Git — lifted average lab assessment scores by 30% across the term.',
    ],
    tags: ['Teaching', 'DSA', 'OOP', 'Mentorship'],
  },
  {
    company: 'Upwork',
    role: 'Freelance Software Engineer',
    period: 'Apr 2022 — Jan 2025',
    duration: '2 yrs 10 mos',
    place: 'Remote · United States clients',
    bullets: [
      'Delivered 70+ end-to-end projects across 3 regions — Java/C++ apps, Flutter mobile apps, and database-backed web services — sustaining a 4.8★ rating and 40% repeat-client rate.',
      'Built cross-platform Flutter/Dart apps with Firebase backends, REST integrations, Google Maps, and offline storage — took 5–6 apps from empty repo to store release.',
      'Owned the full delivery cycle solo: requirements, architecture, implementation, testing, deployment, and post-launch support.',
    ],
    tags: ['Flutter', 'Firebase', 'Java', 'Client Delivery'],
  },
  {
    company: 'Bytewise Ltd.',
    role: 'Software Engineer',
    period: 'Feb 2022 — Apr 2022',
    duration: '3 mos',
    place: 'Islamabad, Pakistan',
    bullets: [
      'Selected as a Bytewise Fellow on the Flutter track from a pool of 2,300+ applicants.',
      'Designed scalable architectures, built mobile apps with Java/Flutter/XCode, mentored fellow developers, and integrated third-party APIs.',
    ],
    tags: ['Flutter', 'Java', 'Mentorship'],
  },
  {
    company: 'Intrapreneur PK',
    role: 'Software Developer',
    period: 'Nov 2021 — Jan 2022',
    duration: '3 mos',
    place: 'Karachi, Pakistan',
    bullets: [
      'Completed a 3-month Flutter development programme — converted UI designs into production screens.',
      'Integrated REST APIs, local databases, and Google Maps into live client applications.',
    ],
    tags: ['Flutter', 'REST APIs'],
  },
]

export const education = [
  {
    school: 'Universidade de Lisboa',
    degree: 'MSc, Informatics (Erasmus+ exchange)',
    period: 'Aug 2026 — Jul 2027',
    note: 'Faculty of Sciences, Department of Informatics.',
  },
  {
    school: "Università degli Studi dell'Aquila",
    degree: 'Laurea Magistrale, Computing Systems Engineering',
    period: 'Sep 2025 — Jul 2026',
    note: '120 ECTS, taught in English — distributed systems, software architecture, advanced algorithms.',
  },
  {
    school: 'Mehran University of Engineering & Technology',
    degree: 'BE, Software Engineering',
    period: 'Nov 2020 — Dec 2024',
    note: 'Top 20% of cohort.',
  },
]

export const projects = [
  {
    title: 'Fintech Virtual Accounts & Settlement',
    org: 'Troon Technologies · Production',
    description:
      'Multi-tenant virtual account management, crypto-to-fiat conversion, and card issuance UI, with REST orchestration across U.S./EU banking rails and third-party liquidity providers.',
    impact: '3 months → 5 days integration time · 45% fewer prod defects',
    stack: ['Nest.js', 'React', 'Tailwind', 'PostgreSQL', 'REST'],
    link: null,
  },
  {
    title: 'IntelliFarm',
    org: 'Final Year Project',
    description:
      'Farm supervision & productivity analysis platform centralizing agricultural operations and improving coordination between landlords and farmers through data-driven insights.',
    impact: 'End-to-end mobile platform, Firebase-backed analytics',
    stack: ['Flutter', 'Dart', 'Firebase', 'Data Analytics'],
    link: 'https://github.com/20sw084/intellifarm',
  },
  {
    title: 'AI-Powered Fake Media Detection',
    org: 'ML Prototype',
    description:
      'Machine learning prototype detecting potentially manipulated or fake media content, combining a trained classifier with NLP signal analysis.',
    impact: 'Applied CV + NLP pipeline for media authenticity scoring',
    stack: ['Python', 'TensorFlow', 'NLTK', 'ML/NLP'],
    link: null,
  },
  {
    title: 'Dynamic Bluetooth Command App',
    org: 'Android',
    description:
      'Android app that dynamically generates UI and command workflows based on permissions from a remote REST API, with secure token-based sessions.',
    impact: 'Secure login, periodic permission sync, auto-logout',
    stack: ['Kotlin', 'Android SDK', 'REST', 'Bluetooth'],
    link: null,
  },
  {
    title: 'E-Commerce Mobile & Tablet App',
    org: 'Cross-platform',
    description:
      'Cross-platform e-commerce app for mobile and tablet with a Node.js backend and Firebase services powering catalogue, cart, and orders.',
    impact: 'Shipped across phone + tablet form factors',
    stack: ['Flutter', 'Dart', 'Node.js', 'Firebase'],
    link: 'https://github.com/20sw084/E-commerce-Application-Flutter',
  },
  {
    title: 'Sereni AZIMUT A/V Control Interface',
    org: 'Client Project',
    description:
      'Responsive web app simulating an audio/video control interface for the Sereni Elettronica AZIMUT system — multi-zone A/V management and remote-control actions.',
    impact: 'Multi-zone control UI, fully responsive',
    stack: ['Vue.js 2', 'JavaScript', 'SCSS'],
    link: null,
  },
]

export const skills = [
  {
    group: 'Backend',
    items: ['Node.js', 'Nest.js', 'Python / FastAPI', 'Java', 'REST APIs', 'Microservices'],
  },
  {
    group: 'Frontend & Mobile',
    items: ['React', 'Vue.js', 'Flutter', 'Dart', 'JavaScript', 'Tailwind CSS'],
  },
  {
    group: 'Data',
    items: ['PostgreSQL', 'MySQL', 'Redis', 'Firebase', 'Cloud Firestore'],
  },
  {
    group: 'Cloud & DevOps',
    items: ['Docker', 'Kubernetes', 'Helm', 'AWS', 'Azure', 'GCP', 'CI/CD', 'Linux'],
  },
  {
    group: 'Quality & Testing',
    items: ['Selenium', 'Playwright', 'Cypress', 'Pytest', 'TDD', 'SDET Practices'],
  },
  {
    group: 'AI-Assisted Development',
    items: ['Cursor', 'Claude Code', 'Prompt Engineering'],
  },
]

export const terminalHelp = [
  { cmd: 'about', desc: 'who is Junaid' },
  { cmd: 'experience', desc: 'jump to work history' },
  { cmd: 'projects', desc: 'jump to featured projects' },
  { cmd: 'skills', desc: 'jump to tech stack' },
  { cmd: 'contact', desc: 'jump to contact section' },
  { cmd: 'resume', desc: 'open the CV' },
  { cmd: 'upwork', desc: 'open Upwork profile' },
  { cmd: 'sudo hire junaid', desc: '???' },
  { cmd: 'clear', desc: 'clear the terminal' },
]
