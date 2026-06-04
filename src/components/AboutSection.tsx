import { motion } from "framer-motion";

const facts = [
  { emoji: "🔓", headline: "Jailbroke my iPad at 14.", sub: "Not for apps — to see what was actually running. Still that person." },
  { emoji: "⚡", headline: "sub-100ms in prod.", sub: "WebRTC real-time comms. Not a demo." },
  { emoji: "🦀", headline: "Rust/WASM forensic scanner.", sub: "Entropy scoring, zero-dependency, sandboxed." },
  { emoji: "🎓", headline: "MS Cybersecurity, 3.9 GPA.", sub: "Pace University. Merit Scholar." },
  { emoji: "🌆", headline: "Made in India. Building in NYC.", sub: "CMR → Pace → whatever comes next." },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="accent-line" />
            <span className="font-mono text-xs tracking-widest text-primary uppercase">Quick version</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">5 things about me.</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {facts.map((f, i) => (
            <motion.div key={f.headline}
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              whileHover={{ y: -3 }}
              className="bg-white border border-border rounded-2xl p-6 card-hover">
              <span className="text-3xl mb-3 block">{f.emoji}</span>
              <p className="font-bold text-foreground text-base mb-1">{f.headline}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.sub}</p>
            </motion.div>
          ))}
          {/* 6th card — CTA */}
          <motion.a href="#experience"
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.4 }}
            whileHover={{ y: -3 }}
            className="bg-primary border border-primary rounded-2xl p-6 card-hover flex flex-col justify-between group">
            <span className="text-3xl mb-3 block">→</span>
            <p className="font-bold text-primary-foreground text-base">See what I've built.</p>
            <p className="text-sm text-primary-foreground/70 mt-1">Experience & projects ↓</p>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
