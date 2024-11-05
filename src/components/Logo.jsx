import React from 'react';
import Image from 'next/image'; // Import Image from Next.js
import logo_gdg from '../assets/logo_gdg.png'; // Ensure this path is correct

const Logo = () => {
  return (
    <div className="flex items-center gap-2"> {/* Using Tailwind classes for flex layout and gap */}
      <div className="text-primary-accent text-3xl"> {/* Using Tailwind classes for font size and color */}
        <Image 
          src={logo_gdg} 
          alt="GDG BU Logo" 
          width={50} // Set width according to your design
          height={50} // Set height according to your design
          className="rounded" // Add any additional classes you want
        />
      </div>
      <h1 className="text-xl font-bold">GDG BU</h1> {/* Keeping text styling */}
    </div>
  );
};

export default Logo;
