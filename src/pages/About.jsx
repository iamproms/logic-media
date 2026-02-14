import React from 'react';

const About = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
            <h1 className="text-4xl font-bold mb-4 text-foreground">About Us</h1>
            <p className="text-xl text-muted-foreground max-w-xl">
                We are the media arm of The Logic Church, dedicated to spreading the gospel through digital excellence.
            </p>
            <div className="mt-12 px-6 py-3 bg-muted/50 rounded-lg border border-border">
                <span className="text-muted-foreground font-medium">Detailed history and vision coming soon.</span>
            </div>
        </div>
    );
};

export default About;
