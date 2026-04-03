import { motion } from "framer-motion";

const skillCategories = [
  {
    label: "Offensive Security",
    skills: ["Penetration Testing", "Ethical Hacking", "Vulnerability Assessment", "Threat Modeling", "SAST/DAST"],
  },
  {
    label: "Defensive Security",
    skills: ["Incident Response", "Network Security", "Cloud Security", "Firewalls", "IDS/IPS", "Splunk"],
  },
  {
    label: "Development",
    skills: ["Python", "PowerShell", "Full Stack", "DevSecOps", "CI/CD", "Docker", "APIs"],
  },
  {
    label: "Compliance & Strategy",
    skills: ["Risk Assessment", "ISO 27001", "NIST CSF", "Information Auditing", "Threat Intelligence"],
  },
  {
    label: "Tools & Platforms",
    skills: ["Snort", "OpenVPN", "Magnet AXIOM", "iptables", "Linux", "Apache", "Git"],
  },
  {
    label: "Emerging Tech",
    skills: ["AI & Machine Learning", "Data Structures", "Algorithms", "Secure Architecture"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="font-mono text-primary text-sm">&gt; skills --list</span>
          <h2 className="font-mono text-3xl md:text-4xl font-bold mt-2 text-foreground">
            Arsenal<span className="text-primary">.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card/50 border border-border rounded-sm p-5"
            >
              <h3 className="font-mono text-sm font-semibold text-primary mb-3">{cat.label}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs px-2.5 py-1 bg-secondary text-secondary-foreground rounded-sm border border-border hover:border-primary/40 transition-colors cursor-default"
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
};

export default SkillsSection;
