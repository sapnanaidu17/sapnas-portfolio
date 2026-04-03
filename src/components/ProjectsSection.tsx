import { motion } from "framer-motion";

const projects = [
  {
    title: "Network Security Deployment",
    desc: "Designed secure network architecture for e-commerce — segmented networks, firewall policies, Snort NIDS, OpenVPN, and Splunk log analysis.",
    tags: ["Apache", "Snort", "Splunk", "Docker"],
  },
  {
    title: "Android 7 Digital Forensics",
    desc: "Full forensics investigation using Magnet AXIOM — artifact analysis, activity reconstruction, and comprehensive forensic reporting.",
    tags: ["Magnet AXIOM", "Mobile Forensics", "Timeline Analysis"],
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24 px-6 bg-card relative overflow-hidden">
    <div className="absolute top-20 left-[5%] w-24 h-24 rounded-full bg-primary/5 blur-xl" />

    <div className="max-w-2xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10 flex items-center gap-3"
      >
        <span className="text-2xl">🔬</span>
        <h2 className="font-display text-3xl font-semibold text-foreground">Projects</h2>
      </motion.div>

      <div className="space-y-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            whileHover={{ y: -3 }}
            className="bg-background rounded-xl p-6 border border-border transition-shadow hover:shadow-md"
          >
            <h3 className="font-display text-base font-semibold text-foreground mb-2">{project.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-3">{project.desc}</p>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span key={tag} className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
