import React from "react";
import { otherTours } from "../data/travelToursData";

const TourTypes = () => {
  return (
    <section className="w-full px-4 py-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Tour Types</h2>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6">
          {otherTours.map((tour, index) => {
            const Icon = tour.icon;

            return (
              <div
                key={index}
                className="bg-white  transition-all duration-300  flex flex-col items-center text-center"
              >
                <Icon className="h-14 w-14 shadow-md hover:shadow-xl rounded-full p-2  text-[#f38031] mb-4" />
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

export default TourTypes;
