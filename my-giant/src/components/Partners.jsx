import React from "react";
import { partnerLogos } from "../data/partnersData";
import "../styles/partners.css";

const Partners = () => {
  // Add "Your Space" once
  const allLogos = [...partnerLogos, { name: "Your Space", isPlaceholder: true }];
  // Duplicate full track for seamless loop
  const duplicatedLogos = allLogos.concat(allLogos);

  return (
    <section className="w-full bg-gray-200 py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 text-center">
          Our Partners
        </h2>

        <div className="partner-scroll-wrapper">
          <div className="partner-scroll-track">
            {duplicatedLogos.map((partner, index) =>
              partner.isPlaceholder ? (
                <div
                  key={`placeholder-${index}`}
                  className="h-16 w-40 mx-6 flex items-center justify-center text-sm text-gray-600 border border-dashed border-gray-400 rounded hover:bg-white hover:text-[#f38031] transition"
                >
                  Your Space
                </div>
              ) : (
                <img
                  key={index}
                  src={partner.logo}
                  alt={partner.name}
                  className="h-16 grayscale hover:grayscale-0 transition duration-300 mx-6"
                />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
