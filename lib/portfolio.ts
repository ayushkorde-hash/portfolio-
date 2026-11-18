export const profile = {
  name: "Ayush Korde",
  role: "Software Engineer · Full-Stack Developer · AI Engineer",
  education: "Information Technology Engineering · PVGCOE Nashik · SPPU",
  graduation: "2028",
  github: "https://github.com/Ayush-170906",
  githubAlt: "https://github.com/ayushkorde-hash",
  linkedin: "https://www.linkedin.com/in/ayush-korde-804b2a329",
  email: "ayushkorde17@gmail.com",
  portfolio: "https://portfolio-eight-nu-k6z9i11jaj.vercel.app/",
};

export const socialLinks = [
  { label: "LinkedIn", href: profile.linkedin, handle: "ayush-korde-804b2a329" },
  { label: "GitHub · Primary", href: profile.github, handle: "Ayush-170906" },
  { label: "GitHub · Additional", href: profile.githubAlt, handle: "ayushkorde-hash" },
  { label: "X", href: "https://x.com/AyushKorde1709", handle: "@AyushKorde1709" },
  { label: "Instagram", href: "https://www.instagram.com/_ayushhh.17_", handle: "@_ayushhh.17_" },
  { label: "Kaggle", href: "https://www.kaggle.com/ayushkorde", handle: "ayushkorde" },
  { label: "Google Skills", href: "https://www.skills.google/public_profiles/bd15b36f-0054-4df0-9029-20b3bdd02e54", handle: "Public profile" },
  { label: "AWS Builder", href: "https://builder.aws.com/community/@aayush1709", handle: "@aayush1709" },
];

export const projects = [
  { name: "Kumbh Setu", kind: "Civic technology · Kumbathon S.P.R.I.N.T. 2026", category: "Product", summary: "A field-to-control-room platform for coordination and response during mass gatherings.", detail: "Designed around the operational gap between on-ground signals and centralized response. Sarvam AI integration is part of the project brief.", tags: ["Mass gathering response", "Control-room coordination", "Sarvam AI"], mark: "KS", tone: "blue", image: "https://upload.wikimedia.org/wikipedia/commons/8/8d/B2M_-_AI_x_Robotics_Handshake.png", imageAlt: "Robotic and digital hands meeting in a handshake; conceptual collaboration artwork.", credit: "Artwork by Radosław Buk · CC0 · Wikimedia Commons", creditUrl: "https://commons.wikimedia.org/wiki/File:B2M_-_AI_x_Robotics_Handshake.png" },
  { name: "Jan Arogya Nexus", kind: "Healthcare coordination", category: "Product", summary: "A consent-first platform concept for coordinating care across healthcare participants.", detail: "A multi-tenant architecture built with React, Vite, TypeScript and Tailwind, with consent and access boundaries at its core.", tags: ["React", "Vite", "TypeScript", "Tailwind", "Multi-tenant"], mark: "JN", tone: "silver", image: "/images/digital-figure.jpg", imageAlt: "Abstract digital human artwork used as conceptual imagery." },
  { name: "TicketWala / FlashLock", kind: "Concurrency · Inventory systems", category: "Systems", summary: "A flash-reservation engine designed to protect seat inventory under contention.", detail: "Redis and Lua based locking keeps reservation decisions atomic; concurrency testing explores behavior under competing requests.", tags: ["Redis", "Lua", "Inventory locking", "Concurrency testing"], mark: "FL", tone: "amber" },
  { name: "Mindease", kind: "AI · Mental wellness", category: "AI", summary: "An AI-powered mental wellness project exploring supportive digital experiences.", detail: "A project exploring how AI can support mental wellness. Further product and outcome details can be added as the project evolves.", tags: ["AI", "Mental wellness"], mark: "Me", tone: "rose", image: "/images/luminous-form.jpg", imageAlt: "Luminous abstract human silhouette, used as mood-setting artwork." },
  { name: "StudyGenie", kind: "AI · Learning", category: "AI", summary: "A learning assistant concept using retrieval-augmented generation.", detail: "A concept for grounding learning support in retrieved study material with a retrieval-augmented generation workflow.", tags: ["RAG", "AI", "Learning"], mark: "SG", tone: "violet", image: "/images/developer-wireframe.jpg", imageAlt: "Wireframe illustration of a developer working at a laptop." },
];

export const experience = [
  { title: "LevelUp Solutions", role: "AI Intern", period: "July–September 2026", note: "AI internship experience." },
  { title: "Deloitte", role: "Virtual Data Analyst Internship", period: "Forage simulation", note: "Completed a virtual data analyst internship program." },
  { title: "Tata iQ / Geldium", role: "Exploratory Data Analysis & Risk Profiling", period: "Project experience", note: "Exploratory analysis and risk profiling work." },
  { title: "Mindrift", role: "AI experience", period: "Completed", note: "Completed experience with Mindrift." },
];

export const communities = ["Google Student Ambassador", "GDG PVGCOE · Community Lead", "CodePVG · Data Manager", "E-Cell · Event Head", "Zenith Association · Leadership"];
export const recognitions = [
  { title: "GDG Community Impact Award", state: "Award" },
  { title: "GDG · Most References", state: "Individual recognition" },
  { title: "Avishkar university-level presentation", state: "Result awaited" },
  { title: "College-level research paper", state: "Published" },
];
export const skillGroups = [
  { name: "Languages", items: ["TypeScript", "JavaScript", "Python"] },
  { name: "Frontend", items: ["React", "Vite", "Tailwind CSS"] },
  { name: "Backend & AI", items: ["Redis", "Lua", "RAG", "Sarvam AI"] },
  { name: "Data & tools", items: ["Exploratory data analysis", "Risk profiling", "GitHub"] },
];
