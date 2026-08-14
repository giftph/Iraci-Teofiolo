import React, { useState } from 'react';
import { Megaphone, Award, Building, Scale, CheckCircle2, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface InstitutionalBlock {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  impact: string;
  icon: React.FC<{ className?: string }>;
}

const INSTITUTIONAL_ITEMS: InstitutionalBlock[] = [
  {
    id: 'ouvidoria',
    title: 'Ouvidoria-Geral da OAB Goiás',
    subtitle: 'Ordem dos Advogados do Brasil – Seccional Goiás',
    badge: 'Gestão Atual OAB/GO',
    description: 'Liderança do órgão constitucional responsável pelo acolhimento, escuta atenta e encaminhamento célere de demandas de advogados e cidadãos goianos perante a OAB/GO.',
    impact: 'Acolhimento contínuo, defesa e resolução célere de manifestações, fortalecendo a transparência e a celeridade dos processos institucionais (+10.000 atendimentos com alto índice de resolutividade).',
    icon: Megaphone
  },
  {
    id: 'conselho',
    title: 'Conselho Seccional OAB/GO',
    subtitle: 'Conselho Pleno | Deliberação Normativa e Ética',
    badge: 'Conselho Pleno',
    description: 'Atuação em julgamentos de alta relevância, regulação da classe, defesa intransigente dos honorários advocatícios e fortalecimento das prerrogativas da advocacia goiana.',
    impact: 'Relatoria de importantes processos regulatórios e de defesa de direitos constitucionais e valorização da advocacia.',
    icon: Award
  },
  {
    id: 'sociedade',
    title: 'Sociedade Individual de Advocacia',
    subtitle: 'Fundadora e Titular | Inscrição Formal na OAB/GO',
    badge: 'Registro OAB/GO',
    description: 'Estrutura corporativa independente que garante solidez jurídica, emissão regular de notas fiscais, transparência contratual e gestão profissionalizada de casos contenciosos e consultivos.',
    impact: 'Sólida reputação construída com ética incondicional, mantendo taxas históricas de satisfação dos clientes e personalização absoluta.',
    icon: Building
  },
  {
    id: 'prerrogativas',
    title: 'Defesa Incondicional de Prerrogativas',
    subtitle: 'Direitos Fundamentais & Cidadania',
    badge: 'Garantias Constitucionais',
    description: 'Respeito absoluto às garantias constitucionais do jurisdicionado e aos direitos intransferíveis dos advogados perante órgãos judiciais, judiciários e administrativos do Estado de Goiás.',
    impact: 'Garantia de inviolabilidade do exercício profissional e proteção integral dos direitos dos assistidos perante todas as instâncias.',
    icon: Scale
  }
];

export const InstitutionalBento: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('ouvidoria');

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="lideranca" className="py-24 bg-[#6C2418] text-white relative overflow-hidden scroll-mt-24">
      {/* Invisible anchor for backward compatibility */}
      <span id="institucional" className="sr-only" />
      
      {/* Decorative gradient & glow overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#4A1810] via-[#6C2418] to-[#32100A] opacity-95 pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-[600px] h-[600px] bg-[#C89A3B]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#E5C158]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5 mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#E5C158] bg-[#32100A] px-4 py-1.5 rounded-full border border-[#C89A3B]/40 shadow-sm">
            Liderança Institucional OAB/GO
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-display font-bold text-white tracking-tight">
            Atuação de Impacto na Advocacia e na Sociedade
          </h2>
          <div className="w-20 h-1 gold-gradient-bg mx-auto rounded-full" />
          <p className="text-base sm:text-lg text-white/90 font-normal leading-relaxed">
            A posição institucional da Dra. Iraci Teófilo expressa a confiança e o reconhecimento da comunidade jurídica de Goiás em sua trajetória ética e combativa.
          </p>
        </div>

        {/* Vertical Accordion List */}
        <div className="space-y-4 text-left" role="region" aria-label="Liderança Institucional da Dra. Iraci Teófilo">
          {INSTITUTIONAL_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            const IconComp = item.icon;
            const headerId = `inst-header-${item.id}`;
            const contentId = `inst-content-${item.id}`;

            return (
              <div
                key={item.id}
                className={`bg-[#4A1810]/95 border-2 rounded-2xl sm:rounded-3xl transition-all duration-300 overflow-hidden shadow-xl ${
                  isOpen ? 'border-[#E5C158] bg-[#4A1810]' : 'border-[#C89A3B]/40 hover:border-[#C89A3B]'
                }`}
              >
                <button
                  id={headerId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => toggleItem(item.id)}
                  className="w-full p-5 sm:p-7 text-left flex items-center justify-between gap-4 hover:bg-[#32100A]/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E5C158] cursor-pointer"
                >
                  <div className="flex items-center space-x-4 sm:space-x-5 min-w-0">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#32100A] border border-[#C89A3B]/60 flex items-center justify-center text-[#E5C158] shadow-md shrink-0">
                      <IconComp className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>

                    <div className="space-y-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[10px] sm:text-xs font-bold text-[#E5C158] bg-[#32100A] px-3 py-0.5 rounded-full border border-[#C89A3B]/40">
                          {item.badge}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-2xl font-serif-display font-bold text-white leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-white/80 font-medium">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 border border-[#C89A3B]/50 transition-transform duration-300 ${
                      isOpen ? 'bg-[#32100A] text-[#E5C158] rotate-180' : 'bg-[#32100A]/60 text-white'
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
                      <div className="px-5 sm:px-7 pb-7 pt-2 space-y-5 border-t border-[#C89A3B]/20 text-left">
                        <p className="text-sm sm:text-base text-white/90 leading-relaxed pt-2">
                          {item.description}
                        </p>

                        <div className="p-4 sm:p-4.5 rounded-2xl bg-[#32100A] border border-[#C89A3B]/40 flex items-start space-x-3 text-left">
                          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                          <p className="text-xs sm:text-sm text-white/90 font-medium leading-relaxed">
                            <strong className="text-white">Impacto Medível:</strong> {item.impact}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

