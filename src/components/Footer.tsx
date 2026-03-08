import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-display text-2xl font-bold text-primary-foreground mb-4">
              Hamzah <span className="text-secondary">Farms</span>
            </h3>
            <p className="font-body text-primary-foreground/60 leading-relaxed">
              Premium farm-fresh eggs from Islamabad, Pakistan. Trusted by thousands of families across the twin cities.
            </p>
          </div>
          <div>
            <h4 className="font-display text-lg font-bold text-primary-foreground mb-4">Quick Links</h4>
            <div className="space-y-2">
              {[
                { label: "Home", href: "#home" },
                { label: "Quality", href: "#quality" },
                { label: "Products", href: "#products" },
                { label: "Subscriptions", href: "#subscriptions" },
                { label: "Corporate", href: "#corporate" },
                { label: "About", href: "#about" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block font-body text-primary-foreground/60 hover:text-secondary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-display text-lg font-bold text-primary-foreground mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a href="https://wa.me/923116971320" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 font-body text-primary-foreground/60 hover:text-secondary transition-colors">
                <Phone className="w-4 h-4 text-secondary" />
                03 11 697 1320
              </a>
              <a href="mailto:info@hamzahfarms.com" className="flex items-center gap-3 font-body text-primary-foreground/60 hover:text-secondary transition-colors">
                <Mail className="w-4 h-4 text-secondary" />
                info@hamzahfarms.com
              </a>
              <div className="flex items-start gap-3 font-body text-primary-foreground/60">
                <MapPin className="w-4 h-4 text-secondary mt-0.5" />
                Islamabad, Pakistan
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
          <p className="font-body text-primary-foreground/40 text-sm">
            © 2026 Hamzah Farms. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
