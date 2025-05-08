import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative w-full h-screen bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-white overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 dark:bg-opacity-70"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        {/* Animated Headline */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 tracking-tight text-white dark:text-white"
        >
          Unlock the Hidden Value of Your Software Licenses
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light leading-relaxed text-white dark:text-gray-300"
        >
          Easily get a free software valuation, and cash out your unused licenses instantly with SoftSell.
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href="#contact"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
          className="inline-block px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-full shadow-lg transform hover:scale-110 hover:shadow-xl transition duration-300 ease-in-out"
        >
          Get a Quote
        </motion.a>

        {/* Secondary Button */}
        <motion.a
          href="#learn-more"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9, ease: 'easeOut' }}
          className="inline-block px-8 py-4 mt-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-gray-800 dark:hover:bg-gray-100 dark:hover:text-gray-900 transform hover:scale-105 transition duration-300 ease-in-out"
        >
          Learn More
        </motion.a>
      </div>

      {/* Background image (can be themed or abstract in dark mode) */}
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-10 dark:opacity-5" style={{ backgroundImage: 'url(/path/to/your/image.jpg)' }}></div>
    </section>
  );
};

export default Hero;
