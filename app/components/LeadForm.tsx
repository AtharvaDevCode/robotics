'use client';

import { useState } from "react";

export const LeadForm = () => {
  const [formData, setFormData] = useState({
    company: '',
    industry: 'warehouse',
    email: '',
    phone: '',
    requirements: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.msg || 'Failed to submit form');
      }

      setSubmitted(true);
      
      // Reset form after showing success
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          company: '',
          industry: 'warehouse',
          email: '',
          phone: '',
          requirements: ''
        });
      }, 3000);

    } catch (err: any) {
      console.error('Form submission error:', err);
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-200 shadow-xl text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Received</h3>
            <p className="text-gray-600">Our team will contact you within 24 hours.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-200 shadow-xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Request a Consultation</h2>
            <p className="text-gray-600">Provide your operational details. We will identify appropriate robotics solutions.</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company Name *</label>
                <input 
                  type="text" 
                  required
                  value={formData.company}
                  className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-[#C5393A] focus:border-[#C5393A] outline-none transition-all"
                  placeholder="Your Company"
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Work Email *</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-[#C5393A] focus:border-[#C5393A] outline-none transition-all"
                  placeholder="you@company.com"
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input 
                  type="tel"
                  value={formData.phone}
                  className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-[#C5393A] focus:border-[#C5393A] outline-none transition-all"
                  placeholder="+1 (555) 000-0000"
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Industry *</label>
                <select 
                  required
                  value={formData.industry}
                  className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-[#C5393A] focus:border-[#C5393A] outline-none transition-all"
                  onChange={(e) => setFormData({...formData, industry: e.target.value})}
                >
                  <option value="warehouse">Warehousing & Storage</option>
                  <option value="logistics">Delivery & Shipping</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="retail">Retail Fulfillment</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Operational Requirements *</label>
              <textarea 
                required
                rows={4}
                value={formData.requirements}
                className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-[#C5393A] focus:border-[#C5393A] outline-none transition-all"
                placeholder="Describe your facility size, current challenges, and automation goals..."
                onChange={(e) => setFormData({...formData, requirements: e.target.value})}
              />
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-[#C5393A] hover:bg-[#9C2A2B] disabled:bg-gray-400 text-white font-bold py-4 rounded-lg transition-all shadow-lg shadow-red-500/25 transform hover:-translate-y-1 disabled:transform-none disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Request'}
            </button>
            <p className="text-xs text-center text-gray-500 mt-4">
              By submitting, you agree to our Terms of Service and Privacy Policy.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};