// src/components/AnimatedHeader.jsx
import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Each child animates with a 0.1s delay
      delayChildren: 0.3,   // The first child starts after 0.3s
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function AnimatedHeader() {
  const headline = "Empowering Students for a Brighter Future";
  const words = headline.split(' ');

  return (
    <div className="bg-blue-700 text-white py-20 text-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          {words.map((word, i) => (
            <motion.span
              key={i}
              variants={itemVariants}
              className="inline-block mr-2" // Keep words together but allow individual animation
            >
              {word}
            </motion.span>
          ))}
        </h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
          className="text-xl md:text-2xl mb-8"
        >
          Discover excellence in education at Gujarat Public School.
        </motion.p>
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5, ease: "easeOut" }}
          className="bg-yellow-500 text-blue-900 px-8 py-3 rounded-full font-bold shadow-lg hover:bg-yellow-600 transition duration-300"
        >
          Explore Programs
        </motion.button>
      </motion.div>
    </div>
  );
}

export default AnimatedHeader;