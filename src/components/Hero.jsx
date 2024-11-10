import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Achievement = ({ number, label, icon }) => (
  <div className="flex items-center gap-4 bg-white/5 p-4 rounded-lg backdrop-blur-sm
    hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1">
    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20">
      {icon}
    </div>
    <div>
      <h3 className="text-xl font-bold text-white">{number}</h3>
      <p className="text-gray-400 text-sm">{label}</p>
    </div>
  </div>
);

const Hero = () => {
  const [colorIndex, setColorIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const googleColors = [
    ['text-blue-500', 'text-red-500', 'text-yellow-500', 'text-blue-500', 'text-green-500'],
    ['text-red-500', 'text-yellow-500', 'text-blue-500', 'text-green-500', 'text-blue-500'],
    ['text-yellow-500', 'text-blue-500', 'text-green-500', 'text-red-500', 'text-yellow-500'],
    ['text-green-500', 'text-green-500', 'text-red-500', 'text-yellow-500', 'text-red-500']
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % googleColors.length);
    }, 2000);

    setIsVisible(true);

    return () => clearInterval(interval);
  }, []);

  const currentColors = googleColors[colorIndex];

  return (
    <section className="min-h-screen bg-gray-900 text-white relative overflow-hidden py-20">
      <div className="wrapper max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className={`column space-y-8 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          } transition-all duration-1000 ease-out`}>
            <h1 className="text-6xl sm:text-7xl font-bold tracking-tight">
              <span className="block text-white mb-2">We Are </span>
              <div className="flex items-center gap-1">
                <span className={`transition-colors duration-1000 ease-in-out ${currentColors[0]}`}>G</span>
                <span className={`transition-colors duration-1000 ease-in-out ${currentColors[1]}`}>D</span>
                <span className={`transition-colors duration-1000 ease-in-out ${currentColors[2]}`}>G</span>
                <span className="text-white mx-1">-</span>
                <span className={`transition-colors duration-1000 ease-in-out ${currentColors[3]}`}>B</span>
                <span className={`transition-colors duration-1000 ease-in-out ${currentColors[4]}`}>U</span>
                <span className="text-white">!</span>
              </div>
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
              Welcome to Google Developer Group BU. We're a community of developers, 
              designers, and tech enthusiasts passionate about Google technologies 
              and innovation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Achievement 
                number="500+" 
                label="Active Members"
                icon={<svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>}
              />
              <Achievement 
                number="50+" 
                label="Events Hosted"
                icon={<svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>}
              />
              <Achievement 
                number="100%" 
                label="Success Rate"
                icon={<svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>}
              />
              <Achievement 
                number="24/7" 
                label="Community Support"
                icon={<svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>}
              />
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="#contact"
                className="px-8 py-3 rounded-full bg-blue-500 hover:bg-blue-600
                  transform hover:-translate-y-0.5 transition-all duration-300
                  text-white font-medium"
              >
                Join Community
              </Link>
              <Link
                href="#events"
                className="px-8 py-3 rounded-full border-2 border-white/20
                  hover:bg-white/10 transform hover:-translate-y-0.5
                  transition-all duration-300 text-white font-medium"
              >
                View Events
              </Link>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className={`column relative ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          } transition-all duration-1000 delay-300 ease-out`}>
            <div className="relative w-full aspect-square">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl transform rotate-3 scale-95 blur-xl animate-pulse" />
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10">
  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl transform rotate-3 scale-100 blur-xl animate-pulse" />
  <Image
    src="/assets/image1.png"
    alt="GDG BU Community"
    layout="fill"
    objectFit="contain"
    className="transform hover:scale-105 transition-transform duration-700 ease-out"
  />
</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;