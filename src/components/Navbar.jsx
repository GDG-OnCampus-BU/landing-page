import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { HiMenu } from "react-icons/hi";
import Logo from "./Logo";
import SocialHandles from "@/Commons/SocialHandles";
import { tabs } from "@/sources";
import '../styles/navbar.css';

const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <nav className="navbar flex items-stretch justify-between bg-secondary border-b border-border-primary sticky top-0 z-50 px-5 py-2">
      {/* Overlay */}
      {openSidebar && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setOpenSidebar(false)}
        />
      )}

      {/* Logo */}
      <Logo />

      {/* Navigation Tabs */}
      <div
        className={`tabs-group flex items-center space-x-4 ${openSidebar ? "sidebar fixed top-0 left-0 h-full w-80 bg-secondary flex-col justify-start items-center p-5 transform translate-x-0 transition-all duration-300 z-50" : "hidden md:flex"}`}
      >
        {tabs.map((tab, index) => (
          <ScrollLink
            key={index}
            to={tab.id}
            smooth={true}
            offset={-70}
            spy={true}
            className="tab px-4 py-2 rounded-lg text-muted-foreground hover:text-foreground cursor-pointer transition-all"
            activeClass="bg-accent border border-border-primary"
          >
            {tab.name}
          </ScrollLink>
        ))}
      </div>

      {/* Social Handles */}
      <SocialHandles className="hidden md:flex" />

      {/* Action Buttons */}
      <div className="buttons flex items-center space-x-5">
        <ScrollLink
          to="services"
          smooth={true}
          className="services-btn hidden lg:inline-block px-4 py-2 btn btn-secondary"
        >
          Services
        </ScrollLink>
        <ScrollLink
          to="contact"
          smooth={true}
          className="btn primary contact-btn px-4 py-2 "
        >
          Contact Us
        </ScrollLink>
        {/* Sidebar Toggle Button */}
        <div
          className="menu-btn md:hidden flex items-center cursor-pointer text-2xl"
          onClick={() => setOpenSidebar(!openSidebar)}
        >
          <HiMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
