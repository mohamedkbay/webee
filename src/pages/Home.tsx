import React, { useEffect } from 'react';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ServicesSection from '../components/sections/ServicesSection';
import ProductsSection from '../components/sections/ProductsSection';
import ClientsSection from '../components/sections/ClientsSection';
import ContactSection from '../components/sections/ContactSection';

const Home: React.FC = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
    
    // Update document title
    document.title = "PT Doori Lestari Garment | Indonesian Garment Manufacturer";
  }, []);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProductsSection />
      <ClientsSection />
      <ContactSection />
    </>
  );
};

export default Home;