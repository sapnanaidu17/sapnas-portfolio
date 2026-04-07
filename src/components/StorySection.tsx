import { motion } from "framer-motion";

const StorySection = () => (
  <section id="story" className="py-28 px-6">
    <div className="max-w-3xl mx-auto">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4"
      >
        Origin Story
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-4xl md:text-5xl text-foreground mb-12 leading-tight"
      >
        When I was 14, I jailbroke my <span className="font-cursive italic text-primary">iPad&nbsp;3.</span>
      </motion.h2>

      <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <p className="text-muted-foreground leading-[1.8] text-[15px]">
            Not for free apps or custom themes — though sure, I was 14, that was part of it. 
            I wanted to see what was actually running in the background. What processes were 
            communicating with servers. How the kernel enforced app sandboxing. Why certain 
            system calls were blocked even with root access.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          <p className="text-muted-foreground leading-[1.8] text-[15px]">
            That curiosity never left. I spent 5 years building secure applications, websites, 
            and AI-driven chatbots. Working across development teams, I noticed a pattern — 
            security was always an afterthought. Something you bolt on at the end. A checkbox 
            to clear before launch.
          </p>
          <p className="text-foreground leading-[1.8] text-[15px] font-medium">
            That's when I doubled down. Now I don't just build things that work — I build 
            things that protect data from day one. I treat security as an architecture 
            problem, not a compliance one. Because people cannot follow what they do not understand, 
            and they will not protect what they do not feel responsible for.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default StorySection;
