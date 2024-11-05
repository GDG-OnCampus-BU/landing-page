// components/Services.js
import React from 'react';
import { services } from '../sources';
import { Link as ScrollLink } from 'react-scroll';
import '../styles/services.css';

const Services = () => {
  return (
    <section id="services">
      <div className="wrapper">
        <h1 className="heading-1">
          <span className="gradient-text">Why Choose Us!</span>
        </h1>
        <div className="services-container">
          {services.map((service, index) => (
            <div className="service" key={index}>
              <div className="flex-center icon-wrapper">
                {service.icon}
              </div>
              <div className="details">
                <h3>{service.name}</h3>
                <p className="muted">{service.description}</p>
              </div>
              <div className="flex buttons-wrapper">
                <button className="btn">Read More</button>
                <ScrollLink to="contact" smooth={true} className="btn">
                  Get Started
                </ScrollLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
