import { Star } from "lucide-react";

const reviews = [
  {
    name: "Ayesha Khan",
    text: "Best eggs in Islamabad! The yolks are so rich and orange. My kids love them. Delivery is always on time.",
    rating: 5,
  },
  {
    name: "Ahmed Raza",
    text: "We switched to Hamzah Farms 6 months ago and never looked back. You can taste the difference in freshness.",
    rating: 5,
  },
  {
    name: "Fatima Noor",
    text: "Finally an egg brand in Pakistan that I can trust. No chemicals, no compromise. Highly recommended!",
    rating: 5,
  },
];

const ReviewsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-body text-secondary font-semibold text-sm uppercase tracking-widest mb-3">
            Testimonials
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            What Our Customers Say
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-background rounded-xl p-8 border border-border"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                "{review.text}"
              </p>
              <p className="font-display font-bold text-foreground">{review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
