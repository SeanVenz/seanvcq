import React, { useState, useEffect } from 'react'
import { skillsData } from '../constants/constant'
import { motion } from 'framer-motion'

function Skills() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting)
            },
            { threshold: 0.1 }
        )

        const element = document.getElementById('skills')
        if (element) observer.observe(element)

        return () => observer.disconnect()
    }, [])

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    }

    const titleVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10
            }
        }
    }

    const skillVariants = {
        hidden: { opacity: 0, scale: 0.8, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12
            }
        }
    }

    const skillHoverVariants = {
        hover: {
            scale: 1.1,
            rotate: [0, -5, 5, -5, 0],
            transition: {
                duration: 0.3
            }
        },
        tap: {
            scale: 0.95
        }
    }

    return (
        <motion.section 
            className='flex-col flex items-center justify-center gap-8 text-light-main dark:text-main bg-light-main dark:bg-main pt-0 relative transition-colors duration-300' 
            id='skills'
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
        >
            <motion.h5 
                className='text-2xl lg:text-4xl font-main pt-10'
                variants={titleVariants}
            >
                My <span className="text-accent">Skills</span>
            </motion.h5>
            <motion.div 
                className='max-w-screen-xl w-full flex justify-center md:px-4 2xl:px-0 items-center flex-row flex-wrap gap-10 pb-10'
                variants={containerVariants}
            >
                {skillsData.map((skill, id) => (
                    <motion.div 
                        key={id} 
                        className='group bg-light-secondary/80 hover:text-secondary dark:bg-tertiary/80 hover:bg-light-main dark:hover:bg-secondary transition-all duration-300 backdrop-blur-sm ease-in-out rounded-3xl gap-4 p-10 lg:p-20 flex flex-col items-center justify-center'
                        variants={skillVariants}
                        whileHover="hover"
                        whileTap="tap"
                        custom={id}
                    >
                        <motion.div 
                            className='w-16 lg:w-32 h-auto'
                            variants={skillHoverVariants}
                        >
                            {skill.logo}
                        </motion.div>
                        <motion.span 
                            className='font-secondary text-base lg:text-lg text-light-tertiary dark:text-main group-hover:text-light-main dark:group-hover:text-secondary transition-colors duration-300'
                            variants={skillHoverVariants}
                        >
                            {skill.name}
                        </motion.span>
                    </motion.div>
                ))} 
            </motion.div>
        </motion.section>
    )
}

export default Skills