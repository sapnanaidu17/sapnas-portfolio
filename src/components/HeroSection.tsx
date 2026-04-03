import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const TypeWriter = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (displayed.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayed(text.slice(0, displayed.length + 1));
      }, 40);
      return () => clearTimeout(timeout);
    }
  }, [displayed, text, started]);

  return (
    <span>
      {displayed}
      <span className="animate-blink text-primary">|</span>
    </span>
  );
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0 scanline pointer-events-none" />
      
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="font-mono text-sm text-primary tracking-widest uppercase">
            &gt; initializing portfolio...
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-mono text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="text-foreground">Sapna</span>{" "}
          <span className="text-gradient-primary">Naidu</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="font-mono text-lg md:text-xl text-muted-foreground mb-8 h-8"
        >
          <TypeWriter 
            text="Security Engineer • Builder • Breaker • Defender" 
            delay={1200} 
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="text-secondary-foreground/70 text-lg max-w-2xl mx-auto mb-10 font-body leading-relaxed"
        >
          I build systems that work and give attackers a run for their money.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <a
            href="#about"
            className="font-mono text-sm px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded-sm border-glow"
          >
            &gt; explore()
          </a>
          <a
            href="#contact"
            className="font-mono text-sm px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/80 transition-all duration-300 rounded-sm"
          >
            &gt; connect()
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="mt-16"
        >
          <div className="font-mono text-xs text-muted-foreground/50 space-y-1">
            <p>$ location: New York, NY</p>
            <p>$ status: <span className="text-primary">open to work</span></p>
            <p>$ clearance: on-site · hybrid</p>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-5 h-8 border border-muted-foreground/30 rounded-full flex items-start justify-center p-1"
        >
          <div className="w-1 h-2 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
