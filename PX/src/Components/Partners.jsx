import React from "react";

const Partners = ({ partners }) => {
    return (
        <>
            {partners.map((partner) => (
                <div key={partner.title} className="mt-4 space-y-4">
                    <img src={partner.imageUrl} alt={partner.title} className="w-full h-auto object-cover rounded-lg mb-4" />
                    <p className="font-bold">{partner.title}</p>
                    <p>{partner.text}</p>
                </div>
            ))}
        </>
    );
}

export default Partners;