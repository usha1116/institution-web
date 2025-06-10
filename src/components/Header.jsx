import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md py-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-800">
          Gujarat Public School
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-600 font-semibold border-b-2 border-blue-600'
                : 'text-gray-700 hover:text-blue-600'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-600 font-semibold border-b-2 border-blue-600'
                : 'text-gray-700 hover:text-blue-600'
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/admissions"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-600 font-semibold border-b-2 border-blue-600'
                : 'text-gray-700 hover:text-blue-600'
            }
          >
            Admissions
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-600 font-semibold border-b-2 border-blue-600'
                : 'text-gray-700 hover:text-blue-600'
            }
          >
            Contact
          </NavLink>
          {/* Add more nav items as per screenshot */}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg pb-4">
          <nav className="flex flex-col items-center space-y-4">
            <NavLink
              to="/"
              onClick={() => setIsOpen(false)}
              className="block text-gray-700 hover:text-blue-600 py-2"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setIsOpen(false)}
              className="block text-gray-700 hover:text-blue-600 py-2"
            >
              About Us
            </NavLink>
            <NavLink
              to="/admissions"
              onClick={() => setIsOpen(false)}
              className="block text-gray-700 hover:text-blue-600 py-2"
            >
              Admissions
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block text-gray-700 hover:text-blue-600 py-2"
            >
              Contact
            </NavLink>
            {/* Add more mobile nav items */}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;