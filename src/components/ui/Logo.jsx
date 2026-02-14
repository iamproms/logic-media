import React from 'react';
import { useTheme } from '../theme-provider';
import LogoWhite from '../../assets/images/LOGIC PH White.png';
import LogoBlack from '../../assets/images/LOGIC PH Black.png';

export const Logo = ({ className }) => {
    const { theme } = useTheme();
    // If theme is system, we need to check media query, but for simplicity in this MVP 
    // (and since ThemeProvider handles class additions), we can rely on CSS classes 
    // or simple logic. However, since we need to change the *image source*, we strictly need 
    // to know if 'dark' class is present or use CSS display toggling.

    // Best approach for no-fouc / pure css: Render BOTH and hide one via CSS.
    // This avoids JS theme state sync delay issues for images.

    return (
        <div className={className}>
            <img
                src={LogoBlack}
                alt="Logic Media Logo"
                className="w-full h-auto dark:hidden block"
            />
            <img
                src={LogoWhite}
                alt="Logic Media Logo"
                className="w-full h-auto hidden dark:block"
            />
        </div>
    );
};
