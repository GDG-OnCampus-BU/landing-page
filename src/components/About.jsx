import React from 'react';
import '../styles/about.css';
import { whyChooseUs } from '@/sources';
import Image from 'next/image';

// Uncomment and provide the correct path for the about image
// import aboutImage from '../../assets/about-image.jpeg'; 

const About = () => {
  return (
    <section id='about'>
      <div className="wrapper">
        <div className='column'>
          <div className='picture'>
          </div>
        </div>
        <div className='column'>
          <h1 className="heading-1">
            <span className="gradient-text">About us</span>
          </h1>
          <p className='muted'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Odio vero deleniti eum voluptate. Cumque tempora ipsam consequatur iusto voluptate quod. 
            Provident, in et? Ipsam, quidem expedita repellendus doloribus et odio?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti numquam iure dolore! 
            Aperiam voluptas at enim quisquam. Totam accusantium iusto temporibus 
            eius maiores rem ullam similique quae incidunt? Fugiat, repellat!
          </p>
          <div className="group">
            {whyChooseUs.map((list, index) => (
              <div className='flex-center group-item' key={index}>
                <div className="flex-center icon-wrapper">
                  {list.icon}
                </div>
                <h4 className='title'>{list.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
