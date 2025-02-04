import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Hero />

        <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Everything you need to run your books.
            </h2>
            <p className="text-lg text-gray-600 text-center mb-16">
              Well everything you need if you aren't that picky about minor
              details like tax compliance.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2">Payroll</h3>
                  <p className="text-gray-600">
                    Keep track of everyone's salaries and whether or not they've
                    been paid. Direct deposit not supported.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2">Claim expenses</h3>
                  <p className="text-gray-600">
                    All of your receipts organized into one place, as long as
                    you don't mind typing in the data by hand.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2">VAT handling</h3>
                  <p className="text-gray-600">
                    We only sell our software to companies who don't deal with
                    VAT at all, so technically we do all the VAT stuff they
                    need.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2">Reporting</h3>
                  <p className="text-gray-600">
                    Easily export your data into an Excel spreadsheet where you
                    can do whatever the hell you want with it.
                  </p>
                </div>
              </div>
              <div className="lg:pl-8">
                <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                  <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <img
                    src="/dashboard-preview.png"
                    alt="Dashboard Preview"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Simplify everyday business tasks.
            </h2>
            <p className="text-lg text-gray-600 text-center mb-16">
              Because you'd probably be a little confused if we suggested you
              complicate your everyday business tasks instead.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Reporting</h3>
                <p className="text-gray-600">
                  Stay on top of things with always up-to-date reporting
                  features.
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Inventory</h3>
                <p className="text-gray-600">
                  Never lose track of what's in stock with accurate inventory
                  tracking.
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Contacts</h3>
                <p className="text-gray-600">
                  Organize all of your contacts, service providers, and invoices
                  in one place.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-lg text-gray-600 text-center mb-16">
              No contracts. No hidden fees. No nonsense.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-semibold mb-4">Starter</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$9</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Up to 5 users
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Basic reporting
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Mobile app access
                  </li>
                </ul>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300">
                  Get started
                </button>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-blue-600 relative">
                <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 text-sm rounded-bl-lg">
                  Popular
                </div>
                <h3 className="text-xl font-semibold mb-4">Professional</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$29</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Up to 20 users
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Advanced reporting
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Priority support
                  </li>
                </ul>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300">
                  Get started
                </button>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-semibold mb-4">Enterprise</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">Custom</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Unlimited users
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Custom reporting
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Dedicated support
                  </li>
                </ul>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300">
                  Contact sales
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-gray-50 rounded-2xl p-8 max-w-6xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="flex justify-between items-center p-4 border-b">
                  <h3 className="text-lg font-semibold">
                    Profit & Loss for 2021/2022
                  </h3>
                  <button className="text-blue-600 hover:text-blue-700">
                    Compare
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="text-left p-4">Category</th>
                        <th className="text-right p-4">Apr</th>
                        <th className="text-right p-4">May</th>
                        <th className="text-right p-4">Jun</th>
                        <th className="text-right p-4">Jul</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-4">Turnover</td>
                        <td className="text-right p-4">$328</td>
                        <td className="text-right p-4">$219</td>
                        <td className="text-right p-4">$475</td>
                        <td className="text-right p-4">$450</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-4">Sales</td>
                        <td className="text-right p-4">$6,513</td>
                        <td className="text-right p-4">$1,033</td>
                        <td className="text-right p-4">$1,892</td>
                        <td className="text-right p-4">$6,410</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Loved by businesses worldwide.
            </h2>
            <p className="text-lg text-gray-600 text-center mb-16">
              Our software is so simple that people can't help but fall in love
              with it. Simplicity is easy when you just skip tons of
              mission-critical features.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <p className="text-gray-700 mb-6">
                  "Xpensea is so easy to use I can't help but wonder if it's
                  really doing the things the government expects me to do."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold">Sarah Thompson</h4>
                    <p className="text-gray-600 text-sm">CEO at TechStart</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <p className="text-gray-700 mb-6">
                  "The best part about Xpensea is every time I pay my employees,
                  my bank balance doesn't go down like it used to. Looking
                  forward to spending this extra cash."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold">Michael Chen</h4>
                    <p className="text-gray-600 text-sm">Founder at GrowthCo</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <p className="text-gray-700 mb-6">
                  "I used to have to remit tax to the government and with
                  Xpensea I somehow don't have to do that anymore. Nervous to
                  travel there now though."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold">Lisa Anderson</h4>
                    <p className="text-gray-600 text-sm">
                      Owner at Design Studio
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Frequently asked questions
            </h2>
            <p className="text-lg text-gray-600 text-center mb-16">
              If you can't find what you're looking for, email our support team
              and if you're lucky someone will get back to you.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div>
                <h3 className="font-semibold text-lg mb-3">
                  Does Xpensea handle VAT?
                </h3>
                <p className="text-gray-600">
                  Well no, but if you move your company offshore you can
                  probably ignore it.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3">
                  Can I pay for my subscription via purchase order?
                </h3>
                <p className="text-gray-600">
                  Absolutely, we are happy to take your money in all forms.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3">
                  How do you generate reports?
                </h3>
                <p className="text-gray-600">
                  You just tell us what data you need a report for, and we get
                  our kids to create beautiful charts using only the finest
                  crayons.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3">
                  Can we expect more inventory features?
                </h3>
                <p className="text-gray-600">
                  In life it's really better to never expect anything at all.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Get started today</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              It's time to take control of your books. Buy our software so you
              can feel like you're doing something productive.
            </p>
            <Link
              href="/signup"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Get 6 months free
            </Link>
          </div>
        </section>

        <footer className="bg-gray-900 text-gray-400 py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-white font-semibold mb-4">Product</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#features"
                      className="hover:text-white transition-colors duration-200"
                    >
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#pricing"
                      className="hover:text-white transition-colors duration-200"
                    >
                      Pricing
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/about"
                      className="hover:text-white transition-colors duration-200"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className="hover:text-white transition-colors duration-200"
                    >
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/docs"
                      className="hover:text-white transition-colors duration-200"
                    >
                      Documentation
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/support"
                      className="hover:text-white transition-colors duration-200"
                    >
                      Support
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/privacy"
                      className="hover:text-white transition-colors duration-200"
                    >
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms"
                      className="hover:text-white transition-colors duration-200"
                    >
                      Terms
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center">
              <p>
                &copy; {new Date().getFullYear()} Xpensea. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
