"use client";


import Navbar from "../components/Navbar";
import LandingPage from "@/components/landingPage";
import Footer from "@/components/Footer";
import RegisterTimeLine from "@/components/RegisterTimeLine";
import ChooseUs from "@/components/ChooseUs";
import Testimonials from "@/components/Testimonial";
import FAQ from "@/components/FAQ";
export default function Home() {
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


