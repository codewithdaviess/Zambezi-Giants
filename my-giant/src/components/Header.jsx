import React from "react";
import background from "../assets/img/background.png";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="relative h-[90vh] w-full">
      <img
        src={background}
        alt="Destination"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      <Navbar />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore the World</h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl">
          Discover new places, plan your adventures, and make memories.
        </p>

        {/* Responsive Search Form */}
        <form className="w-full max-w-xl bg-white/90 rounded-full flex flex-nowrap items-center px-4 py-2 shadow-md backdrop-blur-md">
          <input
            type="text"
            placeholder="Where do you want to go?"
            className="flex-grow px-4 py-2 bg-transparent focus:outline-none text-black placeholder-gray-500 min-w-0"
          />
          <button
            type="submit"
            className="flex-shrink-0 bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-all"
          >
            Search
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;
