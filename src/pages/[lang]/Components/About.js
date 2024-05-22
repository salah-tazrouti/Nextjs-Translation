"use client";
import { useTranslation } from "react-i18next";
import 'aos/dist/aos.css'; 

export default function Services() {
    const { t } = useTranslation();
    return (
        <section id="About" className="about-section text-center py-16 m-40 sm: m-5">
            <h2 className="text-2xl font-bold mb-4 " data-aos="fade-up">{t('Home.about_section.title')}</h2>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8" data-aos="fade-up">
                <div className="md:w-1/2">
                    <p className="text-gray-700">
                        {t('Home.about_section.description')}
                    </p>
                </div>
                <div className=" md:w-1/2">
                    <img
                        src="https://img.freepik.com/free-vector/teamwork-concept-landing-page_52683-20165.jpg?size=626&ext=jpg&ga=GA1.1.1573562918.1700557704&semt=ais"
                        alt="Agency Team"
                        className="rounded-md shadow-md w-96"
                    />
                </div>
            </div>
        </section>
    )
}