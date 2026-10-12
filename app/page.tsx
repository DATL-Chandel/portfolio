import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Affiliations from "@/components/Affiliations";
import ResearchAreas from "@/components/ResearchAreas";
import Projects from "@/components/Projects";
import TeamActivities from "@/components/TeamActivities";
import ResearchPublications from "@/components/ResearchPublications";
import Publications from "@/components/Publications";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: "transparent" }}>
      <Navbar />
      <Hero />
      <Stats />
      <Affiliations />
      <ResearchAreas />
      <Projects />
      <ResearchPublications />
      <Publications />
      <TeamActivities />
      <Footer />
    </main>
  );
}
