import React from 'react';

import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/CustomerTestimonials';
import ContactForm from './components/ContactForm';
import ChatWidget from './components/ChatWidget';
import FloatingDarkModeToggle from './components/FloatingDarkModeToggle';
import { DarkModeProvider } from './context/DarkModeContext'
const App = () => {
  return (
    <DarkModeProvider>
      <div className="bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
        <FloatingDarkModeToggle />
        <Hero />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <ContactForm />
        <ChatWidget />
    </div>
    </DarkModeProvider>
    
  );
};

export default App;
