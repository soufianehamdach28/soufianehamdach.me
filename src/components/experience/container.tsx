"use client";

import ExperienceCard, { Experience } from "@/components/experience/card";
import { useState } from "react";

const experiences: Experience[] = [
  {
    role: "Web Support Specialist",
    company: "Web Services Support · Oujda",
    startDate: new Date("2025-12-01"),
    endDate: new Date("2026-03-01"),
    description: (
      <>
        Provided technical support and diagnostics for web services, troubleshooting client incidents, communicating issue resolutions, and collaborating closely with engineering teams for continuous platform improvements.
      </>
    ),
    url: "https://www.linkedin.com/in/soufianehamdach/",
  },
  {
    role: "Mobile Application Developer",
    company: "Client Project (NDA)",
    startDate: new Date("2024-10-01"),
    endDate: new Date("2025-02-25"),
    description: (
      <>
        Built a cross-platform mobile application using{" "}
        <span
          className="italic font-exposure text-foreground"
          style={{ fontFamily: "Exposure-30" }}
        >
          React Native
        </span>
        . Implemented live camera-based barcode scanning, integrated secure REST APIs for synchronized data management, and optimized database queries to deliver smooth performance under strict confidentiality standards.
      </>
    ),
    url: "https://github.com/soufianehamdach28",
  },
  {
    role: "Back-End Developer Intern",
    company: "Rakops Solution · Taza",
    startDate: new Date("2024-08-01"),
    endDate: new Date("2025-05-01"),
    description: (
      <>
        Engineered backend services for a geolocation-based healthcare directory connecting patients with medical specialists. Developed with Laravel, Jetstream, and MySQL, conducting object-oriented analysis and modeling (UML class and use-case diagrams).
      </>
    ),
    url: "https://www.linkedin.com/in/soufianehamdach/",
  },
  {
    role: "Software Developer Intern",
    company: "Yulia Group · Taza",
    startDate: new Date("2023-04-29"),
    endDate: new Date("2023-07-25"),
    description: (
      <>
        Developed a collaborative Scrum & Kanban project management application inspired by Jira. Designed relational databases using Merise methodology (MCD/MLD) and implemented backend persistence with MySQL.
      </>
    ),
    url: "https://www.linkedin.com/in/soufianehamdach/",
  },
  {
    role: "Specialized Technician in Digital Development (Full Stack Web)",
    company: "ISTA Taza",
    startDate: new Date("2021-09-01"),
    endDate: new Date("2024-07-01"),
    description: `Specialized higher training program in web and mobile full-stack software development. Covered frontend and backend frameworks (React, Node.js, Laravel), database design, Agile/Scrum collaboration, Clean Code, and UI/UX prototyping.`,
    url: "https://www.linkedin.com/in/soufianehamdach/",
  },
];

const ExperienceContainer = () => {
  const [hoveredKey, setHoveredKey] = useState<string | null>(null);

  return (
    <section
      id="EXPERIENCE"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <p className="text-foreground mb-8 font-bold text-xl">Experience</p>
      <ol>
        {experiences.map((experience) => (
          <ExperienceCard 
            key={`${experience.company}-${experience.role}`} 
            experience={experience}
            isHovered={hoveredKey === `${experience.company}-${experience.role}`}
            isAnyHovered={hoveredKey !== null}
            onHoverChange={(hovered) => setHoveredKey(hovered ? `${experience.company}-${experience.role}` : null)}
          />
        ))}
      </ol>
    </section>
  );
};

export default ExperienceContainer;
