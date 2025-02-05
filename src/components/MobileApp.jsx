"use client";
import { useState } from "react";

const features = [
  {
    title: "Real Time Monitoring",
    description:
      "Watch expenses unfold live with instant alerts and spending insights.",
    image: "/Real_Time.webp",
  },
  {
    title: "AI Score powered Approval Assistance",
    description:
      "Smart expense approvals powered by AI to reduce fraud and speed up processing.",
    image: "/AI.webp",
  },
  {
    title: "Event Based Expense Reporting",
    description:
      "Organize and track expenses by events for clearer budget management.",
    image: "/vat-handling.png",
  },
  {
    title: "Streamlined Expense Tracking",
    description:
      "Simplify expense management with automatic categorization and policy checks.",
    image: "/reporting.png",
  },
  {
    title: "Expense Capture at the Source",
    description:
      "Capture receipts instantly with our smart mobile scanning technology.",
    image: "/reporting.png",
  },
];
const MobileApp = () => {
  const [selectedFeature, setSelectedFeature] = useState(features[0]);
  return (
    <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Smart expense management in real-time.
        </h2>
        <p className="text-lg text-gray-600 text-center mb-16">
          From instant capture to AI-powered approvals, manage all your business
          expenses effortlessly in one place.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-8">
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
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
          <div className="lg:col-span-6 flex justify-center items-center">
            <div className="  shadow-xl overflow-hidden w-full max-w-max ">
              <img
                src={selectedFeature.image}
                alt={selectedFeature.title}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileApp;
