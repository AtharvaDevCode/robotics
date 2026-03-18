import { Metadata } from "next";
import { Users, Target, Shield, Globe, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Ensemble Control Inc - Robotics Procurement",
  description: "Learn about Ensemble Control Inc's mission to transform industrial operations through strategic robotics procurement and deployment.",
};

const AboutPage = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Precision",
      description: "Detailed operational analysis ensures optimal robot-business alignment.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Integrity",
      description: "Transparent pricing, realistic timelines, and honest capability assessments.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Network",
      description: "Relationships with robotics manufacturers worldwide for optimal solutions.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Accountability",
      description: "We measure success by your operational improvements and ROI.",
    },
  ];

  const stats = [
    { number: "150+", label: "Systems Deployed" },
    { number: "40M+", label: "Hours Automated" },
    { number: "95%", label: "Client Retention" },
    { number: "12+", label: "Countries Served" },
  ];

  return (
    <main className="min-h-screen pt-20 bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-br from-red-100/50 via-blue-50/30 to-cyan-50/50 blur-[100px] rounded-full -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-gray-900">
            About <span className="text-gradient">Ensemble Control</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We bridge the gap between industrial operations and automation technology, 
            sourcing robotics solutions that deliver measurable operational improvements.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Mission</h2>
              <p className="text-gray-600 text-lg mb-6">
                Ensemble Control Inc. specializes in robotics procurement for industrial operations. 
                We analyze operational requirements, source appropriate automation solutions, 
                and manage deployment to minimize disruption and maximize efficiency gains.
              </p>
              <p className="text-gray-600 text-lg">
                Founded in 2020 and headquartered in Columbus, Ohio, we serve clients across 
                North America and internationally, focusing on warehouses, distribution centers, 
                and manufacturing facilities.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, idx) => (
                  <div key={idx} className="text-center p-4">
                    <div className="text-3xl md:text-4xl font-bold text-[#C5393A] mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Operating Principles</h2>
            <p className="text-gray-600">The standards that guide our procurement process.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:border-[#C5393A]/30 hover:shadow-md transition-all">
                <div className="text-[#C5393A] mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Leadership</h2>
            <p className="text-gray-600">Experienced professionals in industrial automation.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Chen", role: "Chief Executive Officer", bio: "15 years in industrial automation and robotics integration" },
              { name: "Marcus Rodriguez", role: "Chief Technology Officer", bio: "Former robotics engineer with expertise in warehouse systems" },
              { name: "Emily Watson", role: "Head of Operations", bio: "Supply chain optimization and vendor management specialist" },
            ].map((member, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center hover:shadow-md transition-all">
                <div className="w-24 h-24 bg-gradient-to-br from-red-50 to-cyan-50 rounded-full mx-auto mb-4 flex items-center justify-center border border-red-100">
                  <Users className="w-12 h-12 text-[#C5393A]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-[#C5393A] text-sm mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;