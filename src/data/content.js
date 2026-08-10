export const profile = {
  name: "Owen Richards",
  roles: [
    "Software Engineer",
    "Full-Stack Developer",
    "Cloud Engineer",
    "Data Analyst",
  ],
  tagline:
    "Recent Computer Science grad building full-stack, cloud, and AI-backed systems.",
};

export const social = {
  github: "https://github.com/OwenRichards4",
  linkedin: "https://www.linkedin.com/in/orichards4/",
  googleSites: "https://sites.google.com/view/owenr-userinterface/home",
};

export const education = [
  {
    degree: "Master's in Science, Data Analytics",
    school: "Alvernia University",
    period: "2026 – 2028",
  },
  {
    degree: "Bachelor's in Science, Computer Science and Applied Engineering",
    detail: "Undergraduate Certificate in Software Engineering",
    school: "University of Cincinnati",
    period: "2020 – 2025",
  },
];

export const about = [
  "I'm a recent graduate with four co-op rotations at Siemens Digital Industries Software, where I worked on full-stack development, cloud data management, and data pipeline integrations.",
  "My experience includes building and maintaining AWS-backed services (such as Lambda, DynamoDB, S3, IAM, and API Gateways), developing company-standard websites and applications to enhance worker productivity, and researching the deployment and fine-tuning capabilities of multiple AI models.",
];

export const experience = [
  {
    company: "Siemens Digital Industries Software",
    period: "May 2022 – Aug 2024",
    note: "Completed four co-op rotations integrated into the academic calendar.",
    rotations: [
      {
        title: "Data Engineering Intern",
        period: "May 2024 – Aug 2024",
        points: [
          "Implemented an S3–Lambda–Power BI workflow to automatically process uploaded project data and publish summarized reports via IAM-secured connections.",
        ],
      },
      {
        title: "AI/ML Engineering Intern",
        period: "Aug 2023 – Dec 2023",
        points: [
          "Evaluated LLMs on AWS Bedrock and fine-tuned Amazon Titan for internal applications.",
          "Designed an AI chat interface using HTML, CSS, and JavaScript to interact with Llama 2 through API calls, enabling simplified integration of additional models.",
        ],
      },
      {
        title: "Data/Software Engineering Intern",
        period: "Jan 2023 – May 2023",
        points: [
          "Developed an AWS Lambda pipeline that aggregated EC2 and RDS budget data from nine projects and pushed structured data to DynamoDB, improving data accessibility and cost tracking.",
          "Created a financial dashboard using HTML, CSS, and JavaScript to visualize JSON-structured budgeting data, saving the company tens of thousands in monthly expenses.",
        ],
      },
      {
        title: "Technical Marketing Intern",
        period: "May 2022 – Aug 2022",
        points: [
          "Programmed 13 macros in PowerPoint to standardize presentations to match Siemens' branding guidelines.",
        ],
      },
    ],
  },
];

export const skills = [
  {
    label: "Programming",
    items: ["Python", "JavaScript", "TypeScript", "Java", "C++", "HTML/CSS", "VBA"],
  },
  {
    label: "Cloud & Backend",
    items: ["AWS (Lambda, DynamoDB, S3, IAM, API Gateway)", "REST APIs", "Linux", "CI/CD"],
  },
  {
    label: "Data & Analytics",
    items: ["SQL", "NoSQL", "Pandas", "NumPy", "Power BI", "JSON", "CSV"],
  },
  {
    label: "AI/ML",
    items: ["ChatGPT", "Claude", "AWS Bedrock", "Amazon Titan", "LLM Evaluation", "Model Fine-Tuning"],
  },
  {
    label: "Frameworks & Tools",
    items: ["GitHub", "Node.js", "React", "Angular", "Svelte"],
  },
];

export const featuredProject = {
  name: "Finance Tracker",
  status: "Live Demo",
  description:
    "A personal finance and tip-tracking dashboard with take-home estimates, tax projections, and shift analytics. The full app requires sign-in — try the interactive demo with sample data.",
  demoHref: "https://income-tracker-or.vercel.app/demo",
  assetKey: "financeTracker",
};

export const projects = [
  {
    name: "Live Streaming Platform",
    href: "https://owenrichards4.github.io/Live-Streaming-Platform/",
    assetKey: "liveStreamPlatform",
  },
  {
    name: "Database System",
    href: "https://github.com/OwenRichards4/Client-Database",
    assetKey: "databaseSystem",
  },
  {
    name: "Financial Dashboard",
    href: "https://owenrichards4.github.io/Financial-Dashboard/",
    assetKey: "financialDash",
  },
  {
    name: "RL Statistics Tracker",
    href: "https://owenrichards4.github.io/UI-Project-1/",
    assetKey: "rlStatTracker",
  },
];

export const contactFormAction = "https://formspree.io/f/mvgejqpp";
