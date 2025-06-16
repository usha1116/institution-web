import React from 'react';
import { useInView } from 'react-intersection-observer';

function AnimatedSection({ children, animationClass, threshold = 0.1, delay = 0 }) {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: threshold, 
  });

  const delayClass = delay > 0 ? `delay-[${delay}ms]` : ''; 

  return (
    <div
      ref={ref}
      className={`${inView ? `animate-${animationClass} ${delayClass}` : 'opacity-0'} transition-opacity duration-700`}
    >
      {children}
    </div>
  );
}

export default AnimatedSection;