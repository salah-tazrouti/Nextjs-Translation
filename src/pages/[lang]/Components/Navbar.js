// Navbar.js
"use client";
import React from 'react';
import LanguageSwitcher from '@/app/LanguageSwitcher';
import Link from 'next/link';
import { Lang } from '@/app/Currentlng';

const Navbar = () => {
  
    return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Brand */}
        <Link href={`/${Lang()}`} className="text-white text-xl font-bold">
          IT Agency
        </Link>
        <div className="space-x-4">
            <LanguageSwitcher />
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
