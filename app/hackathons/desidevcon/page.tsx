"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { CalendarIcon, GlobeAltIcon, UserGroupIcon, CurrencyRupeeIcon, ClockIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Footer from '@/components/Footer'
import { useUser } from '@clerk/nextjs'
import { useToast } from '@/hooks/use-toast'
import { useRouter } from 'next/navigation'
import { useStore } from '@/store/useStore'

const hackathon = {
    id: 5,
    title: "Desi Dev Con",
    tagline: "Empowering Open-Source Development in the Desi Community",
    image: "https://i.ibb.co/5MsfZKh/hta0-Ywg-ASJui2-VTNMOXh-QA.webp",
    description: "Join the Desi Dev Con, where developers from the South Asian community come together to innovate and contribute to open-source projects. Collaborate with like-minded individuals, showcase your skills, and be part of the growing open-source ecosystem.",
    startDate: "Oct 20, 2024",
    endDate: "Nov 30, 2024",
    isOnline: true,
    prize: 10000,
    participants: 90,
    organizer: "Open-Source Community",
    sponsors: ["Open-Source"],
    tags: ["Software Development", "Open Source", "Community"],
    status: 'ongoing',
    url: "/hackathons/desidevcon",
    timeline: [
        { date: "October 20, 2024", event: "Hackathon Begins" },
        { date: "November 10, 2024", event: "Submission Deadline" },
        { date: "November 12, 2024", event: "Judging Period" },
        { date: "November 28, 2024", event: "Winners Announced" }
    ],
    rules: [
        "Participants must register on the Open-Source Community platform",
        "Individual or team participation is allowed",
        "All code must be open-source and contributed during the hackathon period",
        "Projects should focus on software development and open-source contributions",
        "Participants are encouraged to collaborate and share knowledge"
    ],
    prizes: [
        { place: "1st Place", amount: 5000, description: "Cash prize" },
        { place: "2nd Place", amount: 3000, description: "Cash prize" },
        { place: "3rd Place", amount: 2000, description: "Cash prize" },
        { place: "4th - 10th", amount: 500, description: "T-shirt under Rs.500" },
    ],
    judges: [
        { name: "Arun Gupta", role: "Sen Software Engineer" },
        { name: "Neha Narkhede", role: "Remote Engineer" },
        { name: "Ankush Singh", role: "Frontend Engineer" }
    ],
    whatToBuild: {
        description: "Build an open-source software application that falls into one of the following tracks:",
        tracks: [
            {
                name: "Community Tools",
                description: "Develop tools that enhance collaboration and communication within open-source communities."
            },
            {
                name: "Developer Productivity",
                description: "Create applications or extensions that improve the workflow and efficiency of developers."
            },
            {
                name: "Open Education",
                description: "Design platforms or resources that promote open-source education and skill development."
            },
            {
                name: "Sustainability",
                description: "Build solutions that address environmental or social issues through open-source technology."
            }
        ]
    },
    whatToSubmit: [
        "Provide a URL to your open-source code repository (e.g., GitHub, GitLab).",
        "Include a README file with clear instructions on how to set up and run your project.",
        "Submit a video (maximum 3 minutes) demonstrating your project's functionality.",
        "Identify which track you are submitting to (only one track per project).",
        "Include a detailed description of your project, its goals, and the problem it solves.",
        "Provide documentation on how your project contributes to the open-source community.",
        "Include any necessary dependencies or requirements for your project.",
        "Complete the submission form on the hackathon platform before the deadline."
    ],
    communityEngagement: {
        description: "Participants are encouraged to engage with the open-source community throughout the hackathon:",
        activities: [
            "Create a project thread on the Open-Source Community Forum to document your progress.",
            "Engage with other participants and mentors for feedback and collaboration.",
            "Share your project updates on social media using the hashtag #DesiDevCon2024.",
            "The most engaging and well-documented projects will be eligible for additional community choice awards."
        ]
    }
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

                        <AnimatedSection title="What to Build">
                            <p className="text-gray-700 mt-4">{hackathon.whatToBuild.description}</p>
                            <div className="mt-4 space-y-4">
                                {hackathon.whatToBuild.tracks.map((track, index) => (
                                    <div key={index} className="bg-gray-100 p-4 rounded-lg">
                                        <h3 className="font-semibold text-lg mb-2">{track.name}</h3>
                                        <p className="text-gray-700">{track.description}</p>
                                    </div>
                                ))}
                            </div>
                        </AnimatedSection>

                        <AnimatedSection title="What to Submit">
                            <ul className="list-disc list-inside space-y-2 mt-4">
                                {hackathon.whatToSubmit.map((item, index) => (
                                    <li key={index} className="text-gray-700">{item}</li>
                                ))}
                            </ul>
                        </AnimatedSection>

                        <AnimatedSection title="Community Engagement">
                            <p className="text-gray-700 mt-4">{hackathon.communityEngagement.description}</p>
                            <ul className="list-disc list-inside space-y-2 mt-4">
                                {hackathon.communityEngagement.activities.map((activity, index) => (
                                    <li key={index} className="text-gray-700">{activity}</li>
                                ))}
                            </ul>
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