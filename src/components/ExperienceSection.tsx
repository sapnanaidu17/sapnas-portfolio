import { motion } from "framer-motion";

const experiences = [
  {
    company: "Averent",
    location: "New York, US · Hybrid",
    roles: [
      {
        title: "Lead Cybersecurity Engineer",
        period: "Aug 2025 – Present",
        skills: "Application security architecture, network security, threat modeling, incident response, vulnerability validation, and security leadership.",
      },
      {
        title: "Secure Full Stack Engineer",
        period: "Jan 2025 – Aug 2025",
        skills: "Secure SDLC, SAST/DAST, web & API security, authentication/authorization controls, and CI/CD security integration.",
      },
    ],
  },
  {
    company: "Spoole Systems Pvt Ltd",
    location: "Bengaluru, India",
    roles: [
      {
        title: "Information Security Intern",
        period: "Apr 2024 – Jul 2024",
        skills: "Application security support, database encryption, regulatory compliance, secure development practices, and FinTech systems security.",
      },
      {
        title: "Sales And Marketing Intern",
        period: "Feb 2024 – May 2024",
        skills: "Standards compliance, market risk analysis, and cross-functional collaboration.",
      },
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="font-mono text-primary text-sm">&gt; history --all</span>
          <h2 className="font-mono text-3xl md:text-4xl font-bold mt-2 text-foreground">
            Experience<span className="text-primary">.</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] md:left-[11px] top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative pl-8 md:pl-10"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1 top-1 w-[14px] h-[14px] md:w-[22px] md:h-[22px] rounded-full border-2 border-primary bg-background flex items-center justify-center">
                  <div className="w-1.5 h-1.5 md:w-2.5 md:h-2.5 rounded-full bg-primary animate-pulse-glow" />
                </div>

                <h3 className="font-mono text-xl font-bold text-foreground">{exp.company}</h3>
                <p className="font-mono text-xs text-muted-foreground mb-4">{exp.location}</p>

                <div className="space-y-4">
                  {exp.roles.map((role) => (
                    <div
                      key={role.title}
                      className="bg-card border border-border rounded-sm p-5 hover:border-primary/30 transition-colors"
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h4 className="font-mono text-sm font-semibold text-primary">{role.title}</h4>
                        <span className="font-mono text-xs text-muted-foreground">{role.period}</span>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{role.skills}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
