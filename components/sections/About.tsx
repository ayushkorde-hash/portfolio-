"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Cpu, Users, Zap } from "lucide-react";

const traits = [
  {
    icon: Code2,
    title: "Builder",
    desc: "I turn ideas into functional web products using modern stacks.",
  },
  {
    icon: Zap,
    title: "Hackathon Ready",
    desc: "Competed at Godavari & Adobe hackathons with fast-ship mentality.",
  },
  {
    icon: Cpu,
    title: "Tech Explorer",
    desc: "Continuously learning — from Python scripts to full-stack apps.",
  },
  {
    icon: Users,
    title: "Collaborator",
    desc: "Events Core Team member. I thrive in cross-functional environments.",
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-28 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="font-mono text-xs text-indigo-400 tracking-[0.3em] uppercase mb-2">
            01. about
          </p>
          <div className="flex items-center gap-4">
            <h2 className="text-3xl md:text-4xl font-display font-700 text-slate-100">
              Who I Am
            </h2>
            <div className="flex-1 section-line max-w-xs" />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5"
          >
            {/* Avatar placeholder */}
            <div className="relative w-fit mb-8">
              <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-indigo-600/30 to-violet-600/20 border border-indigo-500/30 flex items-center justify-center text-5xl font-display font-800 gradient-text shadow-lg shadow-indigo-900/30">
                AK
              </div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-emerald-500 border-2 border-[#080d1a] flex items-center justify-center">
                <span className="text-[8px]">✓</span>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed text-base">
              I&apos;m{" "}
              <span className="text-indigo-300 font-semibold">Ayush Korde</span>, an
              Information Technology student at{" "}
              <span className="text-cyan-300 font-semibold">
                PVG College of Engineering
              </span>
              . I&apos;m passionate about crafting clean, user-focused digital experiences that
              solve real problems.
            </p>

            <p className="text-slate-400 leading-relaxed text-base">
              From participating in competitive hackathons like{" "}
              <span className="text-indigo-300">Godavari</span> and{" "}
              <span className="text-indigo-300">Adobe</span>, to completing a{" "}
              <span className="text-cyan-300">Deloitte Australia Virtual Internship</span>{" "}
              on Forage — I chase experiences that push me to grow fast and build meaningfully.
            </p>

            <p className="text-slate-400 leading-relaxed text-base">
              Currently applying to the{" "}
              <span className="text-violet-300">Google Student Developer Program</span> and
              exploring the intersection of technology and social impact through projects like
              Mindease.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { val: "2+", label: "Hackathons" },
                { val: "1", label: "Internship" },
                { val: "3+", label: "Projects" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="glass-card rounded-xl p-4 text-center border border-white/8"
                >
                  <div className="text-2xl font-display font-700 gradient-text">{s.val}</div>
                  <div className="text-xs text-slate-500 mt-1 font-medium">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — trait cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {traits.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.25 + i * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="glass-card rounded-xl p-5 border border-white/8 group cursor-default"
              >
                <div className="w-10 h-10 rounded-lg bg-indigo-600/15 border border-indigo-500/25 flex items-center justify-center mb-3 group-hover:bg-indigo-600/25 transition-all">
                  <t.icon size={18} className="text-indigo-400" />
                </div>
                <h3 className="font-display font-600 text-slate-200 mb-1">{t.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{t.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
