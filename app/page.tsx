"use client";


import Navbar from "../components/Navbar";
import LandingPage from "@/components/landingPage";
import Footer from "@/components/Footer";
import RegisterTimeLine from "@/components/RegisterTimeLine";
import ChooseUs from "@/components/ChooseUs";
import Testimonials from "@/components/Testimonial";
import FAQ from "@/components/FAQ";
import { useUser } from "@clerk/nextjs";
import { useStore } from "@/store/useStore";
import { useEffect } from "react";
import axios from "axios";

export default function Home() {
  const { user } = useUser();
  const { setEmail, setIsRegistered, setIsSubmitted } = useStore();
  const email = user?.primaryEmailAddress?.emailAddress;

  useEffect(() => {
    const fetchData = async () => {
      if (email) {
        setEmail(email);
        const response = await axios.post(`/api/get-user`, { email: email });
        if (response.status === 200) {
          setIsRegistered(response.data.data.isRegister);
          setIsSubmitted(response.data.data.isSubmit);
        }
      }
    }

    fetchData();
  }, [email])

  // Put zustand initial set of values.

  return (
    <div>
      <Navbar />
      <LandingPage />
      <RegisterTimeLine />
      <ChooseUs />
      <FAQ />
      <Testimonials />
      <Footer />
    </div>
  );
}


