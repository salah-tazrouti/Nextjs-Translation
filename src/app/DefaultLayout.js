"use client";

import Navbar from "../pages/[lang]/Navbar";
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