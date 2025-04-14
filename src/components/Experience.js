import React, { useState, useEffect } from 'react'
import { experience } from '../constants/constant'
import { motion } from 'framer-motion'

function Experience() {
    const [expandedId, setExpandedId] = useState(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting)
            },
            { threshold: 0.1 }
        )

        const element = document.getElementById('experience')
        if (element) observer.observe(element)

        return () => observer.disconnect()
    }, [])

    return (
        <section 
            className='mt-10 pb-10 flex-col flex items-center justify-center gap-8 text-main' 
            id='experience'
        >
            <motion.h2 
                className='text-2xl lg:text-4xl font-main mt-10 text-light-main dark:text-main'
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
            >
                Experience
            </motion.h2>
            <ul className='max-w-screen-md text-main w-full flex flex-col flex-wrap gap-10'>
                {experience.map((exp, id) => (
                    <motion.li 
                        key={id}
                        className='flex flex-row gap-4 cursor-pointer'
                        initial={{ opacity: 0, x: -20 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: id * 0.1 }}
                        onClick={() => setExpandedId(expandedId === id ? null : id)}
                    >
                        <div className='relative'>
                            <div className={`w-4 h-4 rounded-full transition-all duration-300 ${
                                exp.type === 'work' ? 'bg-blue-500 shadow-[0_0_20px_#3B82F6]' :
                                exp.type === 'education' ? 'bg-green-500 shadow-[0_0_20px_#22C55E]' :
                                'bg-yellow-500 shadow-[0_0_20px_#FCD34D]'
                            }`} />
                            <div className={`absolute left-2 top-4 w-0.5 h-full transition-all duration-300 ${
                                expandedId === id ? 'bg-gradient-to-b from-current to-transparent' : 'bg-gray-300'
                            }`} />
                        </div>
                        <motion.div 
                            className={`flex flex-col pr-8 lg:pr-0 lg:p-0 transition-all duration-300 ${
                                expandedId === id ? 'scale-105' : ''
                            }`}
                            layout
                        >
                            <div className='flex flex-row items-center gap-4'>
                                <h4 className='font-main ml-5 text-lg lg:text-3xl font-bold text-light-main dark:text-main hover:text-accent dark:hover:text-accent transition-colors duration-300'>
                                    {exp.position}
                                </h4>
                            </div>
                            <motion.div 
                                className='border-l-2 pl-6 ml-5 flex gap-4 flex-col'
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ 
                                    height: expandedId === id ? 'auto' : 0,
                                    opacity: expandedId === id ? 1 : 0
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className='mt-2 flex text-base lg:text-xl italic font-medium font-secondary flex-row gap-3'>
                                    <h5 className='text-light-main dark:text-main'>{exp.company}</h5>,
                                    <h6 className='text-light-main dark:text-main'>{exp.location}</h6>
                                </div>
                                <p className='font-secondary text-justify text-sm lg:text-base text-light-main dark:text-main'>
                                    {exp.description}
                                </p>
                                {exp.skills && (
                                    <div className='flex flex-wrap gap-2 mt-2'>
                                        {exp.skills.map((skill, skillId) => (
                                            <span 
                                                key={skillId}
                                                className='px-2 py-1 text-xs bg-light-secondary dark:bg-secondary rounded-full text-light-main dark:text-main'
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </motion.div>
                        </motion.div>
                    </motion.li>
                ))}
            </ul>
        </section>
    )
}

export default Experience