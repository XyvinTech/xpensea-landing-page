"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "../../components/Header";

const blogPosts = [
  {
    id: 1,
    title: "10 Essential Tips for Small Business Expense Management",
    excerpt:
      "Learn how to effectively track and manage your business expenses with these proven strategies.",
    author: "Sarah Johnson",
    role: "Financial Analyst",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Business Finance",
    image: "/blog/expense-management.jpg",
  },
  {
    id: 2,
    title: "The Future of Digital Receipt Management",
    excerpt:
      "Discover how AI and automation are revolutionizing the way businesses handle receipts and expenses.",
    author: "Michael Chen",
    role: "Tech Lead",
    date: "March 12, 2024",
    readTime: "4 min read",
    category: "Technology",
    image: "/blog/digital-receipts.jpg",
  },
  {
    id: 3,
    title: "Tax Season Preparation: A Complete Guide",
    excerpt:
      "Stay ahead of tax season with our comprehensive guide to organizing your financial records.",
    author: "Emily Rodriguez",
    role: "Tax Specialist",
    date: "March 10, 2024",
    readTime: "7 min read",
    category: "Taxation",
    image: "/blog/tax-preparation.jpg",
  },
  {
    id: 4,
    title: "Maximizing Your Business Deductions in 2024",
    excerpt:
      "Expert tips on identifying and claiming all eligible business expenses for tax benefits.",
    author: "David Park",
    role: "Business Consultant",
    date: "March 8, 2024",
    readTime: "6 min read",
    category: "Tax Planning",
    image: "/blog/business-deductions.jpg",
  },
  {
    id: 5,
    title: "Going Paperless: The Environmental Impact",
    excerpt:
      "How digital expense management contributes to sustainability and reduces your carbon footprint.",
    author: "Lisa Green",
    role: "Sustainability Expert",
    date: "March 5, 2024",
    readTime: "4 min read",
    category: "Sustainability",
    image: "/blog/paperless-office.jpg",
  },
];

const categories = [
  "All Posts",
  "Business Finance",
  "Technology",
  "Taxation",
  "Tax Planning",
  "Sustainability",
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Posts");

  const filteredPosts =
    selectedCategory === "All Posts"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <>
      <Header />
      <main className="pt-20">
        <div className="min-h-screen bg-gray-50">
          <div className="bg-white">
            <div className="container mx-auto px-4 py-24">
              <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
                Insights for Better Financial Management
              </h1>
              <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto">
                Expert advice and tips on expense management, taxation, and
                business finance.
              </p>
            </div>
          </div>

          {/* Categories */}
          <div className="bg-white border-t border-b border-gray-100">
            <div className="container mx-auto px-4 py-4 overflow-x-auto">
              <div className="flex items-center justify-start space-x-4 min-w-max">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                      selectedCategory === category
                        ? "bg-blue-600 text-white"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Blog posts grid */}
          <div className="container mx-auto px-4 py-12">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium text-gray-900">
                  No posts found
                </h3>
                <p className="mt-2 text-gray-500">
                  No blog posts found in this category. Try selecting a
                  different category.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <article
                    key={post.id}
                    className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="relative h-48">
                      <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center space-x-2 mb-4">
                        <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full">
                          {post.category}
                        </span>
                        <span className="text-gray-500 text-sm">
                          {post.readTime}
                        </span>
                      </div>
                      <h2 className="text-xl font-bold mb-2 hover:text-blue-600 transition-colors">
                        <Link href={`/blog/${post.id}`}>{post.title}</Link>
                      </h2>
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                          <div>
                            <p className="text-sm font-medium">{post.author}</p>
                            <p className="text-sm text-gray-500">{post.role}</p>
                          </div>
                        </div>
                        <span className="text-sm text-gray-500">
                          {post.date}
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {/* Newsletter signup */}
            <div className="mt-16 bg-blue-600 rounded-2xl p-8 md:p-12">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Stay updated with our newsletter
                </h2>
                <p className="text-blue-100 mb-8">
                  Get the latest insights on expense management and business
                  finance delivered to your inbox.
                </p>
                <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <button className="btn-secondary whitespace-nowrap">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
