// import React from 'react';
// import AnimatedSection from '../components/AnimatedSection';

// function AboutPage() {
//   return (
//     <div className="container mx-auto px-4 py-16">
//       <h1 className="text-4xl font-bold text-center mb-12">About Our School</h1>

    //   <AnimatedSection animationClass="fade-in-up">
    //     <p className="text-lg text-gray-700 leading-relaxed mb-8">
    //       Gujarat Public School has a rich history of academic excellence and holistic development.
    //       Founded in [Year], we have been committed to providing a nurturing environment...
    //     </p>
    //   </AnimatedSection>

    //   <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
    //     <AnimatedSection animationClass="fade-in-left">
    //       <div className="bg-white p-6 rounded-lg shadow-md">
    //         <h2 className="text-2xl font-semibold mb-4 text-blue-700">Our Vision</h2>
    //         <p className="text-gray-600">
    //           To empower students with knowledge, skills, and values to thrive in a globalized world.
    //         </p>
    //       </div>
    //     </AnimatedSection>

    //     <AnimatedSection animationClass="fade-in-right" delay={200}> {/* Add a slight delay */}
    //       <div className="bg-white p-6 rounded-lg shadow-md">
    //         <h2 className="text-2xl font-semibold mb-4 text-blue-700">Our Mission</h2>
    //         <p className="text-gray-600">
    //           To foster critical thinking, creativity, and compassion through innovative teaching methodologies.
    //         </p>
    //       </div>
    //     </AnimatedSection>
    //   </div>

    //   <AnimatedSection animationClass="zoom-in" threshold={0.5}>
    //     <div className="bg-green-100 p-8 rounded-lg text-center">
    //       <h2 className="text-3xl font-bold text-green-800 mb-4">Why Choose Us?</h2>
    //       <ul className="list-disc list-inside text-xl text-green-700 mx-auto max-w-lg">
    //         <li>Experienced and Dedicated Faculty</li>
    //         <li>State-of-the-Art Facilities</li>
    //         <li>Comprehensive Curriculum</li>
    //         <li>Focus on Individual Growth</li>
    //       </ul>
    //     </div>
    //   </AnimatedSection>
//     </div>
//   );
// }

// export default AboutPage;


import React from 'react';
import AnimatedSection from '../components/AnimatedSection'; // your Framer Motion wrapper
import FluidGlass from '../components/FluidGlass'; // your 3D animation

const AboutPage = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* 🔵 3D Glass Background */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <FluidGlass
          mode="lens" // or "cube", "bar"
          lensProps={{
            scale: 0.25,
            ior: 1.15,
            thickness: 5,
            chromaticAberration: 0.1,
            anisotropy: 0.01
          }}
        />
      </div>

      {/* ⚪ Foreground Animated Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-white">
      <AnimatedSection animationClass="fade-in-up">
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Gujarat Public School has a rich history of academic excellence and holistic development.
          Founded , we have been committed to providing a nurturing environment...
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
        <div className=" p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold text-white-800 mb-4">Why Choose Us?</h2>
          <ul className="list-disc list-inside text-xl text-white-700 mx-auto max-w-lg">
            <li>Experienced and Dedicated Faculty</li>
            <li>State-of-the-Art Facilities</li>
            <li>Comprehensive Curriculum</li>
            <li>Focus on Individual Growth</li>
          </ul>
        </div>
      </AnimatedSection>
      </div>
    </div>
  );
};

export default AboutPage;
