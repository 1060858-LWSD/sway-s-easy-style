import { motion } from "framer-motion";
import { ShieldCheck, Leaf, Tag, Repeat } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Verified Quality",
    description: "Every item is vetted for materials, construction, and durability before it reaches you.",
  },
  {
    icon: Tag,
    title: "Fair Pricing",
    description: "We cut out middlemen so you pay what clothes are actually worth — nothing more.",
  },
  {
    icon: Leaf,
    title: "Sustainable First",
    description: "We partner with brands that prioritise ethical sourcing and low-impact production.",
  },
  {
    icon: Repeat,
    title: "Easy Returns",
    description: "Changed your mind? Our hassle-free returns keep things stress-free.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: "easeOut" },
  }),
};

const Features = () => (
  <section id="features" className="py-24 lg:py-32">
    <div className="container mx-auto px-6">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
          Why shoppers love Sway
        </h2>
        <p className="font-body text-muted-foreground text-lg">
          We solve the biggest frustrations of buying clothes online.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-card rounded-2xl p-7 border border-border hover:shadow-lg transition-shadow duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
              <f.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-xl text-foreground mb-2">{f.title}</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">{f.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
