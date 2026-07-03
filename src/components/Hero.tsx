import { motion } from 'motion/react';
import { Stethoscope, Activity, Sparkles, ShieldCheck, HeartPulse, UserCheck, FlameKindling, Zap } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  
  const handleExploreServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-[#FFFFFF] overflow-hidden"
    >
      
      {/* Dynamic Background Tech Grid and Glowing Accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-indigo-50/40 rounded-full blur-[120px] pointer-events-none -z-10" />
      
      {/* Blueprint Dotted Clinical Grid Overlay (Strict reference layout) */}
      <div className="absolute inset-0 bg-[radial-gradient(#0066FF_0.7px,transparent_0.7px)] bg-[size:24px_24px] opacity-[0.04] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            
            {/* Top Badge: "COMPREHENSIVE & TRUSTED CARE" */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 border border-blue-100/60 rounded-full text-blue-600 text-xs font-black tracking-widest uppercase shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-500 fill-blue-500/20" />
              <span>COMPREHENSIVE & TRUSTED CARE</span>
            </motion.div>

            {/* Massive bold heading: "Advancing Healthcare For A Healthier Tomorrow" */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0A192F] tracking-tight leading-[1.08] pr-2"
            >
              Advancing Healthcare <br className="hidden sm:inline" />
              For A <span className="text-blue-600 relative inline-block">
                Healthier
                <span className="absolute bottom-1.5 left-0 w-full h-[6px] bg-blue-200/50 rounded-full -z-10" />
              </span> Tomorrow
            </motion.h1>

            {/* Brief description paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-500 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed"
            >
              Experience world-class healthcare driven by clinical leadership, medical innovation, and compassionate specialist doctors. Webtixa provides integrated hospital services optimized for patient safety.
            </motion.p>

            {/* CTA Button "Explore Services →" & Decorative Dynamic ECG Line Wave graphic */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-3"
            >
              <button
                onClick={handleExploreServices}
                className="w-full sm:w-auto px-7 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md shadow-blue-500/10 hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Explore Services</span>
                <span className="transform group-hover:translate-x-1 transition-transform">&rarr;</span>
              </button>

              {/* Decorative dynamic ECG Line wave graphic */}
              <div className="flex items-center gap-3 bg-slate-50/80 backdrop-blur border border-slate-100 rounded-xl px-4 py-2.5 h-14">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider font-mono">ECG Rate:</span>
                <svg
                  className="w-24 h-8 text-blue-500 stroke-[2] stroke-linecap-round"
                  viewBox="0 0 100 30"
                  fill="none"
                >
                  <path
                    d="M 0,15 L 20,15 L 25,10 L 30,20 L 35,15 L 45,15 L 48,2 L 53,28 L 57,15 L 67,15 L 70,12 L 73,18 L 76,15 L 100,15"
                    className="animate-[ecg_2s_linear_infinite]"
                    style={{
                      strokeDasharray: '200',
                      strokeDashoffset: '0'
                    }}
                  />
                  {/* Glowing pulsing dot on heart wave */}
                  <circle cx="50" cy="15" r="2" className="fill-blue-500 animate-ping" />
                </svg>
                <span className="text-[10px] font-bold text-emerald-500 font-mono flex items-center gap-1.5 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  78 bpm
                </span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Doctor Portrait Cutout Layered Over Tech Grid Backdrop */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end mt-12 lg:mt-0">
            
            {/* Tech Grid Backdrop Accent Circle (Dotted mesh structure) */}
            <div className="absolute top-1/2 left-1/2 lg:left-2/3 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] bg-gradient-to-tr from-blue-500/5 to-indigo-500/5 border border-blue-500/10 rounded-full flex items-center justify-center -z-10 animate-spin-slow">
              <div className="w-[280px] h-[280px] border border-dashed border-blue-500/10 rounded-full" />
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full top-0 left-1/2 -translate-x-1/2 border border-white" />
              <div className="absolute w-3 h-3 bg-indigo-400 rounded-full bottom-0 right-1/4 border border-white animate-pulse" />
            </div>

            {/* Cutout Image of Friendly Male Doctor smiling and holding tablet */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-[380px] aspect-[4/5] rounded-[36px] overflow-hidden shadow-2xl border-4 border-white bg-slate-50"
            >
              <img
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=600"
                alt="Smiling professional male physician consultant holding clinical tablet device"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
              />
              
              {/* Soft blurred background grid blending */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            {/* Glowing floating diagnostic badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -left-4 sm:left-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-100 shadow-xl flex items-center gap-3.5 max-w-[200px]"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shadow-inner flex-shrink-0">
                <ShieldCheck className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div className="space-y-0.5">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Accredited</span>
                <span className="text-xs font-bold text-[#0A192F] leading-tight block">Joint Commission Standard</span>
              </div>
            </motion.div>

          </div>

        </div>

        {/* 3 Floating Overlapping Cards Row (Bottom of Hero Section) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 lg:mt-28 grid grid-cols-1 md:grid-cols-3 gap-6 relative z-20"
        >
          {/* Card 1: Emergency Care */}
          <div className="bg-white rounded-2xl border border-slate-100 p-7 shadow-xl shadow-blue-900/[0.02] hover:shadow-2xl hover:shadow-blue-900/[0.05] hover:translate-y-[-4px] transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-rose-50 border border-rose-100 text-rose-500 flex items-center justify-center mb-6 shadow-inner group-hover:scale-105 transition-transform">
              <HeartPulse className="w-6 h-6 stroke-[1.8]" />
            </div>
            <h3 className="text-base font-extrabold text-[#0A192F] tracking-tight mb-2">Emergency Care</h3>
            <p className="text-xs text-slate-500 leading-relaxed font-medium">
              24/7 fully equipped trauma unit with on-call surgical consults and critical trauma response specialists.
            </p>
          </div>

          {/* Card 2: Expert Specialized Doctors */}
          <div className="bg-white rounded-2xl border border-slate-100 p-7 shadow-xl shadow-blue-900/[0.02] hover:shadow-2xl hover:shadow-blue-900/[0.05] hover:translate-y-[-4px] transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 text-blue-500 flex items-center justify-center mb-6 shadow-inner group-hover:scale-105 transition-transform">
              <Stethoscope className="w-6 h-6 stroke-[1.8]" />
            </div>
            <h3 className="text-base font-extrabold text-[#0A192F] tracking-tight mb-2">Expert Specialized Doctors</h3>
            <p className="text-xs text-slate-500 leading-relaxed font-medium">
              Board-certified senior clinical consultants leading neurology, pediatrics, orthopedics, and cardiology.
            </p>
          </div>

          {/* Card 3: Advanced Diagnostic Testing */}
          <div className="bg-white rounded-2xl border border-slate-100 p-7 shadow-xl shadow-blue-900/[0.02] hover:shadow-2xl hover:shadow-blue-900/[0.05] hover:translate-y-[-4px] transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 text-teal-500 flex items-center justify-center mb-6 shadow-inner group-hover:scale-105 transition-transform">
              <Activity className="w-6 h-6 stroke-[1.8]" />
            </div>
            <h3 className="text-base font-extrabold text-[#0A192F] tracking-tight mb-2">Advanced Diagnostic Testing</h3>
            <p className="text-xs text-slate-500 leading-relaxed font-medium">
              High-resolution digital radiology labs, dual-screen PACS imaging, and path laboratory results.
            </p>
          </div>
        </motion.div>

      </div>

      {/* Styled animation keyframe overrides */}
      <style>{`
        @keyframes ecg {
          0% { stroke-dashoffset: 200; }
          100% { stroke-dashoffset: -200; }
        }
        .animate-spin-slow {
          animation: spin 30s linear infinite;
        }
      `}</style>

    </section>
  );
}
