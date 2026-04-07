import { motion } from "framer-motion";

const experiences = [
  {
    company: "Averent",
    location: "New York · Hybrid",
    roles: [
      {
        title: "Lead Cybersecurity Engineer",
        period: "Aug 2025 – Present",
        highlights: [
          "Leading application security architecture, threat modeling, and incident response across the org",
          "Rebuilt CI/CD security from the ground up — didn't patch it, rewired it",
          "Mentoring engineers on security-first development practices",
        ],
      },
      {
        title: "Secure Full Stack Engineer",
        period: "Jan – Aug 2025",
        highlights: [
          "Integrated SAST/DAST into the development pipeline",
          "Built authentication and authorization controls for web & API security",
          "Translated compliance requirements into concrete technical implementations",
        ],
      },
    ],
  },
  {
    company: "Spoole Systems",
    location: "Bengaluru, India",
    roles: [
      {
        title: "Information Security Intern",
        period: "Apr – Jul 2024",
        highlights: [
          "Application security support, database encryption, and regulatory compliance",
          "Implemented RBAC and secure development practices for FinTech systems",
        ],
      },
      {
        title: "Sales & Marketing Intern",
        period: "Feb – May 2024",
        highlights: [
          "Market risk analysis and standards compliance",
        ],
      },
    ],
  },
];

const education = [
  {
    school: "Pace University",
    degree: "MS Cybersecurity",
    detail: "Seidenberg School of CS & IS",
    grade: "3.9 GPA",
    period: "2024 – 2026",
  },
  {
    school: "CMR Institute of Technology",
    degree: "BE Computer Science",
    detail: "",
    grade: "8.61 CGPA",
    period: "2020 – 2024",
  },
];

const ExperienceSection = () => (
  <section id="experience" className="py-28 px-6">
    <div className="max-w-3xl mx-auto">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4"
      >
        Where I've been
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-4xl md:text-5xl text-foreground mb-16 leading-tight"
      >
        Experience
      </motion.h2>

      <div className="space-y-16">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="flex items-baseline justify-between mb-1">
              <h3 className="font-display text-2xl text-foreground">{exp.company}</h3>
              <span className="text-xs text-muted-foreground hidden sm:block">{exp.location}</span>
            </div>
            <div className="h-px bg-border mb-6" />

            <div className="space-y-8 pl-0 md:pl-6">
              {exp.roles.map((role) => (
                <div key={role.title}>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-3">
                    <p className="text-[15px] font-semibold text-foreground">{role.title}</p>
                    <p className="font-mono text-xs text-muted-foreground">{role.period}</p>
                  </div>
                  <ul className="space-y-1.5">
                    {role.highlights.map((h, j) => (
                      <li key={j} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                        <span className="text-primary mt-1 shrink-0">›</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Education */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-24"
      >
        <motion.p className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
          Education
        </motion.p>
        <motion.h2 className="font-display text-4xl md:text-5xl text-foreground mb-12 leading-tight">
          Where I <span className="font-cursive italic text-primary">learned</span>
        </motion.h2>

        <div className="space-y-8">
          {education.map((edu) => (
            <div key={edu.school} className="grid grid-cols-[1fr_auto] gap-4 items-start">
              <div>
                <p className="font-semibold text-foreground text-[15px]">{edu.degree}</p>
                <p className="text-sm text-muted-foreground">{edu.school}</p>
                {edu.detail && <p className="text-xs text-muted-foreground mt-0.5">{edu.detail}</p>}
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-primary">{edu.grade}</p>
                <p className="font-mono text-xs text-muted-foreground">{edu.period}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default ExperienceSection;
