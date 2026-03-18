import { Bot, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Bot className="h-8 w-8 text-[#C5393A]" />
              <span className="font-bold text-xl text-gray-900">
                ENSEMBLE<span className="text-[#C5393A]"> CONTROL</span>
              </span>
            </div>
            <p className="text-gray-600 text-sm mb-6">
              Industrial robotics procurement and deployment for warehouses, logistics, and manufacturing operations.
            </p>
            <div className="flex gap-4">
              <Link href="https://linkedin.com" target="_blank" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-[#C5393A] hover:text-white hover:border-[#C5393A] transition-all shadow-sm text-gray-600">
                <span className="text-sm font-medium">in</span>
              </Link>
              <Link href="https://twitter.com" target="_blank" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-[#C5393A] hover:text-white hover:border-[#C5393A] transition-all shadow-sm text-gray-600">
                <span className="text-sm font-medium">𝕏</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4 text-gray-900">Company</h3>
            <ul className="space-y-3 text-gray-600">
              <li><Link href="/about" className="hover:text-[#C5393A] transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="hover:text-[#C5393A] transition-colors">Careers</Link></li>
              <li><Link href="#process" className="hover:text-[#C5393A] transition-colors">Our Process</Link></li>
              <li><Link href="#contact" className="hover:text-[#C5393A] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold mb-4 text-gray-900">Legal</h3>
            <ul className="space-y-3 text-gray-600">
              <li><Link href="/terms" className="hover:text-[#C5393A] transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="hover:text-[#C5393A] transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4 text-gray-900">Contact</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C5393A] shrink-0 mt-0.5" />
                <span>
                  Ensemble Control Inc.<br />
                  1252 E Main Street Unit D<br />
                  Columbus, OH 43205
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#C5393A] shrink-0" />
                <span>+1 217 819 6382</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#C5393A] shrink-0" />
                <Link href="mailto:help@rewardwise.co" className="hover:text-[#C5393A] transition-colors">help@rewardwise.co</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Ensemble Control Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;