"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Send, Mail, Linkedin, Github, MapPin } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Construct mailto link
    const mailto = `mailto:ayush@example.com?subject=${encodeURIComponent(form.subject || "Portfolio Contact")}&body=${encodeURIComponent(`From: ${form.name} (${form.email})\n\n${form.message}`)}`;
    window.location.href = mailto;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const contacts = [
    {
      icon: Mail,
      label: "Email",
      value: "ayush@example.com",
      href: "mailto:ayush@example.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/ayushkorde",
      href: "https://linkedin.com/in/ayushkorde",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/ayushkorde",
      href: "https://github.com/ayushkorde",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pune, Maharashtra, India",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-28 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="font-mono text-xs text-indigo-400 tracking-[0.3em] uppercase mb-2">
            05. contact
          </p>
          <div className="flex items-center gap-4">
            <h2 className="text-3xl md:text-4xl font-display font-700 text-slate-100">
              Get In Touch
            </h2>
            <div className="flex-1 section-line max-w-xs" />
          </div>
          <p className="text-slate-400 text-base mt-4 max-w-lg">
            Open to internship opportunities, hackathon collabs, and ambassador programs.
            Drop me a message and I&apos;ll respond promptly.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 space-y-4"
          >
            {contacts.map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.08 }}
              >
                {c.href ? (
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 glass-card rounded-xl border border-white/8 hover:border-indigo-500/30 group transition-all"
                  >
                    <div className="w-10 h-10 rounded-lg bg-indigo-600/15 border border-indigo-500/25 flex items-center justify-center group-hover:bg-indigo-600/25 transition-all">
                      <c.icon size={16} className="text-indigo-400" />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-slate-500">{c.label}</p>
                      <p className="text-sm text-slate-300 group-hover:text-indigo-300 transition-colors">
                        {c.value}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4 p-4 glass-card rounded-xl border border-white/8">
                    <div className="w-10 h-10 rounded-lg bg-slate-800/50 border border-white/8 flex items-center justify-center">
                      <c.icon size={16} className="text-slate-500" />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-slate-500">{c.label}</p>
                      <p className="text-sm text-slate-400">{c.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            {/* Response promise */}
            <div className="p-4 glass-card rounded-xl border border-emerald-500/20 bg-emerald-500/5 mt-6">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono text-emerald-400">
                  Fast Response Guaranteed
                </span>
              </div>
              <p className="text-xs text-slate-400">
                I typically reply within 24–48 hours. Looking forward to connecting!
              </p>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-6 border border-white/8 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-500 mb-2">
                    name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className="form-input w-full rounded-lg px-4 py-2.5 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-500 mb-2">
                    email *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com"
                    className="form-input w-full rounded-lg px-4 py-2.5 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-500 mb-2">
                  subject
                </label>
                <input
                  type="text"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder="Internship opportunity / Hackathon collab / ..."
                  className="form-input w-full rounded-lg px-4 py-2.5 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-500 mb-2">
                  message *
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your opportunity, project, or just say hi..."
                  className="form-input w-full rounded-lg px-4 py-2.5 text-sm resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(99,102,241,0.4)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold text-sm shadow-lg shadow-indigo-900/40 transition-all"
              >
                {sent ? (
                  <>
                    <span>✓</span> Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={15} />
                    Send Message
                  </>
                )}
              </motion.button>

              <p className="text-center text-xs text-slate-600 font-mono">
                // opens your default email client
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
