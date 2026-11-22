"use client";

import ThemeToggle from "@/components/theme-toggle";
import Reveal from "@/components/ui/reveal";
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  // XIcon,
  // InstagramIcon,
} from "@/components/ui/svg-icons";

export default function HeroSection() {
  return (
    <div>
      <Reveal delay={0}>
        <div className="flex flex-row justify-between gap-3 mb-3">
          <h1
            className="text-4xl font-black"
            style={{ fontFamily: "Exposure-50" }}
          >
            hey, I<span className="font-sans">&apos;</span>m Soufiane
          </h1>
          <ThemeToggle />
        </div>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="text-lg font-sans text-muted mb-3">
          full stack developer & mobile engineer
        </p>
      </Reveal>
      <Reveal delay={0.2}>
        <div className="flex flex-row gap-3 mb-8">
          {/* LinkedIn Profile */}
          <a
            href="https://www.linkedin.com/in/soufianehamdach/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:scale-105 active:scale-[0.96] transition-transform duration-[160ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
          >
            <LinkedInIcon className="text-muted hover:text-foreground transition-colors duration-200" />
          </a>

          {/* GitHub Profile */}
          <a
            href="https://github.com/soufianehamdach28"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:scale-105 active:scale-[0.96] transition-transform duration-[160ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
          >
            <GitHubIcon className="text-muted hover:text-foreground transition-colors duration-200" />
          </a>

          {/* Email Contact */}
          <a
            href="mailto:soufiane.hamdach28@gmail.com"
            aria-label="Email"
            className="hover:scale-105 active:scale-[0.96] transition-transform duration-[160ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
          >
            <MailIcon className="text-muted hover:text-foreground transition-colors duration-200" />
          </a>

          {/* X / Twitter (kept commented out for future use) */}
          {/*
          <a
            href="https://x.com/your_handle"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="hover:scale-105 active:scale-[0.96] transition-transform duration-[160ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
          >
            <XIcon className="text-muted hover:text-foreground transition-colors duration-200" />
          </a>
          */}

          {/* Instagram (kept commented out for future use) */}
          {/*
          <a
            href="https://www.instagram.com/your_handle"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:scale-105 active:scale-[0.96] transition-transform duration-[160ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
          >
            <InstagramIcon className="text-muted hover:text-foreground transition-colors duration-200" />
          </a>
          */}
        </div>
      </Reveal>
      <Reveal delay={0.3}>
        <p className="text-lg text-muted mb-8">
          I build high-performance web and mobile applications with modern architectures.
          I care deeply about the details —{" "}
          <span
            className="italic font-exposure text-foreground"
            style={{ fontFamily: "Exposure-30" }}
          >
            responsive
          </span>{" "}
          interfaces,{" "}
          <span
            className="italic font-exposure text-foreground"
            style={{ fontFamily: "Exposure-30" }}
          >
            robust
          </span>{" "}
          performance, and clean maintainable code.
          <br />
          <br />
          My core stack centers on Next.js and React Native on the frontend, with NestJS, Laravel, Node.js, and PostgreSQL powering scalable backends.
        </p>
      </Reveal>
    </div>
  );
}
