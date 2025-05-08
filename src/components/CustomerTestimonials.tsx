import React from 'react';

const CustomerTestimonials = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 text-center">
      <h2 className="text-3xl font-extrabold text-gray-800 dark:text-white mb-12">What Our Customers Say</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 px-6">
        {/* Testimonial 1 */}
        <div className="bg-white shadow-lg rounded-lg p-8 dark:bg-gray-800 dark:text-white">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">“SoftSell made selling my software licenses a breeze. The process was quick, and I received a fair price for my assets. Highly recommend!”</p>
          <div className="flex items-center justify-center">
            <img className="w-12 h-12 rounded-full mr-4" src="https://randomuser.me/api/portraits/men/1.jpg" alt="Customer 1" />
            <div>
              <p className="font-semibold text-gray-800 dark:text-white">John Doe</p>
              <p className="text-gray-600 dark:text-gray-400">Software Engineer, TechCorp</p>
            </div>
          </div>
        </div>
        {/* Testimonial 2 */}
        <div className="bg-white shadow-lg rounded-lg p-8 dark:bg-gray-800 dark:text-white">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">“I was impressed by how seamless everything was. SoftSell offered an intuitive platform, and I was paid promptly for my licenses.”</p>
          <div className="flex items-center justify-center">
            <img className="w-12 h-12 rounded-full mr-4" src="https://randomuser.me/api/portraits/men/2.jpg" alt="Customer 2" />
            <div>
              <p className="font-semibold text-gray-800 dark:text-white">Mark Smith</p>
              <p className="text-gray-600 dark:text-gray-400">CTO, InnovateTech</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerTestimonials;
