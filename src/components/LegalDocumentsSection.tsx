import React, { useState } from 'react';
import { 
  FileText, 
  CheckSquare, 
  Square, 
  Download, 
  Copy, 
  Check, 
  MessageCircle, 
  Info, 
  Sparkles, 
  Calendar, 
  Scale, 
  Briefcase, 
  Building2, 
  HeartHandshake, 
  ShieldCheck, 
  FolderDown,
  ArrowRight,
  Printer
} from 'lucide-react';
import { FIRM_INFO } from '../data/firmData';

interface DocumentItem {
  id: string;
  name: string;
  category: 'essential' | 'specific';
  description: string;
  tip?: string;
}

interface AreaDocumentGroup {
  id: string;
  title: string;
  icon: React.ElementType;
  badge?: string;
  description: string;
  documents: DocumentItem[];
}

const DOCUMENT_GROUPS: AreaDocumentGroup[] = [
  {
    id: "civil",
    title: "Direito Civil & Imobiliário",
    icon: Scale,
    badge: "Mais Procurado",
    description: "Documentos para ações cíveis, cobranças, danos morais/materiais, questões posseiras e imobiliárias.",
    documents: [
      { id: "civ-1", name: "RG e CPF ou CNH do Titular", category: "essential", description: "Documento oficial de identificação legível do proponente da ação.", tip: "Digitalização frente e verso em PDF ou imagem com boa iluminação." },
      { id: "civ-2", name: "Comprovante de Residência Atualizado", category: "essential", description: "Conta de água, luz, telefone ou internet em nome da parte.", tip: "Emitido nos últimos 90 dias." },
      { id: "civ-3", name: "Contrato / Instrumento de Negócio Fato", category: "specific", description: "Cópia do contrato assinado, aditivos ou proposta formal objeto da controvérsia.", tip: "Se verbal, juntar prints de WhatsApp e e-mails." },
      { id: "civ-4", name: "Comprovantes de Pagamento / Transferências", category: "specific", description: "Extratos bancários, comprovantes PIX, recibos de pagamento ou notas fiscais.", tip: "Destaque os lançamentos relativos aos danos alegados." },
      { id: "civ-5", name: "Certidão de Matrícula Atualizada do Imóvel", category: "specific", description: "Para ações imobiliárias, usucapião, reintegração de posse ou despejo.", tip: "Emitida pelo Cartório de Registro de Imóveis no máximo há 30 dias." },
      { id: "civ-6", name: "Notificações Extrajudiciais e Respostas", category: "specific", description: "Trocas de notificações, e-mails de cobrança, boletins de ocorrência ou atas notariais." }
    ]
  },
  {
    id: "trabalhista",
    title: "Direito Trabalhista Estratégico",
    icon: Briefcase,
    badge: "Especialidade",
    description: "Documentos indispensáveis para análise de vinculo, horas extras, rescisão e direitos trabalhistas.",
    documents: [
      { id: "trab-1", name: "Carteira de Trabalho (CTPS Física ou Digital)", category: "essential", description: "Página de identificação e registro do contrato de trabalho em discussão.", tip: "Extrato do app 'CTPS Digital' em formato PDF é aceito." },
      { id: "trab-2", name: "Termo de Rescisão (TRCT) e Comprovantes de Pagamento", category: "essential", description: "Últimos 12 contracheques (holerites) ou termo de rescisão contratual se houver.", tip: "Permite apurar diferenças salariais e média do último ano." },
      { id: "trab-3", name: "Extrato Analítico do FGTS", category: "specific", description: "Extrato com o histórico completo de depósitos do Fundo de Garantia.", tip: "Disponível no aplicativo da Caixa Tem ou Agência CEF." },
      { id: "trab-4", name: "Controle de Ponto e Escalas de Trabalho", category: "specific", description: "Fotos ou cópias de cartões de ponto, mensagens indicando horários de início e término.", tip: "Mensagens no WhatsApp fora do expediente são provas de horas extras." },
      { id: "trab-5", name: "Comprovantes de Desvio/Acúmulo de Função", category: "specific", description: "E-mails, ordens de serviço ou registros que comprovem atribuições superiores às contratadas." },
      { id: "trab-6", name: "Atestados Médicos e CAT (Acidentes de Trabalho)", category: "specific", description: "Se houver alegação de doença ocupacional ou acidente no ambiente de trabalho." }
    ]
  },
  {
    id: "servidores",
    title: "Servidores Públicos & Adm.",
    icon: Building2,
    badge: "Goiás & Municípios",
    description: "Para defesas em PAD, mandados de segurança em concursos e incorporações salariais.",
    documents: [
      { id: "serv-1", name: "Ato de Nomeação e Termo de Posse", category: "essential", description: "Publicação em Diário Oficial ou termo de posse no cargo público.", tip: "Cópia da folha do Diário Oficial de Goiás ou do Município." },
      { id: "serv-2", name: "Ficha Financeira dos Últimos 5 Anos", category: "essential", description: "Histórico detalhado de proventos, gratificações e adicionais concedidos.", tip: "Pode ser emitida no Portal do Servidor do órgão." },
      { id: "serv-3", name: "Cópia Integral do PAD / Processo Administrativo", category: "specific", description: "Notificação inicial, portaria de instauração e termo de indiciamento.", tip: "O órgão é obrigado a disponibilizar cópia ao servidor." },
      { id: "serv-4", name: "Edital do Concurso Público e Ficha de Inscrição", category: "specific", description: "Em ações de mandado de segurança por preterição ou problemas em etapas do certame.", tip: "Anexar também o comprovante de aprovação e classificação." },
      { id: "serv-5", name: "Certidão de Tempo de Contribuição (CTC)", category: "specific", description: "Em demandas previdenciárias de servidores e contagem de tempo de serviço." }
    ]
  },
  {
    id: "familias",
    title: "Família & Sucessões",
    icon: HeartHandshake,
    badge: "Atendimento Humanizado",
    description: "Documentos para inventários, divórcio, alimentos, partilha de bens e planejamento sucessório.",
    documents: [
      { id: "fam-1", name: "Certidão de Casamento ou União Estável Atualizada", category: "essential", description: "Com averbações (emitida nos últimos 90 dias).", tip: "Necessária para início de divórcio ou inventário do cônjuge." },
      { id: "fam-2", name: "Certidões de Nascimento dos Filhos Menores", category: "essential", description: "Se houver discussão sobre guarda, regime de visitas e pensão alimentícia." },
      { id: "fam-3", name: "Relação Detalhada de Bens Imóveis e Móveis", category: "specific", description: "Escrituras, certidões de matrícula, CRLV de veículos, extratos bancários.", tip: "Importante ter estimativa dos valores venais dos bens para partilha." },
      { id: "fam-4", name: "Certidão de Óbito e Testamento (Inventários)", category: "specific", description: "Em caso de falecimento para abertura do processo de inventário judicial ou em cartório." },
      { id: "fam-5", name: "Comprovantes das Despesas dos Alimentados", category: "specific", description: "Escola, plano de saúde, moradia e vestuário em ações de fixação/revisão de alimentos." }
    ]
  },
  {
    id: "contratos",
    title: "Contratos & Societário",
    icon: FileText,
    description: "Documentos para elaboração, revisão crítica de contratos comerciais e disputas societárias.",
    documents: [
      { id: "cnt-1", name: "Contrato Social / Estatuto e Última Alteração", category: "essential", description: "Documentos constitutivos da pessoa jurídica registrados na Junta Comercial (JUCEG).", tip: "Certidão simplificada da Junta Comercial emitida nos últimos 30 dias." },
      { id: "cnt-2", name: "Minuta ou Instrumento Contratual sob Análise", category: "essential", description: "Versão do contrato em formato editável (Word) ou PDF completo com anexos." },
      { id: "cnt-3", name: "Histórico de Comunicações entre as Partes", category: "specific", description: "Troca de e-mails formais, propostas, notificações e aceites prévios." },
      { id: "cnt-4", name: "Procurações e Documentos de Representação Legal", category: "specific", description: "Documentos comprovando poderes de gerência ou poderes de representação dos sócios." }
    ]
  },
  {
    id: "etica-oab",
    title: "Ética OAB & Prerrogativas",
    icon: ShieldCheck,
    badge: "Atuação Institucional",
    description: "Documentação para defesas em representações ético-disciplinares no TED e prerrogativas da advocacia.",
    documents: [
      { id: "oab-1", name: "Cartão de Identidade Profissional da OAB/GO", category: "essential", description: "Cópia do documento profissional do advogado requerente ou representado." },
      { id: "oab-2", name: "Cópia Integral da Representação Ético-Disciplinar", category: "essential", description: "Com a notificação oficial do TED/OAB contendo o prazo para defesa prévia." },
      { id: "oab-3", name: "Procurações e Substabelecimentos Vinculados à Causa", category: "specific", description: "Contratos de honorários e procurações outorgadas na demanda de origem objeto da representação." },
      { id: "oab-4", name: "Relatório de Prerrogativas ou Violação Ocorrida", category: "specific", description: "Registros, áudios, certidões ou gravações de desacato/violação de prerrogativas profissionais." }
    ]
  }
];

interface LegalDocumentsSectionProps {
  onOpenSchedule: () => void;
}

export const LegalDocumentsSection: React.FC<LegalDocumentsSectionProps> = ({
  onOpenSchedule
}) => {
  const [activeGroup, setActiveGroup] = useState<string>("civil");
  const [checkedDocIds, setCheckedDocIds] = useState<Record<string, boolean>>({});
  const [copiedToast, setCopiedToast] = useState(false);

  const currentGroup = DOCUMENT_GROUPS.find(g => g.id === activeGroup) || DOCUMENT_GROUPS[0];

  const toggleDoc = (id: string) => {
    setCheckedDocIds(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const totalInGroup = currentGroup.documents.length;
  const checkedInGroup = currentGroup.documents.filter(d => checkedDocIds[d.id]).length;

  const handleCopyChecklist = () => {
    const lines = [
      `📋 CHECKLIST DE DOCUMENTOS - ${currentGroup.title.toUpperCase()}`,
      `Escritório Iraci Teófilo - Sociedade Individual de Advocacia (${FIRM_INFO.oabNumber})`,
      `--------------------------------------------------`,
      ...currentGroup.documents.map(d => {
        const isChecked = checkedDocIds[d.id] ? '[x] PRONTO' : '[ ] PENDENTE';
        return `${isChecked} ${d.name}\n   • ${d.description}${d.tip ? ` (Dica: ${d.tip})` : ''}`;
      }),
      `--------------------------------------------------`,
      `Agende seu atendimento: ${FIRM_INFO.phoneFormatted} | ${FIRM_INFO.email}`,
      `Goiânia - GO | Orion Business & Health Complex`
    ];

    navigator.clipboard.writeText(lines.join('\n\n'));
    setCopiedToast(true);
    setTimeout(() => setCopiedToast(false), 3000);
  };

  const handleDownloadTxt = () => {
    const textContent = [
      `==================================================`,
      `IRACI TEÓFILO - SOCIEDADE INDIVIDUAL DE ADVOCACIA`,
      `OAB/GO 12.345 | Dra. Iraci Teófilo Rosa`,
      `CHECKLIST DE DOCUMENTAÇÃO RECOMENDADA - ${currentGroup.title.toUpperCase()}`,
      `==================================================\n`,
      `Orientação prévia de documentação para agilizar a análise e parecer na sua consulta jurídica.\n`,
      `DOCUMENTOS DA ÁREA:\n`,
      ...currentGroup.documents.map((d, index) => {
        const status = checkedDocIds[d.id] ? '[X] VOCÊ JÁ POSSUI ESTE DOCUMENTO' : '[ ] PENDENTE DE SELEÇÃO';
        return `${index + 1}. ${d.name.toUpperCase()}\n   Status: ${status}\n   Descrição: ${d.description}\n   ${d.tip ? `Orientação Técnica: ${d.tip}\n` : ''}`;
      }),
      `\n--------------------------------------------------`,
      `DICAS PARA A SUA CONSULTA JURÍDICA:`,
      `1. Traga os documentos originais ou cópias legíveis em formato PDF.`,
      `2. Organize arquivos digitais em pastas nomeadas por assunto ou data.`,
      `3. Em caso de conversas no WhatsApp, faça capturas de tela mostrando o número e a data.`,
      `--------------------------------------------------\n`,
      `CONTATO E AGENDAMENTOS:`,
      `Telefone/WhatsApp: ${FIRM_INFO.phoneFormatted}`,
      `E-mail: ${FIRM_INFO.email}`,
      `Endereço: ${FIRM_INFO.address}`,
      `==================================================`
    ].join('\n');

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Checklist_Documentos_${currentGroup.id}_IraciTeofilo.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleSendToWhatsApp = () => {
    const readyDocs = currentGroup.documents.filter(d => checkedDocIds[d.id]);
    let text = `Olá, Dra. Iraci Teófilo! Gostaria de agendar um atendimento na área de *${currentGroup.title}*.\n\n`;
    
    if (readyDocs.length > 0) {
      text += `Já reuni os seguintes documentos prévios:\n`;
      readyDocs.forEach(d => {
        text += `✅ ${d.name}\n`;
      });
      text += `\nGostaria de verificar datas disponíveis para a consulta.`;
    } else {
      text += `Gostaria de orientações sobre a documentação necessária para o meu caso e opções de horário para atendimento.`;
    }

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${FIRM_INFO.phoneDigits}?text=${encoded}`, '_blank');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="documentos" className="py-20 bg-[#FAF7F2] relative overflow-hidden border-t border-b border-[#C89A3B]/20">
      {/* Official Print Letterhead Header (visible only when printing) */}
      <div className="print-only-header hidden">
        <h1>Iraci Teófilo - Sociedade Individual de Advocacia</h1>
        <p><strong>OAB/GO {FIRM_INFO.oabNumber}</strong> | Dra. Iraci Teófilo Rosa (Ouvidora-Geral OAB/GO)</p>
        <p>Endereço: {FIRM_INFO.address} | Telefone: {FIRM_INFO.phoneFormatted} | E-mail: {FIRM_INFO.email}</p>
        <p className="mt-1 font-semibold text-xs text-amber-900">CHECKLIST OFICIAL DE DOCUMENTAÇÃO RECOMENDADA - {currentGroup.title.toUpperCase()}</p>
      </div>

      {/* Official Print Footer (visible only when printing) */}
      <div className="print-footer hidden">
        Documento gerado em {new Date().toLocaleDateString('pt-BR')} - Iraci Teófilo Advocacia | {FIRM_INFO.address}
      </div>

      {/* Background seal watermark accent */}
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-96 h-96 opacity-5 pointer-events-none">
        <img
          src="/src/assets/images/official_logo_seal_1785381560321.jpg"
          alt=""
          className="w-full h-full object-contain rounded-full"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#4A1810] text-[#E5C158] border border-[#C89A3B]/40 text-xs font-semibold uppercase tracking-widest shadow-sm">
            <FolderDown className="w-3.5 h-3.5 text-[#E5C158]" />
            <span>Preparação para Consulta Jurídica</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-display font-bold text-[#32100A] tracking-tight">
            Documentação Recomendada por Área de Atuação
          </h2>

          <p className="text-base sm:text-lg text-amber-950/80 leading-relaxed font-normal">
            A organização prévia dos documentos garante um parecer mais preciso na primeira consulta e agiliza as providências judiciais ou extrajudiciais. Selecione a área da sua demanda abaixo.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 pt-2 no-scrollbar scroll-smooth">
          {DOCUMENT_GROUPS.map((group) => {
            const Icon = group.icon;
            const isActive = group.id === activeGroup;
            return (
              <button
                key={group.id}
                onClick={() => setActiveGroup(group.id)}
                className={`flex items-center space-x-2.5 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer shrink-0 border ${
                  isActive
                    ? 'bg-[#4A1810] text-[#E5C158] border-[#C89A3B] shadow-md scale-[1.02]'
                    : 'bg-white text-[#4A1810] border-[#C89A3B]/20 hover:bg-amber-100/50 hover:border-[#C89A3B]/40'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#E5C158]' : 'text-[#C89A3B]'}`} />
                <span>{group.title}</span>
                {group.badge && (
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                    isActive ? 'bg-[#C89A3B] text-[#32100A]' : 'bg-amber-100 text-[#4A1810]'
                  }`}>
                    {group.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Selected Area Content Box */}
        <div className="mt-8 bg-white rounded-2xl border border-[#C89A3B]/30 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Column: Interactive Checklist (8 cols) */}
          <div className="lg:col-span-8 p-6 sm:p-8 space-y-6">
            
            {/* Title & Description Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-amber-900/10 pb-6">
              <div>
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 rounded-xl bg-[#4A1810] text-[#E5C158] border border-[#C89A3B]/40">
                    <currentGroup.icon className="w-6 h-6 text-[#E5C158]" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-serif-display font-bold text-[#32100A]">
                      {currentGroup.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-amber-900/70 mt-0.5">
                      {currentGroup.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Progress badge */}
              <div className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-amber-50 border border-[#C89A3B]/30 text-xs font-bold text-[#4A1810] shrink-0 self-start sm:self-auto">
                <span>Completado:</span>
                <span className="text-[#9E7422] font-black text-sm">{checkedInGroup}/{totalInGroup}</span>
              </div>
            </div>

            {/* Checklist Items */}
            <div className="space-y-3">
              <p className="text-xs font-bold text-amber-900/60 uppercase tracking-wider">
                Marque os documentos que você já tem em mãos:
              </p>

              <div className="grid grid-cols-1 gap-3">
                {currentGroup.documents.map((doc) => {
                  const isChecked = !!checkedDocIds[doc.id];
                  return (
                    <div
                      key={doc.id}
                      onClick={() => toggleDoc(doc.id)}
                      className={`p-4 rounded-xl border transition-all cursor-pointer select-none flex items-start space-x-3.5 group print-card ${
                        isChecked
                          ? 'bg-amber-50/80 border-[#C89A3B] shadow-sm'
                          : 'bg-[#FAF7F2]/60 border-amber-900/10 hover:border-[#C89A3B]/40 hover:bg-amber-100/30'
                      }`}
                    >
                      <button 
                        type="button" 
                        className="mt-0.5 text-[#C89A3B] group-hover:scale-110 transition-transform cursor-pointer"
                        aria-label={isChecked ? "Desmarcar documento" : "Marcar documento"}
                      >
                        {isChecked ? (
                          <CheckSquare className="w-5 h-5 text-[#9E7422] fill-[#9E7422]/10" />
                        ) : (
                          <Square className="w-5 h-5 text-amber-900/30 group-hover:text-[#C89A3B]" />
                        )}
                      </button>

                      <div className="flex-1 space-y-1">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className={`text-sm sm:text-base font-semibold leading-snug ${
                            isChecked ? 'text-[#32100A] line-through decoration-[#9E7422]/50' : 'text-[#4A1810]'
                          }`}>
                            {doc.name}
                          </span>
                          <span className={`text-[10px] px-2 py-0.5 rounded-md font-bold uppercase ${
                            doc.category === 'essential' 
                              ? 'bg-red-100 text-red-900 border border-red-200' 
                              : 'bg-amber-100 text-amber-900 border border-amber-200'
                          }`}>
                            {doc.category === 'essential' ? 'Essencial' : 'Específico'}
                          </span>
                        </div>

                        <p className="text-xs text-amber-950/70 leading-relaxed">
                          {doc.description}
                        </p>

                        {doc.tip && (
                          <div className="inline-flex items-center space-x-1.5 text-[11px] text-[#9E7422] bg-amber-100/60 px-2.5 py-1 rounded-md font-medium mt-1">
                            <Info className="w-3.5 h-3.5 text-[#9E7422] shrink-0" />
                            <span><strong>Orientação:</strong> {doc.tip}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Checklist Action Bar */}
            <div className="pt-4 border-t border-amber-900/10 flex flex-wrap items-center justify-between gap-3 no-print">
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={handlePrint}
                  aria-label="Imprimir checklist de documentos para versão física ou PDF"
                  className="inline-flex items-center space-x-2 px-4.5 py-2.5 rounded-xl text-xs font-bold text-[#32100A] gold-gradient-bg hover:brightness-110 border border-[#C89A3B] transition-all shadow-md cursor-pointer"
                  title="Imprimir checklist formatado ou salvar em versão PDF física"
                >
                  <Printer className="w-4 h-4 text-[#32100A]" />
                  <span>Imprimir Checklist</span>
                </button>

                <button
                  onClick={handleCopyChecklist}
                  aria-label="Copiar checklist de documentos para a área de transferência"
                  className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-[#4A1810] bg-amber-100/70 hover:bg-amber-200/80 border border-[#C89A3B]/40 transition-all cursor-pointer"
                >
                  {copiedToast ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-[#C89A3B]" />}
                  <span>{copiedToast ? 'Copiado!' : 'Copiar Checklist'}</span>
                </button>

                <button
                  onClick={handleDownloadTxt}
                  aria-label="Baixar checklist de documentos em formato TXT"
                  className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-[#4A1810] bg-amber-100/70 hover:bg-amber-200/80 border border-[#C89A3B]/40 transition-all cursor-pointer"
                  title="Baixar lista em arquivo de texto formatado"
                >
                  <Download className="w-4 h-4 text-[#C89A3B]" />
                  <span>Baixar TXT</span>
                </button>
              </div>

              <button
                onClick={handleSendToWhatsApp}
                aria-label="Enviar lista de documentos selecionados pelo WhatsApp"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 transition-all shadow-md cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-emerald-200" />
                <span>Enviar Lista pelo WhatsApp</span>
              </button>
            </div>

          </div>

          {/* Right Column: Guidance & Direct Consultation CTAs (4 cols) */}
          <div className="lg:col-span-4 bg-[#4A1810] p-6 sm:p-8 text-white flex flex-col justify-between space-y-6 relative border-t lg:border-t-0 lg:border-l border-[#C89A3B]/30">
            
            <div className="space-y-5">
              <div className="flex items-center space-x-2 text-[#E5C158] font-serif-display font-bold text-lg">
                <Sparkles className="w-5 h-5 text-[#E5C158]" />
                <h4>Dicas da Dra. Iraci Teófilo</h4>
              </div>

              <ul className="space-y-4 text-xs sm:text-sm text-amber-100/90 leading-relaxed">
                <li className="flex items-start space-x-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E5C158] mt-2 shrink-0"></span>
                  <span><strong>Formatos aceitos:</strong> Aceitamos documentos originais impressos no escritório ou arquivos digitais em PDF legíveis.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E5C158] mt-2 shrink-0"></span>
                  <span><strong>Prints de WhatsApp:</strong> Em conversas digitais, certifique-se de capturar o número de telefone completo com código de área e data visíveis.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E5C158] mt-2 shrink-0"></span>
                  <span><strong>Falta algum documento?</strong> Não se preocupe. Na primeira consulta avaliamos alternativas legais e podemos requerer a exibição de documentos em juízo se necessário.</span>
                </li>
              </ul>

              <div className="p-4 rounded-xl bg-[#32100A] border border-[#C89A3B]/30 space-y-2 text-xs">
                <p className="font-semibold text-[#E5C158] flex items-center space-x-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#E5C158]" />
                  <span>Sigilo Profissional Absoluto</span>
                </p>
                <p className="text-amber-200/80 leading-normal">
                  Todos os documentos e informações fornecidos estão resguardados pelo sigilo profissional da advocacia (Lei 8.906/94) e pela LGPD.
                </p>
              </div>
            </div>

            {/* Schedule CTA Box */}
            <div className="pt-4 border-t border-[#C89A3B]/30 space-y-3">
              <p className="text-xs text-amber-200/90">
                Pronto para agendar o seu atendimento em Goiânia ou por videoconferência?
              </p>
              <button
                onClick={onOpenSchedule}
                className="w-full py-3.5 px-4 rounded-xl font-bold text-[#32100A] gold-gradient-bg hover:brightness-110 shadow-lg transition-all flex items-center justify-center space-x-2 text-sm cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Agendar Atendimento Agora</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
