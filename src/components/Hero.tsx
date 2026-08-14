import React from 'react';
import { motion } from 'motion/react';
import { Calendar, ShieldCheck, Award, ArrowRight, MessageCircle, Scale, Lock, CheckCircle2 } from 'lucide-react';
import logoSealImg from '../assets/images/official_logo_seal_1785381560321.jpg';
import inicioImg from '../assets/images/inicio.png';

interface HeroProps {
  onOpenSchedule: () => void;
}

const WHATSAPP_HERO_URL = "https://wa.me/5562992456161?text=Olá,%20encontrei%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20consulta.";

export const Hero: React.FC<HeroProps> = ({ onOpenSchedule }) => {
  return (
    <section 
      id="inicio" 
      aria-label="Apresentação institucional"
      className="relative pt-32 pb-20 md:pt-44 md:pb-32 bg-gradient-to-b from-[#4A1810] via-[#5C1F15] to-[#3B130D] text-white overflow-hidden scroll-mt-24"
    >
      {/* Invisible anchor for backward compatibility */}
      <span id="hero" className="sr-only" />

      {/* Official Law Firm Logo Watermark Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden select-none">
        <img
          src={logoSealImg}
          alt=""
          className="w-[85%] max-w-5xl aspect-square object-contain opacity-[0.035] blur-[1px] mix-blend-screen rounded-full transform scale-105"
          referrerPolicy="no-referrer"
        />
      </div>
      
      {/* Soft ambient warm gold lighting glows */}
      <div className="absolute -top-32 left-1/4 w-[550px] h-[550px] bg-[#C89A3B]/10 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-0 right-10 w-[450px] h-[450px] bg-[#E5C158]/08 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Authority Badges, High-Impact Headline & Strategic CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-8 text-left"
          >
            
            {/* Authority Credential Seals (Institucionais, sóbrios e nobres) */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-lg bg-[#32100A]/85 border border-[#C89A3B]/40 text-[#E5C158] shadow-sm backdrop-blur-sm">
                <Award className="w-3.5 h-3.5 text-[#E5C158] shrink-0" />
                <span className="text-[11px] font-semibold tracking-wider uppercase">+30 Anos de Advocacia</span>
              </div>

              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-lg bg-[#32100A]/85 border border-[#C89A3B]/40 text-[#E5C158] shadow-sm backdrop-blur-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-[#E5C158] shrink-0" />
                <span className="text-[11px] font-semibold tracking-wider uppercase">Ouvidora-Geral OAB/GO</span>
              </div>

              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-lg bg-[#32100A]/85 border border-[#C89A3B]/30 text-amber-100/90 shadow-sm backdrop-blur-sm">
                <Scale className="w-3.5 h-3.5 text-[#C89A3B] shrink-0" />
                <span className="text-[11px] font-semibold tracking-wider uppercase">Conselheira Seccional</span>
              </div>
            </div>

            {/* High-Impact Headline with strong typography cadence */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-[4.25rem] font-serif-display font-bold text-white leading-[1.1] tracking-tight">
              Proteja Seus Direitos com{' '}
              <span className="gold-gradient-text italic font-normal block sm:inline">
                Advocacia de Alta Performance
              </span>
            </h1>

            {/* Subheadline with optimal measure and balanced contrast */}
            <p className="text-base sm:text-lg text-amber-50/90 font-normal leading-relaxed max-w-2xl">
              Atendimento jurídico estratégico e altamente personalizado conduzido diretamente pela{' '}
              <strong className="text-white font-semibold">Dra. Iraci Teófilo Rosa</strong>, Ouvidora-Geral da OAB/GO com mais de 30 anos de solidez em Goiânia.
            </p>

            {/* High-Contrast Conversion Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={onOpenSchedule}
                aria-label="Agendar Análise Sem Compromisso"
                className="inline-flex items-center justify-center space-x-3 px-8 py-4.5 rounded-xl text-sm font-bold text-[#32100A] gold-gradient-bg hover:brightness-110 shadow-xl hover:shadow-amber-500/20 transition-all cursor-pointer group active:scale-[0.98]"
              >
                <Calendar className="w-4.5 h-4.5 text-[#32100A]" />
                <span>Agendar Análise Sem Compromisso</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={WHATSAPP_HERO_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Direto da equipe jurídica"
                className="inline-flex items-center justify-center space-x-2.5 px-7 py-4.5 rounded-xl text-sm font-semibold text-emerald-300 bg-[#152B1E]/90 border border-emerald-500/40 hover:bg-[#1C3A29] hover:border-emerald-400 transition-all shadow-md active:scale-[0.98] cursor-pointer"
              >
                <MessageCircle className="w-4.5 h-4.5 text-emerald-400" />
                <span>WhatsApp Direto</span>
              </a>
            </div>

            {/* Microbenefits Row (Discreta, sem competir com os CTAs) */}
            <div className="pt-4 border-t border-[#C89A3B]/20 flex flex-wrap items-center gap-y-2.5 gap-x-6 text-xs text-amber-100/75">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E5C158] shrink-0" />
                <span>Análise Sem Compromisso</span>
              </div>
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#E5C158] shrink-0" />
                <span>Atendimento Ágil e Humanizado</span>
              </div>
              <div className="flex items-center space-x-2">
                <Lock className="w-3.5 h-3.5 text-[#E5C158] shrink-0" />
                <span>Sigilo Profissional Absoluto</span>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Founder Portrait Frame */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Decorative Gold Glow Ambient */}
              <div className="absolute -inset-2.5 rounded-3xl bg-gradient-to-tr from-[#C89A3B] via-[#E5C158] to-[#9E7422] opacity-35 blur-xl pointer-events-none" />

              {/* Main Portrait Frame */}
              <div className="relative rounded-2xl bg-[#4A1810] border-2 border-[#C89A3B]/70 p-3 shadow-2xl overflow-hidden group">
                
                <div className="relative rounded-xl overflow-hidden bg-[#32100A]">
                  <img
                    src={inicioImg}
                    alt="Dra. Iraci Teófilo Rosa - Sociedade Individual de Advocacia"
                    className="w-full h-auto object-cover rounded-xl transition-transform duration-700 group-hover:scale-[1.02]"
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


