import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Chatbot } from "./components/Chatbot"; // Add this

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ensemble Control Inc. | Industrial Robotics Procurement",
  description:
    "Ensemble Control Inc. sources, compares, and deploys industrial robotics solutions for warehouses, logistics, and manufacturing operations.",
  keywords: [
    "Robotics procurement",
    "Warehouse automation",
    "Industrial robots",
    "Logistics automation",
    "Manufacturing robotics",
  ],
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
        <Chatbot /> {/* Add this line */}
      </body>
    </html>
  );
}