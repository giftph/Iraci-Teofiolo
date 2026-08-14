import React, { useState } from 'react';
import { CLIENT_JOURNEY_STEPS } from '../data/firmData';
import { MessageSquare, FileSearch, Handshake, ShieldAlert, CheckCircle2, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const STEP_ICONS: Record<number, React.FC<{ className?: string }>> = {
  1: MessageSquare,
  2: FileSearch,
  3: Handshake,
  4: ShieldAlert,
  5: CheckCircle2
};

export const ClientJourney: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(1); // Default step 1 expanded

  const toggleStep = (stepNumber: number) => {
    setActiveStep((prev) => (prev === stepNumber ? null : stepNumber));
  };

  return (
    <section id="jornada" className="py-24 bg-[#6C2418] text-white relative overflow-hidden scroll-mt-24">
      
      {/* Background ambient radial light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C89A3B]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5 mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#E5C158] bg-[#32100A] px-4 py-1.5 rounded-full border border-[#C89A3B]/40 shadow-sm">
            Jornada do Cliente Sem Percalços
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-display font-bold text-white tracking-tight">
            Atendimento Estruturado e Transparente
          </h2>
          <div className="w-20 h-1 gold-gradient-bg mx-auto rounded-full" />
          <p className="text-base sm:text-lg text-white/90 font-normal leading-relaxed">
            Conheça os 5 passos do método de atuação da Dra. Iraci Teófilo, desenvolvido para proporcionar clareza, previsibilidade e máxima segurança jurídica.
          </p>
        </div>

        {/* 5 Steps Accordion List */}
        <div className="space-y-4 text-left" role="region" aria-label="Passos da Jornada do Cliente">
          {CLIENT_JOURNEY_STEPS.map((step) => {
            const isOpen = activeStep === step.stepNumber;
            const IconComp = STEP_ICONS[step.stepNumber] || CheckCircle2;
            const headerId = `journey-header-${step.stepNumber}`;
            const contentId = `journey-content-${step.stepNumber}`;

            return (
              <div
                key={step.stepNumber}
                className={`bg-[#4A1810]/95 border-2 rounded-2xl sm:rounded-3xl transition-all duration-300 overflow-hidden shadow-xl ${
                  isOpen
                    ? 'border-[#E5C158] bg-[#4A1810] shadow-2xl'
                    : 'border-[#C89A3B]/40 hover:border-[#C89A3B]'
                }`}
              >
                {/* Header (Always Visible) */}
                <button
                  id={headerId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => toggleStep(step.stepNumber)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-[#32100A]/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E5C158] cursor-pointer"
                >
                  <div className="flex items-center space-x-4 sm:space-x-5 min-w-0">
                    {/* Number Badge */}
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#32100A] border border-[#C89A3B]/60 flex items-center justify-center text-[#E5C158] font-bold font-serif-display text-xl sm:text-2xl shadow-md shrink-0">
                      {step.stepNumber}
                    </div>

                    <div className="space-y-0.5 min-w-0">
                      <span className="text-[10px] sm:text-xs font-bold text-[#E5C158] uppercase tracking-widest block">
                        {step.subtitle}
                      </span>
                      <h3 className="text-base sm:text-xl font-serif-display font-bold text-white leading-snug">
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 shrink-0">
                    <IconComp className="w-5 h-5 text-[#E5C158] hidden sm:block" />
                    <div
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border border-[#C89A3B]/50 transition-transform duration-300 ${
                        isOpen ? 'bg-[#32100A] text-[#E5C158] rotate-180' : 'bg-[#32100A]/60 text-white'
                      }`}
                    >
                      <ChevronDown className="w-5 h-5 transition-transform" />
                    </div>
                  </div>
                </button>

                {/* Expandable Body: Description & Deliverable */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={contentId}
                      role="region"
                      aria-labelledby={headerId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-2 space-y-4 border-t border-[#C89A3B]/20 text-left">
                        <p className="text-sm sm:text-base text-white/90 leading-relaxed pt-2">
                          {step.description}
                        </p>

                        <div className="p-4 rounded-2xl bg-[#32100A] border border-[#C89A3B]/40 flex items-start space-x-3 text-left">
                          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                          <div className="space-y-0.5">
                            <span className="text-[10px] font-bold text-emerald-300 uppercase tracking-widest block">
                              Entregável Garantido:
                            </span>
                            <p className="text-xs sm:text-sm text-white font-medium leading-relaxed">
                              {step.deliverable}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

