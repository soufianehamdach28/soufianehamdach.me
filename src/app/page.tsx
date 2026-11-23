import EducationContainer from "@/components/education/container";
import ExperienceContainer from "@/components/experience/container";
import HeroSection from "@/components/hero-section";
// import MusicCard from "@/components/music-card";
import ProjectsContainer from "@/components/projects/container";
// import ShowcaseContainer from "@/components/showcase/container";
import Reveal from "@/components/ui/reveal";

export default function Home() {
  return (
    <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl sm:py-32 py-16 lg:pb-40">
        <HeroSection />
        <Reveal delay={0.35}>
          <ProjectsContainer />
        </Reveal>
        {/* Showcase section preserved and commented out for future use */}
        {/* <Reveal delay={0.375}>
          <ShowcaseContainer />
        </Reveal> */}
        <Reveal delay={0.4}>
          <ExperienceContainer />
        </Reveal>
        <Reveal delay={0.45}>
          <EducationContainer />
        </Reveal>
        {/* Spotify / Music Card preserved and commented out (uncomment if you add Spotify API credentials) */}
        {/* <Reveal delay={0.5}>
          <MusicCard spotifyTopTrack />
        </Reveal> */}
      </div>
    </div>
  );
}
