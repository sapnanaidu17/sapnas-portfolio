import { motion } from "framer-motion";

const skills = [
  "Penetration Testing", "Vulnerability Assessment", "Threat Modeling",
  "Incident Response", "Network Security", "Cloud Security",
  "Python", "PowerShell", "DevSecOps", "CI/CD",
  "SAST/DAST", "Splunk", "Snort", "Docker",
  "AI & ML", "Full Stack", "Risk & Compliance", "ISO 27001",
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04 } },
};

const item = {
  hidden: { opacity: 0, scale: 0.85 },
  show: { opacity: 1, scale: 1 },
};

const SkillsSection = () => (
  <section id="skills" className="py-24 px-6">
    <div className="max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-8 flex items-center gap-3"
      >
        <span className="text-2xl">🛡️</span>
        <h2 className="font-display text-3xl font-semibold text-foreground">Skills</h2>
      </motion.div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-wrap gap-2"
      >
        {skills.map((skill) => (
          <motion.span
            key={skill}
            variants={item}
            whileHover={{ scale: 1.05, y: -2 }}
            className="text-xs font-medium px-3 py-1.5 rounded-full bg-card text-secondary-foreground border border-border cursor-default transition-colors hover:border-primary/40"
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </div>
  </section>
);

export default SkillsSection;
