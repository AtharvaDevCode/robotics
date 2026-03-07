import { Metadata } from "next";
import { Briefcase, MapPin, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers | Ensemble Inc - Join Our Team",
  description: "Explore career opportunities at Ensemble Inc. Help shape the future of robotics and automation.",
};

const CareersPage = () => {
  const jobs = [
    {
      title: "Senior Robotics Engineer",
      department: "Engineering",
      location: "San Francisco, CA (Hybrid)",
      type: "Full-time",
      description: "Lead the technical evaluation and integration of industrial robotics systems for enterprise clients.",
    },
    {
      title: "Procurement Specialist",
      department: "Operations",
      location: "Remote",
      type: "Full-time",
      description: "Manage vendor relationships and negotiate contracts with global robotics manufacturers.",
    },
    {
      title: "Client Success Manager",
      department: "Customer Success",
      location: "New York, NY",
      type: "Full-time",
      description: "Ensure seamless robot deployment and ongoing client satisfaction post-implementation.",
    },
    {
      title: "Data Analyst - Automation ROI",
      department: "Analytics",
      location: "Remote",
      type: "Full-time",
      description: "Analyze deployment data to measure efficiency gains and optimize future recommendations.",
    },
  ];

  const benefits = [
    { title: "Competitive Salary", desc: "Industry-leading compensation packages" },
    { title: "Health & Wellness", desc: "Comprehensive medical, dental, and vision" },
    { title: "Remote Flexibility", desc: "Work from anywhere with flexible hours" },
    { title: "Learning Budget", desc: "$5,000 annual professional development" },
    { title: "Equity Options", desc: "Share in the company's success" },
    { title: "Unlimited PTO", desc: "Take the time you need to recharge" },
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-125 bg-primary/20 blur-[120px] rounded-full -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Build the Future <span className="text-gradient">With Us</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Join Ensemble Inc and be part of the robotics revolution. 
            We&apos;re looking for passionate individuals who want to transform how the world works.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Work at Ensemble Inc?</h2>
            <p className="text-slate-400">We invest in our team as much as we invest in robotics.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="glass-panel p-6 rounded-xl">
                <h3 className="text-lg font-bold text-primary mb-2">{benefit.title}</h3>
                <p className="text-slate-400">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Open Positions</h2>
            <p className="text-slate-400">Find your perfect role in our growing team.</p>
          </div>
          <div className="space-y-6">
            {jobs.map((job, idx) => (
              <div key={idx} className="glass-panel p-6 rounded-xl hover:border-primary/50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-slate-400 mb-4">
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" /> {job.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" /> {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" /> {job.type}
                      </span>
                    </div>
                    <p className="text-slate-400">{job.description}</p>
                  </div>
                  <button className="bg-primary text-slate-900 font-bold py-3 px-6 rounded-lg hover:bg-cyan-400 transition-all flex items-center gap-2 whitespace-nowrap">
                    Apply Now <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Don&apos;t See the Right Role?</h2>
          <p className="text-slate-400 mb-8">
            We&apos;re always looking for talented individuals. Send us your resume and 
            we&apos;ll keep you in mind for future opportunities.
          </p>
          <a 
            href="mailto:careers@ensembleinc.com" 
            className="bg-primary text-slate-900 font-bold py-4 px-8 rounded-lg hover:bg-cyan-400 transition-all inline-block"
          >
            Send Your Resume
          </a>
        </div>
      </section>
    </main>
  );
};

export default CareersPage;