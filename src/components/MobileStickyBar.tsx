import React from 'react';
import { MessageCircle, Calendar } from 'lucide-react';
import { FIRM_INFO } from '../data/firmData';

interface MobileStickyBarProps {
  onOpenSchedule: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenSchedule }) => {
  /* CRO PRINCIPLE: Mobile Sticky Conversion Control
     Persistent bottom bar on mobile screens ensuring instant access to WhatsApp & Schedule
     without blocking viewport content.
  */

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#32100A]/95 backdrop-blur-md border-t border-[#C89A3B]/40 p-3 sm:hidden shadow-2xl no-print">
      <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
        <button
          onClick={onOpenSchedule}
          aria-label="Agendar consulta rápida"
          className="flex items-center justify-center space-x-1.5 px-3 py-2.5 rounded-xl text-xs font-bold text-[#32100A] gold-gradient-bg active:scale-95 transition-all shadow-md cursor-pointer"
        >
          <Calendar className="w-4 h-4" />
          <span>Agendar Consulta</span>
        </button>

        <a
          href={FIRM_INFO.socialLinks.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chamar advogada no WhatsApp"
          className="flex items-center justify-center space-x-1.5 px-3 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 active:scale-95 transition-all shadow-md cursor-pointer"
        >
          <MessageCircle className="w-4 h-4 text-white" />
          <span>WhatsApp Direto</span>
        </a>
      </div>
    </div>
  );
};
