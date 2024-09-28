"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import axios from "axios"
import { useUser } from "@clerk/nextjs"
import { toast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation"

export default function HackathonRegistration() {
    const [currentStep, setCurrentStep] = useState(1)
    const { user } = useUser();
    const email = user?.primaryEmailAddress?.emailAddress;
    const router = useRouter();

    const handleRegister = async () => {
        const response = await axios.post(`/api/register-user`, {
            email: email,
            status: true
        })
        if (response.status === 200) {
            toast({
                variant: "destructive",
                title: "Registration",
                description: "You are successfully registered"
            })
            router.push('/');
        }
        if (response.status === 500) {
            toast({
                title: "Registration",
                description: "Some issue has occurred"
            })
        }
    }

    const steps = [
        {
            title: "Registration Steps [Follow it Step by Step Otherwise you'll blocked]",
            content: (
                <ol className="list-decimal list-inside space-y-2">
                    <li>Pay the small amount of registration fees and take a screenshot of it.</li>
                    <li>Fill the Google form provided with screenshot.</li>
                    <li>Register in the hackathon.</li>
                </ol>
            ),
        },
        {
            title: "Pay Registration Fee",
            content: (
                <div className="text-center">
                    <Button onClick={() => alert("Redirecting to payment gateway...")}>
                        Pay Registration Fee
                    </Button>
                </div>
            ),
        },
        {
            title: "Fill Google Form",
            content: (
                <div className="text-center">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSe6O1V4vx5uUu2ykkooV2u4KzjzS_OVkPl8D7WtsVMcxkd9-g/viewform?usp=sf_link" target="_blank">
                        <Button>
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
                    <Button onClick={handleRegister}>
                        Register for Hackathon
                    </Button>
                </div>
            ),
        },
    ]

    const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length))
    const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1))

    return (
        <div className="min-h-screen bg-gradient-to-br from-primary to-secondary p-4 flex items-center justify-center">
            <Card className="w-full max-w-3xl">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center">
                        Hackathon Registration
                    </CardTitle>
                    <div className="flex justify-center space-x-2 mt-4">
                        {steps.map((_, index) => (
                            <motion.div
                                key={index}
                                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${index + 1 === currentStep
                                    ? "bg-primary text-primary-foreground"
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
                        >
                            <h2 className="text-xl font-semibold mb-4">{steps[currentStep - 1].title}</h2>
                            {steps[currentStep - 1].content}
                        </motion.div>
                    </AnimatePresence>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button
                        onClick={prevStep}
                        disabled={currentStep === 1}
                        variant="outline"
                    >
                        <ChevronLeft className="mr-2 h-4 w-4" /> Previous
                    </Button>
                    <Button
                        onClick={nextStep}
                        disabled={currentStep === steps.length}
                    >
                        Next <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}