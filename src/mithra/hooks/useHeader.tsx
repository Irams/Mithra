import { useEffect, useState } from "react";


export default function useHeader() {
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
        { name: 'Inicio', href: '#home' },
        { name: 'Nadadores', href: '#swimmers' },
        { name: 'Galería', href: '#gallery' },
        { name: 'Coaches', href: '#coaches' },
        { name: 'Horarios', href: '#schedules' },
        { name: 'Ubicacion', href: '#location' },
    ];
    return {
        isMenuOpen,
        setIsMenuOpen,
        scrolled,
        navLinks
    }
}

