import React from "react";
import Image from "next/image"; // Use Next.js Image for optimization
import { Link as ScrollLink } from "react-scroll";
import Link from 'next/link'; 
import heroImage from "../assets/realist-footer.png";
import Achievement from "./Achievement";
import "../styles/hero.css";

const Hero = () => {
  return (
    <header id="hero">
      <div className="wrapper">
        <div className="column">
          <h1 className="heading-1">
            <span className="gradient-text">We Are GDG - BU!</span>
          </h1>
          <p className="muted">
            {/* Add any description text here if needed */}
          </p>
          <Achievement />
          <div className="flex-center buttons-wrapper">
            <Link href="#contact" className="btn" passHref>
                Learn more
            </Link>
            <Link href="#properties" className="btn primary" passHref>
              Discover
            </Link>
          </div>
        </div>
        
        <div className="column hero-image">
          <Image src={heroImage} alt="Hero Image" />
        </div>
      </div>
    </header>
  );
};

export default Hero;
