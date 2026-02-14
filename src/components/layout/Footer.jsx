import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-background border-t border-accent/20 py-8 mt-auto">
            <div className="container-custom flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <span className="text-xl font-bold text-primary tracking-tighter">LOGIC MEDIA</span>
                    <p className="text-sm text-accent mt-1">Excellence in Ministry</p>
                </div>
                <div className="text-sm text-accent text-center md:text-right">
                    <p>&copy; {new Date().getFullYear()} Logic Church Media Department.</p>
                    <p>All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export { Footer };
