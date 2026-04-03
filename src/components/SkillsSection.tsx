import { motion } from "framer-motion";

const skills = [
  "Penetration Testing", "Vulnerability Assessment", "Threat Modeling",
  "Incident Response", "Network Security", "Cloud Security",
  "Python", "PowerShell", "DevSecOps", "CI/CD",
  "SAST/DAST", "Splunk", "Snort", "Docker",
  "AI & ML", "Full Stack", "Risk & Compliance", "ISO 27001",
];

const SkillsSection = () => (
  <section id="skills" className="py-24 px-6">
    <div className="max-w-2xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl font-semibold text-foreground mb-8"
      >
        Skills
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="flex flex-wrap gap-2"
      >
        {skills.map((skill) => (
          <span
            key={skill}
            className="text-xs font-medium px-3 py-1.5 rounded-full bg-card text-secondary-foreground border border-border hover:border-primary/40 transition-colors"
          >
            {skill}
          </span>
        ))}
      </motion.div>
    </div>
  </section>
);

export default SkillsSection;
