import { Bot, CheckCircle, TrendingUp } from "lucide-react";

export const Process = () => {
  const steps = [
    { title: "Audit", desc: "We analyze your current workflow bottlenecks.", icon: <TrendingUp className="w-6 h-6" /> },
    { title: "Procure", desc: "We source the best global robotics vendors for you.", icon: <Bot className="w-6 h-6" /> },
    { title: "Deploy", desc: "Seamless integration with minimal downtime.", icon: <CheckCircle className="w-6 h-6" /> },
  ];

  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">The Procurement Pipeline</h2>
          <p className="text-gray-600">From request to robot in 3 simple steps.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all group">
              <div className="w-14 h-14 bg-gradient-to-br from-red-50 to-cyan-50 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform border border-red-100">
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