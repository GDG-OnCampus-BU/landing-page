// components/Footer.js
import React from 'react';
import Image from 'next/image';
import { contactOptions, footer } from '../sources';
import footerImage from '../assets/realist-footer.png';
import Logo from '../Commons/Logo';
import SocialHandles from '../Commons/SocialHandles';
import { Link as ScrollLink } from 'react-scroll';

const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-800 text-gray-200 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactOptions.map((option, index) => (
            <div key={index} className="flex items-center space-x-3 p-4 bg-gray-700 rounded-lg">
              <div className="flex items-center justify-center text-blue-500 p-2 rounded-full bg-gray-800">
                {option.icon}
              </div>
              <div>
                <h4 className="text-gray-400 text-sm">{option.title}</h4>
                <h3 className="text-lg font-semibold">{option.value}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <Logo />
            <div className="my-4">
              <Image src={footerImage} alt="Footer Image" width={200} height={100} />
            </div>
            <SocialHandles />
          </div>

          {footer.map((list, index) => (
            <div key={index} className="text-center md:text-left">
              <h3 className="text-gray-400 mb-4">{list.title}</h3>
              {list.routes.map((route, i) => (
                <ScrollLink
                  to={route.id || ''}
                  smooth={true}
                  className="block text-gray-300 hover:text-blue-500 transition-colors cursor-pointer"
                  key={i}
                >
                  {route.name}
                </ScrollLink>
              ))}
            </div>
          ))}
        </div>
        <div className="mt-8 text-center text-gray-400">
          <h4>Copyright &copy; All rights reserved - 2024</h4>
          <p className="text-sm">Built with love by Devanshi Jaiswal</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
