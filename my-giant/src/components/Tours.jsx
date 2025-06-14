import React from "react";
import tour3 from "../assets/img/tours/capetowntour.png";

const Tours = () => {
  return (
    <section className="py-12 px-4 md:px-12 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10">Popular Tours</h2>

      <div className="max-w-4xl mx-auto">
        {/* Feature Card Only */}
        <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
          <img
            src={tour3}
            alt="Feature Tour"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
          <div className="absolute bottom-6 left-6 text-white z-10">
            <h3 className="text-2xl font-bold mb-2">Cape Town Highlights</h3>
            <p className="text-sm max-w-sm mb-4">
              Discover the beauty of Cape Town with this all-inclusive guided experience.
            </p>
            <button className="bg-[#f38031] hover:opacity-10 px-4 py-2 text-sm rounded-lg">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tours;
