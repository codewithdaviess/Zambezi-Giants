import React, { useState, useRef } from "react";
import destinationData from "../data/destinationData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

const categories = ["All", "Popular", "Recommended", "Most Viewed"];

const Destinations = () => {
  // State for currently selected category tab
  const [activeCategory, setActiveCategory] = useState("Popular");

  // Reference to the Swiper instance controlling destination cards
  const swiperRef = useRef(null);

  // State to track if swiper is at beginning or end (for disabling nav buttons)
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  // Currently active slide index in the destination swiper
  const [activeIndex, setActiveIndex] = useState(0);

  // Filter destinations based on selected category
  const filteredDestinations =
    activeCategory === "All"
      ? destinationData
      : destinationData.filter((dest) => dest.category === activeCategory);

  // Update swiper-related states on slide change
  const handleSlideChange = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
    setActiveIndex(swiper.activeIndex);
  };

  // Number of pagination dots shown below arrows
  const totalDots = 3;
  const totalSlides = filteredDestinations.length;

  // Logic to calculate which dot should appear active based on current slide
  const getCurrentDot = () => {
    const visibleSlides = 2; // How many slides visible on small screens
    const midpoint = Math.floor(totalDots / 2);

    if (totalSlides <= totalDots) return activeIndex;

    if (activeIndex <= midpoint) return activeIndex;
    if (activeIndex >= totalSlides - midpoint - visibleSlides + 1)
      return totalDots - (totalSlides - activeIndex);

    return midpoint;
  };

  return (
    <section className="py-12 bg-white">
      {/* Header with current category title and navigation arrows + pagination dots */}
      <div className="flex items-center justify-between px-4 mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800">
          {activeCategory} Destinations
        </h2>

        <div className="flex items-center space-x-3">
          {/* Previous slide button, disabled when at beginning */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className={`p-2 rounded-full transition ${
              isBeginning
                ? "bg-gray-100 opacity-50"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            <ChevronLeft size={20} />
          </button>

          {/* Pagination dots showing current slide group */}
          <div className="flex items-center space-x-2">
            {[...Array(totalDots)].map((_, dotIndex) => {
              const currentDot = getCurrentDot();
              // Calculate which slide index corresponds to each dot
              const actualSlideIndex = activeIndex - currentDot + dotIndex;
              // Highlight dot if it matches current active slide
              const isActive = actualSlideIndex === activeIndex;

              return (
                <span
                  key={dotIndex}
                  className={`w-2 h-2 rounded-full transition-all ${
                    isActive ? "bg-[#f38031]" : "bg-gray-300"
                  }`}
                />
              );
            })}
          </div>

          {/* Next slide button, disabled when at end */}
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className={`p-2 rounded-full transition ${
              isEnd
                ? "bg-gray-100 opacity-50"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Category selection tabs */}
      <div className="mb-6 px-4">
        <Swiper spaceBetween={12} slidesPerView={"auto"} freeMode={true}>
          {categories.map((category) => (
            <SwiperSlide
              key={category}
              style={{ width: "auto" }}
              className="!w-auto"
            >
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

      {/* Swiper slider showing destination cards */}
      <div className="px-4">
        <Swiper
          spaceBetween={16}
          slidesPerView={"auto"}
          centeredSlides={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={handleSlideChange}
          modules={[Pagination]}
          breakpoints={{
            0: {
              slidesPerView: 2,
              centeredSlides: false,
            },
            768: {
              slidesPerView: 5,
              centeredSlides: false,
            },
          }}
          className="!overflow-hidden"
        >
          {filteredDestinations.map((destination, index) => (
            <SwiperSlide
              key={index}
              className="flex-shrink-0 rounded-lg overflow-hidden group relative"
              style={{ width: "240px" }}
            >
              <div className="w-[240px] h-64">
                {/* Destination image with hover zoom effect */}
                <img
                  src={destination.image}
                  alt={`${destination.city}, ${destination.country}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Gradient overlay for better text visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />
                {/* Destination city and country text */}
                <div className="absolute bottom-2 left-3 z-20 text-white">
                  <h3 className="text-md font-semibold">{destination.city}</h3>
                  <p className="text-sm">{destination.country}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Destinations;
