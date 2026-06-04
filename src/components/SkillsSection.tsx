import { useState } from "react";
import { motion } from "framer-motion";

const languages = [
  { name: "Go", level: 85 }, { name: "Python", level: 90 }, { name: "Rust", level: 80 },
  { name: "C/C++", level: 75 }, { name: "JavaScript", level: 85 }, { name: "Java", level: 70 },
];

const categories = [
  { id: "rt", label: "⚡ Real-Time", tags: ["WebRTC", "MoQ", "TCP/IP", "HTTP/2", "HTTP/3", "TLS 1.3", "DTLS", "CDN", "DNS", "Streaming Media"] },
  { id: "dist", label: "🔗 Distributed", tags: ["High-Availability", "Fault Tolerance", "Load Balancing", "Service Mesh", "Microservices", "Secure APIs"] },
  { id: "obs", label: "📊 Observability", tags: ["Grafana", "Prometheus", "Telemetry", "Wireshark", "tcpdump", "Packet Capture", "Alerting"] },
  { id: "infra", label: "🛠 Infra", tags: ["Kubernetes", "Docker", "Linux Networking", "CI/CD", "AWS", "GitHub Actions", "IaC"] },
  { id: "data", label: "🗄 Data", tags: ["PostgreSQL", "ClickHouse", "Query Optimization", "Indexing", "Performance Tuning"] },
  { id: "sec", label: "🔒 Security", tags: ["MITRE ATT&CK", "NIST CSF", "Zero Trust", "RBAC", "IAM", "Threat Modeling"] },
];

export default function SkillsSection() {
  const [active, setActive] = useState("rt");
  const cat = categories.find(c => c.id === active)!;

  return (
    <section id="skills" className="py-20 px-6 bg-card/40">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <div className="accent-line" />
            <span className="font-mono text-xs tracking-widest text-primary uppercase">Stack</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">What I build with.</h2>
        </motion.div>

        {/* Language bars */}
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <p className="font-mono text-xs text-primary uppercase tracking-widest mb-5">Languages</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {languages.map((l, i) => (
              <motion.div key={l.name}
                initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                <div className="flex justify-between mb-1.5">
                  <span className="font-mono text-sm font-semibold text-foreground">{l.name}</span>
                  <span className="font-mono text-xs text-muted-foreground">{l.level}%</span>
                </div>
                <div className="h-2 rounded-full overflow-hidden" style={{ background: "hsl(36 16% 86%)" }}>
                  <motion.div initial={{ width: 0 }} whileInView={{ width: `${l.level}%` }}
                    viewport={{ once: true }} transition={{ duration: 0.85, delay: i * 0.06 + 0.15, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{ background: "linear-gradient(90deg, hsl(263 72% 52%), hsl(330 72% 56%))" }} />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Category tabs */}
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="font-mono text-xs text-primary uppercase tracking-widest mb-4">Expertise</p>
          <div className="flex flex-wrap gap-2 mb-5">
            {categories.map(c => (
              <button key={c.id} onClick={() => setActive(c.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                  active === c.id
                    ? "bg-primary text-primary-foreground border-primary shadow-sm shadow-primary/20"
                    : "bg-white border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                }`}>
                {c.label}
              </button>
            ))}
          </div>
          <motion.div key={active} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}
            className="flex flex-wrap gap-2 p-5 rounded-2xl border border-border bg-white">
            {cat.tags.map((t, i) => (
              <motion.span key={t} initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.04 }} className="tag">{t}</motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
