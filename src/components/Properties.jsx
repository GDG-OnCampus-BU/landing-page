// components/Properties.js
import { useState } from 'react';
import { properties } from '../sources';
import { FaBath, FaBed } from 'react-icons/fa6';
import Image from 'next/image';
import '../styles/properties.css';

const Properties = () => {
    const [itemsToShow, setItemsToShow] = useState(3);

    const handleShowMore = () => {
        setItemsToShow(prevItems => prevItems + 10);
    };

    return (
        <section id="properties" className="py-10">
            <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-center mb-8">
                    <span className="bg-gradient-to-r from-blue-500 to-teal-400 text-transparent bg-clip-text">
                        Our Events
                    </span>
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {properties.slice(0, itemsToShow).map((property, index) => (
                        <div key={index} className="flex flex-col overflow-hidden rounded-lg bg-gray-100 shadow-md">
                            <div className="relative h-64 overflow-hidden">
                                <Image src={property.image} alt={property.title} layout="fill" objectFit="cover" className="transition-transform duration-300 transform hover:scale-110" />
                            </div>
                            <div className="flex-1 p-4">
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="text-lg font-semibold line-clamp-2">{property.title}</h3>
                                    <h1 className="text-xl font-bold text-blue-600">{property.price}</h1>
                                </div>
                                <p className="text-gray-500 text-sm line-clamp-3">{property.description}</p>
                            </div>
                            <div className="bg-gray-200 p-4">
                                <div className="flex justify-between mb-4">
                                    <div className="flex items-center space-x-1 text-sm">
                                        <FaBed />
                                        <span>{property.bedrooms}</span>
                                    </div>
                                    <div className="flex items-center space-x-1 text-sm">
                                        <FaBath />
                                        <span>{property.bathrooms}</span>
                                    </div>
                                </div>
                                <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">View Property</button>
                            </div>
                        </div>
                    ))}
                </div>

                {itemsToShow < properties.length && (
                    <div className="flex justify-center mt-6">
                        <button
                            onClick={handleShowMore}
                            className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition"
                        >
                            Show More
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Properties;
