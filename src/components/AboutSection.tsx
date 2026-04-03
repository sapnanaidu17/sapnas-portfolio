import { motion } from "framer-motion";

const AboutSection = () => (
  <section id="about" className="py-24 px-6 relative">
    {/* Decorative accent */}
    <div className="absolute top-12 right-[10%] w-20 h-20 rounded-full bg-accent/40 blur-2xl" />

    <div className="max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-6 flex items-center gap-3"
      >
        <span className="text-2xl">🌟</span>
        <h2 className="font-display text-3xl font-semibold text-foreground">About</h2>
      </motion.div>
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
