import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., sending data to a server)

    // For this example, let's just log the form data to the console
    console.log('Form Data:', formData);
  };

  return (
    <div className=" p-6 lg:p-12 flex flex-col md:flex-row h-auto max-w-7xl mx-auto">
      <div className="flex-1 mt-16 md:mt-0 md:pr-8" data-aos="fade-left">
        <h2 className="text-3xl font-extrabold mb-6 text-gray-800">{t('Contact.title')}</h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-6">{t('Contact.description')}</p>

        <div className="contact-info text-lg text-gray-600">
          <p className="mb-2"><strong>{t('Contact.email')}:</strong> example@example.com</p>
          <p><strong>{t('Contact.phone')}:</strong> +1 123-456-7890</p>
        </div>
      </div>
      <div className="flex-1 mt-12 md:mt-0" data-aos="fade-right">
        <form onSubmit={handleSubmit} className="p-6 bg-white shadow-lg rounded-md">
          <label htmlFor="name" className="block text-lg font-medium text-gray-700">
            {t('Contact.form.0.name')}:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-2 p-3 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          />

          <label htmlFor="email" className="block text-lg font-medium text-gray-700 mt-4">
            {t('Contact.form.0.email')}:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-2 p-3 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          />

          <label htmlFor="message" className="block text-lg font-medium text-gray-700 mt-4">
            {t('Contact.form.0.description')}:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-2 p-3 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent h-32"
          ></textarea>

          <button
            type="submit"
            className="mt-6 px-6 py-3 bg-blue-500 text-white text-lg rounded-full hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-700"
          >
            {t('Contact.form.0.button')}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
