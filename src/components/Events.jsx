import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Events = ({ eventsData }) => {
  const scrollRef = useRef(null);
  const googleColors = ['#4285F4', '#EA4335', '#FBBC05', '#34A853'];

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  const floatKeyframes = `
    @keyframes float {
      0%, 100% { transform: translateY(0) scale(1); }
      50% { transform: translateY(-20px) scale(1.05); }
    }

    .animate-float-slow {
      animation: float 8s ease-in-out infinite;
    }
    
    .animate-float-medium {
      animation: float 6s ease-in-out infinite;
    }
    
    .animate-float-fast {
      animation: float 4s ease-in-out infinite;
    }

    .hide-scrollbar::-webkit-scrollbar {
      display: none;
    }
    
    .hide-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  `;

  return (
    <section style={{
      position: 'relative',
      padding: '5rem 1rem',
      background: 'linear-gradient(to bottom, rgb(17, 24, 39), rgb(31, 41, 55))',
      overflow: 'hidden',
    }}>
      <style>{floatKeyframes}</style>

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
        position: 'relative',
        zIndex: 10,
      }}>
        {/* Heading */}
        <h1 style={{
          marginBottom: '2.5rem',
          fontSize: '3rem',
          fontWeight: 'bold',
          letterSpacing: '0.025em',
          textAlign: 'center',
          position: 'relative',
          color: '#FFFFFF',
        }}>
          <span style={{
            background: 'linear-gradient(to right, #4285F4, #EA4335, #FBBC05, #34A853)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            display: 'inline-block',
          }}>
            EVENTS
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

        {/* Carousel Container */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button
            onClick={scrollLeft}
            style={{
              padding: '1rem',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              color: '#FFFFFF',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(4px)',
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
          >
            <FaChevronLeft size={24} />
          </button>

          <div
            ref={scrollRef}
            className="hide-scrollbar"
            style={{
              display: 'flex',
              gap: '1.5rem',
              overflowX: 'auto',
              padding: '1rem',
              scrollBehavior: 'smooth',
            }}
          >
            {eventsData.map((event, index) => (
              <div
                key={index}
                style={{
                  minWidth: '320px',
                  transform: 'translateY(0)',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-10px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{
                  backgroundColor: 'rgb(31, 41, 55)',
                  borderRadius: '16px',
                  padding: '1.5rem',
                  height: '400px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: `0 10px 30px rgba(0, 0, 0, 0.3), 
                             inset 0 1px 0 rgba(255, 255, 255, 0.1)`,
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    backgroundColor: googleColors[index % googleColors.length],
                    marginBottom: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <span style={{ color: '#FFFFFF', fontSize: '1.5rem', fontWeight: 'bold' }}>
                      {index + 1}
                    </span>
                  </div>

                  <p style={{
                    color: googleColors[index % googleColors.length],
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    marginBottom: '0.5rem',
                  }}>
                    {event.subtitle}
                  </p>

                  <h2 style={{
                    color: '#FFFFFF',
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    marginBottom: '1rem',
                  }}>
                    {event.title}
                  </h2>

                  <p style={{
                    color: 'rgb(156, 163, 175)',
                    fontSize: '0.875rem',
                    lineHeight: '1.5',
                    marginBottom: '1.5rem',
                  }}>
                    {event.description}
                  </p>

                  <button style={{
                    padding: '0.75rem 1.5rem',
                    borderRadius: '8px',
                    backgroundColor: googleColors[index % googleColors.length],
                    color: '#FFFFFF',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                    position: 'absolute',
                    bottom: '1.5rem',
                  }}>
                    Know More
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={scrollRight}
            style={{
              padding: '1rem',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              color: '#FFFFFF',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(4px)',
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
          >
            <FaChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Events;