"use client";

import AdminNavbar from "../../components/AdminNavbar";

export default function AdminDashboard() {
  const stats = [
    { name: "Total Users", value: "2,543", change: "+12.5%", trend: "up" },
    {
      name: "Active Subscriptions",
      value: "1,280",
      change: "+18.2%",
      trend: "up",
    },
    { name: "Revenue", value: "$45,678", change: "+8.3%", trend: "up" },
    { name: "Open Tickets", value: "23", change: "-4.1%", trend: "down" },
  ];

  const recentActivity = [
    {
      id: 1,
      user: "John Smith",
      action: "Started trial",
      time: "5 minutes ago",
      type: "trial",
    },
    {
      id: 2,
      user: "Sarah Johnson",
      action: "Upgraded to Pro",
      time: "2 hours ago",
      type: "upgrade",
    },
    {
      id: 3,
      user: "Michael Chen",
      action: "Submitted ticket",
      time: "4 hours ago",
      type: "ticket",
    },
    {
      id: 4,
      user: "Emily Davis",
      action: "Cancelled subscription",
      time: "1 day ago",
      type: "cancel",
    },
    {
      id: 5,
      user: "David Wilson",
      action: "Added team member",
      time: "1 day ago",
      type: "team",
    },
  ];

  const popularPlans = [
    { name: "Basic", users: 450, percentage: 25 },
    { name: "Pro", users: 890, percentage: 45 },
    { name: "Enterprise", users: 203, percentage: 30 },
  ];

  return (
    <>
      <AdminNavbar />
      <main className="min-h-screen bg-gray-50 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex-1 min-w-0">
              <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                Dashboard Overview
              </h2>
            </div>
            <div className="mt-4 flex md:mt-0 md:ml-4">
              <button className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Generate Report
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((item) => (
              <div
                key={item.name}
                className="bg-white overflow-hidden shadow rounded-lg"
              >
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div
                        className={`h-12 w-12 rounded-md flex items-center justify-center ${
                          item.trend === "up" ? "bg-green-100" : "bg-red-100"
                        }`}
                      >
                        {item.trend === "up" ? (
                          <svg
                            className="h-6 w-6 text-green-600"
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
                            className="h-6 w-6 text-red-600"
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
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          {item.name}
                        </dt>
                        <dd className="flex items-baseline">
                          <div className="text-2xl font-semibold text-gray-900">
                            {item.value}
                          </div>
                          <div
                            className={`ml-2 flex items-baseline text-sm font-semibold ${
                              item.trend === "up"
                                ? "text-green-600"
                                : "text-red-600"
                            }`}
                          >
                            {item.change}
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Recent Activity */}
            <div className="bg-white shadow rounded-lg">
              <div className="p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Recent Activity
                </h3>
                <div className="mt-5">
                  <div className="flow-root">
                    <ul className="-mb-8">
                      {recentActivity.map((activity, activityIdx) => (
                        <li key={activity.id}>
                          <div className="relative pb-8">
                            {activityIdx !== recentActivity.length - 1 ? (
                              <span
                                className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                                aria-hidden="true"
                              />
                            ) : null}
                            <div className="relative flex space-x-3">
                              <div>
                                <span
                                  className={`h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white ${
                                    activity.type === "trial"
                                      ? "bg-blue-500"
                                      : activity.type === "upgrade"
                                      ? "bg-green-500"
                                      : activity.type === "ticket"
                                      ? "bg-yellow-500"
                                      : activity.type === "cancel"
                                      ? "bg-red-500"
                                      : "bg-gray-500"
                                  }`}
                                >
                                  {activity.type === "trial" && (
                                    <svg
                                      className="h-5 w-5 text-white"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                      />
                                    </svg>
                                  )}
                                  {activity.type === "upgrade" && (
                                    <svg
                                      className="h-5 w-5 text-white"
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
                                  )}
                                </span>
                              </div>
                              <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                                <div>
                                  <p className="text-sm text-gray-500">
                                    <span className="font-medium text-gray-900">
                                      {activity.user}
                                    </span>{" "}
                                    {activity.action}
                                  </p>
                                </div>
                                <div className="text-right text-sm whitespace-nowrap text-gray-500">
                                  {activity.time}
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6">
                    <a
                      href="#"
                      className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    >
                      View all activity
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Subscription Plans Distribution */}
            <div className="bg-white shadow rounded-lg">
              <div className="p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Subscription Plans
                </h3>
                <div className="mt-5">
                  {popularPlans.map((plan) => (
                    <div key={plan.name} className="mb-4">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-gray-600">
                          {plan.name}
                        </span>
                        <span className="text-sm font-medium text-gray-600">
                          {plan.users} users
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-blue-600 h-2.5 rounded-full"
                          style={{ width: `${plan.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                  <div className="mt-6">
                    <a
                      href="#"
                      className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    >
                      View detailed analytics
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
