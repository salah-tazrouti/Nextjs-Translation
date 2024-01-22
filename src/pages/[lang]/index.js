"use client";
import Link from 'next/link';
import '@/app/globals.css';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { Layout } from '@/app/DefaultLayout';
import { Lang } from '@/app/Currentlng';
import  Navbar from '@/pages/[lang]/Components/Navbar';

export default function TryHome() {

  const { t } = useTranslation();
  //console.log(Lang());
  //console.log(i18next.changeLanguage(lang));
  return (
    <div>
      {/* <Navbar /> */}
      <div className="bg-gray-100">
        <section className="hero-section text-center py-16">
          <h1 className="text-4xl font-bold mb-4">{t('Home.title')}</h1>
          <div className='flex'>
            <div className='w-1/2'>
              <img src='https://img.freepik.com/free-vector/top-view-dark-laptop-background-template_52683-6163.jpg?size=626&ext=jpg&ga=GA1.1.1573562918.1700557704&semt=ais'
                className=''
              />
            </div>
            <div className='w-1/2 pt-24'>
              <p className="text-lg text-gray-600">{t('Home.welcome_section.0.title')}</p>
              <button className="mt-8 bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600">
              {t('Home.welcome_section.0.button')}
              </button>
            </div>
          </div>

        </section>

        <section className="services-section text-center py-16">
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
        </section>

        <section className="about-section text-center py-16 m-40">
        <h2 className="text-2xl font-bold mb-4">{t('Home.about_section.title')}</h2>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
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

      <section className="contact-section text-center py-16">
        <h2 className="text-2xl font-bold mb-4">{t('Home.contact_section.title')}</h2>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
          <div className="md:w-1/2">
            <img
              src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?size=626&ext=jpg&ga=GA1.1.1573562918.1700557704&semt=sph"
              alt="Customer Support"
              className="rounded-md shadow-md w-96 ml-16"
            />
          </div>
          <div className="md:w-1/2 text-left">
            <p className="text-gray-700">
            {t('Home.contact_section.description')}
            </p>
            <button className="mt-4 bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600" >
            <Link href={`${Lang()}/Contact`}>{t('Home.contact_section.button')}</Link>
            </button>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}
