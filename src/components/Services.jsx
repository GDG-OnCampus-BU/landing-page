import React from 'react';
import { services } from '@/sources';
import { Link as ScrollLink } from 'react-scroll';
import '../styles/services.css';

const Services = () => {
  const borderColors = ['#00FF00', '#FF0000', '#0000FF', '#FFFF00']; // Green, Red, Blue, Yellow

  return (
    <section id="services">
      <div className="wrapper">
        <h1 className="heading-1">
        <h1 className="mb-10 text-5xl font-bold tracking-wide text-center ]">Why Choose Us</h1>
        </h1>
        <div className="services-container" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gridGap: '30px'
        }}>
          {services.map((service, index) => (
            <div key={index} style={{
            }}>
              <div className="service" style={{
                height: '100%',
                width: '100%',
                backgroundColor: '#FFFFFF',
                border: '3px solid black',
                borderRadius: '8px 8px 8px 8px',
                position: 'relative',
                boxShadow: `-8px 10px 0px 2px ${borderColors[index % borderColors.length]}`,
                
                margin: 0,
                padding: 0
              }}>
                <div className="flex-center icon-wrapper" style={{
                  height: '50px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin:"10px",
                }}>
                  {service.icon}
                </div>
                <div className="details" style={{
                  padding: '16px'
                }}>
                  <h3 style={{
                    marginBottom: '8px',
                    fontSize: '18px',
                    fontWeight: 'bold'
                  }}>{service.name}</h3>
                  <p className="muted" style={{
                    fontSize: '14px',
                    color: '#666'
                  }}>{service.description}</p>
                </div>
                <div className="flex buttons-wrapper" style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '0 16px 16px 0',
                  marginTop: 'auto',
                  alignItems: 'center'
                }}>
                  <button className="btn" style={{
                    marginLeft:'10px',
                    fontSize: '14px',
                    padding: '8px 16px',
                    backgroundColor: '#FFFFFF',
                    color: '#1F1F1F',
                    border: `4px solid ${borderColors[index % borderColors.length]}`,
                    borderRight: 0,
                    borderTop: 0,
                    borderRadius: '8px 0 8px 0',
                    cursor: 'pointer'
                  }}>Read More</button>
                  <ScrollLink to="contact" smooth={true} className="btn" style={{
                    fontSize: '14px',
                    padding: '8px 16px',
                    backgroundColor: '#FFFFFF',
                    color: '#1F1F1F',
                    border: `4px solid ${borderColors[index % borderColors.length]}`,
                    borderRight: 0,
                    borderTop: 0,
                    borderRadius: '8px 0 8px 0',
                    cursor: 'pointer'
                  }}>
                    Get Started
                  </ScrollLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;