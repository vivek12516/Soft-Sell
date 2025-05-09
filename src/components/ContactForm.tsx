import React, { useState, useCallback } from 'react';
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
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle'); // Added status

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' })); // Clear error on input change
  }, []);

  const validateEmail = useCallback((email: string) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
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
        setSubmissionStatus('idle'); // Set to idle before starting

        // Simulate an API call
        setTimeout(() => {
          setIsSubmitting(false);
          if (Math.random() > 0.2) { // Simulate a 80% success rate
            setFormData({  // Reset form data on success
              name: '',
              email: '',
              company: '',
              licenseType: '',
              message: '',
            });
            setSubmissionStatus('success');
          }
          else {
            setSubmissionStatus('error');
          }

          setTimeout(() => {
            setSubmissionStatus('idle'); // Reset status after 3 seconds
          }, 3000);
        }, 2000);
      }
    },
    [formData, validateEmail, errors]
  );

  return (
    <section className="py-20 bg-gradient-to-r from-blue-500 to-teal-500 dark:from-gray-900 dark:to-gray-800 min-h-screen flex items-center justify-center">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-2xl p-6 sm:p-8 w-full max-w-3xl">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-teal-700 dark:text-teal-300 mb-6 sm:mb-8">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {/* Name */}
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-200">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border-2 rounded-md transition-all focus:outline-none focus:ring-2
                  ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:ring-teal-300 dark:bg-gray-800 dark:text-white'}`}
                placeholder="Enter your name"
                aria-invalid={!!errors.name}
                aria-describedby="name-error"
              />
              {errors.name && (
                <p id="name-error" className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-200">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border-2 rounded-md transition-all focus:outline-none focus:ring-2
                  ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:ring-teal-300 dark:bg-gray-800 dark:text-white'}`}
                placeholder="Enter your email"
                aria-invalid={!!errors.email}
                aria-describedby="email-error"
              />
              {errors.email && (
                <p id="email-error" className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-6">
            {/* Company */}
            <div className="space-y-2">
              <label htmlFor="company" className="block text-sm font-semibold text-gray-700 dark:text-gray-200">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border-2 rounded-md transition-all focus:outline-none focus:ring-2
                  ${errors.company ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:ring-teal-300 dark:bg-gray-800 dark:text-white'}`}
                placeholder="Enter your company name"
                aria-invalid={!!errors.company}
                aria-describedby="company-error"
              />
              {errors.company && (
                <p id="company-error" className="text-red-500 text-sm">{errors.company}</p>
              )}
            </div>

            {/* License Type */}
            <div className="space-y-2">
              <label htmlFor="licenseType" className="block text-sm font-semibold text-gray-700 dark:text-gray-200">
                License Type <span className="text-red-500">*</span>
              </label>
              <select
                id="licenseType"
                name="licenseType"
                value={formData.licenseType}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border-2 rounded-md transition-all focus:outline-none focus:ring-2
                  ${errors.licenseType ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:ring-teal-300 dark:bg-gray-800 dark:text-white'}
                  ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                aria-invalid={!!errors.licenseType}
                aria-describedby="licenseType-error"
                disabled={isSubmitting}
              >
                <option value="">Select License Type</option>
                <option value="Software">Software</option>
                <option value="Subscription">Subscription</option>
                <option value="Service">Service</option>
              </select>
              {errors.licenseType && (
                <p id="licenseType-error" className="text-red-500 text-sm">{errors.licenseType}</p>
              )}
            </div>
          </div>

          {/* Message */}
          <div className="space-y-2 mt-4 sm:mt-6">
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-200">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 border-2 rounded-md transition-all focus:outline-none focus:ring-2
                ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:ring-teal-300 dark:bg-gray-800 dark:text-white'}`}
              placeholder="Enter your message"
              rows={4}
              aria-invalid={!!errors.message}
              aria-describedby="message-error"
            />
            {errors.message && (
              <p id="message-error" className="text-red-500 text-sm">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="mt-6 sm:mt-8 text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-6 py-2 sm:px-8 sm:py-3 bg-teal-600 text-white rounded-md transition-all
                ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-teal-700 transform hover:scale-105'}
                ${submissionStatus === 'success' ? 'bg-green-600 hover:bg-green-700' : ''}
                ${submissionStatus === 'error' ? 'bg-red-600 hover:bg-red-700' : ''}`}
            >
              {isSubmitting ? 'Submitting...' :
                submissionStatus === 'success' ? 'Submitted!' :
                  submissionStatus === 'error' ? 'Error!' :
                    'Submit'}
            </button>
            {submissionStatus === 'success' && (
              <p className="mt-2 text-green-500 text-sm">Your message has been sent successfully.</p>
            )}
            {submissionStatus === 'error' && (
              <p className="mt-2 text-red-500 text-sm">There was an error submitting your form. Please try again.</p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
