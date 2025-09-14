import React from "react";
import PersonGrid from "../Components/PersonGrid";
import { FaFacebook, FaInstagram, FaTwitch, FaXTwitter, FaYoutube } from "react-icons/fa6";

const CREATORS = [
    { name: 'Riodjaja 🇮🇩', imageUrl: '/creators/image7.jpg', 
        socials: [
            { href: "https://www.instagram.com/riodjaja/", label: "Instagram", icon: <FaInstagram /> },
            { href: "https://www.facebook.com/riodjajagaming", label: "Facebook", icon: <FaFacebook /> },
            { href: "https://www.youtube.com/c/RioDjajaGaming/", label: "YouTube", icon: <FaYoutube /> },
        ]
    },
    { name: 'Spicyuuu 🇸🇬', imageUrl: '/creators/image8.jpg', 
        socials: [
            { href: "https://twitter.com/spicyuuu/", label: "X", icon: <FaXTwitter /> },
            { href: "https://www.twitch.tv/spicyuuu/", label: "Twitch", icon: <FaTwitch /> },
            { href: "https://www.instagram.com/spicyuuu/", label: "Instagram", icon: <FaInstagram /> },
        ]
    },
    { name: 'CGRS 🇹🇭', imageUrl: '/creators/image9.jpg', 
        socials: [
            { href: "https://x.com/CigaretteS_Klay", label: "X", icon: <FaXTwitter /> },
            { href: "https://www.facebook.com/CigaretteSTV", label: "Facebook", icon: <FaFacebook /> },
            { href: "https://www.youtube.com/@TheMyselfHellos", label: "YouTube", icon: <FaYoutube /> },
        ]
    },
    { name: 'BrimCanhCut 🇻🇳', imageUrl: '/creators/image10.jpg', 
        socials: [
            { href: "https://www.facebook.com/BrimCanhCut/", label: "Facebook", icon: <FaFacebook /> },
            { href: "https://www.youtube.com/@BrimCanhCut", label: "YouTube", icon: <FaYoutube /> },
        ]
    },
    { name: 'Lavandula 🇮🇩', imageUrl: '/creators/image11.webp', 
        socials: [
            { href: "https://www.instagram.com/fcyacr/", label: "Instagram", icon: <FaInstagram /> },
            { href: "https://www.twitch.tv/xlavandulax", label: "Twitch", icon: <FaTwitch /> },
        ]
    },
];

const CreatorsPage = () => {
    return (
        <div className="flex flex-1 items-center justify-center bg-black min-h-0 min-w-0 h-full w-full text-white">
            <div className="flex flex-col space-y-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <p>
                    Paper Rex Creators are our team of digital content creators, and unique stream personalities. Whether it's dropping that 40 bomb, chilling, or straight up memeing, our content creators build, inform, engage, and entertain in a way that only Paper Rex can.
                </p>
                <PersonGrid people={CREATORS} title="Paper Rex Creators" classnames="grid-cols-1 sm:grid-cols-2 md:grid-cols-3"/>
            </div>
        </div>
    );
}

export default CreatorsPage;