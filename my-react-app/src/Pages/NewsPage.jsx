import React from "react";
import News from "../Components/News";

const NEWS = [
    { date: 'Sep 12, 2025', title: 'Paper Rex release Pokémon UNITE Team', link: 'https://x.com/pprxproto/status/1966441669638680922' },
    { date: 'Aug 31, 2025', title: 'Paper Rex are your VCT Pacific 2025 Champions!', link: 'https://x.com/pprxteam/status/1962083586708066416' },
    { date: 'Jul 14, 2025', title: "Paper Rex move 'mindfreak' to Reserve Roster", link: 'https://x.com/pprxteam/status/1944698472831266838' },
    { date: 'Jul 13, 2025', title: 'Paper Rex VALORANT finish EWC 2025 in 4th Place!', link: 'https://x.com/pprxteam/status/1944333883870249104' },
    { date: 'Jul 01, 2025', title: "'Lavandula' joins Paper Rex as Content Creator!", link: 'https://x.com/pprxteam/status/1940017725830832349' },
]

const NewsPage = () => {
    return (
        <div className="flex flex-1 justify-center bg-black min-h-0 min-w-0 h-full w-full text-white">
            <div className="flex flex-col space-y-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
                <p>
                    Keep up with the latest Paper Rex news, tournaments, roster changes, and media features.
                </p>
                <News news={NEWS}/>
            </div>
        </div>
    );
}

export default NewsPage;