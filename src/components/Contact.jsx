// components/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-10 bg-gray-100">
      <div className="max-w-3xl mx-auto px-6">
        <div className="bg-gray-800 p-10 rounded-lg text-white">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-500 to-teal-400 text-transparent bg-clip-text">
                Join forces with us!
              </span>
            </h1>
            <p className="text-gray-300">
              We build with precision and passion, creating structures that stand the test of time. It’s as straightforward as that!
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:space-x-4">
              <input 
                type="text" 
                placeholder="First name" 
                name="firstname" 
                className="flex-1 p-4 bg-gray-700 rounded-md text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 border border-gray-600"
              />
              <input 
                type="text" 
                placeholder="Last name" 
                name="lastname" 
                className="flex-1 p-4 bg-gray-700 rounded-md text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 border border-gray-600 mt-4 sm:mt-0"
              />
            </div>
            
            <div className="flex flex-col sm:flex-row sm:space-x-4">
              <input 
                type="email" 
                placeholder="Email address" 
                name="email" 
                className="flex-1 p-4 bg-gray-700 rounded-md text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 border border-gray-600"
              />
              <input 
                type="tel" 
                placeholder="Phone number" 
                name="phone" 
                className="flex-1 p-4 bg-gray-700 rounded-md text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 border border-gray-600 mt-4 sm:mt-0"
              />
            </div>
            
            <textarea 
              name="message" 
              rows={6} 
              placeholder="Message" 
              className="w-full p-4 bg-gray-700 rounded-md text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 border border-gray-600 resize-none"
            ></textarea>
          </div>
          
          <div className="text-center mt-8">
            <button className="px-8 py-4 bg-blue-500 rounded-md text-white font-bold hover:bg-blue-600 transition w-full sm:w-auto">
              Send Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
