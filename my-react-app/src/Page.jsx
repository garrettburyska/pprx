import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Page = ({ child }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            {child}
            <Footer />
        </div>
    )
}

export default Page;