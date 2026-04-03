import { motion } from "framer-motion";
import { Linkedin, Mail, Download } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-24 px-6 bg-card relative overflow-hidden">
    {/* Decorative circles */}
    <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-primary/5" />
    <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-accent/30" />

    <div className="max-w-2xl mx-auto text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-2xl mb-2 block">✉️</span>
        <h2 className="font-display text-3xl font-semibold text-foreground mb-4">
          Let's connect
        </h2>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-muted-foreground mb-8"
      >
        Open to security engineering and application security roles.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="flex gap-3 justify-center flex-wrap"
      >
        <a
          href="https://www.linkedin.com/in/sapna-naidu-543ba62ab"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium px-5 py-2.5 rounded-full bg-foreground text-background hover:opacity-90 transition-opacity inline-flex items-center gap-2"
        >
          <Linkedin className="w-4 h-4" />
          LinkedIn
        </a>
        <a
          href="mailto:sapnanaidu1709@gmail.com"
          className="text-sm font-medium px-5 py-2.5 rounded-full border border-border text-foreground hover:bg-background transition-colors inline-flex items-center gap-2"
        >
          <Mail className="w-4 h-4" />
          Email me
        </a>
        <a
          href="/Resume_SapnaNaidu.pdf"
          download
          className="text-sm font-medium px-5 py-2.5 rounded-full border border-border text-foreground hover:bg-background transition-colors inline-flex items-center gap-2"
        >
          <Download className="w-4 h-4" />
          Resume
        </a>
      </motion.div>
    </div>
  </section>
);

export default ContactSection;
