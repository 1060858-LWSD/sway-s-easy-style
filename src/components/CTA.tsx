import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CTA = () => (
  <section className="py-24 lg:py-32 bg-primary">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="container mx-auto px-6 text-center"
    >
      <h2 className="font-display text-4xl md:text-5xl text-primary-foreground mb-4">
        Ready to shop better?
      </h2>
      <p className="font-body text-primary-foreground/80 text-lg mb-8 max-w-md mx-auto">
        Join thousands of shoppers who've already made the switch to smarter, more sustainable fashion.
      </p>
      <Button
        variant="hero-outline"
        size="lg"
        className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
      >
        Get Early Access
      </Button>
    </motion.div>
  </section>
);

export default CTA;
