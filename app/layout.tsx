import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Chatbot } from "./components/Chatbot";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ensemble Control Inc. | Industrial Robotics Procurement",
  description:
    "Ensemble Control Inc. sources, compares, and deploys industrial robotics solutions for warehouses, logistics, and manufacturing operations.",
};

// Add proper viewport for mobile
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#C5393A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} antialiased bg-white text-gray-900 selection:bg-[#C5393A] selection:text-white`}
      >
        <Navbar />
        {children}
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}