import heroVideo from "@/assets/hero-video.mp4";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
          poster=""
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-foreground/60" />
      </div>
      <div className="relative z-10 container mx-auto px-6 text-center">
        <p className="font-body text-secondary text-lg md:text-xl font-semibold mb-4 opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Daily Fresh Eggs — Packed & Delivered in Islamabad
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-primary-foreground leading-tight mb-6 opacity-0 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          Hamzah
          <br />
          <span className="text-secondary">Farms</span>
        </h1>
        <p className="font-body text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-0 animate-fade-up" style={{ animationDelay: "0.5s" }}>
          From our farms in Pakistan to your table — premium quality eggs with no hormones, no antibiotics. Just pure nutrition.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up" style={{ animationDelay: "0.7s" }}>
          <a
            href="#products"
            className="bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-body font-bold text-lg hover:opacity-90 transition-opacity"
          >
            Order Now
          </a>
          <a
            href="#quality"
            className="border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-lg font-body font-bold text-lg hover:bg-primary-foreground/10 transition-colors"
          >
            Our Quality Promise
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
