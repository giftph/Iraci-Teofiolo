export interface PracticeArea {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  badge?: string;
  commonCases: string[];
}

export interface TrajectoryMilestone {
  year: string;
  title: string;
  description: string;
  roleType: 'academic' | 'institutional' | 'advocacy';
}

export interface InstitutionalRole {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
  impactHighlight: string;
  icon: string;
}

export interface ClientJourneyStep {
  stepNumber: number;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  deliverable: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'atendimento' | 'honorarios' | 'oab' | 'prazos';
}

export interface AppointmentFormData {
  name: string;
  email: string;
  phone: string;
  area: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
  modality: 'presencial' | 'online';
}

export interface AiConsultationResult {
  summary?: string;
  keyLegalAspects?: string[];
  recommendedDocs?: string[];
  urgencyAssessment?: string;
  nextStepGuidance?: string;
  disclaimer: string;
}
