import { Metadata } from "next";
import { Briefcase, MapPin, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers | Ensemble Control Inc - Join Our Team",
  description: "Explore career opportunities at Ensemble Control Inc. Help shape the future of industrial automation.",
};

const CareersPage = () => {
  const jobs = [
    {
      title: "Senior Robotics Engineer",
      department: "Engineering",
      location: "Columbus, OH (Hybrid)",
      type: "Full-time",
      description: "Lead technical evaluation of industrial robotics systems and oversee client integration projects.",
    },
    {
      title: "Procurement Specialist",
      department: "Operations",
      location: "Remote",
      type: "Full-time",
      description: "Manage vendor relationships and negotiate contracts with robotics manufacturers globally.",
    },
    {
      title: "Client Success Manager",
      department: "Customer Success",
      location: "Columbus, OH",
      type: "Full-time",
      description: "Ensure seamless deployment and ongoing client satisfaction post-implementation.",
    },
    {
      title: "Automation Analyst",
      department: "Analytics",
      location: "Remote",
      type: "Full-time",
      description: "Analyze deployment data to measure efficiency gains and optimize recommendations.",
    },
  ];

  const benefits = [
    { title: "Competitive Compensation", desc: "Salary and performance bonuses" },
    { title: "Health Coverage", desc: "Medical, dental, and vision insurance" },
    { title: "Flexible Work", desc: "Remote options and flexible scheduling" },
    { title: "Professional Development", desc: "Annual learning and conference budget" },
    { title: "Equity Participation", desc: "Stock options for eligible employees" },
    { title: "Paid Time Off", desc: "Generous PTO and company holidays" },
  ];

  return (
    <main className="min-h-screen pt-20 bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-br from-red-100/50 via-blue-50/30 to-cyan-50/50 blur-[100px] rounded-full -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-gray-900">
            Build the Future <span className="text-gradient">With Us</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join Ensemble Control Inc. and work on meaningful automation projects 
            that transform industrial operations worldwide.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Why Work Here</h2>
            <p className="text-gray-600">We invest in our team as we invest in our clients' success.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
                <h3 className="text-lg font-bold text-[#C5393A] mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Open Positions</h2>
            <p className="text-gray-600">Current opportunities to join our team.</p>
          </div>
          <div className="space-y-6">
            {jobs.map((job, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:border-[#C5393A]/30 hover:shadow-md transition-all">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4 text-[#C5393A]" /> {job.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4 text-cyan-600" /> {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4 text-green-600" /> {job.type}
                      </span>
                    </div>
                    <p className="text-gray-600">{job.description}</p>
                  </div>
                  <a 
                    href="mailto:careers@ensemblecontrol.com?subject=Application: ${encodeURIComponent(job.title)}"
                    className="bg-[#C5393A] text-white font-bold py-3 px-6 rounded-full hover:bg-[#9C2A2B] transition-all flex items-center gap-2 whitespace-nowrap shadow-lg shadow-red-500/25"
                  >
                    Apply Now <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Don't See the Right Role?</h2>
          <p className="text-gray-600 mb-8">
            We are always interested in talented professionals. Send your resume and 
            we will contact you when relevant positions open.
          </p>
          <a 
            href="mailto:careers@ensemblecontrol.com" 
            className="bg-[#C5393A] text-white font-bold py-4 px-8 rounded-full hover:bg-[#9C2A2B] transition-all inline-block shadow-lg shadow-red-500/25"
          >
            Send Your Resume
          </a>
        </div>
      </section>
    </main>
  );
};

export default CareersPage;