import React, { useState, useEffect } from 'react';
import { navItems } from '../constants/constant';
import logo from '../assets/favicon.png'

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

    return (
        <nav className="p-6 flex items-center justify-center">
            <div className='flex items-center justify-center w-full max-w-screen-2xl'>
                <a href="/">
                    <img src={logo} alt="Logo" className='' />
                </a>
                <ul className="flex flex-row w-full items-center justify-center gap-8 text-base">
                    {navItems.map(item => (
                        <li key={item.id}>
                            <a
                                href={`#${item.id}`}
                                onClick={() => setActive(item.id)}
                                className={`transition-colors duration-200 hover:text-main hover:underline ${active === item.id ? 'text-main' : 'text-secondary'
                                    }`}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;