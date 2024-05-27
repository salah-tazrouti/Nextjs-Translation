// Navbar.js
"use client";
import React from 'react';
import LanguageSwitcher from '@/app/LanguageSwitcher';
import Link from 'next/link';
import { Lang } from '@/app/Currentlng';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHeart } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleclose = () => {
    setIsOpen(false);
  };

  return (
    
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href={`/${Lang()}`} className="text-white text-xxl font-bold">
          {t('Head.title')}
        </Link>

        {/* Middle Nav Links */}
        <div className="hidden md:flex space-x-4">
          <Link href={`/${Lang()}/`} className="text-white hover:text-gray-300" >{t('Head.Home')}</Link>
          <Link href={`/${Lang()}/#About`} className="text-white hover:text-gray-300">{t('Head.About')}</Link>
          <Link href={`/${Lang()}/#Services`} className="text-white hover:text-gray-300">{t('Head.Services')}</Link>
          <Link href="#Contact" className="text-white hover:text-gray-300">{t('Head.Contact')}</Link>
          <LanguageSwitcher />
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white hover:text-gray-300 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2">
          <Link href={`/${Lang()}/`} className="block text-white hover:text-gray-300" onClick={handleclose}>{t('Head.Home')}</Link>
          <Link href={`/${Lang()}/#About`} className="block text-white hover:text-gray-300" onClick={handleclose}>{t('Head.About')}</Link>
          <Link href={`/${Lang()}/#Services`} className="block text-white hover:text-gray-300" onClick={handleclose}>{t('Head.Services')}</Link>
          <Link href="#Contact" className="block text-white hover:text-gray-300" onClick={handleclose}>{t('Head.Contact')}</Link>
          <LanguageSwitcher onClick={handleclose} />
          
        </div>
      )}
    </nav>
/*   const { t } = useTranslation();
  return (
    <nav className="relative ">
      <div className="fixed top-0 left-0 right-0 flex justify-between items-center bg-gray-800 p-3">
        
        <Link href={`/${Lang()}`} className="text-white text-xxl font-bold">
          {t('Head.title')}
        </Link>
        <div className="space-x-6 text-white lg:block sm:hidden">
          <Link href={`/${Lang()}/`}>{t('Head.Home')}</Link>
          <Link href={`/${Lang()}/#About`}>{t('Head.About')}</Link>
          <Link href={`/${Lang()}/#Services`}>{t('Head.Services')}</Link>
          <Link href={`/${Lang()}/#Contact`}>{t('Head.Contact')}</Link>
        </div>
        <div className="space-x-4 border-white p-3">
          <LanguageSwitcher />
        </div>
        <div className="bg-white flex items-center">
          <button className="text-white focus:outline-none">
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>
    </nav>*/
  ); 
  
};

export default Navbar;
