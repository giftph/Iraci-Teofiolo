import React from 'react';
import { Award, ShieldCheck, Scale, Users, MapPin, CheckCircle2 } from 'lucide-react';

export const CredibilityBar: React.FC = () => {
  const stats = [
    {
      icon: Award,
      value: "30+ Anos",
      label: "de Exercício da Advocacia",
      sublabel: "Experiência e Rigor Técnico"
    },
    {
      icon: ShieldCheck,
      value: "Ouvidora-Geral",
      label: "da OAB/GO (Seccional Goiás)",
      sublabel: "Acolhimento & Transparência"
    },
    {
      icon: Scale,
      value: "Conselheira",
      label: "Seccional no Conselho Pleno",
      sublabel: "Defesa de Prerrogativas"
    },
    {
      icon: MapPin,
      value: "Centro",
      label: "Goiânia - GO (Palácio do Comércio)",
      sublabel: "Estrutura de Alta Classe"
    }
  ];

  return (
    <section className="bg-[#4A1810] border-y-2 border-[#C89A3B]/40 py-8 relative z-20 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="flex items-start space-x-4 p-4 rounded-xl bg-[#6C2418]/60 border border-[#C89A3B]/20 hover:border-[#C89A3B]/60 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#32100A] border border-[#C89A3B]/40 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <IconComponent className="w-6 h-6 text-[#E5C158]" />
                </div>
                <div className="text-left space-y-0.5">
                  <span className="block text-xl font-serif-display font-bold text-white group-hover:text-[#E5C158] transition-colors">
                    {item.value}
                  </span>
                  <span className="block text-xs font-semibold text-[#E5C158] uppercase tracking-wider">
                    {item.label}
                  </span>
                  <span className="block text-[11px] text-white/80">
                    {item.sublabel}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
