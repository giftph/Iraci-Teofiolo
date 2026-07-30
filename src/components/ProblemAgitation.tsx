import React from 'react';
import { motion } from 'motion/react';
import { AlertTriangle, Clock, Lock, ShieldAlert, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { FIRM_INFO } from '../data/firmData';

interface ProblemAgitationProps {
  onOpenSchedule: () => void;
}

export const ProblemAgitation: React.FC<ProblemAgitationProps> = ({ onOpenSchedule }) => {
  /* CRO PRINCIPLE: Problem Agitation (Pain -> Consequences -> Instant Relief)
     Before presenting the solution, we tap into the user's emotional tension:
     - Fear of losing hard-earned assets or rights
     - Frustration with uncommunicative or unresponsive lawyers
     - Anxiety over tight court deadlines or legal uncertainty
  */

  const painPoints = [
    {
      icon: Clock,
      title: "Seu processo está parado ou sem respostas?",
      description: "A falta de retorno do seu advogado gera ansiedade e atrasa a solução do seu problema, deixando seu patrimônio e sua família em risco por meses."
    },
    {
      icon: ShieldAlert,
      title: "Medo de perder bens, direitos ou patrimônio?",
      description: "Em matérias cíveis, familiares, imobiliárias ou administrativas, decisões sem estratégia técnica minuciosa causam prejuízos financeiros irreversíveis."
    },
    {
      icon: Lock,
      title: "Atendimento impessoal em grandes escritórios?",
      description: "Ser tratado como apenas 'mais um número de processo' por estagiários e advogados juniores sem a presença da titular responsável."
    }
  ];

  return (
    <section className="py-20 bg-[#FAF7F2] dark:bg-[#200A06] relative overflow-hidden transition-colors border-b border-amber-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* CRO Headline: Framing the agitation */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-rose-100 dark:bg-rose-950/80 text-rose-800 dark:text-rose-300 border border-rose-300 dark:border-rose-800 shadow-sm">
            <AlertTriangle className="w-4 h-4 text-rose-600 dark:text-rose-400" />
            <span className="uppercase tracking-wider">Identificou Algum Desses Problemas?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-display font-bold text-[#32100A] dark:text-white leading-tight">
            Não Deixe Seus Direitos nas Mãos do Acaso ou da <span className="text-[#6C2418] dark:text-[#E5C158] italic font-normal">Demora Burocrática</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-700 dark:text-amber-100/80 leading-relaxed">
            No Direito, o tempo corre contra você. Um prazo perdido ou uma tese jurídica fraca podem custar anos de esforço e o patrimônio de toda uma vida.
          </p>
        </div>

        {/* 3 Pain Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {painPoints.map((point, idx) => {
            const IconComp = point.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-white dark:bg-[#2D0E08] border border-rose-200/80 dark:border-rose-900/40 shadow-xl hover:shadow-2xl transition-all relative overflow-hidden group text-left"
              >
                <div className="w-14 h-14 rounded-2xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <IconComp className="w-7 h-7 text-rose-700 dark:text-rose-400" />
                </div>

                <h3 className="text-xl font-serif-display font-bold text-[#32100A] dark:text-white mb-3">
                  {point.title}
                </h3>

                <p className="text-sm text-gray-600 dark:text-amber-100/70 leading-relaxed">
                  {point.description}
                </p>

                <div className="mt-6 pt-4 border-t border-rose-100 dark:border-rose-900/30 flex items-center text-xs font-semibold text-rose-700 dark:text-rose-300">
                  <span>Alto risco de prejuízo sem intervenção</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Solution Bridge: Direct relief with Dra. Iraci Teófilo */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#4A1810] via-[#6C2418] to-[#32100A] text-white border-2 border-[#C89A3B] shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4 text-left">
              <span className="inline-flex items-center space-x-2 text-xs font-bold text-[#E5C158] uppercase tracking-widest">
                <ShieldCheck className="w-4 h-4" />
                <span>A Solução Definitiva & Atendimento Direto</span>
              </span>

              <h3 className="text-2xl sm:text-3xl font-serif-display font-bold text-white leading-snug">
                Recupere a Tranquilidade com Quem Tem <span className="gold-gradient-text italic font-normal">30+ Anos de Autoridade Inabalável</span>
              </h3>

              <p className="text-sm sm:text-base text-amber-100/90 leading-relaxed max-w-2xl">
                Diferente de grandes bancas impessoais, na <strong className="text-white font-semibold">Sociedade Individual de Advocacia Dra. Iraci Teófilo Rosa</strong>, o seu caso é analisado e conduzido pessoalmente por advogada titular e Ouvidora-Geral da OAB/GO.
              </p>

              {/* Frictionless Trust Badges */}
              <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-amber-200/90">
                <span className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E5C158]" />
                  <span>Diagnóstico Estratégico em 24h</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E5C158]" />
                  <span>Comunicação Clara Sem Jargões</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E5C158]" />
                  <span>Sigilo Absoluto Garantido</span>
                </span>
              </div>
            </div>

            {/* High Converting Primary CTA Button */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-end space-y-2">
              <button
                onClick={onOpenSchedule}
                aria-label="Agendar análise do meu caso agora"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-5 rounded-2xl text-base font-bold text-[#32100A] gold-gradient-bg hover:brightness-110 shadow-2xl transition-all cursor-pointer group active:scale-[0.98]"
              >
                <span>Quero Analisar Meu Caso</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <span className="text-[11px] text-amber-200/70 font-medium">
                ⚡ Resposta em menos de 15 minutos via WhatsApp
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
