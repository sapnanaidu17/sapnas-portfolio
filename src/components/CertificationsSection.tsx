import { motion } from "framer-motion";

const certs = [
  { name: "Certified in Cybersecurity (CC)", issuer: "ISC²", date: "Nov 2025" },
  { name: "Shields Up: Cybersecurity Simulation", issuer: "AIG", date: "Jul 2025" },
];

const CertificationsSection = () => (
  <section id="certifications" className="py-24 px-6">
    <div className="max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-8 flex items-center gap-3"
      >
        <span className="text-2xl">🏅</span>
        <h2 className="font-display text-3xl font-semibold text-foreground">Certifications</h2>
      </motion.div>
      <div className="space-y-4">
        {certs.map((cert, i) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
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
