import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

function SectionReveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 60 }}
      animate={isInView
        ? { opacity: 1, y: 0 }
        : shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 60 }
      }
      transition={{
        duration: shouldReduceMotion ? 0.2 : 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default SectionReveal;
