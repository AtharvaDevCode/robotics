"use client";
import { Bot, Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/">
            <div className="flex items-center gap-2">
              <Bot className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl tracking-wider text-gray-900">
                Ensemble<span className="text-primary"> Inc.</span>
              </span>
            </div>
          </Link>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/about" className="text-gray-600 hover:text-primary transition-colors">About</Link>
              <Link href="/careers" className="text-gray-600 hover:text-primary transition-colors">Careers</Link>
              <Link href="#process" className="text-gray-600 hover:text-primary transition-colors">Process</Link>
              <Link href="#results" className="text-gray-600 hover:text-primary transition-colors">Results</Link>
              <Link href="#contact" className="bg-primary hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full transition-all shadow-lg shadow-red-500/25">
                Get Quote
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-gray-900">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50">About</Link>
            <Link href="/careers" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50">Careers</Link>
            <Link href="#process" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50">Process</Link>
            <Link href="#results" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50">Results</Link>
            <Link href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-primary font-bold">Get Quote</Link>
          </div>
        </div>
      )}
    </nav>
  );
};