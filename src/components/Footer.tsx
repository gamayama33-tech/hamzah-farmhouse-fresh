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
              {["Home", "Quality", "Products", "About"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block font-body text-primary-foreground/60 hover:text-secondary transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-display text-lg font-bold text-primary-foreground mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a href="tel:+923001234567" className="flex items-center gap-3 font-body text-primary-foreground/60 hover:text-secondary transition-colors">
                <Phone className="w-4 h-4 text-secondary" />
                +92 300 1234567
              </a>
              <a href="mailto:info@hamzahfarms.pk" className="flex items-center gap-3 font-body text-primary-foreground/60 hover:text-secondary transition-colors">
                <Mail className="w-4 h-4 text-secondary" />
                info@hamzahfarms.pk
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
