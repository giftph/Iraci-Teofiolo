import React from 'react';
import { CLIENT_JOURNEY_STEPS } from '../data/firmData';
import { MessageSquare, FileSearch, Handshake, ShieldAlert, CheckCircle2 } from 'lucide-react';

const STEP_ICONS: Record<number, React.FC<{ className?: string }>> = {
  1: MessageSquare,
  2: FileSearch,
  3: Handshake,
  4: ShieldAlert,
  5: CheckCircle2
};

export const ClientJourney: React.FC = () => {
  return (
    <section id="jornada" className="py-24 bg-[#6C2418] text-white relative overflow-hidden">
      
      {/* Background ambient radial light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C89A3B]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5 mb-20">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#E5C158] bg-[#32100A] px-4 py-1.5 rounded-full border border-[#C89A3B]/40 shadow-sm">
            Jornada do Cliente Sem Percalços
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-display font-bold text-white tracking-tight">
            Atendimento Estruturado e Transparente
          </h2>
          <div className="w-20 h-1 gold-gradient-bg mx-auto rounded-full" />
          <p className="text-base sm:text-lg text-amber-100/90 font-normal leading-relaxed">
            Conheça os 5 passos do método de atuação da Dra. Iraci Teófilo, desenvolvido para proporcionar clareza, previsibilidade e máxima segurança jurídica.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 text-left relative">
          
          {CLIENT_JOURNEY_STEPS.map((step) => {
            const IconComp = STEP_ICONS[step.stepNumber] || CheckCircle2;
            return (
              <div
                key={step.stepNumber}
                className="bg-[#4A1810]/95 border-2 border-[#C89A3B]/40 hover:border-[#E5C158] rounded-3xl p-6 space-y-5 transition-all duration-300 shadow-2xl flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Step Number Badge */}
                <div className="flex items-center justify-between relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-[#32100A] border border-[#C89A3B]/60 flex items-center justify-center text-[#E5C158] font-bold font-serif-display text-xl group-hover:scale-105 transition-transform shadow-md">
                    {step.stepNumber}
                  </div>
                  <IconComp className="w-6 h-6 text-[#C89A3B]" />
                </div>

                <div className="space-y-2 relative z-10">
                  <span className="text-[10px] font-bold text-[#E5C158] uppercase tracking-widest block">
                    {step.subtitle}
                  </span>
                  <h3 className="text-lg font-serif-display font-bold text-white group-hover:text-[#E5C158] transition-colors leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs text-amber-100/80 leading-relaxed pt-1">
                    {step.description}
                  </p>
                </div>

                {/* Deliverable Badge */}
                <div className="pt-4 border-t border-[#C89A3B]/30 relative z-10">
                  <span className="text-[10px] font-bold text-emerald-300 uppercase tracking-widest block mb-1">
                    Entregável:
                  </span>
                  <p className="text-[11px] text-amber-200/90 font-medium leading-relaxed">
                    {step.deliverable}
                  </p>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

