import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const HOVERCLASS = "hover:text-[#ffe239]";
const ACTIVECLASS = "text-[#ffe239]";

const LINKS = [
    { href: "/shop", label: "Shop" },
    { href: "/about", label: "About" },
    { href: "/team", label: "Team" },
    { href: "/creators", label: "Creators" },
    { href: "/partners", label: "Partners" },
    { href: "/news", label: "News" },
    { href: "/contact", label: "Contact" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    const location = useLocation();

    return (
        <nav className="bg-black shadow-md text-white font-bold">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <a href="/" className={`text-xl font-bold ${HOVERCLASS}`}>RYSK</a>
                    </div>
                    <div className="hidden md:flex space-x-4 items-center">
                        {LINKS.map(link => (
                            <a
                                key={link.href}
                                href={link.href}
                                className={`${HOVERCLASS} ${location.pathname === link.href ? ACTIVECLASS : ""}`}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                    <div className="flex items-center md:hidden">
                        <button onClick={toggleMenu} className="focus:outline-none">
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-1 pb-4">
                    {LINKS.map(link => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={`block ${HOVERCLASS} ${location.pathname === link.href ? ACTIVECLASS : ""}`}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
}

export default Navbar;