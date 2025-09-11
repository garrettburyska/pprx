import React from "react";

const SocialMediaBar = ({ socials }) => {
    return (
        <>
            {socials.map(social => (
                <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    className="py-1 rounded hover:text-[#ffe239]"
                    aria-label={social.label}
                >
                    {social.icon}
                </a>
            ))}
        </>
    );
}

export default SocialMediaBar;