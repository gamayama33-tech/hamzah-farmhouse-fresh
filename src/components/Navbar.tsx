import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Quality", href: "#quality" },
  { label: "Products", href: "#products" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      {/* Announcement bar */}
      <div className="bg-primary overflow-hidden">
        <div className="animate-marquee whitespace-nowrap py-1.5 text-sm font-body text-primary-foreground">
          <span className="mx-8">🚚 Next day delivery. Delivery Time: 11am to 4pm</span>
          <span className="mx-8">🥚 Farm Fresh Eggs Delivered Across Islamabad & Rawalpindi</span>
          <span className="mx-8">🌿 100% Natural Feed — No Hormones, No Antibiotics</span>
          <span className="mx-8">📞 Call or WhatsApp: 03 11 697 1320</span>
          <span className="mx-8">🚚 Next day delivery. Delivery Time: 11am to 4pm</span>
          <span className="mx-8">🥚 Farm Fresh Eggs Delivered Across Islamabad & Rawalpindi</span>
          <span className="mx-8">🌿 100% Natural Feed — No Hormones, No Antibiotics</span>
          <span className="mx-8">📞 Call or WhatsApp: 03 11 697 1320</span>
        </div>
      </div>

      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="#home" className="font-display text-2xl font-bold text-primary tracking-tight">
          Hamzah <span className="text-secondary">Farms</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium font-body text-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+923116971320"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold font-body hover:opacity-90 transition-opacity"
          >
            <Phone className="w-4 h-4" />
            Order Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="md:hidden bg-background border-t border-border px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-medium font-body text-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+923116971320"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold font-body"
          >
            <Phone className="w-4 h-4" />
            Order Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
