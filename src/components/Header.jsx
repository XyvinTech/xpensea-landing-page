"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    console.log("sectionId", sectionId);

    if (!isHomePage) {
      window.location.href = `/#${sectionId}`;
      return;
    }

    let element;
    if (sectionId) element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass shadow-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <img src="/xpen.svg" alt="Logo" className="w-8 h-8" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Xpensea
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("features")}
              className="navbar-link"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="navbar-link"
            >
              Pricing
            </button>
            <Link href="/blog" className="navbar-link">
              Blog
            </Link>

            <button
              onClick={() => scrollToSection("contact")}
              className="navbar-link"
            >
              Contact
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <Link href="/signup" className="btn-primary">
              Get started
            </Link>
          </div>

          <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4">
          <div className="container flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection("features")}
              className="nav-link"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="nav-link"
            >
              Pricing
            </button>
            <Link href="/blog" className="nav-link">
              Blog
            </Link>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="nav-link"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="nav-link"
            >
              Contact
            </button>
            <hr className="my-2" />
            <Link href="/login" className="nav-link">
              Sign in
            </Link>
            <Link href="/signup" className="btn-primary text-center">
              Get started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
