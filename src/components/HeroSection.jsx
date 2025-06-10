// src/components/HeroSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
//import heroImage from '../assets/hero-bg.jpg'; // Ensure this image exists in your assets folder
import AdmissionsForm from './AdmissionsForm'; // Using the Formik form here

function HeroSection() {
  return (
    <section
      className="relative bg-yellow-400 text-white py-16 md:py-24 overflow-hidden"
      style={{
        //backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay to darken background image for text readability */}
      <div className="absolute inset-0 bg-yellow-500 opacity-80"></div>
      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left md:w-1/2 mb-12 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 animate-fade-in-up">
            Leading CBSE & SSRA School in Vadodara
          </h1>
          <p className="text-lg md:text-xl mb-8 animate-fade-in-up delay-200">
            Providing quality education and fostering holistic development.
          </p>
          <Link to="/admissions" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 animate-zoom-in">
            Explore Admissions
          </Link>
        </div>

        {/* Enquire Now Form */}
        <div className="md:w-1/2 flex justify-center md:justify-end animate-fade-in-right">
          <AdmissionsForm /> {/* Re-using the AdmissionsForm component */}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;