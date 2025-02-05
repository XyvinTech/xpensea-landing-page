"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import AdminNavbar from "../../../../components/AdminNavbar";

export default function UserDetails() {
  const params = useParams();

  // Mock user data - In a real app, this would come from an API
  const user = {
    id: params.id,
    name: "John Smith",
    email: "john@example.com",
    plan: "Pro",
    status: "active",
    lastLogin: "2 hours ago",
    joined: "Mar 15, 2024",
    avatar: "/avatars/default.png",
    billingInfo: {
      plan: "Pro",
      billingCycle: "Monthly",
      nextBilling: "Apr 15, 2024",
      amount: "$49.99",
      paymentMethod: "Visa ending in 4242",
    },
    usage: {
      storage: "2.5GB / 5GB",
      apiCalls: "8,542 / 10,000",
      projects: "3 / 5",
      teamMembers: "8 / 10",
    },
    recentActivity: [
      {
        id: 1,
        action: "Updated profile information",
        date: "Mar 15, 2024",
        time: "14:30",
      },
      {
        id: 2,
        action: "Created new project 'Q1 Reports'",
        date: "Mar 14, 2024",
        time: "11:20",
      },
      {
        id: 3,
        action: "Added team member Sarah Johnson",
        date: "Mar 13, 2024",
        time: "09:45",
      },
    ],
    tickets: [
      {
        id: 1,
        title: "Unable to access dashboard",
        status: "open",
        priority: "high",
        created: "Mar 14, 2024",
      },
      {
        id: 2,
        title: "Feature request: Dark mode",
        status: "in_progress",
        priority: "medium",
        created: "Mar 10, 2024",
      },
    ],
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800";
      case "inactive":
        return "bg-gray-100 text-gray-800";
      case "suspended":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <>
      <AdminNavbar />
      <main className="min-h-screen bg-gray-50 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Link
                  href="/admin/users"
                  className="text-blue-600 hover:text-blue-700 mr-4"
                >
                  ← Back to Users
                </Link>
                <h1 className="text-2xl font-bold text-gray-900">
                  User Details
                </h1>
              </div>
              <div className="flex space-x-3">
                <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Edit User
                </button>
                <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                  Suspend Account
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* User Profile Card */}
            <div className="bg-white shadow-sm rounded-lg p-6">
              <div className="flex items-center">
                <div className="w-20 h-20 bg-gray-200 rounded-full"></div>
                <div className="ml-4">
                  <h2 className="text-xl font-semibold text-gray-900">
                    {user.name}
                  </h2>
                  <p className="text-gray-500">{user.email}</p>
                  <span
                    className={`inline-flex mt-2 rounded-full px-2 text-xs font-semibold leading-5 ${getStatusColor(
                      user.status
                    )}`}
                  >
                    {user.status}
                  </span>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4 border-t border-gray-200 pt-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Member Since
                  </p>
                  <p className="mt-1 text-sm text-gray-900">{user.joined}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Last Login
                  </p>
                  <p className="mt-1 text-sm text-gray-900">{user.lastLogin}</p>
                </div>
              </div>
            </div>

            {/* Billing Information */}
            <div className="bg-white shadow-sm rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Billing Information
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Current Plan
                  </p>
                  <p className="mt-1 text-sm text-gray-900">
                    {user.billingInfo.plan} ({user.billingInfo.billingCycle})
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Next Billing Date
                  </p>
                  <p className="mt-1 text-sm text-gray-900">
                    {user.billingInfo.nextBilling}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Payment Method
                  </p>
                  <p className="mt-1 text-sm text-gray-900">
                    {user.billingInfo.paymentMethod}
                  </p>
                </div>
              </div>
            </div>

            {/* Usage Statistics */}
            <div className="bg-white shadow-sm rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Usage Statistics
              </h3>
              <div className="space-y-4">
                {Object.entries(user.usage).map(([key, value]) => (
                  <div key={key}>
                    <div className="flex justify-between mb-1">
                      <p className="text-sm font-medium text-gray-500">
                        {key
                          .replace(/([A-Z])/g, " $1")
                          .replace(/^./, (str) => str.toUpperCase())}
                      </p>
                      <p className="text-sm text-gray-900">{value}</p>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{
                          width: `${
                            (parseInt(value.split("/")[0]) /
                              parseInt(value.split("/")[1])) *
                            100
                          }%`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white shadow-sm rounded-lg p-6 lg:col-span-2">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Recent Activity
              </h3>
              <div className="flow-root">
                <ul className="-mb-8">
                  {user.recentActivity.map((activity, activityIdx) => (
                    <li key={activity.id}>
                      <div className="relative pb-8">
                        {activityIdx !== user.recentActivity.length - 1 ? (
                          <span
                            className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                            aria-hidden="true"
                          />
                        ) : null}
                        <div className="relative flex space-x-3">
                          <div>
                            <span className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center ring-8 ring-white">
                              <svg
                                className="h-4 w-4 text-white"
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
                            </span>
                          </div>
                          <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                            <div>
                              <p className="text-sm text-gray-500">
                                {activity.action}
                              </p>
                            </div>
                            <div className="text-right text-sm whitespace-nowrap text-gray-500">
                              {activity.date} at {activity.time}
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Support Tickets */}
            <div className="bg-white shadow-sm rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Support Tickets
              </h3>
              <div className="space-y-4">
                {user.tickets.map((ticket) => (
                  <div
                    key={ticket.id}
                    className="border border-gray-200 rounded-lg p-4"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">
                          {ticket.title}
                        </h4>
                        <p className="text-sm text-gray-500 mt-1">
                          Created on {ticket.created}
                        </p>
                      </div>
                      <div className="flex space-x-2">
                        <span
                          className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${getPriorityColor(
                            ticket.priority
                          )}`}
                        >
                          {ticket.priority}
                        </span>
                        <span
                          className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${getStatusColor(
                            ticket.status
                          )}`}
                        >
                          {ticket.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
