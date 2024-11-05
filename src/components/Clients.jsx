import React, { useRef } from 'react';
import Slider from 'react-slick';
import { FaStar } from 'react-icons/fa';
import { clients } from '@/sources';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';
import '../styles/clients.css';
import Image from 'next/image';

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
    centerPadding: 0,
  };

  return (
    <section id='clients'>
      <div className="wrapper">
        <h1 className="heading-1">
          Team <span className="gradient-text">Mentors</span>
        </h1>
        <h3 className="sub-title">What our mentors say!</h3>
        <Slider {...settings} className="clients-container" ref={ref}>

          {clients.map((list, index) => (
            <React.Fragment key={index}>
              <div className="flex">
                <div className="profile">
                  <Image src={list.image} alt={list.name} />
                </div>
                <div className="details">
                  <h3 className="name">{list.name}</h3>
                  <small className="muted">CEO of benvix</small>
                </div>
              </div>
              <p className="muted content">{list.review}</p>
              <div className="star-container flex">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </React.Fragment>
          ))}
        </Slider>
        <div className="flex-center buttons-container">
          <button
            className="flex-center btn"
            onClick={() => ref.current.slickPrev()}
          >
            <FaLongArrowAltLeft />
          </button>
          <button
            className="flex-center btn"
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
