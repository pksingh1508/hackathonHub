"use client";

import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faLightbulb, faHandsHelping } from '@fortawesome/free-solid-svg-icons'
import vision from '../../assets/vision.jpg'
import mission from '../../assets/mission.jpg'
import { useRouter } from 'next/navigation'

const AboutPage = () => {
    const router = useRouter();
    return (
        <div className="min-h-screen bg-[#101010] text-white font-sans relative overflow-hidden">


            <Navbar />
            <main className="container mx-auto px-4 py-16 max-w-6xl mt-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center justify-center min-h-[70vh] text-center mb-12"
                >
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 max-w-4xl">
                        About HackathonHub
                    </h1>
                    <p className="text-xl mb-8 text-[#979797] font-medium leading-relaxed max-w-2xl">
                        HackathonHub is the premier platform for connecting innovators, developers, and creative minds through exciting hackathon events. Our mission is to foster innovation, collaboration, and skill development in the tech community.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="grid md:grid-cols-2 gap-12 items-center mb-16"
                >
                    <motion.div
                        className="bg-[#1e1d1c] p-8 rounded-lg shadow-xl hover:bg-opacity-50 transition-all duration-300 border-[#383838] border"
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="order-1">
                            <h2 className="text-3xl font-semibold mb-4 text-purple-400">Our Mission</h2>
                            <p className="text-[#7f8188] mb-4 leading-relaxed">
                                At HackathonHub, our mission is to empower the next generation of innovators by providing a platform that:
                            </p>
                            <ul className="list-disc list-inside text-[#7f8188] mb-4 leading-relaxed">
                                <li>Facilitates collaboration among diverse groups of talented individuals</li>
                                <li>Challenges participants to push the boundaries of technology</li>
                                <li>Provides resources and mentorship to nurture ideas from conception to reality</li>
                                <li>Creates opportunities for learning, networking, and career growth</li>
                            </ul>
                            <p className="text-[#7f8188] leading-relaxed">
                                We are committed to fostering an inclusive environment that celebrates creativity, embraces diversity, and drives technological advancement.
                            </p>
                        </div>
                    </motion.div>
                    <div className="relative h-64 md:h-full order-2">
                        <Image
                            src={mission}
                            alt="Our Mission"
                            fill
                            style={{ objectFit: "cover" }}
                            className="rounded-lg shadow-2xl transition-all duration-300 hover:scale-105"
                        />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="grid md:grid-cols-2 gap-12 items-center mb-16"
                >
                    <motion.div
                        className="bg-[#1e1d1c] p-8 rounded-lg shadow-xl hover:bg-opacity-20 transition-all duration-300 order-1 md:order-2 border-[#383838] border"
                        whileHover={{ scale: 1.05 }}
                    >
                        <h2 className="text-3xl font-semibold mb-4 text-blue-400">Our Vision</h2>
                        <p className="text-[#7f8188] mb-4 leading-relaxed">
                            We envision a world where innovation knows no bounds, and where passionate individuals can come together to solve real-world problems through technology.
                        </p>
                        <p className="text-[#7f8188] mb-4 leading-relaxed">
                            HackathonHub aims to be the catalyst for groundbreaking ideas and the birthplace of tomorrow's tech leaders. We see a future where:
                        </p>
                        <ul className="list-disc list-inside text-[#7f8188] mb-4 leading-relaxed">
                            <li>Every aspiring developer has access to cutting-edge hackathons</li>
                            <li>Collaboration transcends geographical boundaries</li>
                            <li>Innovation drives positive change in communities worldwide</li>
                            <li>Diversity and inclusion are at the forefront of technological advancement</li>
                        </ul>
                    </motion.div>
                    <div className="relative h-64 md:h-full order-2 md:order-1">
                        <Image
                            src={vision}
                            alt="Our Vision"
                            fill
                            style={{ objectFit: "cover" }}
                            className="rounded-lg shadow-2xl transition-all duration-300 hover:scale-105 "
                        />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="mb-16"
                >
                    <h2 className="text-4xl font-semibold mb-8 text-center text-[#cccccc]">What Sets Us Apart</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="bg-[#1e1d1c] p-6 rounded-lg shadow-xl border-[#383838] border"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <FontAwesomeIcon icon={feature.icon} className="text-4xl mb-4 text-purple-400" />
                                <h3 className="text-xl font-semibold mb-4 text-[#c4c4c4]">{feature.title}</h3>
                                <p className="text-[#979797]">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.6, duration: 0.8 }}
                    className="text-center"
                >
                    <h2 className="text-4xl font-semibold mb-8 text-[#d4d4d4]">Join Our Community</h2>
                    <p className="text-xl mb-8 text-gray-300 font-light">
                        Ready to embark on your next hackathon adventure? <br /> Join HackathonHub today and be part of a thriving community of innovators!
                    </p>
                    <Button onClick={() => router.push('/hackathons')} size="lg" className="bg-[#1e1d1c] border border-[#383838] text-[#d6d6d6] transition-all duration-300 transform hover:scale-105 text-lg px-8 py-3">
                        Get Started
                    </Button>
                </motion.div>
            </main>
            <Footer />
        </div>
    )
}

const features = [
    {
        title: "Global Reach",
        description: "Connect with participants and organizers from around the world, fostering diverse collaborations and ideas.",
        icon: faGlobe
    },
    {
        title: "Cutting-edge Challenges",
        description: "Tackle real-world problems using the latest technologies and innovative approaches.",
        icon: faLightbulb
    },
    {
        title: "Comprehensive Support",
        description: "From ideation to submission, we provide resources and mentorship to help you succeed.",
        icon: faHandsHelping
    }
]

export default AboutPage