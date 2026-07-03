import { useState, useEffect } from 'react';
import { Menu, X, Plus, Calendar, Mail, Phone, MapPin, Sparkles } from 'lucide-react';

interface HeaderProps {
  onOpenBooking: () => void;
  activeSection: string;
}

export default function Header({ onOpenBooking, activeSection }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About Us', id: 'about' },
    { label: 'Find a Doctor', id: 'doctors' },
    { label: 'Services', id: 'services' },
    { label: 'Specialties', id: 'symptom-checker' },
    { label: 'Blog', id: 'news' },
    { label: 'Contact Us', id: 'contact' },
  ];

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 130; // Accounting for both Top Bar and sticky Header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      
      {/* 1. MINIMALIST UTILITY TOP BAR IN DARK NAVY */}
      <div className="bg-[#0A192F] text-white/95 text-xs py-2.5 px-4 sm:px-6 lg:px-8 border-b border-white/5 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between font-medium">
          
          {/* Top Bar Left: Contacts */}
          <div className="flex items-center gap-6 text-slate-300">
            <a href="mailto:info@webtixa.com" className="flex items-center gap-1.5 hover:text-blue-400 transition-colors">
              <Mail className="w-3.5 h-3.5 text-blue-400" />
              <span>info@webtixa.com</span>
            </a>
            <a href="tel:+15551234567" className="flex items-center gap-1.5 hover:text-blue-400 transition-colors">
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>+1 (555) 123-4567</span>
            </a>
          </div>

          {/* Top Bar Center: Small Sparkle Tagline */}
          <div className="hidden lg:flex items-center gap-1.5 text-blue-300 bg-blue-950/40 px-2.5 py-0.5 rounded-full border border-blue-900/30">
            <Sparkles className="w-3 h-3 text-blue-400 fill-blue-400/20" />
            <span className="text-[10px] font-bold uppercase tracking-wider">Advancing Digital Clinical Standards</span>
          </div>

          {/* Top Bar Right: Location */}
          <div className="flex items-center gap-1.5 text-slate-300">
            <MapPin className="w-3.5 h-3.5 text-blue-400" />
            <span>California Medical Center, USA</span>
          </div>

        </div>
      </div>

      {/* 2. MAIN NAVIGATION NAVBAR */}
      <header
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-100 py-3'
            : 'bg-white py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Left: Webtixa Brand Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
              className="flex items-center gap-2 group"
            >
              {/* Logo design consistent with image ("webtixa" logo in lowercase) */}
              <div className="relative w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
                <Plus className="w-5 h-5 text-white stroke-[3.5]" />
              </div>
              <div className="flex items-baseline">
                <span className="text-xl font-extrabold tracking-tight text-[#0A192F] lowercase">
                  webti<span className="text-blue-600">xa</span>
                </span>
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full ml-0.5" />
              </div>
            </a>

            {/* Center: Clean Centered Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => {
                // Determine custom active check based on scroll
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className={`text-xs font-bold uppercase tracking-widest transition-all relative py-1.5 cursor-pointer ${
                      isActive
                        ? 'text-blue-600'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-blue-600 rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Right: Book Appointment Solid Blue Button */}
            <div className="hidden lg:flex items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md shadow-blue-500/10 hover:shadow-lg transition-all flex items-center gap-2 group cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </button>
            </div>

            {/* Mobile Actions Drawer trigger */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={onOpenBooking}
                className="p-2 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 transition-colors mr-1"
                aria-label="Book appointment"
              >
                <Calendar className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 shadow-xl px-4 py-6 space-y-4 absolute top-full left-0 right-0 z-30">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className={`text-left px-4 py-2.5 rounded-xl text-sm font-bold uppercase tracking-wider transition-colors ${
                      isActive
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </div>
            <div className="pt-4 border-t border-slate-100">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md text-center flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
