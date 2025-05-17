import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import destinationData from '../data/destinationData';

const Destinations = () => {
  return (
    <section className="py-12 bg-white">
      <h2 className="text-xl md:text-2xl px-4 font-bold text-left mb-6">
        Popular Destinations
      </h2>

      <Swiper
        spaceBetween={0}
        slidesPerView="auto"
        slidesOffsetBefore={16}
        slidesOffsetAfter={16}
      >
        {destinationData.map((destination, index) => (
          <SwiperSlide
            key={index}
            className="!w-[70%] sm:!w-[45%] md:!w-[30%] lg:!w-[18%]"
          >
            <div className="rounded-2xl h-full overflow-hidden group">
              <div className="p-2">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={destination.image}
                    alt={`${destination.city}, ${destination.country}`}
                    className="h-48 w-full shadow-2xl object-cover transform transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-lg font-semibold mt-3">{destination.city}</h3>
                <p className="text-sm text-gray-600">{destination.country}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Destinations;
