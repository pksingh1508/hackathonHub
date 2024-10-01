'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Problem = {
    id: number
    title: string
    description: string
    category: string
}

const problems: Problem[] = [
    { id: 1, title: "Decentralized Identity Verification System", description: "Create a blockchain-based system for secure and decentralized identity verification.", category: "Blockchain" },
    { id: 2, title: "Carbon Credit Marketplace", description: "Develop a blockchain platform for trading carbon credits to incentivize sustainable practices.", category: "Blockchain" },
    { id: 3, title: "Smart Contract Escrow for Freelancers", description: "Build a blockchain-based escrow system to facilitate secure payments between freelancers and clients.", category: "Blockchain" },
    { id: 4, title: "AI-Based Mental Health Assistant", description: "Create an AI-powered chatbot that provides mental health support and resources.", category: "AI" },
    { id: 5, title: "AI-Powered Resume Analyzer for Job Seekers", description: "Develop an AI tool that analyzes resumes and provides personalized improvement suggestions.", category: "AI" },
    { id: 6, title: "Predictive Maintenance for Industrial Equipment", description: "Build an AI system that predicts equipment failures in industrial settings to prevent downtime.", category: "AI" },
    { id: 7, title: "Personal Finance Management App with AI Insights", description: "Create a mobile app that uses AI to provide personalized financial advice and insights.", category: "Mobile App" },
    { id: 8, title: "Fitness Tracker with Customizable Workouts", description: "Develop a mobile app that tracks fitness activities and generates customized workout plans.", category: "Mobile App" },
    { id: 9, title: "On-Demand Tutoring App with Video and Live Chat", description: "Build a mobile app that connects students with tutors for on-demand video and chat-based learning sessions.", category: "Mobile App" },
    { id: 10, title: "Collaborative Online Learning Platform", description: "Create a web-based platform for collaborative learning with features like shared whiteboards and group projects.", category: "Website" },
    { id: 11, title: "Community-Driven Sustainability Initiatives Platform", description: "Develop a website that allows communities to propose, fund, and track local sustainability projects.", category: "Website" },
    { id: 12, title: "Virtual Art Gallery for Local Artists", description: "Build an online platform for local artists to showcase and sell their artwork in a virtual gallery setting.", category: "Website" },
    { id: 13, title: "Multiplayer Puzzle-Solving Game with Educational Themes", description: "Create an educational game that challenges players to solve puzzles collaboratively while learning new concepts.", category: "Games" },
    { id: 14, title: "AI-Generated Storytelling Adventure Game", description: "Develop a game that uses AI to generate unique storylines and challenges for each playthrough.", category: "Games" },
    { id: 15, title: "Augmented Reality (AR) Scavenger Hunt Game", description: "Build an AR mobile game that encourages players to explore their surroundings through virtual scavenger hunts.", category: "Games" },
]

const categories = ["All", "Blockchain", "AI", "Mobile App", "Website", "Games"]

export default function Problems() {
    const [selectedCategory, setSelectedCategory] = useState("All")
    const [expandedProblem, setExpandedProblem] = useState<number | null>(null)

    const filteredProblems = selectedCategory === "All"
        ? problems
        : problems.filter(problem => problem.category === selectedCategory)

    return (
        <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-8 text-gray-100">Hackathon Problems</h1>

                <div className="flex flex-wrap justify-center gap-4 mb-8">
                    {categories.map((category) => (
                        <motion.button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-full ${selectedCategory === category
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                                } transition-colors duration-200`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {category}
                        </motion.button>
                    ))}
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {filteredProblems.map((problem) => (
                        <motion.div
                            key={problem.id}
                            layoutId={`problem-${problem.id}`}
                            onClick={() => setExpandedProblem(expandedProblem === problem.id ? null : problem.id)}
                            className="bg-gray-800 rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow duration-200"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <h2 className="text-xl font-semibold mb-2 text-gray-100">{problem.title}</h2>
                            <p className="text-gray-400 mb-4">{problem.category}</p>
                            <AnimatePresence>
                                {expandedProblem === problem.id && (
                                    <motion.p
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="text-gray-300"
                                    >
                                        {problem.description}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}