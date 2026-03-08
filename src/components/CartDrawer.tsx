import { ShoppingCart, X, Plus, Minus, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";

const CartDrawer = () => {
  const { items, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, clearCart, totalItems, totalPrice } = useCart();

  const handleCheckout = () => {
    if (items.length === 0) return;
    const orderLines = items.map((i) => `• ${i.name} × ${i.quantity} = Rs. ${i.price * i.quantity}`).join("\n");
    const message = encodeURIComponent(
      `🥚 *New Order — Hamzah Farms*\n\n${orderLines}\n\n*Total: Rs. ${totalPrice}*\n\nPlease confirm my order. Thank you!`
    );
    window.open(`https://wa.me/923116971320?text=${message}`, "_blank");
  };

  return (
    <>
      {/* Overlay */}
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-foreground/30 backdrop-blur-sm z-[60] transition-opacity"
          onClick={() => setIsCartOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-background border-l border-border z-[70] transform transition-transform duration-300 ease-in-out flex flex-col ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center gap-3">
            <ShoppingCart className="w-5 h-5 text-primary" />
            <h2 className="font-display text-xl font-bold text-foreground">Your Cart</h2>
            {totalItems > 0 && (
              <span className="bg-primary text-primary-foreground text-xs font-bold px-2 py-0.5 rounded-full">
                {totalItems}
              </span>
            )}
          </div>
          <button onClick={() => setIsCartOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingCart className="w-16 h-16 text-muted-foreground/30 mb-4" />
              <p className="font-display text-lg font-semibold text-foreground mb-1">Cart is empty</p>
              <p className="font-body text-sm text-muted-foreground">Add some farm fresh eggs!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 bg-card rounded-xl p-4 border border-border">
                  <img src={item.image} alt={item.name} className="w-20 h-20 rounded-lg object-cover bg-muted" />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-bold text-foreground text-sm truncate">{item.name}</h3>
                    <p className="font-body text-muted-foreground text-xs">Rs. {item.price} / {item.per}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-7 h-7 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="font-body font-semibold text-foreground text-sm w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-7 h-7 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="ml-auto text-muted-foreground hover:text-destructive transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <p className="font-display font-bold text-primary text-sm whitespace-nowrap">Rs. {item.price * item.quantity}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border p-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-body font-medium text-foreground">Total</span>
              <span className="font-display text-2xl font-bold text-primary">Rs. {totalPrice}</span>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full bg-primary text-primary-foreground py-4 rounded-lg font-body font-bold text-base hover:opacity-90 transition-opacity"
            >
              Checkout via WhatsApp
            </button>
            <button
              onClick={clearCart}
              className="w-full text-center font-body text-sm text-muted-foreground hover:text-destructive transition-colors"
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
