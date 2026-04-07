import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-24 px-6">
    <div className="max-w-2xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl font-semibold text-foreground mb-3"
      >
        Let's connect
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-muted-foreground mb-10 max-w-md text-sm leading-relaxed"
      >
        Open to security engineering and application security roles.
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
          className="text-sm font-medium px-6 py-2.5 rounded-full bg-foreground text-background hover:opacity-85 transition-all duration-200 shadow-sm flex items-center gap-1.5"
        >
          <Mail className="w-3.5 h-3.5" />
          Email me
        </a>

        <a
          href="http://www.linkedin.com/in/sapna-naidu-543ba62ab"
          target="_blank"
          rel="noopener noreferrer"
          className="group text-sm font-medium px-6 py-2.5 rounded-full border border-border text-foreground hover:bg-card transition-all duration-200 flex items-center gap-1.5"
        >
          <Linkedin className="w-3.5 h-3.5" />
          LinkedIn
        </a>

{/* <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group text-sm font-medium px-6 py-2.5 rounded-full border border-border text-foreground hover:bg-card transition-all duration-200 flex items-center gap-1.5"
        >
          <ExternalLink className="w-3.5 h-3.5" />
          View Resume
        </a> */}
      </motion.div>
    </div>
  </section>
);

export default ContactSection;
