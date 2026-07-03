import { Phone, CheckCircle, ShieldAlert, HeartPulse } from 'lucide-react';

interface EmergencyFooterProps {
  onOpenBooking: () => void;
}

export default function EmergencyFooter({ onOpenBooking }: EmergencyFooterProps) {
  const checklists = [
    '24/7 Emergency ER',
    'Professional Medical Staff',
    'Fully Equipped Infrastructure'
  ];

  return (
    <section id="contact" className="py-16 bg-slate-50 relative overflow-hidden">
      
      {/* Wave Background Decorative Details */}
      <div className="absolute right-0 top-0 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-80 h-80 bg-indigo-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Thick, Rounded Container with a Split Design */}
        <div className="w-full bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100/80 flex flex-col lg:flex-row">
          
          {/* Left Side (Deep Navy Gradient Block) */}
          <div className="lg:w-3/5 bg-gradient-to-br from-slate-900 via-[#111c3a] to-blue-950 p-8 sm:p-12 flex flex-col justify-between text-white space-y-8">
            
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-500/10 border border-rose-500/20 rounded-full text-rose-400 text-xs font-bold">
                <ShieldAlert className="w-3.5 h-3.5 animate-pulse" />
                <span>Emergency Hotline Service</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                Need Urgent Medical Assistance?
              </h2>
              
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium max-w-lg">
                Our emergency response systems, trauma surgeons, and advanced cardiac life-support ambulances are active 24 hours a day, 7 days a week, 365 days a year.
              </p>
            </div>

            {/* Checklist feature badges */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4 border-t border-white/5">
              {checklists.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-3 py-1.5 rounded-xl">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span className="text-xs font-extrabold tracking-wide text-slate-100 uppercase">{item}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Side (Crisp White Callout Card) */}
          <div className="lg:w-2/5 bg-white p-8 sm:p-12 flex flex-col justify-center items-center text-center space-y-6">
            
            {/* Highly visible phone call badge */}
            <div className="p-4 bg-rose-50 border border-rose-100 text-rose-600 rounded-full animate-bounce">
              <Phone className="w-8 h-8 stroke-[2.5]" />
            </div>

            <div className="space-y-2">
              <span className="text-xs text-slate-400 uppercase tracking-widest font-extrabold block">
                24/7 Direct Trauma Line
              </span>
              <a
                href="tel:+15551234567"
                className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight hover:text-blue-600 transition-colors block font-mono"
              >
                +1 (555) 123-4567
              </a>
              <p className="text-xs text-slate-400 font-medium">
                Free consulting triage support for first-aid assistance.
              </p>
            </div>

            <div className="w-full pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm rounded-xl shadow-md shadow-blue-500/15 hover:shadow-lg hover:shadow-blue-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer group"
              >
                <HeartPulse className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                <span>Or Book Appointment Online &rarr;</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
