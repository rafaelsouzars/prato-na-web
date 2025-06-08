import React from 'react';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import FeaturesSection from './components/FeaturesSection';
import BenefitsSection from './components/BenefitsSection';
import PricingSection from './components/PricingSection';
import TestimonialsSection from './components/TestimonialsSection';
import RestaurantsSection from './components/RestaurantsSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroBanner />
      <FeaturesSection />
      <BenefitsSection />
      <PricingSection />
      <TestimonialsSection />
      <RestaurantsSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;