"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowDownRight, ArrowUpRight, Volume2, VolumeX } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { profile } from "@/lib/portfolio";

const PortalScene = dynamic(() => import("@/components/portal/PortalScene"), {
  ssr: false,
  loading: () => <div className="portal-scene-fallback" aria-hidden="true"><span/></div>,
});

function playEntrySound() {
  try {
    const AudioContextClass = window.AudioContext;
    if (!AudioContextClass) return;
    const context = new AudioContextClass();
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    const now = context.currentTime;
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(164, now);
    oscillator.frequency.exponentialRampToValueAtTime(493.88, now + 0.28);
    oscillator.frequency.exponentialRampToValueAtTime(246.94, now + 0.72);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.045, now + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.9);
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start(now);
    oscillator.stop(now + 0.92);
    window.setTimeout(() => { void context.close(); }, 1100);
  } catch {
    // Audio is an optional enhancement; navigation should always work silently.
  }
}

function playHoverSound() {
  try {
    const AudioContextClass = window.AudioContext;
    if (!AudioContextClass) return;
    const context = new AudioContextClass();
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    const now = context.currentTime;
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(720, now);
    oscillator.frequency.exponentialRampToValueAtTime(960, now + 0.07);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.009, now + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.12);
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start(now);
    oscillator.stop(now + 0.14);
    window.setTimeout(() => { void context.close(); }, 250);
  } catch {
    // Hover sound is nonessential.
  }
}

export default function Portal() {
  const router = useRouter();
  const reduceMotion = useReducedMotion();
  const [soundOn, setSoundOn] = useState(false);
  const [entering, setEntering] = useState(false);
  const hoverPlayedAt = useRef(0);

  useEffect(() => {
    // Read the saved opt-in after hydration so server and initial client markup match.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    try { setSoundOn(localStorage.getItem("ayush-portal-sound") === "on"); } catch { setSoundOn(false); }
  }, []);

  const toggleSound = () => setSoundOn(current => {
    const next = !current;
    try { localStorage.setItem("ayush-portal-sound", next ? "on" : "off"); } catch { /* Sound remains a session-only preference. */ }
    return next;
  });

  const enterPortfolio = () => {
    if (entering) return;
    setEntering(true);
    if (soundOn) playEntrySound();
    window.setTimeout(() => router.push("/home"), reduceMotion ? 250 : 1050);
  };

  const previewHover = () => {
    if (!soundOn || entering || Date.now() - hoverPlayedAt.current < 900) return;
    hoverPlayedAt.current = Date.now();
    playHoverSound();
  };

  return <main className="portal-screen">
    <div className="portal-grid" aria-hidden="true"/>
    <header className="portal-header">
      <Link className="portal-brand" href="/" aria-label="Ayush Korde entry portal"><span>AK</span><i/>AYUSH KORDE</Link>
      <div className="portal-header-right"><span className="portal-edition">PERSONAL ENGINEERING PORTFOLIO</span><button type="button" className="portal-sound" onClick={toggleSound} aria-pressed={soundOn} aria-label={`Turn sound ${soundOn ? "off" : "on"}`} title={`Sound ${soundOn ? "on" : "off"}`}>{soundOn ? <Volume2 size={15}/> : <VolumeX size={15}/>}<span>SOUND {soundOn ? "ON" : "OFF"}</span></button></div>
    </header>

    <section className="portal-main" aria-labelledby="portal-title">
      <div className="portal-copy">
        <motion.p className="portal-kicker" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1 }}><span className="status-dot"/> SOFTWARE ENGINEER · FULL-STACK · AI</motion.p>
        <motion.h1 id="portal-title" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .18 }}>A different kind<br/>of <span>portfolio.</span></motion.h1>
        <motion.p className="portal-intro" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .42 }}>I’m {profile.name}. Step inside to explore the products, systems and experiments shaping my engineering journey.</motion.p>
        <motion.div className="portal-actions" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .55 }}>
          <button type="button" className="portal-enter" onClick={enterPortfolio} onMouseEnter={previewHover} disabled={entering}><span>{entering ? "OPENING EXPERIENCE" : "ENTER THE EXPERIENCE"}</span><ArrowDownRight size={17}/></button>
          <Link className="portal-skip" href="/home">Skip intro <ArrowUpRight size={14}/></Link>
        </motion.div>
        <p className="portal-hint">DRAG TO ORBIT <i/> SOUND IS OFF BY DEFAULT</p>
      </div>

      <div className="portal-art" aria-label="Interactive 3D abstract digital sculpture">
        <PortalScene/>
        <div className="portal-art-top"><span>FIG 01 / DIGITAL IDENTITY</span><span>3D INTERACTIVE</span></div>
        <div className="portal-art-bottom"><span>AYUSH KORDE</span><span>NASHIK · INDIA</span></div>
      </div>
    </section>

    <footer className="portal-footer"><span>© {new Date().getFullYear()} AYUSH KORDE</span><span>PVGCOE NASHIK <i/> SPPU <i/> EXPECTED GRADUATION {profile.graduation}</span><Link href="/home">CONTINUE WITHOUT INTRO <ArrowUpRight size={12}/></Link></footer>

    <AnimatePresence>{entering && <motion.div className="portal-transition" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} aria-live="polite">
      <motion.div className="transition-ring" initial={{ scale: .03, opacity: .9 }} animate={{ scale: 32, opacity: .5 }} transition={{ duration: reduceMotion ? .2 : .9, ease: [0.16, 1, 0.3, 1] }}/>
      <motion.div className="transition-core" initial={{ scale: .1 }} animate={{ scale: 1 }} transition={{ duration: reduceMotion ? .2 : .55, ease: [0.16, 1, 0.3, 1] }}/>
      <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: [0, 1, 0], y: [8, 0, -5] }} transition={{ duration: reduceMotion ? .2 : .8 }}>ESTABLISHING CONNECTION</motion.p>
    </motion.div>}</AnimatePresence>
  </main>;
}
