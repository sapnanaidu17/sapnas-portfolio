import { motion } from "framer-motion";

const AboutSection = () => (
  <section id="about" className="py-28 px-6 bg-card">
    <div className="max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="pull-quote"
      >
        <blockquote className="font-display text-3xl md:text-4xl italic text-foreground leading-snug max-w-2xl">
          The degree matters less than what I've built: security programs from scratch, 
          incident response processes that actually work under pressure, and the ability 
          to translate vague compliance requirements into concrete technical implementations.
        </blockquote>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
