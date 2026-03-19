import { motion } from "framer-motion";
import { Recycle, Droplets, Heart } from "lucide-react";

const stats = [
  { icon: Recycle, value: "100%", label: "Free & open for students" },
  { icon: Droplets, value: "500+", label: "Brands rated for sustainability" },
  { icon: Heart, value: "Zero", label: "Data sold — ever" },
];

const Sustainability = () => (
  <section id="sustainability" className="py-24 lg:py-32">
    <div className="container mx-auto px-6">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            Fashion transparency at your fingertips
          </h2>
          <p className="font-body text-muted-foreground text-lg leading-relaxed max-w-md mx-auto">
            Sway sits quietly in your browser and activates when you're shopping. No extra tabs, no research rabbit holes — just the info you need to make better choices.
          </p>
        </motion.div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex items-center gap-5 bg-card rounded-xl p-6 border border-border"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <s.icon className="w-7 h-7 text-primary" />
              </div>
              <div>
                <p className="font-display text-3xl text-foreground">{s.value}</p>
                <p className="font-body text-sm text-muted-foreground">{s.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Sustainability;
