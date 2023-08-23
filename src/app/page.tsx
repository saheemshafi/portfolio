import ContactSection from "@/components/Home/ContactSection";
import HeroSection from "@/components/Home/HeroSection";
import PortfolioSection from "@/components/Home/PortfolioSection";
import ProjectsSection from "@/components/Home/ProjectsSection";
import RepositoriesSection from "@/components/Home/RepositoriesSection";
import SkillsSection from "@/components/Home/SkillsSection";
import Repository from "@/components/Repository";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import supabase from "@/lib/supabase/supabase";

export const revalidate = 43200; // Revalidate after 12 hours : 43200 seconds;

export default async function Home() {
  const repos = await supabase.from("repositories").select();

  const portfolio = repos.data?.find(
    ({ repositoryName }) => repositoryName == "portfolio",
  );
  if (repos.error) {
    throw new Error(repos.error?.message);
  }

  return (
    <main>
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <PortfolioSection />
      <RepositoriesSection />
    </main>
  );
}
