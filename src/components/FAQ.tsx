import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/firmData';
import { ChevronDown, Search, HelpCircle, PhoneCall } from 'lucide-react';

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

  return (
    <section id="faq" className="py-24 bg-[#FAF8F5] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5 mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#6C2418] bg-[#F5F0E8] px-4 py-1.5 rounded-full border border-[#6C2418]/20 shadow-xs">
            Transparência & Clareza
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-display font-bold text-[#32100A] tracking-tight">
            Perguntas Frequentes
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#6C2418] via-[#C89A3B] to-[#E5C158] mx-auto rounded-full" />
          <p className="text-base sm:text-lg text-gray-700 font-normal leading-relaxed">
            Respostas diretas sobre a contratação, valores de honorários da OAB/GO e a dinâmica de atendimento.
          </p>
        </div>

        {/* Search Input & Category Filters */}
        <div className="space-y-5 mb-12">
          
          {/* Search bar */}
          <div className="relative max-w-xl mx-auto">
            <Search className="w-5 h-5 text-gray-400 absolute left-4.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar dúvida por palavra-chave (ex: consulta, honorários, documentos)..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-gray-300 bg-white shadow-sm focus:border-[#6C2418] focus:ring-2 focus:ring-[#6C2418]/20 text-sm text-gray-800 placeholder-gray-400 transition-all outline-none"
            />
          </div>

          {/* Category Pill Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#6C2418] text-[#E5C158] shadow-md border border-[#6C2418]'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

        </div>

        {/* Accordion List */}
        <div className="space-y-4 text-left">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-3xl border-2 border-[#6C2418]/10 shadow-xs overflow-hidden transition-all duration-300 hover:border-[#C89A3B]/40"
                >
                  <button
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    className="w-full p-6 text-left flex items-center justify-between space-x-4 hover:bg-[#FAF8F5] transition-colors focus:outline-none cursor-pointer"
                  >
                    <span className="font-serif-display font-bold text-[#32100A] text-base sm:text-lg pr-2">
                      {faq.question}
                    </span>
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'bg-[#6C2418] text-[#E5C158] rotate-180' : 'bg-gray-100 text-gray-500'}`}>
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-0 text-sm sm:text-base text-gray-700 leading-relaxed border-t border-gray-100 animate-in fade-in duration-200">
                      <div className="pt-4 space-y-2">
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="p-10 text-center bg-white rounded-3xl border border-gray-200 space-y-3">
              <HelpCircle className="w-10 h-10 text-gray-400 mx-auto" />
              <p className="text-sm font-semibold text-gray-600">Nenhuma dúvida encontrada com esses termos.</p>
              <button
                onClick={() => { setSearchTerm(''); setActiveCategory('todos'); }}
                className="text-xs text-[#6C2418] underline font-bold cursor-pointer"
              >
                Limpar filtros de busca
              </button>
            </div>
          )}
        </div>

        {/* Final FAQ CTA Box */}
        <div className="mt-14 bg-[#4A1810] border-2 border-[#C89A3B]/50 rounded-3xl p-8 sm:p-10 text-center space-y-5 text-white shadow-2xl relative overflow-hidden">
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-serif-display font-bold text-white">
              Sua dúvida não está listada aqui?
            </h3>
            <p className="text-xs sm:text-sm text-amber-100/90 max-w-xl mx-auto">
              Entre em contato direto com a equipe da Dra. Iraci Teófilo Rosa para orientação personalizada e confidencial.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenSchedule}
              className="inline-flex items-center space-x-2.5 px-7 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-[#32100A] gold-gradient-bg hover:brightness-110 shadow-lg cursor-pointer"
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

