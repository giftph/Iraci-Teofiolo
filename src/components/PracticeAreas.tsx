import React, { useState } from 'react';
import { PRACTICE_AREAS } from '../data/firmData';
import { Scale, Briefcase, FileCheck, Building2, HeartHandshake, ShieldCheck, ChevronDown, Calendar, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface PracticeAreasProps {
  onScheduleArea: (areaTitle: string) => void;
}

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  Scale,
  Briefcase,
  FileCheck,
  Building2,
  HeartHandshake,
  ShieldCheck
};

export const PracticeAreas: React.FC<PracticeAreasProps> = ({ onScheduleArea }) => {
  const [expandedAreaIds, setExpandedAreaIds] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpandedAreaIds((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="areas-atuacao" className="py-24 bg-[#240C08] text-white relative scroll-mt-24">
      {/* Invisible anchor for backward compatibility */}
      <span id="areas" className="sr-only" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5 mb-20">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#E5C158] bg-[#32100A] px-4 py-1.5 rounded-full border border-[#C89A3B]/40 shadow-xs">
            Especialização & Atuação Estratégica
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-display font-bold text-white tracking-tight">
            Áreas de Especialidade Jurídica
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#6C2418] via-[#C89A3B] to-[#E5C158] mx-auto rounded-full" />
          <p className="text-base sm:text-lg text-white/90 font-normal leading-relaxed">
            Acompanhamento rigoroso em litígios complexos e assessoria preventiva personalizada em Goiás e perante os Tribunais Superiores.
          </p>
        </div>

        {/* Practice Areas Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-left items-stretch">
          {PRACTICE_AREAS.map((area) => {
            const IconComponent = ICON_MAP[area.iconName] || Scale;
            const isExpanded = !!expandedAreaIds[area.id];
            const contentId = `area-demandas-${area.id}`;
            const headerId = `area-btn-${area.id}`;

            return (
              <div
                key={area.id}
                className={`bg-[#2D0E08] text-white rounded-3xl p-6 sm:p-7 border-2 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden h-full ${
                  isExpanded
                    ? 'border-[#E5C158] shadow-2xl'
                    : 'border-[#C89A3B]/30 hover:border-[#E5C158] shadow-md hover:shadow-xl'
                }`}
              >
                {/* Top Accent Line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#6C2418] via-[#C89A3B] to-[#E5C158] transition-opacity ${
                    isExpanded ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}
                />

                <div className="space-y-4">
                  {/* Header Row: Icon & Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#4A1810] border border-[#C89A3B]/50 flex items-center justify-center text-[#E5C158] shadow-md group-hover:scale-105 transition-transform shrink-0">
                      <IconComponent className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>
                    {area.badge ? (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#E5C158] bg-[#32100A] px-3 py-1 rounded-full border border-[#C89A3B]/40">
                        {area.badge}
                      </span>
                    ) : (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-white/70 bg-[#32100A] px-3 py-1 rounded-full border border-[#C89A3B]/20">
                        Especialidade
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-serif-display font-bold text-white group-hover:text-[#E5C158] transition-colors leading-snug">
                      {area.title}
                    </h3>
                  </div>

                  {/* Expandable Body: Short Description & Principais Demandas */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        id={contentId}
                        role="region"
                        aria-labelledby={headerId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden space-y-3.5 pt-1"
                      >
                        {/* a) Descrição Curta */}
                        <div className="p-3.5 rounded-xl bg-[#32100A] border border-[#C89A3B]/30 text-xs sm:text-sm text-white/90 leading-relaxed">
                          <p>{area.shortDesc}</p>
                        </div>

                        {/* b) Bloco Principais Demandas */}
                        <div className="space-y-2 pt-1 border-t border-[#C89A3B]/20">
                          <span className="text-[11px] font-bold text-[#E5C158] uppercase tracking-wider block">
                            Principais Demandas:
                          </span>
                          <ul className="space-y-1.5">
                            {area.commonCases.map((item, idx) => (
                              <li key={idx} className="flex items-start space-x-2 text-xs text-white/90">
                                <CheckCircle2 className="w-4 h-4 text-[#E5C158] shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Card Action Footer: Always Visible */}
                <div className="pt-5 mt-5 border-t border-[#C89A3B]/20 flex items-center justify-between gap-2">
                  <button
                    id={headerId}
                    type="button"
                    aria-expanded={isExpanded}
                    aria-controls={contentId}
                    onClick={() => toggleExpand(area.id)}
                    className="text-xs font-bold text-[#E5C158] hover:text-white transition-colors flex items-center space-x-1.5 cursor-pointer py-1.5 px-1 group/btn focus:outline-none focus-visible:underline"
                  >
                    <span>{isExpanded ? 'Ver menos' : 'Ver detalhes'}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isExpanded ? 'rotate-180 text-[#E5C158]' : 'group-hover/btn:translate-y-0.5'
                      }`}
                    />
                  </button>

                  <button
                    type="button"
                    onClick={() => onScheduleArea(area.title)}
                    className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-bold text-[#32100A] gold-gradient-bg hover:brightness-110 shadow-md transition-all cursor-pointer active:scale-95 shrink-0"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Agendar</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

