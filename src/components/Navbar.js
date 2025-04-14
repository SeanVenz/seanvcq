import React, { useState, useEffect } from 'react';
import { navItems } from '../constants/constant';
import logo from '../assets/favicon.png';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';

function Navbar() {
    const [active, setActive] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const updateActiveState = () => {
            const hash = window.location.hash.replace('#', '');
            if (hash) setActive(hash);
        };
        updateActiveState();
        window.addEventListener('hashchange', updateActiveState);

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);

        // Close menu when clicking outside
        const handleClickOutside = (event) => {
            if (isOpen && !event.target.closest('.mobile-menu')) {
                setIsOpen(false);
            }
        };
        document.addEventListener('click', handleClickOutside);

        // Prevent body scroll when menu is open
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            window.removeEventListener('hashchange', updateActiveState);
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('click', handleClickOutside);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const handleScrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            const offsetPosition = section.offsetTop;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
            setActive(id);
            setIsOpen(false);
        }
    };

    const menuVariants = {
        closed: {
            opacity: 0,
            y: "-100%",
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        },
        open: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        }
    };

    const navVariants = {
        scrolled: {
            padding: "1rem",
        },
        normal: {
            padding: "1.5rem",
        }
    };

    return (
        <motion.nav 
            className="fixed w-full font-secondary z-50 backdrop-blur-sm transition-colors duration-300"
            variants={navVariants}
            animate={isScrolled ? "scrolled" : "normal"}
        >
            <div className='flex items-center justify-between w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8'>
                <motion.img 
                    src={logo} 
                    alt="Logo" 
                    className='h-8 w-8 sm:h-10 sm:w-10 hover:cursor-pointer' 
                    onClick={() => handleScrollToSection('home')}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                />

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center justify-center flex-1">
                    <ul className="flex flex-row items-center justify-center gap-8 text-base">
                        {navItems.map(item => (
                            <motion.li key={item.id} whileHover={{ scale: 1.05 }}>
                                <button
                                    onClick={() => handleScrollToSection(item.id)}
                                    className={`transition-colors duration-200 hover:text-light-main dark:hover:text-main hover:underline ${
                                        active === item.id 
                                            ? 'text-light-main dark:text-main' 
                                            : 'text-light-secondary dark:text-secondary'
                                    }`}
                                >
                                    {item.label}
                                </button>
                            </motion.li>
                        ))}
                    </ul>
                </div>

                {/* Theme Toggle and Mobile Menu Button */}
                <div className="flex items-center gap-4">
                    <ThemeToggle />
                    <motion.button
                        className="md:hidden p-2 rounded-lg bg-accent/20 hover:bg-accent/30 mobile-menu"
                        onClick={() => setIsOpen(!isOpen)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Toggle menu"
                    >
                        <div className="w-6 h-6 flex flex-col justify-around">
                            <span className={`block w-6 h-0.5 bg-accent transform transition duration-300 ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                            <span className={`block w-6 h-0.5 bg-accent transition duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`block w-6 h-0.5 bg-accent transform transition duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
                        </div>
                    </motion.button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className="fixed inset-0 bg-light-main dark:bg-main mobile-menu h-screen w-screen z-50"
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={menuVariants}
                        >
                            <div className="flex flex-col items-center justify-center h-full gap-6 pt-20 relative">
                                {/* Header with Theme Toggle and Close Button */}
                                <div className="absolute top-4 right-4 flex items-center gap-4 z-50">
                                    <div className="p-2">
                                        <ThemeToggle />
                                    </div>
                                    <motion.button
                                        className="p-2 rounded-lg bg-accent/20 hover:bg-accent/30"
                                        onClick={() => setIsOpen(false)}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        aria-label="Close menu"
                                    >
                                        <FaTimes className="w-6 h-6 text-accent" />
                                    </motion.button>
                                </div>

                                {navItems.map((item, index) => (
                                    <motion.button
                                        key={item.id}
                                        onClick={() => handleScrollToSection(item.id)}
                                        className={`text-2xl font-medium py-4 px-8 rounded-lg w-full max-w-xs text-center ${
                                            active === item.id 
                                                ? 'text-light-main dark:text-main bg-accent/20' 
                                                : 'text-light-secondary dark:text-secondary hover:bg-accent/10'
                                        }`}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {item.label}
                                    </motion.button>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
}

export default Navbar;
