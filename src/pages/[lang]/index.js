"use client";
import '@/app/globals.css';
import Hero from './Components/Hero';
import Services from './Components/Services';
import About from './Components/About';
import Contact from './Components/Contact';


export default function TryHome() {

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
