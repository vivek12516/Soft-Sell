import React from 'react';
import { FaShieldAlt, FaClock, FaThumbsUp } from 'react-icons/fa';

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 text-center">
      <h2 className="text-3xl font-extrabold text-gray-800 dark:text-white mb-12">Why Choose Us</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 px-6">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center mb-4">
            <FaShieldAlt className="text-2xl" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">Security First</h3>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Your data is protected with top-notch encryption protocols to ensure privacy and safety.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center mb-4">
            <FaClock className="text-2xl" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">Quick Process</h3>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Our valuation and payment processes are fast, ensuring you get your quote and payment in no time.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center mb-4">
            <FaThumbsUp className="text-2xl" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">Trusted by Thousands</h3>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Thousands of satisfied customers trust us to handle their software licenses, ensuring reliability and ease.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
