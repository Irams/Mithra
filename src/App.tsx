/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Menu,
  X,
  ArrowRight,
  Star,
  TrendingUp,
  Users,
  MapPin,
  Phone,
  Mail,
  ChevronDown,
  Facebook,
  Instagram,
  Twitter
} from 'lucide-react';

export default function App() {
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
    { name: 'Home', href: '#home' },
    { name: 'Swimmers', href: '#swimmers' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Coaches', href: '#coaches' },
    { name: 'Schedules', href: '#schedules' },
    { name: 'Location', href: '#location' },
  ];

  return (
    <>
      <div className="min-h-screen font-display bg-slate-50 text-slate-900 selection:bg-accent selection:text-white">


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
      </div>
      );
    </>
  )
}