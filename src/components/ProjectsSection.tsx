import { motion } from "framer-motion";
import { Network, Smartphone, ShieldCheck, Globe } from "lucide-react";

const projects = [
  {
    icon: Network,
    title: "Network Security Deployment",
    period: "Jan 2025 – May 2025",
    org: "Pace University",
    desc: "Designed and implemented secure network architecture for a conceptual e-commerce company — segmented networks, Apache web server, firewall policies, Snort NIDS, OpenVPN, and Splunk log analysis.",
    tools: ["Apache", "OpenVPN", "Snort", "Splunk", "iptables", "Linux", "Docker"],
  },
  {
    icon: Smartphone,
    title: "Android 7 Digital Forensics",
    period: "Jan 2025 – Apr 2025",
    org: "Pace University",
    desc: "Conducted full digital forensics investigation on Android 7 using Magnet AXIOM — artifact analysis, user activity reconstruction, and comprehensive forensic reporting.",
    tools: ["Magnet AXIOM", "Mobile Forensics", "Evidence Preservation", "Timeline Analysis"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="font-mono text-primary text-sm">&gt; ls ~/projects</span>
          <h2 className="font-mono text-3xl md:text-4xl font-bold mt-2 text-foreground">
            Projects<span className="text-primary">.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card border border-border rounded-sm p-6 hover:border-primary/40 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4 mb-4">
                <project.icon className="w-6 h-6 text-primary mt-1 shrink-0 group-hover:drop-shadow-[0_0_8px_hsl(152_100%_50%_/_0.5)] transition-all" />
                <div>
                  <h3 className="font-mono text-base font-semibold text-foreground">{project.title}</h3>
                  <p className="font-mono text-xs text-muted-foreground">
                    {project.period} · {project.org}
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="font-mono text-[10px] px-2 py-0.5 bg-primary/10 text-primary border border-primary/20 rounded-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
