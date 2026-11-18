"use client";

import { Printer } from "lucide-react";
import Link from "next/link";
import { communities, experience, projects, profile, recognitions, skillGroups } from "@/lib/portfolio";

export default function ResumePage() { return <main className="resume-page"><div className="resume-actions"><Link href="/home">← Portfolio</Link><button onClick={() => window.print()}><Printer size={15}/> Print / Save PDF</button></div><article className="resume-sheet">
  <header className="resume-header"><div><p className="eyebrow">SOFTWARE ENGINEERING · FULL-STACK · APPLIED AI</p><h1>{profile.name}</h1><p>{profile.education} · Expected graduation {profile.graduation} · {profile.email}</p></div><div className="resume-social"><a href={profile.github}>GitHub</a><a href={profile.githubAlt}>GitHub · additional</a><a href={profile.linkedin}>LinkedIn</a></div></header>
  <section><h2>Profile</h2><p>Information Technology engineering student building software products and exploring AI, full-stack engineering and practical problem solving.</p></section>
  <section><h2>Experience</h2>{experience.map(item => <div className="resume-entry" key={item.title}><div><strong>{item.title}</strong><span>{item.role}</span></div><small>{item.period}</small><p>{item.note}</p></div>)}</section>
  <section><h2>Selected projects</h2>{projects.map(item => <div className="resume-entry" key={item.name}><div><strong>{item.name}</strong><span>{item.kind}</span></div><p>{item.summary} {item.detail}</p><small>{item.tags.join(" · ")}</small></div>)}</section>
  <section><h2>Technology</h2>{skillGroups.map(group => <p className="resume-skills" key={group.name}><strong>{group.name}:</strong> {group.items.join(" · ")}</p>)}</section>
  <section><h2>Community & recognition</h2><p>{communities.join(" · ")}</p><p>{recognitions.map(item => `${item.title} (${item.state})`).join(" · ")}</p></section>
</article></main>; }
