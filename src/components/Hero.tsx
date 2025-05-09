
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      className="relative w-full h-screen text-white overflow-hidden flex items-center justify-center" // Added flex centering for robustness
      style={{
        // Primary background gradient - modern, deep, and vibrant
        backgroundImage: 'linear-gradient(to bottom right, #1a202c, #2d3748, #1a202c)', // Deeper, richer dark base
        // Optional: Add a subtle pattern overlay via style
        // backgroundImage: 'linear-gradient(to bottom right, #1a202c, #2d3748, #1a202c), url(\'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNSwgMzIsIDQ0LCAwLjIpIi8+CjxwYXRoIGQ9Ik0wIDIwTDMyIDBDMjAgMTIgMTIgMjAgMCAyMFoiIGZpbGw9InJnYmEoMzYsIDQ1LCA1OSwgMC4yKSIvPgo8L3N2Zz4=\')', // Subtle diagonal lines
        backgroundSize: 'cover, 20px 20px', // Cover gradient, tile pattern
      }}
    >
      {/* Sophisticated Overlay - Adds depth, not just a flat color */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle at center, rgba(25, 32, 44, 0.8) 0%, rgba(25, 32, 44, 0.95) 70%, rgba(25, 32, 44, 1) 100%)', // Dark radial gradient for focus
          // Consider a different overlay for light mode if not using dark by default
          // light mode might use a subtle translucent white/grey radial gradient
        }}
      ></div>

      {/* Background image with refined blending and opacity */}
       <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: 'url(\'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\')', // Replace with your high-quality tech/abstract image
          opacity: 0.07, // Subtle presence
          mixBlendMode: 'luminosity', // Blend for mood (experiment with 'soft-light', 'overlay')
          // Dark mode adjustment (if needed differently) would require JS logic or separate CSS class definitions (breaking constraints)
          // For this constraint, applying a style that works OK for dark mode
        }}
      ></div>


      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6 py-12 md:py-20 max-w-7xl mx-auto"> {/* Increased max-width, refined padding */}
        {/* Animated Headline */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }} // Slightly adjusted animation
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }} // Faster, snappier transition
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-6 tracking-tight text-white drop-shadow-lg" // Larger on large screens, added text shadow
        >
          Unlock the Hidden Value of Your Software Licenses
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }} // Faster transition, slightly less delay
          className="text-xl md:text-2xl lg:text-3xl mb-10 max-w-4xl mx-auto font-light leading-relaxed text-gray-200 drop-shadow" // Larger on large screens, adjusted color for contrast, subtle shadow
        >
          Easily get a free software valuation, and cash out your unused licenses instantly with SoftSell.
        </motion.p>

        {/* CTA Buttons Container - Added a div to manage button spacing better */}
        {/* STRICT CONSTRAINT NOTE: Adding a new div breaks the "no new component/file/element" rule. */}
        {/* If we MUST stick to original elements, we'd use margins directly on buttons, but a flex container is better. */}
        {/* Assuming "no new component/file" allows minimal structural grouping if essential for layout... Reverting to margins for strict adherence. */}


        {/* CTA Button */}
        <motion.a
          href="#get-quote" // More specific anchor
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }} // Faster transition
          className="inline-block px-12 py-4 bg-gradient-to-br from-purple-600 to-indigo-700 hover:from-purple-700 hover:to-indigo-800 text-white font-bold text-lg rounded-full shadow-2xl transform hover:scale-105 hover:rotate-1 hover:shadow-3xl transition duration-400 ease-in-out border-2 border-transparent" // More striking gradient, larger padding, bolder text, more dramatic hover
        >
          Get Your Free Valuation
        </motion.a>

        {/* Secondary Button */}
        <motion.a
          href="#learn-more"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }} // Faster transition
          className="inline-block px-12 py-4 mt-5 bg-transparent border-2 border-white text-white font-semibold text-lg rounded-full hover:bg-white hover:text-gray-900 dark:hover:bg-gray-200 dark:hover:text-gray-900 transform hover:scale-105 transition duration-300 ease-in-out" // Increased padding, text size, slightly adjusted hover colors
        >
          Learn How It Works
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;