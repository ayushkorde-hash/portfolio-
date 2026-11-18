"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Copy, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { profile, socialLinks } from "@/lib/portfolio";

export default function Contact() {
  const [copyState, setCopyState] = useState<"idle" | "copied" | "unavailable">("idle");
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyState("copied");
    } catch {
      setCopyState("unavailable");
    }
    window.setTimeout(() => setCopyState("idle"), 2200);
  };

  return <section id="contact" className="contact wrap">
    <div className="contact-copy-block">
      <p className="eyebrow">08 — Start a conversation</p>
      <h2>Have a thoughtful<br/>problem to solve?</h2>
      <p className="contact-copy">I’m interested in internships, collaborative builds and conversations about software, AI and products that matter.</p>
      <div className="contact-actions">
        <a className="button button-light" href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16}/> Connect on LinkedIn <ArrowUpRight size={15}/></a>
        <a className="button button-outline" href={`mailto:${profile.email}`}><Mail size={16}/> Email Ayush <ArrowUpRight size={15}/></a>
      </div>
      <div className="contact-email-row"><a href={`mailto:${profile.email}`}>{profile.email}</a><button type="button" onClick={copyEmail} aria-label="Copy email address">{copyState === "copied" ? <Check size={14}/> : <Copy size={14}/>} {copyState === "copied" ? "Copied" : "Copy"}</button></div>
      <p className="copy-status" aria-live="polite">{copyState === "unavailable" ? "Clipboard access is unavailable here. Use the email link instead." : ""}</p>
      <div className="profile-links"><span>FIND ME ELSEWHERE</span><div>{socialLinks.map((link, index) => <a key={link.label} href={link.href} target="_blank" rel="noreferrer"><b>{String(index + 1).padStart(2, "0")}</b><span><strong>{link.label}</strong><small>{link.handle}</small></span><ArrowUpRight size={12}/></a>)}</div></div>
    </div>
    <figure className="contact-visual"><Image src="/images/contact-handshake.jpg" alt="Fine white wireframe hands meeting in a handshake on black." fill sizes="(max-width: 800px) 90vw, 45vw"/><figcaption><span>GOOD WORK STARTS WITH A CONVERSATION</span><span>LET’S BUILD</span></figcaption></figure>
  </section>;
}
