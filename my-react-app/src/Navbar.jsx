import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FaXTwitter, FaInstagram, FaYoutube, FaDiscord } from "react-icons/fa6";

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

const SOCIALS = [
    { href: "https://twitter.com/", label: "X", icon: <FaXTwitter /> },
    { href: "https://instagram.com/", label: "Instagram", icon: <FaInstagram /> },
    { href: "https://youtube.com/", label: "YouTube", icon: <FaYoutube /> },
    { href: "https://discord.com/", label: "Discord", icon: <FaDiscord /> },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    const location = useLocation();

    return (
        <nav className="bg-black shadow-md text-white font-bold">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Left: Logo and Links */}
                    <div className="flex items-center space-x-8">
                        <a href="/" className={`text-3xl font-extrabold tracking-wide ${HOVERCLASS}`}>RYSK</a>
                        <div className="hidden lg:flex space-x-6 items-center">
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
                    </div>
                    {/* Right: Socials */}
                    <div className="hidden lg:flex items-center space-x-4">
                        {SOCIALS.map(social => (
                            <a
                                key={social.label}
                                href={social.href}
                                className="px-2 py-1 rounded hover:bg-[#ffe239] hover:text-black transition"
                                aria-label={social.label}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                    {/* Mobile menu button */}
                    <div className="flex items-center lg:hidden">
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
            {/* Mobile menu */}
            {isOpen && (
                <div className="lg:hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
                    <div className="space-y-1">
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
                    <div className="flex space-x-4 mt-4">
                        {SOCIALS.map(social => (
                            <a
                                key={social.label}
                                href={social.href}
                                className="py-1 rounded hover:bg-[#ffe239] hover:text-black transition"
                                aria-label={social.label}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;