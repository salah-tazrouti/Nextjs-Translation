"use client";
import Link from 'next/link';
import '@/app/globals.css';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { Layout } from '@/app/DefaultLayout';
import { Lang } from '@/app/Currentlng';
import Navbar from '@/pages/[lang]/Components/Navbar';
import Hero from './Components/Hero';
import Services from './Components/Services';
import About from './Components/About';
import Contact from './Components/Contact';

export default function TryHome() {

  const { t } = useTranslation();
  //console.log(Lang());
  //console.log(i18next.changeLanguage(lang));
  return (
    <div className="bg-gray-100 min-h-screen">

      <div className=" max-w-7xl mx-auto">
        <Hero />
        <About />
        <Services />
        <Contact />

      </div>
    </div>
  );
}
