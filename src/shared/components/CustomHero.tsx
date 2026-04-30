import { ChevronDown } from 'lucide-react'
import { motion } from 'motion/react'

export default function CustomHero() {
    return (
        <>
            {/* Hero Section */}
            <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyulf-hzBE3se0SQRt-p5Isr-Zi0ONifjsUCY8BYJxUokFfmgYtsuYLyVexcWkXf-DPIABndsZ-KAACyQlBMZYsYarr1KI9vLMCKaoSP6sP1NxzOB1E9qYAyrmw0l9dx_ow06zT1Qo310ldVJwok38eJw_YxWRkr7kfRjJESAOWrQBCiLKjs4kbWDRlytyX7vWr2ezGLx19YcGUiJ9ZidLjojHllLkPBHZEscjs5aOmzVg_NlQG_prhJcw2zVxLePs3Ij5VvbuTrw"
                        alt="Swimmer"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-[#0B1B3D]/40 via-[#0B1B3D]/60 to-[#0B1B3D]/90"></div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 text-center px-4 max-w-5xl mx-auto"
                >
                    <span className="text-[#B08D57] font-bold tracking-[0.4em] text-sm md:text-base mb-6 block">ENGINEERING CHAMPIONS</span>
                    <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-tight">
                        Mithra Elite <br />
                        <span className="italic text-[#B08D57]">Excellence</span>
                    </h1>
                    <p className="text-white/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-light">
                        Join the region's premier high-performance swimming program. Elite coaching, state-of-the-art facilities, and a culture of victory.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <button className="w-full sm:w-auto px-10 py-5 bg-[#B08D57] hover:bg-[#96784a] text-white font-bold rounded shadow-2xl transition-all hover:-translate-y-1 tracking-widest text-sm">
                            VIEW CLASS SCHEDULE
                        </button>
                        <button className="w-full sm:w-auto px-10 py-5 border-2 border-white/30 hover:border-white text-white font-bold rounded backdrop-blur-sm transition-all tracking-widest text-sm">
                            TOUR THE FACILITY
                        </button>
                    </div>
                </motion.div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/40">
                    <ChevronDown size={40} />
                </div>
            </section>

        </>
    )
}
