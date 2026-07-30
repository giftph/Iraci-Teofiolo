import { PracticeArea, InstitutionalRole, ClientJourneyStep, FAQItem, TrajectoryMilestone } from '../types';

export const FIRM_INFO = {
  lawyerName: "Dra. Iraci Teófilo Rosa",
  firmName: "Iraci Teófilo – Sociedade Individual de Advocacia",
  oabNumber: "OAB/GO 12.345",
  cnpj: "42.890.123/0001-90",
  experienceYears: "30+",
  currentRole: "Ouvidora-Geral da OAB/GO & Conselheira Seccional",
  slogan: "Tradição, Humanização e Solidez Jurídica em Goiás",
  shortBio: "Com mais de três décadas de dedicação ininterrupta ao Direito, a Dra. Iraci Teófilo Rosa alia sólida erudição técnica à escuta humanizada, atuando como defensora intransigente das garantias constitucionais e dos direitos dos seus clientes.",
  phoneFormatted: "(62) 99245-6161",
  phoneDigits: "5562992456161",
  email: "contato@iraciteofilo.adv.br",
  address: "Av. T-9, Ed. Orion Business & Health Complex, Salas 1402-1404, Setor Marista, Goiânia - GO, CEP 74150-030",
  workingHours: "Segunda a Sexta-feira, das 08h às 18h",
  socialLinks: {
    instagram: "https://instagram.com/iraciteofiloadvocacia",
    linkedin: "https://linkedin.com/in/iraciteofilo",
    whatsapp: "https://wa.me/5562992456161?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20atendimento%20jur%C3%ADdico%20com%20a%20Dra.%20Iraci%20Te%C3%B3filo."
  }
};

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: "civil",
    title: "Direito Civil & Responsabilidade",
    shortDesc: "Proteção patrimonial, contratos complexos, indenizações por danos morais e materiais, obrigações e propriedade.",
    fullDesc: "Atuação estratégica e contenciosa em conflitos cíveis, direito imobiliário, cobranças executivas de grande porte, usucapião, indenizações e proteção de posse e propriedade com alto rigor técnico.",
    iconName: "Scale",
    badge: "Mais Procurado",
    commonCases: [
      "Indenizações por danos materiais, morais e à imagem",
      "Contratos imobiliários, usucapião e reintegração de posse",
      "Execuções de títulos extras e cobranças judiciais",
      "Ações de despejo, locações e renovatórias contratuais"
    ]
  },
  {
    id: "trabalhista",
    title: "Direito Trabalhista Estratégico",
    shortDesc: "Defesa dos direitos de empregados executivos e consultoria preventiva corporativa para prevenção de passivos.",
    fullDesc: "Defesa técnica contundente para trabalhadores executivos e empresas em reclamações trabalhistas, rescisões indiretas, equiparação salarial, acidentes de trabalho e acordos de alta complexidade.",
    iconName: "Briefcase",
    badge: "Especialidade",
    commonCases: [
      "Reclamações trabalhistas de altos cargos e gerência",
      "Reconhecimento de vínculo e verbas rescisórias",
      "Indenizações por acidentes de trabalho e doenças ocupacionais",
      "Consultoria preventiva e auditoria de passivos trabalhistas"
    ]
  },
  {
    id: "contratos",
    title: "Direito Contratual & Societário",
    shortDesc: "Elaboração, revisão crítica e blindagem de contratos de negócios, parcerias comerciais e arranjos patrimoniais.",
    fullDesc: "Redação minuciosa de instrumentos contratuais empresariais e civis, análise de risco, renegociação de cláusulas abusivas, distratos e mediação de conflitos contratuais com foco na segurança das partes.",
    iconName: "FileCheck",
    commonCases: [
      "Contratos de prestação de serviços e parcerias comerciais",
      "Acordos de cotistas, acionistas e memórias de entendimento",
      "Revisão contratual por onerosidade excessiva",
      "Blindagem contratual preventiva e Due Diligence"
    ]
  },
  {
    id: "servidores",
    title: "Servidores Públicos & Direito Administrativo",
    shortDesc: "Defesa de direitos de servidores municipais, estaduais e federais em concursos, PADs, reajustes e aposentadorias.",
    fullDesc: "Garantia do cumprimento das prerrogativas funcionais de servidores públicos em Goiás. Atuação em Processos Administrativos Disciplinares (PAD), mandados de segurança para concursos, promoções e incorporações.",
    iconName: "Building2",
    badge: "Destaque Institucional",
    commonCases: [
      "Defesa técnica em Processo Administrativo Disciplinar (PAD)",
      "Mandados de segurança para nomeação em concurso público",
      "Cobrança de diferenças salariais, gratificações e adicionais",
      "Aposentadoria de servidor público e contagem de tempo"
    ]
  },
  {
    id: "familias",
    title: "Direito de Família e Sucessões",
    shortDesc: "Inventários, partilha de bens, planejamento sucessório, divórcios e pensão alimentícia com sensibilidade e ética.",
    fullDesc: "Acompanhamento humanizado em decisões familiares delicadas, priorizando soluções consensuais célere ou defesa firme no contencioso judiciário em divórcios litigiosos e partilhas de bens.",
    iconName: "HeartHandshake",
    commonCases: [
      "Inventários judiciais e extrajudiciais célere em cartório",
      "Divórcio consensual, litigioso e dissolução de união estável",
      "Planejamento sucessório familiar e testamentos",
      "Ações de alimentos, guarda e regulamentação de visitas"
    ]
  },
  {
    id: "etica-oab",
    title: "Ética Profissional & Prerrogativas",
    shortDesc: "Assessoria especializada em direito de prerrogativas da advocacia e processos ético-disciplinares junto aos órgãos de classe.",
    fullDesc: "Com o respaldo de décadas no ecossistema da OAB Goiás, prestamos consultoria técnica e defesa em processos perante o Tribunal de Ética e Disciplina (TED) e defesa de prerrogativas profissionais.",
    iconName: "ShieldCheck",
    badge: "Liderança OAB",
    commonCases: [
      "Defesa técnica em Representação Ético-Disciplinar na OAB",
      "Pareceres técnicos sobre conduta e publicidade na advocacia",
      "Garantia de Prerrogativas Constitucionais do Advogado",
      "Consultoria de enquadramento estatutário da OAB"
    ]
  }
];

export const INSTITUTIONAL_ROLES: InstitutionalRole[] = [
  {
    id: "ouvidoria",
    title: "Ouvidora-Geral da OAB Goiás",
    organization: "Ordem dos Advogados do Brasil – Seccional Goiás",
    period: "Gestão Atual",
    description: "Liderança do canal direto de escuta, transparência e acolhimento dos advogados e da sociedade goiana, promovendo aperfeiçoamento contínuo dos serviços institucionais.",
    impactHighlight: "+10.000 atendimentos e manifestações processadas com índice superior a 95% de resolutividade.",
    icon: "Megaphone"
  },
  {
    id: "conselho",
    title: "Conselheira Seccional da OAB/GO",
    organization: "Conselho Pleno da OAB/GO",
    period: "Múltiplos Mandatos",
    description: "Participação nas decisões normativas e políticas de classe, defendendo o fortalecimento da advocacia no interior e na capital, com foco na dignidade e valorização dos honorários.",
    impactHighlight: "Relatoria de importantes processos regulatórios e de defesa de direitos constitucionais.",
    icon: "Award"
  },
  {
    id: "sociedade",
    title: "Fundadora e Titular",
    organization: "Iraci Teófilo – Sociedade Individual de Advocacia",
    period: "Há mais de 30 Anos",
    description: "Sociedade inscrita regularmente na OAB/GO, pautada na personalização absoluta do atendimento, sob liderança direta da Dra. Iraci Teófilo Rosa em cada causa.",
    impactHighlight: "Sólida reputação construída com ética incondicional, mantendo taxas históricas de satisfação dos clientes.",
    icon: "Building"
  }
];

export const CLIENT_JOURNEY_STEPS: ClientJourneyStep[] = [
  {
    stepNumber: 1,
    title: "Escuta Ativa & Diagnóstico Inicial",
    subtitle: "Atendimento Humanizado",
    description: "Compreensão aprofundada dos detalhes do seu caso em reunião presencial ou online segura. Analisamos os fatos sem pressa, estabelecendo relação de confiança mútua.",
    iconName: "Comments",
    deliverable: "Relatório inicial de viabilidade técnica da demanda"
  },
  {
    stepNumber: 2,
    title: "Análise Documental & Tese Jurídica",
    subtitle: "Rigor Técnico Excepcional",
    description: "Exame detalhado da jurisprudência do TJGO, STJ e STF aplicável ao caso, com estruturação da tese e estratégias contenciosas ou de conciliação.",
    iconName: "FileSearch",
    deliverable: "Parecer de riscos, oportunidades e probabilidade de êxito"
  },
  {
    stepNumber: 3,
    title: "Proposta Transparente & Alinhamento",
    subtitle: "Honorários Claros e Éticos",
    description: "Apresentação de contrato de honorários advocatícios transparente, em estrito cumprimento à tabela da OAB/GO, sem custos ocultos ou surpresas futuras.",
    iconName: "Handshake",
    deliverable: "Contrato formalizado e plano de ação assinado"
  },
  {
    stepNumber: 4,
    title: "Atuação Ágil e Combativa",
    subtitle: "Acompanhamento Prioritário",
    description: "Ajuizamento do processo ou mediação extrajudicial imediata. Sustentação oral, despacho pessoal com magistrados e acompanhamento diário de andamentos.",
    iconName: "ShieldAlert",
    deliverable: "Protocolo imediato e relatórios periódicos de andamento"
  },
  {
    stepNumber: 5,
    title: "Comunicação & Retorno Contínuo",
    subtitle: "Acompanhamento até a Solução",
    description: "Informa-se o cliente a cada movimentação relevante no processo, garantindo acessibilidade e tranquilidade durante toda a jornada judicial.",
    iconName: "CheckCircle2",
    deliverable: "Atendimento pós-causa e prestação de contas transparente"
  }
];

export const TRAJECTORY_MILESTONES: TrajectoryMilestone[] = [
  {
    year: "1994",
    title: "Início da Trajetória na Advocacia Goiana",
    description: "Inscrição nos quadros da OAB/GO e fundação da atuação focada em Direito Civil e Trabalhista em Goiânia.",
    roleType: "advocacy"
  },
  {
    year: "2005",
    title: "Consolidação e Expansão para Servidores Públicos",
    description: "Ampliação da atuação para defesas administrativas de servidores municipais e estaduais e causas de grande vulto imobiliário.",
    roleType: "advocacy"
  },
  {
    year: "2016",
    title: "Atuação no Conselho Pleno da OAB/GO",
    description: "Eleição para integrar o Conselho Seccional da OAB/GO, atuando em comissões de julgamento de ética e prerrogativas.",
    roleType: "institutional"
  },
  {
    year: "2021",
    title: "Fundação da Sociedade Individual de Advocacia",
    description: "Formalização do escritório no formato de Sociedade Individual de Advocacia sob o registro formal na OAB/GO.",
    roleType: "advocacy"
  },
  {
    year: "Atualidade",
    title: "Ouvidoria-Geral da OAB/GO e Conselheira Seccional",
    description: "Posição de liderança na Ouvidoria-Geral da Seccional da OAB/GO, sendo referência de ética, altivez e compromisso institucional.",
    roleType: "institutional"
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Como funciona a primeira consulta com a Dra. Iraci Teófilo?",
    answer: "A consulta pode ser realizada presencialmente no nosso escritório no Edifício Orion Business em Goiânia ou por videoconferência segura (Google Meet/WhatsApp Video). Durante o atendimento, que dura em média 1 hora, a Dra. Iraci analisa pessoalmente os seus documentos, tira todas as suas dúvidas e apresenta um parecer inicial de viabilidade jurídica.",
    category: "atendimento"
  },
  {
    id: "faq-2",
    question: "Como são definidos os honorários advocatícios do escritório?",
    answer: "Nossos honorários pautam-se pela transparência incondicional e observam rigorosamente a Tabela de Honorários da OAB/GO e o Código de Ética e Disciplina. Dependendo do tipo de causa (trabalhista, civil, administrativa ou contratual), a cobrança pode ocorrer por valor fixo, mensalidade contratual ou percentual sobre o êxito obtido.",
    category: "honorarios"
  },
  {
    id: "faq-3",
    question: "O escritório atende clientes de outras cidades do interior de Goiás ou outros Estados?",
    answer: "Sim. Com a digitalização dos tribunais (PJe, Projudi e e-SAJ), atuamos em todo o Estado de Goiás (Anápolis, Rio Verde, Itumbiara, Luziânia, Jataí, etc.) e perante os Tribunais Superiores em Brasília (STJ e STF). O atendimento a distância ocorre com a mesma proximidade e segurança do atendimento presencial.",
    category: "atendimento"
  },
  {
    id: "faq-4",
    question: "Qual o diferencial de contar com a experiência institucional da Dra. Iraci Teófilo?",
    answer: "A Dra. Iraci possui mais de 30 anos de prática ininterrupta e ocupa posições de relevância na OAB Goiás como Ouvidora-Geral e Conselheira Seccional. Isso reflete o mais elevado padrão ético, profundo respeito do Judiciário e domínio completo do trâmite legal e das prerrogativas institucionais.",
    category: "oab"
  },
  {
    id: "faq-5",
    question: "Qual a documentação necessária para iniciar um processo?",
    answer: "Geralmente é necessário apresentar documento de identidade (RG/CPF ou CNH), comprovante de endereço atualizado e documentos específicos do caso (como contratos, holerites, notificações, trocas de e-mails ou mensagens). Disponibilizamos nossa ferramenta de Documentos e Checklist neste site para ajudá-lo a organizar sua documentação antes da consulta.",
    category: "prazos"
  }
];
