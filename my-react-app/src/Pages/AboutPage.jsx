import React from "react";
import PersonGrid from "../Components/PersonGrid";
import { FaXTwitter, FaInstagram, FaYoutube, FaTwitch, FaFacebook } from "react-icons/fa6";

const MANAGEMENT = [
    { name: 'Matt "Djojo" Djojonegoro', imageUrl: '/image13.jpg', role: 'President & Co-Founder',},
    { name: 'Nikhil "nikh" Hathiramani', imageUrl: '/image14.jpg', role: 'CEO & Co-Founder',},
    { name: 'Harley "dsn" Örwall', imageUrl: '/image15.jpg', role: 'CGO & Co-Founder',},
    { name: 'Gad "psychrbbt" Tan', imageUrl: '/image16.jpg', role: 'CCO & Co-Founder',},
    { name: 'Yin "mewmew__pewpew" Shanyang', imageUrl: '/image17.jpg', role: 'CTO',},
    { name: 'Clara "declaration" Tan', imageUrl: '/image18.jpg', role: 'Content Lead',},
    { name: 'Andi "Sleepy" Bangsawan', imageUrl: '/image19.jpg', role: 'Country Manager',},
    { name: 'Alexandre "Alecks" Salle', imageUrl: '/image20.jpg', role: 'Head Coach',},
    { name: 'Kumaresan "Tommy" Ramani', imageUrl: '/image21.jpg', role: 'Team Manager',},
];

const AboutPage = () => {
    return (
        <div className="flex flex-1 items-center justify-center bg-black min-h-0 min-w-0 h-full w-full text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <p className="mb-4">
                    Founded in 2020, Paper Rex™ is a Singapore based gaming organization built at the crossroads of entertainment, competitive esports, and merchandise.
                </p>
                <p className="mb-4">
                    Paper Rex™ is a VALORANT Champions Tour (VCT) Pacific partnered organization with <a className="text-[#ffe239] hover:underline" href="https://www.riotgames.com/en" target="_blank">Riot Games</a>.
                </p>
                <p className="mb-4">
                    The Paper Rex VALORANT team is among the world’s top performing teams. In 2023, Paper Rex emerged champions of the inaugural VCT Pacific Playoffs. To date, the team has the record for most international VCT events attended (11), and has accumulated a total prize winning of over US$1.5m. Most recently, Paper Rex were crowned the <a href="https://www.straitstimes.com/sport/paper-rexs-triumph-at-valorant-masters-a-major-win-for-singapore-south-east-asia" target="_blank" className="text-[#ffe239] hover:underline">champions of VCT Masters Toronto 2025</a>!
                </p>
                <p className="mb-4">
                    Our vision is to give every gamer something to look forward to, something to get behind, and something that they can call their own.
                </p>
                <div className="flex flex-col md:flex-row md:items-start md:space-x-8 mt-8">
                    <img src="/image12.jpg" alt="Original Roster" className="w-full md:w-2/3 rounded-lg"/>
                    <div className="w-full md:w-1/3 mt-4 md:mt-0">
                        <p className="mb-4">
                            <b>Pictured:</b> Our CS:GO team early in the first quarter of 2020 during boot camp in the Paper Rex Singapore facility, prior to the Covid-19 Coronavirus travel restrictions.
                        </p>
                        <p className="mb-4">
                            The team trained to qualify for <i>ESL One 2020 - Road to Rio</i>.
                        </p>
                        <p className="mb-4">
                            This was also the first time all 5 of our original players were playing on the same team. They were joined by Prashant 'Aequitas' Prabhakar (far left) and Harley 'dsn' Örwall (far right).
                        </p>
                    </div>
                </div>
                <PersonGrid title="Management Team" classnames="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5" people={MANAGEMENT}/>
                <img src="/image22.jpg" alt="Paper Rex Photo" />
            </div>
        </div>
    );
}

export default AboutPage;