import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FaXTwitter, FaInstagram, FaYoutube, FaDiscord, FaTiktok, FaFacebook, FaLinkedin, FaReddit } from "react-icons/fa6";
import SocialMediaBar from './Components/SocialMediaBar';

const HOVERCLASS = "hover:text-[#ffe239]";
const ACTIVECLASS = "text-[#ffe239]";

const LINKS = [
    { href: "/about", label: "ABOUT" },
    { href: "/team", label: "TEAM" },
    { href: "/creators", label: "CREATORS" },
    { href: "/partners", label: "PARTNERS" },
    { href: "/news", label: "NEWS" },
    { href: "/contact", label: "CONTACT" },
];

const SOCIALS = [
    { href: "https://www.instagram.com/pprxteam/", label: "Instagram", icon: <FaInstagram /> },
    { href: "https://x.com/pprxteam/", label: "X", icon: <FaXTwitter /> },
    { href: "https://www.youtube.com/channel/UCwlKnVP2b9m2riIqBFrAUfw?sub_confirmation=1", label: "YouTube", icon: <FaYoutube /> },
    { href: "https://www.tiktok.com/@pprxteam", label: "TikTok", icon: <FaTiktok /> },
    { href: "https://www.facebook.com/pprxteam/", label: "Facebook", icon: <FaFacebook /> },
    { href: "https://discord.gg/zhdbVSAUsc", label: "Discord", icon: <FaDiscord /> },
    { href: "https://www.linkedin.com/company/67714977", label: "LinkedIn", icon: <FaLinkedin /> },
    { href: "https://www.reddit.com/r/PaperRexVALORANT/", label: "Reddit", icon: <FaReddit /> },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    const location = useLocation();

    return (
        <nav className="bg-black shadow-md text-white font-bold sticky top-0 z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Left: Logo and Links */}
                    <div className="flex items-center space-x-8">
                        <a href="/" className={`text-4xl font-extrabold tracking-wide ${HOVERCLASS}`}>PX</a>
                        <div className="hidden lg:flex space-x-6 items-center">
                            {LINKS.map(link => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className={`${HOVERCLASS} ${location.pathname === link.href ? ACTIVECLASS : ""} text-sm`}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>
                    {/* Right: Socials */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <SocialMediaBar socials={SOCIALS} />
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
                        <SocialMediaBar socials={SOCIALS} />
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;