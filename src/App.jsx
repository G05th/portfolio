import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import WhoWeAre from './components/WhoWeAre';
import PropertyMatch from './components/PropertyMatch';
import AboutUs from './components/AboutUs';
import PropertyShowcase from './components/PropertyShowcase';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { useSmoothScroll } from './hooks/useScrollAnimation';

function App() {
  useSmoothScroll();

  useEffect(() => {
    // Add smooth scrolling behavior to the entire document
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <section id="about">
          <WhoWeAre />
        </section>
        <PropertyMatch />
        <AboutUs />
        <section id="properties">
          <PropertyShowcase />
        </section>
        <section id="contact">
          <ContactForm />
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;

