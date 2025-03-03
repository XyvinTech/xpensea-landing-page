"use client";

import { useEffect, useState } from "react";
import AdminNavbar from "../../../components/AdminNavbar";
import { getDashboard, getPayments, getPlan, getPlanById } from "@/app/api/adminApi";

export default function SubscriptionsManagement() {
  const [timeRange, setTimeRange] = useState("month");
  const [plans, setPlans] = useState([]);
  const [editOpen, setEditOpen] = useState(false);
  const [payments, setPayments] = useState([]);










  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const payments = await getPayments();
        setPayments(payments.data);
      } catch (error) {
        console.log({ error: error.message });
      }
    };
    fetchPayments();
  }, []);

  const [stats, setStats] = useState([]);
  

  useEffect(() => {
    getDashboard()
      .then((data) => {
        if (data.status === 200) {
          const metrics = [
            {
              name: "Active Subscriptions",
              value: data.data.companies.total,
              trend: "up",
              change: "+0", 
            },
            {
              name: "Monthly Revenue",
              value: `$${data.data.monthleyRevenue}`,
              trend: data.data.monthleyRevenue >= 0 ? "up" : "down",
              change: `+${data.data.monthleyRevenue}`,
            },
          ];
          setStats(metrics);
        }
      })
      .catch((error) => console.error("Error fetching dashboard stats:", error));
  }, []);





 


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
  useEffect(() => {
    const fetchData = async () => {
      const plans = await getPlan();
      console.log(plans.data);
      setPlans(plans.data);
    };

    fetchData();
  }, []);

  const handleEdit = async (feature) => {
    try {
      const response = await getPlanById(feature);
      console.log("edited data", response.data);
    } catch (error) {
      console.log(error);
    }

    setEditOpen(true);
    console.log("this is feature:", feature);
  };

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
          {stats.map((metric) => (
        <div
          key={metric.name}
          className="bg-white shadow rounded-lg overflow-hidden p-5"
        >
          <div className="flex items-center justify-between">
            <div>
              <dt className="text-sm font-medium text-gray-500 truncate">
                {metric.name}
              </dt>
              <dd className="mt-1 text-2xl font-semibold text-gray-900">
                {metric.value}
              </dd>
            </div>
            <div
              className={`flex items-center text-sm font-semibold ${
                metric.trend === "up" ? "text-green-600" : "text-red-600"
              }`}
            >
              {metric.change}
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
                  d={
                    metric.trend === "up"
                      ? "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      : "M13 17h8m0 0v-8m0 8l-8-8-4 4-6-6"
                  }
                />
              </svg>
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
                  <button
                    onClick={() => handleEdit(plan._id)}
                    className="mt-8 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
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
                      {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Plan
                      </th> */}
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
                    {payments.map((payment) => (
                      <tr key={payment._id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {payment.company?.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          ₹{payment.amount} {payment.currency}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                              payment.status === "completed"
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {payment.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(payment.createdAt).toLocaleDateString(
                            "en-IN"
                          )}
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
