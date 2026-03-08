import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const products = [
  { id: "12-eggs-pack", name: "12-Eggs Pack", price: 350, per: "dozen" },
  { id: "eggs-tray", name: "Eggs Tray", price: 850, per: "2.5 dozen" },
  { id: "double-yolk", name: "12 Double Yolk Eggs", price: 600, per: "dozen" },
];

const OrderForm = () => {
  const [searchParams] = useSearchParams();
  const preselected = searchParams.get("product") || "";

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    city: "Islamabad",
    product: preselected,
    quantity: 1,
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const selectedProduct = products.find((p) => p.id === form.product);
  const total = selectedProduct ? selectedProduct.price * form.quantity : 0;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "quantity" ? Math.max(1, Math.min(100, parseInt(value) || 1)) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.address.trim() || !form.product) return;

    const message = encodeURIComponent(
      `🥚 *New Order — Hamzah Farms*\n\n` +
      `*Name:* ${form.name.trim()}\n` +
      `*Phone:* ${form.phone.trim()}\n` +
      `*Address:* ${form.address.trim()}, ${form.city}\n` +
      `*Product:* ${selectedProduct?.name}\n` +
      `*Quantity:* ${form.quantity}\n` +
      `*Total:* Rs. ${total}\n` +
      (form.notes.trim() ? `*Notes:* ${form.notes.trim()}\n` : "")
    );
    window.open(`https://wa.me/923116971320?text=${message}`, "_blank");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center py-20 px-6">
          <div className="text-center max-w-md">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">✅</span>
            </div>
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">Order Sent!</h2>
            <p className="font-body text-muted-foreground mb-8">
              Your order has been sent via WhatsApp. We'll confirm it shortly. Thank you for choosing Hamzah Farms!
            </p>
            <Link
              to="/"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-body font-semibold hover:opacity-90 transition-opacity"
            >
              Back to Home
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-2xl">
          <div className="text-center mb-12">
            <p className="font-body text-secondary font-semibold text-sm uppercase tracking-widest mb-3">
              Place Your Order
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Order Fresh Eggs
            </h1>
            <p className="font-body text-muted-foreground mt-4">
              Fill in the details below and we'll confirm your order on WhatsApp.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-8 space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block font-body font-semibold text-foreground mb-2 text-sm">
                Full Name *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                maxLength={100}
                value={form.name}
                onChange={handleChange}
                placeholder="Muhammad Ahmed"
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block font-body font-semibold text-foreground mb-2 text-sm">
                Phone Number *
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                maxLength={15}
                value={form.phone}
                onChange={handleChange}
                placeholder="03XX-XXXXXXX"
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
              />
            </div>

            {/* Address */}
            <div>
              <label htmlFor="address" className="block font-body font-semibold text-foreground mb-2 text-sm">
                Delivery Address *
              </label>
              <input
                id="address"
                name="address"
                type="text"
                required
                maxLength={200}
                value={form.address}
                onChange={handleChange}
                placeholder="House #, Street, Sector"
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
              />
            </div>

            {/* City */}
            <div>
              <label htmlFor="city" className="block font-body font-semibold text-foreground mb-2 text-sm">
                City
              </label>
              <select
                id="city"
                name="city"
                value={form.city}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
              >
                <option value="Islamabad">Islamabad</option>
                <option value="Rawalpindi">Rawalpindi</option>
              </select>
            </div>

            {/* Product */}
            <div>
              <label htmlFor="product" className="block font-body font-semibold text-foreground mb-2 text-sm">
                Product *
              </label>
              <select
                id="product"
                name="product"
                required
                value={form.product}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
              >
                <option value="" disabled>Select a product</option>
                {products.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name} — Rs. {p.price} / {p.per}
                  </option>
                ))}
              </select>
            </div>

            {/* Quantity */}
            <div>
              <label htmlFor="quantity" className="block font-body font-semibold text-foreground mb-2 text-sm">
                Quantity
              </label>
              <input
                id="quantity"
                name="quantity"
                type="number"
                min={1}
                max={100}
                value={form.quantity}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
              />
            </div>

            {/* Total */}
            {selectedProduct && (
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 flex justify-between items-center">
                <span className="font-body text-foreground font-medium">Estimated Total</span>
                <span className="font-display text-2xl font-bold text-primary">Rs. {total}</span>
              </div>
            )}

            {/* Notes */}
            <div>
              <label htmlFor="notes" className="block font-body font-semibold text-foreground mb-2 text-sm">
                Special Instructions (optional)
              </label>
              <textarea
                id="notes"
                name="notes"
                maxLength={500}
                rows={3}
                value={form.notes}
                onChange={handleChange}
                placeholder="Any delivery preferences or special requests..."
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-4 rounded-lg font-body font-bold text-lg hover:opacity-90 transition-opacity"
            >
              Confirm Order via WhatsApp
            </button>

            <p className="text-center font-body text-muted-foreground text-xs">
              Your order will be sent via WhatsApp for confirmation. Free delivery across Islamabad & Rawalpindi.
            </p>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OrderForm;
