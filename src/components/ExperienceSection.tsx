import { motion } from "framer-motion";

const experiences = [
  {
    company: "Averent",
    roles: [
      { title: "Lead Cybersecurity Engineer", period: "Aug 2025 – Present" },
      { title: "Secure Full Stack Engineer", period: "Jan 2025 – Aug 2025" },
    ],
  },
  {
    company: "Spoole Systems",
    roles: [
      { title: "Information Security Intern", period: "Apr – Jul 2024" },
      { title: "Sales & Marketing Intern", period: "Feb – May 2024" },
    ],
  },
];

const education = [
  { school: "Pace University", degree: "MS Cybersecurity", grade: "3.9 GPA", period: "2024 – Present" },
  { school: "CMR Institute of Technology", degree: "BE Computer Science", grade: "8.61 CGPA", period: "2020 – 2024" },
];

const ExperienceSection = () => (
  <section id="experience" className="py-24 px-6 bg-card">
    <div className="max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10 flex items-center gap-3"
      >
        <span className="text-2xl">💼</span>
        <h2 className="font-display text-3xl font-semibold text-foreground">Experience</h2>
      </motion.div>

      <div className="space-y-8 mb-16">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <h3 className="font-display text-lg font-semibold text-foreground mb-3">{exp.company}</h3>
            <div className="space-y-2 pl-4 border-l-2 border-primary/30">
              {exp.roles.map((role) => (
                <div key={role.title} className="py-1">
                  <p className="text-sm font-medium text-foreground">{role.title}</p>
                  <p className="text-xs text-muted-foreground">{role.period}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10 flex items-center gap-3"
      >
        <span className="text-2xl">🎓</span>
        <h2 className="font-display text-3xl font-semibold text-foreground">Education</h2>
      </motion.div>

      <div className="space-y-4">
        {education.map((edu, i) => (
          <motion.div
            key={edu.school}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex justify-between items-baseline"
          >
            <div>
              <p className="text-sm font-medium text-foreground">{edu.degree}</p>
              <p className="text-xs text-muted-foreground">{edu.school}</p>
            </div>
            <div className="text-right shrink-0 ml-4">
              <p className="text-xs text-primary font-medium">{edu.grade}</p>
              <p className="text-xs text-muted-foreground">{edu.period}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
