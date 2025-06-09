import React, { useState } from "react";
import { Search } from "lucide-react";

const HomeSearchForm = () => {
  const todayISO = new Date().toISOString().split("T")[0];

  // Store ISO dates internally for logic
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState(todayISO);
  const [endDate, setEndDate] = useState(todayISO);
  const [people, setPeople] = useState(1);

  // Format date from ISO to readable (e.g. Jun 8, 2025)
  const formatDate = (isoDate) => {
    if (!isoDate) return "";
    const d = new Date(isoDate);
    return d.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // Combined readable string for display
  const combinedDateRange = `${formatDate(startDate)} – ${formatDate(endDate)}`;

  // Parse input back to ISO dates (expects format like "Jun 8, 2025 – Jun 15, 2025")
  const handleDateChange = (e) => {
    const val = e.target.value;
    const parts = val.split("–").map((p) => p.trim());
    if (parts.length === 2) {
      const parsedStart = Date.parse(parts[0]);
      const parsedEnd = Date.parse(parts[1]);
      if (!isNaN(parsedStart) && !isNaN(parsedEnd)) {
        setStartDate(new Date(parsedStart).toISOString().split("T")[0]);
        setEndDate(new Date(parsedEnd).toISOString().split("T")[0]);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ destination, startDate, endDate, people });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col lg:flex-row lg:items-end gap-4 max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md"
    >
      {/* Destination */}
      <div className="w-full lg:w-1/4">
        <label className="block mb-1 text-sm font-medium text-gray-700">
          Where to?
        </label>
        <input
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          required
          className="w-full p-3 border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Combined readable Date Range input */}
      <div className="w-full lg:w-2/4">
        <label className="block mb-1 text-sm font-medium text-gray-700">
          When?
        </label>
        <input
          type="text"
          value={combinedDateRange}
          onChange={handleDateChange}
          placeholder="Jun 8, 2025 – Jun 15, 2025"
          required
          className="w-full p-3 border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Guests */}
      <div className="w-full lg:w-1/4">
        <label className="block mb-1 text-sm font-medium text-gray-700">
          Guests
        </label>
        <input
          type="number"
          min="1"
          value={people}
          onChange={(e) => setPeople(Math.max(1, Number(e.target.value)))}
          required
          className="w-full p-3 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Submit */}
      <div className="w-full lg:w-auto ">
        <button
          type="submit"
          className="w-full lg:w-auto bg-[#f38031] hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md transition flex items-center justify-center gap-2"
        >
          <Search className="w-5 h-5" />
          Search
        </button>
      </div>
    </form>
  );
};

export default HomeSearchForm;
