import React from "react";

const News = ({ news }) => {
    return (
        <>
            {news.map((item) => (
                <div key={item.title} className="border-t border-gray-700 pt-1 mb-4">
                    <p className="text-sm text-gray-400">{item.date}</p>
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-yellow-400 hover:underline">
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                    </a>
                </div>
            ))}
        </>
    );
};

export default News;