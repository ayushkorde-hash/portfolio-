"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillGroups = [
  {
    category: "Languages",
    color: "indigo",
    skills: [
      { name: "C++", level: 72 },
      { name: "Java", level: 68 },
      { name: "Python", level: 80 },
      { name: "JavaScript", level: 78 },
    ],
  },
  {
    category: "Web",
    color: "violet",
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "Tailwind", level: 82 },
      { name: "React", level: 75 },
      { name: "Next.js", level: 70 },
    ],
  },
  {
    category: "Tools",
    color: "cyan",
    skills: [
      { name: "Git", level: 80 },
      { name: "GitHub", level: 82 },
      { name: "VS Code", level: 90 },
      { name: "Figma", level: 65 },
    ],
  },
];

const colorMap: Record<string, { bar: string; badge: string; dot: string }> = {
  indigo: {
    bar: "bg-gradient-to-r from-indigo-600 to-indigo-400",
    badge: "border-indigo-500/30 bg-indigo-600/10 text-indigo-300",
    dot: "bg-indigo-400",
  },
  violet: {
    bar: "bg-gradient-to-r from-violet-600 to-violet-400",
    badge: "border-violet-500/30 bg-violet-600/10 text-violet-300",
    dot: "bg-violet-400",
  },
  cyan: {
    bar: "bg-gradient-to-r from-cyan-600 to-cyan-400",
    badge: "border-cyan-500/30 bg-cyan-600/10 text-cyan-300",
    dot: "bg-cyan-400",
  },
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="skills" className="py-28 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="font-mono text-xs text-indigo-400 tracking-[0.3em] uppercase mb-2">
            02. skills
          </p>
          <div className="flex items-center gap-4">
            <h2 className="text-3xl md:text-4xl font-display font-700 text-slate-100">
              Tech Stack
            </h2>
            <div className="flex-1 section-line max-w-xs" />
          </div>
        </motion.div>

        {/* Skill groups */}
        <div className="grid md:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => {
            const c = colorMap[group.color];
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: gi * 0.12 }}
                className="glass-card rounded-2xl p-6 border border-white/8"
              >
                {/* Category header */}
                <div className="flex items-center gap-2 mb-6">
                  <div className={`w-2.5 h-2.5 rounded-full ${c.dot}`} />
                  <span className="font-mono text-xs tracking-widest uppercase text-slate-400">
                    {group.category}
                  </span>
                </div>

                {/* Skill rows */}
                <div className="space-y-4">
                  {group.skills.map((skill, si) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: gi * 0.1 + si * 0.07 }}
                    >
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-sm font-medium text-slate-300">
                          {skill.name}
                        </span>
                        <span className={`text-xs font-mono ${c.badge.split(" ")[2]}`}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full ${c.bar}`}
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{
                            duration: 0.8,
                            delay: gi * 0.1 + si * 0.07 + 0.3,
                            ease: "easeOut",
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Badge pills at bottom */}
                <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-white/6">
                  {group.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`text-xs font-mono px-2.5 py-1 rounded-md border ${c.badge} transition-all hover:scale-105`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center text-slate-600 font-mono text-xs mt-10"
        >
          // always learning, always shipping
        </motion.p>
      </div>
    </section>
  );
}
