// components/Clients.js
import React, { useRef } from 'react';
import Slider from 'react-slick';
import { FaStar } from 'react-icons/fa';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';

const Clients = () => {
  const ref = useRef(null);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
    pauseOnHover: true,
    autoplay: true,
    autoplaySpeed: 3000,
    centerPadding: '0',
  };




  const clients = [
    {
      image:"client1",
      name:'Kushagra Nigam',
      review:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
             veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
             veniam, quis nostrud exercitation ullamco laborisveniam, quis nostrud 
             exercitation ullamco laboris`
    },
    {
      image:"client2",
      name:'Kavya Mathur',
      review:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
             veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`
    },
    {
      image:"client3",
      name:'Ritesh Sanon',
      review:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
             veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
             veniam, quis nostrud exercitation ullamco laborisveniam, quis nostrud 
             exercitation ullamco laborisveniam, quis nostrud exercitation ullamco laboris`
    },
    {
      image:"client4",
      name:'Arnav Mishra',
      review:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
             veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`
    },
    {
      image:"client5",
      name:'Jaishree Malhotra',
      review:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
             veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`
    },
  
  ];




  return (
    <section id="clients" className="py-10 bg-gray-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold mb-2">
          Team <span className="text-gradient">Mentors</span>
        </h1>
        <h3 className="text-xl text-gray-600 mb-8">What our mentors say!</h3>
        <Slider {...settings} className="mt-6" ref={ref}>
          {clients.map((list, index) => (
            <div
              key={index}
              className="bg-gray-800 text-white rounded-lg p-8 mx-4 flex flex-col items-start transition-transform duration-300 hover:bg-gray-700"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <img
                    src={list.image}
                    alt={list.name}
                    className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-70"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{list.name}</h3>
                  <small className="text-gray-400">CEO of benvix</small>
                </div>
              </div>
              <p className="text-gray-300 mb-6">{list.review}</p>
              <div className="flex space-x-1 text-yellow-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </div>
          ))}
        </Slider>
        <div className="flex justify-center space-x-4 mt-8">
          <button
            className="bg-blue-500 text-white p-3 rounded-full hover:bg-gradient-to-r from-blue-500 to-teal-400 transition"
            onClick={() => ref.current.slickPrev()}
          >
            <FaLongArrowAltLeft />
          </button>
          <button
            className="bg-blue-500 text-white p-3 rounded-full hover:bg-gradient-to-r from-blue-500 to-teal-400 transition"
            onClick={() => ref.current.slickNext()}
          >
            <FaLongArrowAltRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Clients;
