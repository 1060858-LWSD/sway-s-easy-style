import { motion } from "framer-motion";

const steps = [
  { number: "01", title: "Browse curated picks", description: "We surface quality, sustainable clothing — no endless scrolling." },
  { number: "02", title: "Get honest details", description: "Real materials info, sizing guidance, and transparent pricing." },
  { number: "03", title: "Shop with confidence", description: "Secure checkout, fast shipping, and effortless returns if needed." },
];

const HowItWorks = () => (
  <section id="how-it-works" className="py-24 lg:py-32 bg-secondary/40">
    <div className="container mx-auto px-6">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
          How Sway works
        </h2>
        <p className="font-body text-muted-foreground text-lg">
          Three simple steps to better online shopping.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {steps.map((s, i) => (
          <motion.div
            key={s.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="text-center"
          >
            <span className="font-display text-6xl text-primary/20">{s.number}</span>
            <h3 className="font-display text-xl text-foreground mt-2 mb-3">{s.title}</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">{s.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
