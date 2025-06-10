// src/pages/HomePage.jsx
import React from 'react';
import HeroSection from '../components/HeroSection';
import CounterSection from '../components/CounterSection'; // Our new counter section
import Card from '../components/Card'; // Our generic card component
import CallToAction from '../components/CallToAction'; // Will define this next
import { Link } from 'react-router-dom';
// Assume you have images in assets folder
import schoolBuilding from '../assets/gallery/img4.jpg';
//import studentsStudying from '../assets/students-studying.jpg';
import philosophyImage from '../assets/philosophy.jpg';
 import campusView1 from '../assets/classroom.jpg';
 import campusView2 from '../assets/gallery/img3.jpg';
 import newsImg1 from '../assets/gallery/img1.jpg'; // Placeholder for news images
import scienceLab from '../assets/gallery/img2.jpg';
import parentTeacherMeet from '../assets/meeting.jpg';
function HomePage() {
  return (
    <div className="overflow-hidden"> {/* To prevent horizontal scroll from animations */}
      <HeroSection />

      {/* Why Us & Philosophy Section */}
      <section className="py-16 md:py-24 bg-white animate-fade-in-up">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 animate-fade-in-left">
            <img
              src={philosophyImage} // Replace with an appropriate image
              alt="School Philosophy"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left animate-fade-in-right">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Why Choose Gujarat Public School?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At Gujarat Public School, we believe in nurturing young minds to become future leaders. Our curriculum is designed to foster critical thinking, creativity, and compassion. With state-of-the-art facilities and a dedicated faculty, we provide an environment where every child can thrive and reach their full potential.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our philosophy revolves around holistic development, blending academic excellence with co-curricular activities and character building. We encourage students to explore their passions, develop strong moral values, and become responsible global citizens.
            </p>
            <button className="mt-8 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
              Learn More About Us
            </button>
          </div>
        </div>
      </section>

      <CounterSection /> {/* The numbers section */}

      {/* Campus View / Photo Gallery Section (Grid of Cards) */}
      <section className="py-16 md:py-24 bg-white animate-fade-in-up">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">Our Vibrant Campus</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              imageUrl={campusView1}
              title="Modern Classrooms"
              description="Spacious and tech-enabled learning environments."
              linkUrl="/gallery"
              linkText="View Gallery"
            />
            <Card
              imageUrl={campusView2}
              title="Sports Facilities"
              description="Fields and courts for a variety of sports."
              linkUrl="/gallery"
              linkText="View Gallery"
            />
            <Card
              imageUrl={schoolBuilding}
              title="Library & Labs"
              description="Well-equipped resources for academic excellence."
              linkUrl="/gallery"
              linkText="View Gallery"
            />
            {/* Add more cards as needed based on your screenshot */}
          </div>
        </div>
      </section>

      {/* Admissions Quick Info Section */}
      <section className="bg-blue-700 text-white py-16 md:py-20 animate-fade-in-up">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Admissions Open for 2025-2026!</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Secure a bright future for your child at Gujarat Public School. We welcome applications for various grades.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <Link to="/admissions" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
              Apply Now
            </Link>
            <Link to="/contact" className="bg-white text-blue-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
              Contact Admissions
            </Link>
          </div>
        </div>
      </section>

      {/* News & Events Section (Grid of Cards) */}
      <section className="py-16 md:py-24 bg-gray-50 animate-fade-in-up">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">Latest News & Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              imageUrl={newsImg1}
              title="Annual Sports Day Success"
              description="Our students showcased incredible talent and sportsmanship."
              linkUrl="#"
              linkText="Read More"
            />
            <Card
              imageUrl={scienceLab} // Use different images for real news
              title="Science Fair Innovation"
              description="Young scientists presented groundbreaking projects."
              linkUrl="#"
              linkText="Read More"
            />
            <Card
              imageUrl={parentTeacherMeet}
              title="Parent-Teacher Meet"
              description="A successful session for collaborative student development."
              linkUrl="#"
              linkText="Read More"
            />
          </div>
          <button className="mt-12 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
            View All News
          </button>
        </div>
      </section>

      <CallToAction /> {/* A final call to action before the footer */}
    </div>
  );
}

export default HomePage;