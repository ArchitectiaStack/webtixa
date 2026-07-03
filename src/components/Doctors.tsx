import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Star, Calendar, FileText, Award, MoveRight, Eye } from 'lucide-react';
import { DOCTORS } from '../data';

interface DoctorsProps {
  onOpenBookingWithDoctor: (doctorId: string) => void;
}

export default function Doctors({ onOpenBookingWithDoctor }: DoctorsProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  
  // Custom cursor follower tracking states
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHoveringSlider, setIsHoveringSlider] = useState(false);
  const [showToast, setShowToast] = useState<string | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    // Calculate cursor position relative to the slider container
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const cardWidth = 340; // width + gap
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      sliderRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const handleReadPublications = (docName: string) => {
    setShowToast(`Opening medical publications portfolio for ${docName}...`);
    setTimeout(() => {
      setShowToast(null);
    }, 3000);
  };

  return (
    <section id="doctors" className="py-20 lg:py-28 bg-white border-t border-b border-slate-100 relative overflow-hidden">
      
      {/* Decorative BG Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Area: Text description and layout indicators (4 Cols) */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
            <div className="space-y-2.5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 border border-blue-100/60 rounded-full text-blue-600 text-xs font-bold tracking-wide">
                <Award className="w-3.5 h-3.5" />
                <span>MEET OUR MEDICAL ELITE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A192F] tracking-tight leading-tight">
                Meet Our Experts with Cinematic Reveal
              </h2>
            </div>

            <p className="text-slate-600 leading-relaxed text-sm font-medium">
              Hover over our senior medical specialists to swipe open clinical profiles, available weekly consult slots, and authored medical journal articles. Slide or drag the row to explore our entire medical board.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row lg:flex-col gap-4">
              <button
                onClick={() => onOpenBookingWithDoctor('')}
                className="px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md shadow-blue-500/10 hover:shadow-lg transition-all text-center cursor-pointer flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule Consultation</span>
              </button>

              {/* Slider Controllers */}
              <div className="flex items-center gap-2.5 self-center sm:self-start lg:self-start">
                <button
                  onClick={() => scroll('left')}
                  className="p-3 rounded-xl border border-slate-200/60 bg-white hover:bg-slate-50 text-slate-700 shadow-sm transition-colors cursor-pointer"
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scroll('right')}
                  className="p-3 rounded-xl border border-slate-200/60 bg-white hover:bg-slate-50 text-slate-700 shadow-sm transition-colors cursor-pointer"
                  aria-label="Scroll right"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="hidden lg:block border-t border-slate-100 pt-6">
              <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest block mb-2">Diagnostic Guidelines</span>
              <p className="text-xs text-slate-400 font-medium">
                All senior clinical consultants are actively board certified and hold active clinical privileges globally.
              </p>
            </div>
          </div>

          {/* Right Area: Slidable Doctor Cards with Slide-to-Reveal (8 Cols) */}
          <div 
            className="lg:col-span-8 overflow-hidden relative cursor-none"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHoveringSlider(true)}
            onMouseLeave={() => setIsHoveringSlider(false)}
          >
            {/* Custom Circular Cursor Follower inside the slider region */}
            <AnimatePresence>
              {isHoveringSlider && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                  className="absolute pointer-events-none z-30 w-16 h-16 rounded-full border-2 border-blue-500/60 bg-blue-500/10 flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
                  style={{
                    left: cursorPos.x,
                    top: cursorPos.y,
                  }}
                >
                  <span className="text-[8px] font-black uppercase text-blue-600 tracking-widest whitespace-nowrap">
                    Drag / Swipe
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

            <div
              ref={sliderRef}
              className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 scrollbar-none"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {DOCTORS.map((doc) => (
                <div
                  key={doc.id}
                  className="w-[300px] flex-shrink-0 snap-start bg-slate-50 border border-slate-100 rounded-3xl overflow-hidden group transition-all duration-500 relative"
                >
                  {/* Image Container with scale and grayscale on hover */}
                  <div className="relative aspect-[4/5] overflow-hidden bg-slate-200">
                    <img
                      src={doc.image}
                      alt={doc.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top filter grayscale-0 group-hover:grayscale group-hover:scale-110 transition-all duration-700 ease-out"
                    />

                    {/* Gradient shading */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/50 via-transparent to-transparent opacity-80" />

                    {/* Standard Available Top Badge */}
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md border border-slate-100 rounded-full px-3 py-1 flex items-center gap-1.5 shadow-sm">
                      <span className={`w-1.5 h-1.5 rounded-full ${doc.available ? 'bg-emerald-500 animate-pulse' : 'bg-amber-400'}`} />
                      <span className="text-[9px] font-black text-slate-800 uppercase tracking-widest">
                        {doc.available ? 'Available Today' : 'On Consult'}
                      </span>
                    </div>

                    {/* CINEMATIC SLIDE-TO-REVEAL OVERLAY MASK */}
                    <div className="absolute inset-0 bg-[#0A192F]/95 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out p-6 flex flex-col justify-between z-20">
                      
                      {/* Top content of swipe overlay */}
                      <div className="space-y-4">
                        <span className="text-[9px] font-black text-blue-400 uppercase tracking-widest block pb-1 border-b border-white/10">
                          Consultation Slot
                        </span>
                        
                        <div className="space-y-1.5">
                          <span className="text-xs font-semibold text-slate-400 block">Weekly Available Hours:</span>
                          <p className="text-xs font-bold text-white leading-normal bg-white/5 p-2.5 rounded-xl border border-white/5">
                            {doc.schedule}
                          </p>
                        </div>

                        <div className="space-y-1">
                          <span className="text-xs font-semibold text-slate-400 block">Clinical Experience:</span>
                          <span className="text-xs font-bold text-emerald-400 block">
                            {doc.experience} of active practice
                          </span>
                        </div>
                      </div>

                      {/* Bottom action content of swipe overlay */}
                      <div className="space-y-3">
                        <button
                          onClick={() => handleReadPublications(doc.name)}
                          className="w-full py-2.5 bg-white/10 hover:bg-white/20 border border-white/10 text-white font-bold text-[10px] uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
                        >
                          <FileText className="w-3.5 h-3.5 text-blue-400" />
                          <span>Medical Publications</span>
                        </button>

                        <button
                          onClick={() => onOpenBookingWithDoctor(doc.id)}
                          className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-[10px] uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                        >
                          <Calendar className="w-3.5 h-3.5" />
                          <span>Direct Quick-Book</span>
                        </button>
                      </div>

                    </div>
                  </div>

                  {/* Info Wrapper Box below image (Shows in standard mode) */}
                  <div className="p-5 bg-white border-t border-slate-100 space-y-3">
                    <div>
                      <h3 className="text-base font-extrabold text-[#0A192F] truncate">
                        {doc.name}
                      </h3>
                      <p className="text-xs font-bold text-blue-600 truncate mt-0.5">
                        {doc.specialty}
                      </p>
                    </div>

                    <div className="flex items-center justify-between text-xs pt-1 border-t border-slate-50">
                      <div className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                        <span className="font-extrabold text-[#0A192F]">{doc.rating}</span>
                        <span className="text-slate-400">({doc.reviewsCount} reviews)</span>
                      </div>
                      
                      <span className="text-slate-400 font-bold">Exp: {doc.experience}</span>
                    </div>

                    {/* Small hover hint indicator */}
                    <div className="text-[10px] text-blue-600 font-extrabold flex items-center justify-center gap-1 opacity-80 group-hover:text-blue-700 transition-colors pt-1">
                      <span>Hover for availability & papers</span>
                      <MoveRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Floating interactive toast notifications for publications */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-6 right-6 bg-[#0A192F] text-white border border-blue-900 px-5 py-3.5 rounded-2xl shadow-2xl z-50 text-xs font-semibold flex items-center gap-2.5 max-w-sm"
          >
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>{showToast}</span>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
