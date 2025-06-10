// src/components/CallToAction.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function CallToAction() {
  return (
    <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-16 md:py-20 animate-fade-in-up">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
          Ready to Take the Next Step?
        </h2>
        <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto">
          Join the Gujarat Public School family and empower your child with an education that lasts a lifetime.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link
            to="/admissions"
            className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Admissions Process
          </Link>
          <Link
            to="/contact"
            className="bg-white text-blue-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;