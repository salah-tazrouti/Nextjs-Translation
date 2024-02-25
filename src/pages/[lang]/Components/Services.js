"use client";
import { useTranslation } from "react-i18next";

export default function Services() {
    const { t } = useTranslation();
    return (
        <section id="Services" className="services-section text-center py-16">
            <h2 className="text-2xl font-bold mb-8">{t('Home.services_section.0.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="p-6 bg-white rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-2">{t('Home.services_section.0.services.0.title')}</h3>
                    <p>{t('Home.services_section.0.services.0.description')}</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-2">{t('Home.services_section.0.services.1.title')}</h3>
                    <p>{t('Home.services_section.0.services.1.description')}</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-2">{t('Home.services_section.0.services.2.title')}</h3>
                    <p>{t('Home.services_section.0.services.2.description')}</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                <div className="p-6 bg-white rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-2">{t('Home.services_section.0.services.0.title')}</h3>
                    <p>{t('Home.services_section.0.services.0.description')}</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-2">{t('Home.services_section.0.services.1.title')}</h3>
                    <p>{t('Home.services_section.0.services.1.description')}</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-2">{t('Home.services_section.0.services.2.title')}</h3>
                    <p>{t('Home.services_section.0.services.2.description')}</p>
                </div>
            </div>
        </section>
    )
}