import { motion } from "framer-motion";
import { Download, ArrowDown } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const FloatingShape = ({ className, delay = 0 }: { className: string; delay?: number }) => (
  <motion.div
    className={className}
    animate={{ y: [0, -12, 0], rotate: [0, 5, -5, 0] }}
    transition={{ duration: 5, delay, repeat: Infinity, ease: "easeInOut" }}
  />
);

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Floating decorative shapes */}
      <FloatingShape
        className="absolute top-20 right-[15%] w-16 h-16 rounded-full bg-primary/10"
        delay={0}
      />
      <FloatingShape
        className="absolute top-40 left-[10%] w-10 h-10 rounded-2xl bg-accent/60 rotate-12"
        delay={1.2}
      />
      <FloatingShape
        className="absolute bottom-32 right-[20%] w-8 h-8 rounded-full bg-primary/15"
        delay={0.6}
      />
      <FloatingShape
        className="absolute bottom-48 left-[18%] w-12 h-12 rounded-xl bg-accent/40 -rotate-6"
        delay={2}
      />
      <FloatingShape
        className="absolute top-[60%] right-[8%] w-6 h-6 rounded-full bg-primary/10"
        delay={1.8}
      />

      <div className="max-w-2xl mx-auto text-center relative z-10">
        {/* Profile photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          className="mb-8"
        >
          <div className="w-28 h-28 mx-auto rounded-full overflow-hidden ring-4 ring-primary/20 ring-offset-4 ring-offset-background">
            <img
              src={profilePhoto}
              alt="Sapna Naidu"
              width={512}
              height={512}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted-foreground text-sm tracking-wide mb-4"
        >
          Security Engineer · Builder · New York
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-display text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6"
        >
          Sapna Naidu
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-lg mx-auto mb-10"
        >
          I build systems that work — and give attackers a run for their money.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex gap-3 justify-center flex-wrap"
        >
          <a
            href="#about"
            className="text-sm font-medium px-6 py-2.5 rounded-full bg-foreground text-background hover:opacity-90 transition-opacity"
          >
            About me
          </a>
          <a
            href="/Resume_SapnaNaidu.pdf"
            download
            className="text-sm font-medium px-6 py-2.5 rounded-full border border-border text-foreground hover:bg-card transition-colors inline-flex items-center gap-2"
          >
            <Download className="w-3.5 h-3.5" />
            Resume
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-muted-foreground/40" />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default HeroSection;
