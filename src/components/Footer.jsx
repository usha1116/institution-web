// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 md:px-6 lg:px-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Gujarat Public School</h3>
          <p className="text-gray-400 text-sm">
            Dedicated to providing quality education and fostering holistic development for a brighter future.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/about" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">About Us</Link></li>
            <li><Link to="/admissions" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Admissions</Link></li>
            <li><Link to="/gallery" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Gallery</Link></li>
            <li><Link to="/contact" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Contact Us</Link></li>
            {/* Add more links as needed */}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p className="text-gray-400 text-sm">
            123 School Lane, Vadodara, Gujarat, India <br />
            Phone: +91 12345 67890 <br />
            Email: info@gujaratpublicschool.in
          </p>
        </div>

        {/* Social Media / Newsletter */}
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
              <i className="fab fa-facebook-f text-2xl"></i> {/* Requires Font Awesome or similar */}
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
              <i className="fab fa-twitter text-2xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
              <i className="fab fa-instagram text-2xl"></i>
            </a>
          </div>
          {/* You could add a small newsletter signup here */}
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-8 pt-6 border-t border-gray-700">
        &copy; {new Date().getFullYear()} Gujarat Public School. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;