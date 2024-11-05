import React from 'react'
// import aboutImage from './src/assets/about-image.jpeg'
import { whyChooseUs } from '../../sources'

const About = () => {
  return (
    <section id='about' className="py-12">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className='relative'>
          <div className='overflow-hidden rounded-[50px] relative z-10'>
            {/* Uncomment the image when available */}
            {/* <img src={aboutImage} alt="" className="transition-transform duration-300" /> */}
          </div>
          <div className='absolute bottom-0 left-0 w-full h-[70%] z-20 bg-gradient-to-b from-transparent to-[#your-bg-primary-color] transition-all duration-300' />
        </div>
        <div className='flex flex-col'>
          <h1 className="text-4xl font-semibold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">About us</span>
          </h1>
          <p className='text-gray-700 mt-4'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio vero deleniti eum voluptate. Cumque tempora ipsam consequatur iusto voluptate quod. Provident, in et? Ipsam, quidem expedita repellendus doloribus et odio? Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti numquam iure dolore! Aperiam voluptas at enim quisquam. Totam accusantium iusto temporibus eius maiores rem ullam similique quae incidunt? Fugiat, repellat!
          </p>
          <div className="grid grid-cols-2 gap-8 mt-10 bg-[#your-bg-accent-color] rounded-lg border border-[#your-border-color] p-8">
            {
              whyChooseUs.map((list, index) => (
                <div className='flex items-center bg-[#your-bg-secondary-color] p-6 rounded-lg border border-[#your-border-color] transition-transform duration-300 hover:bg-[#your-bg-muted-color] hover:scale-105' key={index}>
                  <div className="flex items-center justify-center w-10 h-10 mr-4">
                    {list.icon}
                  </div>
                  <h4 className='text-lg font-medium'>{list.title}</h4>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
