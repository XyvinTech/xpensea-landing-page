"use client";

import { useState } from "react";
import AdminNavbar from "../../../components/AdminNavbar";

export default function Settings() {
  const [emailNotifications, setEmailNotifications] = useState({
    newUser: true,
    newSubscription: true,
    newTicket: true,
    ticketUpdate: false,
    weeklyReport: true,
    monthlyReport: true,
  });

  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuth: false,
    loginNotifications: true,
    sessionTimeout: "30",
  });

  const [displaySettings, setDisplaySettings] = useState({
    theme: "light",
    language: "en",
    timezone: "UTC",
  });

  const [apiSettings, setApiSettings] = useState({
    enableApi: true,
    rateLimit: "1000",
    apiKey: "sk_test_123456789",
  });

  return (
    <>
      <AdminNavbar />
      <main className="min-h-screen bg-gray-50 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="md:flex md:items-center md:justify-between mb-8">
            <div className="flex-1 min-w-0">
              <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                Settings
              </h2>
            </div>
            <div className="mt-4 flex md:mt-0 md:ml-4">
              <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Save Changes
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {/* Email Notifications */}
            <div className="bg-white shadow-sm rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">
                  Email Notifications
                </h3>
                <div className="space-y-4">
                  {Object.entries(emailNotifications).map(([key, value]) => (
                    <div
                      key={key}
                      className="flex items-center justify-between"
                    >
                      <div>
                        <label
                          htmlFor={key}
                          className="text-sm font-medium text-gray-700"
                        >
                          {key
                            .replace(/([A-Z])/g, " $1")
                            .replace(/^./, (str) => str.toUpperCase())}
                        </label>
                        <p className="text-sm text-gray-500">
                          Receive notifications for{" "}
                          {key.replace(/([A-Z])/g, " $1").toLowerCase()}
                        </p>
                      </div>
                      <button
                        type="button"
                        className={`${
                          value ? "bg-blue-600" : "bg-gray-200"
                        } relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                        onClick={() =>
                          setEmailNotifications({
                            ...emailNotifications,
                            [key]: !value,
                          })
                        }
                      >
                        <span
                          className={`${
                            value ? "translate-x-5" : "translate-x-0"
                          } pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
                        ></span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Security Settings */}
            <div className="bg-white shadow-sm rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">
                  Security Settings
                </h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between">
                      <div>
                        <label className="text-sm font-medium text-gray-700">
                          Two-Factor Authentication
                        </label>
                        <p className="text-sm text-gray-500">
                          Add an extra layer of security to your account
                        </p>
                      </div>
                      <button
                        type="button"
                        className={`${
                          securitySettings.twoFactorAuth
                            ? "bg-blue-600"
                            : "bg-gray-200"
                        } relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                        onClick={() =>
                          setSecuritySettings({
                            ...securitySettings,
                            twoFactorAuth: !securitySettings.twoFactorAuth,
                          })
                        }
                      >
                        <span
                          className={`${
                            securitySettings.twoFactorAuth
                              ? "translate-x-5"
                              : "translate-x-0"
                          } pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
                        ></span>
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Session Timeout (minutes)
                    </label>
                    <select
                      value={securitySettings.sessionTimeout}
                      onChange={(e) =>
                        setSecuritySettings({
                          ...securitySettings,
                          sessionTimeout: e.target.value,
                        })
                      }
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    >
                      <option value="15">15 minutes</option>
                      <option value="30">30 minutes</option>
                      <option value="60">1 hour</option>
                      <option value="120">2 hours</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Display Settings */}
            <div className="bg-white shadow-sm rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">
                  Display Settings
                </h3>
                <div className="space-y-6">
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Theme
                    </label>
                    <select
                      value={displaySettings.theme}
                      onChange={(e) =>
                        setDisplaySettings({
                          ...displaySettings,
                          theme: e.target.value,
                        })
                      }
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    >
                      <option value="light">Light</option>
                      <option value="dark">Dark</option>
                      <option value="system">System</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Language
                    </label>
                    <select
                      value={displaySettings.language}
                      onChange={(e) =>
                        setDisplaySettings({
                          ...displaySettings,
                          language: e.target.value,
                        })
                      }
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    >
                      <option value="en">English</option>
                      <option value="es">Spanish</option>
                      <option value="fr">French</option>
                      <option value="de">German</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Timezone
                    </label>
                    <select
                      value={displaySettings.timezone}
                      onChange={(e) =>
                        setDisplaySettings({
                          ...displaySettings,
                          timezone: e.target.value,
                        })
                      }
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    >
                      <option value="UTC">UTC</option>
                      <option value="EST">EST</option>
                      <option value="PST">PST</option>
                      <option value="GMT">GMT</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* API Settings */}
            <div className="bg-white shadow-sm rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">
                  API Settings
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="text-sm font-medium text-gray-700">
                        Enable API Access
                      </label>
                      <p className="text-sm text-gray-500">
                        Allow external applications to access your data
                      </p>
                    </div>
                    <button
                      type="button"
                      className={`${
                        apiSettings.enableApi ? "bg-blue-600" : "bg-gray-200"
                      } relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                      onClick={() =>
                        setApiSettings({
                          ...apiSettings,
                          enableApi: !apiSettings.enableApi,
                        })
                      }
                    >
                      <span
                        className={`${
                          apiSettings.enableApi
                            ? "translate-x-5"
                            : "translate-x-0"
                        } pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
                      ></span>
                    </button>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      API Rate Limit (requests per hour)
                    </label>
                    <input
                      type="number"
                      value={apiSettings.rateLimit}
                      onChange={(e) =>
                        setApiSettings({
                          ...apiSettings,
                          rateLimit: e.target.value,
                        })
                      }
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      API Key
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <input
                        type="text"
                        value={apiSettings.apiKey}
                        readOnly
                        className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-l-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300"
                      />
                      <button className="inline-flex items-center px-3 py-2 border border-l-0 border-gray-300 rounded-r-md bg-gray-50 text-gray-500 text-sm">
                        Regenerate
                      </button>
                    </div>
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
