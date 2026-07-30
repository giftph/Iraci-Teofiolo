import React from 'react';
import { FIRM_INFO, TRAJECTORY_MILESTONES } from '../data/firmData';
import { Award, GraduationCap, ShieldCheck, Heart, Quote } from 'lucide-react';

export const FounderProfile: React.FC = () => {
  return (
    <section id="perfil" className="py-24 bg-[#FAF8F5] relative overflow-hidden">
      {/* Decorative subtle background watermark seal */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[450px] h-[450px] opacity-[0.035] pointer-events-none select-none">
        <img
          src="/src/assets/images/official_logo_seal_1785381560321.jpg"
          alt=""
          className="w-full h-full object-contain rounded-full border border-[#C89A3B]/30"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5 mb-20">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#6C2418] bg-[#F5F0E8] px-4 py-1.5 rounded-full border border-[#6C2418]/20 shadow-xs">
            Trajetória de Distinção & Ética
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-display font-bold text-[#32100A] tracking-tight">
            Dra. Iraci Teófilo Rosa
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#6C2418] via-[#C89A3B] to-[#E5C158] mx-auto rounded-full" />
          <p className="text-base sm:text-lg text-gray-700 font-normal leading-relaxed">
            Uma vida dedicada ao aperfeiçoamento do Direito, com postura intransigente na defesa das garantias constitucionais e na proteção dos interesses dos seus constituintes.
          </p>
        </div>

        {/* Profile Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Biography & Core Philosophy */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-lg border border-[#6C2418]/10 space-y-6 relative overflow-hidden">
              <div className="flex items-center space-x-3 pb-4 border-b border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-[#6C2418] text-[#E5C158] flex items-center justify-center shrink-0 border border-[#C89A3B]/40">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif-display font-bold text-[#32100A]">
                    Perfil Institucional e Profissional
                  </h3>
                  <span className="text-xs text-[#C89A3B] font-semibold uppercase tracking-wider block">
                    {FIRM_INFO.oabNumber} | Inscrição Regular OAB/GO
                  </span>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Advogada inscrita sob a <strong>{FIRM_INFO.oabNumber}</strong>, a Dra. Iraci Teófilo Rosa construiu uma sólida reputação no cenário jurídico de Goiás. Sua atuação é caracterizada pela <strong>humanização das relações jurídicas</strong>, aliando escuta generosa a soluções altamente estratégicas e incisivas.
              </p>

              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Na posição de <strong>Ouvidora-Geral da OAB/GO</strong> e <strong>Conselheira Seccional</strong>, a Dra. Iraci atua ativamente na vanguarda da defesa do cidadão e do fortalecimento da advocacia, sendo reconhecida pelo compromisso com a transparência, acolhimento e celeridade nos pleitos institucionais.
              </p>

              {/* Pillars of Practice */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start space-x-3 p-4 rounded-2xl bg-[#FAF8F5] border border-[#6C2418]/15 hover:border-[#C89A3B] transition-colors">
                  <Heart className="w-5 h-5 text-[#6C2418] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#32100A]">Escuta Ativa & Humanizada</h4>
                    <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">Cada cliente é atendido individualmente, sem intermediários ou atendimentos padronizados.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-4 rounded-2xl bg-[#FAF8F5] border border-[#6C2418]/15 hover:border-[#C89A3B] transition-colors">
                  <ShieldCheck className="w-5 h-5 text-[#C89A3B] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#32100A]">Inflexibilidade Ética</h4>
                    <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">Cumprimento estrito dos prazos, confidencialidade e respeito incondicional às normas da OAB.</p>
                  </div>
                </div>
              </div>

              {/* Editorial Quote Box */}
              <div className="p-6 rounded-2xl bg-[#32100A] text-white space-y-3 border-l-4 border-[#C89A3B] mt-6 shadow-md relative overflow-hidden">
                <Quote className="w-8 h-8 text-[#C89A3B]/30 absolute right-4 bottom-4 pointer-events-none" />
                <p className="text-sm sm:text-base font-serif-display italic leading-relaxed text-amber-50">
                  "O verdadeiro papel do advogado não é apenas litigar, mas trazer clareza ao caos, serenidade ao conflito e restaurar a dignidade do cidadão diante das adversidades da vida."
                </p>
                <p className="text-xs text-[#E5C158] font-bold tracking-widest uppercase text-right">
                  — Dra. Iraci Teófilo Rosa
                </p>
              </div>

            </div>

            {/* Academic & Professional Credentials Badge Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs text-center space-y-1">
                <span className="block text-2xl font-bold font-serif-display text-[#6C2418]">OAB/GO</span>
                <span className="text-xs text-gray-600 font-medium">Inscrição Regular</span>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs text-center space-y-1">
                <span className="block text-2xl font-bold font-serif-display text-[#C89A3B]">Ouvidoria</span>
                <span className="text-xs text-gray-600 font-medium">Geral OAB Goiás</span>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs text-center col-span-2 sm:col-span-1 space-y-1">
                <span className="block text-2xl font-bold font-serif-display text-[#6C2418]">30+ Anos</span>
                <span className="text-xs text-gray-600 font-medium">De Advocacia</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Career Milestone Timeline */}
          <div className="lg:col-span-5 text-left">
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-[#6C2418]/10 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <h3 className="text-xl font-serif-display font-bold text-[#32100A] flex items-center space-x-2.5">
                  <Award className="w-5 h-5 text-[#C89A3B]" />
                  <span>Marcos da Trajetória</span>
                </h3>
                <span className="text-xs text-[#6C2418] font-bold bg-[#F5F0E8] px-3 py-1 rounded-full border border-[#6C2418]/15">
                  1994 – Presente
                </span>
              </div>

              <div className="relative pl-6 space-y-7 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-[#6C2418] before:via-[#C89A3B] before:to-amber-200">
                {TRAJECTORY_MILESTONES.map((item, idx) => (
                  <div key={idx} className="relative group">
                    {/* Timeline Node */}
                    <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-[#6C2418] group-hover:bg-[#C89A3B] group-hover:border-[#C89A3B] transition-colors shadow-xs" />

                    <div className="space-y-1.5">
                      <div className="flex items-center space-x-2">
                        <span className="text-xs font-bold text-[#E5C158] bg-[#32100A] px-2.5 py-0.5 rounded-md font-mono border border-[#C89A3B]/30">
                          {item.year}
                        </span>
                        <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider">
                          {item.roleType === 'institutional' ? 'Papel Institucional' : 'Prática Jurídica'}
                        </span>
                      </div>

                      <h4 className="text-sm font-bold text-[#32100A] group-hover:text-[#6C2418] transition-colors">
                        {item.title}
                      </h4>

                      <p className="text-xs text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
