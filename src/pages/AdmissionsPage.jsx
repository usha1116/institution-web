import React, { useRef } from 'react';
import { motion, useInView, useSpring, useMotionValue } from 'framer-motion';
import AdmissionsForm from '../components/AdmissionsForm';

function DragCard({ step, title, description, delay = 0 }) {
    const cardRef = useRef(null);
    const dragAreaRef = useRef(null);
    const isInView = useInView(cardRef, { once: true, threshold: 0.4 });

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { stiffness: 300, damping: 25 });
    const springY = useSpring(y, { stiffness: 300, damping: 25 });

    const handleDragEnd = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <div ref={dragAreaRef} className="relative">
            <motion.div
                ref={cardRef}
                drag
                dragConstraints={dragAreaRef}
                dragElastic={0.4}
                onDragEnd={handleDragEnd}
                style={{ x: springX, y: springY }}
                whileTap={{ scale: 0.95, cursor: 'grabbing' }}
                className="p-6 border border-blue-200 bg-white rounded-lg shadow-sm flex flex-col items-center cursor-grab"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay, duration: 0.7, ease: 'easeOut' }}
            >
                <div className="text-blue-600 text-5xl font-extrabold mb-4">{step}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
                <p className="text-gray-600 text-base">{description}</p>
            </motion.div>
        </div>
    );
}

function AdmissionsPage() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.2 });

    const fadeUp = {
        hidden: { opacity: 0, y: 50 },
        visible: (delay = 0) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: 'easeOut', delay },
        }),
    };

    return (
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24 space-y-16" ref={ref}>
            {/* Heading */}
            <motion.h1
                className="text-5xl font-bold text-gray-800 mb-8 text-center"
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={0}
            >
                Admissions at Gujarat Public School
            </motion.h1>

            {/* Overview */}
            <motion.section
                className="bg-white shadow-lg rounded-lg p-8"
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={0.2}
            >
                <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">Welcome to Our Admissions</h2>
                <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
                    We are delighted that you are considering Gujarat Public School for your child's education...
                </p>
            </motion.section>

            <section className="bg-gray-50 p-8 rounded-lg shadow-md">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                    Our Simple Admission Process
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <DragCard
                        step="1"
                        title="Enquiry & Registration"
                        description="Submit an online enquiry or visit our school to collect the application kit."
                        delay={0.1}
                    />
                    <DragCard
                        step="2"
                        title="Interaction & Assessment"
                        description="A friendly interaction and age-appropriate test (if needed)."
                        delay={0.3}
                    />
                    <DragCard
                        step="3"
                        title="Confirmation & Enrollment"
                        description="Submit required documents and pay the fees to confirm."
                        delay={0.5}
                    />
                </div>
            </section>


            {/* Form Section */}
            <motion.section
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={0.6}
            >
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Submit Your Admission Enquiry</h2>
                <AdmissionsForm />
            </motion.section>

            {/* Important Info Section */}
            <motion.section
                className="mt-12 bg-white p-8 rounded-lg shadow-lg"
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={0.8}
            >
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Important Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-2xl font-bold text-blue-700 mb-4">Required Documents:</h3>
                        <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
                            <li>Original Birth Certificate of the student</li>
                            <li>Aadhaar Card copy of student and parents</li>
                            <li>Previous Academic Records / Report Cards</li>
                            <li>Transfer Certificate (TC)</li>
                            <li>3 Passport size photos each (student + parents)</li>
                            <li>Proof of Residence</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-blue-700 mb-4">Key Dates & Deadlines:</h3>
                        <p className="text-gray-700 text-lg mb-4">
                            Applications for 2025-2026 are now open.
                        </p>
                        <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
                            <li>Deadline: 31st May 2025</li>
                            <li>Interactions: Ongoing</li>
                            <li>First List: 15th June 2025</li>
                            <li>Session Start: 1st July 2025</li>
                        </ul>
                        <p className="text-gray-700 text-lg mt-4">
                            *Dates may change. Contact our admissions office for latest info.
                        </p>
                    </div>
                </div>
                <div className="text-center mt-10">
                    <p className="text-xl text-gray-800 font-semibold mb-4">Have questions?</p>
                    <a
                        href="/contact"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        Contact Admissions
                    </a>
                </div>
            </motion.section>
        </div>
    );
}

export default AdmissionsPage;
