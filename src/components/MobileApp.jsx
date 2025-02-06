"use client";
import { useState } from "react";

const features = [
  {
    title: "Real Time Monitoring",
    description:
      "Watch expenses unfold live with instant alerts and spending insights.",
    image: "/pic.png",
  },
  {
    title: "AI Score powered Approval Assistance",
    description:
      "Smart expense approvals powered by AI to reduce fraud and speed up processing.",
    image: "/Ai.png",
  },
  {
    title: "Event Based Expense Reporting",
    description:
      "Organize and track expenses by events for clearer budget management.",
    image: "/Event.png",
  },
  {
    title: "Streamlined Expense Tracking",
    description:
      "Simplify expense management with automatic categorization and policy checks.",
    image: "/Expense.png",
  },
  {
    title: "Expense Capture at the Source",
    description:
      "Capture receipts instantly with our smart mobile scanning technology.",
    image: "/Source.png",
  },
];
const MobileApp = () => {
  const [selectedFeature, setSelectedFeature] = useState(features[0]);
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
    <div className="container mx-auto px-6 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
        Smart Expense Management in Real-Time
      </h2>
      <p className="text-lg text-gray-600 text-center mb-12">
        From instant capture to AI-powered approvals, manage all your business
        expenses effortlessly in one place.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
 
        <div className="lg:col-span-6 space-y-4">
          {features.map((feature, index) => (
           <div
           key={index}
           className={`p-6 rounded-lg shadow-md cursor-pointer transition ${
             selectedFeature.title === feature.title
               ? "bg-blue-100"
               : "bg-white"
           }`}
           onClick={() => setSelectedFeature(feature)}
         >
              <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="lg:col-span-6 flex justify-center">
          <div className="shadow-lg rounded-lg overflow-hidden w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 bg-white flex items-center justify-center">
            <img
              src={selectedFeature.image}
              alt={selectedFeature.title}
              className="max-w-[85%] max-h-[85%] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default MobileApp;
