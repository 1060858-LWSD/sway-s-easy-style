import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Chrome } from "lucide-react";

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
        Start shopping smarter today
      </h2>
      <p className="font-body text-primary-foreground/80 text-lg mb-8 max-w-md mx-auto">
        Install Sway in seconds and get sustainability insights on every clothing purchase — completely free.
      </p>
      <Button
        variant="hero-outline"
        size="lg"
        className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
      >
        <Chrome className="w-5 h-5 mr-2" />
        Add to Chrome — Free
      </Button>
    </motion.div>
  </section>
);

export default CTA;
