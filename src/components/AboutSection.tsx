import { motion } from "framer-motion";

const AboutSection = () => (
  <section id="about" className="py-24 px-6">
    <div className="max-w-2xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl font-semibold text-foreground mb-6"
      >
        About
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-muted-foreground leading-relaxed mb-4"
      >
        I've spent the last 5 years coding secure applications, websites, and AI-driven chatbots. 
        Working with talented people across development, I noticed a pattern — security was always 
        an afterthought.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-muted-foreground leading-relaxed"
      >
        That's when I doubled down. Now I don't just build things that work — I build things 
        that protect data from day one. Currently pursuing my MS in Cybersecurity at Pace University 
        with a 3.9 GPA while leading security engineering at Averent.
      </motion.p>
    </div>
  </section>
);

export default AboutSection;
