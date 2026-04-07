import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 relative">
      <div className="max-w-3xl mx-auto w-full">
        
        {/* Editorial overline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6"
        >
          Security Engineer — New York City
        </motion.p>

        {/* Name — massive editorial serif */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-normal tracking-tight text-foreground leading-[0.9] mb-8"
        >
          Sapna<br />
          <span className="italic text-primary">Naidu</span>
        </motion.h1>

        {/* The hook — her voice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="max-w-xl"
        >
          <p className="text-lg md:text-xl text-foreground leading-relaxed mb-2">
            I build systems that work — and solve security problems by{" "}
            <em className="font-display italic text-primary">removing what doesn't need to exist.</em>
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Most people add layers. I remove them. That's been my philosophy since I jailbroke my first iPad at 14.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex gap-4 mt-10 flex-wrap"
        >
          <a
            href="#story"
            className="text-sm font-medium px-7 py-3 rounded-full bg-foreground text-background hover:opacity-90 transition-all duration-200"
          >
            Read my story
          </a>
          <a
            href="mailto:sapnanaidu1709@gmail.com"
            className="text-sm font-medium px-7 py-3 rounded-full border border-border text-foreground hover:bg-card transition-all duration-200"
          >
            Let's talk
          </a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground/40"
      >
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
