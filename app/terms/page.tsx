import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | Ensemble Inc",
  description: "Read the terms and conditions for using Ensemble Inc services.",
};

const TermsPage = () => {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: "By accessing and using the Ensemble Inc website and services, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.",
    },
    {
      title: "2. Services Description",
      content: "Ensemble Inc provides robotics procurement consulting services. We analyze client requirements, source appropriate robotics solutions from manufacturers, facilitate comparisons, and assist with procurement. We do not manufacture robots ourselves.",
    },
    {
      title: "3. Client Responsibilities",
      content: "Clients must provide accurate information about their operational requirements, facility specifications, and budget constraints. Ensemble Inc's recommendations are based on information provided by the client.",
    },
    {
      title: "4. Procurement Process",
      content: "Our procurement service includes needs assessment, vendor sourcing, product comparison, negotiation support, and deployment coordination. Additional services may incur separate fees as outlined in individual service agreements.",
    },
    {
      title: "5. Pricing and Payment",
      content: "Our consulting fees are outlined in individual service agreements. Robot purchase prices are set by manufacturers. Ensemble Inc may receive commissions from manufacturers, which will be disclosed upon request.",
    },
    {
      title: "6. Warranties and Liability",
      content: "Robot warranties are provided by manufacturers, not Ensemble Inc. We facilitate warranty claims but are not liable for robot performance, defects, or damages. Our liability is limited to the consulting fees paid.",
    },
    {
      title: "7. Intellectual Property",
      content: "All content on this website, including text, graphics, logos, and software, is the property of Ensemble Inc and protected by copyright laws. You may not use our intellectual property without written permission.",
    },
    {
      title: "8. Confidentiality",
      content: "Both parties agree to maintain confidentiality of proprietary information shared during the procurement process. This includes business operations data, pricing, and technical specifications.",
    },
    {
      title: "9. Termination",
      content: "Either party may terminate the service agreement with 30 days written notice. Fees for services rendered up to the termination date remain payable.",
    },
    {
      title: "10. Governing Law",
      content: "These terms are governed by the laws of the State of California, United States. Any disputes shall be resolved in the courts of San Francisco County.",
    },
    {
      title: "11. Changes to Terms",
      content: "Ensemble Inc reserves the right to modify these terms at any time. Continued use of services after changes constitutes acceptance of new terms.",
    },
    {
      title: "12. Contact Information",
      content: "For questions about these terms, contact us at legal@ensembleinc.com or write to Ensemble Inc, 123 Innovation Drive, San Francisco, CA 94105.",
    },
  ];

  return (
    <main className="min-h-screen pt-20">
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold mb-4">
            Terms and <span className="text-gradient">Conditions</span>
          </h1>
          <p className="text-slate-400 mb-12">Last updated: January 2025</p>

          <div className="space-y-8">
            {sections.map((section, idx) => (
              <div key={idx} className="glass-panel p-6 rounded-xl">
                <h2 className="text-xl font-bold text-primary mb-4">{section.title}</h2>
                <p className="text-slate-300 leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-slate-800 rounded-xl border border-slate-700">
            <p className="text-slate-400 text-sm">
              By using Ensemble Inc services, you acknowledge that you have read, understood, 
              and agree to be bound by these Terms and Conditions.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TermsPage;