import { motion } from "framer-motion";

const projects = [
  {
    title: "Network Security Deployment",
    context: "Pace University · Jan–May 2025",
    desc: "Designed and implemented a secure network architecture for a conceptual e-commerce company. Segmented internal and DMZ networks, deployed Apache web servers, enforced firewall policies, set up Snort NIDS monitoring, configured OpenVPN access, and centralized log analysis with Splunk.",
    tags: ["Apache", "Snort", "Splunk", "iptables", "OpenVPN", "Docker"],
    insight: "The question wasn't 'how do we monitor traffic?' — it was 'why does this traffic exist at all?'",
  },
  {
    title: "Android 7 Digital Forensics",
    context: "Pace University · Jan–Apr 2025",
    desc: "Full digital forensics investigation on an Android 7 case file using Magnet AXIOM. Analyzed artifacts, reconstructed user activity timelines, and documented findings in a structured report aligned with industry best practices.",
    tags: ["Magnet AXIOM", "Mobile Forensics", "Timeline Analysis", "Evidence Preservation"],
    insight: "Every artifact tells a story. The job is to read it without changing the ending.",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-28 px-6 bg-card">
    <div className="max-w-3xl mx-auto">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4"
      >
        Selected Work
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-4xl md:text-5xl text-foreground mb-16 leading-tight"
      >
        Things I've built<br className="hidden sm:block" /> & <span className="font-cursive italic text-primary">broken into.</span>
      </motion.h2>

      <div className="space-y-20">
        {projects.map((project, i) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <p className="font-mono text-xs text-muted-foreground mb-2">{project.context}</p>
            <h3 className="font-display text-2xl text-foreground mb-4">{project.title}</h3>
            <p className="text-muted-foreground text-[15px] leading-[1.8] mb-4">{project.desc}</p>

            <div className="pull-quote pl-6 border-l-2 border-primary/30 mb-6">
              <p className="font-cursive italic text-foreground text-lg leading-relaxed">
                "{project.insight}"
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[11px] px-3 py-1 rounded-full bg-background text-muted-foreground border border-border"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
