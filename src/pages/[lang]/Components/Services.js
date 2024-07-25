"use client";
import { useTranslation } from "react-i18next";
import 'aos/dist/aos.css'; 
import { FaLaptopCode, FaMobileAlt, FaDatabase, FaPaintBrush, FaServer, FaCloud } from 'react-icons/fa'; // Importing icons from FontAwesome

export default function Services() {
    const { t } = useTranslation();
    return (
        <section id="Services" className="services-section text-center py-16 ">
            <h2 className="text-2xl font-bold mb-8" data-aos="fade-up">{t('Home.services_section.0.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up">
                <div className="p-6 bg-white rounded-lg shadow-md" >
                    <FaLaptopCode className="text-4xl mb-4 mx-auto" /> {/* Icon added */}
                    <h3 className="text-xl font-bold mb-2">{t('Home.services_section.0.services.0.title')}</h3>
                    <p>{t('Home.services_section.0.services.0.description')}</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md">
                    <FaMobileAlt className="text-4xl mb-4 mx-auto" /> {/* Icon added */}
                    <h3 className="text-xl font-bold mb-2">{t('Home.services_section.0.services.1.title')}</h3>
                    <p>{t('Home.services_section.0.services.1.description')}</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md">
                    <FaDatabase className="text-4xl mb-4 mx-auto" /> {/* Icon added */}
                    <h3 className="text-xl font-bold mb-2">{t('Home.services_section.0.services.2.title')}</h3>
                    <p>{t('Home.services_section.0.services.2.description')}</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 " data-aos="fade-up">
                <div className="p-6 bg-white rounded-lg shadow-md">
                    <FaPaintBrush className="text-4xl mb-4 mx-auto" /> {/* Icon added */}
                    <h3 className="text-xl font-bold mb-2">{t('Home.services_section.0.services.3.title')}</h3>
                    <p>{t('Home.services_section.0.services.3.description')}</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md">
                    <FaServer className="text-4xl mb-4 mx-auto" /> {/* Icon added */}
                    <h3 className="text-xl font-bold mb-2">{t('Home.services_section.0.services.4.title')}</h3>
                    <p>{t('Home.services_section.0.services.4.description')}</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md">
                    <FaCloud className="text-4xl mb-4 mx-auto" /> {/* Icon added */}
                    <h3 className="text-xl font-bold mb-2">{t('Home.services_section.0.services.5.title')}</h3>
                    <p>{t('Home.services_section.0.services.5.description')}</p>
                </div>
            </div>
        </section>
    )
} 
