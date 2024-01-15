"use client"; 
import { use } from "i18next";

export const Lang = () => {
  // Check if window is defined (running on the client side)
  if (typeof window !== 'undefined') {
    let lang = localStorage.getItem('lang');
    
    if (!lang) {
      // If 'lang' is not set in local storage, set it to 'en'
      localStorage.setItem('lang', 'en');
      lang = 'en';
    }

    return lang;
  }

  // Fallback value for server-side rendering
  return 'en';
};

