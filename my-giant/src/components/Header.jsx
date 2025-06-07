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
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">
          Wander. Wonder. Discover.
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl">
          Embrace the journey every step tells a story.
        </p>

        <form className="w-full max-w-4xl bg-white/90 rounded-xl grid grid-cols-1 md:grid-cols-4 gap-4 px-6 py-4 shadow-md backdrop-blur-md">
          {/* Destination */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-700 font-medium mb-1">
              Destination
            </label>
            <input
              type="text"
              placeholder="Enter location"
              className="px-4 py-2 rounded-md bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Date Range */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-700 font-medium mb-1">
              Date Range
            </label>
            <input
              type="text"
              placeholder="MM/DD/YYYY - MM/DD/YYYY"
              className="px-4 py-2 rounded-md bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Number of People */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-700 font-medium mb-1">
              People
            </label>
            <input
              type="number"
              placeholder="e.g. 2"
              min="1"
              className="px-4 py-2 rounded-md bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Search Button */}
          <div className="flex flex-col justify-end">
            <label className="text-sm text-gray-700 font-medium mb-1 invisible">
              Search
            </label>
            <button
              type="submit"
              className="w-full font-semibold bg-[#f38031] text-center text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-all"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </header>
  );
};

export default Header;
