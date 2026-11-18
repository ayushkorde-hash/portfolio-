"use client";

import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const links = [{ name: "About", href: "#about" }, { name: "Journey", href: "#experience" }, { name: "Work", href: "#projects" }, { name: "Stack", href: "#skills" }, { name: "Recognition", href: "#achievements" }, { name: "Contact", href: "#contact" }];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const saved = document.documentElement.dataset.theme;
    // Sync persisted theme after hydration while keeping server markup deterministic.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (saved === "light" || saved === "dark") setTheme(saved);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("ayush-portfolio-theme", next); } catch { /* Keep the in-memory theme when storage is unavailable. */ }
  };

  return <header className="nav-shell"><nav className="nav wrap" aria-label="Main navigation"><a href="#home" className="wordmark"><span>AK</span><i/>AYUSH KORDE</a><div className="nav-links">{links.map(link => <a key={link.href} href={link.href}>{link.name}</a>)}</div><div className="nav-actions"><a className="nav-cta" href="/resume">Resume <span>↗</span></a><button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`} title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}>{theme === "dark" ? <Sun size={16}/> : <Moon size={16}/>}</button><button className="mobile-toggle" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X size={19}/> : <Menu size={19}/>}</button></div></nav><AnimatePresence>{open && <motion.div className="mobile-menu" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}>{links.map(link => <a onClick={() => setOpen(false)} href={link.href} key={link.href}>{link.name}<span>↗</span></a>)}<a href="/resume">Resume <span>↗</span></a></motion.div>}</AnimatePresence></header>;
}
