import { motion } from "framer-motion";
import { ExternalLink, Mail, ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-12 relative overflow-hidden">
      <div className="max-w-2xl mx-auto text-center relative z-10">

        {/* Profile photo with glowing ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            {/* Rotating gradient ring — GPU-accelerated via transform */}
            <div className="profile-ring-wrapper" aria-hidden>
              <div className="profile-ring-inner" />
            </div>
            <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-background shadow-2xl">
              <img
                src="/profile.jpg"
                alt="Sapna Naidu"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Online indicator dot */}
            <span className="absolute bottom-1.5 right-1.5 w-4 h-4 bg-green-400 border-2 border-background rounded-full shadow-md" />
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted-foreground text-sm font-medium tracking-widest uppercase mb-3 flex items-center justify-center gap-2"
        >
          <span className="w-6 h-px bg-muted-foreground/40" />
          Security Engineer · Builder · New York
          <span className="w-6 h-px bg-muted-foreground/40" />
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-display text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-5"
        >
          Sapna{" "}
          <span className="relative inline-block">
            Naidu
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-transparent rounded-full" />
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-lg mx-auto mb-10"
        >
          I build systems that work —{" "}
          <em className="not-italic font-medium text-foreground">and give attackers a run for their money.</em>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex gap-3 justify-center flex-wrap"
        >
          <a
            href="#about"
            className="text-sm font-medium px-6 py-2.5 rounded-full bg-foreground text-background hover:opacity-85 transition-all duration-200 shadow-sm"
          >
            About me
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group text-sm font-medium px-6 py-2.5 rounded-full border border-border text-foreground hover:bg-card transition-all duration-200 flex items-center gap-1.5"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            View Resume
          </a>
          <a
            href="mailto:sapnanaidu1709@gmail.com"
            className="group text-sm font-medium px-6 py-2.5 rounded-full border border-border text-foreground hover:bg-card transition-all duration-200 flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5" />
            Get in touch
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground/50"
      >
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
        >
          <ArrowDown className="w-3.5 h-3.5" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
