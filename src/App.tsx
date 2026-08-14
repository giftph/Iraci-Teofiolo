import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CredibilityBar } from './components/CredibilityBar';
import { FounderProfile } from './components/FounderProfile';
import { InstitutionalBento } from './components/InstitutionalBento';
import { PracticeAreas } from './components/PracticeAreas';
import { ProblemAgitation } from './components/ProblemAgitation';
import { TestimonialsSection } from './components/TestimonialsSection';
import { OfferUrgencyCTA } from './components/OfferUrgencyCTA';
import { MobileStickyBar } from './components/MobileStickyBar';
import { LegalDocumentsSection } from './components/LegalDocumentsSection';
import { ClientJourney } from './components/ClientJourney';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { ScheduleModal } from './components/ScheduleModal';
import { LoadingOverlay } from './components/LoadingOverlay';
import { ToastContainer, ToastMessage } from './components/Toast';
import { MessageCircle, ArrowUp } from 'lucide-react';
import { FIRM_INFO } from './data/firmData';

const sectionAnimation = {
  initial: { opacity: 0, y: 35 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] }
};

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
const [scheduleModalOpen, setScheduleModalOpen] = useState(false);
const [prefilledArea, setPrefilledArea] = useState<string | undefined>(undefined);
const [prefilledNotes, setPrefilledNotes] = useState<string | undefined>(undefined);
const [showBackToTop, setShowBackToTop] = useState(false);
const [toasts, setToasts] = useState<ToastMessage[]>([]);

useEffect(() => {
  // Dark mode is permanent — no light theme option
  document.documentElement.classList.add('dark');
}, []);

useEffect(() => {
    // Initial mount splash overlay timer
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 750);
    return () => clearTimeout(timer);
  }, []);

  const addToast = (toast: Omit<ToastMessage, 'id'>) => {
    const id = Math.random().toString(36).substring(2, 9);
    const newToast = { ...toast, id };
    setToasts((prev) => [...prev, newToast]);

    // Auto dismiss after 6 seconds
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 6000);
  };

  const handleDismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const handleAppointmentSuccess = (protocol: string, clientName: string) => {
    addToast({
      title: 'Agendamento Registrado!',
      description: `Obrigado, ${clientName}. Recebemos sua solicitação e nossa equipe entrará em contato em breve para confirmar seu horário.`,
      protocol: protocol,
      type: 'success',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleOpenSchedule = (areaTitle?: string) => {
    setPrefilledArea(areaTitle);
    setPrefilledNotes(undefined);
    setScheduleModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#240C08] text-white font-sans antialiased selection:bg-[#C89A3B] selection:text-[#32100A] relative">
      
      {/* Helmet SEO Meta Tags */}
      <Helmet>
        <html lang="pt-BR" />
        <title>Iraci Teófilo Advocacia | Advogada em Goiânia - GO</title>
        <meta name="description" content="Iraci Teófilo Advocacia. Atendimento jurídico em Goiânia - GO. Agende sua consulta pelo WhatsApp." />
        <meta name="keywords" content="Iraci Teófilo Advocacia, Advogada Goiânia, OAB GO 12216, Palácio do Comércio, Direito Cível Goiânia, Advogado Centro Goiânia, Inventário e Sucessões" />
        <meta name="author" content="Iraci Teófilo Advocacia" />
        <meta name="theme-color" content="#6C2418" />
        <link rel="canonical" href="https://iraciteofilo.adv.br" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content="Iraci Teófilo Advocacia" />
        <meta property="og:title" content="Iraci Teófilo Advocacia | Advogada em Goiânia - GO" />
        <meta property="og:description" content="Iraci Teófilo Advocacia. Atendimento jurídico em Goiânia - GO. Agende sua consulta pelo WhatsApp." />
        <meta property="og:url" content="https://iraciteofilo.adv.br" />
        <meta property="og:image" content="/assets/images/official_logo_seal_1785381560321.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Iraci Teófilo Advocacia | Advogada em Goiânia - GO" />
        <meta name="twitter:description" content="Iraci Teófilo Advocacia. Atendimento jurídico em Goiânia - GO. Agende sua consulta pelo WhatsApp." />
        <meta name="twitter:image" content="/assets/images/official_logo_seal_1785381560321.jpg" />

        {/* Schema.org Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            "name": "Iraci Teófilo Advocacia",
            "image": "https://iraciteofilo.adv.br/assets/images/official_logo_seal_1785381560321.jpg",
            "description": "Iraci Teófilo Advocacia. Atendimento jurídico em Goiânia - GO. Agende sua consulta pelo WhatsApp.",
            "url": "https://iraciteofilo.adv.br",
            "telephone": "+5562992456161",
            "email": "iraciteofiloadv@gmail.com",
            "taxID": "26.484.267/0001-95",
            "identifier": "OAB/GO 12.216",
            "priceRange": "$$",
            "areaServed": [
              {
                "@type": "State",
                "name": "Goiás"
              },
              {
                "@type": "City",
                "name": "Goiânia"
              }
            ],
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Av. Anhanguera, nº 5674, Sala 1102, Condomínio Palácio do Comércio",
              "addressLocality": "Goiânia",
              "addressRegion": "GO",
              "postalCode": "74043-010",
              "addressCountry": "BR"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": -16.6789,
              "longitude": -49.2612
            },
            "openingHours": "Mo-Fr 08:00-18:00",
            "sameAs": [
              "https://instagram.com/iraciteofiloadvocacia",
              "https://linkedin.com/in/iraciteofilo"
            ]
          })}
        </script>
      </Helmet>

      {/* Branded Loading Overlay */}
      <AnimatePresence mode="wait">
        {isLoading && <LoadingOverlay key="loading-overlay" isLoading={isLoading} />}
      </AnimatePresence>

      {/* Fixed Glass Navbar */}
      <Navbar
  onOpenSchedule={() => handleOpenSchedule()}
/>

      {/* Main Content Sections with Entrance Animations */}
      <main>
        {/* 1. CRO SECTION: Hero Section with Primary Above-the-fold CTA */}
        <Hero
          onOpenSchedule={() => handleOpenSchedule()}
        />

        {/* 2. CRO SECTION: Rapid-fire Credibility Bar */}
        <motion.div {...sectionAnimation}>
          <CredibilityBar />
        </motion.div>

        {/* 3. CRO SECTION: Problem Agitation Block (Agitação da dor antes da solução) */}
        <motion.div {...sectionAnimation}>
          <ProblemAgitation onOpenSchedule={() => handleOpenSchedule()} />
        </motion.div>

        {/* 4. CRO SECTION: Founder Profile & Authority */}
        <motion.div {...sectionAnimation}>
          <FounderProfile />
        </motion.div>

        {/* 5. CRO SECTION: Institutional Bento Grid */}
        <motion.div {...sectionAnimation}>
          <InstitutionalBento />
        </motion.div>

        {/* 6. CRO SECTION: Practice Areas (Solution with benefit bullets) */}
        <motion.div {...sectionAnimation}>
          <PracticeAreas
            onScheduleArea={(area) => handleOpenSchedule(area)}
          />
        </motion.div>

        {/* 7. CRO SECTION: Deep Social Proof (Testimonials with verified outcomes) */}
        <motion.div {...sectionAnimation}>
          <TestimonialsSection onOpenSchedule={() => handleOpenSchedule()} />
        </motion.div>

        {/* 8. CRO SECTION: Client Journey (Transparent 5-step method) */}
        <motion.div {...sectionAnimation}>
          <ClientJourney />
        </motion.div>

        {/* 9. CRO SECTION: Legal Documents & Preparation Checklist Section */}
        <motion.div {...sectionAnimation}>
          <LegalDocumentsSection
            onOpenSchedule={() => handleOpenSchedule()}
          />
        </motion.div>

        {/* 10. CRO SECTION: Frequently Asked Questions (Objection Busting) */}
        <motion.div {...sectionAnimation}>
          <FAQ onOpenSchedule={() => handleOpenSchedule()} />
        </motion.div>

        {/* 11. CRO SECTION: Value Anchoring, Genuine Scarcity & High-Converting CTA */}
        <motion.div {...sectionAnimation}>
          <OfferUrgencyCTA onOpenSchedule={() => handleOpenSchedule()} />
        </motion.div>
      </main>

      {/* Footer */}
      <Footer />

      {/* CRO SECTION: Mobile Sticky Conversion Control */}
      <MobileStickyBar onOpenSchedule={() => handleOpenSchedule()} />

      {/* Floating Action Bar: Back to Top & WhatsApp Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center space-x-3">
        {/* Smooth Voltar ao Topo (Back To Top) Button */}
        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              transition={{ duration: 0.25 }}
              onClick={scrollToTop}
              className="p-3.5 rounded-full bg-[#4A1810] text-[#E5C158] border-2 border-[#C89A3B] shadow-2xl hover:bg-[#591D13] hover:text-white active:scale-95 transition-all duration-200 flex items-center space-x-2 group cursor-pointer"
              aria-label="Voltar ao Topo"
              title="Voltar ao Topo da Página"
            >
              <ArrowUp className="w-5 h-5 text-[#E5C158] group-hover:-translate-y-0.5 transition-transform" />
              <span className="hidden sm:inline text-xs font-bold text-amber-100 pr-1">
                Topo
              </span>
            </motion.button>
          )}
        </AnimatePresence>

        {/* Floating Sticky WhatsApp Button */}
        <a
          href={FIRM_INFO.socialLinks.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3.5 rounded-full bg-emerald-600 text-white shadow-2xl hover:bg-emerald-500 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center space-x-2 border-2 border-emerald-300 group cursor-pointer"
          aria-label="Atendimento no WhatsApp"
          title="Falar com o escritório via WhatsApp"
        >
          <MessageCircle className="w-6 h-6 text-white" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap text-xs font-bold pr-1">
            WhatsApp Direto
          </span>
        </a>
      </div>

      {/* Toast Notification Overlay */}
      <ToastContainer toasts={toasts} onDismiss={handleDismissToast} />

      {/* Interactive Schedule Appointment Modal */}
      <ScheduleModal
        isOpen={scheduleModalOpen}
        prefilledArea={prefilledArea}
        prefilledNotes={prefilledNotes}
        onClose={() => setScheduleModalOpen(false)}
        onSuccess={handleAppointmentSuccess}
      />

    </div>
  );
}
