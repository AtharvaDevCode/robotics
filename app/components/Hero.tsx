"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Background Gradient - Red to Blue */}
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
          <span className="inline-block py-1.5 px-4 rounded-full bg-red-50 border border-red-100 text-sm font-medium text-primary mb-6">
            Next-Gen Industrial Automation
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-gray-900">
            Stop Working Hard. <br />
            Start <span className="text-gradient">Deploying Robots.</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            We analyze your warehouse, shipping depot, or storage facility and
            procure the perfect robotics solution to eliminate human fatigue and
            maximize profit.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <a
              href="#contact"
              className="bg-primary text-white font-bold py-4 px-8 rounded-full hover:bg-red-700 transition-all flex items-center gap-2 shadow-lg shadow-red-500/25"
            >
              Analyze My Business <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#results"
              className="bg-white text-gray-700 border-2 border-gray-200 font-medium py-4 px-8 rounded-full hover:border-cyan-500 hover:text-cyan-600 transition-all"
            >
              View Case Studies
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};