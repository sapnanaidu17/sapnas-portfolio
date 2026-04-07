import { motion } from "framer-motion";

const certs = [
  { name: "Certified in Cybersecurity (CC)", issuer: "ISC²", date: "Nov 2025", id: "#3032750" },
  { name: "Shields Up: Cybersecurity Simulation", issuer: "AIG", date: "Jul 2025", id: "" },
];

const CertificationsSection = () => (
  <section id="certifications" className="py-28 px-6 bg-card">
    <div className="max-w-3xl mx-auto">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4"
      >
        Credentials
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-4xl md:text-5xl italic text-foreground mb-12 leading-tight"
      >
        The receipts.
      </motion.h2>

      <div className="space-y-6">
        {certs.map((cert, i) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between py-4 border-b border-border"
          >
            <div>
              <p className="font-semibold text-foreground text-[15px]">{cert.name}</p>
              <p className="text-sm text-muted-foreground">
                {cert.issuer}
                {cert.id && <span className="font-mono text-xs ml-2 text-muted-foreground/70">{cert.id}</span>}
              </p>
            </div>
            <p className="font-mono text-xs text-muted-foreground mt-1 sm:mt-0 shrink-0">{cert.date}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CertificationsSection;
