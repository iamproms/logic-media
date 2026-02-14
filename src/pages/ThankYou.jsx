import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { CheckCircle } from 'lucide-react';

const ThankYou = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 space-y-6">
            <div className="text-green-500 mb-4">
                <CheckCircle size={64} />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold">Thank You!</h1>
            <p className="text-lg text-muted-foreground max-w-lg">
                Your application has been received successfully. We will review your details and get back to you shortly.
            </p>

            <div className="pt-8">
                <Button asChild variant="outline">
                    <Link to="/">Return Home</Link>
                </Button>
            </div>
        </div>
    );
};

export default ThankYou;
