import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: value ? '' : `${name} is required.` }));
  };

  const validateEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let validationErrors = { ...errors };
    let isValid = true;

    Object.keys(formData).forEach((field) => {
      if (!formData[field as keyof typeof formData]) {
        validationErrors[field as keyof typeof validationErrors] = `${field} is required.`;
        isValid = false;
      } else {
        validationErrors[field as keyof typeof validationErrors] = '';
      }
    });

    if (formData.email && !validateEmail(formData.email)) {
      validationErrors.email = 'Please enter a valid email address.';
      isValid = false;
    }

    setErrors(validationErrors);

    if (isValid) {
      setIsSubmitting(true);
      setTimeout(() => {
        alert('Form submitted successfully!');
        setFormData({
          name: '',
          email: '',
          company: '',
          licenseType: '',
          message: '',
        });
        setIsSubmitting(false);
      }, 2000);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-500 to-teal-500 dark:from-gray-900 dark:to-gray-800 min-h-screen flex items-center justify-center">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl p-8 w-full max-w-3xl">
        <h2 className="text-4xl font-extrabold text-center text-teal-700 dark:text-teal-300 mb-8">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Name */}
            <div className="relative">
              <label htmlFor="name" className="block text-gray-700 dark:text-gray-200 font-semibold mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full p-3 border-2 rounded-lg transition-all focus:outline-none focus:ring-2
                  ${errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} 
                  focus:ring-teal-300 dark:bg-gray-800 dark:text-white`}
                placeholder="Enter your name"
              />
              {errors.name && <p className="text-red-500 text-sm absolute bottom-0">{errors.name}</p>}
            </div>

            {/* Email */}
            <div className="relative">
              <label htmlFor="email" className="block text-gray-700 dark:text-gray-200 font-semibold mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full p-3 border-2 rounded-lg transition-all focus:outline-none focus:ring-2 
                  ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} 
                  focus:ring-teal-300 dark:bg-gray-800 dark:text-white`}
                placeholder="Enter your email"
              />
              {errors.email && <p className="text-red-500 text-sm absolute bottom-0">{errors.email}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {/* Company */}
            <div className="relative">
              <label htmlFor="company" className="block text-gray-700 dark:text-gray-200 font-semibold mb-2">Company</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className={`w-full p-3 border-2 rounded-lg transition-all focus:outline-none focus:ring-2 
                  ${errors.company ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} 
                  focus:ring-teal-300 dark:bg-gray-800 dark:text-white`}
                placeholder="Enter your company name"
              />
              {errors.company && <p className="text-red-500 text-sm absolute bottom-0">{errors.company}</p>}
            </div>

            {/* License Type */}
            <div className="relative">
              <label htmlFor="licenseType" className="block text-gray-700 dark:text-gray-200 font-semibold mb-2">License Type</label>
              <select
                id="licenseType"
                name="licenseType"
                value={formData.licenseType}
                onChange={handleInputChange}
                className={`w-full p-3 border-2 rounded-lg transition-all focus:outline-none focus:ring-2 
                  ${errors.licenseType ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} 
                  focus:ring-teal-300 dark:bg-gray-800 dark:text-white`}
              >
                <option value="">Select License Type</option>
                <option value="Software">Software</option>
                <option value="Subscription">Subscription</option>
                <option value="Service">Service</option>
              </select>
              {errors.licenseType && <p className="text-red-500 text-sm absolute bottom-0">{errors.licenseType}</p>}
            </div>
          </div>

          {/* Message */}
          <div className="relative mt-8">
            <label htmlFor="message" className="block text-gray-700 dark:text-gray-200 font-semibold mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className={`w-full p-3 border-2 rounded-lg transition-all focus:outline-none focus:ring-2 
                ${errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} 
                focus:ring-teal-300 dark:bg-gray-800 dark:text-white`}
              placeholder="Enter your message"
              rows={4}
            />
            {errors.message && <p className="text-red-500 text-sm absolute bottom-0">{errors.message}</p>}
          </div>

          {/* Submit Button */}
          <div className="mt-8 text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-8 py-3 bg-teal-600 text-white rounded-lg transition-all transform hover:scale-105 focus:outline-none 
                ${isSubmitting ? 'bg-teal-400 cursor-not-allowed' : 'hover:bg-teal-700'}`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
