import React from 'react'
import Link from 'next/link'
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="bg-[#1e1d1c] text-white py-12 border-[#383838] border-t">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text inline-block">
                            HackathonHub
                        </h2>
                        <p className={`text-[#7f8188] mb-4`}>
                            Connecting innovators and empowering hackathons worldwide.
                        </p>
                    </div>

                    <div className="mx-auto">
                        <h3 className="text-xl font-semibold mb-4 text-[#cccccc]">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/">
                                    <span className="text-[#7f8188] text-[20px] font-normal hover:text-[#fefffe] transition-colors duration-300 cursor-pointer">Home</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/about">
                                    <span className="text-[#7f8188] text-[20px] font-normal hover:text-[#fefffe] transition-colors duration-300 cursor-pointer">About Us</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/hackathons">
                                    <span className="text-[#7f8188] text-[20px] font-normal hover:text-[#fefffe] transition-colors duration-300 cursor-pointer">Hackathons</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="text-center">
                        <h3 className="text-xl font-semibold mb-4 text-[#cccccc]">Connect With Us</h3>
                        <div className="flex justify-center space-x-6">
                            <a href="https://github.com/hackathonhub" target="_blank" rel="noopener noreferrer"
                                className="text-[#7f8188] hover:text-blue-400 transition-colors duration-300 transform hover:scale-110">
                                <FaGithub size={28} />
                            </a>
                            <a href="https://twitter.com/hackathonhub" target="_blank" rel="noopener noreferrer"
                                className="text-[#7f8188] hover:text-blue-400 transition-colors duration-300 transform hover:scale-110">
                                <FaTwitter size={28} />
                            </a>
                            <a href="https://linkedin.com/company/hackathonhub" target="_blank" rel="noopener noreferrer"
                                className="text-[#7f8188] hover:text-blue-400 transition-colors duration-300 transform hover:scale-110">
                                <FaLinkedin size={28} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} HackathonHub. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer