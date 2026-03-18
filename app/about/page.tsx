import { Metadata } from "next";
import { Users, Target, Shield, Globe, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Ensemble Inc - Robotics Procurement",
  description: "Learn about Ensemble Inc's mission to transform industries through intelligent robotics procurement and deployment.",
};

const AboutPage = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Precision & Excellence",
      description: "We meticulously analyze every requirement to ensure perfect robot-business matching.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Trust & Transparency",
      description: "Full disclosure on pricing, capabilities, and implementation timelines.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Network",
      description: "Access to robotics manufacturers worldwide for the best solutions.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Proven Results",
      description: "Track record of 300%+ efficiency gains across 200+ deployments.",
    },
  ];

  const stats = [
    { number: "200+", label: "Robots Deployed" },
    { number: "50M+", label: "Hours Saved" },
    { number: "98%", label: "Client Retention" },
    { number: "15+", label: "Countries Served" },
  ];

  return (
    <main className="min-h-screen pt-20 bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-br from-red-100/50 via-blue-50/30 to-cyan-50/50 blur-[100px] rounded-full -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-gray-900">
            About <span className="text-gradient">Ensemble Inc</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pioneering the future of work through intelligent robotics procurement. 
            We bridge the gap between businesses and automation technology.
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
                At Ensemble Inc, we believe that robotics should empower humans, not replace them. 
                Our mission is to eliminate physically exhausting, repetitive tasks from the workplace, 
                allowing human workers to focus on creative, strategic, and high-value activities.
              </p>
              <p className="text-gray-600 text-lg">
                Founded in 2020, we&apos;ve grown from a small consultancy to a global robotics 
                procurement leader, serving warehouses, logistics hubs, manufacturing plants, 
                and distribution centers worldwide.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, idx) => (
                  <div key={idx} className="text-center p-4">
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
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
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Core Values</h2>
            <p className="text-gray-600">The principles that guide every decision we make.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:border-primary/30 hover:shadow-md transition-all">
                <div className="text-primary mb-4">{value.icon}</div>
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
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Leadership Team</h2>
            <p className="text-gray-600">Industry experts driving the automation revolution.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Chen", role: "CEO & Founder", bio: "15 years in robotics engineering" },
              { name: "Marcus Rodriguez", role: "Chief Technology Officer", bio: "Former NASA robotics specialist" },
              { name: "Emily Watson", role: "Head of Procurement", bio: "Supply chain optimization expert" },
            ].map((member, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center hover:shadow-md transition-all">
                <div className="w-24 h-24 bg-gradient-to-br from-red-50 to-cyan-50 rounded-full mx-auto mb-4 flex items-center justify-center border border-red-100">
                  <Users className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-primary text-sm mb-2">{member.role}</p>
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