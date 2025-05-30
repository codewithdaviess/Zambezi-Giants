import { useEffect, useState } from "react";
import {
  MapPinned,
  CalendarDays,
  CheckCircle,
  PlaneTakeoff,
  Hotel,
  Smile
} from "lucide-react";

const steps = [
  {
    title: "Select Destination",
    description: "Pick your dream destination from our curated list of stunning locations.",
    icon: <MapPinned className="w-8 h-8 text-[#f38031]" />
  },
  {
    title: "Choose Dates",
    description: "Set your travel dates that fit your schedule perfectly.",
    icon: <CalendarDays className="w-8 h-8 text-[#f38031]" />
  },
  {
    title: "Confirm Booking",
    description: "Review and confirm your trip in just one click.",
    icon: <CheckCircle className="w-8 h-8 text-[#f38031]" />
  },
  {
    title: "Book Your Flight",
    description: "Fly comfortably with our trusted airline partners.",
    icon: <PlaneTakeoff className="w-8 h-8 text-[#f38031]" />
  },
  {
    title: "Reserve Your Stay",
    description: "Choose from a variety of hotels and accommodations.",
    icon: <Hotel className="w-8 h-8 text-[#f38031]" />
  },
  {
    title: "Enjoy Your Trip",
    description: "Experience your journey and make unforgettable memories.",
    icon: <Smile className="w-8 h-8 text-[#f38031]" />
  }
];

export default function AboutUs() {
  const [visibleSteps, setVisibleSteps] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleSteps((prev) => {
        if (prev < steps.length) return prev + 1;
        clearInterval(interval);
        return prev;
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white px-6 py-8 md:py-8">
      <div className="max-w-7xl mx-auto flex flex-col items-start gap-6">
        {/* Header Section */}
        <div className="w-full text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Effortless Booking
          </h2>
          
        </div>

        {/* Steps Section */}
        <div className="w-full flex flex-col md:grid md:grid-cols-2 gap-6 mt-6">
          {steps.slice(0, visibleSteps).map((step, index) => (
            <div
              key={index}
              className="flex items-start p-3 rounded-xl opacity-0 animate-slideInFromRight"
              style={{
                animationDelay: `${index * 0.3}s`,
                animationFillMode: "forwards"
              }}
            >
              <div className="mr-4 shadow-xl p-4 rounded-full bg-white">
                {step.icon}
              </div>
              <div>
                <p className="text-sm text-[#f38031] font-semibold mb-1">
                  Step {index + 1}
                </p>
                <h4 className="text-lg font-semibold text-gray-800 mb-1">
                  {step.title}
                </h4>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animation Style */}
      <style>{`
        @keyframes slideInFromRight {
          0% {
            opacity: 0;
            transform: translateX(40px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slideInFromRight {
          animation: slideInFromRight 0.6s ease-out;
        }
      `}</style>
    </section>
  );
}
