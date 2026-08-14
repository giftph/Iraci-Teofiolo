import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/firmData';
import { ChevronDown, Search, HelpCircle, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FAQProps {
  onOpenSchedule: () => void;
}

export const FAQ: React.FC<FAQProps> = ({ onOpenSchedule }) => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('todos');

  const categories = [
    { id: 'todos', label: 'Todas as Dúvidas' },
    { id: 'atendimento', label: 'Atendimento & Local' },
    { id: 'honorarios', label: 'Honorários & Custos' },
    { id: 'oab', label: 'OAB & Ética' },
    { id: 'prazos', label: 'Documentos e Prazos' },
  ];

  const filteredFaqs = FAQ_ITEMS.filter((item) => {
    const matchesSearch =
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'todos' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 bg-[#240C08] text-white relative scroll-mt-24">
      {/* Invisible anchor for backward compatibility */}
      <span id="duvidas" className="sr-only" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5 mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#E5C158] bg-[#32100A] px-4 py-1.5 rounded-full border border-[#C89A3B]/40 shadow-xs">
            Transparência & Clareza
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-display font-bold text-white tracking-tight">
            Perguntas Frequentes
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#6C2418] via-[#C89A3B] to-[#E5C158] mx-auto rounded-full" />
          <p className="text-base sm:text-lg text-white/90 font-normal leading-relaxed">
            Respostas diretas sobre a contratação, valores de honorários da OAB/GO e a dinâmica de atendimento.
          </p>
        </div>

        {/* Search Input & Category Filters */}
        <div className="space-y-5 mb-12">
          
          {/* Search bar */}
          <div className="relative max-w-xl mx-auto">
            <Search className="w-5 h-5 text-white/50 absolute left-4.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar dúvida por palavra-chave (ex: consulta, honorários, documentos)..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-[#C89A3B]/30 bg-[#2D0E08] shadow-md focus:border-[#E5C158] focus:ring-2 focus:ring-[#C89A3B]/30 text-sm text-white placeholder-white/50 transition-all outline-none"
              aria-label="Buscar dúvida por palavra-chave"
            />
          </div>

          {/* Category Pill Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2" role="tablist" aria-label="Categorias de Perguntas">
            {categories.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={activeCategory === cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer border ${
                  activeCategory === cat.id
                    ? 'bg-[#6C2418] text-[#E5C158] shadow-md border-[#E5C158]'
                    : 'bg-[#2D0E08] text-white/80 hover:bg-[#32100A] border-[#C89A3B]/30'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

        </div>

        {/* Accordion List */}
        <div className="space-y-4 text-left" role="region" aria-label="Lista de Perguntas Frequentes">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              const headerId = `faq-header-${faq.id}`;
              const contentId = `faq-content-${faq.id}`;

              return (
                <div
                  key={faq.id}
                  className={`bg-[#2D0E08] text-white rounded-2xl sm:rounded-3xl border-2 transition-all duration-300 overflow-hidden ${
                    isOpen ? 'border-[#E5C158] shadow-xl' : 'border-[#C89A3B]/30 hover:border-[#C89A3B]/60 shadow-xs'
                  }`}
                >
                  <button
                    id={headerId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between space-x-4 hover:bg-[#32100A]/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E5C158] cursor-pointer"
                  >
                    <span className="font-serif-display font-bold text-white text-base sm:text-lg pr-2 leading-snug">
                      {faq.question}
                    </span>
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen ? 'bg-[#4A1810] text-[#E5C158] rotate-180' : 'bg-[#32100A] text-white/80'
                      }`}
                    >
                      <ChevronDown className="w-5 h-5 transition-transform" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={contentId}
                        role="region"
                        aria-labelledby={headerId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-white/90 leading-relaxed border-t border-[#C89A3B]/20">
                          <p className="pt-3">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          ) : (
            <div className="p-10 text-center bg-[#2D0E08] rounded-3xl border border-[#C89A3B]/30 space-y-3">
              <HelpCircle className="w-10 h-10 text-white/40 mx-auto" />
              <p className="text-sm font-semibold text-white/80">Nenhuma dúvida encontrada com esses termos.</p>
              <button
                type="button"
                onClick={() => { setSearchTerm(''); setActiveCategory('todos'); }}
                className="text-xs text-[#E5C158] underline font-bold cursor-pointer"
              >
                Limpar filtros de busca
              </button>
            </div>
          )}
        </div>

        {/* Final FAQ CTA Box */}
        <div className="mt-14 bg-[#32100A] border-2 border-[#C89A3B]/50 rounded-3xl p-8 sm:p-10 text-center space-y-5 text-white shadow-2xl relative overflow-hidden">
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-serif-display font-bold text-white">
              Sua dúvida não está listada aqui?
            </h3>
            <p className="text-xs sm:text-sm text-white/90 max-w-xl mx-auto">
              Entre em contato direto com a equipe da Dra. Iraci Teófilo Rosa para orientação personalizada e confidencial.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              type="button"
              onClick={onOpenSchedule}
              className="inline-flex items-center space-x-2.5 px-7 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-[#32100A] gold-gradient-bg hover:brightness-110 shadow-lg cursor-pointer transition-transform active:scale-95"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Solicitar Atendimento Direto</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

