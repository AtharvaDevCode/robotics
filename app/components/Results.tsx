import { TrendingUp, Warehouse, CheckCircle2, ArrowUpRight } from "lucide-react";

export const Results = () => {
  return (
    <section id="results" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Documented <span className="text-gradient">Performance Gains</span>
          </h2>
          <p className="text-lg text-gray-600">
            Real results from a regional distribution center implementation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Stats */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center text-[#C5393A] mb-4">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">3×</div>
              <div className="text-sm font-medium text-gray-700">Throughput Increase</div>
              <div className="text-xs text-gray-500 mt-1">1,200 to 3,600 units/hr</div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-[#3947C4] mb-4">
                <Warehouse className="w-5 h-5" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">40%</div>
              <div className="text-sm font-medium text-gray-700">Space Optimization</div>
              <div className="text-xs text-gray-500 mt-1">Vertical storage systems</div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center text-green-600 mb-4">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">99.5%</div>
              <div className="text-sm font-medium text-gray-700">Accuracy Rate</div>
              <div className="text-xs text-gray-500 mt-1">Down from 12% errors</div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 mb-4">
                <ArrowUpRight className="w-5 h-5" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">18mo</div>
              <div className="text-sm font-medium text-gray-700">ROI Timeline</div>
              <div className="text-xs text-gray-500 mt-1">6 months ahead of plan</div>
            </div>
          </div>

          {/* Case Study */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">EC</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Regional Logistics Provider</h3>
                <p className="text-sm text-gray-500">250,000 sq ft facility</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="text-gray-600">Pre-Implementation</span>
                <span className="text-red-600 font-medium text-sm">Manual / 12% errors</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="text-gray-600">Post-Implementation</span>
                <span className="text-green-600 font-medium text-sm">Automated / 0.5% errors</span>
              </div>
              <div className="pt-2">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">ROI Achievement</span>
                  <span className="text-[#C5393A] font-bold">18 Months</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#C5393A] h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
            </div>

            <a 
              href="#contact" 
              className="mt-6 block w-full py-3 px-4 bg-gray-900 text-white text-center rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
            >
              Discuss Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};