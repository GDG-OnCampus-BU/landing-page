import React, { useState, useEffect } from 'react';
// import agent1 from '../assets/agent-1.jpeg';
// import agent2 from '../assets/agent-2.jpeg';
// import agent3 from '../assets/agent-3.jpeg';
// import agent4 from '../assets/agent-4.jpeg';
// import agent5 from '../assets/agent-5.jpeg';
// import agent6 from '../assets/agent-6.jpeg';
import Image from 'next/image';

const TeamMemberCards = ({teamMembers}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? teamMembers.length - 4 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === teamMembers.length - 4 ? 0 : prev + 1));
  };

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === teamMembers.length - 4 ? 0 : prev + 1));
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [teamMembers.length]);

  return (
    <div id="teammembercard" className="w-full max-w-[1300px] mx-auto p-4">
      <h1 className="mb-10 text-5xl font-bold tracking-wide text-center ]">Team Members</h1>
      <div className="relative">
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ 
              transform: `translateX(-${currentIndex * (100 / 4)}%)`,
              width: `${(teamMembers.length / 4) * 100}%`
            }}
          >
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="w-1/4 flex-shrink-0 px-4 transition-transform transform hover:scale-105 hover:shadow-lg"
              >
                <div className="relative w-full h-[180px] mb-6 transition-all duration-300 hover:bg-gray-100">
                  <div 
                    className="absolute -bottom-3 left-3 right-3 h-[30px] rounded-[50%]"
                    style={{
                      background: member.shadowColor,
                      filter: 'blur(10px)',
                      transform: 'translateY(8px)',
                      transition: 'transform 0.3s ease',
                    }}
                  />
                  <div 
                    className="absolute inset-0 rounded-lg"
                    style={{
                      transform: 'translate(10px, 10px)',
                      background: member.bgGradient,
                    }}
                  />
                  <div className="absolute inset-0 bg-white rounded-lg border-4 border-gray-900 transition-all duration-300 hover:border-gray-600"
                    style={{
                      border: '3px solid black',
                    }}
                  >
                    <div className="flex p-4 gap-4 h-full">
                      <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-900 flex-shrink-0 transition-transform duration-300 hover:scale-110">
                      <Image
                        src={member.profile}
                        alt={`${member}'s profile`}
                        width={150}
                        height={150}
                        className=""
                      />
                      </div>
                      <div className="flex flex-col justify-between flex-1">
                        <div>
                          <h2 className="text-lg font-bold text-black">{member.name}</h2>
                          <p className="text-sm text-gray-800">{member.role}</p>
                        </div>
                        <div className="flex gap-2">
                          {['instagram', 'twitter', 'linkedin', 'github'].map((platform, i) => (
                            <div 
                              key={i}
                              className="relative w-8 h-8 rounded-full bg-white border border-gray-900 flex items-center justify-center cursor-pointer transition-transform hover:bg-gray-50"
                              style={{
                                boxShadow: `${member.shadowColor} 0px 4px 8px`,
                                transition: 'transform 0.3s ease',
                              }}
                            >
                              <SocialIcon platform={platform} />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={handlePrev}
          className="absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full border border-gray-900 flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
          style={{ border: '3px solid black' }}
        >
          <svg className="w-5 h-5 text-gray-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full border border-gray-900 flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
          style={{ border: '3px solid black' }}
        >
          <svg className="w-5 h-5 text-gray-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

const SocialIcon = ({ platform }) => {
  const icons = {
    instagram: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="24" height="24">
        {/* Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
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