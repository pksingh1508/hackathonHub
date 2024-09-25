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
        title: "HackAI - Dell and NVIDIA Challenge",
        image: "https://i.ibb.co/JWYmMb4/green-Tech.png",
        daysLeft: 8,
        isOnline: true,
        prize: 70176,
        participants: 3830,
        startDate: "Aug 14, 2024",
        endDate: "Oct 02, 2024",
        organizer: "Devpost",
        tags: ["Machine Learning/AI", "Enterprise", "Productivity"],
        sponsor: "Dell",
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
        status: 'ongoing',
        url: "/hackathons/web3"
    },
    {
        id: 3,
        title: "Green Tech Challenge",
        image: "https://i.ibb.co/JWYmMb4/green-Tech.png",
        daysLeft: -5,
        isOnline: false,
        prize: 100000,
        participants: 1000,
        startDate: "Aug 10, 2024",
        endDate: "Aug 12, 2024",
        organizer: "CleanTech Initiative",
        tags: ["Sustainability", "IoT", "Energy"],
        sponsor: "Tesla",
        status: 'finished'
    }
]

const HackathonCard = ({ hackathon, router }: { hackathon: Hackathon, router: ReturnType<typeof useRouter> }) => (

    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className={`bg-white rounded-lg shadow-md overflow-hidden ${hackathon.status === 'ongoing' ? 'cursor-pointer' : ''}`}
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
            />
            <div className={`absolute top-2 left-2 px-2 py-1 rounded-full text-sm font-semibold text-white ${hackathon.status === 'upcoming' ? 'bg-green-500' :
                hackathon.status === 'ongoing' ? 'bg-blue-500' : 'bg-red-500'
                }`}>
                {hackathon.status === 'upcoming' ? `${hackathon.daysLeft} days left` :
                    hackathon.status === 'ongoing' ? 'Ongoing' : 'Finished'}
            </div>
            {hackathon.sponsor && (
                <div className="absolute top-2 right-2 bg-purple-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
                    {hackathon.sponsor}
                </div>
            )}
        </div>
        <div className="p-4">
            <h2 className="text-xl font-bold mb-2 text-black/80">{hackathon.title}</h2>
            <div className="flex items-center text-gray-600 mb-2">
                <GlobeAltIcon className="h-5 w-5 mr-1" />
                <span>{hackathon.isOnline ? 'Online' : 'In-person'}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600 mb-2">
                <div>${hackathon.prize.toLocaleString()} in prizes</div>
                <div>{hackathon.participants.toLocaleString()} participants</div>
            </div>
            <div className="flex items-center text-sm text-gray-600 mb-2">
                <CalendarIcon className="h-5 w-5 mr-1" />
                <span>{hackathon.startDate} - {hackathon.endDate}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600 mb-2">
                <UserGroupIcon className="h-5 w-5 mr-1" />
                <span>Managed by {hackathon.organizer}</span>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
                {hackathon.tags.map((tag, index) => (
                    <span key={index} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs">
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
        <div className="bg-black/80 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
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
                                    : 'bg-white text-gray-700 hover:bg-gray-50'
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