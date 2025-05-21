import React, { useState } from "react";
import destinationData from "../data/destinationData";

const categories = ["All", "Popular", "Recommended", "Most Viewed"];

const Destinations = () => {
  const [activeCategory, setActiveCategory] = useState("Popular");

  const filteredDestinations =
    activeCategory === "All"
      ? destinationData
      : destinationData.filter((dest) => dest.category === activeCategory);

  return (
    <section className="py-12 bg-white">
      <h2 className="text-xl md:text-2xl px-4 font-bold text-left mb-6">
        {activeCategory} Destinations
      </h2>

      {/* Category Tabs */}
      <div className="flex space-x-3 px-4 mb-6 overflow-x-auto">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`py-1 px-4 whitespace-nowrap rounded-full text-sm font-medium border transition-colors ${
              activeCategory === category
                ? "bg-black text-white"
                : "bg-white text-black border-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Horizontal Scroll Slider */}
      <div className="overflow-x-auto px-4">
        <div className="flex space-x-4 w-max">
          {filteredDestinations.map((destination, index) => (
            <div
              key={index}
              className="min-w-[240px] sm:min-w-[260px] md:min-w-[280px] lg:min-w-[300px] flex-shrink-0 rounded-lg overflow-hidden group relative"
            >
              <img
                src={destination.image}
                alt={`${destination.city}, ${destination.country}`}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />

              {/* Text overlay */}
              <div className="absolute bottom-2 left-3 z-20 text-white">
                <h3 className="text-md font-semibold">{destination.city}</h3>
                <p className="text-sm">{destination.country}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
