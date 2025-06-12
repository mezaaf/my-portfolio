import AboutSection from "@/components/about/AboutSection";
import HeroSection from "@/components/hero/HeroSection";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center space-y-16 sm:space-y-20 lg:space-y-24">
      <HeroSection />
      {/* <TextScroll /> */}
      <AboutSection />
    </div>
  );
}
