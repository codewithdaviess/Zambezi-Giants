import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import destinationData from "../data/destinationData";

const Destinations = () => {
  return (
    <section className="py-12 bg-white">
      <h2 className="text-xl md:text-2xl px-4 font-bold text-left mb-6">
        Popular Destinations
      </h2>

      <Swiper
        spaceBetween={16}
        slidesPerView="auto"
        slidesOffsetBefore={16}
        slidesOffsetAfter={16}
      >
        {destinationData.map((destination, index) => (
          <SwiperSlide
            key={index}
            className="!w-[70%] sm:!w-[45%] md:!w-[30%] lg:!w-[18%]"
          >
            <div className="relative overflow-hidden rounded-lg group h-48">
              <img
                src={destination.image}
                alt={`${destination.city}, ${destination.country}`}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />

              {/* Text overlay */}
              <div className="absolute bottom-2 left-4 z-20 text-white">
                <h3 className="text-md font-semibold">{destination.city}</h3>
                <p className="text-sm">{destination.country}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Destinations;
