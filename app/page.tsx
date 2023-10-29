import HeroSection from "@/components/HeroSection";
import Projects from "@/components/ProjectsInfo/Projects";
import Technologies from "@/components/Technologies/Technologies";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 lg:p-24">
      <HeroSection />
      <header className="text-2xl font-bold text-center pb-5">
        Tech I Use
      </header>
      <Technologies />
      <header className="text-2xl font-bold text-center p-24">
        Web Projects
      </header>
      <Projects />
    </main>
  );
}
