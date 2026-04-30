import { Star, TrendingUp, Users } from "lucide-react";
import { motion } from "motion/react";


export default function CustomShedules() {
    return (
        <>
            {/* Schedules */}
            <section id="schedules" className="py-32 px-4 bg-[#0B1B3D] text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <span className="text-[#B08D57] font-bold tracking-[0.2em] text-xs uppercase mb-3 block">Weekly Roster</span>
                        <h2 className="text-4xl md:text-5xl font-serif mb-6">Class Schedules</h2>
                        <div className="h-1 w-20 bg-[#B08D57] mx-auto opacity-50"></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        {[
                            {
                                title: "Elite Performance",
                                icon: <Star className="text-[#B08D57]" />,
                                times: [
                                    { day: "Mon - Fri (AM)", time: "05:00 - 07:30" },
                                    { day: "Mon - Thu (PM)", time: "16:30 - 18:30" },
                                    { day: "Saturday", time: "06:00 - 09:00" },
                                ]
                            },
                            {
                                title: "Advanced Youth",
                                icon: <TrendingUp className="text-[#B08D57]" />,
                                times: [
                                    { day: "Mon, Wed, Fri", time: "17:00 - 18:30" },
                                    { day: "Tue, Thu", time: "06:00 - 07:30" },
                                    { day: "Saturday", time: "09:30 - 11:30" },
                                ]
                            },
                            {
                                title: "Development",
                                icon: <Users className="text-[#B08D57]" />,
                                times: [
                                    { day: "Daily (Ages 7-10)", time: "16:00 - 17:00" },
                                    { day: "Daily (Ages 11-13)", time: "17:00 - 18:00" },
                                    { day: "Sunday", time: "08:00 - 10:00" },
                                ]
                            }
                        ].map((schedule, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.2 }}
                                className="bg-white/5 backdrop-blur-md rounded-3xl p-10 border border-white/10 hover:border-[#B08D57]/50 transition-all group"
                            >
                                <div className="flex items-center gap-4 mb-10">
                                    <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-[#B08D57]/20 transition-colors">
                                        {schedule.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold uppercase tracking-tight">{schedule.title}</h3>
                                </div>
                                <div className="space-y-6">
                                    {schedule.times.map((item, i) => (
                                        <div key={i} className="flex justify-between items-center border-b border-white/10 pb-4">
                                            <span className="text-white/70 font-medium">{item.day}</span>
                                            <span className="font-bold text-[#B08D57] tracking-wider">{item.time}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
