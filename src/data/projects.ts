export interface Project {
  title: string;
  slug: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  video?: string;
  url?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "SmartStudy-AI",
    slug: "smartstudy-ai",
    description: "AI mobile learning assistant with summaries, quizzes & citations",
    longDescription:
      "A mobile learning assistant application. Import courses in PDF or TXT format and let AI summarize content, generate flashcards, create adaptive quizzes, and answer questions with citations.",
    image: "/images/rnmotion.png",
    tags: ["React Native", "NestJS", "PostgreSQL", "Prisma", "BullMQ", "LLM"],
    video: undefined,
    url: "https://github.com/soufianehamdach28/SmartStudy-AI",
    featured: true,
  },
  {
    title: "Social Network Platform",
    slug: "social-network",
    description: "Real-time social platform with NestJS, WebSockets, and Next.js",
    longDescription:
      "A full-stack social networking platform engineered with NestJS, Next.js, and WebSockets. Features real-time direct messaging, dynamic feeds, social reactions, and PostgreSQL persistence with Prisma ORM, containerized with Docker.",
    image: "/images/focusgrid.png",
    tags: ["NestJS", "Next.js", "WebSockets", "PostgreSQL", "Docker", "Prisma"],
    video: undefined,
    url: "https://github.com/soufianehamdach28/social-network",
    featured: true,
  },
  {
    title: "Shopify Product MCP",
    slug: "shopify-product-mcp",
    description: "MCP server & web application for public Shopify product catalogs",
    longDescription:
      "Model Context Protocol (MCP) server and browser UI for searching public Shopify product catalogs. Allows browsing any store, filtering collections, and connecting Claude or AI agent workflows directly.",
    image: "/images/themegen.png",
    tags: ["TypeScript", "MCP", "AI Agents", "Next.js", "Shopify API"],
    video: undefined,
    url: "https://github.com/soufianehamdach28/shopify-product-mcp",
    featured: true,
  },
  {
    title: "Mutqan — مُتقَن",
    slug: "mutqan",
    description: "Mobile marketplace connecting clients with verified pros in Morocco",
    longDescription:
      "A premium mobile marketplace connecting individuals with certified service professionals across Morocco. Features real-time chat, quote requests, portfolio showcases, and geolocation-based discovery.",
    image: "/images/movati.jpg",
    tags: ["React Native", "TypeScript", "Mobile", "Real-Time Chat", "Geolocation"],
    video: undefined,
    url: "https://github.com/soufianehamdach28/Mutqan",
    featured: true,
  },
  {
    title: "GreenScape",
    slug: "greenscape",
    description: "Landscaping service platform with scroll animations & mobile-first design",
    longDescription:
      "A premium landscaping portfolio and service website featuring interactive scroll animations, dynamic routing, and a responsive mobile-first design built on Next.js, TypeScript, and Tailwind CSS.",
    image: "/images/favicon-gen.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Motion"],
    video: undefined,
    url: "https://github.com/soufianehamdach28/GreenScape",
    featured: true,
  },
  {
    title: "WordWeaver",
    slug: "wordweaver",
    description: "Interactive text analyzer & manipulation tool with Speech Synthesis",
    longDescription:
      "A fast, lightweight text analyzer and manipulation tool built with React. Features case conversions, number and link extraction, speech synthesis audio playback, real-time metrics, and dark mode.",
    image: "/images/og-checker.png",
    tags: ["React", "JavaScript", "Web Speech API", "Bootstrap"],
    video: undefined,
    url: "https://github.com/soufianehamdach28/WordWeaver",
    featured: false,
  },
  {
    title: "5link",
    slug: "5link",
    description: "Full-stack link aggregation & bio-link platform with Express & React",
    longDescription:
      "A full-stack link management and bio-link web application. Features custom link collections, click analytics, and clean REST API integration built with Express.js and modern frontend UI.",
    image: "/images/medley.jpg",
    tags: ["Express.js", "React", "Node.js", "REST API", "JavaScript"],
    video: undefined,
    url: "https://github.com/soufianehamdach28/5link",
    featured: false,
  },
];
