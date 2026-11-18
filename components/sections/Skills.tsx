import { skillGroups } from "@/lib/portfolio";

export default function Skills() { return <section id="skills" className="section wrap">
  <div className="section-head compact"><p className="eyebrow">04 — Engineering toolkit</p><h2>Tools I reach for.<br/><span>Things I keep learning.</span></h2></div>
  <div className="stack-list">{skillGroups.map((group, i) => <div className="stack-row" key={group.name}><span className="stack-index">0{i + 1}</span><h3>{group.name}</h3><div className="stack-items">{group.items.map(item => <span key={item}>{item}</span>)}</div></div>)}</div>
</section>; }
