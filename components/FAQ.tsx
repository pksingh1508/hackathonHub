"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/24/solid'

const faqs = [
    {
        question: "What is a hackathon?",
        answer: "A hackathon is a collaborative event where programmers, designers, and other tech enthusiasts come together to solve problems and build innovative projects within a limited time frame, usually 24-48 hours."
    },
    {
        question: "Who can participate in your hackathons?",
        answer: "Our hackathons are open to students, professionals, and anyone passionate about technology and problem-solving. We welcome participants of all skill levels, from beginners to experts."
    },
    {
        question: "Do I need to know how to code to participate?",
        answer: "While coding skills are beneficial, they're not always necessary. Hackathons often require diverse skill sets, including design, project management, and domain expertise. Teams usually benefit from a mix of skills."
    },
    {
        question: "How are projects judged?",
        answer: "Projects are typically judged on criteria such as innovation, technical complexity, completeness, and potential impact. Our panel of expert judges evaluates each submission based on these factors."
    },
    {
        question: "What kind of prizes can I win?",
        answer: "Prizes vary for each hackathon but often include cash awards, tech gadgets, internship opportunities, and sometimes even funding to further develop your project."
    },
    {
        question: "How do I form a team?",
        answer: "You can form a team beforehand with friends or colleagues, or join our team formation events at the start of the hackathon. We also provide platforms for participants to connect and form teams based on skills and interests."
    },
    {
        question: "What should I bring to a hackathon?",
        answer: "Bring your laptop, charger, any specific hardware you might need for your project, and lots of enthusiasm! For in-person events, consider bringing toiletries and a change of clothes if it's an overnight event."
    },
    {
        question: "Are your hackathons in-person or virtual?",
        answer: "We offer both in-person and virtual hackathons. The format is specified for each event, allowing participants to choose based on their preferences and circumstances."
    }
]

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="border-b border-gray-200">
            <button
                className="flex justify-between items-center w-full py-5 text-left"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-lg font-semibold text-[#979797]">{question}</span>
                <ChevronDownIcon
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''
                        }`}
                />
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: "auto" },
                            collapsed: { opacity: 0, height: 0 }
                        }}
                        transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                        <div className="pb-5 text-[#979797]">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default function FAQ() {
    return (
        <div className="bg-[#101010] min-h-screen flex items-center justify-center p-4">
            <div className="bg-[#1e1d1c] rounded-xl shadow-2xl max-w-3xl w-full p-8 my-7 border-[#383838] border">
                <h2 className="text-3xl font-bold text-center mb-8 text-[#e6e6e6]">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </div>
    )
}