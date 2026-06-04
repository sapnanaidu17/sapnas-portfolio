import { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    emoji: "⛓️",
    title: "Blockchain Forensics",
    hook: "Tamper-proof. Chain-of-custody for the real world.",
    back: "SHA-256 + Ethereum anchoring. Rust/WASM scanner (entropy scoring, YARA patterns). React + Flask + Supabase RLS.",
    tags: ["Rust", "WASM", "Python", "Ethereum", "PostgreSQL"],
    accent: "primary",
    context: "Capstone · 2026",
  },
  {
    emoji: "🛡️",
    title: "Network Security Deployment",
    hook: "Multi-zone. Zero unauthenticated entry points.",
    back: "DMZ segmentation + iptables. Snort NIDS + Splunk. OpenVPN with encrypted auth paths.",
    tags: ["Snort", "Splunk", "iptables", "OpenVPN", "Docker"],
    accent: "spark",
    context: "Pace · 2025",
  },
  {
    emoji: "🌐",
    title: "Global E-Commerce Security",
    hook: "NIST → PCI-DSS → FedRAMP. End-to-end.",
    back: "Zero Trust IAM lifecycle. MFA + SSO + RBAC. Threat modeling presented to industry panel.",
    tags: ["NIST CSF 2.0", "PCI-DSS", "Zero Trust", "IAM"],
    accent: "primary",
    context: "Pace · 2024",
  },
  {
    emoji: "🤖",
    title: "MindMate AI Chatbot",
    hook: "HIPAA-aligned. Sensitive data handled right.",
    back: "Encryption at rest + SDLC security gates in MongoDB. Full vulnerability management.",
    tags: ["Python", "MongoDB", "HIPAA", "AI/ML"],
    accent: "spark",
    context: "2023–2024",
  },
];

function FlipCard({ p }: { p: typeof projects[0] }) {
  const [flipped, setFlipped] = useState(false);
  const isPrimary = p.accent === "primary";

  return (
    <div className={`flip-card h-56 ${flipped ? "flipped" : ""}`} onClick={() => setFlipped(f => !f)}>
      <div className="flip-card-inner">
        {/* Front */}
        <div className={`flip-card-front border flex flex-col justify-between cursor-pointer select-none
          ${isPrimary ? "bg-white border-border hover:border-primary/40" : "bg-white border-border hover:border-spark/40"}`}>
          <div>
            <span className="text-3xl mb-3 block">{p.emoji}</span>
            <p className="font-mono text-xs text-muted-foreground mb-1">{p.context}</p>
            <p className="font-bold text-foreground text-base leading-snug">{p.title}</p>
            <p className={`text-sm mt-1 ${isPrimary ? "text-primary" : "text-spark"} font-medium`}>{p.hook}</p>
          </div>
          <p className="font-mono text-xs text-muted-foreground/60 mt-3">tap to flip →</p>
        </div>
        {/* Back */}
        <div className={`flip-card-back border flex flex-col justify-between cursor-pointer select-none
          ${isPrimary ? "bg-primary border-primary" : "bg-white border-border"}`}
          style={!isPrimary ? { background: "hsl(330 72% 56%)" } : {}}>
          <div>
            <p className={`text-sm font-medium leading-relaxed mb-4 ${isPrimary ? "text-primary-foreground" : "text-white"}`}>{p.back}</p>
            <div className="flex flex-wrap gap-1.5">
              {p.tags.map(t => (
                <span key={t} className="font-mono text-[11px] px-2.5 py-0.5 rounded-full border border-white/30 text-white/90 bg-white/10">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <p className={`font-mono text-xs mt-3 ${isPrimary ? "text-primary-foreground/60" : "text-white/60"}`}>← flip back</p>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <div className="accent-line" />
            <span className="font-mono text-xs tracking-widest text-primary uppercase">Projects</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
            Things I've built <span className="text-spark italic font-extrabold">& broken into.</span>
          </h2>
          <p className="text-sm text-muted-foreground mt-2 font-mono">tap a card to flip it ↓</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((p, i) => (
            <motion.div key={p.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
              <FlipCard p={p} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
