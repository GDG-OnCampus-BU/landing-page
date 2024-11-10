import React from 'react';
import { motion } from 'framer-motion';

const Clients = ({ clients }) => {
  const googleColors = ['#4285F4', '#EA4335', '#FBBC05', '#34A853'];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <motion.div 
          className="absolute w-64 h-64 rounded-full bg-blue-500 -top-20 -left-20"
          animate={{
            y: [0, 50, 0],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute w-96 h-96 rounded-full bg-red-500 -bottom-32 -right-32"
          animate={{
            y: [0, -50, 0],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute w-48 h-48 rounded-full bg-yellow-500 top-1/2 left-1/4"
          animate={{
            y: [0, 40, 0],
            x: [0, 40, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute w-72 h-72 rounded-full bg-green-500 bottom-1/4 right-1/3"
          animate={{
            y: [0, -40, 0],
            x: [0, -40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Title with Gradient Text */}
        <motion.h1
  className="text-5xl font-bold tracking-wide text-center relative mb-6 bg-clip-text text-transparent"
  initial={{ opacity: 0.1, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  style={{
    backgroundImage: `linear-gradient(to right, ${googleColors.join(', ')})`,
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
  }}
>
  TEAM MENTORS
</motion.h1>
        {/* Gradient Bar Below the Heading */}
        <motion.div
          className="w-full h-1 rounded-full mb-12"
          style={{
            background: `linear-gradient(to right, ${googleColors[0]}, ${googleColors[1]}, ${googleColors[2]}, ${googleColors[3]})`,
          }}
        />

        <motion.h2 
          className="text-2xl text-center text-gray-300 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          What our mentors say!
        </motion.h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div
                className="bg-[#1f2937] backdrop-blur-lg rounded-xl p-6 border border-white/20 h-full"
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                style={{
                  boxShadow: `5px 5px 0px 1.5px ${client.color || googleColors[index % googleColors.length]}`
                }}
              >
                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-white">{client.name}</h3>
                <p className="text-gray-300">{client.review}</p>

                {/* Decorative blurs */}
                <div 
                  className="absolute bottom-0 left-0 w-24 h-24 rounded-full blur-[60px] opacity-50"
                  style={{ backgroundColor: client.bgcolor || googleColors[index % googleColors.length] }}
                />
                <div 
                  className="absolute top-0 right-0 w-24 h-24 rounded-full blur-[60px] opacity-50"
                  style={{ backgroundColor: client.bgcolor || googleColors[(index + 2) % googleColors.length] }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
