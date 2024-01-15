"use client"; 
import React, { useEffect } from 'react';
import i18next from './i18n'; // Adjust the path accordingly
import { useRouter } from 'next/navigation';

const LanguageSwitcher = () => {
  const router = useRouter();

  const changeLanguage = (lang) => {
    i18next.changeLanguage(lang);
    localStorage.setItem('lang', lang);

    router.push(`/${lang}`)
  };

  // Use useEffect to set the initial language in the URL
  useEffect(() => {
    const lang = localStorage.getItem('lang') || 'en';

    // Check if router is available before calling push
    router.push(`/${lang}`)
  }, [router]);

  return (
    <div>
      <select onChange={(e) => changeLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="fr">French</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
