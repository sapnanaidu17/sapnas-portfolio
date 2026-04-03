import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certs = [
  {
    name: "Certified in Cybersecurity (CC)",
    issuer: "ISC²",
    date: "Nov 2025",
    expires: "Nov 2028",
    id: "3032750",
  },
  {
    name: "Shields Up: Cybersecurity Job Simulation",
    issuer: "AIG",
    date: "Jul 2025",
    expires: null,
    id: null,
  },
];

const education = [
  {
    school: "Pace University — Seidenberg School",
    degree: "Master of Science, Cybersecurity",
    period: "2024 – Present",
    grade: "3.9/4.0 GPA",
  },
  {
    school: "CMR Institute of Technology",
    degree: "Bachelor of Engineering, Computer Science",
    period: "2020 – 2024",
    grade: "CGPA: 8.61",
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 px-6 relative">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="font-mono text-primary text-sm">&gt; verify --credentials</span>
          <h2 className="font-mono text-3xl md:text-4xl font-bold mt-2 text-foreground">
            Credentials<span className="text-primary">.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Certifications */}
          <div>
            <h3 className="font-mono text-sm text-primary mb-6 uppercase tracking-wider">Certifications</h3>
            <div className="space-y-4">
              {certs.map((cert, i) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="bg-card border border-border rounded-sm p-5 flex gap-4"
                >
                  <Award className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-mono text-sm font-semibold text-foreground">{cert.name}</h4>
                    <p className="text-muted-foreground text-xs mt-1">
                      {cert.issuer} · {cert.date}
                      {cert.expires && ` · Expires ${cert.expires}`}
                    </p>
                    {cert.id && (
                      <p className="font-mono text-[10px] text-muted-foreground/60 mt-1">ID: {cert.id}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="font-mono text-sm text-primary mb-6 uppercase tracking-wider">Education</h3>
            <div className="space-y-4">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.school}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="bg-card border border-border rounded-sm p-5"
                >
                  <h4 className="font-mono text-sm font-semibold text-foreground">{edu.degree}</h4>
                  <p className="text-muted-foreground text-xs mt-1">{edu.school}</p>
                  <p className="text-muted-foreground text-xs mt-1">
                    {edu.period} · <span className="text-primary">{edu.grade}</span>
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
