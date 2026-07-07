import { motion } from "framer-motion";

const skillGroups = [
  {
    label: "Offensive Security",
    skills: ["Penetration Testing", "Ethical Hacking", "Vulnerability Assessment", "SAST/DAST"],
  },
  {
    label: "Defensive Security",
    skills: ["Incident Response", "Threat Modeling", "Network Defense", "Snort NIDS", "Splunk SIEM"],
  },
  {
    label: "Infrastructure",
    skills: ["Cloud Security", "Firewalls", "Docker", "DevSecOps", "Secure CI/CD", "OpenVPN"],
  },
  {
    label: "Engineering",
    skills: ["Python", "PowerShell", "Full Stack", "AI & ML", "Data Structures"],
  },
  {
    label: "Governance",
    skills: ["ISO 27001", "Risk & Compliance", "Information Auditing", "ICS-100"],
  },
];

const SkillsSection = () => (
  <section id="skills" className="py-28 px-6">
    <div className="max-w-3xl mx-auto">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4"
      >
        The toolkit
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-4xl md:text-5xl italic text-foreground mb-16 leading-tight"
      >
        What I work with.
      </motion.h2>

      <div className="space-y-10">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: gi * 0.05 }}
          >
            <p className="font-mono text-xs text-primary tracking-widest uppercase mb-3">
              {group.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-sm px-4 py-2 rounded-full bg-card text-secondary-foreground border border-border hover:border-primary/40 hover:text-foreground transition-all duration-200 cursor-default"
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
