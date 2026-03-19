import { motion } from "framer-motion";

const steps = [
  { number: "01", title: "Install the extension", description: "Add Sway to your browser in one click — no sign-up required." },
  { number: "02", title: "Shop like you normally do", description: "Browse Amazon, Hollister, or any clothing site. Sway runs quietly in the background." },
  { number: "03", title: "See what brands hide", description: "Get instant sustainability scores, pricing insights, and brand trust ratings on every product page." },
];

const HowItWorks = () => (
  <section id="how-it-works" className="py-16 lg:py-20 bg-secondary/40">
    <div className="container mx-auto px-6">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
          How Sway works
        </h2>
        <p className="font-body text-muted-foreground text-lg">
          Three steps. Zero friction. Total transparency.
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
