import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaClock, FaThumbsUp } from 'react-icons/fa';

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      title: 'Security First',
      description:
        'Your data is protected with top-notch encryption protocols to ensure privacy and safety.',
      icon: FaShieldAlt,
      color: 'bg-blue-500',
    },
    {
      id: 2,
      title: 'Quick Process',
      description:
        'Our valuation and payment processes are fast, ensuring you get your quote and payment in no time.',
      icon: FaClock,
      color: 'bg-green-500',
    },
    {
      id: 3,
      title: 'Trusted by Thousands',
      description:
        'Thousands of satisfied customers trust us to handle their software licenses, ensuring reliability and ease.',
      icon: FaThumbsUp,
      color: 'bg-purple-500',
    },
      {
        id: 4,
        title: 'Expert Support',
        description: 'Our dedicated support team is available 24/7 to assist you with any questions or concerns.',
        icon: FaShieldAlt,
        color: 'bg-yellow-500'
      },
      {
        id: 5,
        title: 'Transparent Process',
        description: 'We provide a clear and transparent process, so you always know what to expect.',
        icon: FaClock,
        color: 'bg-pink-500'
      },
      {
          id: 6,
          title: "Best Value",
          description: "We offer the best value for your licenses, ensuring you get a fair price.",
          icon: FaThumbsUp,
          color: "bg-orange-500"
      }
  ];

  // Animation variants
  const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2, // Staggered delay
        duration: 0.6,
        ease: 'easeInOut',
      },
    }),
  };

  return (
    <section className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-900 text-center">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 dark:text-white mb-8 sm:mb-12">
        Why Choose Us
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 px-4 sm:px-6 lg:px-8">
        {features.map((feature, index) => {
          const Icon = feature.icon; // Get the icon component
          return (
            <motion.div
              key={feature.id}
              variants={featureVariants}
              initial="hidden"
              animate="visible"
              custom={index}
              className="flex flex-col items-center rounded-xl p-6 sm:p-8 transition-all duration-300
                         bg-white dark:bg-gray-800 shadow-md hover:shadow-lg hover:scale-[1.03]
                         border border-transparent hover:border-gray-200 dark:hover:border-gray-700"
            >
              <div
                className={`w-16 h-16 ${feature.color} text-white rounded-full flex items-center justify-center mb-4 shadow-md`}
              >
                <Icon className="text-2xl" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-md sm:text-lg text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default WhyChooseUs;
