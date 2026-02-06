import { motion } from 'framer-motion';

function ScrollProgress({ scrollYProgress }) {
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-accent origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    />
  );
}

export default ScrollProgress;
