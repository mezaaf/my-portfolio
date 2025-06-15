import AboutSection from "@/components/about/AboutSection";
import ContactSection from "@/components/contact/ContactSection";
import HeroSection from "@/components/hero/HeroSection";
import ProjectSection from "@/components/projects/ProjectSection";
import ResumeSection from "@/components/resume/ResumeSection";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center space-y-16 sm:space-y-20 lg:space-y-24">
      <HeroSection />
      <AboutSection />
      <ResumeSection />
      <ProjectSection />
      <ContactSection />
    </div>
  );
}
