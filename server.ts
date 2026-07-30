import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Health check endpoint
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", service: "Iraci Teófilo Advocacia API", timestamp: new Date().toISOString() });
  });

  // AI Intake & Pre-Consultation guidance endpoint
  app.post("/api/consultation-prep", async (req, res) => {
    try {
      const { area, description, name } = req.body;

      if (!description || description.trim().length === 0) {
        return res.status(400).json({ error: "Descrição da situação jurídica é obrigatória." });
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        // Fallback gracefully if key is not configured yet
        return res.json({
          analysis: `Olá ${name || 'cliente'}, com base na sua descrição na área de **${area || 'Direito Geral'}**, orientamos que reúna os documentos pessoais (RG/CPF ou CNPJ), comprovantes de residência e todos os contratos/notificações correlatos. Agende seu atendimento diretamente para atendimento personalizado com a Dra. Iraci Teófilo.`,
          recommendedDocs: [
            "Documento de Identificação Oficial (RG / CNH)",
            "Comprovante de Endereço atualizado (últimos 90 dias)",
            "Contratos, correspondências ou notificações jurídicas relevantes",
            "Relato cronológico resumido dos fatos"
          ],
          urgencyAssessment: "Recomendado agendamento regular nos próximos dias úteis.",
          disclaimer: "Atendimento prévio orientativo. Análise jurídica conclusiva realizada exclusivamente em consulta pela Dra. Iraci Teófilo Rosa (OAB/GO)."
        });
      }

      const ai = new GoogleGenAI({ apiKey });
      const prompt = `Você é o assistente virtual institucional do escritório **Iraci Teófilo – Sociedade Individual de Advocacia** em Goiás (Advogada Dra. Iraci Teófilo Rosa, 30+ anos de experiência, Ouvidora-Geral e Conselheira Seccional da OAB/GO).

O cliente solicitou uma orientação preparatória antes do agendamento presencial/online.

Dados do Cliente:
- Nome: ${name || "Não informado"}
- Área Jurídica de Interesse: ${area || "Direito Geral"}
- Descrição da Situação: "${description}"

Elabore uma resposta extremamente respeitosa, sóbria, elegante e profissional no idioma Português (Brasil).
Forneça um formato JSON rigoroso com a seguinte estrutura:
{
  "summary": "Resumo acolhedor e técnico de 2-3 frases sobre o cenário apresentado",
  "keyLegalAspects": ["Ponto jurídico 1", "Ponto jurídico 2", "Ponto jurídico 3"],
  "recommendedDocs": ["Documento 1", "Documento 2", "Documento 3", "Documento 4"],
  "urgencyAssessment": "Avaliação de urgência (Ex: Baixa, Média, Alta prescritiva/processual)",
  "nextStepGuidance": "Orientação sobre como Dra. Iraci Teófilo poderá atuar estrategicamente neste caso."
}
Responda APENAS em JSON válido.`;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json"
        }
      });

      const responseText = response.text || "{}";
      const parsedData = JSON.parse(responseText);

      return res.json({
        ...parsedData,
        disclaimer: "Esta pré-análise é exclusivamente orientativa para preparação do atendimento e não substitui a consulta jurídica formal conduzida presencialmente ou por videoconferência pela Dra. Iraci Teófilo Rosa."
      });

    } catch (error: any) {
      console.error("Erro na API de pré-consulta:", error);
      return res.status(500).json({
        error: "Não foi possível gerar a orientação automática no momento.",
        details: error.message
      });
    }
  });

  // Schedule Appointment endpoint
  app.post("/api/schedule-appointment", (req, res) => {
    const { name, email, phone, area, preferredDate, preferredTime, notes } = req.body;

    if (!name || !phone) {
      return res.status(400).json({ error: "Nome e WhatsApp/Telefone são campos obrigatórios." });
    }

    const protocolNumber = `IT-${Math.floor(100000 + Math.random() * 900000)}`;

    return res.json({
      success: true,
      protocol: protocolNumber,
      message: `Agendamento pré-reservado com sucesso para ${name}.`,
      details: {
        name,
        email: email || "Não informado",
        phone,
        area: area || "Geral",
        preferredDate: preferredDate || "A combinar",
        preferredTime: preferredTime || "A combinar",
        notes: notes || "Sem observações adicionais"
      }
    });
  });

  // Vite development middleware vs Static Production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Iraci Teófilo Server] Servidor rodando na porta ${PORT}`);
  });
}

startServer();
