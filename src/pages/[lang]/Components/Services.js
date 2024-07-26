"use client";
import { useTranslation } from "react-i18next";
import 'aos/dist/aos.css'; 
import { FaLaptopCode, FaMobileAlt, FaDatabase, FaPaintBrush, FaServer, FaCloud } from 'react-icons/fa'; // Importing icons from FontAwesome

export default function Services() {
    const { t } = useTranslation();
    return (
        <section id="Services" className="services-section text-center py-16 px-8">
            <h2 className="text-2xl font-bold mb-8" data-aos="fade-up">{t('Home.services_section.0.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up">
                <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transform transition duration-300 hover:bg-blue-100">
                    <FaLaptopCode className="text-4xl mb-4 mx-auto text-blue-600 hover:text-blue-800 transition-colors duration-300" />
                    <h3 className="text-xl font-bold mb-2">{t('Home.services_section.0.services.0.title')}</h3>
                    <p>{t('Home.services_section.0.services.0.description')}</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transform transition duration-300 hover:bg-green-100">
                    <FaMobileAlt className="text-4xl mb-4 mx-auto text-green-600 hover:text-green-800 transition-colors duration-300" />
                    <h3 className="text-xl font-bold mb-2">{t('Home.services_section.0.services.1.title')}</h3>
                    <p>{t('Home.services_section.0.services.1.description')}</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transform transition duration-300 hover:bg-purple-100">
                    <FaDatabase className="text-4xl mb-4 mx-auto text-purple-600 hover:text-purple-800 transition-colors duration-300" />
                    <h3 className="text-xl font-bold mb-2">{t('Home.services_section.0.services.2.title')}</h3>
                    <p>{t('Home.services_section.0.services.2.description')}</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10" data-aos="fade-up">
                <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transform transition duration-300 hover:bg-pink-100">
                    <FaPaintBrush className="text-4xl mb-4 mx-auto text-pink-600 hover:text-pink-800 transition-colors duration-300" />
                    <h3 className="text-xl font-bold mb-2">{t('Home.services_section.0.services.3.title')}</h3>
                    <p>{t('Home.services_section.0.services.3.description')}</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transform transition duration-300 hover:bg-yellow-100">
                    <FaServer className="text-4xl mb-4 mx-auto text-yellow-600 hover:text-yellow-800 transition-colors duration-300" />
                    <h3 className="text-xl font-bold mb-2">{t('Home.services_section.0.services.4.title')}</h3>
                    <p>{t('Home.services_section.0.services.4.description')}</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transform transition duration-300 hover:bg-teal-100">
                    <FaCloud className="text-4xl mb-4 mx-auto text-teal-600 hover:text-teal-800 transition-colors duration-300" />
                    <h3 className="text-xl font-bold mb-2">{t('Home.services_section.0.services.5.title')}</h3>
                    <p>{t('Home.services_section.0.services.5.description')}</p>
                </div>
            </div>
        </section>
    )
}
