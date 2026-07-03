import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Award, CheckSquare, HeartPulse, ShieldCheck, Timer } from 'lucide-react';

interface MetricItem {
  id: string;
  targetValue: number;
  suffix: string;
  decimals: number;
  label: string;
  description: string;
  icon: React.ComponentType<any>;
  glowColor: string;
  iconColor: string;
}

const METRICS_DATA: MetricItem[] = [
  {
    id: 'ops',
    targetValue: 150420,
    suffix: '+',
    decimals: 0,
    label: 'Successful Operations Completed',
    description: 'A stellar record of surgical precision and safe outcomes across major departments.',
    icon: ShieldCheck,
    glowColor: 'rgba(59, 130, 246, 0.15)', // Blue glow
    iconColor: 'text-blue-400'
  },
  {
    id: 'satisfaction',
    targetValue: 99.8,
    suffix: '%',
    decimals: 1,
    label: 'Patient Satisfaction Rate',
    description: 'Reflecting our clinical hospitality and personalized care pathways.',
    icon: Award,
    glowColor: 'rgba(244, 63, 94, 0.15)', // Rose glow
    iconColor: 'text-rose-400'
  },
  {
    id: 'response',
    targetValue: 12,
    suffix: ' min',
    decimals: 0,
    label: 'Average Emergency Response Time',
    description: 'Securing life-saving care when every single second matters.',
    icon: Timer,
    glowColor: 'rgba(20, 184, 166, 0.15)', // Teal glow
    iconColor: 'text-teal-400'
  },
  {
    id: 'awards',
    targetValue: 45,
    suffix: '+',
    decimals: 0,
    label: 'International Medical Awards',
    description: 'Peer-recognized excellence in healthcare leadership and clinical tech.',
    icon: HeartPulse,
    glowColor: 'rgba(245, 158, 11, 0.15)', // Amber glow
    iconColor: 'text-amber-400'
  }
];

export default function TrustMetrics() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  
  return (
    <section 
      ref={containerRef}
      className="py-24 bg-[#0A192F] relative overflow-hidden"
    >
      {/* Abstract Glowing Aura / Mesh Background */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Decorative Grid Overlays */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title row */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="text-[11px] font-black tracking-widest text-blue-400 uppercase bg-blue-950/60 px-3.5 py-1.5 rounded-full border border-blue-900/40">
            CLINICAL EXCELLENCE & CREDIBILITY
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Live Clinic Impact & Real-Time Trust Metrics
          </h2>
        </div>

        {/* 4 Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {METRICS_DATA.map((metric) => (
            <CounterCard 
              key={metric.id} 
              metric={metric} 
              triggerAnimation={isInView} 
            />
          ))}
        </div>

      </div>
    </section>
  );
}

interface CounterCardProps {
  key?: string;
  metric: MetricItem;
  triggerAnimation: boolean;
}

function CounterCard({ metric, triggerAnimation }: CounterCardProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const animationDuration = 2200; // in milliseconds

  useEffect(() => {
    if (!triggerAnimation) return;

    let startTimestamp: number | null = null;
    const startVal = 0;
    const endVal = metric.targetValue;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / animationDuration, 1);
      
      // Cubic ease-out curve for premium counting feel
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = startVal + (endVal - startVal) * easedProgress;

      setDisplayValue(currentVal);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [triggerAnimation, metric.targetValue]);

  // Format counter displays cleanly
  const formatNumber = (val: number, decimals: number) => {
    const formatted = val.toFixed(decimals);
    if (decimals === 0) {
      // Add commas for large numbers e.g. 150,420
      return parseInt(formatted, 10).toLocaleString('en-US');
    }
    return formatted;
  };

  const Icon = metric.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={triggerAnimation ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, type: 'spring' }}
      className="relative p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-all group overflow-hidden"
    >
      {/* Custom glowing ambient light backdrop behind each card */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-[40px] -z-10 rounded-full"
        style={{
          background: `radial-gradient(circle, ${metric.glowColor} 0%, transparent 70%)`,
          transform: 'scale(1.2)'
        }}
      />

      {/* Floating subtle glowing orb behind number */}
      <div 
        className="absolute -top-12 -right-12 w-32 h-32 blur-3xl rounded-full opacity-[0.03] group-hover:opacity-10 transition-opacity duration-500"
        style={{ backgroundColor: metric.glowColor }}
      />

      <div className="space-y-6">
        {/* Stylized Outline Icon */}
        <div className={`w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/5 flex items-center justify-center ${metric.iconColor} shadow-inner`}>
          <Icon className="w-6 h-6 stroke-[1.8]" />
        </div>

        {/* Large Count-up Number */}
        <div className="space-y-1">
          <span className="text-4xl sm:text-5xl font-black font-mono text-white tracking-tight block">
            {formatNumber(displayValue, metric.decimals)}
            <span className="text-blue-400 font-sans ml-0.5">{metric.suffix}</span>
          </span>
          
          <h4 className="text-base font-bold text-slate-200 tracking-tight leading-snug">
            {metric.label}
          </h4>
        </div>

        {/* Short Summary Description */}
        <p className="text-xs text-slate-400 leading-relaxed font-medium">
          {metric.description}
        </p>
      </div>

      {/* Bottom accent glow bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent group-hover:via-blue-500/60 transition-all duration-500" />
    </motion.div>
  );
}
