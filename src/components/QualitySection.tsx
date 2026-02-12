import { Shield, Thermometer, Microscope, Egg, Leaf, Sparkles } from "lucide-react";

const checks = [
  { icon: Leaf, title: "Natural Feed", desc: "Our hens are fed a balanced diet of maize, wheat, rice bran, and sunflower — 100% natural, no chemicals." },
  { icon: Shield, title: "Biosecurity", desc: "Strict farm hygiene protocols ensure a clean, disease-free environment for healthy hens." },
  { icon: Thermometer, title: "Temperature Control", desc: "Eggs are stored at optimal temperatures from farm to delivery to ensure maximum freshness." },
  { icon: Microscope, title: "Quality Testing", desc: "Every batch undergoes freshness tests, shell strength checks, and microbial analysis." },
  { icon: Egg, title: "Hand Graded", desc: "Eggs are carefully sorted by size and quality — only the best make it to your table." },
  { icon: Sparkles, title: "UV Sanitised", desc: "Shell surfaces are UV-treated to eliminate harmful bacteria without any chemical residues." },
];

const QualitySection = () => {
  return (
    <section id="quality" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-body text-secondary font-semibold text-sm uppercase tracking-widest mb-3">
            Our Promise
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            6 Quality Checks
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-xl mx-auto">
            From farm to your plate — every egg passes rigorous safety and quality standards.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {checks.map((check, i) => (
            <div
              key={check.title}
              className="group bg-card rounded-xl p-8 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <check.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="flex items-baseline gap-3 mb-3">
                <span className="font-display text-3xl font-bold text-secondary">0{i + 1}</span>
                <h3 className="font-display text-xl font-bold text-foreground">{check.title}</h3>
              </div>
              <p className="font-body text-muted-foreground leading-relaxed">{check.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualitySection;
