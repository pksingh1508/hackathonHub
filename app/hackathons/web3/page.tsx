"use client"

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { CalendarIcon, GlobeAltIcon, UserGroupIcon, CurrencyDollarIcon, ClockIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Footer from '@/components/Footer'
import { useUser } from '@clerk/nextjs'
import { useToast } from '@/hooks/use-toast'
import { useRouter } from 'next/navigation'
import axios from 'axios'

const hackathon = {
    title: "HackAI - Dell and NVIDIA Challenge",
    tagline: "Develop AI solutions to real-world problems",
    image: "https://i.ibb.co/St3Vwhv/web3.png",
    description: "Join us for an exciting AI hackathon sponsored by Dell and NVIDIA. Develop innovative AI solutions to tackle real-world challenges and compete for amazing prizes!",
    startDate: "Aug 14, 2024",
    endDate: "Oct 02, 2024",
    isOnline: true,
    prize: 70176,
    participants: 3830,
    organizer: "Devpost",
    sponsors: ["Dell", "NVIDIA"],
    timeline: [
        { date: "August 14, 2024", event: "Hackathon Begins" },
        { date: "September 15, 2024", event: "Submission Deadline" },
        { date: "September 20-30, 2024", event: "Judging Period" },
        { date: "October 2, 2024", event: "Winners Announced" }
    ],
    rules: [
        "All team members should be registered on Devpost",
        "Teams can consist of 1-4 members",
        "All code must be written during the hackathon",
        "Use of open-source libraries is allowed and encouraged"
    ],
    prizes: [
        { place: "1st Place", amount: 30000, description: "Cash prize + NVIDIA GPUs" },
        { place: "2nd Place", amount: 20000, description: "Cash prize + Dell Laptops" },
        { place: "3rd Place", amount: 10000, description: "Cash prize + AI Software Licenses" }
    ],
    judges: [
        { name: "Dr. Jane Smith", role: "AI Research Lead at Dell" },
        { name: "John Doe", role: "Senior Data Scientist at NVIDIA" },
        { name: "Alice Johnson", role: "Professor of Computer Science, MIT" }
    ]
}

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
    const { isSignedIn, user } = useUser();
    const [isRegistered, setIsRegistered] = useState(false);
    const { toast } = useToast();
    const router = useRouter();
    const email = user?.primaryEmailAddress?.emailAddress;

    const handleRegister = () => {
        if (!isSignedIn) {
            toast({
                variant: 'destructive',
                title: "Unauthorized",
                description: "You are not Signed In"
            })

        } else {
            router.push("/register");
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post(`/api/get-user`, {
                    params: { email: email }
                });
                console.log("response", response);
                if (response.status === 200) {
                    setIsRegistered(true);
                }
            } catch (err) {
                console.log("error", err);
            }
        }
        fetchData();
    }, [])

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
                                        <CurrencyDollarIcon className="h-8 w-8 text-yellow-500 mr-4" />
                                        <div>
                                            <h3 className="font-semibold text-lg">{prize.place}</h3>
                                            <p className="text-gray-700">${prize.amount.toLocaleString()} - {prize.description}</p>
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
                                    <CurrencyDollarIcon className="h-8 w-8 text-blue-500 mr-4" />
                                    <span className="text-lg">${hackathon.prize.toLocaleString()} in total prizes</span>
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
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 px-6 rounded-lg mt-8 text-lg shadow-lg hover:from-blue-600 hover:to-purple-600 transition duration-300 cursor-none"
                                        >
                                            Registered
                                        </motion.button>
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