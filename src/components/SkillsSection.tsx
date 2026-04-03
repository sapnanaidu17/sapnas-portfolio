import { motion } from "framer-motion";

const skillGroups = [
  {
    label: "Security",
    skills: ["Penetration Testing", "Vulnerability Assessment", "Threat Modeling", "Incident Response", "SAST/DAST", "ISO 27001"],
  },
  {
    label: "Infrastructure",
    skills: ["Network Security", "Cloud Security", "Docker", "Splunk", "Snort", "DevSecOps", "CI/CD"],
  },
  {
    label: "Engineering",
    skills: ["Python", "PowerShell", "Full Stack", "AI & ML", "Risk & Compliance"],
  },
];

const SkillsSection = () => (
  <section id="skills" className="py-24 px-6">
    <div className="max-w-2xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl font-semibold text-foreground mb-10"
      >
        Skills
      </motion.h2>

      <div className="space-y-8">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: gi * 0.1 }}
          >
            <p className="text-xs font-semibold text-muted-foreground tracking-widest uppercase mb-3">
              {group.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs font-medium px-3 py-1.5 rounded-full bg-card text-secondary-foreground border border-border hover:border-primary/50 hover:bg-primary/5 hover:text-foreground transition-all duration-200 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
