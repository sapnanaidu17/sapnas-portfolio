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
          <blockquote className="font-display text-2xl md:text-3xl text-foreground leading-snug max-w-2xl">
          Degrees inform, but execution defines. Security programs built from scratch, 
          incident response that holds under pressure, and the technical vision to turn 
          vague compliance into <span className="font-cursive italic text-primary text-3xl md:text-4xl">concrete technical reality.</span>
        </blockquote>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
