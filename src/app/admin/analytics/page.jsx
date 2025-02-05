"use client";

import { useState } from "react";
import AdminNavbar from "../../../components/AdminNavbar";

export default function Analytics() {
  const [timeRange, setTimeRange] = useState("month");

  const metrics = [
    {
      name: "Total Revenue",
      value: "$145,678",
      change: "+12.5%",
      trend: "up",
      chart: "revenue",
    },
    {
      name: "Active Users",
      value: "2,543",
      change: "+18.2%",
      trend: "up",
      chart: "users",
    },
    {
      name: "Conversion Rate",
      value: "3.6%",
      change: "+0.8%",
      trend: "up",
      chart: "conversion",
    },
    {
      name: "Churn Rate",
      value: "2.3%",
      change: "-0.5%",
      trend: "down",
      chart: "churn",
    },
  ];

  const userGrowth = [
    { month: "Jan", users: 1200 },
    { month: "Feb", users: 1500 },
    { month: "Mar", users: 2000 },
    { month: "Apr", users: 2200 },
    { month: "May", users: 2400 },
    { month: "Jun", users: 2543 },
  ];

  const revenueByPlan = [
    { name: "Basic", value: 25 },
    { name: "Pro", value: 45 },
    { name: "Enterprise", value: 30 },
  ];

  const userActivity = [
    { time: "00:00", users: 120 },
    { time: "04:00", users: 80 },
    { time: "08:00", users: 450 },
    { time: "12:00", users: 760 },
    { time: "16:00", users: 890 },
    { time: "20:00", users: 560 },
  ];

  return (
    <>
      <AdminNavbar />
      <main className="min-h-screen bg-gray-50 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="md:flex md:items-center md:justify-between mb-8">
            <div className="flex-1 min-w-0">
              <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                Analytics Overview
              </h2>
            </div>
            <div className="mt-4 flex space-x-3 md:mt-0">
              <select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
              >
                <option value="week">Last 7 days</option>
                <option value="month">Last 30 days</option>
                <option value="year">Last 12 months</option>
              </select>
              <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Download Report
              </button>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => (
              <div
                key={metric.name}
                className="bg-white overflow-hidden shadow rounded-lg"
              >
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-1">
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        {metric.name}
                      </dt>
                      <dd className="mt-1 text-2xl font-semibold text-gray-900">
                        {metric.value}
                      </dd>
                    </div>
                    <div
                      className={`ml-3 flex items-center text-sm font-semibold ${
                        metric.trend === "up"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {metric.change}
                      {metric.trend === "up" ? (
                        <svg
                          className="ml-1 h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="ml-1 h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 17h8m0 0v-8m0 8l-8-8-4 4-6-6"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                  {/* Mini Sparkline Chart Placeholder */}
                  <div className="mt-3 w-full h-10 bg-gray-50 rounded"></div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* User Growth Chart */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                User Growth
              </h3>
              <div className="relative">
                <div className="h-[300px] w-full bg-gray-50 rounded flex items-end space-x-2 p-4">
                  {userGrowth.map((data, index) => (
                    <div
                      key={data.month}
                      className="flex-1 flex flex-col items-center"
                    >
                      <div
                        className="w-full bg-blue-500 rounded-t"
                        style={{
                          height: `${(data.users / 3000) * 100}%`,
                        }}
                      ></div>
                      <div className="mt-2 text-xs text-gray-500">
                        {data.month}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Revenue Distribution */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Revenue by Plan
              </h3>
              <div className="relative">
                <div className="h-[300px] flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full border-8 border-gray-100 relative">
                    {revenueByPlan.map((segment, index) => (
                      <div
                        key={segment.name}
                        className="absolute inset-0"
                        style={{
                          clipPath: `polygon(50% 50%, 100% 0, 100% 100%)`,
                          transform: `rotate(${index * 120}deg)`,
                          backgroundColor: ["#3B82F6", "#10B981", "#6366F1"][
                            index
                          ],
                          opacity: 0.8,
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-4">
                  {revenueByPlan.map((plan, index) => (
                    <div key={plan.name} className="text-center">
                      <div
                        className="w-3 h-3 rounded-full mx-auto"
                        style={{
                          backgroundColor: ["#3B82F6", "#10B981", "#6366F1"][
                            index
                          ],
                        }}
                      ></div>
                      <div className="mt-1 text-sm text-gray-500">
                        {plan.name}
                      </div>
                      <div className="text-sm font-medium text-gray-900">
                        {plan.value}%
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* User Activity Chart */}
            <div className="bg-white rounded-lg shadow-sm p-6 lg:col-span-2">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                User Activity (24h)
              </h3>
              <div className="relative">
                <div className="h-[300px] w-full bg-gray-50 rounded flex items-end space-x-2 p-4">
                  {userActivity.map((data) => (
                    <div
                      key={data.time}
                      className="flex-1 flex flex-col items-center"
                    >
                      <div
                        className="w-full bg-blue-500 rounded-t"
                        style={{
                          height: `${(data.users / 1000) * 100}%`,
                        }}
                      ></div>
                      <div className="mt-2 text-xs text-gray-500">
                        {data.time}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
