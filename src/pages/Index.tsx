import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import QualitySection from "@/components/QualitySection";
import ProductsSection from "@/components/ProductsSection";
import AboutSection from "@/components/AboutSection";
import ReviewsSection from "@/components/ReviewsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <QualitySection />
      <ProductsSection />
      <AboutSection />
      <ReviewsSection />
      <Footer />
    </div>
  );
};

export default Index;
