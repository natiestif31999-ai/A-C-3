// This component renders the responsive navigation bar for the website
"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  // State to manage mobile menu toggle
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and brand name */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              AID-CONNECT
            </Link>
          </div>

          {/* Desktop navigation links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link href="/programs" className="text-gray-700 hover:text-blue-600 transition-colors">
              Programs
            </Link>
            <Link href="/donate" className="text-gray-700 hover:text-blue-600 transition-colors">
              Donate
            </Link>
            <Link href="/volunteer" className="text-gray-700 hover:text-blue-600 transition-colors">
              Volunteer
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </Link>
            <Link href="/admin" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Admin Demo
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                Home
              </Link>
              <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                About
              </Link>
              <Link href="/programs" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                Programs
              </Link>
              <Link href="/donate" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                Donate
              </Link>
              <Link href="/volunteer" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                Volunteer
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                Contact
              </Link>
              <Link href="/admin" className="block px-3 py-2 bg-blue-600 text-white rounded-md">
                Admin Demo
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}