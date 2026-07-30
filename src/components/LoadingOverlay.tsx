import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Scale } from 'lucide-react';
import { FIRM_INFO } from '../data/firmData';
import logoSealImg from '../assets/images/official_logo_seal_1785381560321.jpg';

interface LoadingOverlayProps {
  isLoading: boolean;
}

export const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#32100A] text-white overflow-hidden pointer-events-auto select-none"
      role="status"
      aria-live="polite"
      aria-label="Carregando portal institucional"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C89A3B]/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Content Card */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-md space-y-6">
        
        {/* Animated Emblem Seal Container */}
        <div className="relative w-28 h-28 flex items-center justify-center">
          {/* Outer Rotating Gold Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            className="absolute inset-0 rounded-full border-2 border-dashed border-[#C89A3B] opacity-60"
          />
          
          {/* Pulse Glow Ring */}
          <motion.div
            animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.7, 0.3] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="absolute -inset-2 rounded-full bg-gradient-to-tr from-[#C89A3B] via-[#E5C158] to-[#9E7422] blur-md opacity-40"
          />

          {/* Seal Image Inner Circle */}
          <div className="w-24 h-24 rounded-full border-2 border-[#E5C158] bg-[#4A1810] shadow-2xl overflow-hidden p-1 flex items-center justify-center relative z-10">
            <img
              src={logoSealImg}
              alt="Selo de Autenticidade Institucional Dra. Iraci Teófilo Rosa"
              className="w-full h-full object-cover rounded-full"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Title & Subtitle */}
        <div className="space-y-1.5">
          <h1 className="text-2xl sm:text-3xl font-serif-display font-bold text-white tracking-wide">
            Dra. Iraci Teófilo Rosa
          </h1>
          <div className="flex items-center justify-center space-x-2 text-xs text-[#E5C158] font-semibold tracking-widest uppercase">
            <Scale className="w-3.5 h-3.5 text-[#C89A3B]" />
            <span>Sociedade Individual de Advocacia</span>
          </div>
          <p className="text-[11px] text-amber-200/70 pt-1 font-mono">
            OAB/GO {FIRM_INFO.oabNumber} | Ouvidoria-Geral OAB/GO
          </p>
        </div>

        {/* Progress Loading Bar */}
        <div className="w-48 h-1 bg-[#4A1810] rounded-full overflow-hidden border border-[#C89A3B]/30 relative">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-full h-full gold-gradient-bg shadow-[0_0_8px_#E5C158]"
          />
        </div>

        {/* Status Text */}
        <span className="text-xs font-medium text-amber-100/80 tracking-wider">
          Carregando portal institucional...
        </span>

      </div>

      {/* Footer Credentials */}
      <div className="absolute bottom-6 left-0 right-0 text-center text-[11px] text-amber-200/50 space-x-2">
        <ShieldCheck className="w-3.5 h-3.5 inline text-[#C89A3B]" />
        <span>Goiânia • Goiás • Atendimento Nacional</span>
      </div>
    </motion.div>
  );
};
