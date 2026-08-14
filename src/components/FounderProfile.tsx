import React, { useState } from 'react';
import { FIRM_INFO, TRAJECTORY_MILESTONES } from '../data/firmData';
import { Award, GraduationCap, ShieldCheck, Heart, Quote, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logoSealImg from '../assets/images/official_logo_seal_1785381560321.jpg';

export const FounderProfile: React.FC = () => {
  const [openMilestoneIdx, setOpenMilestoneIdx] = useState<number | null>(4); // Default to latest milestone ("Atualidade")

  const toggleMilestone = (idx: number) => {
    setOpenMilestoneIdx((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="advogada" className="py-24 bg-[#240C08] text-white relative overflow-hidden scroll-mt-24">
      {/* Invisible anchor for backward compatibility */}
      <span id="perfil" className="sr-only" />
      {/* Decorative subtle background watermark seal */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[450px] h-[450px] opacity-[0.035] pointer-events-none select-none">
        <img
          src={logoSealImg}
          alt=""
          className="w-full h-full object-contain rounded-full border border-[#C89A3B]/30"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5 mb-20">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#E5C158] bg-[#32100A] px-4 py-1.5 rounded-full border border-[#C89A3B]/40 shadow-xs">
            Trajetória de Distinção & Ética
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-display font-bold text-white tracking-tight">
            Dra. Iraci Teófilo Rosa
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#6C2418] via-[#C89A3B] to-[#E5C158] mx-auto rounded-full" />
          <p className="text-base sm:text-lg text-white/90 font-normal leading-relaxed">
            Uma vida dedicada ao aperfeiçoamento do Direito, com postura intransigente na defesa das garantias constitucionais e na proteção dos interesses dos seus constituintes.
          </p>
        </div>

        {/* Profile Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Biography & Core Philosophy */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            <div className="bg-[#2D0E08] rounded-3xl p-8 sm:p-10 shadow-xl border border-[#C89A3B]/30 text-white space-y-6 relative overflow-hidden">
              <div className="flex items-center space-x-3 pb-4 border-b border-[#C89A3B]/20">
                <div className="w-10 h-10 rounded-xl bg-[#4A1810] text-[#E5C158] flex items-center justify-center shrink-0 border border-[#C89A3B]/40">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif-display font-bold text-white">
                    Perfil Institucional e Profissional
                  </h3>
                  <span className="text-xs text-[#E5C158] font-semibold uppercase tracking-wider block">
                    {FIRM_INFO.oabNumber} | Inscrição Regular OAB/GO
                  </span>
                </div>
              </div>

              <p className="text-white/90 leading-relaxed text-sm sm:text-base">
                Advogada inscrita sob a <strong className="text-white font-semibold">{FIRM_INFO.oabNumber}</strong>, a Dra. Iraci Teófilo Rosa construiu uma sólida reputação no cenário jurídico de Goiás. Sua atuação é caracterizada pela <strong className="text-white font-semibold">humanização das relações jurídicas</strong>, aliando escuta generosa a soluções altamente estratégicas e incisivas.
              </p>

              <p className="text-white/90 leading-relaxed text-sm sm:text-base">
                Na posição de <strong className="text-white font-semibold">Ouvidora-Geral da OAB/GO</strong> e <strong className="text-white font-semibold">Conselheira Seccional</strong>, a Dra. Iraci atua ativamente na vanguarda da defesa do cidadão e do fortalecimento da advocacia, sendo reconhecida pelo compromisso com a transparência, acolhimento e celeridade nos pleitos institucionais.
              </p>

              {/* Pillars of Practice */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start space-x-3 p-4 rounded-2xl bg-[#32100A] border border-[#C89A3B]/30 hover:border-[#E5C158] transition-colors">
                  <Heart className="w-5 h-5 text-[#E5C158] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Escuta Ativa & Humanizada</h4>
                    <p className="text-xs text-white/80 mt-0.5 leading-relaxed">Cada cliente é atendido individualmente, sem intermediários ou atendimentos padronizados.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-4 rounded-2xl bg-[#32100A] border border-[#C89A3B]/30 hover:border-[#E5C158] transition-colors">
                  <ShieldCheck className="w-5 h-5 text-[#C89A3B] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Inflexibilidade Ética</h4>
                    <p className="text-xs text-white/80 mt-0.5 leading-relaxed">Cumprimento estrito dos prazos, confidencialidade e respeito incondicional às normas da OAB.</p>
                  </div>
                </div>
              </div>

              {/* Editorial Quote Box */}
              <div className="p-6 rounded-2xl bg-[#1A0704] text-white space-y-3 border-l-4 border-[#C89A3B] mt-6 shadow-md relative overflow-hidden">
                <Quote className="w-8 h-8 text-[#C89A3B]/20 absolute right-4 bottom-4 pointer-events-none" />
                <p className="text-sm sm:text-base font-serif-display italic leading-relaxed text-white">
                  "O verdadeiro papel do advogado não é apenas litigar, mas trazer clareza ao caos, serenidade ao conflito e restaurar a dignidade do cidadão diante das adversidades da vida."
                </p>
                <p className="text-xs text-[#E5C158] font-bold tracking-widest uppercase text-right">
                  — Dra. Iraci Teófilo Rosa
                </p>
              </div>

            </div>

            {/* Academic & Professional Credentials Badge Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="bg-[#2D0E08] p-5 rounded-2xl border border-[#C89A3B]/30 shadow-xs text-center space-y-1">
                <span className="block text-2xl font-bold font-serif-display text-[#E5C158]">OAB/GO</span>
                <span className="text-xs text-white font-medium">Inscrição Regular</span>
              </div>
              <div className="bg-[#2D0E08] p-5 rounded-2xl border border-[#C89A3B]/30 shadow-xs text-center space-y-1">
                <span className="block text-2xl font-bold font-serif-display text-[#C89A3B]">Ouvidoria</span>
                <span className="text-xs text-white font-medium">Geral OAB Goiás</span>
              </div>
              <div className="bg-[#2D0E08] p-5 rounded-2xl border border-[#C89A3B]/30 shadow-xs text-center col-span-2 sm:col-span-1 space-y-1">
                <span className="block text-2xl font-bold font-serif-display text-[#E5C158]">30+ Anos</span>
                <span className="text-xs text-white font-medium">De Advocacia</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Career Milestone Timeline Accordion */}
          <div id="trajetoria" className="lg:col-span-5 text-left scroll-mt-24">
            <div className="bg-[#2D0E08] rounded-3xl p-6 sm:p-8 shadow-xl border border-[#C89A3B]/30 text-white space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#C89A3B]/20">
                <h3 className="text-xl font-serif-display font-bold text-white flex items-center space-x-2.5">
                  <Award className="w-5 h-5 text-[#E5C158]" />
                  <span>Marcos da Trajetória</span>
                </h3>
                <span className="text-xs text-[#E5C158] font-bold bg-[#32100A] px-3 py-1 rounded-full border border-[#C89A3B]/30">
                  1994 – Presente
                </span>
              </div>

              <p className="text-xs text-white/70 italic">
                Clique nos anos abaixo para visualizar o resumo histórico de cada marco:
              </p>

              <div
                className="relative pl-6 space-y-4 before:absolute before:left-2 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-[#6C2418] before:via-[#C89A3B] before:to-[#E5C158]"
                role="region"
                aria-label="Linha do tempo dos marcos profissionais"
              >
                {TRAJECTORY_MILESTONES.map((item, idx) => {
                  const isOpen = openMilestoneIdx === idx;
                  const headerId = `milestone-header-${idx}`;
                  const contentId = `milestone-content-${idx}`;

                  return (
                    <div key={idx} className="relative">
                      {/* Timeline Node */}
                      <div
                        className={`absolute -left-[31px] top-3.5 w-4 h-4 rounded-full border-2 transition-all duration-300 shadow-xs ${
                          isOpen
                            ? 'bg-[#C89A3B] border-[#E5C158] ring-4 ring-[#C89A3B]/30 scale-110'
                            : 'bg-[#32100A] border-[#C89A3B]'
                        }`}
                      />

                      {/* Milestone Button Trigger */}
                      <div
                        className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                          isOpen
                            ? 'bg-[#32100A] border-[#E5C158] shadow-md'
                            : 'bg-[#240C08] border-[#C89A3B]/20 hover:border-[#C89A3B]/60 hover:bg-[#32100A]/50'
                        }`}
                      >
                        <button
                          id={headerId}
                          type="button"
                          aria-expanded={isOpen}
                          aria-controls={contentId}
                          onClick={() => toggleMilestone(idx)}
                          className="w-full p-4 text-left flex items-start justify-between gap-3 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E5C158]"
                        >
                          <div className="space-y-1.5 min-w-0 pr-1">
                            <div className="flex items-center space-x-2">
                              <span className="text-xs font-bold text-[#E5C158] bg-[#4A1810] px-2.5 py-0.5 rounded-md font-mono border border-[#C89A3B]/40 shrink-0">
                                {item.year}
                              </span>
                              <span className="text-[10px] font-semibold text-white/70 uppercase tracking-wider truncate">
                                {item.roleType === 'institutional' ? 'Papel Institucional' : 'Prática Jurídica'}
                              </span>
                            </div>

                            <h4
                              className={`text-sm font-bold transition-colors leading-snug ${
                                isOpen ? 'text-[#E5C158]' : 'text-white'
                              }`}
                            >
                              {item.title}
                            </h4>
                          </div>

                          <div
                            className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-1 transition-transform duration-300 ${
                              isOpen ? 'bg-[#4A1810] text-[#E5C158] rotate-180' : 'bg-[#32100A] text-white/80'
                            }`}
                          >
                            <ChevronDown className="w-4 h-4 transition-transform" />
                          </div>
                        </button>

                        {/* Expandable Milestone Description */}
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              id={contentId}
                              role="region"
                              aria-labelledby={headerId}
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2, ease: 'easeInOut' }}
                              className="overflow-hidden"
                            >
                              <div className="px-4 pb-4 pt-1 border-t border-[#C89A3B]/20 text-left">
                                <p className="text-xs sm:text-sm text-white/90 leading-relaxed pt-2">
                                  {item.description}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
