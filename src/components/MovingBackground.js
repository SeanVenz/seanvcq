import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const MovingBackground = () => {
  const [stars, setStars] = useState([])
  const [meteors, setMeteors] = useState([])

  // Generate random stars on component mount
  useEffect(() => {
    const generateStars = () => {
      const newStars = []
      for (let i = 0; i < 35; i++) { // Reduced from 50 to 35 for subtlety
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 1,
          animationDelay: Math.random() * 5,
          duration: Math.random() * 3 + 4 // 4-7 seconds
        })
      }
      setStars(newStars)
    }

    generateStars()
  }, [])

  // Generate meteors occasionally
  useEffect(() => {
    const generateMeteor = () => {
      const startX = Math.random() * 100 // Start from anywhere along the top
      const meteor = {
        id: Date.now(),
        startX: startX, // Start from entire top area (0-100%)
        startY: -10, // Start from above the screen
        endX: Math.max(0, startX - 30 - Math.random() * 40), // Move 30-70% to the left for diagonal effect
        endY: 110, // End below the screen
        size: Math.random() * 1.5 + 4, // 2-3.5px for meteors (larger than stars)
      }
      
      setMeteors(prev => [...prev, meteor])
      
      // Remove meteor after animation
      setTimeout(() => {
        setMeteors(prev => prev.filter(m => m.id !== meteor.id))
      }, 3500) // Slightly longer to match new duration
    }

    // First meteor appears quickly, then regular intervals
    const initialTimeout = setTimeout(() => {
      generateMeteor()
    }, 1500) // First meteor after 1.5 seconds

    const interval = setInterval(() => {
      if (Math.random() < 0.8) { // 80% chance for better visibility on short visits
        generateMeteor()
      }
    }, Math.random() * 2000 + 4000) // Every 4-6 seconds for more frequent meteors

    return () => {
      clearTimeout(initialTimeout)
      clearInterval(interval)
    }
  }, [])

  const starVariants = {
    twinkle: {
      opacity: [0.3, 1, 0.3],
      scale: [1, 1.2, 1],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  const meteorVariants = {
    initial: (meteor) => ({
      x: `${meteor.startX}vw`,
      y: `${meteor.startY}vh`,
      opacity: 0,
      rotate: 135 // Diagonal angle for top-right to bottom-left
    }),
    animate: (meteor) => ({
      x: `${meteor.endX}vw`,
      y: `${meteor.endY}vh`,
      opacity: [0, 0.9, 0.9, 0],
      rotate: 135, // Maintain diagonal angle
      transition: {
        duration: 3,
        ease: "easeIn"
      }
    })
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-accent rounded-full opacity-30"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          variants={starVariants}
          animate="twinkle"
          transition={{
            delay: star.animationDelay,
            duration: star.duration,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Meteors */}
      <AnimatePresence>
        {meteors.map((meteor) => (
          <motion.div
            key={meteor.id}
            className="absolute"
            custom={meteor}
            variants={meteorVariants}
            initial="initial"
            animate="animate"
            exit={{ opacity: 0 }}
          >
            {/* Meteor with trail - already rotated by variants */}
            <div className="relative">
              {/* Meteor trail */}
              <div className="w-1 h-64 bg-gradient-to-t from-accent/90 via-accent/50 to-transparent rounded-full" />
              {/* Meteor head - brighter and more prominent */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-3 h-3 bg-accent rounded-full shadow-lg shadow-accent/60 border border-accent/30" />
              {/* Glow effect */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-6 h-6 bg-accent/20 rounded-full blur-sm" />
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-light-main/5 dark:to-main/5 pointer-events-none" />
    </div>
  )
}

export default MovingBackground
