import { socialLinks } from '../constants/constant'
import { motion } from 'framer-motion'

function Home() {
    const handleScrollToSection = (e, id) => {
        e.preventDefault();
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10
            }
        }
    }

    const socialVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: i => ({
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 20,
                delay: i * 0.1
            }
        })
    }
    
    return (
        <section className='flex items-center px-[7%] lg:px-0 justify-center h-screen' id='home'>
            <motion.div 
                className='max-w-screen-2xl flex flex-col sm:flex-row items-center justify-center w-full'
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div className='flex flex-col gap-6 justify-center items-center sm:justify-start sm:items-start' variants={containerVariants}>
                    <motion.h1 
                        className='text-4xl text-center sm:text-left text-light-main dark:text-main font-main'
                        variants={itemVariants}
                    >
                        I'M <motion.span 
                            className='text-accent text-5xl'
                            variants={itemVariants}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5, type: "spring" }}
                        >
                            SEAN QUIJANO
                        </motion.span>
                    </motion.h1>
                    <motion.p 
                        className='text-light-main text-center sm:text-left dark:text-main text-3xl font-secondary'
                        variants={itemVariants}
                    >
                        Junior Developer
                    </motion.p>
                    <motion.button 
                        onClick={(e) => handleScrollToSection(e, 'contact')}
                        className='font-secondary py-3 px-5 mt-2 w-max rounded-md border-2 text-accent border-accent hover:bg-accent hover:text-main transition-all duration-300 ease-in-out'
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Contact Me
                    </motion.button>
                </motion.div>
                <div className='flex items-center pt-10 sm:pt-0 flex-row sm:flex-col justify-center gap-4'>
                    <motion.div 
                        className='hidden sm:block h-32 border-r-2 border-accent'
                        initial={{ height: 0 }}
                        animate={{ height: 128 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    /> 
                    {socialLinks.map((link, id) => (
                        <motion.ul key={id}
                            custom={id}
                            variants={socialVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <li className='rounded-full hover:scale-125 transition-all duration-300 ease-in-out'>
                                <a href={link.link} target='_blank' rel='noreferrer'>{link.logo}</a>
                            </li>
                        </motion.ul>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}

export default Home