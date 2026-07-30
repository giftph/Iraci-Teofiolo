import React, { useState, useEffect } from 'react';
import { Calendar, Menu, X, MessageCircle } from 'lucide-react';
import { FIRM_INFO } from '../data/firmData';
import logoSealImg from '../assets/images/official_logo_seal_1785381560321.jpg';

interface NavbarProps {
  onOpenSchedule: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSchedule }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const current = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, current)));
      }
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'A Advogada', href: '#perfil' },
    { label: 'Áreas de Atuação', href: '#areas' },
    { label: 'Jornada do Cliente', href: '#jornada' },
    { label: 'Dúvidas Frequentes', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-nav shadow-xl py-2.5' : 'bg-[#6C2418] py-4 border-b border-[#C89A3B]/30'
      }`}
    >
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#32100A]/50 pointer-events-none overflow-hidden">
        <div
          className="h-full gold-gradient-bg transition-all duration-150 ease-out shadow-[0_0_10px_rgba(229,193,88,0.9)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <a href="#hero" className="flex items-center gap-3 group shrink-0">
            <div className="w-10 h-10 rounded-full border-2 border-[#C89A3B] flex items-center justify-center bg-[#4A1810] shadow-md group-hover:border-[#E5C158] transition-colors overflow-hidden shrink-0">
              <img
                src={logoSealImg}
                alt="Logo Iraci Teófilo Sociedade Individual de Advocacia"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="font-serif-display font-bold text-white text-base tracking-wide group-hover:text-[#E5C158] transition-colors">
                Iraci Teófilo
              </span>
              <span className="text-[10px] text-[#C89A3B] uppercase tracking-widest font-medium">
                Advocacia & Consultoria
              </span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-6 mx-auto">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-amber-50/90 hover:text-[#E5C158] font-medium transition-colors tracking-wide relative group py-1 whitespace-nowrap"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C89A3B] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3 shrink-0">
            <a
              href={FIRM_INFO.socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Atendimento via WhatsApp"
              title="Atendimento via WhatsApp"
              className="p-2.5 rounded-lg text-[#E5C158] border border-[#C89A3B]/40 hover:bg-[#591D13] hover:border-[#C89A3B] transition-all"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenSchedule}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold text-[#32100A] gold-gradient-bg hover:brightness-110 transition-all shadow-md active:scale-95 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar Atendimento</span>
            </button>
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={onOpenSchedule}
              className="px-3.5 py-2 text-xs font-bold text-[#32100A] gold-gradient-bg rounded-md shadow-sm"
            >
              Agendar
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-[#C89A3B] focus:outline-none"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#4A1810] border-b border-[#C89A3B]/30 px-4 pt-4 pb-6 space-y-3 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-amber-50 hover:bg-[#6C2418] hover:text-[#E5C158] rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[#C89A3B]/20 flex flex-col space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSchedule();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold text-[#32100A] gold-gradient-bg shadow-md"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar Consulta Jurídica</span>
            </button>

            <a
              href={FIRM_INFO.socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold text-emerald-300 bg-emerald-950/60 border border-emerald-500/30"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Atendimento via WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};