import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="min-h-[90vh] flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-muted-foreground text-sm font-body tracking-wide mb-4"
        >
          Security Engineer · Builder · New York
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-display text-5xl md:text-7xl font-700 tracking-tight text-foreground mb-6"
        >
          Sapna Naidu
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-lg mx-auto mb-10"
        >
          I build systems that work — and give attackers a run for their money.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="flex gap-3 justify-center"
        >
          <a
            href="#about"
            className="text-sm font-medium px-6 py-2.5 rounded-full bg-foreground text-background hover:opacity-90 transition-opacity"
          >
            About me
          </a>
          <a
            href="#contact"
            className="text-sm font-medium px-6 py-2.5 rounded-full border border-border text-foreground hover:bg-card transition-colors"
          >
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
