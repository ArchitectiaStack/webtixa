import { motion } from 'motion/react';
import { ArrowRight, Activity, FlaskConical, Stethoscope, Baby, ShieldCheck, Heart, CircleDot } from 'lucide-react';

export default function Services() {
  
  const mainServices = [
    {
      id: 'gs-1',
      title: 'General Medicine',
      description: 'Comprehensive health checkups, preventative screenings, and personalized family medicine.',
      icon: Stethoscope,
      iconColor: 'text-blue-500',
      bgColor: 'bg-blue-50'
    },
    {
      id: 'gs-2',
      title: 'Advanced Diagnostics',
      description: 'State-of-the-art laboratory testing, digital X-rays, and precise MRI scanning.',
      icon: FlaskConical,
      iconColor: 'text-indigo-500',
      bgColor: 'bg-indigo-50'
    },
    {
      id: 'gs-3',
      title: 'Cardiology Care',
      description: 'Expert heart health evaluation, ECG monitoring, and cardiovascular treatments.',
      icon: Heart,
      iconColor: 'text-rose-500',
      bgColor: 'bg-rose-50'
    },
    {
      id: 'gs-4',
      title: 'Pediatrics & Child Care',
      description: 'Dedicated pediatric care, regular growth tracking, and childhood immunizations.',
      icon: Baby,
      iconColor: 'text-teal-500',
      bgColor: 'bg-teal-50'
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section 1: "Our Comprehensive Services" Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-[10px] font-black tracking-widest text-blue-600 uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            SERVICES WE OFFER
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A192F] tracking-tight">
            Our Comprehensive Medical & Healthcare Services
          </h2>
        </div>

        {/* 4-Column Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {mainServices.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <motion.div
                key={srv.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm hover:shadow-xl hover:shadow-blue-900/[0.03] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Styled Icon */}
                  <div className={`w-12 h-12 rounded-2xl ${srv.bgColor} flex items-center justify-center ${srv.iconColor} mb-6 shadow-sm`}>
                    <Icon className="w-6 h-6 stroke-[1.8]" />
                  </div>

                  {/* Title & summary */}
                  <h3 className="text-base font-extrabold text-[#0A192F] tracking-tight mb-3">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">
                    {srv.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-50/60 mt-6 flex items-center gap-1.5 text-[10px] font-black uppercase text-blue-600 tracking-wider group-hover:text-blue-700 transition-colors">
                  <span>Explore Department</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Section 2: "Innovation & Efficiency Split" (Two Unequal Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white rounded-[32px] border border-slate-100 p-8 sm:p-12 shadow-xl shadow-slate-100/40">
          
          {/* Left Column (Unequal, 5 Cols): Text + Circular Progress Gauge Graphic */}
          <div className="lg:col-span-5 space-y-7">
            
            <div className="space-y-3">
              <span className="text-[10px] font-black tracking-widest text-blue-600 uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                WHY CHOOSE US
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A192F] tracking-tight leading-tight">
                Experience Healthcare Driven By Innovation & Efficiency
              </h3>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed font-medium">
              We combine modern technology with expert care to deliver faster diagnoses, minimal wait times, and seamless digital health solutions.
            </p>

            {/* Circular Progress Gauge Graphic */}
            <div className="flex items-center gap-6 p-5 bg-slate-50/80 backdrop-blur rounded-2xl border border-slate-100">
              
              {/* SVG Circular Progress Gauge indicating "99% Accurate" */}
              <div className="relative w-20 h-20 flex-shrink-0">
                <svg className="w-full h-full transform -rotate-95" viewBox="0 0 36 36">
                  {/* Gray background circle */}
                  <path
                    className="text-slate-200"
                    strokeWidth="3.5"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  {/* Blue accuracy animated circle */}
                  <path
                    className="text-blue-600 animate-[progress_1.8s_ease-out_forwards]"
                    strokeWidth="3.5"
                    strokeDasharray="99, 100"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                {/* Gauge Inner Text Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-base font-black text-[#0A192F] font-mono leading-none">99%</span>
                  <span className="text-[7px] font-black text-blue-600 uppercase mt-0.5 tracking-tight">Accurate</span>
                </div>
              </div>

              {/* Text for gauge */}
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-[#0A192F] tracking-tight">Accurate Diagnostic Results</h4>
                <p className="text-[11px] text-slate-400 font-medium leading-relaxed">
                  Precision you can trust. Our high-resolution lab analysis minimizes reporting false-positives significantly.
                </p>
              </div>

            </div>

            {/* Additional list items */}
            <div className="grid grid-cols-2 gap-4 text-xs font-semibold text-[#0A192F] pt-2">
              <div className="flex items-center gap-2">
                <CircleDot className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <span>Real-time Lab Access</span>
              </div>
              <div className="flex items-center gap-2">
                <CircleDot className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                <span>Direct Mobile Reports</span>
              </div>
            </div>

          </div>

          {/* Right Column (Unequal, 7 Cols): Wide cinematic specialist photo */}
          <div className="lg:col-span-7 relative rounded-3xl overflow-hidden shadow-xl aspect-video bg-slate-100">
            <img
              src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800"
              alt="Medical specialist reviewing high resolution radiology diagnostic imaging display screens"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-750 ease-out"
            />
            
            {/* Cinematic clinical glow overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/40 via-transparent to-transparent pointer-events-none" />

            {/* Floating visual detail indicator */}
            <div className="absolute bottom-4 left-4 bg-[#0A192F]/90 backdrop-blur-sm px-4 py-2.5 rounded-xl border border-white/5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-black text-white uppercase tracking-widest font-mono">
                System Status: Active PACS Scan
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
