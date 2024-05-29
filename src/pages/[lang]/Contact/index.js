// Contact.js

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
    <div className="bg-gray-100 p-4  pt-10 flex flex-col md:flex-row h-screen sm: h-max">
      <div className="flex-1 mt-32 md:pt-0 pr-4 animate-fade-left sm:mt-2">
        <h2 className="text-2xl font-bold mb-4">{t('Contact.title')}</h2>
        <p>{t('Contact.description')}</p>

        <div className="contact-info mt-4">
          <p>{t('Contact.email')}: example@example.com</p>
          <p>{t('Contact.phone')}: +1 123-456-7890</p>
        </div>
      </div>
      <div className="flex-1 animate-fade-right">
        <form onSubmit={handleSubmit} className="mt-4 p-4 bg-gray-100 rounded-md">
          <label htmlFor="name" className="block text-base font-medium text-gray-700">
            {t('Contact.form.0.name')}:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-2 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />

          <label htmlFor="email" className="block text-base font-medium text-gray-700 mt-4">
            {t('Contact.form.0.email')}:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-2 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />

          <label htmlFor="message" className="block text-base font-medium text-gray-700 mt-4">
            {t('Contact.form.0.description')}:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-2 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          ></textarea>

          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-700"
          >
            {t('Contact.form.0.button')}
          </button>
        </form>
      </div>
    </div>

  );
};

export default Contact;
