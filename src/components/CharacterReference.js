import React, { useState, useEffect } from 'react';
import { characterReference } from '../constants/constant';
import { motion } from 'framer-motion';

const CharacterReference = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        const element = document.getElementById('references');
        if (element) observer.observe(element);

        return () => observer.disconnect();
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const titleVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    const descriptionVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.2 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };
    return (
        <motion.section 
            className='flex-col pb-0 mt-10 flex items-center px-[7%] sm:px-0 justify-center gap-8 text-light-main dark:text-main' 
            id="references"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
        >
            <div className="text-center">
                <motion.h2 
                    className="text-2xl lg:text-4xl font-main text-light-main dark:text-main mb-4"
                    variants={titleVariants}
                >
                    Character References
                </motion.h2>
                <motion.p 
                    className="font-secondary text-base lg:text-lg text-light-secondary dark:text-secondary text-center max-w-2xl mx-auto"
                    variants={descriptionVariants}
                >
                    Professional references who can speak to my character and work ethic
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-screen-xl">
                {characterReference.map((reference, index) => (
                    <motion.div
                        key={index}
                        className="bg-light-secondary dark:bg-secondary rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6 border border-light-tertiary dark:border-tertiary"
                        variants={cardVariants}
                        whileHover={{ 
                            scale: 1.05,
                            transition: { duration: 0.2 }
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <div className="text-center">
                            {/* Avatar Image */}
                            <motion.div 
                                className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden border-2 border-light-accent dark:border-accent"
                                whileHover={{ 
                                    scale: 1.1,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <img 
                                    src={reference.image} 
                                    alt={reference.name}
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>

                            {/* Name */}
                            <h3 className="text-xl font-main font-semibold text-light-main dark:text-main mb-2">
                                {reference.name}
                            </h3>

                            {/* Position */}
                            <p className="text-light-accent dark:text-accent font-secondary font-medium mb-4">
                                {reference.position}
                            </p>

                            {/* Contact Information */}
                            <div className="space-y-3">
                                {/* Email */}
                                <motion.div 
                                    className="flex items-center justify-center space-x-2"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                                        <path 
                                            className="fill-light-tertiary dark:fill-tertiary" 
                                            d="M7 17q-.825 0-1.412-.587T5 15V5q0-.825.588-1.412T7 3h14q.825 0 1.413.588T23 5v10q0 .825-.587 1.413T21 17zm7-4.7L7 7.425V15h14V7.425zm0-2.45L21 5H7zM3 21q-.825 0-1.412-.587T1 19V6.5h2V19h16.5v2zM21 7.35V5H7v2.35V5h14z" 
                                        />
                                    </svg>
                                    <a 
                                        href={`mailto:${reference.email}`}
                                        className="text-sm font-secondary text-light-secondary dark:text-secondary hover:text-light-accent dark:hover:text-accent transition-colors duration-200 break-all"
                                    >
                                        {reference.email}
                                    </a>
                                </motion.div>

                                {/* Phone */}
                                <motion.div 
                                    className="flex items-center justify-center space-x-2"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                                        <path 
                                            className="fill-light-tertiary dark:fill-tertiary" 
                                            d="M4.05 21q-.45 0-.75-.3t-.3-.75V15.9q0-.325.225-.587t.575-.363l3.45-.7q.35-.05.713.063t.587.337L10.9 17q.95-.55 1.8-1.213t1.625-1.437q.825-.8 1.513-1.662t1.187-1.788L14.6 8.45q-.2-.2-.275-.475T14.3 7.3l.65-3.5q.05-.325.325-.562T15.9 3h4.05q.45 0 .75.3t.3.75q0 3.125-1.362 6.175t-3.863 5.55t-5.55 3.863T4.05 21" 
                                        />
                                    </svg>
                                    <a 
                                        href={`tel:${reference.phoneNumber}`}
                                        className="text-sm font-secondary text-light-secondary dark:text-secondary hover:text-light-accent dark:hover:text-accent transition-colors duration-200"
                                    >
                                        {reference.phoneNumber}
                                    </a>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default CharacterReference;