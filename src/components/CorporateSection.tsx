import { Building2, Users, Truck } from "lucide-react";

const benefits = [
  { icon: Building2, text: "Offices & Restaurants" },
  { icon: Users, text: "Events & Catering" },
  { icon: Truck, text: "Bulk & Wholesale" },
];

const CorporateSection = () => {
  return (
    <section id="corporate" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-body text-secondary font-semibold text-sm uppercase tracking-widest mb-3">
            Corporate Orders
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Need Eggs in <span className="text-secondary">Bulk?</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg mb-10">
            We supply premium farm-fresh eggs to restaurants, offices, caterers, and businesses across Islamabad & Rawalpindi. Get custom pricing tailored to your needs.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {benefits.map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-3 bg-background border border-border rounded-xl px-6 py-4"
              >
                <item.icon className="w-5 h-5 text-primary" />
                <span className="font-body font-semibold text-foreground text-sm">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
          <a
            href="https://wa.me/923116971320?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20corporate%20order."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-secondary text-secondary-foreground px-10 py-4 rounded-lg font-body font-bold text-lg hover:opacity-90 transition-opacity"
          >
            Contact Us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default CorporateSection;
