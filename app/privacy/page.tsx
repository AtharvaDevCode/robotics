import { Metadata } from "next";
import { Lock, Eye, Database, UserCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Ensemble Control Inc - Data Protection",
  description: "Learn how Ensemble Control Inc protects your data and privacy. Our commitment to data security and compliance.",
};

const PrivacyPage = () => {
  const principles = [
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Data Security",
      description: "Enterprise-grade encryption for all data in transit and at rest.",
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Transparency",
      description: "Clear communication about what data we collect and why.",
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "User Control",
      description: "You have full rights to access, modify, or delete your data.",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Minimal Collection",
      description: "We only collect data necessary to provide our services.",
    },
  ];

  const sections = [
    {
      title: "1. Information We Collect",
      content: "We collect information you provide directly to us, including: name, email address, company name, phone number, business requirements, and facility specifications. We also collect usage data such as IP address, browser type, and pages visited.",
    },
    {
      title: "2. How We Use Your Information",
      content: "Your information is used to: provide robotics procurement services, communicate about your inquiries, send service updates, improve our website, and comply with legal obligations. We do not sell your personal data to third parties.",
    },
    {
      title: "3. Data Sharing",
      content: "We may share your information with robotics manufacturers solely for the purpose of obtaining quotes and specifications for your procurement needs. All third parties are bound by confidentiality agreements.",
    },
    {
      title: "4. Data Retention",
      content: "We retain your personal information for as long as necessary to provide our services and comply with legal obligations. Typically, this is 7 years for business records. You may request deletion at any time.",
    },
    {
      title: "5. Your Rights",
      content: "You have the right to: access your personal data, correct inaccurate data, request deletion, object to processing, data portability, and withdraw consent. Contact privacy@ensemblecontrol.com to exercise these rights.",
    },
    {
      title: "6. Cookies and Tracking",
      content: "We use essential cookies for website functionality and analytics cookies to understand usage patterns. You can control cookie settings through your browser. We do not use cookies for advertising purposes.",
    },
    {
      title: "7. Data Security Measures",
      content: "We implement industry-standard security measures including SSL encryption, secure servers, access controls, regular security audits, and employee training on data protection.",
    },
    {
      title: "8. International Data Transfers",
      content: "As a global company, your data may be transferred to countries outside your residence. We ensure adequate protection through Standard Contractual Clauses and other legal mechanisms.",
    },
    {
      title: "9. Children's Privacy",
      content: "Our services are not directed to individuals under 18. We do not knowingly collect personal information from children. If we discover such collection, we will delete the information immediately.",
    },
    {
      title: "10. Changes to This Policy",
      content: "We may update this privacy policy periodically. We will notify you of significant changes via email or website notice. Continued use of our services constitutes acceptance of updated policies.",
    },
    {
      title: "11. Compliance",
      content: "We comply with GDPR (EU), CCPA (California), and other applicable data protection regulations. Our Data Protection Officer can be reached at dpo@ensemblecontrol.com.",
    },
    {
      title: "12. Contact Us",
      content: "For privacy-related questions or concerns, contact: privacy@ensemblecontrol.com or Ensemble Control Inc, 1252 E Main Street Unit D, Columbus, OH 43205, United States.",
    },
  ];

  return (
    <main className="min-h-screen pt-20 bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold mb-4 text-gray-900">
              Privacy <span className="text-gradient">Policy</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your data protection is our priority. We are committed to transparency 
              and security in handling your information.
            </p>
          </div>

          {/* Principles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {principles.map((principle, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center">
                <div className="text-[#C5393A] mb-4 flex justify-center">{principle.icon}</div>
                <h3 className="font-bold mb-2 text-gray-900">{principle.title}</h3>
                <p className="text-gray-600 text-sm">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Policy Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-500 mb-8">Last updated: March 2025</p>

          <div className="space-y-8">
            {sections.map((section, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h2 className="text-xl font-bold text-[#C5393A] mb-4">{section.title}</h2>
                <p className="text-gray-700 leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Badges */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Compliance & Certifications</h2>
            <p className="text-gray-600">We meet global data protection standards.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {["GDPR Compliant", "CCPA Compliant", "SOC 2 Type II", "ISO 27001"].map((badge, idx) => (
              <div key={idx} className="bg-white px-6 py-3 rounded-full border border-[#C5393A]/30 shadow-sm">
                <span className="text-[#C5393A] font-semibold">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPage;