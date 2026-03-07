import { Bot, TrendingUp, Warehouse } from "lucide-react";

export const Results = () => {
  return (
    <section id="results" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Real World <span className="text-primary">Efficiency Gains</span></h2>
            <p className="text-slate-400 mb-8 text-lg">
              We don&apos;t just sell robots; we deliver ROI. See how we transformed a major logistics hub in Nevada.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-500/10 rounded-lg text-green-400">
                  <TrendingUp />
                </div>
                <div>
                  <h4 className="font-bold text-lg">300% Throughput Increase</h4>
                  <p className="text-slate-400 text-sm">Packages processed per hour increased from 1,200 to 4,800.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                  <Warehouse />
                </div>
                <div>
                  <h4 className="font-bold text-lg">40% Space Optimization</h4>
                  <p className="text-slate-400 text-sm">Vertical stacking robots allowed denser storage.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass-panel p-8 rounded-2xl border border-slate-700 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-20">
              <Bot size={120} />
            </div>
            <h3 className="text-xl font-bold mb-6">Client: Logistics Corp</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-slate-700 pb-2">
                <span className="text-slate-400">Before (Human)</span>
                <span className="text-red-400">High Fatigue / Errors</span>
              </div>
              <div className="flex justify-between items-center border-b border-slate-700 pb-2">
                <span className="text-slate-400">After (Robotics)</span>
                <span className="text-green-400">24/7 Operation / 99.9% Accuracy</span>
              </div>
              <div className="pt-4">
                <div className="flex justify-between text-sm mb-1">
                  <span>ROI Achieved</span>
                  <span className="text-primary font-bold">18 Months</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
