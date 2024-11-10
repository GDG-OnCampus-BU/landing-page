import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const TeamMemberCards = ({ teamMembers }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? teamMembers.length - 4 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === teamMembers.length - 4 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === teamMembers.length - 4 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [teamMembers.length]);

  // Google theme colors
  const googleColors = {
    blue: '#4285F4',
    red: '#DB4437',
    yellow: '#F4B400',
    green: '#0F9D58'
  };

  return (
    <section id="teammembercard" className="relative min-h-screen py-20 overflow-hidden bg-[#1a1f2e]">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <motion.div 
          className="absolute w-64 h-64 rounded-full bg-[#4285F4] -top-20 -left-20"
          animate={{
            y: [0, 50, 0],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute w-96 h-96 rounded-full bg-[#DB4437] -bottom-32 -right-32"
          animate={{
            y: [0, -50, 0],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative wrapper z-10">
        <div className="flex flex-col items-center max-w-[1300px] mx-auto p-4 ">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 text-6xl font-bold tracking-tight text-center relative"
          >
            <span className="inline-block">
              <span className="text-[#4285F4]">T</span>
              <span className="text-[#DB4437]">E</span>
              <span className="text-[#F4B400]">A</span>
              <span className="text-[#4285F4]">M</span>
              <span className="mx-2"></span>
              <span className="text-[#0F9D58]">M</span>
              <span className="text-[#DB4437]">E</span>
              <span className="text-[#4285F4]">M</span>
              <span className="text-[#F4B400]">B</span>
              <span className="text-[#DB4437]">E</span>
              <span className="text-[#4285F4]">R</span>
              <span className="text-[#0F9D58]">S</span>
            </span>
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#4285F4] via-[#DB4437] to-[#0F9D58]"></div>
          </motion.h1>

          <div className="relative w-full">
            <div className="overflow-hidden">
              <motion.div 
                className="flex"
                animate={{
                  x: `-${currentIndex * (100/3)}%`
                }}
                transition={{
                  type: "spring",
                  stiffness: 50,
                  damping: 20
                }}
                style={{
                  width: `${(teamMembers.length / 4) * 100}%`
                }}
              >
                {teamMembers.map((member, index) => {
                  // Rotate through Google colors for each card
                  const shadowColor = Object.values(googleColors)[index % 4];
                  
                  return (
                    <motion.div 
                      key={index}
                      className="w-1/4 flex-shrink-0 px-4"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="relative">
                        {/* Multiple layered shadows for depth */}
                        <div 
                          className="absolute inset-0 rounded-xl"
                          style={{
                            backgroundColor: shadowColor,
                            opacity: 1,
                            transform: 'translate(12px, 12px)',
                            zIndex: 0
                          }}
                        />
                        <div 
                          className="absolute inset-0 rounded-xl"
                          style={{
                            backgroundColor: shadowColor,
                            opacity: 0.1,
                            transform: 'translate(6px, 6px)',
                            zIndex: 1
                          }}
                        />
                        
                        {/* Main card */}
                        <div className="relative w-full bg-[#232936] rounded-xl p-6 shadow-lg z-10">
                          <div className="flex flex-col items-center">
                            <motion.div 
                              className="relative w-32 h-32 mb-4"
                              whileHover={{ scale: 1.05 }}
                            >
                              {/* Profile image shadow ring */}
                              <div 
                                className="absolute inset-0 rounded-full"
                                style={{
                                  backgroundColor: shadowColor,
                                  opacity: 0.3,
                                  transform: 'scale(1.05)',
                                  filter: 'blur(8px)'
                                }}
                              />
                              <Image
                                src={member.profile}
                                alt={`${member.name}'s profile`}
                                width={128}
                                height={128}
                                className="rounded-full border-4 border-[#2a303c] shadow-md relative z-10"
                              />
                            </motion.div>
                            
                            <h2 className="text-xl font-bold text-white mb-1">{member.name}</h2>
                            <p className="text-sm text-gray-400 mb-4">{member.role}</p>
                            
                            <div className="flex gap-3">
                              {['instagram', 'twitter', 'linkedin', 'github'].map((platform, i) => (
                                <motion.button
                                  key={i}
                                  className="w-10 h-10 rounded-full bg-[#2a303c] hover:bg-[#323845] flex items-center justify-center transition-colors"
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.95 }}
                                >
                                  <SocialIcon platform={platform} />
                                </motion.button>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrev}
              className="absolute -left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#232936] rounded-full shadow-lg flex items-center justify-center hover:bg-[#2a303c] transition-colors z-20"
            >
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              className="absolute -right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#232936] rounded-full shadow-lg flex items-center justify-center hover:bg-[#2a303c] transition-colors z-20"
            >
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialIcon = ({ platform }) => {
  const icons = {
    instagram: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="24" height="24">
        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
      </svg>
    ),
    twitter: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24" height="24" className="text-black">
        <path d="M459.4 151.7c.3 4.5.3 9.1.3 13.6 0 138.4-105.4 297.5-297.5 297.5-59.3 0-114.3-17.3-160.1-46.9 8.2 1 16.5 1.5 25 1.5 49.1 0 94.3-16.7 130.3-44.7-46.1-.9-85.1-31.2-98.7-72.8 6.5 1.2 13.2 1.8 20.1 1.8 9.8 0 19.4-1.3 28.5-3.7-48.3-9.7-84.7-52.2-84.7-103.1v-1.3c14.2 7.9 30.5 12.7 47.7 13.3-28.3-18.9-46.9-51.1-46.9-87.3 0-19.3 5.2-37.4 14.3-52.9 51.9 63.7 129.5 105.5 216.5 110.5-1.8-7.7-2.7-15.7-2.7-24 0-58.2 47.4-105.6 105.6-105.6 30.4 0 57.8 12.8 77.1 33.3 24.1-4.7 46.7-13.5 66.9-25.5-7.9 24.5-24.3 45-46 58.2 21.1-2.5 41.2-8.1 59.9-16.3-14.1 20.9-31.8 39.3-52.1 54.1z"/>
      </svg>
    ),
    linkedin: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="24" height="24" className="text-black">
        <path d="M100.3 480H7V165h93.3zm-46.6-365C23.6 115 0 91.4 0 64.3 0 28.7 28.7 0 64.3 0c35.6 0 64.3 28.7 64.3 64.3 0 27.1-23.6 50.7-55.6 50.7H53.7zm394.3 365h-93.3V314.6c0-39.5-14.1-66.5-49.5-66.5-27.1 0-43.1 18.3-50.3 35.9-2.6 6.3-3.2 15.1-3.2 23.8V480h-93.3s1.2-292.5 0-323.5h93.3v46c12.4-19.1 34.6-46.3 84.3-46.3 61.5 0 107.5 40.4 107.5 127.5V480z"/>
      </svg>
    ),
    github: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" width="24" height="24" className="text-black">
        <path d="M248 8C111 8 0 119 0 256c0 110.5 71.4 204.5 169.5 237.5 12.4 2.3 16.9-5.4 16.9-12 0-6-0.2-26.8-0.4-48.5-69.1 15.1-83.7-33.3-83.7-33.3-11.3-28.7-27.6-36.4-27.6-36.4-22.6-15.5 1.7-15.2 1.7-15.2 25.1 1.8 38.3 25.7 38.3 25.7 22.3 38.1 58.5 27.1 72.6 20.7 2.3-16.1 8.7-27.1 15.8-33.3-55.1-6.3-113.1-27.5-113.1-122.4 0-27 9.7-49.2 25.6-66.7-2.6-6.3-11.1-31.8 2.4-66.2 0 0 20.8-6.6 68.1 25.2 19.7-5.5 40.8-8.2 61.8-8.3 21 0.1 42.1 2.8 61.8 8.3 47.3-31.8 68.1-25.2 68.1-25.2 13.5 34.4 5 59.9 2.4 66.2 15.9 17.5 25.6 39.7 25.6 66.7 0 94.9-58 116.1-113.1 122.4 8.9 7.7 16.8 22.9 16.8 46.1 0 33.3-0.3 60.1-0.4 68.3 0 6.6 4.5 14.3 17 11.9C424.6 460.5 496 366.5 496 256 496 119 384.9 8 248 8z"/>
      </svg>
    ),
  };

  return icons[platform];
};

export default TeamMemberCards;