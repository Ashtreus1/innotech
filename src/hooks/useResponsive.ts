"use client";
import { useState, useEffect } from 'react';

export const useResponsive = (): boolean => {
    const [isMobileTablet, setIsMobileTablet] = useState<boolean>(false);
    
    useEffect(() => {
        const handleResize = () => {
            setIsMobileTablet(window.innerWidth < 1024);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    })
    return isMobileTablet;
} 