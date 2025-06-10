// src/pages/AboutPage.jsx
import React from 'react';

function AboutPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24 min-h-[60vh]">
      <h1 className="text-5xl font-bold text-gray-800 mb-8 text-center animate-fade-in-up">About Gujarat Public School</h1>
      <p className="text-lg text-gray-700 leading-relaxed mb-6 animate-fade-in-up delay-200">
        Gujarat Public School was founded with a vision to create a vibrant learning community that fosters academic excellence, critical thinking, and holistic development. Since our inception in [Year of Establishment], we have been committed to providing a nurturing environment where every student feels valued and empowered to achieve their full potential.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed mb-6 animate-fade-in-up delay-400">
        Our dedicated faculty members are passionate educators who go beyond textbooks to inspire a love for learning. We pride ourselves on our innovative curriculum, state-of-the-art facilities, and a strong emphasis on co-curricular activities, including sports, arts, and community service.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed animate-fade-in-up delay-600">
        We believe that education is a collaborative journey involving students, parents, and teachers. We strive to instill values of integrity, respect, and responsibility, preparing our students to become responsible global citizens and lifelong learners.
      </p>
      {/* Add more sections here like mission, vision, values, leadership team etc. */}
    </div>
  );
}

export default AboutPage;