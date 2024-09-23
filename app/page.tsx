"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { ThemeProvider } from "../context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode, faTrophy, faUsers } from "@fortawesome/free-solid-svg-icons";
import HeroLogo from "../assets/myHero.jpg"
import LandingPage from "@/components/landingPage";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <ThemeProvider>
      <div>
        <Navbar />
        <LandingPage />
        <main className="min-h-screen  bg-[#070808] text-white dark:bg-gray-900 dark:text-white">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-4 py-16 max-w-6xl"
          >

            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-4xl font-semibold mb-12">Why Choose Us?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <FeatureCard
                  title="Online & Offline Events"
                  description="Participate from anywhere or join us in person!"
                  icon={faLaptopCode}
                />
                <FeatureCard
                  title="Exciting Prizes"
                  description="Win cash prizes and other cool rewards!"
                  icon={faTrophy}
                />
                <FeatureCard
                  title="Networking Opportunities"
                  description="Connect with like-minded developers and industry experts."
                  icon={faUsers}
                />
              </div>
            </motion.section>
          </motion.div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

function FeatureCard({ title, description, icon }: { title: string; description: string; icon: any }) {
  return (
    <div
      className="bg-white bg-opacity-10 p-8 rounded-lg shadow-xl flex flex-col items-center text-center hover:scale-105 transition-all duration-300"
    >
      <FontAwesomeIcon icon={icon} className="text-4xl mb-4 text-[#30c6f1] transform hover:-rotate-12 transition-all duration-300" />
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-lg">{description}</p>
    </div>
  );
}
