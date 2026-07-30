import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, CheckCircle2, Clock, Calendar, MessageCircle, ArrowRight, Lock, Award } from 'lucide-react';
import { FIRM_INFO } from '../data/firmData';

interface OfferUrgencyCTAProps {
  onOpenSchedule: () => void;
}

export const OfferUrgencyCTA: React.FC<OfferUrgencyCTAProps> = ({ onOpenSchedule }) => {
  /* CRO PRINCIPLE: Value Anchoring + Genuine Scarcity + Risk Reversal
     - Explains exactly what the client receives in the initial case analysis
     - Anchors high value (individual audit, strategy roadmap)
     - Scarcity: Limited weekly client slots to ensure Dra. Iraci's direct personal involvement
     - Risk Reversal: Strict OAB compliance, complete confidentiality, no hidden fees
  */

  return (
    <section className="py-24 bg-gradient-to-b from-[#32100A] via-[#4A1810] to-[#240C08] text-white relative overflow-hidden border-t-2 border-[#C89A3B]/40">
      
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C89A3B]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-4xl mx-auto text-center space-y-6">
          
          {/* Scarcity Banner Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full text-xs font-bold bg-[#E5C158]/20 text-[#E5C158] border border-[#C89A3B] shadow-lg backdrop-blur-md">
            <Clock className="w-4 h-4 text-[#E5C158] animate-pulse" />
            <span className="uppercase tracking-wider">Atendimento Exclusivo • Vagas Semanais Limitadas</span>
          </div>

          {/* Value Anchor Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-display font-bold text-white leading-tight">
            Sua Causa Merece o Comando Direto de Quem É <span className="gold-gradient-text italic font-normal">Referência em Goiás</span>
          </h2>

          <p className="text-base sm:text-lg text-amber-100/90 leading-relaxed max-w-2xl mx-auto">
            Para assegurar a máxima profundidade técnica e acompanhamento rigoroso, a <strong className="text-white font-semibold">Dra. Iraci Teófilo Rosa</strong> limita o número de novas análises semanais. Garanta seu atendimento prioritário hoje.
          </p>

          {/* Value Stack Card: What's Included */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#2D0E08]/90 border border-[#C89A3B]/50 shadow-2xl backdrop-blur-md text-left my-8 space-y-6">
            <h3 className="text-xl font-serif-display font-bold text-[#E5C158] border-b border-[#C89A3B]/30 pb-4 flex items-center space-x-2">
              <Award className="w-5 h-5 text-[#E5C158]" />
              <span>O Que Está Incluso no Seu Atendimento Inicial:</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3 p-3 rounded-xl bg-[#32100A]/80 border border-[#C89A3B]/20">
                <CheckCircle2 className="w-5 h-5 text-[#E5C158] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Análise Pessoal do Caso</h4>
                  <p className="text-xs text-amber-100/70">Exame detalhado dos fatos e documentos pela própria Dra. Iraci Teófilo.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 rounded-xl bg-[#32100A]/80 border border-[#C89A3B]/20">
                <CheckCircle2 className="w-5 h-5 text-[#E5C158] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Diagnóstico de Riscos & Oportunidades</h4>
                  <p className="text-xs text-amber-100/70">Mapeamento da jurisprudência atual do TJGO, STJ e STF aplicável ao seu caso.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 rounded-xl bg-[#32100A]/80 border border-[#C89A3B]/20">
                <CheckCircle2 className="w-5 h-5 text-[#E5C158] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Plano de Ação Personalizado</h4>
                  <p className="text-xs text-amber-100/70">Estratégia clara de atuação (via extrajudicial rápida ou contencioso judicial).</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 rounded-xl bg-[#32100A]/80 border border-[#C89A3B]/20">
                <CheckCircle2 className="w-5 h-5 text-[#E5C158] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Transparência de Honorários</h4>
                  <p className="text-xs text-amber-100/70">Proposta clara em total conformidade com a Tabela da OAB/GO, sem custos ocultos.</p>
                </div>
              </div>
            </div>

            {/* Friction Reducers Bar */}
            <div className="pt-4 border-t border-[#C89A3B]/20 flex flex-wrap items-center justify-between gap-4 text-xs text-amber-200/80">
              <span className="flex items-center space-x-1.5">
                <Lock className="w-4 h-4 text-[#E5C158]" />
                <span>Sigilo Profissional Absoluto Regido pelo Estatuto da OAB</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <ShieldCheck className="w-4 h-4 text-[#E5C158]" />
                <span>Atendimento Presencial no Orion Business Complex ou Online Seguro</span>
              </span>
            </div>
          </div>

          {/* High Converting Call To Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenSchedule}
              aria-label="Agendar atendimento prioritário"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-9 py-5 rounded-2xl text-base font-bold text-[#32100A] gold-gradient-bg hover:brightness-110 shadow-2xl transition-all cursor-pointer group active:scale-[0.98]"
            >
              <Calendar className="w-5 h-5" />
              <span>Agendar Atendimento Prioritário</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href={FIRM_INFO.socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-5 rounded-2xl text-base font-bold text-emerald-300 bg-emerald-950/90 border border-emerald-500/50 hover:bg-emerald-900 transition-all shadow-xl active:scale-[0.98] cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 text-emerald-400" />
              <span>Falar no WhatsApp Direto</span>
            </a>
          </div>

          {/* Microcopy Under Buttons */}
          <p className="text-xs text-amber-200/60 pt-2 font-mono">
            ⚡ Atendimento inicial sem compromisso • Resposta ágil pela equipe jurídica
          </p>

        </div>

      </div>
    </section>
  );
};
