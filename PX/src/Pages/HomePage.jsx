import React from "react";
import HomeImage from "../Components/HomeImage";

const IMAGES = [
    {
        src: "/home/image1.jpg", 
        desc: "Paper Rex reclaims its title as Champions of VCT Pacific 2025. This is the second time the team finished first in the regional league.", 
        link: "https://x.com/pprxteam/status/1962456323712590127"
    },
    {
        src: "/home/image2.jpg", 
        desc: "After a nail-biting match against the EMEA powerhouse FNATIC, the Paper Rex VALORANT team emerge champions of VALORANT Masters Toronto 2025! Our first international trophy and the first international title for a SEA FPS team.", 
        link: "https://x.com/pprxteam/status/1936907675775955214"
    },
    {
        src: "/home/image3.jpg", 
        desc: "The Paper Rex VALORANT squad pushed through and have qualified for the VALORANT Masters Toronto 2025!", 
        link: "https://x.com/pprxteam/status/1920810030770909322"
    },
];

const HomePage = () => {
    return (
        <div className="flex flex-1 items-center justify-center bg-black min-h-0 min-w-0 h-full w-full text-white">
            <div className="p-8">
                {IMAGES.map((image, index) => (
                    <HomeImage key={index} image={image} />
                ))}
            </div>
        </div>
    );
}

export default HomePage;