import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="relative min-h-screen py-20 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
      {/* Floating shapes background */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute w-64 h-64 rounded-full bg-blue-500 -top-20 -left-20 animate-[float_8s_ease-in-out_infinite]"></div>
        <div className="absolute w-96 h-96 rounded-full bg-red-500 -bottom-32 -right-32 animate-[float_12s_ease-in-out_infinite]"></div>
        <div className="absolute w-48 h-48 rounded-full bg-yellow-500 top-1/2 left-1/4 animate-[float_6s_ease-in-out_infinite]"></div>
        <div className="absolute w-72 h-72 rounded-full bg-green-500 bottom-1/4 right-1/3 animate-[float_10s_ease-in-out_infinite]"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700 shadow-[4px_4px_0_0_rgba(66,133,244,1),8px_8px_0_0_rgba(219,68,55,1),12px_12px_0_0_rgba(244,180,0,1),16px_16px_0_0_rgba(15,157,88,1)]">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              <span className="text-[#4285F4]">Join </span>
              <span className="text-[#DB4437]">forces </span>
              <span className="text-[#F4B400]">with </span>
              <span className="text-[#0F9D58]">us!</span>
            </h1>
            <p className="text-gray-300 text-lg">
              We build with precision and passion,
              creating structures that stand the test of time. It's as straightforward as that!
            </p>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="relative group">
                <input
                  type="text"
                  placeholder="First name"
                  name="firstname"
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4285F4] focus:border transition duration-200"
                  required
                />
              </div>
              <div className="relative group">
                <input
                  type="text"
                  placeholder="Last name"
                  name="lastname"
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4285F4] focus:border-transparent transition duration-200"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="relative group">
                <input
                  type="email"
                  placeholder="Email address"
                  name="email"
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4285F4] focus:border-transparent transition duration-200"
                  required
                />
              </div>
              <div className="relative group">
                <input
                  type="tel"
                  placeholder="Phone number"
                  name="phone"
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4285F4] focus:border-transparent transition duration-200"
                />
              </div>
            </div>

            <div className="relative group">
              <textarea
                name="message"
                rows={4}
                placeholder="Message"
                className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4285F4] focus:border-transparent transition duration-200 resize-none"
              ></textarea>
            </div>

            <div className="text-center">
            <button className="group relative overflow-hidden px-8 py-3 bg-gradient-to-r from-[#4285F4] via-[#DB4437] to-[#4285F4] bg-size-200 hover:bg-right-bottom text-white font-semibold rounded-lg transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-[0_20px_35px_rgba(66,133,244,0.3)]">
                <div className="absolute inset-0 bg-gradient-to-r from-[#4285F4]/20 via-transparent to-[#4285F4]/20 blur-xl transition-transform duration-500 group-hover:translate-x-full"></div>
                <div className="relative flex items-center justify-center gap-2">
                  <span className="text-lg">Send Now</span>
                  <svg 
                    className="w-5 h-5 transform transition-transform duration-500 group-hover:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M14 5l7 7m0 0l-7 7m7-7H3" 
                    />
                  </svg>
                </div>
                <div className="absolute inset-0 rounded-lg transition-all duration-500 group-hover:ring-4 ring-[#4285F4]/30"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;