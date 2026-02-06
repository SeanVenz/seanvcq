import { useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

function ParticleField() {
  const shouldReduceMotion = useReducedMotion();

  const particles = useMemo(() => {
    return Array.from({ length: 18 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 2 + Math.random() * 4,
      duration: 15 + Math.random() * 20,
      delay: Math.random() * 10,
      opacity: 0.1 + Math.random() * 0.2,
    }));
  }, []);

  if (shouldReduceMotion) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            backgroundColor: '#6CB4FF',
            boxShadow: `0 0 ${particle.size * 3}px rgba(108, 180, 255, 0.3)`,
          }}
          animate={{
            x: [0, 30, -20, 40, 0],
            y: [0, -40, 20, -10, 0],
            opacity: [particle.opacity, particle.opacity * 2, particle.opacity, particle.opacity * 1.5, particle.opacity],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
}

export default ParticleField;
