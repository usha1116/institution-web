// import React, { useState } from 'react';
// import { Link, NavLink } from 'react-router-dom';

// function Header() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="bg-white shadow-md py-4 sticky top-0 z-50">
//       <div className="container mx-auto flex justify-between items-center px-4">
//         {/* Logo */}
//         <Link to="/" className="text-2xl font-bold text-blue-800">
//           Gujarat Public School
//         </Link>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex space-x-8">
//           <NavLink
//             to="/"
//             className={({ isActive }) =>
//               isActive
//                 ? 'text-blue-600 font-semibold border-b-2 border-blue-600'
//                 : 'text-gray-700 hover:text-blue-600'
//             }
//           >
//             Home
//           </NavLink>
//           <NavLink
//             to="/about"
//             className={({ isActive }) =>
//               isActive
//                 ? 'text-blue-600 font-semibold border-b-2 border-blue-600'
//                 : 'text-gray-700 hover:text-blue-600'
//             }
//           >
//             About Us
//           </NavLink>
//           <NavLink
//             to="/admissions"
//             className={({ isActive }) =>
//               isActive
//                 ? 'text-blue-600 font-semibold border-b-2 border-blue-600'
//                 : 'text-gray-700 hover:text-blue-600'
//             }
//           >
//             Admissions
//           </NavLink>
//           <NavLink
//             to="/contact"
//             className={({ isActive }) =>
//               isActive
//                 ? 'text-blue-600 font-semibold border-b-2 border-blue-600'
//                 : 'text-gray-700 hover:text-blue-600'
//             }
//           >
//             Contact
//           </NavLink>
//           {/* Add more nav items as per screenshot */}
//         </nav>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="md:hidden text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
//         >
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             {isOpen ? (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M6 18L18 6M6 6l12 12"
//               ></path>
//             ) : (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16M4 18h16"
//               ></path>
//             )}
//           </svg>
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-white shadow-lg pb-4">
//           <nav className="flex flex-col items-center space-y-4">
//             <NavLink
//               to="/"
//               onClick={() => setIsOpen(false)}
//               className="block text-gray-700 hover:text-blue-600 py-2"
//             >
//               Home
//             </NavLink>
//             <NavLink
//               to="/about"
//               onClick={() => setIsOpen(false)}
//               className="block text-gray-700 hover:text-blue-600 py-2"
//             >
//               About Us
//             </NavLink>
//             <NavLink
//               to="/admissions"
//               onClick={() => setIsOpen(false)}
//               className="block text-gray-700 hover:text-blue-600 py-2"
//             >
//               Admissions
//             </NavLink>
//             <NavLink
//               to="/contact"
//               onClick={() => setIsOpen(false)}
//               className="block text-gray-700 hover:text-blue-600 py-2"
//             >
//               Contact
//             </NavLink>
//             {/* Add more mobile nav items */}
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// }

// export default Header;
"use client";
import React, { useRef, useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const { width, height } = useDimensions(containerRef);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold border-b-2 border-blue-600"
      : "text-gray-700 hover:text-blue-600";

  return (
    <header className="bg-white shadow-md py-4 sticky top-0 z-50">
      <div
        className="container mx-auto flex justify-between items-center px-4"
        ref={containerRef}
      >
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-800">
          Gujarat Public School
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About Us
          </NavLink>
          <NavLink to="/admissions" className={navLinkClass}>
            Admissions
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </nav>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none z-50 relative"
        >
          <svg width="23" height="23" viewBox="0 0 23 23">
            <Path
              isOpen={isOpen}
              d="M 2 2.5 L 20 2.5"
              open="M 3 16.5 L 17 2.5"
            />
            <Path
              isOpen={isOpen}
              d="M 2 9.423 L 20 9.423"
              open=""
              hideOnOpen
            />
            <Path
              isOpen={isOpen}
              d="M 2 16.346 L 20 16.346"
              open="M 3 2.5 L 17 16.346"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Animated */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed top-0 right-0 w-2/4 sm:w-1/2 h-screen bg-white  shadow-lg p-8 z-40"
          >
            <nav className="flex flex-col items-start space-y-6">
              <NavLink
                to="/"
                onClick={() => setIsOpen(false)}
                className="text-lg text-blue-800 hover:text-blue-500"
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                onClick={() => setIsOpen(false)}
                className="text-lg text-blue-800 hover:text-blue-500"
              >
                About Us
              </NavLink>
              <NavLink
                to="/admissions"
                onClick={() => setIsOpen(false)}
                className="text-lg text-blue-800 hover:text-blue-500"
              >
                Admissions
              </NavLink>
              <NavLink
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="text-lg text-blue-800 hover:text-blue-500"
              >
                Contact
              </NavLink>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;

// Hamburger Line Animations
const Path = ({ d, open, isOpen, hideOnOpen = false }) => {
  const variants = {
    closed: { d },
    open: open ? { d: open } : { opacity: hideOnOpen ? 0 : 1 },
  };

  return (
    <motion.path
      variants={variants}
      animate={isOpen ? "open" : "closed"}
      transition={{ duration: 0.3 }}
      fill="transparent"
      strokeWidth="3"
      stroke="hsl(0, 0%, 18%)"
      strokeLinecap="round"
    />
  );
};

// Dimensions Hook
const useDimensions = (ref) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    if (ref.current) {
      dimensions.current.width = ref.current.offsetWidth;
      dimensions.current.height = ref.current.offsetHeight;
    }
  }, [ref]);

  return dimensions.current;
};
