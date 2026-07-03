import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Activity, ShieldAlert, ArrowRight, CheckCircle2, MapPin, Sparkles, UserCheck } from 'lucide-react';

interface SymptomCheckerProps {
  onOpenBookingWithDoctor: (docId: string) => void;
}

type HotspotId = 'head' | 'chest' | 'abdomen' | 'joints';

interface QuestionOption {
  label: string;
  severity: 'low' | 'medium' | 'high';
  desc: string;
}

interface HotspotData {
  title: string;
  department: string;
  docId: string;
  docName: string;
  icon: string;
  description: string;
  questions: {
    questionText: string;
    options: QuestionOption[];
  };
}

const HOTSPOTS: Record<HotspotId, HotspotData> = {
  head: {
    title: 'Cranio-Neurological (Head)',
    department: 'Neurology',
    docId: 'd3',
    docName: 'dr. Budi Santoso, Sp.S',
    icon: '🧠',
    description: 'Neurological symptoms including persistent headaches, migraine clusters, vertigo, or sensory changes.',
    questions: {
      questionText: 'What primary symptom are you experiencing in your head region?',
      options: [
        { label: 'Severe headache or throbbing migraine', severity: 'medium', desc: 'Can indicate migraine or cluster headaches.' },
        { label: 'Dizziness, vertigo, or lightheadedness', severity: 'medium', desc: 'Commonly linked to inner ear or vestibular issues.' },
        { label: 'Routine tension headache or mild stress pressure', severity: 'low', desc: 'Often relieved with rest, hydration, and OTC analgesics.' },
        { label: 'Sudden numbness, speech difficulty, or severe confusion', severity: 'high', desc: 'CRITICAL: Could indicate acute neurological event. Seek emergency care immediately.' }
      ]
    }
  },
  chest: {
    title: 'Cardiovascular & Respiratory (Chest)',
    department: 'Cardiology',
    docId: 'd1',
    docName: 'dr. Andika Pratama, Sp.JP',
    icon: '🫁',
    description: 'Heart and lung symptoms. Pain, heaviness, tightness, or shortness of breath require immediate diagnostic assessment.',
    questions: {
      questionText: 'Identify the symptom that best describes your chest discomfort:',
      options: [
        { label: 'Sharp chest pain radiating to arm or jaw', severity: 'high', desc: 'CRITICAL: Severe cardiovascular warning sign. Seek emergency care immediately!' },
        { label: 'Mild palpitations or irregular heart beats', severity: 'medium', desc: 'Requires professional cardiovascular monitoring and ECG.' },
        { label: 'Shortness of breath on mild exertion', severity: 'medium', desc: 'Could indicate respiratory fatigue or cardiovascular overload.' },
        { label: 'Persistent dry cough or minor chest congestion', severity: 'low', desc: 'Likely minor respiratory or seasonal allergy. Monitor closely.' }
      ]
    }
  },
  abdomen: {
    title: 'Gastrointestinal & Internal (Abdomen)',
    department: 'Obstetrics & Gynecology / Internal Medicine',
    docId: 'd4',
    docName: 'dr. Linda Permata, Sp.OG',
    icon: '⭐',
    description: 'Abdominal pain, cramping, bloating, acid reflux, or specialized gynecological queries.',
    questions: {
      questionText: 'Which abdominal or internal concern matches your current state?',
      options: [
        { label: 'Acute sharp pain in lower right abdomen', severity: 'high', desc: 'WARNING: Could indicate acute appendicitis. Urgent medical evaluation is critical.' },
        { label: 'Mild acid reflux, bloating, or stomach cramps', severity: 'low', desc: 'Often relates to dietary changes, mild gastritis, or indigestion.' },
        { label: 'Specialized maternity or reproductive checkup', severity: 'low', desc: 'Routine pregnancy assessment or prenatal consultation.' },
        { label: 'Persistent nausea or severe abdominal cramps', severity: 'medium', desc: 'Requires clinical consultation to check for gastrointestinal infections.' }
      ]
    }
  },
  joints: {
    title: 'Musculoskeletal & Orthopedic (Joints & Limbs)',
    department: 'Orthopedics',
    docId: 'd5',
    docName: 'dr. Rian Hidayat, Sp.OT',
    icon: '🦴',
    description: 'Bones, joints, muscles, and ligaments. Pain, swelling, stiffness, or post-injury functional limits.',
    questions: {
      questionText: 'Where and how is your joint or muscle pain affecting you?',
      options: [
        { label: 'Chronic back pain or spine stiffness', severity: 'medium', desc: 'Related to posture, lumbar stress, or structural disk issues.' },
        { label: 'Acute swelling/bruising after physical trauma', severity: 'medium', desc: 'Requires digital X-ray scan to rule out joint fractures or sprains.' },
        { label: 'Mild post-workout muscle soreness', severity: 'low', desc: 'Standard physical fatigue. Take rest, apply heat/ice, and hydrate.' },
        { label: 'Severe joint dislocation or complete loss of mobility', severity: 'high', desc: 'URGENT: High risk of permanent joint or nerve injury. Emergency stabilization required.' }
      ]
    }
  }
};

export default function SymptomChecker({ onOpenBookingWithDoctor }: SymptomCheckerProps) {
  const [activeHotspot, setActiveHotspot] = useState<HotspotId>('chest');
  const [selectedOption, setSelectedOption] = useState<QuestionOption | null>(null);

  const handleHotspotClick = (id: HotspotId) => {
    setActiveHotspot(id);
    setSelectedOption(null);
  };

  const currentData = HOTSPOTS[activeHotspot];

  return (
    <section id="symptom-checker" className="py-20 lg:py-28 bg-[#F0F5FF]/60 relative overflow-hidden">
      {/* Decorative BG Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#eef2ff_1px,transparent_1px),linear-gradient(to_bottom,#eef2ff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none opacity-80" />
      
      {/* Glowing medical cross in bg */}
      <div className="absolute -left-16 top-1/4 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -right-16 bottom-1/4 w-72 h-72 bg-indigo-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-blue-600 text-xs sm:text-sm font-bold tracking-wide">
            <Sparkles className="w-4 h-4 text-blue-500 fill-blue-500/10 animate-pulse" />
            <span>AI-ASSISTED TRIAGE & SYMPTOM SYSTEM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A192F] tracking-tight">
            Interactive Symptom Checker & Virtual Guide
          </h2>
          <p className="text-base text-slate-600 font-medium">
            Click on the clinical hotspots of our high-fidelity virtual human body to trigger rapid symptom questionnaire analysis. Identify which specialized medical treatment fits your current physical status.
          </p>
        </div>

        {/* Core Split 2-Column Layout Container */}
        <div className="bg-white/80 backdrop-blur-xl border border-slate-100 rounded-3xl shadow-xl shadow-blue-900/5 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Column: Human Body outline SVG with interactive hotspots (5 Cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-50 to-blue-50/50 p-8 flex flex-col items-center justify-center border-r border-slate-100 relative min-h-[480px]">
            <div className="absolute top-4 left-6">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Interactive Stage</span>
              <span className="text-xs font-bold text-blue-600 flex items-center gap-1 mt-0.5">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
                Select Body Hotspot
              </span>
            </div>

            {/* Futuristic Holographic Grid Backdrop */}
            <div className="absolute w-[280px] h-[360px] border border-blue-100/40 rounded-full bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none z-0" />

            {/* Human body Outline SVG */}
            <div className="relative w-48 h-96 z-10 flex items-center justify-center">
              <svg
                viewBox="0 0 200 400"
                className="w-full h-full text-slate-300 stroke-2 drop-shadow-sm filter"
              >
                {/* High-fidelity Anatomically Correct Human Body Silhouette & Skeletal Guides */}
                <g className="transition-all duration-500 hover:opacity-95">
                  {/* Head */}
                  <circle
                    cx="100"
                    cy="48"
                    r="18"
                    fill="url(#bodyGradient)"
                    stroke="#cbd5e1"
                    strokeWidth="1.5"
                  />
                  {/* Neck */}
                  <path
                    d="M 94,65 Q 100,72 106,65 L 108,76 L 92,76 Z"
                    fill="url(#bodyGradient)"
                    stroke="#cbd5e1"
                    strokeWidth="1.5"
                  />
                  {/* Main Body (Shoulders, Torso, Arms, Legs) */}
                  <path
                    d="M 92,76 
                       C 84,78 72,83 64,93 
                       C 58,100 54,113 50,138 
                       C 48,153 45,183 45,193 
                       C 45,198 52,200 54,194 
                       C 57,183 62,148 64,133 
                       C 65,126 72,123 74,128 
                       C 75,133 77,178 77,213 
                       L 72,298 
                       C 70,333 68,373 68,383 
                       C 68,388 76,388 78,383 
                       L 86,303 
                       L 95,243 
                       Q 100,246 105,243 
                       L 114,303 
                       L 122,383 
                       C 124,388 132,388 132,383 
                       C 132,373 130,333 128,298 
                       L 123,213 
                       C 123,178 125,133 126,128 
                       C 128,123 135,126 136,133 
                       C 138,148 143,183 146,194 
                       C 148,200 155,198 155,193 
                       C 155,183 152,153 150,138 
                       C 146,113 142,100 136,93 
                       C 128,83 116,78 108,76 Z"
                    fill="url(#bodyGradient)"
                    stroke="#cbd5e1"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  {/* Anatomical chest/abs lines for medical visualization styling */}
                  <path
                    d="M 85,113 Q 100,120 115,113"
                    fill="none"
                    stroke="#cbd5e1"
                    strokeWidth="1"
                    opacity="0.6"
                  />
                  <path
                    d="M 80,138 Q 100,146 120,138"
                    fill="none"
                    stroke="#cbd5e1"
                    strokeWidth="1"
                    opacity="0.5"
                  />
                  <path
                    d="M 84,168 Q 100,173 116,168"
                    fill="none"
                    stroke="#cbd5e1"
                    strokeWidth="1"
                    opacity="0.4"
                  />
                  <path
                    d="M 86,198 Q 100,201 114,198"
                    fill="none"
                    stroke="#cbd5e1"
                    strokeWidth="1"
                    opacity="0.3"
                  />
                  {/* Spine / Centerline */}
                  <line
                    x1="100"
                    y1="76"
                    x2="100"
                    y2="240"
                    stroke="#cbd5e1"
                    strokeWidth="1"
                    strokeDasharray="3 3"
                    opacity="0.5"
                  />
                </g>
                
                {/* Defs for gradient and glows */}
                <defs>
                  <linearGradient id="bodyGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#FFFFFF" />
                    <stop offset="50%" stopColor="#F8FAFC" />
                    <stop offset="100%" stopColor="#E2E8F0" />
                  </linearGradient>
                </defs>
              </svg>

              {/* HOTSPOT 1: HEAD (HTML overlay on relative parent for absolute layout accuracy) */}
              <button
                onClick={() => handleHotspotClick('head')}
                className="absolute top-[12%] left-[50%] -translate-x-1/2 -translate-y-1/2 group focus:outline-none cursor-pointer z-20"
                title="Cranio-Neurological"
              >
                <div className="relative">
                  <span className={`absolute -inset-2 rounded-full ${activeHotspot === 'head' ? 'bg-blue-600/30 animate-ping' : 'bg-transparent group-hover:bg-blue-500/20'} transition-all`} />
                  <div className={`w-4 h-4 rounded-full border-2 border-white shadow-lg transition-all ${activeHotspot === 'head' ? 'bg-blue-600 scale-125' : 'bg-slate-400 hover:bg-blue-500'}`} />
                  <div className="absolute left-6 top-1/2 -translate-y-1/2 bg-[#0A192F] text-white text-[9px] font-bold px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    Head & Brain
                  </div>
                </div>
              </button>

              {/* HOTSPOT 2: CHEST (HTML overlay) */}
              <button
                onClick={() => handleHotspotClick('chest')}
                className="absolute top-[32%] left-[50%] -translate-x-1/2 -translate-y-1/2 group focus:outline-none cursor-pointer z-20"
                title="Cardio-Respiratory"
              >
                <div className="relative">
                  <span className={`absolute -inset-2 rounded-full ${activeHotspot === 'chest' ? 'bg-blue-600/30 animate-ping' : 'bg-transparent group-hover:bg-blue-500/20'} transition-all`} />
                  <div className={`w-4 h-4 rounded-full border-2 border-white shadow-lg transition-all ${activeHotspot === 'chest' ? 'bg-blue-600 scale-125' : 'bg-slate-400 hover:bg-blue-500'}`} />
                  <div className="absolute left-6 top-1/2 -translate-y-1/2 bg-[#0A192F] text-white text-[9px] font-bold px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    Chest & Heart
                  </div>
                </div>
              </button>

              {/* HOTSPOT 3: ABDOMEN (HTML overlay) */}
              <button
                onClick={() => handleHotspotClick('abdomen')}
                className="absolute top-[46%] left-[50%] -translate-x-1/2 -translate-y-1/2 group focus:outline-none cursor-pointer z-20"
                title="Gastrointestinal"
              >
                <div className="relative">
                  <span className={`absolute -inset-2 rounded-full ${activeHotspot === 'abdomen' ? 'bg-blue-600/30 animate-ping' : 'bg-transparent group-hover:bg-blue-500/20'} transition-all`} />
                  <div className={`w-4 h-4 rounded-full border-2 border-white shadow-lg transition-all ${activeHotspot === 'abdomen' ? 'bg-blue-600 scale-125' : 'bg-slate-400 hover:bg-blue-500'}`} />
                  <div className="absolute left-6 top-1/2 -translate-y-1/2 bg-[#0A192F] text-white text-[9px] font-bold px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    Abdomen & Stomach
                  </div>
                </div>
              </button>

              {/* HOTSPOT 4: JOINTS (HTML overlay - left knee/joint) */}
              <button
                onClick={() => handleHotspotClick('joints')}
                className="absolute top-[75%] left-[40%] -translate-x-1/2 -translate-y-1/2 group focus:outline-none cursor-pointer z-20"
                title="Musculoskeletal"
              >
                <div className="relative">
                  <span className={`absolute -inset-2 rounded-full ${activeHotspot === 'joints' ? 'bg-blue-600/30 animate-ping' : 'bg-transparent group-hover:bg-blue-500/20'} transition-all`} />
                  <div className={`w-4 h-4 rounded-full border-2 border-white shadow-lg transition-all ${activeHotspot === 'joints' ? 'bg-blue-600 scale-125' : 'bg-slate-400 hover:bg-blue-500'}`} />
                  <div className="absolute -left-16 top-1/2 -translate-y-1/2 bg-[#0A192F] text-white text-[9px] font-bold px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    Joints & Bones
                  </div>
                </div>
              </button>
            </div>

            {/* Prompt Instruction */}
            <p className="text-xs text-slate-400 font-bold tracking-tight text-center mt-4 max-w-[240px] z-10">
              Selected: <span className="text-blue-600">{currentData.title}</span>
            </p>
          </div>

          {/* Right Column: Dynamic questionnaire & results (7 Cols) */}
          <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between min-h-[480px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeHotspot}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* Active Hotspot info header */}
                <div className="flex items-center gap-3.5 pb-4 border-b border-slate-100">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-2xl shadow-sm">
                    {currentData.icon}
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-extrabold tracking-widest text-blue-600 block">
                      Triage Sector
                    </span>
                    <h3 className="text-lg font-bold text-[#0A192F] tracking-tight">
                      {currentData.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-slate-500 font-medium leading-relaxed">
                  {currentData.description}
                </p>

                {/* Questionnaire Section */}
                <div className="space-y-3.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <Activity className="w-4 h-4 text-blue-500 animate-pulse" />
                    {currentData.questions.questionText}
                  </h4>

                  <div className="grid grid-cols-1 gap-2.5">
                    {currentData.questions.options.map((opt, idx) => {
                      const isSelected = selectedOption?.label === opt.label;
                      return (
                        <button
                          key={idx}
                          onClick={() => setSelectedOption(opt)}
                          className={`w-full text-left p-3.5 rounded-xl border font-semibold text-sm transition-all flex items-start justify-between gap-3 cursor-pointer ${
                            isSelected
                              ? 'bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-500/10'
                              : 'bg-slate-50 hover:bg-slate-100/80 border-slate-200/60 text-slate-700 hover:text-slate-900'
                          }`}
                        >
                          <span className="flex-1 leading-normal">{opt.label}</span>
                          <span
                            className={`px-2 py-0.5 text-[9px] uppercase font-black tracking-widest rounded flex-shrink-0 mt-0.5 ${
                              isSelected
                                ? 'bg-white/20 text-white'
                                : opt.severity === 'high'
                                ? 'bg-rose-100 text-rose-700'
                                : opt.severity === 'medium'
                                ? 'bg-amber-100 text-amber-700'
                                : 'bg-emerald-100 text-emerald-700'
                            }`}
                          >
                            {opt.severity} Risk
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Smart virtual guide result and Book CTA */}
            <div className="mt-8 pt-6 border-t border-slate-100">
              <AnimatePresence mode="wait">
                {selectedOption ? (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className={`p-5 rounded-2xl border text-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                      selectedOption.severity === 'high'
                        ? 'bg-rose-50 border-rose-100 text-rose-900'
                        : selectedOption.severity === 'medium'
                        ? 'bg-amber-50 border-amber-100 text-amber-900'
                        : 'bg-emerald-50 border-emerald-100 text-emerald-900'
                    }`}
                  >
                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center gap-1.5 font-bold">
                        {selectedOption.severity === 'high' ? (
                          <ShieldAlert className="w-5 h-5 text-rose-600" />
                        ) : (
                          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                        )}
                        <span>Diagnostic Guidance Alert</span>
                      </div>
                      <p className="font-semibold text-xs leading-relaxed opacity-90">
                        {selectedOption.desc}
                      </p>
                      <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-500 mt-2">
                        <UserCheck className="w-3.5 h-3.5 text-blue-600" />
                        <span>Recommended: {currentData.docName} ({currentData.department})</span>
                      </div>
                    </div>

                    <button
                      onClick={() => onOpenBookingWithDoctor(currentData.docId)}
                      className="px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md shadow-blue-500/10 hover:shadow-lg hover:shadow-blue-500/20 transition-all flex items-center justify-center gap-1.5 self-start sm:self-center cursor-pointer flex-shrink-0"
                    >
                      <span>Direct Book</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-blue-50/50 border border-blue-100/60 p-4 rounded-2xl text-center text-xs font-semibold text-blue-800"
                  >
                    💡 Select a symptom option above to get smart clinical recommendations and fast book.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
