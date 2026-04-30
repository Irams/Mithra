import { motion } from "motion/react";


export default function CustomSwimmers() {
    return (
        <>
            {/* Elite Swimmers */}
            <section id="swimmers" className="py-32 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <span className="text-[#B08D57] font-bold tracking-[0.2em] text-xs uppercase mb-3 block">Hall of Fame</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-[#0B1B3D] mb-6">Our Elite Swimmers</h2>
                        <div className="h-1 w-20 bg-[#B08D57] mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            {
                                name: "Marcus Thorne",
                                title: "National Record Holder - 100m Fly",
                                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuANqD_RrAXAnWx-ZZVsUC2hKwDbt9HSry37OPd4sPAQ2AMWqjqqVjPRejNHu_rk_TQdj7Tv3erMfW9vdQRDUih2CYKTK-Hky671brsZgVnbFRCaBHoTLQ2gY1HSPAgNAyeUWB-cZVQ7KDFEIyicFqxQ1vxLYL7-TVV7Vr5mStIVMaf0dL0XNNdC9_BkyDwyRL4PD4OFSXHrGb5N4fG1_Vk2LDrYHSCRqphRFPhl7gijHkuh2eAdRYf6egK-dHm9rsOPh30o-Quf98c"
                            },
                            {
                                name: "Sarah Jenkins",
                                title: "Junior Olympian - 200m Breast",
                                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCf1ihIkFKbkdVySeKn9KJsrf1fj1N_HMSf7VFJfyUH-0PrNHbRE_w_QPj-BSmyDcZgv-XQqCZUg32LcM3wJJOmn1D9MfXp6wAugBiMgK3wx4phO-lBKxvg5ja9tBVbwymZQWnNuOnHwJUPzrF71tpEUQPhHnsZ88m3uRJuDWWo-98PHX7LQgF9q-CJItGX3SMcwTs5zTpz65bMNm7AGcgZmFuCYhCaRwwzWvs2V7suhmacRYULnw_vdoyPMfCkZHhZCOHLblLBVZQ"
                            },
                            {
                                name: "David Kim",
                                title: "State Champion - 400m Free",
                                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVGwS-nn89rcq-1KoS7q-dSyzBUzwrQavJWGzyQ4GylKeGRl0PNqA7Vr8iPSCRdgIWA9aipn6lRgc2kfJBqW_al8P_L7W3TJH0o0uFlOywEyd53H-9ZiweyP0EqDkPnKv2RowF7JVhpInbSYXNw6PXYMyAUywcACKGrCOKxD5KuodW5PECzjSSZ0aoHVTLbFNul73NLsWenb_-euonV1ygddAyOmASTWzPSVA1DmFa8hLduY4WJjhzuL3uKdzXG08CuAVahlGyPb0"
                            }
                        ].map((swimmer, idx) => (
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
