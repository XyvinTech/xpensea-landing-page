"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import AdminNavbar from "../../../../components/AdminNavbar";

export default function TicketDetails() {
  const params = useParams();
  const [newComment, setNewComment] = useState("");

  // Mock ticket data - In a real app, this would come from an API
  const ticket = {
    id: params.id,
    title: "Unable to access dashboard",
    description:
      "I'm getting a 404 error when trying to access the main dashboard. This started happening after the latest update. I've tried clearing my cache and using different browsers, but the issue persists.",
    status: "open",
    priority: "high",
    category: "Technical",
    created: "Mar 14, 2024",
    lastUpdated: "Mar 15, 2024",
    user: {
      name: "John Smith",
      email: "john@example.com",
      avatar: "/avatars/default.png",
    },
    assignedTo: {
      name: "Sarah Johnson",
      email: "sarah@example.com",
      avatar: "/avatars/default.png",
    },
    timeline: [
      {
        id: 1,
        type: "created",
        user: "John Smith",
        message: "Ticket created",
        date: "Mar 14, 2024",
        time: "10:30 AM",
      },
      {
        id: 2,
        type: "comment",
        user: "Sarah Johnson",
        message:
          "I'll look into this right away. Could you please provide your browser version and operating system?",
        date: "Mar 14, 2024",
        time: "11:15 AM",
      },
      {
        id: 3,
        type: "comment",
        user: "John Smith",
        message: "I'm using Chrome 122.0.6261.112 on Windows 11",
        date: "Mar 14, 2024",
        time: "11:45 AM",
      },
      {
        id: 4,
        type: "status_change",
        user: "Sarah Johnson",
        message: "Status changed from 'new' to 'in progress'",
        date: "Mar 14, 2024",
        time: "12:00 PM",
      },
    ],
    metadata: {
      browser: "Chrome 122.0.6261.112",
      os: "Windows 11",
      device: "Desktop",
      url: "/dashboard",
      errorCode: "404",
    },
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "open":
        return "bg-blue-100 text-blue-800";
      case "in_progress":
        return "bg-yellow-100 text-yellow-800";
      case "resolved":
        return "bg-green-100 text-green-800";
      case "closed":
        return "bg-gray-100 text-gray-800";
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

  const getTimelineIcon = (type) => {
    switch (type) {
      case "created":
        return (
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        );
      case "comment":
        return (
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        );
      case "status_change":
        return (
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
        );
      default:
        return null;
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
                  href="/admin/tickets"
                  className="text-blue-600 hover:text-blue-700 mr-4"
                >
                  ← Back to Tickets
                </Link>
                <h1 className="text-2xl font-bold text-gray-900">
                  Ticket #{ticket.id}
                </h1>
              </div>
              <div className="flex space-x-3">
                <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Assign
                </button>
                <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Resolve Ticket
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Main Ticket Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Ticket Information */}
              <div className="bg-white shadow-sm rounded-lg p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  {ticket.title}
                </h2>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-sm font-semibold ${getStatusColor(
                      ticket.status
                    )}`}
                  >
                    {ticket.status}
                  </span>
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-sm font-semibold ${getPriorityColor(
                      ticket.priority
                    )}`}
                  >
                    {ticket.priority}
                  </span>
                  <span className="inline-flex rounded-full px-3 py-1 text-sm font-semibold bg-gray-100 text-gray-800">
                    {ticket.category}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{ticket.description}</p>
                <div className="border-t border-gray-200 pt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-500">
                        Created
                      </p>
                      <p className="mt-1 text-sm text-gray-900">
                        {ticket.created}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">
                        Last Updated
                      </p>
                      <p className="mt-1 text-sm text-gray-900">
                        {ticket.lastUpdated}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="bg-white shadow-sm rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-6">
                  Timeline
                </h3>
                <div className="flow-root">
                  <ul className="-mb-8">
                    {ticket.timeline.map((event, eventIdx) => (
                      <li key={event.id}>
                        <div className="relative pb-8">
                          {eventIdx !== ticket.timeline.length - 1 ? (
                            <span
                              className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                              aria-hidden="true"
                            />
                          ) : null}
                          <div className="relative flex space-x-3">
                            <div>
                              <span
                                className={`h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white ${
                                  event.type === "created"
                                    ? "bg-green-500"
                                    : event.type === "comment"
                                    ? "bg-blue-500"
                                    : "bg-gray-500"
                                }`}
                              >
                                {getTimelineIcon(event.type)}
                              </span>
                            </div>
                            <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                              <div>
                                <p className="text-sm text-gray-500">
                                  <span className="font-medium text-gray-900">
                                    {event.user}
                                  </span>{" "}
                                  {event.message}
                                </p>
                              </div>
                              <div className="text-right text-sm whitespace-nowrap text-gray-500">
                                {event.date} at {event.time}
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* New Comment Form */}
                <div className="mt-6">
                  <label htmlFor="comment" className="sr-only">
                    Add comment
                  </label>
                  <div>
                    <textarea
                      rows={4}
                      name="comment"
                      id="comment"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      placeholder="Add a comment..."
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                    />
                  </div>
                  <div className="mt-3 flex justify-end">
                    <button
                      type="submit"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Add Comment
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* User Information */}
              <div className="bg-white shadow-sm rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Ticket Details
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">
                      Reported By
                    </h4>
                    <div className="mt-2 flex items-center">
                      <div className="flex-shrink-0">
                        <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">
                          {ticket.user.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {ticket.user.email}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-500">
                      Assigned To
                    </h4>
                    <div className="mt-2 flex items-center">
                      <div className="flex-shrink-0">
                        <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">
                          {ticket.assignedTo.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {ticket.assignedTo.email}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical Details */}
              <div className="bg-white shadow-sm rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Technical Details
                </h3>
                <div className="space-y-4">
                  {Object.entries(ticket.metadata).map(([key, value]) => (
                    <div key={key}>
                      <dt className="text-sm font-medium text-gray-500">
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900">{value}</dd>
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
