import farmerImg from "@/assets/farm-chickens.png";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden">
            <img
              src={farmerImg}
              alt="Hamzah Farms"
              loading="lazy"
              className="w-full h-[400px] object-cover rounded-2xl"
            />
          </div>
          <div>
            <p className="font-body text-secondary font-semibold text-sm uppercase tracking-widest mb-3">
              Our Story
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Rooted in <span className="text-secondary">Islamabad</span>
            </h2>
            <div className="space-y-4 font-body text-muted-foreground leading-relaxed text-lg">
              <p>
                Hamzah Farms was born from a simple belief: every family deserves access to truly fresh, safe, and nutritious eggs. Based in the heart of Pakistan's capital, we raise our hens with care, feed them natural grains, and deliver eggs that you can trust.
              </p>
              <p>
                We don't use hormones, antibiotics, or artificial additives. Our hens roam in clean, well-maintained farms and are fed a balanced diet of maize, wheat, sunflower, and natural supplements.
              </p>
              <p>
                From Margalla Hills to your breakfast table — that's the Hamzah Farms promise.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-10">
              {[
                { value: "10K+", label: "Happy Families" },
                { value: "100%", label: "Natural Feed" },
                { value: "Daily", label: "Fresh Delivery" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="font-body text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
