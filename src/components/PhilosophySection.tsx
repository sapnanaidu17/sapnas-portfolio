import { motion } from "framer-motion";

const beliefs = [
  {
    number: "01",
    title: "Remove, don't add.",
    body: "Most security people solve problems by adding layers. I solve them by removing what doesn't need to exist. Fewer moving parts means fewer things to break.",
  },
  {
    number: "02",
    title: "First principles, always.",
    body: "I don't apply frameworks blindly — I understand why they exist and when they don't fit. The best solution often isn't the textbook one.",
  },
  {
    number: "03",
    title: "Security should be invisible.",
    body: "If people route around your security, your security doesn't work. I build controls that make people's jobs easier, not harder.",
  },
  {
    number: "04",
    title: "Own the gap.",
    body: "Nobody told me to redesign our CI/CD security or mentor the team on threat modeling. I saw the gap, and I filled it. Extreme ownership isn't a buzzword — it's how I work.",
  },
  {
    number: "05",
    title: "Best idea wins.",
    body: "Even when it's not mine. I've gotten better at setting my ego aside when someone has a sharper solution. That's not weakness — that's how you ship great work.",
  },
];

const PhilosophySection = () => (
  <section className="py-28 px-6 bg-card">
    <div className="max-w-3xl mx-auto">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4"
      >
        What I believe
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-4xl md:text-5xl italic text-foreground mb-16 leading-tight"
      >
        Five things I'll never<br className="hidden sm:block" /> compromise on.
      </motion.h2>

      <div className="space-y-12">
        {beliefs.map((belief, i) => (
          <motion.div
            key={belief.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="grid grid-cols-[auto_1fr] gap-6 md:gap-10 items-start"
          >
            <span className="font-mono text-xs text-primary mt-1.5">{belief.number}</span>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{belief.title}</h3>
              <p className="text-muted-foreground text-[15px] leading-[1.8] max-w-xl">{belief.body}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PhilosophySection;
