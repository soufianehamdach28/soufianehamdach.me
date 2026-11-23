"use client";

import ExperienceCard, { Experience } from "@/components/experience/card";
import { useState } from "react";

const educationList: Experience[] = [
  {
    role: "Specialized Technician in Digital Development (Full Stack Web)",
    company: "ISTA Taza",
    startDate: new Date("2021-09-01"),
    endDate: new Date("2024-07-01"),
    description: (
      <>
        Specialized higher training program in web and mobile full-stack software development. Covered frontend and backend frameworks (React, Node.js, Laravel), database design, Agile/Scrum collaboration, Clean Code, and UI/UX prototyping.
      </>
    ),
    url: "https://www.linkedin.com/in/soufianehamdach/",
  },
];

const EducationContainer = () => {
  const [hoveredKey, setHoveredKey] = useState<string | null>(null);

  return (
    <section
      id="EDUCATION"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <p className="text-foreground mb-8 font-bold text-xl">Education</p>
      <ol>
        {educationList.map((education) => (
          <ExperienceCard
            key={`${education.company}-${education.role}`}
            experience={education}
            isHovered={hoveredKey === `${education.company}-${education.role}`}
            isAnyHovered={hoveredKey !== null}
            onHoverChange={(hovered) =>
              setHoveredKey(hovered ? `${education.company}-${education.role}` : null)
            }
          />
        ))}
      </ol>
    </section>
  );
};

export default EducationContainer;
