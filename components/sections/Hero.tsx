"use client";

import { ArrowDownRight, ArrowUpRight, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { profile } from "@/lib/portfolio";

const HeroScene = dynamic(() => import("@/components/hero/HeroScene"), {
  ssr: false,
  loading: () => <div className="scene-loading" aria-hidden="true" />,
});

export default function Hero() {
  return <section id="home" className="hero wrap">
    <div className="hero-copy">
      <motion.p className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .12 }}>Independent builder <span className="status-dot"/> Nashik, India</motion.p>
      <p className="hero-role">{profile.role}</p>
      <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .2 }}>I build software<br/><span>with purpose.</span></motion.h1>
      <motion.p className="hero-intro" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .55 }}>I’m Ayush Korde, an IT engineering student exploring the space where thoughtful products, full-stack engineering and applied AI meet.</motion.p>
      <motion.div className="hero-actions" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .7 }}>
        <a className="button button-light" href="#projects">Explore the work <ArrowDownRight size={16}/></a>
        <a className="text-link" href="/resume">View résumé <ArrowUpRight size={15}/></a>
      </motion.div>
      <div className="hero-social"><a href={profile.github} target="_blank" rel="noreferrer"><Github size={15}/> GitHub</a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={15}/> LinkedIn</a><span>Class of {profile.graduation}</span></div>
    </div>
    <motion.div className="hero-product-window" initial={{ opacity: 0, scale: .96, y: 12 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: .7, delay: .25 }}>
      <div className="product-window-bar"><div className="window-controls"><i/><i/><i/></div><span>AYUSH KORDE <b>/</b> PORTFOLIO</span><span className="window-state"><span className="status-dot"/> INTERACTIVE PREVIEW</span></div>
      <div className="sculpture-stage" aria-label="Interactive three-dimensional scene with abstract digital sculpture artwork"><HeroScene/><div className="stage-index">FIG. 01 <span>FORM STUDY</span></div><div className="depth-badge"><span className="status-dot"/> LIGHT STUDY <b>04 / 07</b></div><div className="stage-caption"><span>01 / DIGITAL IDENTITY</span><span>ART STUDY</span></div></div>
      <div className="product-window-footer"><span>PVGCOE NASHIK <i/> SPPU <i/> EXPECTED 2028</span><a href="#projects">View selected work <ArrowUpRight size={13}/></a></div>
    </motion.div>
    <a className="scroll-cue" href="#about"><span>Scroll to explore</span><ArrowDownRight size={15}/></a>
  </section>;
}
