// src/components/AnimatedSection.jsx
import React from 'react';
import { useInView } from 'react-intersection-observer';

function AnimatedSection({ children, animationClass, threshold = 0.1, delay = 0 }) {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: threshold, // Percentage of the element visible to trigger
  });

  const delayClass = delay > 0 ? `delay-[${delay}ms]` : ''; // Tailwind JIT supports arbitrary values

  return (
    <div
      ref={ref}
      className={`${inView ? `animate-${animationClass} ${delayClass}` : 'opacity-0'} transition-opacity duration-700`}
      // The `opacity-0` and `transition-opacity` ensure it's hidden before animation and smoothly appears
    >
      {children}
    </div>
  );
}

export default AnimatedSection;