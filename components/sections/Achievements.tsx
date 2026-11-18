import { ArrowUpRight } from "lucide-react";
import { communities, experience, profile, recognitions } from "@/lib/portfolio";

export default function Achievements() { return <>
  <section id="experience" className="section wrap"><div className="section-head"><p className="eyebrow">02 — Experience</p><h2>Learning by<br/><span>doing the work.</span></h2></div>
    <div className="experience-list">{experience.map((item, i) => <article className="experience-row" key={item.title}><span className="experience-index">0{i + 1}</span><div><h3>{item.title}</h3><p>{item.role}</p></div><p className="experience-note">{item.note}</p><span className="experience-date">{item.period}</span></article>)}</div>
  </section>
  <section id="community" className="section wrap community-section"><div className="section-head compact"><p className="eyebrow">05 — Community & leadership</p><h2>Better work happens<br/><span>in good company.</span></h2></div><div className="community-list">{communities.map((item, i) => <div key={item}><span>0{i + 1}</span>{item}<ArrowUpRight size={15}/></div>)}</div></section>
  <section id="achievements" className="section wrap recognition"><div className="section-head compact"><p className="eyebrow">06 — Recognition</p><h2>Progress, in<br/><span>its many forms.</span></h2></div><div className="recognition-grid">{recognitions.map(item => <article key={item.title}><span className="recognition-state">{item.state}</span><h3>{item.title}</h3></article>)}</div></section>
  <section className="section wrap activity" id="activity"><div><p className="eyebrow">07 — Engineering activity</p><h2>Open work.<br/><span>Public learning.</span></h2><p>Explore my public repositories and follow along as projects take shape.</p></div><a className="button button-outline" href={profile.github} target="_blank" rel="noreferrer">Visit GitHub <span aria-hidden="true">↗</span></a></section>
</>; }
