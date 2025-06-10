// src/components/CounterSection.jsx
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion'; 

const NumberCounter = ({ targetNumber, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (targetNumber === 0) return;

    let start = 0;
    const increment = targetNumber / (duration / 10); // Calculate increment per 10ms
    const timer = setInterval(() => {
      start += increment;
      if (start > targetNumber) {
        start = targetNumber;
        clearInterval(timer);
      }
      setCount(Math.ceil(start));
    }, 10);

    return () => clearInterval(timer);
  }, [targetNumber, duration]);

  return <span className="text-6xl font-extrabold text-blue-600">{count}{suffix}</span>;
};

function CounterSection() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger animation once when it enters view
    threshold: 0.5,    // Trigger when 50% of the section is visible
  });

  const counterData = [
    { label: 'Teachers', target: 100, suffix: '+' },
    { label: 'Students', target: 5000, suffix: '+' },
    { label: 'Classes', target: 200, suffix: '+' },
    { label: 'Awards', target: 50, suffix: '+' },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <section ref={ref} className="bg-gray-100 py-16 md:py-24 animate-fade-in-up">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Our Achievements in Numbers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {counterData.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center justify-center"
              variants={itemVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              transition={{ delay: index * 0.2 }} // Staggered animation
            >
              {inView ? (
                <NumberCounter targetNumber={item.target} suffix={item.suffix} />
              ) : (
                <span className="text-6xl font-extrabold text-blue-600">0{item.suffix}</span>
              )}
              <p className="text-xl font-semibold text-gray-700 mt-4">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CounterSection;