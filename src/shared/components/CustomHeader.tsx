import useHeader from '@/src/mithra/hooks/useHeader';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

export default function CustomHeader() {

    const {
        isMenuOpen,
        setIsMenuOpen,
        scrolled,
        navLinks
    } = useHeader()

    /*  */
    return (
        <>
            {/* Header */}
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0B1B3D]/95 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-6'
                    }`}
            >
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-[#0B1B3D] rounded flex items-center justify-center border border-white/20">
                            <img
                                src="/img/logoMithra.jpg"
                                alt="Logo"
                                className="w-10 h-10 object-contain"
                                referrerPolicy="no-referrer"
                            />
                        </div>
                        <div className="hidden sm:block">
                            <span className="block text-white font-extrabold text-xl leading-none tracking-tight">MITHRA</span>
                            <span className="block text-[#B08D57] text-[10px] tracking-[0.2em] font-bold">ELITE SWIMMING TEAM</span>
                        </div>
                    </div>

                    {/* Desktop Nav */}
                    <ul className="hidden md:flex items-center gap-8 text-xs font-bold text-white/90 uppercase tracking-widest">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a href={link.href} className="hover:text-[#B08D57] transition-colors duration-300">
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center gap-4">
                        <button className="hidden lg:block bg-[#B08D57] hover:bg-[#96784a] text-white px-6 py-2.5 rounded font-bold text-xs tracking-widest transition-all shadow-lg hover:shadow-[#B08D57]/20">
                            ¿Te interesa?
                        </button>
                        <button
                            className="md:hidden text-white p-2"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </nav>

                {/* Mobile Nav */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden bg-[#0B1B3D] border-t border-white/10 overflow-hidden"
                        >
                            <ul className="px-4 py-6 space-y-4">
                                {navLinks.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            className="block text-white font-bold text-sm uppercase tracking-widest hover:text-[#B08D57]"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                                <li>
                                    <button className="w-full bg-[#B08D57] text-white py-3 rounded font-bold text-sm tracking-widest">
                                        ¿Te interesa?
                                    </button>
                                </li>
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>

        </>
    )
}