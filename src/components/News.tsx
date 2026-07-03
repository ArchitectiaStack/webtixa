import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Calendar, Clock, X, HeartPulse } from 'lucide-react';
import { ARTICLES } from '../data';
import { Article } from '../types';

export default function News() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  return (
    <section id="news" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1 px-3 py-1 bg-rose-50 border border-rose-100 rounded-full text-rose-700 text-xs font-bold">
              <span>Articles & Advice</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Health News & Tips
            </h2>
          </div>
          
          <button
            onClick={() => setSelectedArticle(ARTICLES[0])}
            className="group inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-700 text-sm font-bold tracking-wide cursor-pointer transition-colors"
          >
            <span>See All Articles</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* 4-Column Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ARTICLES.map((art, idx) => (
            <motion.div
              key={art.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => setSelectedArticle(art)}
              className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer flex flex-col group h-full"
            >
              {/* Landscape cover photo */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 flex-shrink-0">
                <img
                  src={art.image}
                  alt={art.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Text Wrapper & Details */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  {/* Category Tag Badge */}
                  <span className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 rounded-lg text-[10px] font-extrabold tracking-wider uppercase">
                    {art.category}
                  </span>

                  {/* Bold Article Title (max 2-3 lines) */}
                  <h3 className="text-sm sm:text-base font-extrabold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors line-clamp-3">
                    {art.title}
                  </h3>
                </div>

                {/* Footer stamp (Muted Date) */}
                <div className="flex items-center justify-between text-[11px] text-slate-400 font-semibold pt-3 border-t border-slate-50">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{art.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{art.readTime}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Interactive Read Article Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <div id="article-modal-backdrop" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <motion.div
              id="article-modal-content"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100 max-h-[90vh] flex flex-col"
            >
              {/* Header Image */}
              <div className="relative aspect-[16/9] w-full bg-slate-100 flex-shrink-0">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="absolute top-4 right-4 p-2 bg-slate-900/40 text-white hover:bg-slate-900/60 rounded-full transition-colors backdrop-blur-md cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-bold uppercase tracking-wider">
                    {selectedArticle.category}
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="overflow-y-auto p-6 space-y-4 flex-1">
                <div className="flex items-center gap-4 text-xs font-semibold text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    <span>{selectedArticle.date}</span>
                  </div>
                  <span>•</span>
                  <span>{selectedArticle.readTime}</span>
                  <span>•</span>
                  <span>By Webtixa Medical Editorial</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
                  {selectedArticle.title}
                </h3>

                <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                  <p className="font-semibold text-slate-800">
                    {selectedArticle.excerpt}
                  </p>
                  
                  <div className="p-4 bg-blue-50 border-l-4 border-blue-600 rounded-r-xl flex gap-3">
                    <HeartPulse className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div className="text-xs sm:text-sm text-blue-800 space-y-1">
                      <p className="font-bold">Medical Disclaimer:</p>
                      <p className="font-medium">The content provided in this article is for general educational and informational purposes only. It should not be treated as a substitute for professional clinical consulting, medical screening, diagnosis, or customized treatment.</p>
                    </div>
                  </div>

                  <h4 className="text-base font-bold text-slate-950 pt-2">Key Health Action Steps:</h4>
                  <ul className="list-disc list-inside space-y-1 pl-2 text-sm text-slate-600">
                    <li>Consult with a board-certified clinical expert regularly for checkups.</li>
                    <li>Avoid self-diagnosis and unregulated over-the-counter pharmacology.</li>
                    <li>Ensure dietary choices and lifestyle routines align with clinical screening reports.</li>
                    <li>Maintain an active lifestyle with moderate cardiovascular routines.</li>
                  </ul>
                  
                  <p className="text-sm font-medium">
                    To seek professional diagnostic assessments and speak to our board-certified specialist physicians, you can register through our online portal easily.
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedArticle(null)}
                  className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md transition-colors cursor-pointer"
                >
                  Close Article
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
