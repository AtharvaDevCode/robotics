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
    alert("Thank you! Our robotics specialists will contact you shortly.");
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-200 shadow-xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Request Procurement Analysis</h2>
            <p className="text-gray-600">Tell us about your operations. We&apos;ll find the robot.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                  placeholder="Acme Logistics"
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Work Email</label>
                <input 
                  type="email" 
                  required
                  className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                  placeholder="ceo@acme.com"
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Industry Type</label>
              <select 
                className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                onChange={(e) => setFormData({...formData, industry: e.target.value})}
              >
                <option value="warehouse">Warehousing & Storage</option>
                <option value="logistics">Delivery & Shipping</option>
                <option value="manufacturing">Manufacturing Assembly</option>
                <option value="retail">Retail Fulfillment</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Specific Requirements</label>
              <textarea 
                rows={4}
                className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                placeholder="e.g., Need automated pallet movers for a 50,000 sq ft facility..."
                onChange={(e) => setFormData({...formData, requirements: e.target.value})}
              />
            </div>

            <button 
              type="submit" 
              className="w-full bg-primary hover:bg-red-700 text-white font-bold py-4 rounded-lg transition-all shadow-lg shadow-red-500/25 transform hover:-translate-y-1"
            >
              Submit Request
            </button>
            <p className="text-xs text-center text-gray-500 mt-4">
              By submitting, you agree to our terms. We respect your data privacy.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};