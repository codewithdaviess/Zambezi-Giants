import React, { useRef, useState } from "react";
import { otherTours } from "../data/travelToursData";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";

const TravelTours = () => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <section className="w-full px-4 py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">
            Travel & Tours
          </h2>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className={`p-2 rounded-full transition ${
                isBeginning
                  ? "bg-gray-200 opacity-50 cursor-not-allowed"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              disabled={isBeginning}
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={() => swiperRef.current?.slideNext()}
              className={`p-2 rounded-full transition ${
                isEnd
                  ? "bg-gray-200 opacity-50 cursor-not-allowed"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              disabled={isEnd}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Swiper Section */}
        <Swiper
          spaceBetween={16}
          slidesPerView={"auto"}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={handleSlideChange}
          breakpoints={{
            0: {
              slidesPerView: 1.5,
              centeredSlides: false,
            },
            768: {
              slidesPerView: 3.5,
              centeredSlides: false,
            },
          }}
          className="!overflow-hidden"
        >
          {otherTours.map((tour, index) => {
            const Icon = tour.icon;
            return (
              <SwiperSlide
                key={index}
                className="w-64"
                style={{ width: "256px" }}
              >
                <div className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col items-center justify-center text-center">
                  <Icon className="w-12 h-12 text-[#f38031] mb-4" />
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {tour.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {tour.description}
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default TravelTours;
