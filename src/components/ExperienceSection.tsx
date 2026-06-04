import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const jobs = [
  {
    company: "Averent", type: "Social media platform startup", location: "NYC",
    roles: [
      {
        title: "Lead Cybersecurity Engineer", period: "Aug 2025 – Present",
        metrics: ["<100ms latency", "1M+ req/day", "99.9% uptime", "50% MTTR ↓", "30% throughput ↑"],
        bullets: [
          "Distributed backend in Go + Python — WebRTC P2P messaging at scale",
          "Built Grafana telemetry pipelines; optimized TCP + HTTP/2 across microservices",
          "On-call: packet captures, log correlation, protocol-level debugging",
        ],
        tags: ["Go", "Python", "WebRTC", "TCP/IP", "Grafana", "TLS 1.3", "HTTP/2"],
      },
      {
        title: "Secure Full-Stack Engineer", period: "Jan – Jul 2025",
        metrics: ["40% query latency ↓", "full test coverage"],
        bullets: [
          "REST APIs with connection pooling and query optimization",
          "PostgreSQL schema design — 40% query latency reduction",
        ],
        tags: ["PostgreSQL", "REST APIs", "Docker", "CI/CD"],
      },
    ],
  },
  {
    company: "Spoole Systems", type: "Fintech startup", location: "Bangalore",
    roles: [
      {
        title: "Information Security Intern", period: "Feb – May 2024",
        metrics: ["75+ users secured", "RBI compliant"],
        bullets: [
          "Database encryption + RBAC for RBI & IT Act 2000 compliance",
          "CI/CD pipeline hardening with credential management controls",
        ],
        tags: ["RBAC", "CI/CD", "Compliance"],
      },
    ],
  },
];

export default function ExperienceSection() {
  const [open, setOpen] = useState<string>("Lead Cybersecurity Engineer");

  return (
    <section id="experience" className="py-20 px-6 bg-card/40">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <div className="accent-line" />
            <span className="font-mono text-xs tracking-widest text-primary uppercase">Experience</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Where I've shipped.</h2>
        </motion.div>

        <div className="space-y-10">
          {jobs.map((job, ji) => (
            <motion.div key={job.company}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: ji * 0.1 }}>
              {/* Company header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-foreground text-lg">{job.company}</span>
                  <span className="text-muted-foreground text-sm ml-2">· {job.type} · {job.location}</span>
                </div>
              </div>

              <div className="ml-5 pl-5 border-l-2 border-border space-y-3">
                {job.roles.map(role => {
                  const isOpen = open === role.title;
                  return (
                    <div key={role.title} className="rounded-2xl border border-border bg-white card-hover overflow-hidden">
                      <button onClick={() => setOpen(isOpen ? "" : role.title)}
                        className="w-full px-5 py-4 flex items-start justify-between text-left gap-3">
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-foreground text-sm">{role.title}</p>
                          <p className="font-mono text-xs text-muted-foreground mt-0.5">{role.period}</p>
                          {/* Metric badges — always visible */}
                          <div className="flex flex-wrap gap-1.5 mt-3">
                            {role.metrics.map((m, mi) => (
                              <span key={m} className={`metric-badge ${mi % 2 === 1 ? "spark" : ""}`}>{m}</span>
                            ))}
                          </div>
                        </div>
                        <ChevronDown className={`w-4 h-4 text-muted-foreground shrink-0 mt-1 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.22 }} className="overflow-hidden">
                            <div className="px-5 pb-5 border-t border-border pt-4">
                              <ul className="space-y-1.5 mb-4">
                                {role.bullets.map((b, i) => (
                                  <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                                    <span className="text-primary shrink-0">›</span><span>{b}</span>
                                  </li>
                                ))}
                              </ul>
                              <div className="flex flex-wrap gap-1.5">
                                {role.tags.map(t => <span key={t} className="tag">{t}</span>)}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education strip */}
        <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-14 grid sm:grid-cols-2 gap-4">
          {[
            { school: "Pace University", degree: "MS Cybersecurity", note: "Merit Scholar · 3.9 GPA · 2024–2026", loc: "New York" },
            { school: "CMR Institute of Technology", degree: "BEng Information Science", note: "8.61 GPA · 2020–2024", loc: "Bangalore" },
          ].map(e => (
            <div key={e.school} className="bg-white border border-border rounded-2xl p-5 card-hover">
              <p className="font-bold text-foreground">{e.degree}</p>
              <p className="text-sm text-muted-foreground">{e.school} · {e.loc}</p>
              <p className="font-mono text-xs text-primary mt-1.5">{e.note}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
