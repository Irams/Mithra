import { Swimmer } from "@/src/interfaces/swimmers.interface";
import { motion } from "motion/react";


export const CustomSwimmers: React.FC<{ swimmers: Swimmer[] }> = ({ swimmers }) => {
    return (
        <>
            {/* Elite Swimmers */}
            <section id="swimmers" className="py-32 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <span className="text-[#B08D57] font-bold tracking-[0.2em] text-xs uppercase mb-3 block"></span>
                        <h2 className="text-4xl md:text-5xl font-serif text-[#0B1B3D] mb-6">Nuestros Nadadores</h2>
                        <div className="h-1 w-20 bg-[#B08D57] mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {swimmers.map((swimmer, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.2 }}
                                className="group relative overflow-hidden rounded-2xl shadow-2xl aspect-3/4"
                            >
                                <img
                                    src={swimmer.img}
                                    alt={swimmer.name}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                                    referrerPolicy="no-referrer"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-[#0B1B3D] via-transparent to-transparent opacity-90"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-8">
                                    <h3 className="text-white text-2xl font-bold mb-1">{swimmer.name}</h3>
                                    <p className="text-[#B08D57] font-semibold text-sm tracking-wide">{swimmer.title}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
