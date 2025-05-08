import React from 'react';
import { FaUpload, FaSearch, FaDollarSign } from 'react-icons/fa';

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="py-32 bg-gradient-to-r from-teal-500 to-blue-600 dark:from-gray-900 dark:to-gray-800 text-white transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto text-center px-6">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-16 text-white dark:text-white">
          How It Works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
          {/* Step 1 */}
          <div className="flex flex-col items-center bg-white bg-opacity-20 dark:bg-white/10 p-10 rounded-lg shadow-xl transition-transform transform hover:scale-105 hover:bg-opacity-30 dark:hover:bg-white/20">
            <FaUpload className="text-5xl mb-6 text-teal-200" />
            <h3 className="text-3xl font-bold mb-4 text-white dark:text-white">Upload Your License</h3>
            <p className="text-lg text-white opacity-80 dark:opacity-90">
              Upload your unused software licenses in just a few clicks and start the process!
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center bg-white bg-opacity-20 dark:bg-white/10 p-10 rounded-lg shadow-xl transition-transform transform hover:scale-105 hover:bg-opacity-30 dark:hover:bg-white/20">
            <FaSearch className="text-5xl mb-6 text-teal-200" />
            <h3 className="text-3xl font-bold mb-4 text-white dark:text-white">Get a Free Valuation</h3>
            <p className="text-lg text-white opacity-80 dark:opacity-90">
              Instantly receive a free valuation of your software licenses, with no hidden fees.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center bg-white bg-opacity-20 dark:bg-white/10 p-10 rounded-lg shadow-xl transition-transform transform hover:scale-105 hover:bg-opacity-30 dark:hover:bg-white/20">
            <FaDollarSign className="text-5xl mb-6 text-teal-200" />
            <h3 className="text-3xl font-bold mb-4 text-white dark:text-white">Cash Out Instantly</h3>
            <p className="text-lg text-white opacity-80 dark:opacity-90">
              Once valued, cash out instantly and get paid right away, hassle-free.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
