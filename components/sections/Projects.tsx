"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, Check, Github } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { projects, profile } from "@/lib/portfolio";

const filters = ["All work", "Product", "Systems", "AI"] as const;
type Filter = (typeof filters)[number];

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("All work");
  const [selected, setSelected] = useState(projects[0].name);
  const visible = useMemo(() => filter === "All work" ? projects : projects.filter(project => project.category === filter), [filter]);
  const active = visible.find(project => project.name === selected) ?? visible[0];

  return <section id="projects" className="section wrap work-section">
    <div className="section-head"><p className="eyebrow">03 — Workbench / Case studies</p><h2>Engineering, organized<br/><span>around real problems.</span></h2><p className="head-note">Browse selected product, systems and AI work. Each entry opens with the problem, approach and technologies involved.</p></div>
    <div className="workbench">
      <div className="workbench-toolbar"><div><span className="toolbar-dot"/><span>PROJECT EXPLORER</span></div><span>{String(visible.length).padStart(2, "0")} ITEMS</span></div>
      <div className="workbench-filters" role="group" aria-label="Filter projects">
        {filters.map(option => {
          const count = option === "All work" ? projects.length : projects.filter(project => project.category === option).length;
          return <button key={option} type="button" className={filter === option ? "active" : ""} aria-pressed={filter === option} onClick={() => { setFilter(option); const next = option === "All work" ? projects : projects.filter(project => project.category === option); if (!next.some(project => project.name === selected)) setSelected(next[0].name); }}>
            {option}<span>{String(count).padStart(2, "0")}</span>
          </button>;
        })}
      </div>
      <div className="workbench-body">
        <nav className="project-sidebar" aria-label="Projects">
          {visible.map((project, index) => <button key={project.name} type="button" className={active.name === project.name ? "selected" : ""} aria-pressed={active.name === project.name} onClick={() => setSelected(project.name)}>
            <span className="project-ordinal">{String(index + 1).padStart(2, "0")}</span><span className="project-select-copy"><strong>{project.name}</strong><small>{project.kind}</small></span>{active.name === project.name ? <Check size={15}/> : <span className="project-arrow">↗</span>}
          </button>)}
        </nav>
        <AnimatePresence mode="wait">
          <motion.article className={`case-panel project-${active.tone}`} key={active.name} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: .2 }}>
            <div className="case-visual">
              {"image" in active && active.image ? <Image src={active.image} alt={active.imageAlt} fill sizes="(max-width: 900px) 90vw, 60vw"/> : <div className="case-mark">{active.mark}</div>}
              <span className="case-count">CASE / {String(projects.findIndex(project => project.name === active.name) + 1).padStart(2, "0")}</span>
              <span className="case-visual-label">{"image" in active && active.image ? "CONCEPTUAL ARTWORK" : active.category.toUpperCase()}</span>
            </div>
            <div className="case-copy"><div className="case-kicker"><span>{active.category.toUpperCase()}</span><span>SELECTED PROJECT</span></div><h3>{active.name}</h3><p className="case-summary">{active.summary}</p><div className="case-description"><span>OVERVIEW</span><p>{active.detail}</p></div>
              <div className="case-stack"><span>TECHNOLOGY & FOCUS</span><div>{active.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>
              {"credit" in active && <a className="image-credit" href={active.creditUrl} target="_blank" rel="noreferrer">{active.credit}</a>}
            </div>
          </motion.article>
        </AnimatePresence>
      </div>
    </div>
    <a className="text-link github-link" href={profile.github} target="_blank" rel="noreferrer"><Github size={15}/> More engineering on GitHub <ArrowUpRight size={15}/></a>
  </section>;
}
