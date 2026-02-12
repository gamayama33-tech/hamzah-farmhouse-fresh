import whiteEggs from "@/assets/white-eggs.jpg";
import brownEggs from "@/assets/brown-eggs.jpg";
import desiEggs from "@/assets/desi-eggs.jpg";

const products = [
  {
    name: "White Eggs",
    desc: "Farm fresh white eggs — light, nutritious, and perfect for everyday cooking.",
    price: "Rs. 420",
    per: "/ 30 eggs",
    image: whiteEggs,
  },
  {
    name: "Brown Eggs",
    desc: "Premium brown eggs with rich flavor and naturally stronger shells.",
    price: "Rs. 480",
    per: "/ 30 eggs",
    image: brownEggs,
  },
  {
    name: "Desi Eggs",
    desc: "Free-range desi eggs with deep orange yolks — the traditional Pakistani favorite.",
    price: "Rs. 600",
    per: "/ 30 eggs",
    image: desiEggs,
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-body text-secondary font-semibold text-sm uppercase tracking-widest mb-3">
            Our Products
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Choose Fresh Everyday
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-background rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">{product.name}</h3>
                <p className="font-body text-muted-foreground text-sm mb-4">{product.desc}</p>
                <div className="flex items-baseline gap-1 mb-5">
                  <span className="font-display text-2xl font-bold text-primary">{product.price}</span>
                  <span className="font-body text-muted-foreground text-sm">{product.per}</span>
                </div>
                <a
                  href="https://wa.me/923001234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-primary text-primary-foreground py-3 rounded-lg font-body font-semibold hover:opacity-90 transition-opacity"
                >
                  Order on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
