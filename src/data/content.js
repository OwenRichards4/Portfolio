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
          {
            label: "Amazon Web Services",
            text: "CI/CD pipeline through S3, Lambda, and DynamoDB to pull, sort, and alter data later pushed to Power BI using IAM roles and API Gateways.",
          },
          {
            label: "Camtasia",
            text: "Video creation using AI tools. Competition held with all the co-op students to improve current AI training systems.",
          },
          {
            label: "Mendix",
            text: "Contributed to software updates to the Siemens Xplore application.",
          },
        ],
      },
      {
        title: "AI Research and Integration Intern",
        period: "Aug 2023 – Dec 2023",
        points: [
          {
            label: "Work Laptop AI Integration",
            text: "Researched and developed ways to use AI locally on work laptops with low RAM.",
          },
          {
            label: "Siemens LLM Chat Website",
            text: "Created an AI chat website using HTML, JavaScript, and CSS with API calls to Llama 2.",
          },
          {
            label: "AI Prompting",
            text: "Recorded the responses and differences across the 13 models provided on AWS.",
          },
          {
            label: "AI Fine-Tuning",
            text: "Researched and briefly fine-tuned AWS Titan on release.",
          },
        ],
      },
      {
        title: "Data/Software Engineering Intern",
        period: "Jan 2023 – May 2023",
        points: [
          {
            label: "AWS Pipeline",
            text: "Pulled spending and instance data from 13 AWS projects into one centralized project using API Gateways, with sorting and filtering in Lambda pushed to DynamoDB — saved the company $20,000 in unneeded spending.",
          },
          {
            label: "AWS Financial Dashboard",
            text: "Created my first website (HTML, JavaScript, CSS) to display the DynamoDB table, later saving the company tens of thousands in unneeded spending.",
          },
        ],
      },
      {
        title: "Technical Marketing Intern",
        period: "May 2022 – Aug 2022",
        points: [
          {
            label: "Siemens Presentation Assistant",
            text: "Programmed 11 macros in PowerPoint using Visual Basic for Applications to automate company-standard formatting, then built a PowerPoint extension with its own ribbon (XML) to surface them.",
          },
          {
            label: "Excel Email Automation",
            text: "Built a macro for a 10,000+ row Excel file of employee project assignments that generates a ready-to-send Outlook email for each person on a given project.",
          },
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
    items: ["SQL", "NoSQL", "Pandas", "NumPy", "Power BI", "JSON", "CSV", "R"],
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
    name: "Live Streaming Platform",
    href: "https://owenrichards4.github.io/Live-Streaming-Platform/",
    assetKey: "liveStreamPlatform",
  },
  {
    name: "RL Statistics Tracker",
    href: "https://owenrichards4.github.io/UI-Project-1/",
    assetKey: "rlStatTracker",
  },
];

export const contactFormAction = "https://formspree.io/f/mvgejqpp";
