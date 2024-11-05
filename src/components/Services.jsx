// components/Services.js
import React from 'react';
import { services } from '../sources';
import { Link as ScrollLink } from 'react-scroll';

const Services = () => {
    return (
        <section id="services" className="py-10">
            <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-center mb-8">
                    <span className="bg-gradient-to-r from-blue-500 to-teal-400 text-transparent bg-clip-text">
                        Why Choose Us!
                    </span>
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105 flex flex-col justify-between"
                        >
                            <div className="flex items-center justify-center mb-4 text-blue-500">
                                {service.icon}
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                                <p className="text-gray-500">{service.description}</p>
                            </div>
                            <div className="mt-6 flex space-x-4">
                                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                                    Read More
                                </button>
                                <ScrollLink
                                    to="contact"
                                    smooth={true}
                                    className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition cursor-pointer"
                                >
                                    Get Started
                                </ScrollLink>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
