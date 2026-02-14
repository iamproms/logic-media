import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';
import { ThemeToggle } from '../ui/ThemeToggle';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
    ];

    return (
        <nav className="bg-background border-b border-border/40 sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container-custom flex justify-between items-center h-16">
                <Link to="/" className="text-2xl font-bold text-primary tracking-tighter">
                    LOGIC MEDIA
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <ThemeToggle />
                    <Button asChild className="ml-4" variant="primary">
                        <Link to="/media-recruitment">Join Us</Link>
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center gap-4">
                    <ThemeToggle />
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-foreground hover:text-primary focus:outline-none"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-background border-b border-border/40 py-4">
                    <div className="container-custom flex flex-col space-y-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="text-foreground/80 hover:text-primary transition-colors text-base font-medium"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link to="/media-recruitment" onClick={() => setIsOpen(false)}>
                            <Button className="w-full" variant="primary">
                                Join Us
                            </Button>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export { Navbar };
