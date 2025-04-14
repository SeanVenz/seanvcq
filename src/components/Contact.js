import React, { useState, useEffect } from 'react'
import { contact, socialLinks } from '../constants/constant'
import { sendEmail } from '../actions';
import { motion, AnimatePresence } from 'framer-motion';

function Contact() {
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting)
            },
            { threshold: 0.1 }
        );

        const element = document.getElementById('contact');
        if (element) observer.observe(element);

        return () => observer.disconnect();
    }, []);

    const year = new Date().getFullYear();

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10
            }
        }
    };

    const formFieldVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12
            }
        }
    };

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
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [id]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        if (!formData.name || !formData.email || !formData.message) {
            setError("Please fill in all required fields");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setError("Please enter a valid email address");
            return;
        }

        try {
            setIsLoading(true);
            const templateParams = {
                name: formData.name,
                email: formData.email,
                message: formData.message
            };

            const response = await sendEmail(templateParams, setSuccess, setError, setIsLoading);

            if (response) {
                setFormData({
                    name: "",
                    email: "",
                    message: "",
                });
            }
        } catch (error) {
            console.error("Submission error:", error);
            setError("An unexpected error occurred");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <motion.section 
            className='flex-col pt-20 flex items-center justify-center gap-8 text-main'
            id='contact'
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
        >
            <motion.div 
                className="flex items-center w-full text-white text-5xl font-bold py-4"
                variants={itemVariants}
            >
                <motion.div 
                    className="h-[2px] bg-accent flex-grow"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8 }}
                />
                <motion.h1 
                    className="lg:px-8 px-4 font-main text-2xl lg:text-4xl text-light-main dark:text-main"
                    variants={itemVariants}
                >
                    Contact Me
                </motion.h1>
                <motion.div 
                    className="h-[2px] bg-accent flex-grow"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8 }}
                />
            </motion.div>

            <motion.div 
                className='max-w-screen-md mt-4 text-main w-full flex flex-col flex-wrap gap-10'
                variants={containerVariants}
            >
                <motion.div 
                    className='flex mb-4 flex-wrap flex-row gap-4 justify-center items-center'
                    variants={containerVariants}
                >
                    {contact.map((con, index) => (
                        <motion.div 
                            className='flex w-72 flex-row gap-4 items-center justify-center px-5 py-3 bg-light-main dark:bg-main rounded-md'
                            key={index}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {con.icon} <span className='text-light-main dark:text-main'>{con.text}</span>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.form
                    onSubmit={handleSubmit}
                    className="space-y-4 sm:space-y-10 p-4 lg:p-0"
                    variants={containerVariants}
                >
                    <motion.div 
                        className="flex flex-col gap-4"
                        variants={containerVariants}
                    >
                        <motion.div 
                            className="w-full"
                            variants={formFieldVariants}
                        >
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-main"
                            >
                                Name
                            </label>
                            <motion.div 
                                className="bg-transparent flex items-center border border-accent rounded-md px-4 py-3"
                                whileFocus={{ scale: 1.02 }}
                            >
                                <div className="flex items-center border-r border-slate-500 pr-1 mr-3">
                                    <svg className="w-5 h-5 mr-3" viewBox="0 0 20 20" fill="none">
                                        <path className='dark:fill-white fill-[#FFCB6C]' d="M10 10C12.7614 10 15 7.76142 15 5C15 2.23858 12.7614 0 10 0C7.23858 0 5 2.23858 5 5C5 7.76142 7.23858 10 10 10Z"/>
                                        <path className='dark:fill-white fill-[#FFCB6C]' d="M19 20H1C0.447715 20 0 19.5523 0 19C0 15.134 3.13402 12 7 12H13C16.866 12 20 15.134 20 19C20 19.5523 19.5523 20 19 20Z"/>
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="flex-1 border-none outline-none bg-transparent text-main placeholder:text-light-main dark:placeholder:text-main text-base"
                                    placeholder="john doe"
                                />
                            </motion.div>
                        </motion.div>

                        <motion.div 
                            className="w-full"
                            variants={formFieldVariants}
                        >
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-main"
                            >
                                Email
                            </label>
                            <motion.div 
                                className="bg-transparent flex items-center border border-accent rounded-md px-4 py-3"
                                whileFocus={{ scale: 1.02 }}
                            >
                                <div className="flex items-center border-r border-slate-500 pr-1 mr-3">
                                    <svg className="w-5 h-5 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path className='dark:fill-white fill-[#FFCB6C]' d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12v1.45q0 1.475-1.012 2.513T18.5 17q-.875 0-1.65-.375t-1.3-1.075q-.725.725-1.638 1.088T12 17q-2.075 0-3.537-1.463T7 12t1.463-3.537T12 7t3.538 1.463T17 12v1.45q0 .65.425 1.1T18.5 15t1.075-.45t.425-1.1V12q0-3.35-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20h4q.425 0 .713.288T17 21t-.288.713T16 22zm0-7q1.25 0 2.125-.875T15 12t-.875-2.125T12 9t-2.125.875T9 12t.875 2.125T12 15z"/>
                                    </svg>
                                </div>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="flex-1 border-none outline-none bg-transparent text-main placeholder:text-light-main dark:placeholder:text-main text-base"
                                    placeholder="sample@gmail.com"
                                />
                            </motion.div>
                        </motion.div>

                        <motion.div 
                            className="sm:col-span-2 pt-0"
                            variants={formFieldVariants}
                        >
                            <label
                                htmlFor="message"
                                className="block text-sm font-medium text-main"
                            >
                                Message
                            </label>
                            <motion.div 
                                className="bg-transparent flex items-start border border-accent rounded-md px-4 py-3"
                                whileFocus={{ scale: 1.02 }}
                            >
                                <div className="flex items-center border-r border-slate-500 pr-4 mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <g fill="none" fillRule="evenodd">
                                            <path className='dark:fill-white fill-[#FFCB6C]' d="M2 6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-7.667L8 21.5c-.824.618-2 .03-2-1V19H5a3 3 0 0 1-3-3zm3-1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h1.5A1.5 1.5 0 0 1 8 18.5v.5l2.133-1.6a2 2 0 0 1 1.2-.4H19a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z"/>
                                        </g>
                                    </svg>
                                </div>
                                <textarea
                                    id="message"
                                    rows={8}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="flex-1 border-none outline-none bg-transparent text-main placeholder:text-light-main dark:placeholder:text-main text-base"
                                    placeholder="Detail your inquiry"
                                />
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    <AnimatePresence>
                        {error && (
                            <motion.div 
                                className="bg-red-200 text-red-500 gap-2 rounded-md p-3 border border-red-500 border-dotted flex flex-row items-center"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                            >
                                <span className="text-red-500 text-sm sm:text-base">{error}</span>
                            </motion.div>
                        )}
                        {success && (
                            <motion.div 
                                className="bg-green-50 text-green-500 gap-2 rounded-md p-3 border border-green-500 border-dotted flex flex-row items-center"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                            >
                                <span className="text-green-500 sm:text-base text-sm">
                                    Your message has been sent!
                                </span>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <motion.div 
                        className="flex items-center justify-center"
                        variants={itemVariants}
                    >
                        <motion.button
                            type="submit"
                            disabled={isLoading}
                            className={`dark:bg-tertiary bg-light-tertiary px-10 py-3 text-accent rounded-lg hover:bg-accent hover:text-tertiary transition-all duration-300 ease-in-out flex items-center justify-center ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {isLoading ? (
                                <>
                                    <svg
                                        className="animate-spin -ml-1 mr-3 h-5 w-5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        ></circle>
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                        ></path>
                                    </svg>
                                    Sending...
                                </>
                            ) : (
                                "Submit"
                            )}
                        </motion.button>
                    </motion.div>
                </motion.form>
            </motion.div>

            <motion.div 
                className="flex items-center w-full text-white text-5xl font-bold py-4"
                variants={containerVariants}
            >
                <motion.div 
                    className="h-[2px] bg-accent flex-grow"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8 }}
                />
                <motion.div 
                    className='flex flex-row gap-4 pl-4 pr-4'
                    variants={containerVariants}
                >
                    {socialLinks.map((link, id) => (
                        <motion.ul 
                            key={id}
                            custom={id}
                            variants={socialVariants}
                        >
                            <motion.li 
                                className='rounded-full hover:scale-125 transition-all duration-300 ease-in-out'
                                whileHover={{ scale: 1.2, rotate: 360 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <a href={link.link} target='_blank' rel='noreferrer'>{link.logo}</a>
                            </motion.li>
                        </motion.ul>
                    ))}
                </motion.div>
                <motion.div 
                    className="h-[2px] bg-accent flex-grow"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8 }}
                />
            </motion.div>

            <motion.p 
                className='pb-2 text-light-main dark:text-main'
                variants={itemVariants}
            >
                © {year} Sean Venz Quijano | All Rights Reserved
            </motion.p>
        </motion.section>
    )
}

export default Contact