import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="flex items-center gap-3 mb-3">
            <div className="accent-line" />
            <span className="font-mono text-xs tracking-widest text-primary uppercase">Let's talk</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-2 leading-tight">
            Let's build something<br />
            <span className="text-spark italic">worth protecting.</span>
          </h2>
          <p className="text-muted-foreground text-sm max-w-md mb-8 mt-3">
            Graduated May 2026 · open to realtime systems, distributed infra, and software engineering roles · NYC, hybrid, or remote.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="mailto:sapnanaidu1709@gmail.com"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-bold hover:opacity-90 transition-all shadow-md shadow-primary/20">
              <Mail className="w-4 h-4" /> Email me
            </a>
            <a href="http://www.linkedin.com/in/sapna-naidu-543ba62ab" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-foreground text-sm font-semibold hover:border-primary/50 transition-all bg-white">
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
            <a href="https://github.com/sapnanaidu17" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-foreground text-sm font-semibold hover:border-spark/40 transition-all bg-white">
              <Github className="w-4 h-4" /> GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
