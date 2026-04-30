import { ArrowRight } from "lucide-react";


export default function CustomTranningGrounds() {
    return (
        <>
            {/* Training Grounds */}
            <section id="gallery" className="py-32 px-4 bg-slate-100">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                        <div>
                            <span className="text-[#B08D57] font-bold tracking-[0.2em] text-xs uppercase mb-3 block">Visual Journey</span>
                            <h2 className="text-4xl md:text-5xl font-serif text-[#0B1B3D]">Training Grounds</h2>
                        </div>
                        <button className="flex items-center gap-2 text-[#0B1B3D] font-bold hover:text-[#B08D57] transition-colors tracking-widest text-sm">
                            VIEW FULL GALLERY <ArrowRight size={20} />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="md:col-span-2 md:row-span-2 overflow-hidden rounded-2xl shadow-xl aspect-square md:aspect-auto">
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZeQW80teIkoRouJMEc_a6XgxhuxbNsJuXrOSwxpF80fZ2kSibcR6sOXi7H0MViMHL-v9cAQEfYhblo9DiF4lY-9_QspqhWrt0M8XRAWNHPRjX1QfXAXp9dMBlJju68QgBgaEdOuJSzdbnLIdaKr8sSmLns6NfFJvI7HK6-zibUhQn19kMWuiXjA_OKt0WqJI6W3aJSuccUfquwNcU3FQFSMlu1psVmCNViwrMg9PJc-y7waHs8mmi-dw8lWKVwhBQzc4tWlNacPo"
                                alt="Pool"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                referrerPolicy="no-referrer"
                            />
                        </div>
                        <div className="overflow-hidden rounded-2xl shadow-xl aspect-video md:aspect-square">
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWj-x6RPp2WeZlmkIAq-4IIqCepe-oTG2es9uq6ue35_IPcB7imp8M2-ULFh3fZVchX1KTRUIgqcAC8AzZ3YcqeAZCGS-4b-68oDihxM9vTaHVDmxMV2vABpRJ21mkenW2x0zLMzKP2cG60-PtPIGeWEhHDyZqBMjXzl8a4ZOtiepG4SyIVnH62Ksy-_vpTE3tnhNh80ocvwPXGK7cr36806JniSRkCTfuvdBcfr2ha1GO8YcGIRKrfJhCtc3__fFo7YZ9twSx6CA"
                                alt="Coaching"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                referrerPolicy="no-referrer"
                            />
                        </div>
                        <div className="overflow-hidden rounded-2xl shadow-xl aspect-video md:aspect-square">
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGEAxx1JIRMs73WzFZwfKO9t6GbEM9f_oK04lm-sQJmi3Q1sHQ_M8OV3jQH3zfOQ1KEX3jHCTU8kUBsCE3Eb9oNvJbr5mkStLkxzkpU356B22JCFdObBMyekqBytv-XthUoUXtD3oW0VHdOsEE_MuCb7CsA5fycIImu-UJcHQyHQs6Y2q1PLjwIEmb475RlyKTpmBKQkd-usm1yud8Tgudnv3MMndRPjj7vjbeb0CSvWa6hzeupjA2bCnFYtxQ9h12QZtixAJcqLo"
                                alt="Underwater"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                referrerPolicy="no-referrer"
                            />
                        </div>
                        <div className="md:col-span-2 overflow-hidden rounded-2xl shadow-xl aspect-video">
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRELbdtUkQX5fZC3ZCUfrPbHGmwdNJ3ijeHRrb2PghPE5h6EuAwZlVVzwa7SeE8VqmvwrWgDBzGGCELVJgh4z6xSM1k54S_osH3J8aSaFd7vwgMhLfNBMZBQtdpZikKf7iqi9DzDm0ZutzCXPHduaZW8bhfF7u81kxTw4BeK_5v8mjq_QCARocwUXai1akxNfk7L43N8yYt2tJfG4Ui_FGCq-pVyaksg9--Y6nZj0YbxAx8FJg7fFMlvnqg5IC17_g7JFQXualHbI"
                                alt="Team"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                referrerPolicy="no-referrer"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
