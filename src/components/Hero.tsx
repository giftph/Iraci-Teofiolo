import React from 'react';
import { motion } from 'motion/react';
import { Calendar, ShieldCheck, Award, ChevronRight, MessageCircle, Scale, CheckCircle2 } from 'lucide-react';
import { FIRM_INFO } from '../data/firmData';
import logoSealImg from '../assets/images/official_logo_seal_1785381560321.jpg';
import inicioImg from '../assets/images/inicio.png';

interface HeroProps {
  onOpenSchedule: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenSchedule }) => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#6C2418] text-white overflow-hidden">
      {/* Official Law Firm Logo Watermark Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden select-none">
        <img
          src={logoSealImg}
          alt=""
          className="w-[85%] max-w-5xl aspect-square object-contain opacity-[0.045] blur-[1px] mix-blend-soft-light rounded-full transform scale-105"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Subtle radial dot texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.06] pointer-events-none bg-repeat z-0"
        style={{
          backgroundImage: `radial-gradient(#C89A3B 1px, transparent 1px)`,
          backgroundSize: '36px 36px'
        }}
      />
      
      {/* Soft ambient gold ambient lighting glows */}
      <div className="absolute -top-24 left-1/4 w-[500px] h-[500px] bg-[#C89A3B]/15 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-[#E5C158]/10 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & Value Proposition */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-7 text-left"
          >
            
            {/* Trust Badges Bar */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#4A1810] text-[#E5C158] border border-[#C89A3B]/40 shadow-sm backdrop-blur-md">
                <Award className="w-3.5 h-3.5 text-[#E5C158]" />
                <span>+30 Anos de Advocacia</span>
              </span>
              <span className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#32100A] text-amber-200 border border-[#C89A3B]/30 shadow-sm backdrop-blur-md">
                <ShieldCheck className="w-3.5 h-3.5 text-[#E5C158]" />
                <span>Ouvidora-Geral OAB/GO</span>
              </span>
              <span className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#4A1810] text-amber-100 border border-amber-500/20 backdrop-blur-md">
                <Scale className="w-3.5 h-3.5 text-[#C89A3B]" />
                <span>Conselheira Seccional</span>
              </span>
            </div>

            {/* CRO PRINCIPLE: High-converting Headline (Promessa clara + benefício principal) */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif-display font-bold text-white leading-[1.12] tracking-tight">
              Proteja Seus Direitos com <span className="gold-gradient-text italic font-normal">Advocacia de Alta Performance</span>
            </h1>

            {/* CRO PRINCIPLE: Subheadline clarifying target audience & unique value */}
            <p className="text-base sm:text-lg text-amber-100/90 font-normal leading-relaxed max-w-2xl">
              Atendimento jurídico estratégico e altamente personalizado conduzido diretamente pela <strong className="text-white font-semibold">Dra. Iraci Teófilo Rosa</strong>, Ouvidora-Geral da OAB/GO com mais de 30 anos de solidez em Goiânia.
            </p>

            {/* CRO PRINCIPLE: High contrast primary CTA above the fold with friction reducers */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={onOpenSchedule}
                aria-label="Agendar análise do meu caso sem compromisso"
                className="inline-flex items-center justify-center space-x-2.5 px-7 py-4 rounded-xl text-sm font-bold text-[#32100A] gold-gradient-bg hover:brightness-110 shadow-xl hover:shadow-amber-500/20 transition-all cursor-pointer group active:scale-[0.98]"
              >
                <Calendar className="w-4.5 h-4.5" />
                <span>Agendar Análise Sem Compromisso</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={FIRM_INFO.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Falar diretamente no WhatsApp"
                className="inline-flex items-center justify-center space-x-2.5 px-6 py-4 rounded-xl text-sm font-semibold text-emerald-300 bg-emerald-950/80 border border-emerald-500/40 hover:bg-emerald-900/90 transition-all shadow-md active:scale-[0.98]"
              >
                <MessageCircle className="w-4.5 h-4.5 text-emerald-400" />
                <span>WhatsApp Direto</span>
              </a>
            </div>

            {/* CRO PRINCIPLE: Microcopy reducing friction and establishing immediate safety */}
            <div className="pt-5 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-[#C89A3B]/20 text-xs text-amber-200/80">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E5C158] shrink-0" />
                <span>Análise Sem Compromisso</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E5C158] shrink-0" />
                <span>Atendimento Ágil e Humanizado</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E5C158] shrink-0" />
                <span>Sigilo Profissional Absoluto</span>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Founder Portrait Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Decorative Gold Glow Frame */}
              <div className="absolute -inset-2.5 rounded-3xl bg-gradient-to-tr from-[#C89A3B] via-[#E5C158] to-[#9E7422] opacity-40 blur-xl pointer-events-none animate-pulse duration-1000" />

              {/* Main Portrait Card Container */}
              <div className="relative rounded-2xl bg-[#4A1810] border-2 border-[#C89A3B]/70 p-3 shadow-2xl overflow-hidden group">
                
                <div className="relative rounded-xl overflow-hidden bg-[#32100A]">
                  <img
                    src={inicioImg}
                    alt="Dra. Iraci Teófilo Rosa - Sociedade Individual de Advocacia"
                    className="w-full h-auto object-cover rounded-xl transition-transform duration-700 group-hover:scale-102"
                    referrerPolicy="no-referrer"
                  />
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

