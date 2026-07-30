import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Video, CheckCircle2, AlertCircle, MessageCircle, X, ShieldCheck } from 'lucide-react';
import { PRACTICE_AREAS, FIRM_INFO } from '../data/firmData';
import { AppointmentFormData } from '../types';

interface ScheduleModalProps {
  isOpen: boolean;
  prefilledArea?: string;
  prefilledNotes?: string;
  onClose: () => void;
  onSuccess?: (protocol: string, clientName: string) => void;
}

export const ScheduleModal: React.FC<ScheduleModalProps> = ({
  isOpen,
  prefilledArea,
  prefilledNotes,
  onClose,
  onSuccess,
}) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    name: '',
    email: '',
    phone: '',
    area: prefilledArea || PRACTICE_AREAS[0].title,
    preferredDate: '',
    preferredTime: 'Manhã (09h às 12h)',
    notes: prefilledNotes || '',
    modality: 'presencial',
  });

  const [submittedProtocol, setSubmittedProtocol] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone) {
      setErrorMessage('Por favor, preencha Nome e Telefone/WhatsApp.');
      return;
    }

    setErrorMessage('');
    setSubmitting(true);

    try {
      const response = await fetch('/api/schedule-appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Não foi possível concluir o agendamento.');
      }

      setSubmittedProtocol(data.protocol);
      if (onSuccess) {
        onSuccess(data.protocol, formData.name);
      }
    } catch (err: any) {
      console.error(err);
      setErrorMessage(err.message || 'Falha ao conectar com o servidor.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleOpenWhatsAppConfirmation = () => {
    const text = encodeURIComponent(
      `Olá, Dra. Iraci Teófilo!\n\nSolicitei agendamento no site:\n*Protocolo:* ${submittedProtocol}\n*Nome:* ${formData.name}\n*Telefone:* ${formData.phone}\n*Modalidade:* ${formData.modality === 'presencial' ? 'Presencial (Goiânia)' : 'Online (Videoconferência)'}\n*Área:* ${formData.area}\n*Data Preferencial:* ${formData.preferredDate || 'A combinar'}\n*Horário:* ${formData.preferredTime}\n\nAguardo confirmação!`
    );
    window.open(`https://wa.me/5562999887766?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-[#C89A3B]/40 relative text-left max-h-[92vh] overflow-y-auto">
        
            {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Fechar formulário de agendamento"
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-[#6C2418] rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-1.5 pr-8 border-b border-gray-100 pb-4">
          <div className="flex items-center space-x-2">
            <span className="p-1 rounded bg-[#6C2418] text-[#E5C158] inline-flex">
              <Calendar className="w-4 h-4" />
            </span>
            <span className="text-xs font-bold text-[#C89A3B] uppercase tracking-wider">
              Atendimento Personalizado
            </span>
          </div>
          <h3 className="text-2xl font-serif-display font-bold text-[#32100A]">
            Agendar Atendimento Jurídico
          </h3>
          <p className="text-xs text-gray-600">
            Dra. Iraci Teófilo Rosa – Sociedade Individual de Advocacia
          </p>
        </div>

        {!submittedProtocol ? (
          /* Booking Form */
          <form onSubmit={handleSubmit} className="space-y-4 pt-4">
            {errorMessage && (
              <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center space-x-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Modality Selector */}
            <div>
              <label className="block text-xs font-bold text-[#32100A] uppercase tracking-wider mb-1.5">
                Modalidade de Atendimento *
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, modality: 'presencial' })}
                  className={`p-3 rounded-xl border text-left flex items-center space-x-2.5 transition-all ${
                    formData.modality === 'presencial'
                      ? 'border-[#6C2418] bg-[#F5F0E8] text-[#6C2418] font-bold shadow-sm'
                      : 'border-gray-200 text-gray-600 hover:border-gray-300'
                  }`}
                >
                  <MapPin className="w-4 h-4 text-[#C89A3B] shrink-0" />
                  <div>
                    <span className="block text-xs">Presencial em Goiânia</span>
                    <span className="block text-[10px] text-gray-500 font-normal">Edifício Orion - Setor Marista</span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, modality: 'online' })}
                  className={`p-3 rounded-xl border text-left flex items-center space-x-2.5 transition-all ${
                    formData.modality === 'online'
                      ? 'border-[#6C2418] bg-[#F5F0E8] text-[#6C2418] font-bold shadow-sm'
                      : 'border-gray-200 text-gray-600 hover:border-gray-300'
                  }`}
                >
                  <Video className="w-4 h-4 text-[#C89A3B] shrink-0" />
                  <div>
                    <span className="block text-xs">Online / Videoconferência</span>
                    <span className="block text-[10px] text-gray-500 font-normal">Google Meet / WhatsApp Seguro</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Personal Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="input-name" className="block text-xs font-bold text-[#32100A] uppercase tracking-wider mb-1">
                  Nome Completo *
                </label>
                <input
                  id="input-name"
                  type="text"
                  required
                  aria-required="true"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ex: Carlos Eduardo"
                  className="w-full px-3.5 py-2 rounded-xl border border-gray-300 text-sm focus:border-[#6C2418] focus:ring-1 focus:ring-[#6C2418]"
                />
              </div>

              <div>
                <label htmlFor="input-phone" className="block text-xs font-bold text-[#32100A] uppercase tracking-wider mb-1">
                  WhatsApp / Telefone *
                </label>
                <input
                  id="input-phone"
                  type="tel"
                  required
                  aria-required="true"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="(62) 99999-8888"
                  className="w-full px-3.5 py-2 rounded-xl border border-gray-300 text-sm focus:border-[#6C2418] focus:ring-1 focus:ring-[#6C2418]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="input-email" className="block text-xs font-bold text-[#32100A] uppercase tracking-wider mb-1">
                  E-mail (Opcional)
                </label>
                <input
                  id="input-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="seu.email@exemplo.com"
                  className="w-full px-3.5 py-2 rounded-xl border border-gray-300 text-sm focus:border-[#6C2418] focus:ring-1 focus:ring-[#6C2418]"
                />
              </div>

              <div>
                <label htmlFor="select-area" className="block text-xs font-bold text-[#32100A] uppercase tracking-wider mb-1">
                  Área do Atendimento
                </label>
                <select
                  id="select-area"
                  value={formData.area}
                  onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-gray-300 text-sm bg-white focus:border-[#6C2418] focus:ring-1 focus:ring-[#6C2418]"
                >
                  {PRACTICE_AREAS.map((pa) => (
                    <option key={pa.id} value={pa.title}>
                      {pa.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Date & Time Preferences */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="input-date" className="block text-xs font-bold text-[#32100A] uppercase tracking-wider mb-1">
                  Data Preferencial
                </label>
                <input
                  id="input-date"
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-gray-300 text-sm focus:border-[#6C2418] focus:ring-1 focus:ring-[#6C2418]"
                />
              </div>

              <div>
                <label htmlFor="select-time" className="block text-xs font-bold text-[#32100A] uppercase tracking-wider mb-1">
                  Turno Preferencial
                </label>
                <select
                  id="select-time"
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-gray-300 text-sm bg-white focus:border-[#6C2418] focus:ring-1 focus:ring-[#6C2418]"
                >
                  <option value="Manhã (08h às 12h)">Manhã (08h às 12h)</option>
                  <option value="Tarde (14h às 18h)">Tarde (14h às 18h)</option>
                  <option value="Urgente / Primeiro Horário">Urgente / Primeiro Horário Disponível</option>
                </select>
              </div>
            </div>

            {/* Additional Notes */}
            <div>
              <label htmlFor="input-notes" className="block text-xs font-bold text-[#32100A] uppercase tracking-wider mb-1">
                Observações do Caso (Opcional)
              </label>
              <textarea
                id="input-notes"
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                rows={2}
                placeholder="Breve comentário ou número de processo se houver..."
                className="w-full px-3.5 py-2 rounded-xl border border-gray-300 text-sm focus:border-[#6C2418] focus:ring-1 focus:ring-[#6C2418]"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={submitting}
                className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl text-sm font-bold text-[#32100A] gold-gradient-bg hover:brightness-110 shadow-md cursor-pointer transition-all disabled:opacity-50"
              >
                <span>Confirmar Agendamento</span>
              </button>
            </div>
          </form>
        ) : (
          /* Confirmation Display */
          <div className="space-y-6 pt-4 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto border-2 border-emerald-300 shadow-lg">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold text-[#C89A3B] uppercase tracking-wider block">
                Pré-Reserva Efetuada com Sucesso
              </span>
              <h4 className="text-2xl font-serif-display font-bold text-[#32100A]">
                Protocolo: {submittedProtocol}
              </h4>
              <p className="text-xs text-gray-600 max-w-md mx-auto">
                Recebemos sua solicitação de atendimento para <strong>{formData.name}</strong> na área de <strong>{formData.area}</strong>.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#6C2418]/15 text-left text-xs space-y-1.5 max-w-md mx-auto">
              <p className="font-bold text-[#6C2418]">Detalhes da Reserva:</p>
              <p>• <strong>Modalidade:</strong> {formData.modality === 'presencial' ? 'Presencial no Ed. Orion (Goiânia)' : 'Online por Videoconferência'}</p>
              <p>• <strong>WhatsApp:</strong> {formData.phone}</p>
              <p>• <strong>Previsão:</strong> {formData.preferredDate || 'A combinar'} ({formData.preferredTime})</p>
            </div>

            <div className="pt-2 space-y-3">
              <button
                onClick={handleOpenWhatsAppConfirmation}
                className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-emerald-700 hover:bg-emerald-800 shadow-md cursor-pointer transition-all"
              >
                <MessageCircle className="w-5 h-5 text-emerald-200" />
                <span>Confirmar e Enviar via WhatsApp</span>
              </button>

              <button
                onClick={onClose}
                className="text-xs text-gray-500 hover:text-gray-700 underline block mx-auto"
              >
                Fechar janela
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
