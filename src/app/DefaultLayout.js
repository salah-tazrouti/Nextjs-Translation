"use client";

import Navbar from "../pages/[lang]/Components/Navbar";
export const  Layout = ({ children }) => {
    return(
      <div>
        <Navbar />
      <main>
        {children}
      </main>
      </div>
    )
  }