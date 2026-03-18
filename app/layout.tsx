import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import { Navbar } from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ensemble Inc. | Future-Ready Robotics for Business",
  description:
    "We source, compare, and deploy industrial robots for warehouses and logistics. Increase efficiency by 300%.",
  keywords: [
    "Robotics procurement",
    "Warehouse automation",
    "Industrial robots",
    "Logistics AI",
  ],
  openGraph: {
    title: "Automate Your Workforce",
    description: "Get the perfect robot for your business needs.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} antialiased bg-white text-gray-900 selection:bg-red-600 selection:text-white`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}