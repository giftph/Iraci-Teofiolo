import React, { useState } from 'react';
import { PRACTICE_AREAS } from '../data/firmData';
import { PracticeArea } from '../types';
import { Scale, Briefcase, FileCheck, Building2, HeartHandshake, ShieldCheck, ChevronRight, Calendar, CheckCircle2, X, ArrowUpRight } from 'lucide-react';

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
  const [selectedArea, setSelectedArea] = useState<PracticeArea | null>(null);

  return (
    <section id="areas" className="py-24 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5 mb-20">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#6C2418] bg-[#F5F0E8] px-4 py-1.5 rounded-full border border-[#6C2418]/20 shadow-xs">
            Especialização & Atuação Estratégica
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-display font-bold text-[#32100A] tracking-tight">
            Áreas de Especialidade Jurídica
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#6C2418] via-[#C89A3B] to-[#E5C158] mx-auto rounded-full" />
          <p className="text-base sm:text-lg text-gray-700 font-normal leading-relaxed">
            Acompanhamento rigoroso em litígios complexos e assessoria preventiva personalizada em Goiás e perante os Tribunais Superiores.
          </p>
        </div>

        {/* Practice Areas Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {PRACTICE_AREAS.map((area) => {
            const IconComponent = ICON_MAP[area.iconName] || Scale;
            return (
              <div
                key={area.id}
                className="bg-white rounded-3xl p-7 sm:p-8 border-2 border-[#6C2418]/10 hover:border-[#C89A3B] shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Top Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#6C2418] via-[#C89A3B] to-[#E5C158] opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="space-y-5">
                  {/* Header Row */}
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-[#6C2418] border border-[#C89A3B]/50 flex items-center justify-center text-[#E5C158] shadow-md group-hover:scale-105 transition-transform">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    {area.badge && (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#6C2418] bg-[#F5F0E8] px-3 py-1 rounded-full border border-[#6C2418]/20">
                        {area.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Short Description */}
                  <div className="space-y-2">
                    <h3 className="text-2xl font-serif-display font-bold text-[#32100A] group-hover:text-[#6C2418] transition-colors">
                      {area.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {area.shortDesc}
                    </p>
                  </div>

                  {/* Common Cases Snapshot */}
                  <div className="space-y-2 pt-3 border-t border-gray-100">
                    <span className="text-[11px] font-bold text-[#6C2418] uppercase tracking-wider block">
                      Principais Demandas:
                    </span>
                    <ul className="space-y-1.5">
                      {area.commonCases.slice(0, 2).map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-xs text-gray-600">
                          <CheckCircle2 className="w-4 h-4 text-[#C89A3B] shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedArea(area)}
                    className="text-xs font-bold text-[#6C2418] hover:text-[#C89A3B] transition-colors flex items-center space-x-1 cursor-pointer group/btn"
                  >
                    <span>Ver detalhes</span>
                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => onScheduleArea(area.title)}
                    className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-bold text-[#32100A] gold-gradient-bg hover:brightness-110 shadow-md transition-all cursor-pointer"
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

      {/* Detailed Modal for Selected Area */}
      {selectedArea && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-7 sm:p-9 shadow-2xl border-2 border-[#C89A3B]/50 relative text-left space-y-6 max-h-[90vh] overflow-y-auto">
            
            {/* Close button */}
            <button
              onClick={() => setSelectedArea(null)}
              className="absolute top-5 right-5 p-2 text-gray-400 hover:text-[#6C2418] rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Header */}
            <div className="space-y-2 pr-8">
              <span className="text-xs font-bold text-[#C89A3B] uppercase tracking-wider block">
                Especialidade Jurídica
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif-display font-bold text-[#32100A]">
                {selectedArea.title}
              </h3>
            </div>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              {selectedArea.fullDesc}
            </p>

            {/* All Common Cases List */}
            <div className="space-y-3 bg-[#FAF8F5] p-5 rounded-2xl border border-[#6C2418]/15">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#6C2418]">
                Ações e Atuações Frequentes
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedArea.commonCases.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-xs text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-[#C89A3B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex items-center justify-end pt-2">
              <button
                onClick={() => {
                  const areaTitle = selectedArea.title;
                  setSelectedArea(null);
                  onScheduleArea(areaTitle);
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-[#32100A] gold-gradient-bg hover:brightness-110 shadow-lg cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Agendar Consulta Nesta Área</span>
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

