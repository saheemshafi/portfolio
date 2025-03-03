import AboutMeSection from "@/components/Home/AboutMeSection";
import ContactSection from "@/components/Home/ContactSection";
import HeroSection from "@/components/Home/HeroSection";
import PortfolioSection from "@/components/Home/PortfolioSection";
import ProjectsSection from "@/components/Home/ProjectsSection";
import RepositoriesSection from "@/components/Home/RepositoriesSection";
import SkillsSection from "@/components/Home/SkillsSection";

export const revalidate = 0;

export default async function Home() {
  
  return (
    <main>
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <AboutMeSection />
      <ContactSection />
      <PortfolioSection />
      <RepositoriesSection />
    </main>
  );
}
