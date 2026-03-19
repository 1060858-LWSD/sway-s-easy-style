import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Sustainability from "@/components/Sustainability";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <Hero />
    <Testimonials />
    <HowItWorks />
    <Features />
    <Sustainability />
    <CTA />
    <Footer />
  </div>
);

export default Index;
