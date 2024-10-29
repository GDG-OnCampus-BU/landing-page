"use client";

import Navbar from "@/components/Navbar";
import { useEffect } from "react";

export default function Home() {
    const scrollToSection = () => {
        const section = document.getElementById("more-section");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
          setTimeout(() => {
            window.scrollBy({
              top: -1,
              behavior: "smooth",
            });
          }, 600);
        }
      };
    useEffect(()=>{
        setTimeout(()=>{
            scrollToSection();
        },1700)
    },[])
  
  return (
    <>
    {/* Meta Tags for SEO */}
    <Navbar />
      <div
      id="fixed-image"
      className="fixed top-[-10] left-0 w-full h-full z-[-1] bg-cover bg-center opacity-40"
      style={{
        backgroundImage: "url('https://gdg-oncampus-bu.github.io/landing-page/assets/image1.png')",
        backgroundRepeat:"none",
        backgroundSize:"cover",
      }}
    ></div>
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-8 sm:p-20 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-wide shadow-lg bg-gradient-to-r bg-white bg-clip-text text-transparent">
          Services GDG-BU
        </h1>
    </div>
    <main>
    <section className="more-section mb-12 rounded-lg overflow-hidden">
          <div
            className="page-content p-8 md:p-16 bg-gray-800 text-white rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-700 hover:shadow-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 border-b-2 border-blue-400 pb-2">
              
            </h2>
            <div className="text-lg leading-relaxed"></div>
          </div>
        </section>
    </main>
    </>
  );
}
