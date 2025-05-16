import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import Navbar from "./Navbar";

// Background images
import bg1 from "../assets/img/background.png";
import bg2 from "../assets/img/background2.png";
import bg3 from "../assets/img/background3.JPG";

const slides = [bg1, bg2, bg3];

const Header = () => {
  return (
    <header className="relative h-screen w-full overflow-hidden">
      {/* Background Slider */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        autoplay={{ delay: 5000 }}
        effect="fade"
        loop
        className="absolute inset-0 h-full w-full -z-10"
      >
        {slides.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-full w-full bg-center bg-cover"
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className="absolute inset-0 bg-black opacity-40" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full z-20 pt-6 px-4">
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
