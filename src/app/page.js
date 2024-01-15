"use client";
import Link from 'next/link';
import './globals.css';
/* import LanguageSwitcher from './LanguageSwitcher'; */
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { Layout } from './DefaultLayout';
import { redirect } from 'next/navigation';
import { Lang } from './Currentlng';

export default function Home() {

  const { t } = useTranslation();
  //console.log(i18next.changeLanguage(lang));
  return (
    <>
      {redirect(`/${Lang()}`)}
    </>
  );
}
