import { MapPin } from "lucide-react";


export default function CustomJoin() {
    return (
        <>
            {/* Join Section */}
            <section id="location" className="py-32 px-4 bg-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="rounded-3xl overflow-hidden shadow-2xl h-150 border-8 border-slate-50 relative group">
                            <div className="absolute inset-0 bg-slate-200 flex flex-col items-center justify-center text-slate-400">
                                <MapPin size={80} className="mb-6 opacity-20" />
                                <p className="font-bold uppercase tracking-[0.3em] text-sm mb-2">Map View</p>
                                <p className="text-xs">Mithra Aquatic Center, 122 Elite Way</p>
                            </div>
                            <div className="absolute inset-0 bg-[#0B1B3D]/10 group-hover:bg-transparent transition-colors duration-500"></div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 space-y-10">
                        <div>
                            <span className="text-[#B08D57] font-bold tracking-[0.2em] text-xs uppercase mb-3 block">Get In Touch</span>
                            <h2 className="text-4xl md:text-5xl font-serif text-[#0B1B3D] mb-6">Join the Elite</h2>
                            <p className="text-slate-600 leading-relaxed text-lg">
                                Ready to take your swimming to the next level? Contact our admissions team for a trial session and technical evaluation.
                            </p>
                        </div>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                                    <input
                                        type="text"
                                        className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-[#B08D57] outline-none transition-all"
                                        placeholder="Marcus Thorne"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-[#B08D57] outline-none transition-all"
                                        placeholder="marcus@example.com"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Select Interest</label>
                                <select className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-[#B08D57] outline-none transition-all appearance-none">
                                    <option>Elite Performance Team</option>
                                    <option>Youth Development</option>
                                    <option>Summer Intensive</option>
                                    <option>Private Coaching</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Your Message</label>
                                <textarea
                                    className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-[#B08D57] outline-none transition-all min-h-37.5"
                                    placeholder="Tell us about your swimming background..."
                                ></textarea>
                            </div>
                            <button className="w-full bg-[#0B1B3D] text-white font-bold py-5 rounded-xl shadow-xl hover:bg-black transition-all uppercase tracking-[0.2em] text-sm">
                                SEND MESSAGE
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}
