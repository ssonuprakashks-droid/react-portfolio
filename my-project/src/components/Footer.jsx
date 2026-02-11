import React from 'react';

const Footer = () => {
    return (
        <footer className="py-8 text-center text-gray-500 text-sm border-t border-gray-200 dark:border-zinc-800">
            <p>&copy; {new Date().getFullYear()} Sonu K.S. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
