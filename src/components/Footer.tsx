import React from 'react';
import { Plus, Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: 'Home', href: 'home' },
    { label: 'About Us', href: 'about' },
    { label: 'Find a Doctor', href: 'doctors' },
    { label: 'Services', href: 'services' },
    { label: 'Specialties', href: 'symptom-checker' },
    { label: 'Blog', href: 'news' }
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 130;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800">
      
      {/* Upper Footer: Branding & Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 items-start">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-2 group">
              <div className="relative w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-md">
                <Plus className="w-5 h-5 text-white stroke-[3.5]" />
              </div>
              <div className="flex items-baseline">
                <span className="text-xl font-extrabold tracking-tight text-white lowercase">
                  webti<span className="text-blue-500">xa</span>
                </span>
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full ml-0.5" />
              </div>
            </div>
            
            <p className="text-sm leading-relaxed text-slate-400 max-w-sm font-medium">
              Providing standard-defining medical treatments with compassion and integrity. We are committed to building a healthier community through advanced diagnostics, specialist clinics, and 24/7 care.
            </p>

            <div className="text-xs text-slate-500 space-y-1">
              <p className="font-bold text-slate-400 uppercase tracking-wider">Clinical Licensing Authority</p>
              <p>National Ministry of Health: Reg No. 988-WTX-2026</p>
            </div>
          </div>

          {/* Quick Sitemap Links */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="text-xs font-black text-white uppercase tracking-widest">
              Hospital Directory
            </h4>
            <ul className="space-y-2 text-sm">
              {links.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={`#${link.href}`}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="hover:text-blue-400 transition-colors inline-flex items-center gap-2 group text-xs font-bold uppercase tracking-wider"
                  >
                    <span className="w-1 h-1 bg-slate-700 group-hover:bg-blue-500 rounded-full transition-colors" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-4 space-y-5">
            <h4 className="text-xs font-black text-white uppercase tracking-widest">
              Contact & Address
            </h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <span>
                  California Medical Center, Boulevard Suite 500, California, USA
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <a href="tel:+15551234567" className="hover:text-white transition-colors">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <a href="mailto:care@webtixa.com" className="hover:text-white transition-colors">
                  care@webtixa.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Medical Liability Disclaimer */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="p-4 bg-slate-950/40 border border-slate-800/60 rounded-xl">
            <p className="text-[10px] leading-relaxed text-slate-500 font-medium">
              <strong className="text-slate-400">Disclaimer:</strong> This website is an interactive high-fidelity preview showcasing design architecture, layout, and client-side systems. The hospital operations, medical recommendations, specialist listings, and emergency telephone lines mentioned are simulated clinical placeholders. In case of real-life medical emergencies, please dial your local national emergency services immediately.
            </p>
          </div>
        </div>

      </div>

      {/* Bottom Legal bar */}
      <div className="bg-slate-950 py-6 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-medium">&copy; {currentYear} webtixa. All rights reserved.</p>
          <div className="flex gap-6 font-medium">
            <a href="#privacy" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-slate-400 transition-colors">Terms of Service</a>
            <a href="#licensing" className="hover:text-slate-400 transition-colors inline-flex items-center gap-1">
              <span>Licensing</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
}
