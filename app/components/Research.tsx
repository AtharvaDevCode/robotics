"use client";

import { ExternalLink, BookOpen, GraduationCap, Mic2, Users, Play, Linkedin } from "lucide-react";

interface Lecture {
  id: string;
  title: string;
  venue: string;
  linkedinUrl: string;
  embedUrl: string;
  type: "conference" | "industry" | "teaching";
  date: string;
}

const LECTURES: Lecture[] = [
  {
    id: "1",
    title: "Reinforcement Learning for General MDPs",
    venue: "TDAI AI Summit, Ohio State University",
    linkedinUrl: "https://www.linkedin.com/posts/abhishek-gupta-osu_reinforcementlearning-machinelearning-deeplearning-activity-7435715279759966208",
    embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7435715279759966208?collapsed=1",
    type: "conference",
    date: "Recent"
  },
  {
    id: "2",
    title: "Perturbation Theory for High-Dimensional Control",
    venue: "General Motors R&D",
    linkedinUrl: "https://www.linkedin.com/posts/abhishek-gupta-osu_generalmotors-research-activity-7428206647354961920",
    embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7428206647354961920?collapsed=1",
    type: "industry",
    date: "Recent"
  },
  {
    id: "3",
    title: "Reinforcement Learning Course",
    venue: "Ohio State University",
    linkedinUrl: "https://www.linkedin.com/posts/abhishek-gupta-osu_reinforcementlearning-teaching-osu-activity-7405362243837579264",
    embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7405362243837579264?collapsed=1",
    type: "teaching",
    date: "Recent"
  },
  {
    id: "4",
    title: "Generalized Policy Gradient Theorems",
    venue: "Allerton Conference 2025, UIUC",
    linkedinUrl: "https://www.linkedin.com/posts/abhishek-gupta-osu_allerton2025-reinforcementlearning-activity-7375177246791098368",
    embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7375177246791098368?collapsed=1",
    type: "conference",
    date: "2025"
  }
];

const TYPE_ICONS = {
  conference: <Mic2 className="w-3 h-3" />,
  industry: <Users className="w-3 h-3" />,
  teaching: <Play className="w-3 h-3" />
};

const TYPE_LABELS = {
  conference: "Conference",
  industry: "Industry",
  teaching: "Teaching"
};

const TYPE_COLORS = {
  conference: "bg-purple-50 text-purple-700",
  industry: "bg-blue-50 text-blue-700",
  teaching: "bg-green-50 text-green-700"
};

export const Research = () => {
  return (
    <section id="research" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-full mb-4 shadow-sm">
              <GraduationCap className="w-4 h-4 text-[#C5393A]" />
              <span className="text-sm font-medium text-gray-700">Research & Thought Leadership</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              From Lab to <span className="text-gradient">Industry Application</span>
            </h2>
            <p className="text-lg text-gray-600">
              Dr. Abhishek Gupta bridges cutting-edge academic research with real-world industrial solutions.
            </p>
          </div>
          
          <a 
            href="https://www.linkedin.com/in/abhishek-gupta-profile/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0A66C2] text-white rounded-lg hover:bg-[#0958a8] transition-colors font-medium shrink-0 text-sm"
          >
            <Linkedin className="w-4 h-4" />
            Follow on LinkedIn
          </a>
        </div>

        {/* Credentials */}
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {[
            { icon: <BookOpen className="w-4 h-4" />, title: "Associate Professor", sub: "ECE, Ohio State University", color: "bg-red-50 text-[#C5393A]" },
            { icon: <Users className="w-4 h-4" />, title: "Co-Director", sub: "IITB-OSU Frontier Center", color: "bg-blue-50 text-[#3947C4]" },
            { icon: <GraduationCap className="w-4 h-4" />, title: "Founder", sub: "Ensemble Control Inc.", color: "bg-green-50 text-green-600" }
          ].map((cred, idx) => (
            <div key={idx} className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
              <div className={`p-2 rounded-lg ${cred.color}`}>
                {cred.icon}
              </div>
              <div>
                <div className="font-medium text-gray-900 text-sm">{cred.title}</div>
                <div className="text-xs text-gray-500">{cred.sub}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Lectures Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {LECTURES.map((lecture) => (
            <div 
              key={lecture.id}
              className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-all flex flex-col"
            >
              {/* Card Header */}
              <div className="p-4 border-b border-gray-100">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium ${TYPE_COLORS[lecture.type]}`}>
                    {TYPE_ICONS[lecture.type]}
                    {TYPE_LABELS[lecture.type]}
                  </span>
                  <span className="text-xs text-gray-400">{lecture.date}</span>
                </div>
                
                <h3 className="font-bold text-gray-900 text-base leading-snug">
                  {lecture.title}
                </h3>
                
                <p className="text-sm text-[#C5393A] font-medium mt-1">
                  {lecture.venue}
                </p>
              </div>

              {/* LinkedIn Embed - No scrollbars, Brave-friendly */}
              <div className="relative bg-gray-50 flex-1 min-h-[500px] overflow-hidden">
                <iframe
                  src={lecture.embedUrl}
                  className="w-full h-full absolute inset-0 scrollbar-hide"
                  frameBorder="0"
                  allowFullScreen
                  title={lecture.title}
                  loading="lazy"
                  scrolling="no"
                  sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                  style={{ 
                    overflow: 'hidden',
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none'
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 p-6 bg-white rounded-xl border border-gray-200 shadow-sm text-center">
          <h3 className="font-bold text-gray-900 mb-2">Research Collaboration</h3>
          <p className="text-gray-600 mb-4 text-sm">
            Seeking industry partners for materials discovery, soft robotics, and control systems.
          </p>
          <a 
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#C5393A] text-white rounded-lg font-medium hover:bg-[#9C2A2B] transition-colors text-sm"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Hide scrollbar styles */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none !important;
        }
        .scrollbar-hide {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
          overflow: hidden !important;
        }
      `}</style>
    </section>
  );
};