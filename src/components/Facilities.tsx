import { motion } from 'motion/react';
import { FACILITIES } from '../data';
import { ArrowUpRight } from 'lucide-react';

export default function Facilities() {
  return (
    <section id="facilities" className="py-20 lg:py-24 bg-slate-950 text-white relative overflow-hidden">
      
      {/* Abstract Grid Overlays */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-bold tracking-wide uppercase">
              <span>Premium Infrastructure</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Modern Facilities for Exceptional Care
            </h2>
          </div>
          
          <p className="text-slate-400 text-sm max-w-md font-medium leading-relaxed">
            Our medical infrastructure is engineered to optimize patient outcomes. We operate ultra-modern recovery lounges, fully sterilized operating theaters, and rapid trauma intervention units.
          </p>
        </div>

        {/* Wide Landscape Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">
          {FACILITIES.map((fac, idx) => (
            <motion.div
              key={fac.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative aspect-[1.4] sm:aspect-[1.5] xl:aspect-[0.95] rounded-2xl overflow-hidden border border-white/5 bg-slate-900 shadow-xl cursor-pointer"
            >
              {/* Card Image */}
              <img
                src={fac.image}
                alt={fac.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter brightness-[0.7] contrast-[1.05] group-hover:brightness-[0.55] group-hover:scale-105 transition-all duration-700"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />

              {/* Floating Action Badge */}
              <div className="absolute top-4 right-4 p-2 bg-white/10 backdrop-blur-md rounded-full text-white/80 border border-white/10 opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300">
                <ArrowUpRight className="w-4 h-4" />
              </div>

              {/* Clean White Overlay Aligned at Bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-5 space-y-1.5 z-10">
                <div className="w-8 h-1 bg-blue-500 rounded-full group-hover:w-16 transition-all duration-500" />
                <h3 className="text-base font-extrabold tracking-tight text-white group-hover:text-blue-400 transition-colors">
                  {fac.name}
                </h3>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                  Fully Accredited Room
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
