"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Heart, Calculator, User } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "Mindease",
    subtitle: "Student Mental Health Platform",
    description:
      "A campaign-driven web platform helping students discover and access counseling resources, self-care tools, and peer support. Focused on reducing stigma and improving mental wellness on campus.",
    tech: ["React", "Tailwind CSS", "JavaScript", "HTML/CSS"],
    icon: Heart,
    color: "violet",
    status: "Featured",
    github: "https://github.com/ayushkorde/mindease",
    demo: "#",
  },
  {
    id: "02",
    title: "Python Calculator",
    subtitle: "CLI Arithmetic Tool",
    description:
      "A modular command-line calculator built in Python featuring clean function separation, error handling, and extensible architecture. Demonstrates core programming and software design principles.",
    tech: ["Python", "OOP", "CLI", "Unit Tests"],
    icon: Calculator,
    color: "indigo",
    status: "Complete",
    github: "https://github.com/ayushkorde/python-calculator",
    demo: "#",
  },
  {
    id: "03",
    title: "Portfolio v1",
    subtitle: "Developer Portfolio Website",
    description:
      "This responsive, animated developer portfolio — built with Next.js, Tailwind CSS, and Framer Motion. Designed for hackathon profiles, internship applications, and ambassador programs.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    icon: User,
    color: "cyan",
    status: "Live",
    github: "https://github.com/ayushkorde/portfolio",
    demo: "https://ayushkorde.vercel.app",
  },
];

const colorMap: Record<string, { accent: string; badge: string; glow: string; border: string }> = {
  violet: {
    accent: "text-violet-300",
    badge: "bg-violet-600/10 border-violet-500/30 text-violet-300",
    glow: "group-hover:shadow-violet-900/30",
    border: "group-hover:border-violet-500/30",
  },
  indigo: {
    accent: "text-indigo-300",
    badge: "bg-indigo-600/10 border-indigo-500/30 text-indigo-300",
    glow: "group-hover:shadow-indigo-900/30",
    border: "group-hover:border-indigo-500/30",
  },
  cyan: {
    accent: "text-cyan-300",
    badge: "bg-cyan-600/10 border-cyan-500/30 text-cyan-300",
    glow: "group-hover:shadow-cyan-900/30",
    border: "group-hover:border-cyan-500/30",
  },
};

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="projects" className="py-28 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="font-mono text-xs text-indigo-400 tracking-[0.3em] uppercase mb-2">
            03. projects
          </p>
          <div className="flex items-center gap-4">
            <h2 className="text-3xl md:text-4xl font-display font-700 text-slate-100">
              What I&apos;ve Built
            </h2>
            <div className="flex-1 section-line max-w-xs" />
          </div>
        </motion.div>

        {/* Project cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const c = colorMap[project.color];
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className={`group glass-card rounded-2xl p-6 border border-white/8 flex flex-col gap-4 ${c.border} ${c.glow} hover:shadow-xl transition-all duration-300 cursor-default`}
              >
                {/* Top row */}
                <div className="flex items-start justify-between">
                  <div
                    className={`w-11 h-11 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center ${c.border} transition-all`}
                  >
                    <Icon size={20} className={c.accent} />
                  </div>
                  <div className="flex gap-2">
                    <span className={`text-xs font-mono px-2 py-1 rounded border ${c.badge}`}>
                      {project.status}
                    </span>
                    <span className="text-xs font-mono text-slate-600">{project.id}</span>
                  </div>
                </div>

                {/* Title */}
                <div>
                  <h3 className={`font-display font-700 text-lg ${c.accent}`}>
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-mono mt-0.5">{project.subtitle}</p>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-400 leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-2 py-0.5 rounded border border-white/8 text-slate-500 bg-white/3"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-2 pt-1 border-t border-white/6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg border border-white/10 text-slate-400 hover:text-slate-200 hover:border-white/20 text-xs font-medium transition-all"
                  >
                    <Github size={13} />
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg border ${c.badge} text-xs font-medium transition-all hover:opacity-80`}
                  >
                    <ExternalLink size={13} />
                    Live Demo
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* More on GitHub */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/ayushkorde"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-indigo-300 font-mono transition-colors"
          >
            <Github size={14} />
            View more on GitHub →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
