import About from "@/components/About";
import { BackgroundBeams } from "@/components/Background";
import Personal from "@/components/Personal";
import Navbar from "@/components/Navbar";
import MobileNavbar from "@/components/MobileNavbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row h-full snap-y snap-mandatory">
      <MobileNavbar/>
      <Personal/>
      <div className="flex flex-col w-full h-full">
        <Navbar />
        <section id="hero" className="snap-center">
          <Hero/>
        </section>
        <section id="about" className="snap-center">
          <About />
        </section>
        <section id="experience" className="snap-center">
          <Experience/>
        </section>
        <section id="skills" className="snap-center">
          <Skills/>
        </section>
      </div>
      <BackgroundBeams className="-z-[100] hidden fixed md:inline" />
    </div>
  );
}
