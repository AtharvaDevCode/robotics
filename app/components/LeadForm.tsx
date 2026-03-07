'use client';

import { useState } from "react";

export const LeadForm = () => {
  const [formData, setFormData] = useState({
    company: '',
    industry: 'warehouse',
    email: '',
    requirements: ''
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle submission logic here (e.g., API call)
    alert("Thank you! Our robotics specialists will contact you shortly.");
  };

  return (
    <section id="contact" className="py-20 bg-linear-to-b from-slate-900 to-black">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 md:p-12 rounded-3xl border border-slate-700 shadow-2xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Request Procurement Analysis</h2>
            <p className="text-slate-400">Tell us about your operations. We&apos;ll find the robot.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Company Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="Acme Logistics"
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Work Email</label>
                <input 
                  type="email" 
                  required
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="ceo@acme.com"
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">Industry Type</label>
              <select 
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                onChange={(e) => setFormData({...formData, industry: e.target.value})}
              >
                <option value="warehouse">Warehousing & Storage</option>
                <option value="logistics">Delivery & Shipping</option>
                <option value="manufacturing">Manufacturing Assembly</option>
                <option value="retail">Retail Fulfillment</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">Specific Requirements</label>
              <textarea 
                rows={4}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                placeholder="e.g., Need automated pallet movers for a 50,000 sq ft facility..."
                onChange={(e) => setFormData({...formData, requirements: e.target.value})}
              />
            </div>

            <button 
              type="submit" 
              className="w-full bg-primary hover:bg-cyan-400 text-slate-900 font-bold py-4 rounded-lg transition-all shadow-lg shadow-cyan-500/20 transform hover:-translate-y-1"
            >
              Submit Request
            </button>
            <p className="text-xs text-center text-slate-500 mt-4">
              By submitting, you agree to our terms. We respect your data privacy.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};