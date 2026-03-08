import { CalendarCheck, Repeat, CalendarDays } from "lucide-react";

const plans = [
  {
    name: "Weekly",
    icon: CalendarCheck,
    desc: "Fresh eggs delivered to your door every week — never run out.",
    frequency: "Every 7 days",
  },
  {
    name: "Bi-Weekly",
    icon: Repeat,
    desc: "Perfect balance — get your eggs delivered every two weeks.",
    frequency: "Every 14 days",
  },
  {
    name: "Monthly",
    icon: CalendarDays,
    desc: "Stock up once a month with a bulk delivery at a great price.",
    frequency: "Every 30 days",
  },
];

const SubscriptionSection = () => {
  return (
    <section id="subscriptions" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-body text-secondary font-semibold text-sm uppercase tracking-widest mb-3">
            Subscribe & Save
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get <span className="text-secondary">10% Off</span> Every Order
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose a subscription plan and enjoy 10% off on every delivery. Cancel or pause anytime — no commitments.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="bg-card rounded-2xl border border-border p-8 text-center hover:shadow-xl transition-shadow duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground text-xs font-bold font-body px-3 py-1 rounded-full">
                10% OFF
              </div>
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <plan.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                {plan.name}
              </h3>
              <p className="font-body text-muted-foreground text-sm mb-4">
                {plan.desc}
              </p>
              <p className="font-body text-primary font-semibold text-sm mb-6">
                {plan.frequency}
              </p>
              <a
                href="https://wa.me/923116971320?text=Hi%2C%20I%27m%20interested%20in%20the%20" 
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-primary text-primary-foreground py-3 rounded-lg font-body font-semibold hover:opacity-90 transition-opacity"
              >
                Subscribe on WhatsApp
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubscriptionSection;
