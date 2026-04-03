import { motion } from "framer-motion";

const certs = [
  { name: "Certified in Cybersecurity (CC)", issuer: "ISC²", date: "Nov 2025" },
  { name: "Shields Up: Cybersecurity Simulation", issuer: "AIG", date: "Jul 2025" },
];

const CertificationsSection = () => (
  <section id="certifications" className="py-24 px-6">
    <div className="max-w-2xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl font-semibold text-foreground mb-8"
      >
        Certifications
      </motion.h2>
      <div className="space-y-4">
        {certs.map((cert, i) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex justify-between items-baseline"
          >
            <div>
              <p className="text-sm font-medium text-foreground">{cert.name}</p>
              <p className="text-xs text-muted-foreground">{cert.issuer}</p>
            </div>
            <p className="text-xs text-muted-foreground shrink-0 ml-4">{cert.date}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CertificationsSection;
