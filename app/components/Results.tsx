import { Bot, TrendingUp, Warehouse } from "lucide-react";

export const Results = () => {
  return (
    <section id="results" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Real World <span className="text-gradient">Efficiency Gains</span>
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              We don&apos;t just sell robots; we deliver ROI. See how we transformed a major logistics hub in Nevada.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-red-50 rounded-lg text-primary border border-red-100">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900">300% Throughput Increase</h4>
                  <p className="text-gray-600 text-sm">Packages processed per hour increased from 1,200 to 4,800.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-50 rounded-lg text-cyan-600 border border-cyan-100">
                  <Warehouse className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900">40% Space Optimization</h4>
                  <p className="text-gray-600 text-sm">Vertical stacking robots allowed denser storage.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Bot size={120} className="text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-6 text-gray-900">Client: Logistics Corp</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="text-gray-600">Before (Human)</span>
                <span className="text-red-500 font-medium">High Fatigue / Errors</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="text-gray-600">After (Robotics)</span>
                <span className="text-green-600 font-medium">24/7 Operation / 99.9% Accuracy</span>
              </div>
              <div className="pt-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-700">ROI Achieved</span>
                  <span className="text-primary font-bold">18 Months</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-primary to-cyan-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};