import {
    Facebook,
    Instagram,
    Mail,
    MapPin,
    Phone,
    Twitter
} from 'lucide-react'


export default function CustomFooter() {
    return (
        <>
            {/* Footer */}
            <footer className="bg-[#0B1B3D] pt-24 pb-12 px-4 text-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                    <div className="space-y-8">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-white/10 rounded flex items-center justify-center border border-white/10">
                                <img
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHrHFVbk_jI-hfzMwfolg1IuU3MlXGI3NP5CIM-zQnnws5eqyJ6PbWvo_A4nadLv6UM4VX1Jp700XDFo7S4qtq3D5HqxCE7oXAvE2a2Vad6U3EqSXctJtgR4BDlvHNI7jAT3FwtGHAnSLO8EDe-e5dzih-GbvPHZj4yTx5PgpryWIGzG80ez2skhuVC30hYNEUiMbvuGgua0wzG52bM6EIZfWL3dYZM27WgLLGXnvIs8PuW44ryJjAzfJn1YWMm4lw43mz9dvRkAU"
                                    alt="Logo"
                                    className="w-10 h-10 object-contain"
                                    referrerPolicy="no-referrer"
                                />
                            </div>
                            <div>
                                <span className="block text-white font-extrabold text-xl leading-none tracking-tight">MITHRA</span>
                                <span className="block text-[#B08D57] text-[10px] tracking-[0.2em] font-bold">ELITE SWIMMING</span>
                            </div>
                        </div>
                        <p className="text-white/50 text-sm leading-relaxed max-w-xs">
                            The region's leading aquatic performance center, dedicated to developing champions through science-based training and elite mentorship.
                        </p>
                    </div>

                    <div>
                        <h5 className="text-lg font-bold mb-8 border-l-4 border-[#B08D57] pl-4 uppercase tracking-widest">Quick Links</h5>
                        <ul className="space-y-4 text-white/50 text-sm font-medium">
                            <li><a href="#" className="hover:text-[#B08D57] transition-colors">Member Portal</a></li>
                            <li><a href="#" className="hover:text-[#B08D57] transition-colors">Tournament Results</a></li>
                            <li><a href="#" className="hover:text-[#B08D57] transition-colors">Team Shop</a></li>
                            <li><a href="#" className="hover:text-[#B08D57] transition-colors">Health & Safety</a></li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="text-lg font-bold mb-8 border-l-4 border-[#B08D57] pl-4 uppercase tracking-widest">Contact Info</h5>
                        <ul className="space-y-6 text-white/50 text-sm font-medium">
                            <li className="flex items-start gap-4">
                                <MapPin size={20} className="text-[#B08D57] shrink-0" />
                                <span>122 Elite Way, Victory City, VC 45678</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Phone size={20} className="text-[#B08D57] shrink-0" />
                                <span>+1 (555) 987-6543</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Mail size={20} className="text-[#B08D57] shrink-0" />
                                <span>hello@mithraelite.com</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="text-lg font-bold mb-8 border-l-4 border-[#B08D57] pl-4 uppercase tracking-widest">Follow Us</h5>
                        <div className="flex gap-4">
                            {[
                                { icon: <Facebook size={20} />, href: "#" },
                                { icon: <Instagram size={20} />, href: "#" },
                                { icon: <Twitter size={20} />, href: "#" }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    className="w-12 h-12 bg-white/5 hover:bg-[#B08D57] rounded-2xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1 border border-white/10"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto pt-12 border-t border-white/10 text-center text-white/30 text-[10px] font-bold uppercase tracking-[0.3em]">
                    <p>© 2024 Mithra Elite Swimming Team. All rights reserved. Designed for Excellence.</p>
                </div>
            </footer>
        </>
    )
}
