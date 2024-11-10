import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const Navbar = ({ tabs }) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState(tabs[0]?.id);
  
  // Google's signature colors for the border animation
  const googleColors = ['#4285F4', '#DB4437', '#F4B400', '#0F9D58'];
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % googleColors.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      {/* Animated border - Google colors */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500 opacity-75" />
      
      <nav className={`transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-gray-900'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 
                flex items-center justify-center">
                <span className="text-white font-bold">G</span>
              </div>
              <span className={`font-bold text-xl ${scrolled ? 'text-gray-900' : 'text-white'}`}>
                GDG-BU
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {tabs.map((tab, index) => (
                <ScrollLink
                  key={index}
                  to={tab.id}
                  smooth={true}
                  offset={-70}
                  spy={true}
                  onSetActive={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                    ${scrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white/80 hover:text-white'}
                    ${activeTab === tab.id ? 'bg-white/10 shadow-sm' : 'hover:bg-white/5'}
                    cursor-pointer relative group`}
                >
                  {tab.name}
                  <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 
                    h-0.5 transition-all duration-300 rounded-full
                    ${activeTab === tab.id ? 'w-12 bg-blue-500' : 'w-0 bg-transparent'}
                    group-hover:w-12 group-hover:bg-blue-500/50`} 
                  />
                </ScrollLink>
              ))}
            </div>

            {/* Contact Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <ScrollLink
                to="contact"
                smooth={true}
                className={`hidden md:flex px-6 py-2 rounded-full font-medium transition-all duration-300
                  transform hover:-translate-y-0.5 hover:shadow-lg
                  ${scrolled 
                    ? 'bg-blue-500 text-white hover:bg-blue-600' 
                    : 'bg-white text-gray-900 hover:bg-gray-100'}`}
              >
                Contact Us
              </ScrollLink>

              {/* Mobile menu button */}
              <button
                onClick={() => setOpenSidebar(!openSidebar)}
                className={`md:hidden p-2 rounded-lg transition-colors duration-300
                  ${scrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white hover:text-white/80'}`}
              >
                {openSidebar ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out
          ${openSidebar ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="px-4 pt-2 pb-3 space-y-1">
            {tabs.map((tab, index) => (
              <ScrollLink
                key={index}
                to={tab.id}
                smooth={true}
                offset={-70}
                spy={true}
                onClick={() => setOpenSidebar(false)}
                className={`block px-4 py-2 rounded-lg text-base font-medium transition-colors duration-300
                  ${scrolled 
                    ? 'text-gray-700 hover:text-gray-900 hover:bg-gray-100' 
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'}`}
              >
                {tab.name}
              </ScrollLink>
            ))}
            <ScrollLink
              to="contact"
              smooth={true}
              onClick={() => setOpenSidebar(false)}
              className="block w-full text-center px-4 py-2 rounded-full font-medium bg-blue-500 
                text-white hover:bg-blue-600 transition-colors duration-300"
            >
              Contact Us
            </ScrollLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;