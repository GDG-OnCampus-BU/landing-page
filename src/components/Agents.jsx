import React, { useRef } from 'react'
import Slider from 'react-slick'
import { agents } from '@/sources'
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa'

const Agents = () => {
  const ref = useRef(null)
  
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    pauseOnHover: true,
    autoplay: true,
    autoplaySpeed: 3000,
    centerPadding: 0,
    responsive: [
      {
        breakpoint: 900,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  }

  return (
    <section id='agents' className="py-12">
      <div className="max-w-screen-lg mx-auto">
        <h1 className="text-4xl font-semibold text-center mb-8">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">Team Members</span>
        </h1>
        
        <Slider {...settings} className="agent-container" ref={ref}>
          {agents.map((agent, index) => (
            <div key={index} className="p-4 flex flex-col items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto">
                <img src={agent.profile} alt={agent.name} className="transition-transform duration-300 hover:scale-125"/>
              </div>
              <h3 className="text-lg font-medium mt-4 text-center">{agent.name}</h3>
              <p className="text-sm text-gray-500 text-center">{agent.position}</p>
              <div className="flex space-x-4 mt-4">
                {agent.socialHandles.map((handle, i) => (
                  <a key={i} href={handle.url} target='_blank' rel="noopener noreferrer" className="p-2 text-indigo-500 hover:text-purple-500 transition-colors">
                    {handle.icon}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </Slider>

        <div className="flex justify-center space-x-4 mt-6">
          <button className="p-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-700 transition-colors" onClick={() => ref.current.slickPrev()}>
            <FaLongArrowAltLeft />
          </button>
          <button className="p-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-700 transition-colors" onClick={() => ref.current.slickNext()}>
            <FaLongArrowAltRight />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Agents
