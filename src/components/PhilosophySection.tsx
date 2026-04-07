import { motion } from "framer-motion";

const beliefs = [
  {
    number: "01",
    title: "Remove, don't add.",
    body: "Most security people solve problems by adding layers. I solve them by removing what doesn't need to exist. Fewer moving parts means fewer things to break.",
  },
  {
    number: "02",
    title: "Security is a leadership function.",
    body: "Tools don't create safety. Trust, understanding, and structure do. Cybersecurity isn't a technical checkbox — it's a culture you build through clarity and alignment. Systems break at the point where alignment ends.",
  },
  {
    number: "03",
    title: "Build systems people actually follow.",
    body: "If a system is too complicated to follow, it will never be followed at all. I simplify until the right action becomes the easiest action to take. Security should feel like part of doing the job correctly, not an additional chore.",
  },
  {
    number: "04",
    title: "Trust is the architecture.",
    body: "You can't control outcomes and develop people at the same time. I lead by building trust, not dependence. The moment a team performs for a leader's comfort instead of the mission's success, culture starts to collapse.",
  },
  {
    number: "05",
    title: "Own the gap.",
    body: "Nobody told me to redesign our CI/CD security or mentor the team on threat modeling. I saw the gap, and I filled it. Extreme ownership isn't a buzzword — it's how I operate every single day.",
  },
  {
    number: "06",
    title: "Best idea wins.",
    body: "Even when it's not mine. I've gotten better at setting my ego aside when someone has a sharper solution. That's not weakness — that's how you ship work that actually matters.",
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
        className="font-display text-4xl md:text-5xl text-foreground mb-6 leading-tight"
      >
        Things I'll <span className="font-cursive italic text-primary">never</span> compromise on.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-muted-foreground text-[15px] leading-relaxed mb-16 max-w-xl"
      >
        Security isn't a feature you bolt on after the fact. It must be designed in from the start — 
        embedded into every process, product, and decision. These are the principles that guide how I work.
      </motion.p>

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
