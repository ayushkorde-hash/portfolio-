"use client";

import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="relative bg-[#080d1a] min-h-screen overflow-x-hidden">
      {/* Global grid background */}
      <div className="fixed inset-0 grid-bg opacity-100 pointer-events-none z-0" />

      {/* Ambient orbs */}
      <div className="fixed top-0 left-1/4 w-[600px] h-[600px] orb bg-indigo-600 pointer-events-none z-0" />
      <div className="fixed bottom-1/4 right-1/4 w-[400px] h-[400px] orb bg-violet-700 pointer-events-none z-0" />
      <div className="fixed top-1/2 left-0 w-[300px] h-[300px] orb bg-cyan-600 pointer-events-none z-0" />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
