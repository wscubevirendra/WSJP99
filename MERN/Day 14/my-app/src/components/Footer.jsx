import React from "react";

const Footer = () => (
    <footer className="bg-green-600 text-white py-4 text-center">
        <div className="container mx-auto">
            <p className="text-sm">
                &copy; {new Date().getFullYear()} My App. All rights reserved.
            </p>
        </div>
    </footer>
);

export default Footer;