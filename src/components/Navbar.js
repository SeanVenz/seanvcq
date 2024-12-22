import React, { useState, useEffect } from 'react';
import { navItems } from '../constants/nav';

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
        <nav className="p-6">
            <ul className="flex flex-row w-full items-center justify-center gap-8 text-base">
                {navItems.map(item => (
                    <li key={item.id}>
                        <a
                            href={`#${item.id}`}
                            onClick={() => setActive(item.id)}
                            className={`transition-colors duration-200 hover:text-main ${active === item.id ? 'text-main' : 'text-secondary'
                                }`}
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar;