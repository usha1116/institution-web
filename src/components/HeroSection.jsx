// // src/components/HeroSection.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';
// import heroImage from '../assets/hero-bg.jpg'; // Ensure this image exists in your assets folder
// import AdmissionsForm from './AdmissionsForm'; // Using the Formik form here

// function HeroSection() {
//     return (
//         <section
//             className="relative bg-yellow-400 text-white py-16 md:py-24 overflow-hidden"
//             style={{
//                 backgroundImage: `url(${heroImage})`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//             }}
//         >
//             {/* Overlay to darken background image for text readability */}
//             <div className="absolute inset-0 bg-yellow-500 opacity-80"></div>
//             <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between">
//                 <div className="text-center md:text-left md:w-1/2 mb-12 md:mb-0">
//                     <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 animate-fade-in-up">
//                         Leading CBSE & SSRA School in Bhavanagar
//                     </h1>
//                     <p className="text-lg md:text-xl mb-8 animate-fade-in-up delay-200">
//                         Providing quality education and fostering holistic development.
//                     </p>
//                     <Link to="/admissions" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 animate-zoom-in">
//                         Explore Admissions
//                     </Link>
//                 </div>

//                 {/* Enquire Now Form */}
//                 <div className="md:w-1/2 flex justify-center md:justify-end animate-fade-in-right">
//                     <AdmissionsForm /> {/* Re-using the AdmissionsForm component */}
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default HeroSection;

// src/components/HeroSection.jsx
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import heroImage from '../assets/hero-bg.jpg';
import AdmissionsForm from './AdmissionsForm';

function HeroSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.3 });

    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    const fadeInRight = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
    };

    const zoomIn = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <section
            ref={ref}
            className="relative bg-yellow-400 text-white py-16 md:py-24 overflow-hidden"
            style={{
                backgroundImage: `url(${heroImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-yellow-500 opacity-80"></div>

            <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0">
                {/* Text Content */}
                <div className="text-center md:text-left md:w-1/2">
                    <motion.h1
                        variants={fadeInUp}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="text-4xl md:text-5xl font-extrabold leading-tight mb-4"
                    >
                        Leading CBSE & SSRA School in Bhavanagar
                    </motion.h1>

                    <motion.p
                        variants={fadeInUp}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        transition={{ delay: 0.3 }}
                        className="text-lg md:text-xl mb-8"
                    >
                        Providing quality education and fostering holistic development.
                    </motion.p>

                    <motion.div
                        variants={zoomIn}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        transition={{ delay: 0.6 }}
                    >
                        <Link
                            to="/admissions"
                            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                        >
                            Explore Admissions
                        </Link>
                    </motion.div>
                </div>

                {/* Form */}
                <motion.div
                    variants={fadeInRight}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="md:w-1/2 flex justify-center md:justify-end"
                >
                    <AdmissionsForm />
                </motion.div>
            </div>
        </section>
    );
}

export default HeroSection;
