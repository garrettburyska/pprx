import React from 'react';
import SocialMediaBar from './SocialMediaBar';

const PersonGrid = ({ people, title, classnames }) => {
    return (
        <div className="py-8">
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            <div className={`grid ${classnames} gap-8 text-white`}>
                {people.map((person, index) => (
                    <div key={index} className="flex flex-col">
                        <img
                            src={person.imageUrl}
                            alt={person.name}
                            className="w-full h-auto"
                        />
                        <span className="mt-2 text-md font-semibold">{person.name}</span>
                        {person.role &&
                            <span className="mt-1 text-sm">{person.role}</span>
                        }
                        {person.socials &&
                            <div className="flex space-x-4">
                                <SocialMediaBar socials={person.socials} />
                            </div>
                        }
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PersonGrid;
