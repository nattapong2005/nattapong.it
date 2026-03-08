"use client";

import { useEffect } from "react";
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
import ParticleBackground from "@/components/ParticleBackground";
import AmbientGlow from "@/components/AmbientGlow";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
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

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <ParticleBackground />
      <AmbientGlow />
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 sm:px-12 pt-20 pb-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 auto-rows-[minmax(180px,auto)]">
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
    </>
  );
}
