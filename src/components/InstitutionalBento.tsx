import React from 'react';
import { Megaphone, Award, Building, ShieldCheck, CheckCircle2, Scale } from 'lucide-react';

export const InstitutionalBento: React.FC = () => {
  return (
    <section id="institucional" className="py-24 bg-[#6C2418] text-white relative overflow-hidden">
      
      {/* Decorative gradient & glow overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#4A1810] via-[#6C2418] to-[#32100A] opacity-95 pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-[600px] h-[600px] bg-[#C89A3B]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#E5C158]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5 mb-20">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#E5C158] bg-[#32100A] px-4 py-1.5 rounded-full border border-[#C89A3B]/40 shadow-sm">
            Liderança Institucional OAB/GO
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-display font-bold text-white tracking-tight">
            Atuação de Impacto na Advocacia e na Sociedade
          </h2>
          <div className="w-20 h-1 gold-gradient-bg mx-auto rounded-full" />
          <p className="text-base sm:text-lg text-amber-100/90 font-normal leading-relaxed">
            A posição institucional da Dra. Iraci Teófilo expressa a confiança e o reconhecimento da comunidade jurídica de Goiás em sua trajetória ética e combativa.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Bento Item 1: Ouvidoria-Geral OAB/GO (Large Card - 7 cols) */}
          <div className="md:col-span-7 bg-[#4A1810]/95 border-2 border-[#C89A3B]/40 rounded-3xl p-7 sm:p-9 space-y-6 hover:border-[#E5C158] transition-all duration-300 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#C89A3B]/20 to-transparent rounded-bl-full pointer-events-none" />
            
            <div className="flex items-center justify-between relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-[#32100A] border border-[#C89A3B]/60 flex items-center justify-center text-[#E5C158] shadow-md group-hover:scale-105 transition-transform">
                <Megaphone className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold text-[#E5C158] bg-[#32100A] px-3.5 py-1.5 rounded-full border border-[#C89A3B]/40 shadow-xs">
                Gestão Actual OAB/GO
              </span>
            </div>

            <div className="space-y-2.5 text-left relative z-10">
              <h3 className="text-2xl sm:text-3xl font-serif-display font-bold text-white group-hover:text-[#E5C158] transition-colors">
                Ouvidoria-Geral da OAB Goiás
              </h3>
              <p className="text-xs font-semibold text-[#E5C158] uppercase tracking-wider">
                Ordem dos Advogados do Brasil – Seccional Goiás
              </p>
              <p className="text-sm sm:text-base text-amber-100/90 leading-relaxed pt-1">
                Liderança do órgão constitucional responsável pelo acolhimento, escuta atenta e encaminhamento célere de demandas de advogados e cidadãos goianos perante a OAB/GO.
              </p>
            </div>

            <div className="p-4.5 rounded-2xl bg-[#32100A]/90 border border-[#C89A3B]/40 flex items-start space-x-3 text-left relative z-10">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-amber-100 font-medium leading-relaxed">
                <strong className="text-white">Impacto Medível:</strong> Acolhimento contínuo, defesa e resolução célere de manifestações, fortalecendo a transparência e a celeridade dos processos institucionais.
              </p>
            </div>

          </div>

          {/* Bento Item 2: Conselheira Seccional (5 cols) */}
          <div className="md:col-span-5 bg-[#4A1810]/95 border-2 border-[#C89A3B]/40 rounded-3xl p-7 sm:p-9 space-y-6 hover:border-[#E5C158] transition-all duration-300 shadow-2xl text-left group">
            
            <div className="flex items-center justify-between">
              <div className="w-14 h-14 rounded-2xl bg-[#32100A] border border-[#C89A3B]/60 flex items-center justify-center text-[#E5C158] shadow-md group-hover:scale-105 transition-transform">
                <Award className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold text-amber-200 bg-[#32100A] px-3.5 py-1.5 rounded-full border border-[#C89A3B]/40">
                Conselho Pleno
              </span>
            </div>

            <div className="space-y-2.5">
              <h3 className="text-2xl font-serif-display font-bold text-white group-hover:text-[#E5C158] transition-colors">
                Conselho Seccional OAB/GO
              </h3>
              <p className="text-xs font-semibold text-[#E5C158] uppercase tracking-wider">
                Deliberação Normativa e Ética
              </p>
              <p className="text-sm text-amber-100/90 leading-relaxed pt-1">
                Atuação em julgamentos de alta relevância, regulação da classe, defesa intransigente dos honorários advocatícios e fortalecimento das prerrogativas da advocacia goiana.
              </p>
            </div>

          </div>

          {/* Bento Item 3: Sociedade Individual de Advocacia (6 cols) */}
          <div className="md:col-span-6 bg-[#4A1810]/95 border-2 border-[#C89A3B]/40 rounded-3xl p-7 space-y-4 hover:border-[#E5C158] transition-all duration-300 shadow-2xl text-left group">
            <div className="flex items-center space-x-3.5">
              <div className="w-12 h-12 rounded-xl bg-[#32100A] border border-[#C89A3B]/60 flex items-center justify-center text-[#E5C158] group-hover:scale-105 transition-transform">
                <Building className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-serif-display font-bold text-white group-hover:text-[#E5C158] transition-colors">
                  Sociedade Individual de Advocacia
                </h4>
                <p className="text-xs text-amber-200/80 font-medium">Inscrição Formal na OAB/GO</p>
              </div>
            </div>
            <p className="text-sm text-amber-100/90 leading-relaxed">
              Estrutura corporativa independente que garante solidez jurídica, emissão regular de notas fiscais, transparência contratual e gestão profissionalizada de casos contenciosos e consultivos.
            </p>
          </div>

          {/* Bento Item 4: Compromisso com a Cidadania e Prerrogativas (6 cols) */}
          <div className="md:col-span-6 bg-[#4A1810]/95 border-2 border-[#C89A3B]/40 rounded-3xl p-7 space-y-4 hover:border-[#E5C158] transition-all duration-300 shadow-2xl text-left group">
            <div className="flex items-center space-x-3.5">
              <div className="w-12 h-12 rounded-xl bg-[#32100A] border border-[#C89A3B]/60 flex items-center justify-center text-[#E5C158] group-hover:scale-105 transition-transform">
                <Scale className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-serif-display font-bold text-white group-hover:text-[#E5C158] transition-colors">
                  Defesa Incondicional de Prerrogativas
                </h4>
                <p className="text-xs text-amber-200/80 font-medium">Direitos Fundamentais &amp; Cidadania</p>
              </div>
            </div>
            <p className="text-sm text-amber-100/90 leading-relaxed">
              Respeito absoluto às garantias constitucionais do jurisdicionado e aos direitos intransferíveis dos advogados perante órgãos judiciais, judiciários e administrativos do Estado de Goiás.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

