"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Briefcase, Users, Star, Target } from "lucide-react";

const achievements = [
  {
    year: "2024",
    title: "Adobe Hackathon",
    org: "Adobe",
    desc: "Participated in Adobe's national-level hackathon, building a creative tech solution under time pressure with a cross-functional team.",
    icon: Target,
    color: "violet",
    type: "Hackathon",
  },
  {
    year: "2024",
    title: "Godavari Hackathon",
    org: "Godavari Institute",
    desc: "Competed in the Godavari Hackathon, developing a rapid prototype and presenting to a panel of industry judges.",
    icon: Trophy,
    color: "indigo",
    type: "Hackathon",
  },
  {
    year: "2024",
    title: "Deloitte Australia Virtual Internship",
    org: "Forage × Deloitte",
    desc: "Completed a virtual job simulation at Deloitte Australia via Forage — covering data analytics, client problem-solving, and professional consulting workflows.",
    icon: Briefcase,
    color: "cyan",
    type: "Internship",
  },
  {
    year: "2023–24",
    title: "Events Core Team Member",
    org: "PVG College of Engineering",
    desc: "Active member of the college events team — coordinating technical fests, managing logistics, and leading volunteer teams for campus-wide events.",
    icon: Users,
    color: "violet",
    type: "Leadership",
  },
  {
    year: "2024",
    title: "Google Student Ambassador Applicant",
    org: "Google Developer Programs",
    desc: "Applied for the Google Student Developer Program — demonstrating initiative in tech community building and developer advocacy.",
    icon: Star,
    color: "indigo",
    type: "Recognition",
  },
];

const colorMap: Record<string, { dot: string; badge: string; icon: string; line: string }> = {
  violet: {
    dot: "bg-violet-500 shadow-violet-500/50",
    badge: "bg-violet-600/10 border-violet-500/30 text-violet-300",
    icon: "text-violet-400 bg-violet-600/10 border-violet-500/25",
    line: "from-violet-500/40",
  },
  indigo: {
    dot: "bg-indigo-500 shadow-indigo-500/50",
    badge: "bg-indigo-600/10 border-indigo-500/30 text-indigo-300",
    icon: "text-indigo-400 bg-indigo-600/10 border-indigo-500/25",
    line: "from-indigo-500/40",
  },
  cyan: {
    dot: "bg-cyan-500 shadow-cyan-500/50",
    badge: "bg-cyan-600/10 border-cyan-500/30 text-cyan-300",
    icon: "text-cyan-400 bg-cyan-600/10 border-cyan-500/25",
    line: "from-cyan-500/40",
  },
};

export default function Achievements() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="achievements" className="py-28 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="font-mono text-xs text-indigo-400 tracking-[0.3em] uppercase mb-2">
            04. achievements
          </p>
          <div className="flex items-center gap-4">
            <h2 className="text-3xl md:text-4xl font-display font-700 text-slate-100">
              Milestones
            </h2>
            <div className="flex-1 section-line max-w-xs" />
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/30 via-violet-500/20 to-transparent" />

          <div className="space-y-8">
            {achievements.map((item, i) => {
              const c = colorMap[item.color];
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative flex gap-6 pl-14"
                >
                  {/* Dot */}
                  <div
                    className={`absolute left-3.5 top-5 w-3 h-3 rounded-full shadow-lg -translate-x-1/2 ${c.dot}`}
                    style={{ boxShadow: `0 0 12px var(--tw-shadow-color)` }}
                  />

                  {/* Card */}
                  <motion.div
                    whileHover={{ x: 4, transition: { duration: 0.2 } }}
                    className="flex-1 glass-card rounded-xl p-5 border border-white/8 hover:border-indigo-500/25 transition-all group"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-9 h-9 rounded-lg border flex items-center justify-center ${c.icon}`}
                        >
                          <Icon size={16} />
                        </div>
                        <div>
                          <h3 className="font-display font-600 text-slate-200 text-sm leading-tight">
                            {item.title}
                          </h3>
                          <p className="text-xs text-slate-500 font-mono">{item.org}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-xs font-mono px-2 py-0.5 rounded border ${c.badge}`}
                        >
                          {item.type}
                        </span>
                        <span className="text-xs font-mono text-slate-600">{item.year}</span>
                      </div>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
