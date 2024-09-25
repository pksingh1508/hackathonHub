import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode, faTrophy, faUsers } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const ChooseUs = () => {
    return (

        <main className="bg-[#070808] text-white dark:bg-gray-900 dark:text-white my-10">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className=" mx-auto px-4 py-16 max-w-6xl"
            >

                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="text-center"
                >
                    <h2 className="text-4xl font-semibold mb-12">Why Choose Us?</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="bg-white bg-opacity-10 p-8 rounded-lg shadow-xl flex flex-col "
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <FontAwesomeIcon icon={feature.icon} className="text-4xl mb-4 text-purple-400" />
                                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                                <p className="text-gray-300">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>
            </motion.div>
        </main>

    )
}


const features = [
    {
        title: "Online & Offline Events",
        description: "Participate from anywhere or join us in person!",
        icon: faLaptopCode
    },
    {
        title: "Exciting Prizes",
        description: "Win cash prizes and other cool rewards!",
        icon: faTrophy
    },
    {
        title: "Networking Opportunities",
        description: "Connect with like-minded developers and industry experts.",
        icon: faUsers
    }
]

export default ChooseUs;