import React from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faLightbulb, faCode, faUpload, faTrophy } from '@fortawesome/free-solid-svg-icons'

const timelineSteps = [
    {
        icon: faUserPlus,
        title: "Register",
        description: "Sign up for the hackathon and create your profile."
    },
    {
        icon: faLightbulb,
        title: "Choose a Problem",
        description: "Browse through available challenges and select one that inspires you."
    },
    {
        icon: faCode,
        title: "Code and Innovate",
        description: "Work on your solution, leveraging your skills and creativity."
    },
    {
        icon: faUpload,
        title: "Submit Your Project",
        description: "Upload your code and presentation before the deadline."
    },
    {
        icon: faTrophy,
        title: "Win Prizes",
        description: "Get recognized for your hard work and innovative solutions."
    }
]

const RegisterTimeLine = () => {
    return (
        <div className="bg-gray-900 py-16">
            <div className="container mx-auto px-4 max-w-6xl">
                <h2 className="text-4xl font-bold text-center mb-12 text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                    How It Works
                </h2>
                <div className="relative bg-white bg-opacity-10 p-8 rounded-lg shadow-xl">
                    {timelineSteps.map((step, index) => (
                        <motion.div
                            key={index}
                            className={`mb-16 flex ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: false, amount: 0.8 }}
                        >
                            <div className={`flex items-start w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                                <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center mr-4 mt-1`}>
                                    <FontAwesomeIcon icon={step.icon} className="text-white text-xl" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-semibold mb-3 text-blue-400">{step.title}</h3>
                                    <p className={`text-gray-300 leading-relaxed ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>{step.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                    <div className="absolute left-1/2 top-0 h-full w-0.5 bg-purple-500 hidden md:block" style={{ transform: 'translateX(-50%)' }}></div>
                </div>
            </div>
        </div>
    )
}

export default RegisterTimeLine