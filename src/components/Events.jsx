// pages/index.js

import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Events({eventsData}) {

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -320, // Width of one card
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 320, // Width of one card
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="px-4 py-16 text-white bg-black">
      <div className="container mx-auto">
        <h1 className="mb-10 text-5xl font-bold tracking-wide text-center ]">EVENTS</h1>
        <div className="flex items-center">
          {/* Left Scroll Button */}
          <button
            onClick={scrollLeft}
            className="p-2 text-gray-300 hover:text-white"
          >
            <FaChevronLeft size={30} />
          </button>

          {/* Event Cards */}
          <div
            ref={scrollRef}
            className="flex w-full h-[30rem] space-x-6 overflow-x-auto hide-scrollbar"
            style={{scrollbarWidth:"none"}}
          >
            {eventsData.map((event, index) => (
              <div key={index} className="relative min-w-[320px]">
                {/* Bottom Shadow effect */}
                <div
                  className={`absolute w-[300px] h-[360px] rounded-lg border-4 border-gray-900 ${event.shadowColor}`}
                  style={{
                    left: "6px",
                    top: "12px",
                    background: "#FFD700",
                    boxShadow: "0px 8px 14px rgba(0, 0, 0, 0.3)", // Subtle shadow at the bottom
                    borderRadius: "8px",
                    zIndex: 5,
                  }}
                ></div>
                {/* Card Content */}
                <div
                  className={`relative p-6 rounded-lg shadow-lg overflow-y-auto h-[360px] `}
                  style={{
                    width: "300px",
                    height: "360px",
                    borderRadius: "8px",
                    position: "relative",
                    zIndex: 10,
                    backgroundColor:`${event.color}`,
                  }}
                >
                  <p className="text-sm font-semibold text-gray-500">
                    {event.subtitle}
                  </p>
                  <h2 className="mt-1 text-lg font-bold text-gray-900">
                    {event.title}
                  </h2>
                  <p className="mt-2 text-sm text-gray-700">
                    {event.description}
                  </p>
                  <button className="px-4 py-2 mt-4 font-semibold text-gray-800 transition duration-200 bg-green-100 border-2 border-black rounded-lg hover:bg-green-200">
                    Know More
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Scroll Button */}
          <button
            onClick={scrollRight}
            className="p-2 text-gray-300 hover:text-white"
          >
            <FaChevronRight size={30} />
          </button>
        </div>
      </div>
    </section>
  );
}