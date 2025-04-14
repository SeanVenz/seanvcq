import React, { useState, useEffect } from 'react'
import { projectData } from '../constants/constant'
import { motion, AnimatePresence } from 'framer-motion'

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('projects')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const categories = ['all', 'personal', 'work', 'ojt']
  const filteredProjects = projectData.filter(project => 
    selectedCategory === 'all' || project.category === selectedCategory
  )

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  }

  const descriptionVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  }

  const filterVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      rotateX: -30
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: i * 0.1
      }
    })
  }

  return (
    <motion.section 
      className='flex-col pb-0 mt-10 flex items-center justify-center gap-8 text-light-main dark:text-main relative' 
      id='projects'
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      <motion.h2 
        className='font-main text-2xl lg:text-4xl'
        variants={titleVariants}
      >
        Projects
      </motion.h2>
      <motion.p 
        className='font-secondary text-base text-center lg:text-lg text-light-secondary dark:text-secondary'
        variants={descriptionVariants}
      >
        Projects include Personal, OJT, and Work Experiences
      </motion.p>

      {/* Category Filter */}
      <motion.div 
        className='flex flex-wrap gap-4 justify-center mb-8'
        variants={filterVariants}
      >
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-secondary transition-all duration-300 ${
              selectedCategory === category
                ? 'bg-light-accent dark:bg-accent text-light-tertiary dark:text-secondary'
                : 'bg-light-secondary/50 dark:bg-secondary/50 text-light-main dark:text-main hover:bg-light-secondary dark:hover:bg-secondary'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </motion.button>
        ))}
      </motion.div>

      <motion.div 
        className='max-w-screen-2xl w-full flex justify-center items-center'
        variants={containerVariants}
      >
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 sm:px-6 md:px-8'>
          <AnimatePresence mode="wait">
            <ul className='col-span-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto'>
              {filteredProjects.map((project, id) => (
                <motion.li
                  key={id}
                  custom={id}
                  variants={cardVariants}
                  className={`relative h-64 w-full perspective-1000 group ${
                    projectData.length % 2 === 1 && id === projectData.length - 1
                      ? 'sm:col-span-2 sm:col-start-1 sm:col-end-3 sm:justify-self-center sm:w-[calc(50%-0.75rem)]'
                      : ''
                  }`}
                >
                  <div 
                    className="relative w-full h-full transition-transform duration-500 transform-style-3d group-hover:rotate-y-180"
                  >
                    {/* Front of Card */}
                    <div className='absolute w-full h-full backface-hidden rounded-lg overflow-hidden'>
                      <div 
                        className='w-full h-full bg-cover bg-center relative'
                        style={{ 
                          backgroundImage: `url(${project.img})`,
                          backgroundColor: 'rgba(0, 0, 0, 0.1)'
                        }}
                      >
                        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                          <div className="text-center flex items-center justify-center gap-2 flex-col p-4">
                            <h2 className="text-lg font-main font-bold text-main">{project.title}</h2>
                            <p className='font-secondary text-sm sm:text-base text-secondary'>{project.desc}</p>
                            <div className='flex items-center justify-center px-3 py-2 rounded-md bg-light-accent dark:bg-accent hover:bg-light-accent/90 dark:hover:bg-accent/90 transition-colors gap-2'>
                              <span className="text-light-tertiary dark:text-secondary font-secondary font-medium text-sm">
                                Hover to See More
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Back of Card */}
                    <div className='absolute w-full h-full backface-hidden rounded-lg bg-light-secondary dark:bg-secondary rotate-y-180 p-4 flex flex-col justify-between'>
                      <div>
                        <h3 className="text-lg font-main font-bold mb-2">{project.title}</h3>
                        <p className='font-secondary text-sm mb-4'>{project.desc}</p>
                        {project.techStack && (
                          <motion.div 
                            className='flex flex-wrap gap-2 mb-4'
                          >
                            {project.techStack.map((tech, techId) => (
                              <motion.span 
                                key={techId}
                                className='px-2 py-1 text-xs bg-light-main/20 dark:bg-main/20 rounded-full'
                                whileHover={{ scale: 1.1 }}
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </motion.div>
                        )}
                      </div>
                      <motion.a
                        href={project.link}
                        target='_blank'
                        rel='noreferrer'
                        className="flex items-center justify-center px-3 py-2 rounded-md bg-light-accent dark:bg-accent hover:bg-light-accent/90 dark:hover:bg-accent/90 transition-colors gap-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="text-light-tertiary dark:text-secondary font-secondary font-medium text-sm">
                          Visit Project
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M16.175 13H4v-2h12.175l-5.6-5.6L12 4l8 8l-8 8l-1.425-1.4z"
                          />
                        </svg>
                      </motion.a>
                    </div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.section>
  )
}

export default Projects