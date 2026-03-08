import whiteEggs from "@/assets/white-eggs.jpg";
import eggTray from "@/assets/egg-tray.png";
import doubleYolk from "@/assets/double-yolk.png";

const products = [
  {
    name: "12-Eggs Pack",
    desc: "Farm fresh eggs in a convenient dozen packing — perfect for everyday use.",
    price: "Rs. 350",
    per: "/ dozen",
    image: whiteEggs,
  },
  {
    name: "Eggs Tray",
    desc: "Full tray of premium farm fresh eggs — great value for families and bulk buyers.",
    price: "Rs. 850",
    per: "/ 2.5 dozen",
    image: eggTray,
  },
  {
    name: "12 Double Yolk Eggs",
    desc: "Rare double yolk eggs packed with extra richness — a dozen of pure delight.",
    price: "Rs. 600",
    per: "/ dozen",
    image: doubleYolk,
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
                  href="https://wa.me/923116971320"
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
