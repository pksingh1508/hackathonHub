
import { Button } from "@/components/ui/button"
import { StarIcon } from "lucide-react"
import { motion } from 'framer-motion'
import Image from 'next/image'
import HeroLogo from "../assets/myHero.jpg";
import { useRouter } from 'next/navigation';
import { AnimatedTools } from "./AnimatedTools";

export default function LandingPage() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-[#101010] text-white overflow-hidden">
            <main className="container mx-auto px-4 pt-40 pb-20 text-center relative z-10">
                <div className="absolute inset-0 z-0 h-screen" style={{
                    backgroundImage: `radial-gradient(circle, #868585 1px, transparent 1px)`,
                    backgroundSize: '30px 30px'
                }}></div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: 'easeOut' }}>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-[#d6d6d6] to-[#797979]">
                        Transform Your Ideas with
                        <br />
                        <span>HackathonHub</span>
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-[#7f8188]">
                        Participate in exciting online and offline hackathons!
                        <br />
                        <span>Build, submit, and win amazing prizes.</span>
                    </p>


                    <div className="">
                        <AnimatedTools />
                    </div>

                    <motion.div className="mt-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, ease: 'easeOut' }}>
                        <div className="flex justify-center items-center space-x-1 mb-2">
                            {[...Array(5)].map((_, i) => (
                                <StarIcon key={i} className="w-5 h-5 fill-current text-yellow-400" />
                            ))}
                        </div>
                        <p className="text-sm text-gray-400">Trusted by 2000+ participants</p>
                    </motion.div>

                    <Button onClick={() => router.push('/problems')} size="lg" className="bg-[#1e1d1c] border border-[#383838] text-[#d6d6d6] transition-all duration-300 transform hover:scale-105 mt-5">
                        Problems List
                    </Button>
                    <br />
                    <Button onClick={() => router.push('/hackathons')} size="lg" className="bg-[#1e1d1c] border border-[#383838] text-[#d6d6d6] transition-all duration-300 transform hover:scale-105 mt-5">
                        Get Started
                    </Button>

                </motion.div>
            </main>

            <div className="container mx-auto px-4 py-12 relative z-10 max-w-6xl">
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative h-96 md:h-96 mt-8">
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