"use client";

import { useState } from "react";
import AdminNavbar from "../../../components/AdminNavbar";
import Link from "next/link";

export default function TicketsManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterPriority, setFilterPriority] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");

  const tickets = [
    {
      id: 1,
      title: "Unable to access dashboard",
      user: "John Smith",
      priority: "high",
      status: "open",
      category: "Technical",
      created: "2 hours ago",
      lastUpdate: "1 hour ago",
      description:
        "I'm getting a 404 error when trying to access the main dashboard...",
    },
    {
      id: 2,
      title: "Billing issue with subscription",
      user: "Sarah Johnson",
      priority: "medium",
      status: "in_progress",
      category: "Billing",
      created: "1 day ago",
      lastUpdate: "5 hours ago",
      description: "My card was charged twice for the monthly subscription...",
    },
    {
      id: 3,
      title: "Feature request: Dark mode",
      user: "Michael Chen",
      priority: "low",
      status: "open",
      category: "Feature Request",
      created: "3 days ago",
      lastUpdate: "2 days ago",
      description:
        "Would love to see a dark mode option added to the platform...",
    },
    {
      id: 4,
      title: "Integration not working",
      user: "Emily Davis",
      priority: "high",
      status: "resolved",
      category: "Technical",
      created: "5 days ago",
      lastUpdate: "1 day ago",
      description:
        "The Slack integration stopped working after the latest update...",
    },
  ];

  const metrics = [
    { name: "Open Tickets", value: "23", change: "+2", trend: "up" },
    {
      name: "Avg. Response Time",
      value: "2.5h",
      change: "-0.5h",
      trend: "down",
    },
    { name: "Resolution Rate", value: "92%", change: "+3%", trend: "up" },
    {
      name: "Customer Satisfaction",
      value: "4.8/5",
      change: "+0.2",
      trend: "up",
    },
  ];

  const filteredTickets = tickets.filter((ticket) => {
    const matchesSearch =
      ticket.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.user.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPriority =
      filterPriority === "all" || ticket.priority === filterPriority;
    const matchesStatus =
      filterStatus === "all" || ticket.status === filterStatus;
    return matchesSearch && matchesPriority && matchesStatus;
  });

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

  const getStatusColor = (status) => {
    switch (status) {
      case "open":
        return "bg-blue-100 text-blue-800";
      case "in_progress":
        return "bg-yellow-100 text-yellow-800";
      case "resolved":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case "in_progress":
        return "In Progress";
      default:
        return status.charAt(0).toUpperCase() + status.slice(1);
    }
  };

  return (
    <>
      <AdminNavbar />
      <main className="min-h-screen bg-gray-50 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="md:flex md:items-center md:justify-between mb-8">
            <div className="flex-1 min-w-0">
              <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                Tickets Management
              </h2>
            </div>
            <div className="mt-4 flex md:mt-0 md:ml-4">
              <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Create Ticket
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
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Filters */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="relative">
              <input
                type="text"
                className="block w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 pr-10 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                placeholder="Search tickets..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
            <select
              className="block w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              value={filterPriority}
              onChange={(e) => setFilterPriority(e.target.value)}
            >
              <option value="all">All Priorities</option>
              <option value="high">High Priority</option>
              <option value="medium">Medium Priority</option>
              <option value="low">Low Priority</option>
            </select>
            <select
              className="block w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="all">All Status</option>
              <option value="open">Open</option>
              <option value="in_progress">In Progress</option>
              <option value="resolved">Resolved</option>
            </select>
          </div>

          {/* Tickets List */}
          <div className="mt-6 bg-white shadow-sm rounded-lg overflow-hidden">
            <ul className="divide-y divide-gray-200">
              {filteredTickets.map((ticket) => (
                <li key={ticket.id} className="hover:bg-gray-50">
                  <div className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Link
                          href={`/admin/tickets/${ticket.id}`}
                          className="text-sm font-medium text-blue-600 hover:text-blue-800 truncate"
                        >
                          {ticket.title}
                        </Link>
                        <div className="ml-2 flex-shrink-0 flex">
                          <span
                            className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${getPriorityColor(
                              ticket.priority
                            )}`}
                          >
                            {ticket.priority}
                          </span>
                          <span
                            className={`ml-2 inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${getStatusColor(
                              ticket.status
                            )}`}
                          >
                            {getStatusLabel(ticket.status)}
                          </span>
                        </div>
                      </div>
                      <div className="ml-2 flex-shrink-0 flex">
                        <Link
                          href={`/admin/tickets/${ticket.id}`}
                          className="text-blue-600 hover:text-blue-900 text-sm font-medium"
                        >
                          View Details →
                        </Link>
                      </div>
                    </div>
                    <div className="mt-2 sm:flex sm:justify-between">
                      <div className="sm:flex">
                        <p className="flex items-center text-sm text-gray-500">
                          {ticket.user}
                        </p>
                        <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                          {ticket.category}
                        </p>
                      </div>
                      <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                        <p>Created {ticket.created}</p>
                        <p className="ml-6">Updated {ticket.lastUpdate}</p>
                      </div>
                    </div>
                    <p className="mt-2 text-sm text-gray-600">
                      {ticket.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
