import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import StepsSection from './components/StepsSection';
import WebinarsSection from './components/WebinarsSection';
import TestimonialsSection from './components/TestimonialsSection';
import UpdatesSection from './components/UpdatesSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <ServicesSection />
      <StepsSection />
      <WebinarsSection />
      <TestimonialsSection />
      <UpdatesSection />
      <Footer />
    </div>
  );
}

export default App;
