// components/Footer.js
import React from "react";
import Image from "next/image";
import { contactOptions, footer } from "../sources";
import footerImage from "../assets/realist-footer.png"
import Logo from "./Logo";
import SocialHandles from "../Commons/SocialHandles/index";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  return (
    <footer id="footer" className="py-10 text-gray-200 bg-gray-800">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {contactOptions.map((option, index) => (
            <div
              key={index}
              className="flex items-center p-4 space-x-3 bg-gray-700 rounded-lg"
            >
              <div className="flex items-center justify-center p-2 text-blue-500 bg-gray-800 rounded-full">
                {option.icon}
              </div>
              <div>
                <h4 className="text-sm text-gray-400">{option.title}</h4>
                <h3 className="text-lg font-semibold">{option.value}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-8 mt-10 border-t border-gray-700">
        <div className="grid grid-cols-1 gap-8 px-4 mx-auto max-w-7xl md:grid-cols-3">
          <div className="flex flex-col items-center md:items-start">
            <Logo />
            <div className="my-4">
              <Image
                src={footerImage}
                alt="Footer Image"
                width={200}
                height={100}
              />
            </div>
            <SocialHandles />
          </div>

          {footer.map((list, index) => (
            <div key={index} className="text-center md:text-left">
              <h3 className="mb-4 text-gray-400">{list.title}</h3>
              {list.routes.map((route, i) => (
                <ScrollLink
                  to={route.id || ""}
                  smooth={true}
                  className="block text-gray-300 transition-colors cursor-pointer hover:text-blue-500"
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
