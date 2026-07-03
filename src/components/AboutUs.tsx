import { motion } from 'motion/react';
import { CheckCircle2, Award, Plus, Compass } from 'lucide-react';

export default function AboutUs() {
  const bulletPoints = [
    { title: 'The Science Behind Patient Recovery', desc: 'Clinical care pathways backstopped by scientific evidence and multi-disciplinary boards.' },
    { title: 'Advanced Diagnostic Technology Tools', desc: 'Deploying high-resolution imaging and smart lab diagnostic engines for extreme precision.' },
    { title: 'Compassionate Care Tailored To You', desc: 'Treating the whole patient with individualized warmth, clinical hospitality, and respect.' },
    { title: 'Available 24/7 For Emergency Services', desc: 'Our emergency units and diagnostic labs operate constantly to address trauma cases instantly.' }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FFFFFF] relative overflow-hidden">
      
      {/* Decorative Large Background Medical Cross */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 opacity-[0.02] pointer-events-none select-none -z-10">
        <Plus className="w-[500px] h-[500px] text-slate-950 stroke-[1]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Creative Multi-Image Grid with overlaps */}
          <div className="lg:col-span-6 relative">
            
            <div className="grid grid-cols-12 gap-4 relative">
              
              {/* 1. Large main building shot */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="col-span-8 rounded-[32px] overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-slate-100 z-10"
              >
                <img
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800"
                  alt="Modern architectural clinical building"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
              </motion.div>

              {/* 2. Overlapping smaller clinical consulting shot */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="col-span-6 absolute -bottom-8 -right-4 md:-right-8 rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] bg-slate-100 z-20"
              >
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=400"
                  alt="Senior specialist discussing clinical diagnosis with female resident"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                />
              </motion.div>

              {/* 3. Small lifestyle clinic detail shot (overlapping top right) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="col-span-10 absolute -top-8 right-12 rounded-2xl overflow-hidden shadow-2xl border-2 border-white aspect-square bg-slate-50 z-20 hidden sm:block"
              >
                <img
                  src="https://i.ibb.co/8D6yJgMN/Allergy-Blood-Test-Price-Cost-List-Report-and-Near-Me-in-Pune.jpg"
                  alt="High tech medical radiology equipment"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
              </motion.div>
            </div>

            {/* Glowing floated credentials tag */}
            <div className="absolute -bottom-12 left-4 bg-blue-600 text-white p-5 rounded-2xl shadow-2xl shadow-blue-600/20 max-w-xs z-30">
              <p className="text-2xl font-black font-mono leading-none">100%</p>
              <p className="text-[10px] font-black uppercase tracking-wider text-blue-100 mt-1">
                Accredited Medical Center
              </p>
              <p className="text-[10px] text-blue-100/85 mt-1 leading-relaxed">
                Evaluated and accredited for safety standards, patient records, and high surgical success rate.
              </p>
            </div>

          </div>

          {/* Right Column: Title badge, Heading, Bullet lists & CTA */}
          <div className="lg:col-span-6 space-y-7 mt-12 lg:mt-0">
            
            {/* Text badge "ABOUT OUR CLINIC" */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 border border-blue-100/50 rounded-full text-blue-600 text-xs font-bold tracking-wide">
              <span>ABOUT OUR CLINIC</span>
            </div>

            {/* Heading "Leading The Future Of Medical Excellence" */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A192F] tracking-tight leading-tight">
              Leading The Future Of Medical Excellence
            </h2>

            {/* Paragraph summary */}
            <p className="text-slate-500 leading-relaxed font-medium text-sm">
              With decades of combined experience, our medical team brings specialized clinical knowledge directly to your family's healthcare journey. We combine modern diagnostic infrastructure with patient comfort to ensure a high-quality recovery ecosystem.
            </p>

            {/* Bullet list with blue checkmark circles */}
            <div className="space-y-4 pt-2">
              {bulletPoints.map((bp, idx) => (
                <div key={idx} className="flex gap-3.5 items-start group">
                  <div className="p-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <CheckCircle2 className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-sm font-bold text-[#0A192F] tracking-tight">{bp.title}</h4>
                    <p className="text-xs text-slate-400 font-medium leading-relaxed">{bp.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Learn More Button */}
            <div className="pt-4">
              <button
                onClick={() => {
                  const srv = document.getElementById('services');
                  if (srv) srv.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3.5 bg-slate-55 bg-[#0A192F] hover:bg-[#122b52] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Learn More About Us</span>
                <span>&rarr;</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
