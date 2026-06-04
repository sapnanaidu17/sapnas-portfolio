import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const cyclingWords = ["outlast attackers.", "talk in real-time.", "scale without breaking.", "make MoQ work.", "run at 99.9%."];

function useCounter(target: number, duration = 1600, start = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let t0: number | null = null;
    const step = (ts: number) => {
      if (!t0) t0 = ts;
      const p = Math.min((ts - t0) / duration, 1);
      setValue(Math.floor((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return value;
}

function NetworkCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current; if (!c) return;
    const ctx = c.getContext("2d"); if (!ctx) return;
    const resize = () => { c.width = c.offsetWidth; c.height = c.offsetHeight; };
    resize(); window.addEventListener("resize", resize);
    const nodes = Array.from({ length: 35 }, () => ({
      x: Math.random() * c.width, y: Math.random() * c.height,
      vx: (Math.random() - 0.5) * 0.28, vy: (Math.random() - 0.5) * 0.28,
      r: Math.random() * 1.5 + 0.6,
    }));
    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, c.width, c.height);
      nodes.forEach(n => {
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > c.width) n.vx *= -1;
        if (n.y < 0 || n.y > c.height) n.vy *= -1;
      });
      for (let i = 0; i < nodes.length; i++) for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x, dy = nodes[i].y - nodes[j].y;
        const d = Math.sqrt(dx*dx + dy*dy);
        if (d < 130) {
          ctx.beginPath(); ctx.moveTo(nodes[i].x, nodes[i].y); ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.strokeStyle = `rgba(109,40,217,${0.07*(1-d/130)})`; ctx.lineWidth = 0.7; ctx.stroke();
        }
      }
      nodes.forEach(n => { ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI*2); ctx.fillStyle = "rgba(109,40,217,0.18)"; ctx.fill(); });
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={ref} className="absolute inset-0 w-full h-full pointer-events-none" />;
}

export default function HeroSection() {
  const [started, setStarted] = useState(false);
  const [wordIdx, setWordIdx] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => { const t = setTimeout(() => setStarted(true), 400); return () => clearTimeout(t); }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setShow(false);
      setTimeout(() => { setWordIdx(i => (i + 1) % cyclingWords.length); setShow(true); }, 350);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  const c0 = useCounter(100, 1500, started);
  const c1 = useCounter(1, 1100, started);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-dots">
      <NetworkCanvas />
      <div className="absolute inset-0 bg-gradient-to-b from-background/75 via-background/85 to-background pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto w-full px-6 pt-28 pb-20">
        {/* Overline */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-5">
          <div className="accent-line" />
          <span className="font-mono text-xs tracking-widest text-primary uppercase">Software Engineer, Realtime · NYC</span>
        </motion.div>

        {/* Name */}
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }}
          className="text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-tight text-foreground leading-none mb-6">
          Sapna<br />
          <span className="text-primary">Naidu.</span>
        </motion.h1>

        {/* Cycling line */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
          className="text-xl md:text-2xl font-semibold text-foreground mb-2 min-h-[2.2rem] flex items-center gap-2">
          I build systems that{" "}
          <AnimatePresence mode="wait">
            {show && (
              <motion.span key={wordIdx}
                initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.28 }}
                className="text-spark italic">
                {cyclingWords[wordIdx]}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}
          className="text-muted-foreground text-sm mb-10 font-mono">
          Jailbroke my first iPad at 14. Still curious, always building. · Rust · Go · WebRTC · MoQ · Grafana
        </motion.p>

        {/* CTAs */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}
          className="flex flex-wrap gap-3 mb-16">
          <a href="#experience" className="px-6 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-bold hover:opacity-90 transition-all shadow-md shadow-primary/20">
            See my work
          </a>
          <a href="#about" className="px-6 py-3 rounded-xl border border-border text-foreground text-sm font-medium hover:border-primary/50 transition-all">
            Get to know me
          </a>
          <a href="mailto:sapnanaidu1709@gmail.com" className="flex items-center gap-2 px-5 py-3 rounded-xl border border-border text-muted-foreground text-sm hover:border-spark/40 hover:text-foreground transition-all">
            <Mail className="w-4 h-4" />
          </a>
          <a href="https://github.com/sapnanaidu17" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-3 rounded-xl border border-border text-muted-foreground text-sm hover:border-spark/40 hover:text-foreground transition-all">
            <Github className="w-4 h-4" />
          </a>
          <a href="http://www.linkedin.com/in/sapna-naidu-543ba62ab" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-3 rounded-xl border border-border text-muted-foreground text-sm hover:border-spark/40 hover:text-foreground transition-all">
            <Linkedin className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Two big hero stats */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
          className="flex flex-wrap gap-4">
          {[
            { value: `<${c0}ms`, label: "real-time latency", color: "primary" },
            { value: `${c1}M+ req`, label: "per day, 99.9% up", color: "spark" },
          ].map(s => (
            <div key={s.label} className="stat-card min-w-[160px]">
              <div className={`font-mono text-3xl font-black mb-1 ${s.color === "spark" ? "text-spark" : "text-primary"}`}>{s.value}</div>
              <div className="text-xs text-muted-foreground font-medium">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground/40">
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
