"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import PersonalInfo from "@/components/PersonalInfo";
import Education from "@/components/Education";
import ITKnowledge from "@/components/ITKnowledge";
import Skills from "@/components/Skills";
import Activities from "@/components/Activities";
import TechStack from "@/components/TechStack";
import Certifications from "@/components/Certifications";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LinuxTerminal from "@/components/LinuxTerminal";
import ParticleBackground from "@/components/ParticleBackground";
import AmbientGlow from "@/components/AmbientGlow";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll(".slide-up");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    elements.forEach((el, index) => {
      (el as HTMLElement).style.animationDelay = `${(index % 4) * 150}ms`;
      observer.observe(el);
    });

    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll(".bento-card");
      cards.forEach((card) => {
        const rect = (card as HTMLElement).getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        (card as HTMLElement).style.setProperty("--mouse-x", `${x}px`);
        (card as HTMLElement).style.setProperty("--mouse-y", `${y}px`);
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      observer.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <ParticleBackground />
      <AmbientGlow />
      <Navbar onOpenTerminal={() => setIsTerminalOpen(true)} />

      <main className="max-w-7xl mx-auto px-6 sm:px-12 pt-40 pb-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 auto-rows-[minmax(200px,auto)]">
          <Hero />
          <Experience />
          <PersonalInfo />
          <Education />
          <ITKnowledge />
          <Skills />
          <Activities />
          <TechStack />
          <Certifications />
          <Projects />
          <Contact />
        </div>
      </main>

      <Footer />
      <ScrollToTop />
      <LinuxTerminal isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />
    </>
  );
}
