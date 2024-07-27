// Footer.js
"use client";
import React from 'react';
import LanguageSwitcher from '@/app/LanguageSwitcher';
import Link from 'next/link';
import { Lang } from '@/app/Currentlng';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

const Footer = () => {
  const { t } = useTranslation();

  const handleSubscribe = (event) => {
    event.preventDefault(); // Prevent form submission
    toast.success(t('Subscription successful!'));
  };

  return (
    <nav className="">
      <div className="top-999 left-0 right-0 flex justify-between items-center bg-gray-800 p-5">
        {/* Logo or Brand */}
        <Link href={`/${Lang()}`} className="text-white text-xxl font-bold">
          {t('Head.title')}
        </Link>
        <div className="flex space-x-6 text-white items-center"> 
          <div className=' space-x-6 pr-6'>
            <Link href={`/${Lang()}/`}>{t('Head.Home')}</Link>
            <Link href={`/${Lang()}/#About`}>{t('Head.About')}</Link>
            <Link href={`/${Lang()}/#Services`}>{t('Head.Services')}</Link>
            <Link href={`/${Lang()}/#Contact`}>{t('Head.Contact')}</Link>
          </div>
          <p className="hidden md:block">{t('Head.Newsletter')}</p> 
          <form action="" className="hidden md:flex space-x-2" onSubmit={handleSubscribe}> 
            <input type="text" placeholder="Email" className="p-2 rounded-lg text-black" />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-500">{t('Head.Subscribe')}</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Footer;
