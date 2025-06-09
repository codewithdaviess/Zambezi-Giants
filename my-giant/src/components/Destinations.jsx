import React, { useState } from "react";
import destinationData from "../data/destinationData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";

const categories = ["All", "Popular", "Recommended", "Most Viewed"];

const Destinations = () => {
  const [activeCategory, setActiveCategory] = useState("Popular");

  const filteredDestinations =
    activeCategory === "All"
      ? destinationData
      : destinationData.filter((dest) => dest.category === activeCategory);

  return (
    <section className="py-12 bg-white">
      <h2 className="text-2xl md:text-2xl font-bold text-gray-800 px-4 mb-6">
        {activeCategory} Destinations
      </h2>

      {/* Category Tabs Swiper */}
      <div className="mb-6 px-4">
        <Swiper
          spaceBetween={12}
          slidesPerView={"auto"}
          freeMode={true}
          modules={[FreeMode]}
        >
          {categories.map((category) => (
            <SwiperSlide key={category} style={{ width: "auto" }} className="!w-auto">
              <button
                onClick={() => setActiveCategory(category)}
                className={`py-1 px-3 rounded-full text-sm font-medium border transition-colors whitespace-nowrap ${
                  activeCategory === category
                    ? "bg-[#f38031] text-white"
                    : "bg-white text-black border-gray-300"
                }`}
              >
                {category}
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Destination Cards Swiper */}
      <div className="px-4">
        <Swiper
          spaceBetween={16}
          slidesPerView={"auto"}
          freeMode={true}
          modules={[FreeMode]}
        >
          {filteredDestinations.map((destination, index) => (
            <SwiperSlide
              key={index}
              style={{ width: "240px", maxWidth: "100%" }}
              className="flex-shrink-0 rounded-lg overflow-hidden group relative"
            >
              <img
                src={destination.image}
                alt={`${destination.city}, ${destination.country}`}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />
              <div className="absolute bottom-2 left-3 z-20 text-white">
                <h3 className="text-md font-semibold">{destination.city}</h3>
                <p className="text-sm">{destination.country}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Destinations;
