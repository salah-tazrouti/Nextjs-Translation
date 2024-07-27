"use client";
import { useTranslation } from "react-i18next";
import 'aos/dist/aos.css';

export default function Services() {
    const { t } = useTranslation();
    return (
        <section id="About" className="about-section py-16 px-6 lg:px-40 bg-gray-100">
            <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-800" data-aos="fade-up">
                {t('Home.about_section.title')}
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-12" data-aos="fade-up">
                <div className="md:w-1/2">
                    <p className="text-lg text-gray-600 leading-relaxed">
                        {t('Home.about_section.description')}
                    </p>
                </div>
                <div className="md:w-1/2 flex justify-center">
                    <img
                        src="https://img.freepik.com/free-vector/teamwork-concept-landing-page_52683-20165.jpg?size=626&ext=jpg&ga=GA1.1.1573562918.1700557704&semt=ais"
                        alt="Agency Team"
                        className="rounded-lg shadow-lg w-full max-w-md"
                    />
                </div>
            </div>
        </section>
    );
}
