import { useTranslation } from "react-i18next";
import Link from "next/link";
import { Lang } from "@/app/Currentlng";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="hero-section py-16">
      <h1 className="text-4xl font-bold mb-4 animate-jump-in text-center">{t('Home.title')}</h1>
      <div className='flex flex-col md:flex-row animate-fade-right'>
        <div className='w-full md:w-1/2 sm:w-10/12'>
          <img src='https://img.freepik.com/free-vector/top-view-dark-laptop-background-template_52683-6163.jpg?size=626&ext=jpg&ga=GA1.1.1573562918.1700557704&semt=ais'
            className='h-96 object-cover rounded-lg shadow-lg m-2'
          />
        </div>
        <div className='w-1/2 pt-24 md:w-1/2 animate-fade-left sm:w-full'>
          <p className="text-lg text-gray-600">{t('Home.welcome_section.0.title')}</p>
          <p className="text-lg text-gray-600">{t('Home.welcome_section.0.description')}</p>
          <p className="text-lg text-gray-600">{t('Home.welcome_section.0.title2')}</p>
          {/*           <button className="mt-8 bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600">
          <Link href={`${Lang()}/#Contact`}> {t('Home.welcome_section.0.button')}</Link>
          </button> */}
          <button className="mt-8 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              <Link href={`${Lang()}/#Contact`}> {t('Home.welcome_section.0.button')}</Link>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

/* "use client";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { Lang } from "@/app/Currentlng";

export default function Hero() {
    const { t } = useTranslation();

    return (
        <section className="hero-section text-center py-16">
            <h1 className="text-4xl font-bold mb-4 animate-jump-in">{t('Home.title')}</h1>
            <div className='flex animate-fade-right'>
                <div className='w-1/2'>
                    <img src='https://img.freepik.com/free-vector/top-view-dark-laptop-background-template_52683-6163.jpg?size=626&ext=jpg&ga=GA1.1.1573562918.1700557704&semt=ais'
                        className='h-96 object-cover rounded-lg shadow-lg m-2'
                    />
                </div>
                <div className='w-1/2 pt-24 animate-fade-left'>
                    <p className="text-lg text-gray-600">{t('Home.welcome_section.0.title')}</p>
                    <p className="text-lg text-gray-600">{t('Home.welcome_section.0.description')}</p>
                    <p className="text-lg text-gray-600">{t('Home.welcome_section.0.title2')}</p>
                    <button className="mt-8 bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600">
                        <Link href={`${Lang()}/#Contact`}> {t('Home.welcome_section.0.button')}</Link>
                    </button>
                </div>
            </div>
        </section>
    );
} */