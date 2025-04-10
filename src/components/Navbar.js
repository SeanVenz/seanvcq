import React, { useState, useEffect } from 'react';
import { navItems } from '../constants/constant';
import logo from '../assets/favicon.png';

function Navbar() {
    const [active, setActive] = useState("");

    useEffect(() => {
        const updateActiveState = () => {
            const hash = window.location.hash.replace('#', '');
            if (hash) setActive(hash);
        };
        updateActiveState();
        window.addEventListener('hashchange', updateActiveState);
        return () => window.removeEventListener('hashchange', updateActiveState);
    }, []);

    const handleScrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            const offsetPosition = section.offsetTop;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
            setActive(id);
        }
    };

    return (
        <nav className="p-6 flex items-center justify-center fixed w-full font-secondary z-40 bg-light-main/80 dark:bg-main/80 backdrop-blur-sm transition-colors duration-300">
            <div className='flex items-center justify-center w-full max-w-screen-2xl'>
                <img src={logo} alt="Logo" className='hover:cursor-pointer' onClick={() => handleScrollToSection('home')} />
                <ul className="flex flex-row w-full items-center justify-center gap-8 text-base">
                    {navItems.map(item => (
                        <li key={item.id}>
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
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
