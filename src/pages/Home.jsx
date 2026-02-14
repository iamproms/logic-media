import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Logo } from '../components/ui/Logo';

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center text-center space-y-8 py-12 md:py-24 px-4">
            <div className="w-48 md:w-64 mb-4">
                <Logo />
            </div>

            <div className="space-y-4 max-w-2xl">
                <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-400">
                    Capture The Moment
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground">
                    Serving God through creativity and excellence in media.
                </p>
            </div>

            <div className="py-8">
                <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium mb-6">
                    Phase 1: Recruitment Open
                </div>

                <div className="flex justify-center">
                    <Button asChild size="lg" className="text-lg px-8">
                        <Link to="/media-recruitment">Join The Team</Link>
                    </Button>
                </div>
            </div>

            <div className="mt-16 text-sm text-muted-foreground">
                <p>Full website experience coming soon.</p>
            </div>
        </div>
    );
};

export default Home;
