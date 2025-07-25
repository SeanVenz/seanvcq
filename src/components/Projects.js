import { useState, useEffect } from 'react'
import { projectData } from '../constants/constant'
import { motion, AnimatePresence } from 'framer-motion'

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [isVisible, setIsVisible] = useState(false)
  const [visibleCount, setVisibleCount] = useState(6)

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

  // Reset visible count when category changes
  useEffect(() => {
    setVisibleCount(6)
  }, [selectedCategory])

  const categories = ['all', 'personal', 'work', 'internship']
  const filteredProjects = projectData.filter(project => 
    selectedCategory === 'all' || project.category === selectedCategory
  )
  const visibleProjects = filteredProjects.slice(0, visibleCount)
  const hasMoreProjects = filteredProjects.length > visibleCount

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 6)
  }

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
      className='flex-col pb-0 mt-10 flex items-center px-[7%] sm:px-0 justify-center gap-8 text-light-main dark:text-main relative' 
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
        Projects include Work Experiences, Personal Projects, Internship Projects, and School Projects
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
            className={`px-4 py-2 rounded-full text-sm font-secondary transition-all duration-300 text-light-tertiary dark:text-main ${
              selectedCategory === category
                ? 'bg-light-accent dark:bg-accent'
                : 'bg-light-secondary/50 dark:bg-secondary/50 hover:bg-light-secondary dark:hover:bg-secondary'
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
        <div className='w-full px-8'>
          <AnimatePresence mode="wait">
            <ul className='flex flex-row w-full gap-6 flex-wrap justify-center items-center'>
              {visibleProjects.map((project, id) => (
                <motion.li
                  key={`${selectedCategory}-${id}`}
                  custom={id}
                  variants={cardVariants}
                  className={`relative h-64 w-full md:w-4/6 xl:w-[30%] perspective-1000 group`}
                >
                  <div 
                    className="relative w-full h-full transition-transform duration-500 transform-style-3d group-hover:rotate-y-180"
                  >
                    {/* Front of Card */}
                    <div className='absolute w-full h-full backface-hidden rounded-lg overflow-hidden'>
                      <div 
                        className='w-full h-full bg-cover object-contain bg-center relative'
                        style={{ 
                          backgroundImage: `url(${project.img})`,
                          backgroundColor: 'rgba(0, 0, 0, 0.1)'
                        }}
                      >
                        {/* <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center"> */}
                          <div className="text-center flex items-center justify-center gap-2 flex-col p-4">
                            {/* <h2 className="text-lg font-main font-bold text-main">{project.title}</h2>
                            <p className='font-secondary text-sm sm:text-base text-main'>{project.desc}</p> */}
                          </div>
                        {/* </div> */}
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
                                className='px-2 py-1 text-xs text-main'
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
                        <span className="text-main dark:text-main font-secondary font-medium text-sm">
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

      {/* Load More Button */}
      {hasMoreProjects && (
        <motion.div
          className="flex justify-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.button
            onClick={handleLoadMore}
            className="px-6 py-3 rounded-full bg-light-accent dark:bg-accent text-light-tertiary dark:text-main font-secondary font-medium hover:bg-light-accent/90 dark:hover:bg-accent/90 transition-all duration-300 flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Load More Projects</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 16l-6-6h12z"
              />
            </svg>
          </motion.button>
        </motion.div>
      )}
    </motion.section>
  )
}

export default Projects