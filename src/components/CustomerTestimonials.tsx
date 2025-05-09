import { motion } from 'framer-motion';

const CustomerTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        'SoftSell made selling my software licenses a breeze. The process was quick, and I received a fair price for my assets. Highly recommend!',
      name: 'John Doe',
      title: 'Software Engineer, TechCorp',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      id: 2,
      quote:
        'I was impressed by how seamless everything was. SoftSell offered an intuitive platform, and I was paid promptly for my licenses.',
      name: 'Mark Smith',
      title: 'CTO, InnovateTech',
      image: 'https://randomuser.me/api/portraits/men/2.jpg',
    },
    {
      id: 3,
      quote: "SoftSell's customer service is top-notch. They guided me through the entire selling process, and I felt confident in their expertise.",
      name: "Jane Williams",
      title: "Project Manager, WebSolutions",
      image: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
        id: 4,
        quote: "I've used other platforms before, but SoftSell stands out with its transparency and efficiency.  A great experience overall.",
        name: "David Lee",
        title: "CEO, GlobalSoft",
        image: "https://randomuser.me/api/portraits/men/3.jpg"
    }
  ];

  // Animation variants
  const testimonialVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2, // Staggered delay
        duration: 0.5,
        ease: 'easeInOut'
      },
    }),
  };

  return (
    <section className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-900 text-center">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 dark:text-white mb-8 sm:mb-12">
        What Our Customers Say
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-12 px-4 sm:px-6 lg:px-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            variants={testimonialVariants}
            initial="hidden"
            animate="visible"
            custom={index} // Pass index for stagger
            className="bg-white shadow-md rounded-xl p-6 sm:p-8 dark:bg-gray-800 dark:text-gray-100 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
          >
            <p className="text-md sm:text-lg text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 italic">
              “{testimonial.quote}”
            </p>
            <div className="flex items-center justify-center sm:justify-start">
              <img
                className="w-12 h-12 rounded-full mr-4"
                src={testimonial.image}
                alt={`${testimonial.name}`}
                loading="lazy" // Add lazy loading
              />
              <div className="text-left">
                <p className="font-semibold text-gray-800 dark:text-white">
                  {testimonial.name}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {testimonial.title}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CustomerTestimonials;
