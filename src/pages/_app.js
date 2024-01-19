// pages/_app.js

import '@/app/globals.css'; // Import your global styles
/* import Contact from '@/pages/[lang]/Components/Contact'; */
import Navbar from '@/pages/[lang]/Components/Navbar';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <div>
        <Head>
            <title>IT Agency</title>

        </Head>
        <Navbar/>
      <Component {...pageProps} />
      
    </div>
  );
}

export default MyApp;
