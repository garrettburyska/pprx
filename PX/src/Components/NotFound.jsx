import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="bg-black w-screen h-screen text-white text-center p-4">
            <h2>404 - Page Not Found</h2>
            <p>The page you are looking for does not exist.</p>
            <Link to="/" className="text-[#ffe239] hover:underline">Go back to Home</Link>
        </div>
    );
};

export default NotFound;