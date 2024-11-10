import React from 'react';
import { services } from '@/sources';
import { Link as ScrollLink } from 'react-scroll';

const Services = () => {
  const googleColors = ['#4285F4', '#EA4335', '#FBBC05', '#34A853'];

  const floatKeyframes = `
    @keyframes float {
      0%, 100% { transform: translateY(0) scale(1); }
      50% { transform: translateY(-20px) scale(1.05); }
    }
  `;

  const styles = `
    ${floatKeyframes}
    
    .animate-float-slow {
      animation: float 8s ease-in-out infinite;
    }
    
    .animate-float-medium {
      animation: float 6s ease-in-out infinite;
    }
    
    .animate-float-fast {
      animation: float 4s ease-in-out infinite;
    }

    .service-card {
      transition: transform 0.3s ease-in-out;
    }

    .service-card:hover {
      transform: translateY(-8px);
    }
  `;

  return (
    <section id="services" style={{
      position: 'relative',
      padding: '5rem 0',
      overflow: 'hidden',
      background: 'linear-gradient(to bottom, rgb(17, 24, 39), rgb(31, 41, 55))', // gray-900 to gray-800
    }}>
      <style>{styles}</style>

      {/* Animated Background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        opacity: 0.1,
      }}>
        <div className="animate-float-slow" style={{
          position: 'absolute',
          width: '16rem',
          height: '16rem',
          borderRadius: '50%',
          backgroundColor: '#4285F4',
          top: '-5rem',
          left: '-5rem',
        }}></div>
        <div className="animate-float-medium" style={{
          position: 'absolute',
          width: '24rem',
          height: '24rem',
          borderRadius: '50%',
          backgroundColor: '#EA4335',
          bottom: '-8rem',
          right: '-8rem',
        }}></div>
        <div className="animate-float-fast" style={{
          position: 'absolute',
          width: '12rem',
          height: '12rem',
          borderRadius: '50%',
          backgroundColor: '#FBBC05',
          top: '50%',
          left: '25%',
        }}></div>
        <div className="animate-float-slow" style={{
          position: 'absolute',
          width: '18rem',
          height: '18rem',
          borderRadius: '50%',
          backgroundColor: '#34A853',
          bottom: '25%',
          right: '33%',
        }}></div>
      </div>

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem',
        position: 'relative',
        zIndex: 10,
      }}>
        <h1 style={{
          marginBottom: '2.5rem',
          fontSize: '3rem',
          fontWeight: 'bold',
          letterSpacing: '0.025em',
          textAlign: 'center',
          position: 'relative',
        }}>
          <span style={{
            background: 'linear-gradient(to right, #4285F4, #EA4335, #FBBC05, #34A853)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            display: 'inline-block',
          }}>
            Why Choose Us
          </span>
          <span style={{
            position: 'absolute',
            bottom: '-4px',
            left: '0',
            width: '100%',
            height: '4px',
            background: 'linear-gradient(to right, #4285F4, #EA4335, #FBBC05, #34A853)',
            borderRadius: '2px',
          }}></span>
        </h1>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          padding: '1rem',
        }}>
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div style={{
                height: '100%',
                backgroundColor: 'rgb(31, 41, 55)', // gray-800
                border: '1px solid rgb(55, 65, 81)', // gray-700
                borderRadius: '12px',
                position: 'relative',
                boxShadow: `-8px 10px 0px 2px ${googleColors[index % googleColors.length]}`,
              }}>
                <div style={{
                  height: '64px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: '1rem',
                  color: '#FFFFFF',
                }}>
                  {service.icon}
                </div>
                
                <div style={{
                  padding: '1.5rem',
                }}>
                  <h3 style={{
                    marginBottom: '0.75rem',
                    fontSize: '1.25rem',
                    fontWeight: 'bold',
                    color: '#FFFFFF',
                  }}>
                    {service.name}
                  </h3>
                  
                  <p style={{
                    color: '#9CA3AF', // gray-400
                    marginBottom: '1.5rem',
                  }}>
                    {service.description}
                  </p>
                  
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: 'auto',
                  }}>
                    <button style={{
                      padding: '0.5rem 1rem',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      backgroundColor: 'transparent',
                      color: '#FFFFFF',
                      border: `2px solid ${googleColors[index % googleColors.length]}`,
                      borderRadius: '8px',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                    }}>
                      Read More
                    </button>
                    
                    <ScrollLink 
                      to="contact" 
                      smooth={true}
                      style={{
                        padding: '0.5rem 1rem',
                        fontSize: '0.875rem',
                        fontWeight: '500',
                        backgroundColor: googleColors[index % googleColors.length],
                        color: '#FFFFFF',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                      }}
                    >
                      Get Started
                    </ScrollLink>
                  </div>
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