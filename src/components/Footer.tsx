const Footer = () => (
  <footer className="py-12 border-t border-border">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <span className="font-display text-xl text-foreground">Sway</span>
      <div className="flex gap-6 font-body text-sm text-muted-foreground">
        <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
        <a href="#" className="hover:text-foreground transition-colors">Terms</a>
        <a href="#" className="hover:text-foreground transition-colors">Contact</a>
      </div>
      <p className="font-body text-xs text-muted-foreground">© 2026 Sway. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
