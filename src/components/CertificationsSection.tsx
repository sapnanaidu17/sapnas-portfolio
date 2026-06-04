import { motion } from "framer-motion";

const certs = [
  { name: "Certified in Cybersecurity (CC)", issuer: "ISC²", date: "Nov 2025", id: "#3032750", hot: true },
  { name: "CompTIA Security+", issuer: "CompTIA", date: "In Progress", id: "", hot: false },
  { name: "FEMA IS-100.c", issuer: "FEMA", date: "2024", id: "", hot: false },
  { name: "Shields Up: Cybersecurity Simulation", issuer: "AIG", date: "Jun 2025", id: "", hot: false },
  { name: "IAM Analyst Experience", issuer: "TCS Forage", date: "Jul 2025", id: "", hot: false },
];

export default function CertificationsSection() {
  return (
    <section className="py-16 px-6 bg-card/40">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="accent-line" />
            <span className="font-mono text-xs tracking-widest text-primary uppercase">Credentials</span>
          </div>
          <h2 className="text-2xl font-extrabold text-foreground">The receipts.</h2>
        </motion.div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {certs.map((c, i) => (
            <motion.div key={c.name}
              initial={{ opacity: 0, scale: 0.92 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ delay: i * 0.07 }}
              className={`rounded-2xl border p-4 card-hover bg-white ${c.hot ? "border-primary/40" : "border-border"}`}>
              <p className={`text-xs font-bold leading-snug mb-2 ${c.hot ? "text-primary" : "text-foreground"}`}>{c.name}</p>
              <p className="text-xs text-muted-foreground">{c.issuer}</p>
              <p className="font-mono text-xs text-muted-foreground/60 mt-1">{c.date}</p>
              {c.id && <p className="font-mono text-[10px] text-muted-foreground/50 mt-0.5">{c.id}</p>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
