import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <a href="/" className="font-display text-2xl tracking-tight text-foreground">
          Sway
        </a>

        <div className="hidden md:flex items-center gap-8 font-body text-sm text-muted-foreground">
          <a href="#how-it-works" className="hover:text-foreground transition-colors">How It Works</a>
          <a href="#features" className="hover:text-foreground transition-colors">Features</a>
          <a href="#sustainability" className="hover:text-foreground transition-colors">Sustainability</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm">Log in</Button>
          <Button variant="hero" size="sm">Sign Up</Button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-border px-6 pb-4 space-y-3">
          <a href="#how-it-works" className="block text-sm text-muted-foreground hover:text-foreground">How It Works</a>
          <a href="#features" className="block text-sm text-muted-foreground hover:text-foreground">Features</a>
          <a href="#sustainability" className="block text-sm text-muted-foreground hover:text-foreground">Sustainability</a>
          <Button variant="hero" size="sm" className="w-full">Sign Up</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
