import React from "react";
import PersonGrid from "../Components/PersonGrid";
import { FaXTwitter, FaInstagram, FaYoutube, FaTwitch, FaFacebook } from "react-icons/fa6";
import { href } from "react-router-dom";

const TEAM = [
    { name: `Khalish 'd4v41' Rusyaidee 🇲🇾`, imageUrl: '/image1.jpg', 
        socials: [
            { href: "https://twitter.com/prxd4v41", label: "X", icon: <FaXTwitter /> },
            { href: "https://www.twitch.tv/prxd4v41", label: "Twitch", icon: <FaTwitch /> },
            { href: "https://www.instagram.com/khalish.rusyaidee", label: "Instagram", icon: <FaInstagram /> },
            { href: "https://www.facebook.com/CSGOd4v41/", label: "Facebook", icon: <FaFacebook /> },
            { href: "https://www.youtube.com/channel/UCLuFyZMAoz1HAluiW-90X-A/", label: "YouTube", icon: <FaYoutube /> },
        ]
    },
    { name: `Jason 'f0rsakeN' Susanto 🇮🇩`, imageUrl: '/image2.jpg', 
        socials: [
            { href: "https://twitter.com/jasonsusantoo", label: "X", icon: <FaXTwitter /> },
            { href: "https://www.twitch.tv/prxf0rsakeN", label: "Twitch", icon: <FaTwitch /> },
            { href: "https://www.instagram.com/jasonsusantoo/", label: "Instagram", icon: <FaInstagram /> },
            { href: "https://www.facebook.com/jason.susanto.501", label: "Facebook", icon: <FaFacebook /> },
            { href: "https://www.youtube.com/channel/UCF0yQlTydGAnfpbO5f2xtng", label: "YouTube", icon: <FaYoutube /> },
        ]
    },
    { name: `Wang 'Jinggg' Jing Jie 🇸🇬`, imageUrl: '/image3.jpg', 
        socials: [
            { href: "https://twitter.com/Jingggxd", label: "X", icon: <FaXTwitter /> },
            { href: "https://www.twitch.tv/jingggxd", label: "Twitch", icon: <FaTwitch /> },
            { href: "https://www.instagram.com/jingggxd/", label: "Instagram", icon: <FaInstagram /> },
        ]
    },
    { name: `Aaron 'mindfreak' Leonhart 🇮🇩`, imageUrl: '/image4.jpg', 
        socials: [
            { href: "https://twitter.com/aaronleonhart4/", label: "X", icon: <FaXTwitter /> },
            { href: "https://www.instagram.com/aaronleonhart4/", label: "Instagram", icon: <FaInstagram /> },
            { href: "https://www.facebook.com/mindfreakcs/", label: "Facebook", icon: <FaFacebook /> },
            { href: "https://www.youtube.com/channel/UCZz6G1kmkdTw3S9NXn25juw/videos", label: "YouTube", icon: <FaYoutube /> },
            { href: "https://www.twitch.tv/prxmindfreak/", label: "Twitch", icon: <FaTwitch /> },
        ]
    },
    { name: `Ilia 'something' Petrov 🇷🇺`, imageUrl: '/image5.jpg', 
        socials: [
            { href: "https://twitter.com/smthlikeyou11/", label: "X", icon: <FaXTwitter /> },
            { href: "https://www.instagram.com/smthlikeyou11/", label: "Instagram", icon: <FaInstagram /> },
            { href: "https://www.youtube.com/@smthlikeyou/", label: "YouTube", icon: <FaYoutube /> },
        ]
    },
    { name: `Patrick 'PatMen' Mendoza 🇵🇭`, imageUrl: '/image6.jpg', 
        socials: [
            { href: "https://x.com/patmenVLR/", label: "X", icon: <FaXTwitter /> },
            { href: "https://www.twitch.tv/patmenVLR", label: "Instagram", icon: <FaTwitch /> },
        ]
    },
];

const TeamPage = () => {
    return (
        <div className="flex flex-1 items-center justify-center bg-black min-h-0 min-w-0 h-full w-full text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <p className="mb-4">
                    The Paper Rex VALORANT Team features some of the most celebrated players since the VCT's inception.
                </p>
                <p className="mb-4">
                    Despite the emergence of younger raw talents, our roster remains competitive while being one of the longest-standing rosters in VCT.
                </p>
                <p className="mb-4">
                    In 2025, the team made history by becoming the first South-East Asian FPS team to win an international trophy at VALORANT Masters Toronto. As the road to VALORANT Champions gets more challenging each year, the team continues to uphold the same ideologies as always; working hard and playing harder.
                </p>
                <PersonGrid className="mb-4" people={TEAM} title="Paper Rex Team" classnames="grid-cols-1 sm:grid-cols-2 md:grid-cols-3"/>
            </div>
        </div>
    );
}

export default TeamPage;