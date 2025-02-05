"use client";

import { useState } from "react";
import AdminNavbar from "../../../components/AdminNavbar";

export default function SubscriptionsManagement() {
  const [timeRange, setTimeRange] = useState("month");

  const metrics = [
    {
      name: "Monthly Revenue",
      value: "$45,678",
      change: "+12.5%",
      trend: "up",
    },
    {
      name: "Active Subscriptions",
      value: "1,280",
      change: "+18.2%",
      trend: "up",
    },
    {
      name: "Churn Rate",
      value: "2.3%",
      change: "-0.5%",
      trend: "down",
    },
    {
      name: "Avg. Revenue/User",
      value: "$35.50",
      change: "+5.3%",
      trend: "up",
    },
  ];

  const transactions = [
    {
      id: 1,
      user: "John Smith",
      amount: "$49.99",
      plan: "Pro (Monthly)",
      status: "successful",
      date: "Mar 15, 2024",
    },
    {
      id: 2,
      user: "Sarah Johnson",
      amount: "$499.99",
      plan: "Enterprise (Annual)",
      status: "successful",
      date: "Mar 14, 2024",
    },
    {
      id: 3,
      user: "Michael Chen",
      amount: "$29.99",
      plan: "Basic (Monthly)",
      status: "failed",
      date: "Mar 14, 2024",
    },
    {
      id: 4,
      user: "Emily Davis",
      amount: "$49.99",
      plan: "Pro (Monthly)",
      status: "successful",
      date: "Mar 13, 2024",
    },
  ];

  const plans = [
    {
      name: "Basic",
      price: "$29.99",
      period: "month",
      features: ["5 Users", "Basic Features", "Email Support"],
      subscribers: 450,
    },
    {
      name: "Pro",
      price: "$49.99",
      period: "month",
      features: [
        "25 Users",
        "Advanced Features",
        "Priority Support",
        "API Access",
      ],
      subscribers: 890,
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$499.99",
      period: "month",
      features: [
        "Unlimited Users",
        "All Features",
        "24/7 Support",
        "Custom Integration",
      ],
      subscribers: 203,
    },
  ];

  return (
    <>
      <AdminNavbar />
      <main className="min-h-screen bg-gray-50 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="md:flex md:items-center md:justify-between mb-8">
            <div className="flex-1 min-w-0">
              <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                Subscriptions Management
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
                Export Report
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
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Subscription Plans */}
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`bg-white rounded-lg shadow-sm overflow-hidden ${
                  plan.popular ? "ring-2 ring-blue-500" : ""
                }`}
              >
                <div className="p-6">
                  {plan.popular && (
                    <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
                      Most Popular
                    </span>
                  )}
                  <h3 className="text-lg font-medium text-gray-900">
                    {plan.name}
                  </h3>
                  <div className="mt-2 flex items-baseline">
                    <span className="text-3xl font-bold tracking-tight text-gray-900">
                      {plan.price}
                    </span>
                    <span className="ml-1 text-sm font-medium text-gray-500">
                      /month
                    </span>
                  </div>
                  <p className="mt-4 text-sm text-gray-500">
                    {plan.subscribers} active subscribers
                  </p>
                  <ul className="mt-6 space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <svg
                          className="h-5 w-5 text-green-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="ml-3 text-sm text-gray-700">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <button className="mt-8 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    Edit Plan
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Recent Transactions */}
          <div className="mt-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Recent Transactions
            </h3>
            <div className="bg-white shadow-sm rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        User
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Plan
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Amount
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {transactions.map((transaction) => (
                      <tr key={transaction.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {transaction.user}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {transaction.plan}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {transaction.amount}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                              transaction.status === "successful"
                                ? "bg-green-100 text-green-800"
                                : "bg-red-100 text-red-800"
                            }`}
                          >
                            {transaction.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {transaction.date}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
