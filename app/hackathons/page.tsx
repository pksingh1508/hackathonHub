"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CalendarIcon, GlobeAltIcon, UserGroupIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import { useRouter } from 'next/navigation'

interface Hackathon {
    id: number
    title: string
    image: string
    daysLeft: number
    isOnline: boolean
    prize: number
    participants: number
    startDate: string
    endDate: string
    organizer: string
    tags: string[]
    sponsor?: string
    url?: string
    status: 'finished' | 'ongoing' | 'upcoming'
}

const hackathons: Hackathon[] = [
    {
        id: 1,
        title: "Code for Bharat",
        image: "https://i.ibb.co/ChDfqsJ/CODE-FOR-BHARAT.png",  // Replace with appropriate image URL
        daysLeft: 10,
        isOnline: true,
        prize: 50000,
        participants: 2000,
        startDate: "Oct 05, 2024",
        endDate: "Oct 25, 2024",
        organizer: "NITI Aayog",
        tags: ["Civic Tech", "Government", "Social Impact"],
        sponsor: "Private Organization",
        status: 'upcoming'
    },
    {
        id: 2,
        title: "Web3 Innovation Hackathon",
        image: "https://i.ibb.co/St3Vwhv/web3.png",
        daysLeft: 0,
        isOnline: true,
        prize: 50000,
        participants: 2500,
        startDate: "Sep 01, 2024",
        endDate: "Sep 15, 2024",
        organizer: "Ethereum Foundation",
        tags: ["Blockchain", "Cryptocurrency", "DeFi"],
        status: 'upcoming'
    },
    {
        id: 3,
        title: "Digital Dharma Hackathon",
        image: "https://i.ibb.co/RNYL3JD/DIGITAL-DHARMA-HACKATHON.png",  // Replace with appropriate image URL
        daysLeft: 5,
        isOnline: true,
        prize: 10000,
        participants: 200,
        startDate: "July 25, 2024",
        endDate: "Sep 05, 2024",
        organizer: "Religious Tech Foundation",
        tags: ["Spirituality", "Tech for Good", "AI"],
        sponsor: "Art of Living",
        status: 'finished'
    },
    {
        id: 4,
        title: "TechMela: Build for Billions",
        image: "https://i.ibb.co/wwMwTxS/DIGITAL-DHARMA-HACKATHON-1.png",  // Replace with appropriate image URL
        daysLeft: 15,
        isOnline: true,
        prize: 80000,
        participants: 4000,
        startDate: "Oct 10, 2024",
        endDate: "Nov 01, 2024",
        organizer: "Digital India",
        tags: ["Scalability", "Consumer Tech", "FinTech"],
        sponsor: "remoteintern.in",
        status: 'upcoming'
    },

    {
        id: 5,
        title: "Desi Dev Con",
        image: "https://i.ibb.co/5MsfZKh/hta0-Ywg-ASJui2-VTNMOXh-QA.webp",  // Replace with appropriate image URL
        daysLeft: 12,
        isOnline: true,
        prize: 10000,
        participants: 90,
        startDate: "Oct 20, 2024",
        endDate: "Nov 30, 2024",
        organizer: "Open-Source Community",
        tags: ["Software Development", "Open Source", "Community"],
        sponsor: "Open-Source",
        status: 'ongoing',
        url: "/hackathons/desidevcon"
    },

    {
        id: 6,
        title: "Incredible India Innovators",
        image: "https://i.ibb.co/RgzVCg1/INCREDIBLE.png",  // Replace with appropriate image URL
        daysLeft: 20,
        isOnline: false,
        prize: 85000,
        participants: 2200,
        startDate: "Oct 25, 2024",
        endDate: "Nov 10, 2024",
        organizer: "Ministry of Tourism",
        tags: ["Tourism", "AR/VR", "Cultural Tech"],
        sponsor: "Incredible India",
        status: 'upcoming'
    }
];

const HackathonCard = ({ hackathon, router }: { hackathon: Hackathon, router: ReturnType<typeof useRouter> }) => (

    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className={`bg-[#1e1d1c] rounded-lg shadow-md overflow-hidden border border-[#383838] ${hackathon.status === 'ongoing' ? 'cursor-pointer' : ''}`}
        onClick={() => {
            if (hackathon.status === 'ongoing') {
                router.push(`${hackathon.url}`);
            }
        }}
    >

        {/* Dotted background */}
        {/* <div className="fixed inset-0 z-0 opacity-20">
            <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
                backgroundSize: '30px 30px'
            }}></div>
        </div> */}


        <div className="relative h-48">
            <Image
                src={hackathon.image}
                alt={hackathon.title}
                layout="fill"
                objectFit="cover"
                className='hover:scale-105 transition-all duration-150'
            />
            <div className={`absolute top-2 left-2 px-2 py-1 rounded-full text-sm font-semibold text-white ${hackathon.status === 'upcoming' ? 'bg-green-500' :
                hackathon.status === 'ongoing' ? 'bg-blue-500' : 'bg-red-500'
                }`}>
                {hackathon.status === 'upcoming' ? `Coming Soon...` :
                    hackathon.status === 'ongoing' ? 'Ongoing' : 'Finished'}
            </div>
            {hackathon.sponsor && (
                <div className="absolute top-2 right-2 bg-purple-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
                    {hackathon.sponsor}
                </div>
            )}
        </div>
        <div className="p-4">
            <h2 className="text-xl font-bold mb-2 text-[#d6d6d6]">{hackathon.title}</h2>
            <div className="flex items-center text-[#afaeae] mb-2">
                <GlobeAltIcon className="h-5 w-5 mr-1" />
                <span>{hackathon.isOnline ? 'Online' : 'In-person'}</span>
            </div>
            <div className="flex justify-between text-sm text-[#afaeae] mb-2">
                <div>₹ {hackathon.prize.toLocaleString()} in prizes</div>
                <div>{hackathon.participants.toLocaleString()} participants</div>
            </div>
            <div className="flex items-center text-sm text-[#afaeae] mb-2">
                <CalendarIcon className="h-5 w-5 mr-1" />
                <span>{hackathon.startDate} - {hackathon.endDate}</span>
            </div>
            <div className="flex items-center text-sm text-[#afaeae] mb-2">
                <UserGroupIcon className="h-5 w-5 mr-1" />
                <span>Managed by {hackathon.organizer}</span>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
                {hackathon.tags.map((tag, index) => (
                    <span key={index} className="bg-[#101010] border border-[#383838] text-[#cccccc] px-2 py-1 rounded-full text-xs">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    </motion.div>
)

export default function HackathonList() {
    const [activeTab, setActiveTab] = useState<'finished' | 'ongoing' | 'upcoming'>('upcoming')

    const filteredHackathons = hackathons.filter(hackathon => hackathon.status === activeTab)
    const router = useRouter();

    return (
        <div className="bg-[#101010] min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <Navbar />
            <div className="max-w-6xl mx-auto mt-5">
                {/* <h1 className="text-4xl font-bold text-center mb-8">Hackathons</h1> */}
                <div className="flex justify-center mb-8 pt-7">
                    <div className="inline-flex rounded-md shadow-sm" role="group">
                        {['Finished', 'Ongoing', 'Upcoming'].map((tab) => (
                            <button
                                key={tab}
                                type="button"
                                onClick={() => setActiveTab(tab.toLowerCase() as 'finished' | 'ongoing' | 'upcoming')}
                                className={`px-4 py-2 text-sm font-medium ${activeTab === tab.toLowerCase()
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-[#1e1d1c] text-[#cccccc] hover:bg-[#494948]'
                                    } ${tab === 'Finished' ? 'rounded-l-lg' :
                                        tab === 'Upcoming' ? 'rounded-r-lg' : ''
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {filteredHackathons.map((hackathon) => (
                            <HackathonCard key={hackathon.id} hackathon={hackathon} router={router} />
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    )
}