// // src/pages/AboutPage.jsx
// import React from 'react';

// function AboutPage() {
//   return (
//     <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24 min-h-[60vh]">
//       <h1 className="text-5xl font-bold text-gray-800 mb-8 text-center animate-fade-in-up">About Gujarat Public School</h1>
//       <p className="text-lg text-gray-700 leading-relaxed mb-6 animate-fade-in-up delay-200">
//         Gujarat Public School was founded with a vision to create a vibrant learning community that fosters academic excellence, critical thinking, and holistic development. Since our inception in [Year of Establishment], we have been committed to providing a nurturing environment where every student feels valued and empowered to achieve their full potential.
//       </p>
//       <p className="text-lg text-gray-700 leading-relaxed mb-6 animate-fade-in-up delay-400">
//         Our dedicated faculty members are passionate educators who go beyond textbooks to inspire a love for learning. We pride ourselves on our innovative curriculum, state-of-the-art facilities, and a strong emphasis on co-curricular activities, including sports, arts, and community service.
//       </p>
//       <p className="text-lg text-gray-700 leading-relaxed animate-fade-in-up delay-600">
//         We believe that education is a collaborative journey involving students, parents, and teachers. We strive to instill values of integrity, respect, and responsibility, preparing our students to become responsible global citizens and lifelong learners.
//       </p>
//       {/* Add more sections here like mission, vision, values, leadership team etc. */}
//     </div>
//   );
// }

// export default AboutPage;

// Example in your AboutPage.jsx or any content section
import React from 'react';
import AnimatedSection from '../components/AnimatedSection';

function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">About Our School</h1>

      <AnimatedSection animationClass="fade-in-up">
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Gujarat Public School has a rich history of academic excellence and holistic development.
          Founded in [Year], we have been committed to providing a nurturing environment...
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
        <AnimatedSection animationClass="fade-in-left">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-blue-700">Our Vision</h2>
            <p className="text-gray-600">
              To empower students with knowledge, skills, and values to thrive in a globalized world.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection animationClass="fade-in-right" delay={200}> {/* Add a slight delay */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-blue-700">Our Mission</h2>
            <p className="text-gray-600">
              To foster critical thinking, creativity, and compassion through innovative teaching methodologies.
            </p>
          </div>
        </AnimatedSection>
      </div>

      <AnimatedSection animationClass="zoom-in" threshold={0.5}>
        <div className="bg-green-100 p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold text-green-800 mb-4">Why Choose Us?</h2>
          <ul className="list-disc list-inside text-xl text-green-700 mx-auto max-w-lg">
            <li>Experienced and Dedicated Faculty</li>
            <li>State-of-the-Art Facilities</li>
            <li>Comprehensive Curriculum</li>
            <li>Focus on Individual Growth</li>
          </ul>
        </div>
      </AnimatedSection>
    </div>
  );
}

export default AboutPage;