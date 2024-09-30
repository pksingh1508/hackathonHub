"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CalendarIcon, GlobeAltIcon, UserGroupIcon, CurrencyRupeeIcon, ClockIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Footer from '@/components/Footer'
import { useUser } from '@clerk/nextjs'
import { useToast } from '@/hooks/use-toast'
import { useRouter } from 'next/navigation'
import { useStore } from '@/store/useStore'

const hackathon = {
    title: "Web3 Innovation Hackathon",
    tagline: "Pushing the Boundaries of Decentralized Technology",
    image: "https://i.ibb.co/St3Vwhv/web3.png",
    description: "Join the Ethereum Foundation's Web3 Innovation Hackathon, where developers and blockchain enthusiasts come together to build the future of decentralized technology. Compete for a chance to win amazing prizes while creating innovative blockchain, DeFi, and cryptocurrency solutions.",
    startDate: "Sep 01, 2024",
    endDate: "Sep 15, 2024",
    isOnline: true,
    prize: 50000,
    participants: 2500,
    organizer: "Ethereum Foundation",
    sponsors: ["Ethereum Foundation", "Chainlink", "Consensys"],
    timeline: [
        { date: "September 1, 2024", event: "Hackathon Begins" },
        { date: "September 14, 2024", event: "Submission Deadline" },
        { date: "September 15, 2024", event: "Judging Period" },
        { date: "September 15, 2024", event: "Winners Announced" }
    ],
    rules: [
        "Participants must register on the Ethereum Foundation platform",
        "Teams can consist of 1-5 members",
        "All code must be written during the hackathon period",
        "Open-source tools and libraries are allowed and encouraged",
        "Projects must focus on blockchain, DeFi, or cryptocurrency solutions"
    ],
    prizes: [
        { place: "1st Place", amount: 25000, description: "Cash prize + VIP Ethereum Conference Tickets" },
        { place: "2nd Place", amount: 15000, description: "Cash prize + Chainlink Credits" },
        { place: "3rd Place", amount: 10000, description: "Cash prize + Consensys Software Subscriptions" }
    ],
    judges: [
        { name: "Vitalik Buterin", role: "Co-Founder of Ethereum" },
        { name: "Sergey Nazarov", role: "Co-Founder of Chainlink" },
        { name: "Joseph Lubin", role: "CEO of Consensys" }
    ]
};


const AnimatedSection = ({ title, children }: { title: string, children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(true)

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-md p-6 mb-8"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex justify-between items-center w-full text-left"
            >
                <h2 className="text-2xl font-bold">{title}</h2>
                <ChevronDownIcon
                    className={`h-6 w-6 text-blue-500 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''
                        }`}
                />
            </button>
            <motion.div
                initial={false}
                animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
            >
                {children}
            </motion.div>
        </motion.div>
    )
}

export default function HackathonPage() {
    const { isSignedIn } = useUser();
    const { isRegistered, isSubmitted } = useStore();
    const { toast } = useToast();
    const router = useRouter();

    const handleRegister = () => {
        if (!isSignedIn) {
            toast({
                variant: 'destructive',
                title: "Unauthorized",
                description: "You are not Signed In"
            })
            router.push("/sign-in");

        } else {
            router.push("/register");
        }
    }

    return (
        <div className="bg-gradient-to-br from-black/50 to-black/80 min-h-screen text-black/80">
            <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-5xl font-bold mb-4"
                    >
                        {hackathon.title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-2xl"
                    >
                        {hackathon.tagline}
                    </motion.p>
                </div>
            </header>

            <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Image
                                src={hackathon.image}
                                alt={hackathon.title}
                                width={1200}
                                height={400}
                                className="rounded-lg shadow-md mb-8 object-cover"
                            />
                        </motion.div>

                        <AnimatedSection title="About the Hackathon">
                            <p className="text-gray-700 mt-4">{hackathon.description}</p>
                        </AnimatedSection>

                        <AnimatedSection title="Timeline">
                            <ul className="space-y-4 mt-4">
                                {hackathon.timeline.map((item, index) => (
                                    <li key={index} className="flex items-center">
                                        <ClockIcon className="h-6 w-6 text-blue-500 mr-2" />
                                        <span className="font-semibold mr-2">{item.date}:</span>
                                        <span>{item.event}</span>
                                    </li>
                                ))}
                            </ul>
                        </AnimatedSection>

                        <AnimatedSection title="Rules">
                            <ul className="list-disc list-inside space-y-2 mt-4">
                                {hackathon.rules.map((rule, index) => (
                                    <li key={index} className="text-gray-700">{rule}</li>
                                ))}
                            </ul>
                        </AnimatedSection>

                        <AnimatedSection title="Prizes">
                            <div className="space-y-4 mt-4">
                                {hackathon.prizes.map((prize, index) => (
                                    <div key={index} className="flex items-center bg-gradient-to-r from-yellow-100 to-yellow-200 p-4 rounded-lg">
                                        <CurrencyRupeeIcon className="h-8 w-8 text-yellow-500 mr-4" />
                                        <div>
                                            <h3 className="font-semibold text-lg">{prize.place}</h3>
                                            <p className="text-gray-700">₹ {prize.amount.toLocaleString()} - {prize.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </AnimatedSection>

                        <AnimatedSection title="Judges">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                {hackathon.judges.map((judge, index) => (
                                    <div key={index} className="flex items-center bg-gray-100 p-4 rounded-lg">
                                        <UserGroupIcon className="h-8 w-8 text-blue-500 mr-4" />
                                        <div>
                                            <h3 className="font-semibold">{judge.name}</h3>
                                            <p className="text-gray-600">{judge.role}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </AnimatedSection>
                    </div>

                    <div className="lg:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="bg-white rounded-lg shadow-md p-6 mb-8 sticky top-8"
                        >
                            <h2 className="text-2xl font-bold mb-6 text-center">Hackathon Details</h2>
                            <ul className="space-y-6">
                                <li className="flex items-center">
                                    <CalendarIcon className="h-8 w-8 text-blue-500 mr-4" />
                                    <span className="text-lg">{hackathon.startDate} - {hackathon.endDate}</span>
                                </li>
                                <li className="flex items-center">
                                    <GlobeAltIcon className="h-8 w-8 text-blue-500 mr-4" />
                                    <span className="text-lg">{hackathon.isOnline ? 'Online Event' : 'In-person Event'}</span>
                                </li>
                                <li className="flex items-center">
                                    <CurrencyRupeeIcon className="h-8 w-8 text-blue-500 mr-4" />
                                    <span className="text-lg">₹ {hackathon.prize.toLocaleString()} in total prizes</span>
                                </li>
                                <li className="flex items-center">
                                    <UserGroupIcon className="h-8 w-8 text-blue-500 mr-4" />
                                    <span className="text-lg">{hackathon.participants.toLocaleString()} participants</span>
                                </li>
                            </ul>
                            <div className="mt-8">
                                <h3 className="font-semibold mb-2 text-center">Organized by</h3>
                                <p className="text-center text-lg">{hackathon.organizer}</p>
                            </div>
                            <div className="mt-8">
                                <h3 className="font-semibold mb-4 text-center">Sponsored by</h3>
                                <div className="flex flex-wrap justify-center gap-4">
                                    {hackathon.sponsors.map((sponsor, index) => (
                                        <span key={index} className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-lg font-semibold">
                                            {sponsor}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            {
                                isRegistered ?
                                    (<>
                                        {
                                            isSubmitted ?
                                                (<>
                                                    <motion.button
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                        className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 px-6 rounded-lg mt-8 text-lg shadow-lg hover:from-blue-600 hover:to-purple-600 transition duration-300 cursor-pointer"
                                                    >
                                                        Wait for Result
                                                    </motion.button>
                                                </>) :
                                                (<a href='https://docs.google.com/forms/d/e/1FAIpQLSekGGFAgMurY9BXV8asEAhXxcBTCwa53npWGw34fgxVwSep_w/viewform?usp=sf_link' target='_blank'>
                                                    <motion.button
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                        className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 px-6 rounded-lg mt-8 text-lg shadow-lg hover:from-blue-600 hover:to-purple-600 transition duration-300 cursor-pointer"
                                                    >
                                                        Submit Code
                                                    </motion.button>
                                                </a>)
                                        }
                                    </>) :
                                    (<>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 px-6 rounded-lg mt-8 text-lg shadow-lg hover:from-blue-600 hover:to-purple-600 transition duration-300"
                                            onClick={handleRegister}
                                        >
                                            Register Now
                                        </motion.button>
                                    </>)
                            }
                        </motion.div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}