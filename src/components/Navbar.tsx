const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <a href="/" className="font-display text-2xl tracking-tight text-foreground">
          Sway
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
