import { Bot, CheckCircle, TrendingUp } from "lucide-react";

export const Process = () => {
  const steps = [
    {
      title: "Audit",
      desc: "We analyze your current workflow bottlenecks.",
      icon: <TrendingUp />,
    },
    {
      title: "Procure",
      desc: "We source the best global robotics vendors for you.",
      icon: <Bot />,
    },
    {
      title: "Deploy",
      desc: "Seamless integration with minimal downtime.",
      icon: <CheckCircle />,
    },
  ];

  return (
    <section id="process" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">The Procurement Pipeline</h2>
          <p className="text-slate-400">
            From request to robot in 3 simple steps.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="glass-panel p-8 rounded-2xl hover:border-primary/50 transition-colors group"
            >
              <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-slate-400">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
