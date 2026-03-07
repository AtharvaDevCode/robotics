
import { Bot, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="border-t border-slate-800 py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Bot className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl">ENSEMBLE<span className="text-primary">INC</span></span>
            </div>
            <p className="text-slate-400 text-sm mb-6">
              Transforming industries through intelligent robotics procurement. 
              Building the future of work, one robot at a time.
            </p>
            <div className="flex gap-4">
              {/* Social placeholders */}
              <Link href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-slate-900 transition-colors">
                <span className="text-sm">in</span>
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-slate-900 transition-colors">
                <span className="text-sm">𝕏</span>
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-slate-900 transition-colors">
                <span className="text-sm">fb</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-3 text-slate-400">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="#process" className="hover:text-primary transition-colors">Our Process</Link></li>
              <li><Link href="#results" className="hover:text-primary transition-colors">Case Studies</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-3 text-slate-400">
              <li><Link href="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              {/* <li><Link href="#" className="hover:text-primary transition-colors">Cookie Policy</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">GDPR Compliance</Link></li> */}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>123 Innovation Drive<br />San Francisco, CA 94105</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <Link href="mailto:contact@ensembleinc.com" className="hover:text-primary transition-colors">contact@ensembleinc.com</Link>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <Link href="tel:+14155551234" className="hover:text-primary transition-colors">+1 (415) 555-1234</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Ensemble Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-slate-500 text-sm">
            <span>Made with 🤖 for the future of work</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;