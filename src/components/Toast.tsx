import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ShieldCheck, X, Calendar, MessageCircle } from 'lucide-react';

export interface ToastMessage {
  id: string;
  title: string;
  description: string;
  protocol?: string;
  type?: 'success' | 'info';
}

interface ToastProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}

export const ToastContainer: React.FC<ToastProps> = ({ toasts, onDismiss }) => {
  return (
    <div 
      aria-live="polite" 
      className="fixed top-20 right-4 sm:right-6 z-[100] flex flex-col space-y-3 max-w-sm w-full pointer-events-none"
    >
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: -20, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, y: 0, scale: 1, x: 0 }}
            exit={{ opacity: 0, y: -20, scale: 0.9, x: 20 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="pointer-events-auto bg-[#32100A] text-white p-4 rounded-2xl border-2 border-[#C89A3B] shadow-2xl relative overflow-hidden backdrop-blur-md"
          >
            {/* Top gold accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 gold-gradient-bg" />

            <div className="flex items-start space-x-3.5 pt-1">
              {/* Status Icon */}
              <div className="p-2 rounded-xl bg-[#4A1810] text-[#E5C158] border border-[#C89A3B]/40 shrink-0 shadow-md">
                <CheckCircle2 className="w-5 h-5 text-[#E5C158]" />
              </div>

              {/* Toast Text Content */}
              <div className="flex-1 space-y-1 pr-6">
                <div className="flex items-center space-x-2">
                  <h5 className="font-serif-display font-bold text-sm text-[#E5C158] leading-tight">
                    {toast.title}
                  </h5>
                </div>

                <p className="text-xs text-amber-100/90 leading-relaxed">
                  {toast.description}
                </p>

                {toast.protocol && (
                  <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-[#4A1810] border border-[#C89A3B]/40 text-[11px] font-mono text-[#E5C158] font-bold mt-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#E5C158]" />
                    <span>Protocolo: {toast.protocol}</span>
                  </div>
                )}
              </div>

              {/* Close Button */}
              <button
                onClick={() => onDismiss(toast.id)}
                className="absolute top-3 right-3 p-1.5 text-amber-200/60 hover:text-white rounded-lg hover:bg-[#4A1810] transition-colors cursor-pointer"
                aria-label="Fechar notificação"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
