// src/pages/AdmissionsPage.jsx
import React from 'react';
import AdmissionsForm from '../components/AdmissionsForm'; // Import the form component

function AdmissionsPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
      <h1 className="text-5xl font-bold text-gray-800 mb-8 text-center animate-fade-in-up">Admissions at Gujarat Public School</h1>

      {/* Overview Section */}
      <section className="bg-white shadow-lg rounded-lg p-8 mb-12 animate-fade-in-up delay-200">
        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">Welcome to Our Admissions</h2>
        <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
          We are delighted that you are considering Gujarat Public School for your child's education. Our admission process is designed to be transparent and supportive, ensuring a smooth transition for new students and their families. We encourage early applications as seats are limited.
        </p>
      </section>

      {/* Admission Process Steps */}
      <section className="bg-gray-50 p-8 rounded-lg shadow-md mb-12 animate-fade-in-up delay-400">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Simple Admission Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 border border-blue-200 bg-white rounded-lg shadow-sm flex flex-col items-center">
            <div className="text-blue-600 text-5xl font-extrabold mb-4 animate-zoom-in delay-200">1</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Enquiry & Registration</h3>
            <p className="text-gray-600 text-base">Submit an online enquiry via our form or visit our school campus during office hours to collect the application kit.</p>
          </div>
          <div className="p-6 border border-blue-200 bg-white rounded-lg shadow-sm flex flex-col items-center">
            <div className="text-blue-600 text-5xl font-extrabold mb-4 animate-zoom-in delay-400">2</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Interaction & Assessment</h3>
            <p className="text-gray-600 text-base">We schedule a friendly interaction with the student and parents. An age-appropriate assessment may be conducted for older grades.</p>
          </div>
          <div className="p-6 border border-blue-200 bg-white rounded-lg shadow-sm flex flex-col items-center">
            <div className="text-blue-600 text-5xl font-extrabold mb-4 animate-zoom-in delay-600">3</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Confirmation & Enrollment</h3>
            <p className="text-gray-600 text-base">Upon successful assessment and interaction, confirm admission by submitting required documents and completing fee payment.</p>
          </div>
        </div>
      </section>

      {/* Admission Form Section */}
      <section className="animate-fade-in-up delay-600">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Submit Your Admission Enquiry</h2>
        <AdmissionsForm /> {/* The reusable Admissions Form component */}
      </section>

      {/* Important Dates / Documents Section */}
      <section className="mt-12 bg-white p-8 rounded-lg shadow-lg animate-fade-in-up delay-800">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Important Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Required Documents:</h3>
            <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
              <li>Original Birth Certificate of the student</li>
              <li>Aadhaar Card copy of student and parents</li>
              <li>Previous Academic Records / Report Cards</li>
              <li>Transfer Certificate (TC) from previous school (if applicable)</li>
              <li>Passport size photographs (3 each for student and parents)</li>
              <li>Proof of Residence</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Key Dates & Deadlines:</h3>
            <p className="text-gray-700 text-lg mb-4">
              Applications for the academic year 2025-2026 are now open.
            </p>
            <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
              <li>Application Deadline: 31st May 2025</li>
              <li>Assessment & Interaction Dates: Ongoing, by appointment</li>
              <li>First List Announcement: 15th June 2025</li>
              <li>New Academic Session Begins: 1st July 2025</li>
            </ul>
            <p className="text-gray-700 text-lg mt-4">
              *Please note that dates are subject to change. Contact our admissions office for the most current information.
            </p>
          </div>
        </div>
        <div className="text-center mt-10">
          <p className="text-xl text-gray-800 font-semibold mb-4">Have questions? Reach out to our admissions team!</p>
          <a
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Contact Admissions
          </a>
        </div>
      </section>
    </div>
  );
}

export default AdmissionsPage;