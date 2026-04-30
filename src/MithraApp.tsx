import React, { useState, useEffect } from 'react';

import CustomCoaches from "./shared/components/CustomCoaches";
import CustomFooter from "./shared/components/CustomFooter";
import CustomHeader from "./shared/components/CustomHeader";
import CustomHero from "./shared/components/CustomHero";
import CustomJoin from "./shared/components/CustomJoin";
import CustomShedules from "./shared/components/CustomShedules";
import CustomSwimmers from "./shared/components/CustomSwimmers";
import CustomTranningGrounds from "./shared/components/CustomTranningGrounds";

export default function MithraApp() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Swimmers', href: '#swimmers' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Coaches', href: '#coaches' },
        { name: 'Schedules', href: '#schedules' },
        { name: 'Location', href: '#location' },
    ];

    return (
        <>
            <div className="min-h-screen font-display bg-slate-50 text-slate-900 selection:bg-accent selection:text-white">
                <CustomHeader />

                <CustomHero />

                <CustomSwimmers />

                <CustomTranningGrounds />

                <CustomCoaches />

                <CustomShedules />

                <CustomJoin />

                <CustomFooter />
            </div>

        </>

    )
}
