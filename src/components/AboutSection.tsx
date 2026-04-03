import { motion } from "framer-motion";
import { Shield, Code, Brain } from "lucide-react";

const pillars = [
  {
    icon: Code,
    title: "Builder",
    desc: "5+ years coding secure applications, websites, and AI-driven chatbots across full-stack ecosystems.",
  },
  {
    icon: Shield,
    title: "Defender",
    desc: "Penetration testing, vulnerability assessments, and threat modeling to protect data from day one.",
  },
  {
    icon: Brain,
    title: "Strategist",
    desc: "Risk & compliance, incident response, and DevSecOps integration for resilient infrastructure.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="font-mono text-primary text-sm">&gt; cat about.md</span>
          <h2 className="font-mono text-3xl md:text-4xl font-bold mt-2 text-foreground">
            About<span className="text-primary">.</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-secondary-foreground/70 text-lg leading-relaxed mb-12 max-w-3xl"
        >
          I have spent the last 5 years coding and developing secure applications, websites, and AI-driven chatbots. 
          I've collaborated with talented people across multiple realms of development and noticed a pattern — 
          <span className="text-primary font-medium"> security is an afterthought</span>. That's when I doubled down 
          and focused on not only building things that work but are capable of protecting data from day one.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.15 }}
              className="bg-card border border-border rounded-sm p-6 hover:border-primary/40 transition-colors duration-300 group"
            >
              <pillar.icon className="w-8 h-8 text-primary mb-4 group-hover:drop-shadow-[0_0_8px_hsl(152_100%_50%_/_0.5)] transition-all" />
              <h3 className="font-mono text-lg font-semibold text-foreground mb-2">{pillar.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
