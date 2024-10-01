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
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const { user } = useUser();
  const { setEmail, setIsRegistered, setIsSubmitted } = useStore();
  const email = user?.primaryEmailAddress?.emailAddress;
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      if (email) {
        setEmail(email);
        try {
          const response = await axios.post(`/api/get-user`, { email: email });
          if (response.status === 200) {
            setIsRegistered(response.data.data.isRegister);
            setIsSubmitted(response.data.data.isSubmit);
          }
        } catch (e) {
          if (e instanceof Error) {
            setError(e.message);
          }
        }
      }
    }

    fetchData();
  }, [email])

  // Put zustand initial set of values.

  return (
    <div>
      <div className="hidden">
        {
          error.length > 0 && <span>{error}</span>
        }
      </div>
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


