import React from 'react';
import Image from 'next/image';  // Use Next.js Image for optimization
import { Link as ScrollLink } from 'react-scroll';
import heroImage from '@/assets/realist-footer.png';
import Achievement from '@/components/Commons/Achievement';

const Hero = () => {
  return (
    <header id="hero" className="overflow-hidden">
      <div className="wrapper grid gap-5 md:grid-cols-[auto_400px] lg:grid-cols-[auto_300px]">
        
        {/* Text Column */}
        <div className="column flex flex-col justify-center">
          <h1 className="text-4xl font-bold gradient-text">
            We Are GDG - BU!
          </h1>
          <p className="muted text-gray-600 mt-4">
            {/* Add subtitle text if needed */}
          </p>
          <Achievement />
          
          {/* Buttons */}
          <div className="buttons-wrapper flex mt-10 gap-5">
            <ScrollLink to="contact" smooth={true} className="btn px-6 py-3 bg-gray-800 text-white rounded-md">
              Learn more
            </ScrollLink>
            <ScrollLink to="properties" smooth={true} className="btn primary px-6 py-3 bg-blue-600 text-white rounded-md">
              Discover
            </ScrollLink>
          </div>
        </div>
        
        {/* Hero Image */}
        <div className="column hero-image relative">
          <Image src={heroImage} alt="Hero" layout="responsive" className="object-cover" />
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-primary"></div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
