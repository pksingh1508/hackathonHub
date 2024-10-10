"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import axios from "axios"
import { toast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation"
import { useStore } from "@/store/useStore"

export default function HackathonRegistration() {
    const [currentStep, setCurrentStep] = useState(1)
    const { email, isRegistered } = useStore();
    const router = useRouter();

    const handleRegister = async () => {
        const response = await axios.post(`/api/update-user`, {
            email: email,
            isRegister: true,
            isSubmit: false
        })
        if (response.status === 200) {
            toast({
                variant: "destructive",
                title: "Registration Success 👋",
                description: "You are successfully registered"
            })
            router.push('/');
        }
        if (response.status === 500) {
            toast({
                variant: "destructive",
                title: "Registration failed",
                description: "Some issue has occurred"
            })
        }
    }

    const steps = [
        {
            title: "Registration Steps",
            content: (
                <ol className="list-decimal list-inside space-y-2">
                    <li>Pay the small 50 rupees amount of registration fees and take a screenshot of it.</li>
                    <li>Fill the Google form provided with screenshot.</li>
                    <li>Confirm Registration in the hackathon.</li>
                </ol>
            ),
        },
        {
            title: "Pay Registration Fee - [Rs 50]",
            content: (
                <div className="text-center">
                    <a href="https://razorpay.me/@edupvtltd?amount=bMZtQmLjQWplBAmd%2FyQdEA%3D%3D" target="_blank">
                        <Button className="border border-[#383838] text-[#d6d6d6]">
                            Pay Registration Fee
                        </Button>
                    </a>
                </div>
            ),
        },
        {
            title: "Fill Google Form",
            content: (
                <div className="text-center">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSe6O1V4vx5uUu2ykkooV2u4KzjzS_OVkPl8D7WtsVMcxkd9-g/viewform?usp=sf_link" target="_blank">
                        <Button className="border border-[#383838] text-[#d6d6d6]">
                            Fill the Form
                        </Button>
                    </a>
                </div>
            ),
        },
        {
            title: "Complete Registration",
            content: (
                <div className="text-center">
                    <Button onClick={handleRegister} className="border border-[#383838] text-[#d6d6d6]">
                        Confirm Registration
                    </Button>
                </div>
            ),
        },
    ]

    const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length))
    const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1))

    if (isRegistered) {
        return (
            <div className="w-full h-full">
                <div className="flex items-center justify-center mt-10 text-gray-200 font-semibold">
                    <p>You are Registered in the Hackathons 👍</p>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-[#101010] p-4 flex items-center justify-center">
            <Card className="w-full max-w-3xl">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center text-[#d6d6d6]">
                        Hackathon Registration
                    </CardTitle>
                    <div className="flex justify-center space-x-2 mt-4">
                        {steps.map((_, index) => (
                            <motion.div
                                key={index}
                                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${index + 1 === currentStep
                                    ? "bg-orange-600 text-primary-foreground"
                                    : "bg-muted text-muted-foreground"
                                    }`}
                                animate={{
                                    scale: index + 1 === currentStep ? 1.2 : 1,
                                }}
                            >
                                {index + 1}
                            </motion.div>
                        ))}
                    </div>
                </CardHeader>
                <CardContent className="p-6">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentStep}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="text-[#afaeae]"
                        >
                            <h2 className="text-xl font-normal mb-4 text-[#d6d6d6]">{steps[currentStep - 1].title}</h2>
                            {steps[currentStep - 1].content}
                        </motion.div>
                    </AnimatePresence>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button
                        onClick={prevStep}
                        disabled={currentStep === 1}
                        className={`border border-[#383838] text-[#d6d6d6]`}
                    >
                        <ChevronLeft className="mr-2 h-4 w-4" /> Previous
                    </Button>
                    <Button
                        onClick={nextStep}
                        disabled={currentStep === steps.length}
                        className="border border-[#383838] text-[#d6d6d6]"
                    >
                        Next <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}