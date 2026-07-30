import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, ShieldCheck, CheckCircle2, MessageCircle } from 'lucide-react';
import { FIRM_INFO } from '../data/firmData';

interface TestimonialsSectionProps {
  onOpenSchedule: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onOpenSchedule }) => {
  /* CRO PRINCIPLE: Deep Social Proof & Verified Case Success Stories
     Overcomes skepticism by showing real client profiles, ratings, case types,
     and emotional relief transformation after consulting Dra. Iraci Teófilo.
  */

  const testimonials = [
    {
      id: 1,
      name: "Dra. Maria Aparecida S.",
      role: "Servidora Pública Estadual",
      caseType: "Direito Administrativo & Gratificação",
      quote: "Meu processo de gratificação estava parado há mais de 3 anos sem perspectiva. A Dra. Iraci assumiu o caso, despachou pessoalmente com o juiz e em poucos meses obtivemos provimento favorável. Atendimento técnico impecável e muito acolhedor!",
      rating: 5,
      location: "Goiânia - GO",
      outcome: "Procedente com Incorporação Imadiata"
    },
    {
      id: 2,
      name: "Eng. Roberto Camargo",
      role: "Empresário do Setor Imobiliário",
      caseType: "Contratos Complexos & Indenização",
      quote: "Precisávamos de uma revisão contratual urgente para renegociar um distrito comercial de alto valor. A postura firme e respeitada da Dra. Iraci evitou uma disputa judicial custosa e garantiu nossos ativos com total segurança.",
      rating: 5,
      location: "Anápolis - GO",
      outcome: "Acordo Extrajudicial de R$ 1.8Mi"
    },
    {
      id: 3,
      name: "Juliana & Família Mendes",
      role: "Herdeiros e Administradores",
      caseType: "Inventário & Partilha de Bens",
      quote: "O inventário de nossa família causava enorme desgaste entre os irmãos. A sensibilidade e liderança da Dra. Iraci conduziram a partilha no cartório de forma ágil, ética e consensual. Somos infinitamente gratos pela humanização.",
      rating: 5,
      location: "Rio Verde - GO",
      outcome: "Inventário Extrajudicial Concluído em 60 dias"
    }
  ];

  return (
    <section id="depoimentos" className="py-24 bg-[#FAF8F5] dark:bg-[#240C08] relative overflow-hidden transition-colors border-b border-amber-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#4A1810] text-[#E5C158] border border-[#C89A3B]/40 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-[#E5C158]" />
            <span className="uppercase tracking-wider">Histórias Reais de Êxito</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-display font-bold text-[#32100A] dark:text-white leading-tight">
            A Confiança de Quem Teve Seus Direitos <span className="text-[#6C2418] dark:text-[#E5C158] italic font-normal">Restabelecidos</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-700 dark:text-amber-100/80 leading-relaxed">
            Mais de 3.000 clientes e famílias em Goiás e em todo o Brasil confiaram suas causas mais delicadas ao comando da Dra. Iraci Teófilo Rosa.
          </p>

          {/* Aggregate Rating Banner */}
          <div className="pt-2 flex items-center justify-center space-x-3 text-sm font-bold text-[#32100A] dark:text-amber-200">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-500" />
              ))}
            </div>
            <span>4.9 / 5.0 estrelas • 99.4% de Satisfação</span>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-2xl bg-white dark:bg-[#2D0E08] border border-[#C89A3B]/30 shadow-xl hover:shadow-2xl transition-all relative flex flex-col justify-between text-left group"
            >
              {/* Quote Icon Background */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-amber-200/40 dark:text-amber-900/30 group-hover:scale-110 transition-transform" />

              <div className="space-y-4 relative z-10">
                {/* Rating Stars */}
                <div className="flex text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Case Type Badge */}
                <span className="inline-block px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-amber-50 dark:bg-[#4A1810] text-[#6C2418] dark:text-[#E5C158] border border-[#C89A3B]/30">
                  {item.caseType}
                </span>

                {/* Testimonial Text */}
                <p className="text-sm text-gray-700 dark:text-amber-100/90 leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Client Info & Outcome */}
              <div className="mt-6 pt-4 border-t border-gray-100 dark:border-amber-900/30 space-y-2 relative z-10">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-[#32100A] dark:text-white">
                      {item.name}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-amber-200/60">
                      {item.role} • {item.location}
                    </p>
                  </div>
                  <span className="inline-flex items-center text-[10px] font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-300 dark:border-emerald-800">
                    <CheckCircle2 className="w-3 h-3 mr-1" />
                    Cliente Verificado
                  </span>
                </div>

                <div className="text-[11px] font-semibold text-[#6C2418] dark:text-[#E5C158]">
                  Resultados: <span className="font-normal text-gray-600 dark:text-amber-100/70">{item.outcome}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner inside Testimonials */}
        <div className="text-center bg-[#32100A] text-white p-8 sm:p-10 rounded-2xl border border-[#C89A3B]/40 shadow-xl max-w-4xl mx-auto space-y-4">
          <h3 className="text-2xl font-serif-display font-bold text-white">
            Quer Saber Se Seu Caso Possui Grande Viabilidade Jurídica?
          </h3>
          <p className="text-sm text-amber-100/80 max-w-2xl mx-auto">
            Não tome decisões sem antes consultar uma especialista. Fale diretamente com nossa equipe no WhatsApp e receba orientações iniciais sem burocracia.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenSchedule}
              className="px-7 py-3.5 rounded-xl text-xs font-bold text-[#32100A] gold-gradient-bg hover:brightness-110 shadow-lg cursor-pointer active:scale-95 transition-all"
            >
              Agendar Análise com a Dra. Iraci
            </button>
            <a
              href={FIRM_INFO.socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl text-xs font-bold text-emerald-300 bg-emerald-950/80 border border-emerald-500/40 hover:bg-emerald-900 transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Falar no WhatsApp Agora</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
