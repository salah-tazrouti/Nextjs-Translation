// Navbar.js
"use client";
import React from 'react';
import LanguageSwitcher from '@/app/LanguageSwitcher';
import Link from 'next/link';
import { Lang } from '@/app/Currentlng';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t } = useTranslation();
    return (
      <nav className="p-5 relative">
        <div className="fixed top-0 left-0 right-0 flex justify-between items-center bg-gray-800 p-5">
          {/* Logo or Brand */}
          <Link href={`/${Lang()}`} className="text-white text-xxl font-bold">
            {t('Head.title')}
          </Link>
          <div className="space-x-6 text-white">
            <Link href={`/${Lang()}/`}>{t('Head.Home')}</Link>
            <Link href={`/${Lang()}/#About`}>{t('Head.About')}</Link>
            <Link href={`/${Lang()}/#Services`}>{t('Head.Services')}</Link>
            <Link href={`/${Lang()}/#Contact`}>{t('Head.Contact')}</Link>
          </div>
          <div className="space-x-4">
              <LanguageSwitcher />
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
