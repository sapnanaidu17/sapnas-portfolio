import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-28 px-6">
    <div className="max-w-3xl mx-auto">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4"
      >
        What's next
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-4xl md:text-5xl italic text-foreground mb-4 leading-tight"
      >
        Let's build something<br className="hidden sm:block" /> worth protecting.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-muted-foreground text-[15px] leading-relaxed mb-10 max-w-lg"
      >
        Graduating May 2026. Open to security engineering, application security, and 
        penetration testing roles. Currently in New York — open to on-site, hybrid, or remote.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="flex gap-3 flex-wrap"
      >
        <a
          href="mailto:sapnanaidu1709@gmail.com"
          className="text-sm font-medium px-7 py-3 rounded-full bg-foreground text-background hover:opacity-90 transition-all duration-200 flex items-center gap-2"
        >
          <Mail className="w-4 h-4" />
          sapnanaidu1709@gmail.com
        </a>

        <a
          href="http://www.linkedin.com/in/sapna-naidu-543ba62ab"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium px-6 py-3 rounded-full border border-border text-foreground hover:bg-card transition-all duration-200 flex items-center gap-2"
        >
          <Linkedin className="w-4 h-4" />
          LinkedIn
        </a>

        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium px-6 py-3 rounded-full border border-border text-foreground hover:bg-card transition-all duration-200 flex items-center gap-2"
        >
          <Github className="w-4 h-4" />
          GitHub
        </a>
      </motion.div>
    </div>
  </section>
);

export default ContactSection;
