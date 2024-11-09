import React, { useRef } from 'react';
import '../styles/clients.css';


const Clients = ({clients}) => {
  const ref = useRef(null);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
    pauseOnHover: true,
    autoplay: true,
    autoplaySpeed: 3000,
    centerPadding: 0,
  };

  return (
    <section className="clients">
    <div className="wrapper">
      <h1 className="heading-1">
        Team <span className="gradient-text">Mentors</span>
      </h1>
      <h3 className="sub-title">What our mentors say!</h3>

      <div className="clientsGrid">
        {clients.map((list, index) => (
          <React.Fragment key={index}>
            <div
        className="relative h-[150px] w-[400px] bg-white border-2 border-[#150015] p-4 my-4 rounded-lg overflow-hidden transition-transform transition-colors transition-shadow hover:translate-y-[-10px] hover:scale-105"
        style={{ boxShadow: `5px 5px 0px 1.5px ${list.color || 'rgba(255, 0, 0, 1)'}` }} >
              <div className="text-xl font-bold my-2 text-black">{list.name}</div>
              <div className="text-lg text-[#201f1f]">{list.review}</div>

              {/* Top-left corner blur */}
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-purple-700 rounded-full blur-[60px] z-10" style={{ backgroundColor: `${list.bgcolor}` }} ></div>

              {/* Top-right corner blur */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-purple-700 rounded-full blur-[60px] z-10" style={{ backgroundColor: `${list.bgcolor}` }}></div>
            </div>
          </React.Fragment>
        ))}
      </div>

    </div>
  </section>

  );
};

export default Clients;