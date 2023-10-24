import HeroSection from "@/components/HeroSection";
import Technologies from "@/components/Technologies/Technologies";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <HeroSection />
      <header className="text-2xl font-bold text-center pb-5">
        Tech I Use
      </header>
      <Technologies />
    </main>
  );
}
