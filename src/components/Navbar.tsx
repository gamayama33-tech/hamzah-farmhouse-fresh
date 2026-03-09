import { useState } from "react";
import { Menu, X, ShoppingCart, Home } from "lucide-react";
import { useCart } from "@/context/CartContext";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "Quality", href: "#quality" },
  { label: "Subscriptions", href: "#subscriptions" },
  { label: "Corporate", href: "#corporate" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      {/* Announcement bar */}
      <div className="bg-primary overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap py-1.5 text-sm font-body text-primary-foreground w-max">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex shrink-0 items-center">
              <span className="mx-8">🚚 Next day delivery. Delivery Time: 11am to 4pm</span>
              <span className="mx-8">🎉 Free Shipping on orders above Rs. 2,000</span>
            </div>
          ))}
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
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold font-body hover:opacity-90 transition-opacity"
          >
            <ShoppingCart className="w-4 h-4" />
            Cart
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
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
          <button
            onClick={() => { setOpen(false); setIsCartOpen(true); }}
            className="relative inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold font-body"
          >
            <ShoppingCart className="w-4 h-4" />
            Cart
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
