import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const [ripples, setRipples] = useState([]);
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseDown = (e) => {
            setIsClicking(true);
            createRipple(e.clientX, e.clientY);
        };

        const handleMouseUp = () => {
            setIsClicking(false);
        };

        const handleMouseEnter = (e) => {
            if (e.target.tagName === 'BUTTON' || 
                e.target.tagName === 'A' || 
                e.target.closest('button') || 
                e.target.closest('a') ||
                e.target.classList.contains('hover-effect')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('mouseover', handleMouseEnter);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('mouseover', handleMouseEnter);
        };
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            if (mousePosition.x !== 0 && mousePosition.y !== 0) {
                createParticle();
            }
        }, 50);

        return () => clearInterval(interval);
    }, [mousePosition]);

    const createParticle = () => {
        const particle = {
            id: Date.now(),
            x: mousePosition.x,
            y: mousePosition.y,
            angle: Math.random() * Math.PI * 2,
            size: Math.random() * 4 + 2,
        };

        setParticles(prevParticles => [...prevParticles, particle]);
        setTimeout(() => {
            setParticles(prevParticles => 
                prevParticles.filter(p => p.id !== particle.id)
            );
        }, 1000);
    };

    const createRipple = (x, y) => {
        const ripple = {
            id: Date.now(),
            x,
            y,
        };

        setRipples(prevRipples => [...prevRipples, ripple]);
        setTimeout(() => {
            setRipples(prevRipples => 
                prevRipples.filter(r => r.id !== ripple.id)
            );
        }, 1000);
    };

    const cursorVariants = {
        default: {
            height: 32,
            width: 32,
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            backgroundColor: "rgba(255, 203, 108, 0.2)",
            border: "2px solid #FFCB6C",
        },
        hover: {
            height: 64,
            width: 64,
            x: mousePosition.x - 32,
            y: mousePosition.y - 32,
            backgroundColor: "rgba(255, 203, 108, 0.3)",
            border: "3px solid #FFCB6C",
        },
        clicking: {
            height: 24,
            width: 24,
            x: mousePosition.x - 12,
            y: mousePosition.y - 12,
            backgroundColor: "rgba(255, 203, 108, 0.5)",
            border: "4px solid #FFCB6C",
        }
    };

    const particleVariants = {
        initial: {
            opacity: 0.8,
            scale: 1,
        },
        animate: {
            opacity: 0,
            scale: 0,
            transition: {
                duration: 1,
                ease: "easeOut",
            },
        },
    };

    const rippleVariants = {
        initial: {
            opacity: 0.5,
            scale: 0,
        },
        animate: {
            opacity: 0,
            scale: 4,
            transition: {
                duration: 1,
                ease: "easeOut",
            },
        },
    };

    return (
        <>
            <motion.div
                className="fixed pointer-events-none z-50 rounded-full mix-blend-difference"
                variants={cursorVariants}
                animate={isClicking ? "clicking" : isHovering ? "hover" : "default"}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 28,
                }}
            />
            <AnimatePresence>
                {particles.map(particle => (
                    <motion.div
                        key={particle.id}
                        className="fixed pointer-events-none z-40 rounded-full bg-accent"
                        style={{
                            left: particle.x,
                            top: particle.y,
                            width: particle.size,
                            height: particle.size,
                        }}
                        variants={particleVariants}
                        initial="initial"
                        animate="animate"
                        exit={{ opacity: 0 }}
                    />
                ))}
            </AnimatePresence>
            <AnimatePresence>
                {ripples.map(ripple => (
                    <motion.div
                        key={ripple.id}
                        className="fixed pointer-events-none z-40 rounded-full border-2 border-accent"
                        style={{
                            left: ripple.x - 8,
                            top: ripple.y - 8,
                            width: 16,
                            height: 16,
                        }}
                        variants={rippleVariants}
                        initial="initial"
                        animate="animate"
                        exit={{ opacity: 0 }}
                    />
                ))}
            </AnimatePresence>
        </>
    );
}

export default CustomCursor; 