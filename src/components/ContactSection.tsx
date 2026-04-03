import { motion } from "framer-motion";

const ContactSection = () => (
  <section id="contact" className="py-24 px-6 bg-card">
    <div className="max-w-2xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl font-semibold text-foreground mb-4"
      >
        Let's connect
      </motion.h2>
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
        className="flex gap-3 justify-center"
      >
        <a
          href="https://www.linkedin.com/in/sapna-naidu-543ba62ab"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium px-6 py-2.5 rounded-full bg-foreground text-background hover:opacity-90 transition-opacity"
        >
          LinkedIn
        </a>
        <a
          href="mailto:sapna@example.com"
          className="text-sm font-medium px-6 py-2.5 rounded-full border border-border text-foreground hover:bg-background transition-colors"
        >
          Email me
        </a>
      </motion.div>
    </div>
  </section>
);

export default ContactSection;
