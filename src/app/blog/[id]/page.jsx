"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import Header from "../../../components/Header";

const blogPosts = [
  {
    id: 1,
    title: "10 Essential Tips for Small Business Expense Management",
    content: `
      Managing business expenses effectively is crucial for the success and growth of any small business. Here are ten essential tips to help you stay on top of your finances:

      1. Separate Personal and Business Expenses
      The first and most important rule of business expense management is to keep your personal and business finances separate. Open a dedicated business bank account and credit card to make tracking expenses easier and more accurate.

      2. Implement Digital Receipt Management
      Gone are the days of keeping paper receipts in a shoebox. Use digital tools to scan and store receipts immediately after purchases. This makes it easier to track expenses and ensures you have backup documentation for tax purposes.

      3. Set Up an Expense Policy
      Create clear guidelines for what constitutes a business expense and how employees should submit expense reports. This helps prevent confusion and ensures consistent treatment of expenses across your organization.

      4. Use Expense Management Software
      Invest in good expense management software that can automate much of the tracking and reporting process. Look for features like receipt scanning, automatic categorization, and integration with your accounting software.

      5. Regular Review and Analysis
      Schedule regular reviews of your expense reports to identify trends, spot potential issues, and find opportunities for cost savings. This data can be invaluable for budgeting and financial planning.
    `,
    author: "Sarah Johnson",
    role: "Financial Analyst",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Business Finance",
    image: "/blog/expense-management.jpg",
  },
  // ... other blog posts
];

export default function BlogPost() {
  const params = useParams();
  const post = blogPosts.find((p) => p.id === parseInt(params.id));

  if (!post) {
    return (

      <>
      <Header />
      <main className="pt-20">
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post not found</h1>

          <Link href="/blog" className="text-blue-600 hover:underline">
            Back to blog
          </Link>
        </div>
      </div>
      </main>
      </>
    );
  }


  return (
    <>
    <Header />
    <main className="pt-20">
    <div className="min-h-screen bg-white pt-20">
      <article className="max-w-3xl mx-auto px-4 py-12">
        {/* Article Header */}

        <div className="mb-8">
          <Link
            href="/blog"
            className="text-blue-600 hover:underline mb-8 inline-block"
          >
            ← Back to blog
          </Link>
          <div className="flex items-center space-x-2 mb-4">
            <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full">
              {post.category}
            </span>
            <span className="text-gray-500 text-sm">{post.readTime}</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center justify-between border-b border-gray-200 pb-8">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
              <div>
                <p className="font-medium">{post.author}</p>
                <p className="text-gray-500">{post.role}</p>
              </div>
            </div>
            <span className="text-gray-500">{post.date}</span>
          </div>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          {post.content.split("\n").map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Share and Subscribe */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Share this article:</span>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </button>
            </div>
            <Link href="/signup" className="btn-primary">
              Get started with Xpensea
            </Link>
          </div>
        </div>
      </article>

      {/* Newsletter */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">
                Subscribe to our newsletter
              </h3>
              <p className="text-gray-600 mb-6">
                Get the latest insights on expense management and business
                finance delivered to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="btn-primary whitespace-nowrap">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
      </main>
      </>
  );
}

