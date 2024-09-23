"use client"

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import logo from "../assets/hhlogo.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs"; // Add this import
import { useEffect, useState } from "react";

export default function Navbar() {
    const router = useRouter();
    const { isLoaded, isSignedIn } = useUser();

    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    if (!isLoaded) {
        return null; // or a loading spinner, or some placeholder
    }

    return (
        <motion.nav
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 shadow-md py-4 px-6 md:px-12 flex justify-between items-center max-w-6xl mx-auto ${isScrolled ? 'bg-black/80 backdrop-blur-sm' : ''}`}
        >
            <div className="flex items-center gap-2">
                <div className="bg-white rounded-full flex items-center justify-center">
                    <Image src={logo} alt="Logo" className="h-10 w-10 m-auto p-1" />
                </div>
                <span className="text-xl font-bold text-[#e6eaeb]">HackathonHub</span>
            </div>
            <div className="flex items-center space-x-4">
                <Button className="text-white font-normal text-[18px]" variant="link" onClick={() => router.push('/')}>Home</Button>
                <Button className="text-white font-normal text-[18px]" variant="link" onClick={() => router.push('/about')}>About</Button>
                <Button className="text-white font-normal text-[18px]" variant="link" onClick={() => router.push('/hackathons')}>Hackathons</Button>
            </div>
            <div className="flex items-center space-x-4">
                {
                    isSignedIn ? (<UserButton />) : (<div className="flex items-center space-x-4">
                        <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white transition-all duration-300 transform hover:scale-105" onClick={() => router.push('/sign-in')}>
                            Sign In
                        </Button>
                        <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white transition-all duration-300 transform hover:scale-105" onClick={() => router.push('/sign-up')}>Sign Up</Button>
                    </div>)
                }
            </div>
        </motion.nav>
    );
}
