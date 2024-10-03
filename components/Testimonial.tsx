"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaQuoteLeft } from 'react-icons/fa'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
    {
        id: 1,
        name: "Alex Johnson",
        role: "Computer Science Student",
        avatar: "https://api.dicebear.com/5.x/initials/svg?seed=$Alex%20$Johnson",
        quote: "Participating in these hackathons has been a game-changer for my coding skills. The challenges are tough but incredibly rewarding!"
    },
    {
        id: 2,
        name: "Samantha Lee",
        role: "Software Engineering Major",
        avatar: "https://api.dicebear.com/5.x/initials/svg?seed=$Samantha%20$Lee",
        quote: "I love how these hackathons push me out of my comfort zone. The prize money is great, but the learning experience is priceless."
    },
    {
        id: 3,
        name: "Michael Chen",
        role: "Data Science Enthusiast",
        avatar: "https://api.dicebear.com/5.x/initials/svg?seed=$Michael%20$Chen",
        quote: "The diversity of problems in these hackathons has helped me explore different areas of tech. It's been an amazing journey of discovery!"
    },
    {
        id: 4,
        name: "Emily Rodriguez",
        role: "AI/ML Specialist",
        avatar: "https://api.dicebear.com/5.x/initials/svg?seed=$Emily%20$Rodriguez",
        quote: "As an AI enthusiast, I find the machine learning challenges particularly exciting. They've really helped me apply my theoretical knowledge."
    },
    {
        id: 5,
        name: "David Kim",
        role: "Full-stack Developer",
        avatar: "https://api.dicebear.com/5.x/initials/svg?seed=$David%20$Kim",
        quote: "The hackathons have been instrumental in building my portfolio. Employers are always impressed when I show them my hackathon projects!"
    },
    {
        id: 6,
        name: "Olivia Taylor",
        role: "UX/UI Designer",
        avatar: "https://api.dicebear.com/5.x/initials/svg?seed=$Olivia%20$Taylor",
        quote: "Even as a designer, I've found immense value in these coding hackathons. They've helped me understand the development process better."
    },
    {
        id: 7,
        name: "Hassan Ahmed",
        role: "Cybersecurity Student",
        avatar: "https://api.dicebear.com/5.x/initials/svg?seed=$Hassan%20$Ahmad",
        quote: "The security-focused hackathons have been eye-opening. They've shown me real-world applications of cybersecurity principles."
    },
    {
        id: 8,
        name: "Zoe Williams",
        role: "Mobile App Developer",
        avatar: "https://api.dicebear.com/5.x/initials/svg?seed=$Zoe%20$Williams",
        quote: "I've met some of my best coding buddies at these hackathons. The collaborative atmosphere is unparalleled!"
    },
    {
        id: 9,
        name: "Lucas Fernandez",
        role: "Blockchain Enthusiast",
        avatar: "https://api.dicebear.com/5.x/initials/svg?seed=$Lucas%20$Fernandez",
        quote: "The blockchain challenges have been my favorite. They've helped me dive deep into this exciting technology."
    },
    {
        id: 10,
        name: "Aisha Patel",
        role: "IoT Specialist",
        avatar: "https://api.dicebear.com/5.x/initials/svg?seed=$Aisha%20$Patel",
        quote: "From smart home solutions to industrial IoT, these hackathons have broadened my perspective on connected devices."
    }
]

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
        }, 6000) // Change testimonial every 5 seconds

        return () => clearInterval(timer)
    }, [])

    return (
        <div className="bg-[#101010] min-h-screen flex items-center justify-center px-4 py-12">
            <div className="max-w-4xl w-full bg-[#1e1d1c] rounded-xl shadow-2xl overflow-hidden border-[#383838] border">
                <div className="p-8 md:p-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#e6e6e6]">
                        What Our Hackers Say
                    </h2>
                    <div className="relative h-[300px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -50 }}
                                transition={{ duration: 0.5 }}
                                className="text-center absolute inset-0 flex flex-col items-center justify-center"
                            >
                                <FaQuoteLeft className="text-5xl text-purple-500 mb-4" />
                                <p className="text-xl md:text-2xl text-[#979797] mb-6">
                                    {testimonials[currentIndex].quote}
                                </p>
                                <div className="flex flex-col items-center">
                                    <Avatar className="w-20 h-20 mb-4">
                                        <AvatarImage src={testimonials[currentIndex].avatar} alt={testimonials[currentIndex].name} />
                                        <AvatarFallback>{testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                    </Avatar>
                                    <h3 className="text-xl font-semibold text-[#dbdbdb]">
                                        {testimonials[currentIndex].name}
                                    </h3>
                                    <p className="text-gray-500">{testimonials[currentIndex].role}</p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    )
}