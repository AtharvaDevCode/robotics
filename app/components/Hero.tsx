"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Background Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-br from-red-100/50 via-blue-50/30 to-cyan-50/50 blur-[100px] rounded-full -z-10" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-100/40 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-red-100/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-red-50 border border-red-100 text-sm font-medium text-[#C5393A] mb-6">
            Industrial Automation Solutions
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-gray-900">
            Optimize Operations. <br />
            <span className="text-gradient">Deploy Robotics.</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Ensemble Control Inc. analyzes your operational requirements and procures 
            robotics solutions that reduce costs, increase throughput, and improve workplace safety.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <a
              href="#contact"
              className="bg-[#C5393A] text-white font-bold py-4 px-8 rounded-full hover:bg-[#9C2A2B] transition-all flex items-center gap-2 shadow-lg shadow-red-500/25"
            >
              Request Analysis <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#results"
              className="bg-white text-gray-700 border-2 border-gray-200 font-medium py-4 px-8 rounded-full hover:border-[#C5393A] hover:text-[#C5393A] transition-all"
            >
              View Case Studies
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};