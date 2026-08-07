import React from 'react';
import { FIRM_INFO } from '../data/firmData';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Scale, ArrowUp } from 'lucide-react';
import logoSealImg from '../assets/images/official_logo_seal_1785381560321.jpg';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#32100A] text-amber-100/90 border-t-2 border-[#C89A3B]/40 pt-16 pb-8 relative text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Brand Info Column (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full border-2 border-[#C89A3B] flex items-center justify-center bg-[#4A1810] overflow-hidden shrink-0 shadow-lg">
                <img
                  src={logoSealImg}
                  alt="Logo Iraci Teófilo"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="font-serif-display font-bold text-white text-lg block">
                  Iraci Teófilo
                </span>
                <span className="text-[10px] text-[#C89A3B] uppercase tracking-widest block font-medium">
                  Sociedade Individual de Advocacia
                </span>
              </div>
            </div>

            <p className="text-xs text-amber-100/80 leading-relaxed">
              Advocacia de excelência e alta performance em Goiás. Mais de 30 anos dedicados à defesa intransigente dos direitos dos nossos clientes com integridade e rigor técnico.
            </p>

            <div className="pt-1 flex items-center space-x-2 text-xs text-[#E5C158]">
              <ShieldCheck className="w-4 h-4" />
              <span>Inscrição Regular OAB/GO Nº {FIRM_INFO.oabNumber}</span>
            </div>
            <div className="text-[11px] text-amber-200/60 font-mono">
              CNPJ: {FIRM_INFO.cnpj}
            </div>
          </div>

          {/* Quick Links Column (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-serif-display border-b border-[#C89A3B]/20 pb-2">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#hero" className="hover:text-[#E5C158] transition-colors">Início & Apresentação</a>
              </li>
              <li>
                <a href="#perfil" className="hover:text-[#E5C158] transition-colors">Dra. Iraci Teófilo Rosa</a>
              </li>
              <li>
                <a href="#institucional" className="hover:text-[#E5C158] transition-colors">Ouvidoria & Conselho OAB/GO</a>
              </li>
              <li>
                <a href="#areas" className="hover:text-[#E5C158] transition-colors">Especialidades Jurídicas</a>
              </li>
              <li>
                <a href="#jornada" className="hover:text-[#E5C158] transition-colors">Jornada de Atendimento</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#E5C158] transition-colors">Perguntas Frequentes</a>
              </li>
            </ul>
          </div>

          {/* Address & Contact Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-serif-display border-b border-[#C89A3B]/20 pb-2">
              Atendimento & Localização
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#E5C158] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  <strong>Condomínio Palácio do Comércio</strong><br />
                  Av. Anhanguera, 5674 - Sala 1102<br />
                  Centro • Goiânia - GO, CEP 74043-010
                </span>
              </div>

              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-[#E5C158] shrink-0" />
                <a href={`tel:+${FIRM_INFO.phoneDigits}`} className="hover:text-[#E5C158] transition-colors">
                  Telefone / WhatsApp: {FIRM_INFO.phoneFormatted}
                </a>
              </div>

              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-[#E5C158] shrink-0" />
                <a href={`mailto:${FIRM_INFO.email}`} className="hover:text-[#E5C158] transition-colors">
                  E-mail: {FIRM_INFO.email}
                </a>
              </div>

              <div className="flex items-center space-x-2.5">
                <Clock className="w-4 h-4 text-[#E5C158] shrink-0" />
                <span>{FIRM_INFO.workingHours}</span>
              </div>
            </div>

            {/* Google Maps Embed & Como Chegar Button */}
            <div className="pt-2 space-y-3">
              <div className="w-full h-36 rounded-xl overflow-hidden border border-[#C89A3B]/30 shadow-md">
                <iframe
                  title="Localização Iraci Teófilo Advocacia - Condomínio Palácio do Comércio"
                  src="https://maps.google.com/maps?q=Av.%20Anhanguera%2C%205674%20-%20Centro%2C%20Goi%C3%A2nia%20-%20GO%2C%2074043-010&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Condom%C3%ADnio+Pal%C3%A1cio+do+Com%C3%A9rcio,+Av.+Anhanguera,+5674+-+Sala+1102,+Centro,+Goi%C3%A2nia+-+GO,+74043-010"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 w-full py-2.5 px-4 rounded-xl bg-[#C89A3B] hover:bg-[#E5C158] text-[#32100A] font-bold text-xs uppercase tracking-wider transition-all shadow-md group"
              >
                <MapPin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>Como chegar</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom LGPD & Copyright Row */}
        <div className="pt-8 border-t border-[#C89A3B]/20 flex flex-col sm:flex-row items-center justify-between text-[11px] text-amber-200/60 space-y-4 sm:space-y-0">
          <div className="space-y-1 text-center sm:text-left">
            <p>
              © {new Date().getFullYear()} Iraci Teófilo – Sociedade Individual de Advocacia. Todos os direitos reservados.
            </p>
            <p className="text-[10px]">
              Atendimento em conformidade integral com o Código de Ética da OAB, Estatuto da Advocacia e LGPD.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-[#4A1810] border border-[#C89A3B]/40 hover:bg-[#6C2418] text-[#E5C158] transition-colors flex items-center space-x-1"
            title="Voltar ao topo"
          >
            <ArrowUp className="w-4 h-4" />
            <span className="text-[10px] font-bold uppercase">Topo</span>
          </button>
        </div>

      </div>
    </footer>
  );
};
