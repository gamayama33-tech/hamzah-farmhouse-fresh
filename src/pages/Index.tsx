import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import QualitySection from "@/components/QualitySection";
import ProductsSection from "@/components/ProductsSection";
import SubscriptionSection from "@/components/SubscriptionSection";
import CorporateSection from "@/components/CorporateSection";
import AboutSection from "@/components/AboutSection";
import ReviewsSection from "@/components/ReviewsSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <QualitySection />
      <ProductsSection />
      <SubscriptionSection />
      <CorporateSection />
      <AboutSection />
      <ReviewsSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
