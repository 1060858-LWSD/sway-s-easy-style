import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Not knowing how something is made prevents me from shopping sustainably.",
    name: "William W.",
    role: "High School Student",
  },
  {
    quote: "Price factors in quite a lot because I like to save money whenever possible.",
    name: "Hauk B.",
    role: "High School Student",
  },
  {
    quote: "Keeping an eye out for products that aren't crazy cost-involved.",
    name: "Tanush B.",
    role: "College Student",
  },
];

const Testimonials = () => (
  <section className="py-24 lg:py-32 bg-secondary/40">
    <div className="container mx-auto px-6">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
          The problem is real
        </h2>
        <p className="font-body text-muted-foreground text-lg">
          We talked to students. Here's what they told us.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            className="bg-card rounded-2xl p-8 border border-border relative"
          >
            <Quote className="w-8 h-8 text-primary/20 mb-4" />
            <p className="font-body text-foreground text-base leading-relaxed mb-6 italic">
              "{t.quote}"
            </p>
            <div>
              <p className="font-body font-semibold text-foreground text-sm">{t.name}</p>
              <p className="font-body text-xs text-muted-foreground">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
