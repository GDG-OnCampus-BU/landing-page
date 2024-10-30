"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import EventsSection from "@/components/EventsSection";
import Links from "@/components/Links";
import About from "@/components/About";
import Services from "@/components/Services";

export default function Home() {
  const publicPath = process.env.NEXT_PUBLIC_PUBLIC_PATH ;
  const [eventsData, setEventsData] = useState([]);
  useEffect(() => {
    const fetchEventsData = async () => {
      const response = await fetch(publicPath+"/data/events.json");
      const data = await response.json();
      setEventsData(data);
    };

    fetchEventsData();
  }, []);

  const scrollToSection = () => {
    const section = document.getElementById("more-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        window.scrollBy({
          top: -1,
          behavior: "smooth",
        });
      }, 800);
    }
  };

  //scroll for about
  const scrollToABout = () => {
      const section = document.getElementById("aboutsection");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        window.scrollBy({
          top: -1,
          behavior: "smooth",
        });
      }, 800);
      }
  }
  //scroll for services
  const scrollToServices = () => {
    const section = document.getElementById("servicessection");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      window.scrollBy({
        top: -1,
        behavior: "smooth",
      });
    }, 800);
    }
}

  return (
    <>
      <Navbar scrollToABout={scrollToABout} scrollToServices={scrollToServices}/>
      <div
      id="fixed-image"
      className="fixed top-[-10] left-0 w-full h-full z-[-1] bg-cover bg-center opacity-40"
      style={{
        backgroundImage: "url('https://gdg-oncampus-bu.github.io/landing-page/assets/image1.png')",
        backgroundRepeat:"none",
        backgroundSize:"cover",
      }}
    ></div>

      <div
        className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-8 sm:p-20 text-center"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-wide shadow-lg bg-gradient-to-r bg-white bg-clip-text text-transparent">
          We are GDG-BU
        </h1>


        <button
          onClick={scrollToSection}
          className="flex items-center justify-center rounded-full border border-transparent bg-gradient-to-r bg-white text-black text-lg sm:text-xl h-10 sm:h-12 px-4 sm:px-6 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:rotate-1 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
        >
          <svg
            className="w-5 h-5 mr-2 animate-bounce"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H8a1 1 0 110-2h3V6a1 1 0 011-1z" />
          </svg>
          Discover More
        </button>

      </div>

      {/* Second Section */}
      <div
        id="more-section"
        className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-8 sm:p-50 text-center"
      >
        <EventsSection events={eventsData} />
      </div>

      {/* About Section */}
      <div id="aboutsection" className="flex flex-col items-center justify-center min-h-screen p-4 pb-10 gap-8 sm:p-100 text-center">
        <About/>
      </div>

      {/* About Section */}
      <div id="servicessection" className="flex flex-col items-center justify-center p-4 pb-10 gap-8 sm:p-100 text-center">
        <Services/>
      </div>

      {/* Links Section */}
      <div className="bg-gray-900 py-12">
        <Links />
      </div>
    </>
  );
}
