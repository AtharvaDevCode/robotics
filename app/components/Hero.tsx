"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-125 bg-primary/20 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-slate-800 border border-slate-700 text-sm text-primary mb-6">
            Next-Gen Industrial Automation
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
            Stop Working Hard. <br />
            Start <span className="text-gradient">Deploying Robots.</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-400">
            We analyze your warehouse, shipping depot, or storage facility and
            procure the perfect robotics solution to eliminate human fatigue and
            maximize profit.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <a
              href="#contact"
              className="bg-primary text-slate-900 font-bold py-4 px-8 rounded-lg hover:bg-cyan-400 transition-all flex items-center gap-2 shadow-lg shadow-cyan-500/20"
            >
              Analyze My Business <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#results"
              className="glass-panel text-white font-medium py-4 px-8 rounded-lg hover:bg-slate-800 transition-all"
            >
              View Case Studies
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
