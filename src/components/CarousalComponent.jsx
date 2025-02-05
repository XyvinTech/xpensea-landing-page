"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CarousalComponent = () => {
  const [currentIssue, setCurrentIssue] = useState(0);

  const issues = [
    "Fraudulent Claims",
    "Delayed Expense Submission",
    "Incorrect Mileage Report",
    "Unapproved Expense",
    "Missing Receipts",
    "Personal Expense Being Reimbursed",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIssue((prev) => (prev + 1) % issues.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-32 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
          The Issues Holding Back Your <br />
          <span className="text-blue-600">Financial Efficiency</span>
        </h2>

        <div className="mt-10 flex justify-center">
          <div className="relative w-full max-w-xl bg-white shadow-lg rounded-xl px-8 py-6  h-24 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentIssue}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute text-2xl md:text-3xl font-medium text-gray-700"
              >
                {issues[currentIssue]}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarousalComponent;
