"use client";
import About from "@/components/About";
import { BackgroundBeams } from "@/components/Background";
import Personal from "@/components/Personal";
import Navbar from "@/components/Navbar";
import MobileNavbar from "@/components/MobileNavbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col xl:flex-row w-full h-full">
      <MobileNavbar />
      <Personal />
      <div className="flex flex-col w-full h-full">
        <Navbar />
        <Hero />
        <section id="about">
          <About />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
      <BackgroundBeams className="-z-[100] hidden fixed md:inline" />
    </div>
  );
}
