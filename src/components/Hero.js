import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { socialLinks } from '../constants/constant';
import resume from '../assets/Quijano,SeanVenz-Resume.pdf';

const name = 'SEAN QUIJANO';

function Hero() {
  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.3,
      },
    },
  };

  const letterVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 12,
      },
    },
  };

  const fadeUpVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (delay = 0) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  return (
    <section
      ref={ref}
      id="hero"
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl"
        style={shouldReduceMotion ? {} : { y: textY, opacity: textOpacity }}
      >
        {/* Eyebrow label */}
        <motion.span
          className="text-xs font-medium uppercase tracking-[0.2em] text-secondary mb-6"
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          custom={0.2}
        >
          Full-Stack Developer
        </motion.span>

        {/* Name - letter by letter */}
        <motion.h1
          className="text-display font-extralight text-primary mb-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          aria-label={name}
        >
          {name.split('').map((char, i) => (
            <motion.span
              key={i}
              variants={letterVariants}
              className={`inline-block ${char === ' ' ? 'w-[0.3em]' : ''}`}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Accent line */}
        <motion.div
          className="h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent mb-8"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 1.2, ease: 'easeOut' }}
          style={{ width: '200px' }}
        />

        {/* Tagline */}
        <motion.p
          className="text-lg text-secondary font-light max-w-lg mb-10 leading-relaxed"
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          Building modern web experiences with clean code and thoughtful design.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4"
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          custom={1.8}
        >
          <motion.a
            href={resume}
            download="Quijano_SeanVenz_Resume.pdf"
            className="px-6 py-3 rounded-full border border-accent text-accent text-sm font-medium tracking-wide hover:bg-accent hover:text-void transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </motion.a>
          <motion.button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-3 rounded-full bg-surface-alt text-primary text-sm font-medium tracking-wide hover:bg-surface-hover transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex items-center gap-5 mt-10"
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          custom={2.1}
        >
          {socialLinks.map((link, id) => (
            <motion.a
              key={id}
              href={link.link}
              target="_blank"
              rel="noreferrer"
              className="text-secondary hover:text-accent transition-colors duration-300 [&_svg]:w-5 [&_svg]:h-5"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              {link.logo}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-tertiary">Scroll</span>
        <motion.div
          className="w-[1px] h-6 bg-gradient-to-b from-accent/50 to-transparent"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
}

export default Hero;
