import { Bot, CheckCircle, TrendingUp } from "lucide-react";

export const Process = () => {
  const steps = [
    { 
      title: "Assessment", 
      desc: "Comprehensive analysis of your workflow, facility layout, and operational bottlenecks.", 
      icon: <TrendingUp className="w-6 h-6" /> 
    },
    { 
      title: "Procurement", 
      desc: "Strategic sourcing from vetted robotics manufacturers matched to your specifications.", 
      icon: <Bot className="w-6 h-6" /> 
    },
    { 
      title: "Integration", 
      desc: "Managed deployment with minimal disruption to existing operations.", 
      icon: <CheckCircle className="w-6 h-6" /> 
    },
  ];

  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Process</h2>
          <p className="text-gray-600">From assessment to deployment in three phases.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#C5393A]/30 transition-all group">
              <div className="w-14 h-14 bg-gradient-to-br from-red-50 to-cyan-50 rounded-xl flex items-center justify-center text-[#C5393A] mb-6 group-hover:scale-110 transition-transform border border-red-100">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};