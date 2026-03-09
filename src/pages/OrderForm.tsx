import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { Truck, CreditCard, ShieldCheck, Home, ArrowLeft } from "lucide-react";

const SHIPPING_FEE = 200;
const FREE_SHIPPING_THRESHOLD = 2000;

const OrderForm = () => {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const shipping = totalPrice >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FEE;
  const grandTotal = totalPrice + shipping;

  const [form, setForm] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    apartment: "",
    city: "Islamabad",
    notes: "",
    payment: "cod",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) return;
    if (!form.firstName.trim() || !form.phone.trim() || !form.address.trim()) return;

    setSubmitted(true);
    clearCart();
  };

  // Empty cart redirect
  if (items.length === 0 && !submitted) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">🛒</span>
          </div>
          <h2 className="font-display text-2xl font-bold text-foreground mb-3">Your cart is empty</h2>
          <p className="font-body text-muted-foreground mb-8">Add some products before checking out.</p>
          <Link
            to="/"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-body font-semibold hover:opacity-90 transition-opacity"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  // Order confirmation
  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6">
        <div className="text-center max-w-lg">
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <span className="text-5xl">✅</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Order Placed Successfully!
          </h2>
          <p className="font-body text-muted-foreground mb-3 text-lg">
            Thank you for your order. We'll contact you shortly on your phone number to confirm delivery.
          </p>
          <p className="font-body text-muted-foreground mb-8 text-sm">
            Delivery is typically next day between 11am – 4pm.
          </p>
          <Link
            to="/"
            className="inline-block bg-primary text-primary-foreground px-10 py-3.5 rounded-lg font-body font-semibold text-base hover:opacity-90 transition-opacity"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const inputClass =
    "w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition";

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link to="/" className="font-display text-2xl font-bold text-primary tracking-tight">
            Hamzah <span className="text-secondary">Farms</span>
          </Link>
          <div className="flex items-center gap-2 text-muted-foreground">
            <ShieldCheck className="w-4 h-4" />
            <span className="font-body text-xs">Secure Checkout</span>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Left — Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-8">
            {/* Contact */}
            <section>
              <h2 className="font-display text-lg font-bold text-foreground mb-4">Contact</h2>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email (optional)"
                maxLength={255}
                className={inputClass}
              />
            </section>

            {/* Delivery */}
            <section>
              <h2 className="font-display text-lg font-bold text-foreground mb-4">Delivery</h2>
              <div className="space-y-3">
                {/* City selector */}
                <select
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="Islamabad">Islamabad</option>
                  <option value="Rawalpindi">Rawalpindi</option>
                </select>

                {/* Name row */}
                <div className="grid grid-cols-2 gap-3">
                  <input
                    name="firstName"
                    type="text"
                    required
                    maxLength={50}
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="First name"
                    className={inputClass}
                  />
                  <input
                    name="lastName"
                    type="text"
                    maxLength={50}
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="Last name"
                    className={inputClass}
                  />
                </div>

                <input
                  name="address"
                  type="text"
                  required
                  maxLength={200}
                  value={form.address}
                  onChange={handleChange}
                  placeholder="Address"
                  className={inputClass}
                />

                <input
                  name="apartment"
                  type="text"
                  maxLength={100}
                  value={form.apartment}
                  onChange={handleChange}
                  placeholder="Apartment, suite, etc. (optional)"
                  className={inputClass}
                />

                <input
                  name="phone"
                  type="tel"
                  required
                  maxLength={15}
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone *"
                  className={inputClass}
                />
              </div>
            </section>

            {/* Shipping method */}
            <section>
              <h2 className="font-display text-lg font-bold text-foreground mb-4">Shipping method</h2>
              <div className="border border-primary/30 bg-primary/5 rounded-lg p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Truck className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-body font-medium text-foreground text-sm">Standard Delivery</p>
                    <p className="font-body text-muted-foreground text-xs">Next day (11am – 4pm)</p>
                  </div>
                </div>
                <span className="font-body font-semibold text-foreground text-sm">
                  {shipping === 0 ? (
                    <span className="text-primary">Free</span>
                  ) : (
                    `Rs. ${shipping}`
                  )}
                </span>
              </div>
              {shipping > 0 && (
                <p className="font-body text-xs text-muted-foreground mt-2">
                  Free shipping on orders above Rs. 2,000
                </p>
              )}
            </section>

            {/* Payment */}
            <section>
              <h2 className="font-display text-lg font-bold text-foreground mb-1">Payment</h2>
              <p className="font-body text-muted-foreground text-xs mb-4">All transactions are secure.</p>
              <div className="space-y-2">
                <label
                  className={`flex items-center gap-3 border rounded-lg p-4 cursor-pointer transition ${
                    form.payment === "cod"
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-muted-foreground/30"
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={form.payment === "cod"}
                    onChange={handleChange}
                    className="accent-primary w-4 h-4"
                  />
                  <CreditCard className="w-5 h-5 text-muted-foreground" />
                  <span className="font-body font-medium text-foreground text-sm">Cash on Delivery (COD)</span>
                </label>
              </div>
            </section>

            {/* Notes */}
            <section>
              <textarea
                name="notes"
                maxLength={500}
                rows={2}
                value={form.notes}
                onChange={handleChange}
                placeholder="Order notes (optional)"
                className={inputClass + " resize-none"}
              />
            </section>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-4 rounded-lg font-body font-bold text-base hover:opacity-90 transition-opacity"
            >
              Complete Order
            </button>
          </form>

          {/* Right — Order Summary */}
          <aside className="lg:col-span-2">
            <div className="lg:sticky lg:top-8">
              <h2 className="font-display text-lg font-bold text-foreground mb-6">Order Summary</h2>

              {/* Items */}
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center gap-4">
                    <div className="relative shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 rounded-lg object-cover border border-border bg-muted"
                      />
                      <span className="absolute -top-2 -right-2 bg-muted-foreground text-background text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-body font-medium text-foreground text-sm truncate">{item.name}</p>
                      <p className="font-body text-muted-foreground text-xs">Rs. {item.price} / {item.per}</p>
                    </div>
                    <p className="font-body font-semibold text-foreground text-sm">Rs. {item.price * item.quantity}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-border pt-4 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="font-body text-muted-foreground">Subtotal</span>
                  <span className="font-body font-medium text-foreground">Rs. {totalPrice}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-body text-muted-foreground">Shipping</span>
                  {shipping === 0 ? (
                    <span className="font-body font-medium text-primary">Free</span>
                  ) : (
                    <span className="font-body font-medium text-foreground">Rs. {shipping}</span>
                  )}
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-border">
                  <span className="font-body font-semibold text-foreground">Total</span>
                  <div className="text-right">
                    <span className="font-body text-muted-foreground text-xs mr-2">PKR</span>
                    <span className="font-display text-2xl font-bold text-foreground">Rs. {grandTotal}</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default OrderForm;
