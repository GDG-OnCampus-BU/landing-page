import React, { useEffect, useRef } from 'react';
import { whyChooseUs } from '@/sources';
import Image from 'next/image';
import { motion, useInView, useAnimation } from 'framer-motion';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Google-inspired floating shapes background */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute w-64 h-64 rounded-full bg-blue-500 -top-20 -left-20 animate-float-slow"></div>
        <div className="absolute w-96 h-96 rounded-full bg-red-500 -bottom-32 -right-32 animate-float-medium"></div>
        <div className="absolute w-48 h-48 rounded-full bg-yellow-500 top-1/2 left-1/4 animate-float-fast"></div>
        <div className="absolute w-72 h-72 rounded-full bg-green-500 bottom-1/4 right-1/3 animate-float-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative" ref={ref}>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 }
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500">
              About Us
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Features Grid */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -75 },
              visible: { opacity: 1, x: 0 }
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="grid grid-cols-2 gap-6"
          >
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700 group"
              >
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-white text-lg font-semibold mb-2">{item.title}</h3>
                <div className="w-8 h-0.5 bg-blue-500 transform origin-left group-hover:scale-x-150 transition-transform duration-300"></div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Column - Text Content */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 75 },
              visible: { opacity: 1, x: 0 }
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.75 }}
            className="space-y-6"
          >
            <p className="text-gray-300 leading-relaxed text-lg">
              GDG-BU is a vibrant community of developers, designers, and tech enthusiasts passionate about Google technologies and innovation. We foster learning, collaboration, and growth through workshops, hackathons, and tech talks.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              Our mission is to create an inclusive environment where technology meets creativity, enabling members to expand their skills, network with industry professionals, and build amazing projects together.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white font-medium hover:shadow-lg transition-all duration-300"
            >
              Join Our Community
            </motion.button>
          </motion.div>
        </div>

        {/* Achievement Numbers */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 }
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
        >
          {[
            { number: "500+", label: "Members" },
            { number: "50+", label: "Events" },
            { number: "100+", label: "Projects" },
            { number: "20+", label: "Partners" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-gray-800 rounded-xl border border-gray-700"
            >
              <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-600">
                {stat.number}
              </h3>
              <p className="text-gray-400 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;