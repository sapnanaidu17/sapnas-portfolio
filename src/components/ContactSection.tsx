import { motion } from "framer-motion";
import { Linkedin, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <span className="font-mono text-primary text-sm">&gt; ping sapna</span>
          <h2 className="font-mono text-3xl md:text-4xl font-bold mt-2 text-foreground">
            Let's Connect<span className="text-primary">.</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto"
        >
          Open to security engineering, penetration testing, and application security roles. 
          Let's build something secure together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="https://www.linkedin.com/in/sapna-naidu-543ba62ab"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono text-sm px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded-sm"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
          <a
            href="mailto:sapna@example.com"
            className="flex items-center gap-2 font-mono text-sm px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/80 transition-all duration-300 rounded-sm"
          >
            <Mail className="w-4 h-4" />
            Get in Touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex items-center justify-center gap-2 text-muted-foreground/50 text-sm"
        >
          <MapPin className="w-3 h-3" />
          <span className="font-mono">New York, NY</span>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
