import React from "react";
import Link from "./Link";

const HomeImage = ({ image }) => {
    return (
        <div className="w-full h-auto text-right mb-16">
            <img src={image.src} className="w-full h-auto" />
            <p>{image.desc}</p>
            <Link link={{ href: image.link, title: 'Read More' }} />
        </div>
    )
};

export default HomeImage;