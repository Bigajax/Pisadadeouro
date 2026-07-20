// ============================================================
// DADOS EDITÁVEIS DA LOJA
// Altere aqui: WhatsApp, endereço, horários, redes e textos.
// ============================================================

export const site = {
  nome: "Pisada de Ouro",
  slogan: "Calçados, roupas e acessórios",

  // Número do WhatsApp (formato internacional, só dígitos) — extraído do link da bio do Instagram
  whatsapp: "5544997389995",
  whatsappBonito: "(44) 99738-9995",

  instagram: "https://www.instagram.com/pisadadeouroo/",
  instagramUser: "@pisadadeouroo",

  endereco: "Avenida Mandacaru, 3049 — Maringá, Paraná",
  enderecoCurto: "Av. Mandacaru, 3049 · Maringá/PR",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Avenida+Mandacaru+3049+Maringa+PR",
  mapsEmbed:
    "https://www.google.com/maps?q=Avenida+Mandacaru,+3049,+Maring%C3%A1+-+PR&output=embed",

  // Horários de atendimento — edite conforme o funcionamento real da loja
  horarios: [
    { dias: "Segunda a sexta", horas: "9h às 18h30" },
    { dias: "Sábado", horas: "9h às 13h" },
    { dias: "Domingo", horas: "Fechado" },
  ],

  // Mensagens automáticas do WhatsApp
  mensagens: {
    geral:
      "Olá! Conheci a Pisada de Ouro pela vitrine digital e gostaria de receber ajuda para escolher um produto.",
    produto: (nome: string) =>
      `Olá! Vi o produto ${nome} na vitrine da Pisada de Ouro. Gostaria de saber se está disponível.`,
    produtoTamanho: (nome: string, tamanho?: string, cor?: string) =>
      `Olá! Tenho interesse no produto ${nome}.` +
      (tamanho ? ` Gostaria de consultar disponibilidade no tamanho ${tamanho}` : " Gostaria de consultar disponibilidade") +
      (cor ? ` e na cor ${cor}.` : "."),
  },
};

export function waLink(mensagem: string): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}
