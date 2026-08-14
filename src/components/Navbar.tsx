import React, { useState, useEffect, useRef } from 'react';
import { 
  Calendar, 
  Menu, 
  X, 
  MessageCircle, 
  ChevronDown, 
  Home, 
  User, 
  Award, 
  Scale, 
  Briefcase, 
  Star, 
  Compass, 
  FileText, 
  HelpCircle, 
  Phone,
  Sparkles
} from 'lucide-react';
import { FIRM_INFO } from '../data/firmData';
import logoSealImg from '../assets/images/official_logo_seal_1785381560321.jpg';

interface NavbarProps {
  onOpenSchedule: () => void;
}

interface NavItem {
  id: string;
  label: string;
  shortLabel?: string;
  href: string;
  icon: React.ElementType;
  parentGroup?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSchedule }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>('inicio');
  const [scrollProgress, setScrollProgress] = useState(0);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // 10 Requested Navigation Items in exact required order
  const NAV_ITEMS: NavItem[] = [
    { id: 'inicio', label: 'Início', href: '#inicio', icon: Home },
    { id: 'advogada', label: 'A Advogada', href: '#advogada', icon: User },
    { id: 'trajetoria', label: 'Trajetória', href: '#trajetoria', icon: Award, parentGroup: 'advogada' },
    { id: 'lideranca', label: 'OAB & Liderança', href: '#lideranca', icon: Scale, parentGroup: 'advogada' },
    { id: 'areas-atuacao', label: 'Áreas de Atuação', shortLabel: 'Áreas', href: '#areas-atuacao', icon: Briefcase },
    { id: 'depoimentos', label: 'Depoimentos', href: '#depoimentos', icon: Star },
    { id: 'jornada', label: 'Jornada do Cliente', shortLabel: 'Jornada', href: '#jornada', icon: Compass },
    { id: 'documentos', label: 'Documentos', href: '#documentos', icon: FileText },
    { id: 'faq', label: 'Dúvidas Frequentes', shortLabel: 'FAQ', href: '#faq', icon: HelpCircle },
    { id: 'contato', label: 'Contato', href: '#contato', icon: Phone },
  ];

  // Scroll Spy Implementation
  useEffect(() => {
    const sectionIds = [
      'inicio',
      'advogada',
      'trajetoria',
      'lideranca',
      'areas-atuacao',
      'depoimentos',
      'jornada',
      'documentos',
      'faq',
      'contato'
    ];

    const handleScroll = () => {
      // Progress Bar Calculation
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const current = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, current)));
      }
      setIsScrolled(window.scrollY > 20);

      // Section position detection with navbar offset
      const scrollPosition = window.scrollY + 140;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth Scroll handler with precise header height compensation
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setActiveDropdown(null);

    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Update URL hash without jumping
      window.history.pushState(null, '', href);
    }
  };

  const handleMouseEnterDropdown = (group: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(group);
  };

  const handleMouseLeaveDropdown = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  // Check if current active section belongs to 'A Advogada' group
  const isAdvogadaGroupActive = ['advogada', 'trajetoria', 'lideranca'].includes(activeSection);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-nav shadow-2xl py-2.5' : 'bg-[#6C2418] py-3.5 border-b border-[#C89A3B]/30'
      }`}
    >
      {/* Top Gold Reading Progress Bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#32100A]/50 pointer-events-none overflow-hidden">
        <div
          className="h-full gold-gradient-bg transition-all duration-150 ease-out shadow-[0_0_10px_rgba(229,193,88,0.9)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3">
          
          {/* Official Logo Brand Link */}
          <a 
            href="#inicio" 
            onClick={(e) => scrollToSection(e, '#inicio')}
            className="flex items-center gap-3 group shrink-0"
            aria-label="Iraci Teófilo Advocacia - Ir para o início"
          >
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

          {/* Desktop Navigation with Smooth Scroll & Dropdown Grouping */}
          <nav className="hidden xl:flex items-center gap-1.5 2xl:gap-3 mx-auto">
            
            {/* 1. Início */}
            <a
              href="#inicio"
              onClick={(e) => scrollToSection(e, '#inicio')}
              className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                activeSection === 'inicio'
                  ? 'text-[#E5C158] bg-[#4A1810] border border-[#C89A3B]/40 shadow-xs'
                  : 'text-amber-50/90 hover:text-[#E5C158] hover:bg-[#591D13]/60'
              }`}
            >
              Início
            </a>

            {/* 2, 3, 4. A Advogada Dropdown (A Advogada + Trajetória + OAB & Liderança) */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnterDropdown('advogada')}
              onMouseLeave={handleMouseLeaveDropdown}
            >
              <button
                type="button"
                onClick={(e) => {
                  const linkE = e as unknown as React.MouseEvent<HTMLAnchorElement>;
                  scrollToSection(linkE, '#advogada');
                }}
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  isAdvogadaGroupActive
                    ? 'text-[#E5C158] bg-[#4A1810] border border-[#C89A3B]/40 shadow-xs'
                    : 'text-amber-50/90 hover:text-[#E5C158] hover:bg-[#591D13]/60'
                }`}
              >
                <span>A Advogada</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'advogada' ? 'rotate-180 text-[#E5C158]' : ''}`} />
              </button>

              {/* Dropdown Menu for Institutional Sub-items */}
              {activeDropdown === 'advogada' && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-[#32100A] border-2 border-[#C89A3B]/50 rounded-2xl p-2 shadow-2xl space-y-1 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                  <a
                    href="#advogada"
                    onClick={(e) => scrollToSection(e, '#advogada')}
                    className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium transition-colors ${
                      activeSection === 'advogada'
                        ? 'text-[#E5C158] bg-[#4A1810] font-bold'
                        : 'text-amber-100/90 hover:bg-[#4A1810] hover:text-[#E5C158]'
                    }`}
                  >
                    <User className="w-3.5 h-3.5 text-[#C89A3B]" />
                    <span>Perfil da Fundadora</span>
                  </a>

                  <a
                    href="#trajetoria"
                    onClick={(e) => scrollToSection(e, '#trajetoria')}
                    className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium transition-colors ${
                      activeSection === 'trajetoria'
                        ? 'text-[#E5C158] bg-[#4A1810] font-bold'
                        : 'text-amber-100/90 hover:bg-[#4A1810] hover:text-[#E5C158]'
                    }`}
                  >
                    <Award className="w-3.5 h-3.5 text-[#C89A3B]" />
                    <span>Marcos da Trajetória</span>
                  </a>

                  <a
                    href="#lideranca"
                    onClick={(e) => scrollToSection(e, '#lideranca')}
                    className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium transition-colors ${
                      activeSection === 'lideranca'
                        ? 'text-[#E5C158] bg-[#4A1810] font-bold'
                        : 'text-amber-100/90 hover:bg-[#4A1810] hover:text-[#E5C158]'
                    }`}
                  >
                    <Scale className="w-3.5 h-3.5 text-[#C89A3B]" />
                    <span>OAB &amp; Liderança</span>
                  </a>
                </div>
              )}
            </div>

            {/* 5. Áreas de Atuação */}
            <a
              href="#areas-atuacao"
              onClick={(e) => scrollToSection(e, '#areas-atuacao')}
              className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                activeSection === 'areas-atuacao'
                  ? 'text-[#E5C158] bg-[#4A1810] border border-[#C89A3B]/40 shadow-xs'
                  : 'text-amber-50/90 hover:text-[#E5C158] hover:bg-[#591D13]/60'
              }`}
            >
              Áreas de Atuação
            </a>

            {/* 6. Depoimentos */}
            <a
              href="#depoimentos"
              onClick={(e) => scrollToSection(e, '#depoimentos')}
              className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                activeSection === 'depoimentos'
                  ? 'text-[#E5C158] bg-[#4A1810] border border-[#C89A3B]/40 shadow-xs'
                  : 'text-amber-50/90 hover:text-[#E5C158] hover:bg-[#591D13]/60'
              }`}
            >
              Depoimentos
            </a>

            {/* 7. Jornada do Cliente */}
            <a
              href="#jornada"
              onClick={(e) => scrollToSection(e, '#jornada')}
              className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                activeSection === 'jornada'
                  ? 'text-[#E5C158] bg-[#4A1810] border border-[#C89A3B]/40 shadow-xs'
                  : 'text-amber-50/90 hover:text-[#E5C158] hover:bg-[#591D13]/60'
              }`}
            >
              Jornada
            </a>

            {/* 8. Documentos */}
            <a
              href="#documentos"
              onClick={(e) => scrollToSection(e, '#documentos')}
              className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                activeSection === 'documentos'
                  ? 'text-[#E5C158] bg-[#4A1810] border border-[#C89A3B]/40 shadow-xs'
                  : 'text-amber-50/90 hover:text-[#E5C158] hover:bg-[#591D13]/60'
              }`}
            >
              Documentos
            </a>

            {/* 9. Dúvidas Frequentes */}
            <a
              href="#faq"
              onClick={(e) => scrollToSection(e, '#faq')}
              className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                activeSection === 'faq'
                  ? 'text-[#E5C158] bg-[#4A1810] border border-[#C89A3B]/40 shadow-xs'
                  : 'text-amber-50/90 hover:text-[#E5C158] hover:bg-[#591D13]/60'
              }`}
            >
              Dúvidas
            </a>

            {/* 10. Contato */}
            <a
              href="#contato"
              onClick={(e) => scrollToSection(e, '#contato')}
              className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                activeSection === 'contato'
                  ? 'text-[#E5C158] bg-[#4A1810] border border-[#C89A3B]/40 shadow-xs'
                  : 'text-amber-50/90 hover:text-[#E5C158] hover:bg-[#591D13]/60'
              }`}
            >
              Contato
            </a>

          </nav>

          {/* Medium Screens (MD/LG): Compact Direct Links + All Sections dropdown */}
          <nav className="hidden lg:flex xl:hidden items-center gap-1 mx-auto">
            {NAV_ITEMS.filter(item => ['inicio', 'advogada', 'areas-atuacao', 'jornada', 'faq'].includes(item.id)).map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                  activeSection === item.id
                    ? 'text-[#E5C158] bg-[#4A1810] border border-[#C89A3B]/40'
                    : 'text-amber-50/90 hover:text-[#E5C158] hover:bg-[#591D13]/50'
                }`}
              >
                {item.shortLabel || item.label}
              </a>
            ))}

            {/* More Sections dropdown for Medium displays */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnterDropdown('more')}
              onMouseLeave={handleMouseLeaveDropdown}
            >
              <button
                type="button"
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-amber-50/90 hover:text-[#E5C158] hover:bg-[#591D13]/60 transition-all cursor-pointer"
              >
                <span>Mais</span>
                <ChevronDown className="w-3 h-3" />
              </button>

              {activeDropdown === 'more' && (
                <div className="absolute top-full right-0 mt-1 w-52 bg-[#32100A] border-2 border-[#C89A3B]/50 rounded-2xl p-2 shadow-2xl space-y-1 z-50">
                  {NAV_ITEMS.filter(item => !['inicio', 'advogada', 'areas-atuacao', 'jornada', 'faq'].includes(item.id)).map((item) => (
                    <a
                      key={item.id}
                      href={item.href}
                      onClick={(e) => scrollToSection(e, item.href)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium transition-colors ${
                        activeSection === item.id
                          ? 'text-[#E5C158] bg-[#4A1810] font-bold'
                          : 'text-amber-100/90 hover:bg-[#4A1810] hover:text-[#E5C158]'
                      }`}
                    >
                      <item.icon className="w-3.5 h-3.5 text-[#C89A3B]" />
                      <span>{item.label}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Right CTAs (Always Visible and Prominent) */}
          <div className="hidden md:flex items-center gap-2.5 shrink-0">
            <a
              href={FIRM_INFO.socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Atendimento via WhatsApp"
              title="Atendimento via WhatsApp"
              className="p-2 rounded-xl text-[#E5C158] border border-[#C89A3B]/40 hover:bg-[#591D13] hover:border-[#C89A3B] transition-all shadow-sm shrink-0"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={onOpenSchedule}
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-[#32100A] gold-gradient-bg hover:brightness-110 transition-all shadow-md active:scale-95 cursor-pointer shrink-0"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar Atendimento</span>
            </button>
          </div>

          {/* Mobile Actions and Hamburger Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={onOpenSchedule}
              className="px-3 py-1.5 text-xs font-bold text-[#32100A] gold-gradient-bg rounded-lg shadow-sm active:scale-95 cursor-pointer"
            >
              Agendar
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-[#E5C158] focus:outline-none rounded-lg hover:bg-[#4A1810] transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#E5C158]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Off-Canvas / Dropdown Menu (All 10 Sections in exact order) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#32100A] border-b-2 border-[#C89A3B]/40 px-4 pt-3 pb-6 space-y-4 shadow-2xl animate-in slide-in-from-top-3 duration-200 max-h-[85vh] overflow-y-auto">
          
          {/* Header info in mobile menu */}
          <div className="flex items-center justify-between pb-2 border-b border-[#C89A3B]/20">
            <span className="text-[11px] font-bold text-[#E5C158] uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Navegação Completa</span>
            </span>
            <span className="text-[10px] text-amber-200/70 font-mono">10 Seções</span>
          </div>

          {/* 10 Items List with Auto-Close on Click */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-left">
            {NAV_ITEMS.map((item, index) => {
              const IconComp = item.icon;
              const isActive = activeSection === item.id;
              const stepNumber = String(index + 1).padStart(2, '0');

              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-colors ${
                    isActive
                      ? 'bg-[#6C2418] text-[#E5C158] border border-[#C89A3B] shadow-md font-bold'
                      : 'text-amber-100 hover:bg-[#4A1810] hover:text-[#E5C158] border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-[10px] font-mono text-[#C89A3B] font-bold">{stepNumber}.</span>
                    <IconComp className="w-4 h-4 text-[#C89A3B] shrink-0" />
                    <span>{item.label}</span>
                  </div>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E5C158] animate-pulse" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Mobile Footer CTAs */}
          <div className="pt-3 border-t border-[#C89A3B]/20 flex flex-col space-y-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSchedule();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-bold text-[#32100A] gold-gradient-bg shadow-lg active:scale-95 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar Atendimento Prioritário</span>
            </button>

            <a
              href={FIRM_INFO.socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-emerald-300 bg-emerald-950/80 border border-emerald-500/40 hover:bg-emerald-900/80 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Falar Diretamente via WhatsApp</span>
            </a>
          </div>

        </div>
      )}
    </header>
  );
};
