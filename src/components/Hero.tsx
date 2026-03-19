import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-extension.jpg";
import { Chrome } from "lucide-react";

const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-16">
    <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center text-center lg:text-left">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-xl mx-auto lg:mx-0"
      >
        <span className="inline-block text-sm font-body font-semibold tracking-widest uppercase text-accent mb-4">
          Browser Extension for Smarter Shopping
        </span>
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-foreground mb-6">
          Shop sustainably{" "}
          <span className="text-primary italic">without the guesswork.</span>
        </h1>
        <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8 max-w-md mx-auto lg:mx-0">
          Sway is a free browser extension that shows you sustainability scores, fair pricing, and brand trust — right on sites like Amazon and Hollister.
        </p>
        <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
          <Button variant="hero" size="lg">
            <Chrome className="w-5 h-5 mr-2" />
            Add to Chrome — It's Free
          </Button>
          <Button variant="hero-outline" size="lg">
            Learn More
          </Button>
        </div>
        <p className="font-body text-xs text-muted-foreground mt-4">
          Also available for Firefox & Edge · No account needed
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        <div className="rounded-2xl overflow-hidden shadow-2xl border border-border">
          <img
            src={heroImg}
            alt="Sway browser extension showing sustainability scores on an online clothing store"
            className="w-full h-auto object-cover"
            loading="eager"
          />
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
