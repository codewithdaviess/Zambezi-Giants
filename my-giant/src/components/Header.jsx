import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import Navbar from "./Navbar";

import bg1 from "../assets/img/background.png";
import bg2 from "../assets/img/background2.png";
import bg3 from "../assets/img/background3.JPG";

const slides = [
  {
    image: bg1,
    title: "Victoria Falls",
    description:
      "Discover the awe-inspiring Victoria Falls, one of the Seven Natural Wonders of the World. With thundering waterfalls, rainforest trails, and breathtaking views, it’s the perfect destination for thrill-seekers and nature lovers alike.",
    button: { text: "Explore Victoria Falls", link: "#victoria-falls" },
  },
  {
    image: bg2,
    title: "Mount Kilimanjaro",
    description:
      "Embark on an unforgettable adventure to the summit of Africa’s highest peak. Mount Kilimanjaro offers diverse landscapes, from lush forests to snowy peaks, ideal for hikers and explorers seeking a true challenge.",
    button: { text: "Climb Kilimanjaro", link: "#kilimanjaro" },
  },
  {
    image: bg3,
    title: "Serengeti National Park",
    description:
      "Experience the heart of Africa’s wildlife in Serengeti National Park. Witness the Great Migration, encounter the Big Five, and immerse yourself in the raw beauty of untouched savannas and golden sunsets.",
    button: { text: "Plan Your Safari", link: "#serengeti" },
  },
];

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef(null);

  return (
    <header className="relative h-screen w-full overflow-hidden">
      {/* Background Swiper */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        autoplay={{ delay: 7000 }}
        effect="fade"
        loop
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
        className="absolute inset-0 h-full w-full -z-10"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-full w-full bg-center bg-cover relative"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black opacity-50" />
              <div className="absolute inset-0 flex items-center justify-start px-6 text-white">
                <div className="max-w-2xl">
                  <h1 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-md mb-6 drop-shadow">
                    {slide.description}
                  </p>
                  <a
                    href={slide.button.link}
                    className="bg-transparent border border-white text-white font-semibold py-3 px-8 rounded-full"
                  >
                    {slide.button.text}
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full z-20 pt-6 px-4">
        <Navbar />
      </div>

      {/* Carousel Number Indicator*/}
     <div className="absolute bottom-6 right-6 z-10 flex items-center space-x-4">
  {slides.map((_, index) => (
    <button
      key={index}
      onClick={() => swiperRef.current?.slideToLoop(index)}
      className="transition-all duration-500 ease-out font-bold relative"
    >
      <span
        className={`inline-block transform transition-all duration-500 ${
          currentIndex === index
            ? "text-orange-500 text-3xl translate-y-[-2px] scale-110 opacity-100"
            : "text-white text-xl opacity-60 translate-y-0 scale-100"
        }`}
      >
        {`0${index + 1}`}
      </span>
    </button>
  ))}
</div>

    </header>
  );
};

export default Header;
