import React, { useEffect, useState } from "react";
import upcomingEvents from "../data/upcomingEventsData";

const getTimeRemaining = (endtime) => {
  const total = Date.parse(endtime) - Date.now();
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return { total, days, hours, minutes, seconds };
};

const Countdown = ({ date }) => {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(date));

  useEffect(() => {
    const interval = setInterval(() => {
      const remaining = getTimeRemaining(date);
      setTimeLeft(remaining);
      if (remaining.total <= 0) clearInterval(interval);
    }, 1000);

    return () => clearInterval(interval);
  }, [date]);

  if (timeLeft.total <= 0) return <span>Event started!</span>;

  return (
    <div className="text-sm font-medium tracking-wide">
      <span>{timeLeft.days}d </span>
      <span>{timeLeft.hours}h </span>
      <span>{timeLeft.minutes}m </span>
      <span>{timeLeft.seconds}s</span>
    </div>
  );
};

const EventsList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalEvents = upcomingEvents.length;

  // Auto-cycle every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalEvents);
    }, 6000);

    return () => clearInterval(interval);
  }, [totalEvents]);

  const event = upcomingEvents[currentIndex];

  return (
    <section className="w-full bg-white py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div
          key={event.id}
          className="relative bg-cover bg-center h-72 md:h-96 rounded-lg shadow-lg overflow-hidden transition-all duration-700"
          style={{ backgroundImage: `url(${event.bgImage})` }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-12 text-white max-w-xl">
            <h3 className="text-3xl font-bold mb-2">{event.title}</h3>
            <p className="mb-4 text-lg">{event.location}</p>
            <Countdown date={event.date} />
            <button
              type="button"
              className="mt-6 inline-block bg-[#f38031] hover:bg-[#e26910] text-white font-semibold py-2 px-6 rounded transition"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsList;
