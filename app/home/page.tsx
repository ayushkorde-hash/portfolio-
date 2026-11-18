import type { Metadata } from "next";
import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "Ayush Korde — Engineering Portfolio",
  description: "Explore Ayush Korde’s software engineering, full-stack projects, AI work, experience and community leadership.",
};

export default function PortfolioHome() {
  return <main className="site-shell">
    <Navbar />
    <Hero />
    <About />
    <Achievements />
    <Projects />
    <Skills />
    <Contact />
    <Footer />
  </main>;
}
