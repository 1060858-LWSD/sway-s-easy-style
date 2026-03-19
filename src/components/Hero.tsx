import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-clothing.jpg";

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
          Shop smarter. Live lighter.
        </span>
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-foreground mb-6">
          Clothing you can trust,{" "}
          <span className="text-primary italic">delivered.</span>
        </h1>
        <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8 max-w-md">
          Sway makes online shopping practical — curating quality pieces at fair prices from brands that respect people and the planet.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button variant="hero" size="lg">
            Get Early Access
          </Button>
          <Button variant="hero-outline" size="lg">
            Learn More
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={heroImg}
            alt="Sustainable clothing flat lay with organic cotton and linen"
            className="w-full h-[500px] lg:h-[600px] object-cover"
            loading="eager"
          />
        </div>
        <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-5 shadow-lg border border-border hidden lg:block">
          <p className="font-display text-3xl text-primary">92%</p>
          <p className="font-body text-sm text-muted-foreground">less returns with Sway</p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
