"use client"; 
// Import the necessary modules
import React, { useEffect } from 'react';
import i18next from './i18n'; // Adjust the path accordingly
import { useRouter,usePathname } from 'next/navigation';

// Define the LanguageSwitcher component
const LanguageSwitcher = () => {
 const pathname = usePathname();
//console.log(pathname) */;
  // Access the router object
  const router = useRouter();

  // Define the function to change the language
  const changeLanguage = (lang) => {
    console.log("switched");
    // Check if router is available
    if (router) {
      console.log("router");
      // Check if router.asPath is defined
      //if (router.asPath) {
        console.log("router.asPath");
        /* const pathname = usePathname();
        console.log(pathname); */
        // Split the pathname using '/' as the delimiter
        const segments = pathname.split('/');

        // Find the index of the language code
        const languageIndex = segments.indexOf('fr');

        // Extract the part after the language code
        const afterLanguage = segments.slice(languageIndex + 1).join('/');
        console.log("afterlang"+afterLanguage);

        // Use the replace option to update only the language part of the URL
        //router.replace(`/${lang}/${afterLanguage}`);
      //}
    }
  };

  // Use useEffect to set the initial language in the URL
  useEffect(() => {
    // Get the language from localStorage or use 'en' as the default
    const lang = localStorage.getItem('lang') || 'en';

    // Check if router is available before calling push
    if (router) {
      /* router.push(`/${lang}`); */
      console.log("router.push");
    }
  }, [router]);

  // Return the component JSX
  return (
    <div>
      {/* Language selection dropdown */}
      <select onChange={(e) => changeLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="fr">French</option>
      </select>
    </div>
  );
};

// Export the LanguageSwitcher component
export default LanguageSwitcher;
