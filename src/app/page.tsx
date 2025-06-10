import AboutSection from "@/components/about-section";
import AnimatedBackground from "@/components/animated-background";
import ContactSection from "@/components/contact-section";
// import ExperienceSection from "@/components/experience-section";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import NavigationBar from "@/components/navigation-bar";
import ProjectsSection from "@/components/projects-section";
import SkillsSection from "@/components/skills-section";
import SparklingCursor from "./sparkling-cursor";

export default function Home() {
  return (
    <div>
      <AnimatedBackground />
      <div className="bg-slate-950">
        <NavigationBar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        {/* <ExperienceSection /> */}
        <ContactSection />
        <Footer />
      </div>
      <SparklingCursor />
    </div>
  );
}
