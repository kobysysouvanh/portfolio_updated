import About from "@/components/About";
import { BackgroundBeams } from "@/components/Background";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="flex-col h-full snap-y snap-mandatory">
      <Navbar />
      <Hero />
      <section id="about" className="snap-center">
        <About />
      </section>
      <BackgroundBeams className="-z-[100] hidden sm:inline" />
    </div>
  );
}
