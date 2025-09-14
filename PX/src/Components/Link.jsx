import React, { useState } from "react";
import { FaRegCopy, FaCheck } from "react-icons/fa6";

const Link = ({ link }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(link.href);
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 2000);
    };

    return (
        <div>
            <div className="inline-flex items-center space-x-2" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <a href={link.href} target="_blank" className="cursor-pointer py-1 rounded hover:bg-[#ffe239] hover:text-black"><span>{isHovered ? link.href : `${link.title} →`}</span></a>
                {isHovered &&
                    <button
                        onClick={handleCopy}
                        disabled={isCopied}
                        className={`cursor-pointer py-1 rounded ${isCopied ? '' : 'hover:bg-[#ffe239]'} hover:text-black`}
                    >
                        {isCopied ? <FaCheck color="green" /> : <FaRegCopy />}
                    </button>
                }
            </div>
        </div>
    );
};

export default Link;