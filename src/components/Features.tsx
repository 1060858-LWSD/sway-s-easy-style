import { motion } from "framer-motion";
import { ShieldCheck, Leaf, Tag, Eye } from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "Instant Transparency",
    description: "See how products are made, where materials come from, and whether the brand is genuinely sustainable.",
  },
  {
    icon: Tag,
    title: "Student-Friendly Prices",
    description: "Sway highlights fair pricing and finds budget-friendly sustainable alternatives you can actually afford.",
  },
  {
    icon: Leaf,
    title: "Sustainability Scores",
    description: "Every product gets a clear score based on materials, labour practices, and environmental impact.",
  },
  {
    icon: ShieldCheck,
    title: "Brand Trust Ratings",
    description: "Know which brands are genuinely ethical vs. greenwashing — backed by real data.",
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
          Built for students who care
        </h2>
        <p className="font-body text-muted-foreground text-lg">
          Everything you need to shop sustainably — without the research.
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
