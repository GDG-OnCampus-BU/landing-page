import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import Logo from "./Logo";
import SocialHandles from "@/Commons/SocialHandles";
import "../styles/navbar.css";

const Navbar = ({ tabs }) => {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="google-dynamic-border">
    <nav className="navbar flex items-center justify-between bg-secondary border-b border-border-primary sticky top-0 z-50 px-5 py-3 shadow-md">
      {/* Overlay */}
      {openSidebar && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 transition-opacity duration-300"
          onClick={() => setOpenSidebar(false)}
        />
      )}

      {/* Logo */}
      <Logo />

      {/* Navigation Tabs */}
      <div
        className={`tabs-group flex items-center md:space-x-0 space-x-0 ${openSidebar ? "sidebar" : "hidden md:flex"}`}
      >
        {tabs.map((tab, index) => (
          <ScrollLink
            key={index}
            to={tab.id}
            smooth={true}
            offset={-70}
            spy={true}
            className="tab px-4 py-2 rounded-md text-muted-foreground hover:text-primary cursor-pointer transition-all duration-200 ease-in-out"
            activeClass="active-tab"
          >
            {tab.name}
          </ScrollLink>
        ))}
      </div>

      {/* Social Handles */}
      <SocialHandles className="hidden md:flex" />

      {/* Action Buttons */}
      <div className="google-dynamic-border-btn buttons flex items-center space-x-5">
        <ScrollLink
          to="contact"
          smooth={true}
          className="px-4 py-2 bg-white text-black rounded-lg hover:bg-grey-700 transition duration-300"
          style={{borderRadius:"20px"}}
        >
          Contact Us
        </ScrollLink>

      </div>
    </nav>
    </div>
  );
};

export default Navbar;
