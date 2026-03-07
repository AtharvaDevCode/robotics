"use client";
import { Bot, Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 glass-panel border-b-0 border-b-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/">
            <div className="flex items-center gap-2">
              <Bot className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl tracking-wider">
                Ensemble<span className="text-primary"> Inc.</span>
              </span>
            </div>
          </Link>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/about"
                className="hover:text-primary transition-colors"
              >
                About
              </Link>
              <Link
                href="/careers"
                className="hover:text-primary transition-colors"
              >
                Careers
              </Link>
              <Link
                href="#process"
                className="hover:text-primary transition-colors"
              >
                Process
              </Link>
              <Link
                href="#results"
                className="hover:text-primary transition-colors"
              >
                Results
              </Link>
              <Link
                href="#contact"
                className="bg-primary hover:bg-cyan-400 text-slate-900 font-bold py-2 px-6 rounded-full transition-all shadow-[0_0_20px_rgba(6,182,212,0.5)]"
              >
                Get Quote
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/about"
              className="hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="/careers"
              className="hover:text-primary transition-colors"
            >
              Careers
            </Link>
            <Link
              href="#process"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-800"
            >
              Process
            </Link>
            <Link
              href="#results"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-800"
            >
              Results
            </Link>
            <Link
              href="#contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-primary"
            >
              Get Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
