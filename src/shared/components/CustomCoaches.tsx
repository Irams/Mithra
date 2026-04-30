import { motion } from "motion/react";

export default function CustomCoaches() {
    return (
        <>
            {/* Coaches */}
            <section id="coaches" className="py-32 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <span className="text-[#B08D57] font-bold tracking-[0.2em] text-xs uppercase mb-3 block">Elite Mentors</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-[#0B1B3D] mb-6">Meet Your Coaches</h2>
                        <div className="h-1 w-20 bg-[#B08D57] mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                        {[
                            {
                                name: "Arthur Sterling",
                                role: "Head Performance Coach",
                                desc: "Former Olympic medalist with 20+ years of high-performance coaching experience.",
                                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQlNBlXt9M6EZh7NHv2thYlJ3WL_P1nC1C8JfeKNzIrcYyRNr_qIg80jKEFe313gaPA4tCkK6njZHNA9GqzbbzHfNgHr2hWKm4eGmakovngr2XUUMIpR3Dvr8lpgnZ6KCmu9FKhvHTUrlswHcTbrNyYTudm1mSpVeIlx0LW0k8pg-Mh9-UcU5KOBRTj7iaUKzQRGjkL6QZNj2PtaUGPMNdtXGUsUiwh2b0_G-euy8iMgOrPw9YVuHGpx2F3tpHjoiOj9cbFAJw9_I"
                            },
                            {
                                name: "Elena Rodriguez",
                                role: "Sprint Technical Director",
                                desc: "Specialist in stroke biomechanics and explosive power development.",
                                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDSrr91MPaWecXG7aixnKS8OGyzI-yDjKuYbvEKepbR4LnuqR6xc2sEtKMvzsVuafHarZj0GLZm-kQoiB_A-VTU6fu4fGixcQn5W35FSv-Vx0g56Z0wSyExE1Z86Rf0dLjoYs5Ncna_obbi8GscuvNyNrQGB3BACjCfLW4efvekNE-Rdw2OmPVU3dOGaAYPNuNus4XcHMQQ6yLjcXxXbwCFp3h-s_32_QTn-ULizvIEyfFjMX3sN8eL_4NXKRIZMp7ISAlrGMnt_Es"
                            },
                            {
                                name: "James McAllister",
                                role: "Distance Lead",
                                desc: "Expert in endurance physiology and long-course race strategy.",
                                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVa69uQs-SIWn2338IlX3RRZUvpNbKoY7uJOJh5rTd60TwzZ5EKGRoFXmdsiz7F-H9g3WVxCnlHVG_Os7k8W1-U6hSp-bgZOvzRNqf5iSH-pyvV_n38WZdI5xZ78h9byvEXm8IwrAchCN58UMQYXCH3O5MpOSv2yoqYgTLr0Xy-1TsIWxxRyysDKX62AoiH6CjsU5ahbKRCw-QEZTgRv3bwPPI6SjYNkaAgWjjfNN1Lu7V_1w2ijqvHn06pXHkQh-AvTaaYIKTKxg"
                            },
                            {
                                name: "Sarah Chen",
                                role: "Junior Development",
                                desc: "Focuses on building foundational skills and passion for young talent.",
                                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJfnYkl7EHnsYcXjL_SqoIJULApS--BKWNeG0uGHhseRyptZ5NT5TVj2opTHjRJqPkfH4116ywnw2uYU9K_S-g4WsCQig7EUu_KaFZpkSmIMlerl9QGEyI6LDt6LfJl7JWAKWEkeED1n4y6EC6OdGWiz5nkfH36hbBZGtGMAnyMxtw4ZMrFnhlN93eqX4c9vSYcnpWVq-5jWuUmlOjszoOxMkmlqmOfnLr8wB8ddKx_GVQele9ACtWk-H7ouU3k54euz-PMfzYuGI"
                            }
                        ].map((coach, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex flex-col items-center text-center"
                            >
                                <div className="relative mb-8 group">
                                    <div className="absolute inset-0 border-2 border-[#B08D57] rounded-full -m-3 group-hover:-m-4 transition-all duration-500"></div>
                                    <img
                                        src={coach.img}
                                        alt={coach.name}
                                        className="w-48 h-48 rounded-full object-cover shadow-2xl border-4 border-white relative z-10"
                                        referrerPolicy="no-referrer"
                                    />
                                </div>
                                <h4 className="text-xl font-bold text-[#0B1B3D] mb-1">{coach.name}</h4>
                                <p className="text-[#B08D57] font-bold text-sm uppercase tracking-widest mb-4">{coach.role}</p>
                                <p className="text-slate-500 text-sm leading-relaxed max-w-xs">{coach.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
