import { ShoppingCart, Check } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import eggsPack from "@/assets/12-eggs-pack.png";
import eggTray from "@/assets/egg-tray.png";
import doubleYolk from "@/assets/double-yolk.png";

const products = [
  {
    id: "12-eggs-pack",
    name: "12-Eggs Pack",
    desc: "Farm fresh eggs in a convenient dozen packing — perfect for everyday use.",
    price: 310,
    priceLabel: "Rs. 310",
    oldPrice: "Rs. 350",
    per: "dozen",
    perLabel: "/ dozen",
    image: eggsPack,
  },
  {
    id: "eggs-tray",
    name: "Eggs Tray",
    desc: "Full tray of premium farm fresh eggs — great value for families and bulk buyers.",
    price: 750,
    priceLabel: "Rs. 750",
    oldPrice: "Rs. 850",
    per: "2.5 dozen",
    perLabel: "/ 2.5 dozen",
    image: eggTray,
  },
  {
    id: "double-yolk",
    name: "12 Double Yolk Eggs",
    desc: "Rare double yolk eggs packed with extra richness — a dozen of pure delight.",
    price: 600,
    priceLabel: "Rs. 600",
    oldPrice: "Rs. 800",
    per: "dozen",
    perLabel: "/ dozen",
    image: doubleYolk,
  },
];

const AddToCartButton = ({ product }: { product: typeof products[0] }) => {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart({ id: product.id, name: product.name, price: product.price, per: product.per, image: product.image });
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <button
      onClick={handleAdd}
      className={`flex items-center justify-center gap-2 w-full py-3 rounded-lg font-body font-semibold transition-all duration-300 ${
        added
          ? "bg-green-600 text-white"
          : "bg-primary text-primary-foreground hover:opacity-90"
      }`}
    >
      {added ? (
        <>
          <Check className="w-4 h-4" />
          Added!
        </>
      ) : (
        <>
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </>
      )}
    </button>
  );
};

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
              className="bg-background rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-shadow duration-300 group flex flex-col"
            >
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">{product.name}</h3>
                <p className="font-body text-muted-foreground text-sm mb-4 flex-1">{product.desc}</p>
                <div className="flex items-baseline gap-2 mb-5">
                  <span className="font-display text-2xl font-bold text-primary">{product.priceLabel}</span>
                  {product.oldPrice && (
                    <span className="font-body text-muted-foreground text-sm line-through">{product.oldPrice}</span>
                  )}
                  <span className="font-body text-muted-foreground text-sm">{product.perLabel}</span>
                </div>
                <AddToCartButton product={product} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
