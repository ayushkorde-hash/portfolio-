"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Terminal } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/ayushkorde", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/ayushkorde", label: "LinkedIn" },
  { icon: Mail, href: "mailto:ayush@example.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo / name */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center">
              <Terminal size={14} className="text-indigo-400" />
            </div>
            <div>
              <p className="font-display font-600 text-slate-300 text-sm">Ayush Korde</p>
              <p className="text-xs text-slate-600 font-mono">IT Student & Developer</p>
            </div>
          </div>

          {/* Tagline */}
          <p className="text-xs text-slate-600 font-mono text-center">
            // built with Next.js · Tailwind · Framer Motion
          </p>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -2 }}
                className="w-9 h-9 rounded-lg glass-card flex items-center justify-center text-slate-500 hover:text-indigo-300 transition-colors border border-white/6"
                aria-label={label}
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom line */}
        <div className="section-line mt-8 mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-600 font-mono">
          <p>© {new Date().getFullYear()} Ayush Korde · All rights reserved</p>
          <p className="text-slate-700">
            PVG College of Engineering · Pune, India
          </p>
        </div>
      </div>
    </footer>
  );
}
