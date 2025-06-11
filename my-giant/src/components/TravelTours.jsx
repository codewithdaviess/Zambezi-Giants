import React from "react";
import { otherTours } from "../data/travelToursData";

const TravelTours = () => {
  return (
    <section className="w-full px-4 py-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">
            Travel & Tours
          </h2>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6">
          {otherTours.map((tour, index) => {
            const Icon = tour.icon;
            const isLast = index === otherTours.length - 1;
            const isOdd = otherTours.length % 2 !== 0;

            return (
              <div
                key={index}
                className={`bg-white rounded-full flex flex-col p-2 items-center text-center ${
                  isLast && isOdd ? "col-span-full flex justify-center" : ""
                }`}
              >
                <Icon className="w-auto shadow-xl hover:shadow-lg transition rounded-full p-2 h-14 text-[#f38031] mb-4" />
                <h3 className="text-md font-semibold text-gray-800 mb-1">
                  {tour.title}
                </h3>
                <p className="text-xs text-gray-500">Hotel · Flight · Guide</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TravelTours;
