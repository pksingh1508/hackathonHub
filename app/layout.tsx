import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider, GoogleOneTap } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react"

import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "HackathonHub",
  description: "HackathonHub is a platform for hackathons all over the world",
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
