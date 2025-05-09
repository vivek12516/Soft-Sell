
import { motion } from 'framer-motion';
import { FaUpload, FaSearch, FaDollarSign } from 'react-icons/fa';
// Assuming these components/utils are available and work with Tailwind/CSS

import { cn } from './lib/utils';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: 'Upload Your License',
      description:
        'Upload your unused software licenses in just a few clicks and start the process!',
      icon: FaUpload,
      // Using specific accent colors for styling elements
      accentColor: '#0D9488', // Teal 600
      accentColorDark: '#20CEDC', // Lighter Teal for dark mode contrast
    },
    {
      id: 2,
      title: 'Get a Free Valuation',
      description:
        'Instantly receive a free valuation of your software licenses, with no hidden fees.',
      icon: FaSearch,
      accentColor: '#2563EB', // Blue 600
      accentColorDark: '#60A5FA', // Lighter Blue for dark mode contrast
    },
    {
      id: 3,
      title: 'Cash Out Instantly',
      description:
        'Once valued, cash out instantly and get paid right away, hassle-free.',
      icon: FaDollarSign,
      accentColor: '#7C3AED', // Violet 600 (more distinct from blue/teal)
      accentColorDark: '#A78BFA', // Lighter Violet for dark mode contrast
    },
  ];

  // Animation variants - kept as they handle the motion logic
  const stepVariants = {
    hidden: { opacity: 0, y: 40 }, // Slightly less vertical movement
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2, // Quicker stagger
        duration: 0.7,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <section
      id="how-it-works"
      // Light background default, distinct dark background
      className="py-20 sm:py-24 bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white relative overflow-hidden transition-colors duration-500"
       style={{
           // Subtle, mode-agnostic background pattern using style, layers well over light or dark base
           backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgNDBoNDBWMEgwek00MCAwSDMwdjEwLjAwMUw0MCAxMFYwem0wIDIwVjEwaC0xMHYxMGgxMFptMCAyMFYyMGgtMTB2MjBoMTB6TTIwIDQwVjMwaC0xMHYxMGgxMHpNNDAgNDBoLTMyLjAwMUE4IDggMCAwIDEgMCAzMkg4di04aDhoOHY4aDhoOHoiIGZpbGw9IiM5ZTk5YWEiIGZpbGwtb3BhY2l0eT0iMC4xIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Z34=')`, // Subtle grid pattern
           backgroundSize: '40px 40px',
           backgroundRepeat: 'repeat',
           // We rely on Tailwind classes for the main bg color toggle
       }}
    >
      <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10"> {/* Ensure content is above potential overlays */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-10 sm:mb-16 text-gray-900 dark:text-white drop-shadow-lg"> {/* Text color toggles */}
          How It Works
        </h2>
        {/* Adjusted gap and added padding/margins */}
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-y-10 sm:gap-y-14 lg:gap-8 px-4 sm:px-0"> {/* Refined gaps */}
          {steps.map((step, index) => {
            const Icon = step.icon;
            
            return (
              <motion.div
                key={step.id}
                variants={stepVariants}
                initial="hidden"
                animate="visible"
                custom={index}
                className={cn(
                  'flex flex-col items-center p-6 sm:p-8 rounded-2xl transition-all duration-300 h-full', // Added h-full for consistent height
                  // Card background colors toggle based on dark mode
                  'bg-white shadow-xl border border-gray-200', // Light mode card
                  'dark:bg-gray-800 dark:shadow-xl dark:border-gray-700', // Dark mode card
                  'hover:-translate-y-1 hover:shadow-2xl', // Subtle lift on hover
                   'relative overflow-hidden', // Needed for potential internal effects
                   // Set local CSS variables for use in inline styles
                   `[--step-accent-color:${step.accentColor}]`,
                   `[--step-accent-color-dark:${step.accentColorDark}]`
                )}
                 style={{
                     // Optional: Subtle background texture or gradient inside the card
                     // backgroundImage: `radial-gradient(circle at top left, rgba(255,255,255,0.05) 0%, transparent 20%)`,
                 }}
              >
                 {/* Optional: Accent border/glow around the card - difficult without pseudo-elements */}
                 {/* <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{ border: '1px solid var(--step-accent-color)' }}></div> */}

                <div
                  className={cn(
                    'w-16 h-16 rounded-full flex items-center justify-center mb-6 relative overflow-hidden',
                    'bg-white/80 dark:bg-gray-700', // Light/Dark background for the circle itself
                    'ring-4 ring-offset-2 ring-offset-gray-50 dark:ring-offset-gray-900', // Ring base
                     // Hover ring color change - uses local CSS variables
                     'hover:ring-[--step-accent-color] dark:hover:ring-[--step-accent-color-dark]',
                     'transition-all duration-300' // Transition the ring color/box-shadow
                  )}
                   style={{
                       // Apply accent-based box-shadow for a glow/depth effect
                       boxShadow: `0 0 0 3px rgba(0,0,0,0.1), 0 0 15px -3px ${step.accentColor}`, // Light mode glow
                       // Dark mode specific box-shadow needs to be handled by dark: class or JS
                       // With strict constraints, applying a shadow that works OK on both or only targeting light is needed here.
                       // Let's simplify: rely on the ring for the accent color highlight.
                   }}
                >
                  <Icon className="text-3xl relative z-10 text-gray-800 dark:text-white" /> {/* Icon color toggles */}
                  {/* Optional: Subtle radial light behind the icon */}
                  <div
                    className="absolute inset-0 rounded-full opacity-40"
                     style={{
                         backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.6) 0%, transparent 70%)',
                     }}
                  ></div>
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-800 dark:text-white tracking-wide drop-shadow-sm"> {/* Text color toggles, refined size/shadow */}
                  {step.title}
                </h3>
                <p className="text-md sm:text-lg text-gray-600 dark:text-gray-300 text-center leading-relaxed"> {/* Text color toggles, refined size/color */}
                  {step.description}
                </p>

                 {/* The commented-out Button - styled if uncommented */}
                 {/* <Button
                   variant="outline"
                   className="mt-6 px-6 py-2 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-600 hover:border-[--step-accent-color] dark:hover:border-[--step-accent-color-dark] hover:text-[--step-accent-color] dark:hover:text-[--step-accent-color-dark] transition-colors duration-300"
                 >
                   Learn More
                 </Button> */}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;