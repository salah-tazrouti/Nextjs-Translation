// pages/_app.js

import '@/app/globals.css'; // Import your global styles
/* import Contact from '@/pages/[lang]/Components/Contact'; */
import Navbar from '@/pages/[lang]/Components/Navbar';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import AOS from 'aos';


function MyApp({ Component, pageProps }) {
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the default duration of animations
    });
  }, []);
  return (
    <div>
        <Head>
            <title>{t('Head.title')}</title>
            <link rel="icon" href="./favicon.jpg" sizes="any" />
        </Head>
        <Navbar/>
      <Component {...pageProps} />
      
    </div>
  );
}

export default MyApp;
