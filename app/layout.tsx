import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider, GoogleOneTap } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from '@vercel/analytics/react'

import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: "HackathonWallah - Global Hackathons for Innovators & Coders",
    template: "%s - HackathonWallah"
  },
  description: "Join HackathonWallah, the ultimate platform connecting coders, developers, and innovators with hackathons worldwide. Compete, learn, and grow your skills.",
  twitter: {
    card: "summary_large_image",
    title: "HackathonWallah - Global Hackathons for Innovators",
    description: "Discover and participate in hackathons worldwide with HackathonWallah. A one-stop platform for coders and developers looking to showcase their skills."
  },
  keywords: ["hackathons", "coding competitions", "developer events", "hackathon platform", "global hackathons", "programming challenges"],
  openGraph: {
    title: "HackathonWallah - Hackathons for Coders & Developers",
    description: "Participate in global hackathons with HackathonWallah, where developers, coders, and tech enthusiasts connect and compete."
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="./favicon.ico" />
        </head>
        <GoogleOneTap />
        <body
          className={`${roboto.className} antialiased`}
        >
          {children}
          <Toaster />
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  );
}
