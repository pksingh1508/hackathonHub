import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { StarIcon } from "lucide-react"
import { motion } from 'framer-motion'
import Image from 'next/image'
import HeroLogo from "../assets/myHero.jpg";
import { useRouter } from 'next/navigation';

export default function LandingPage() {
    const router = useRouter();
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className="min-h-screen bg-black text-white overflow-hidden">
            {/* Dotted background */}
            <div className="fixed inset-0 z-0 opacity-20">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
                    backgroundSize: '30px 30px'
                }}></div>
            </div>


            <main className="container mx-auto px-4 pt-40 pb-20 text-center relative z-10">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: 'easeOut' }}>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                        Transform Your Ideas with
                        <br />
                        <span>HackathonHub</span>
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-300">
                        Participate in exciting online and offline hackathons!
                        <br />
                        <span>Build, submit, and win amazing prizes.</span>
                    </p>
                    <Button onClick={() => router.push('/hackathons')} size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white transition-all duration-300 transform hover:scale-105">
                        Get Started
                    </Button>

                    <motion.div className="mt-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, ease: 'easeOut' }}>
                        <div className="flex justify-center items-center space-x-1 mb-2">
                            {[...Array(5)].map((_, i) => (
                                <StarIcon key={i} className="w-5 h-5 fill-current text-yellow-400" />
                            ))}
                        </div>
                        <p className="text-sm text-gray-400">Trusted by 2000+ participants</p>
                    </motion.div>
                </motion.div>
            </main>

            <div className="container mx-auto px-4 py-12 relative z-10 max-w-6xl">
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative h-80 md:h-96 mt-8">
                        <Image
                            src={HeroLogo}
                            alt="Hackathon participants"
                            fill
                            style={{ objectFit: "cover" }}
                            className="rounded-lg shadow-2xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}