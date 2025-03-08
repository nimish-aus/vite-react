import React, { useState } from 'react';
import HeroImage from "@/assets/hero-image.jpg"

// type Props = {}

const HeroSection: React.FC = () => {
    const [formData, setFormData] = useState({
        area: "",
        eventDate: "",
        maxPeople: "",
        minPrice: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSearch = () => {
        console.log("Searching venues with:", formData);
        // You can integrate API calls here
    };

    return (
        <div
            className="relative h-screen bg-cover bg-center flex flex-col items-center justify-center text-white text-center px-4"
            style={{
                backgroundImage: `url(${HeroImage})`,
            }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            <div className="relative z-10">
                <h1 className="text-4xl font-bold mb-4">Find Your Perfect Venue</h1>
                <p className="text-lg mb-6">Book the best venue for your special occasion</p>

                <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-3xl grid grid-cols-1 md:grid-cols-4 gap-4">
                    <input
                        type="text"
                        name="area"
                        placeholder="Enter Area/Property"
                        value={formData.area}
                        onChange={handleChange}
                        className="p-2 border rounded-md text-black"
                    />
                    <input
                        type="date"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleChange}
                        className="p-2 border rounded-md text-black"
                    />
                    <input
                        type="number"
                        name="maxPeople"
                        placeholder="Max People"
                        value={formData.maxPeople}
                        onChange={handleChange}
                        className="p-2 border rounded-md text-black"
                    />
                    <input
                        type="number"
                        name="minPrice"
                        placeholder="Min Price"
                        value={formData.minPrice}
                        onChange={handleChange}
                        className="p-2 border rounded-md text-black"
                    />
                    <button
                        onClick={handleSearch}
                        className="bg-pink-600 text-white py-2 px-4 rounded-md hover:bg-pink-700 transition w-full md:col-span-4"
                    >
                        Search Venues
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;