import Link from "next/link";
import Reveal from "@/components/Reveal";
import TreadDivider from "@/components/TreadDivider";
import { site, waLink } from "@/data/site";
import { WhatsIcon } from "@/components/Header";

/* ---------------------------------------------------------- */
/* Sobre a loja                                                */
/* ---------------------------------------------------------- */

export function Sobre() {
  return (
    <section className="bg-bone py-20 md:py-28" id="sobre">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow text-ink/60">Sobre a Pisada de Ouro</p>
            <h2 className="mt-4 font-display text-3xl leading-[1.12] text-ink sm:text-4xl lg:text-5xl">
              Mais do que vestir. É sobre <span className="italic">como você chega.</span>
            </h2>
            <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-ink/65">
              A Pisada de Ouro nasceu para ajudar homens e mulheres a encontrarem produtos que representem o seu
              estilo. Trabalhamos com tênis, roupas e acessórios selecionados, unindo tendências, conforto e
              atendimento próximo. Você pode comprar em nossa loja física em Maringá ou receber em qualquer lugar do
              Brasil.
            </p>

            <ul className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
              {[
                ["Atendimento personalizado", "no balcão ou pelo WhatsApp"],
                ["Produtos selecionados", "curadoria de marcas e tendências"],
                ["Novidades frequentes", "reposições e lançamentos toda semana"],
                ["Envio nacional", "para todo o Brasil"],
              ].map(([t, d]) => (
                <li key={t} className="flex flex-wrap items-baseline justify-between gap-2 py-4">
                  <span className="text-sm font-bold uppercase tracking-wider text-ink">{t}</span>
                  <span className="text-sm text-ink/50">{d}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="relative">
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="img-zoom relative aspect-[3/4]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/loja-interior.jpg"
                  alt="Interior da loja Pisada de Ouro"
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <div className="img-zoom relative mt-10 aspect-[3/4]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/loja-equipe-pb.jpg"
                  alt="Equipe da Pisada de Ouro na loja"
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap border border-gold/40 bg-ink px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.22em] text-gold-light">
              Loja física em Maringá
            </span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- */
/* Como comprar — sequência real 1 → 2 → 3                     */
/* ---------------------------------------------------------- */

const passos = [
  {
    titulo: "Encontre seu produto",
    texto: "Navegue pelas categorias e escolha o modelo desejado.",
  },
  {
    titulo: "Chame no WhatsApp",
    texto: "Envie o produto diretamente para nossa equipe.",
  },
  {
    titulo: "Finalize seu pedido",
    texto: "Confirme tamanho, pagamento e entrega.",
  },
];

export function ComoComprar() {
  return (
    <section className="bg-ink py-20 md:py-28" id="como-comprar">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow text-gold">Como comprar</p>
            <h2 className="mt-4 font-display text-3xl leading-[1.12] text-white sm:text-4xl">
              Escolheu? A gente cuida <span className="italic text-gold-light">do restante.</span>
            </h2>
            <a
              href={waLink(site.mensagens.geral)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 bg-gold px-7 py-3.5 text-[13px] font-bold uppercase tracking-wider text-ink transition-colors hover:bg-gold-light"
            >
              <WhatsIcon className="h-4 w-4" />
              Começar agora
            </a>
          </Reveal>

          <Reveal>
            <ol className="divide-y hairline-soft divide-white/10 border-y border-white/10">
              {passos.map((p, i) => (
                <li key={p.titulo} className="flex items-center gap-6 py-7 md:gap-10">
                  <span className="font-display text-6xl leading-none text-gold/35 md:text-7xl">{i + 1}</span>
                  <div>
                    <h3 className="text-lg font-bold text-white">{p.titulo}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-mist/55">{p.texto}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- */
/* Loja física                                                 */
/* ---------------------------------------------------------- */

export function LojaFisica() {
  return (
    <section className="bg-bone py-20 md:py-28" id="loja">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <div className="grid grid-cols-1 overflow-hidden lg:grid-cols-[1.1fr_1fr]">
            <div className="relative min-h-[320px] lg:min-h-[520px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/loja-fachada.jpg"
                alt="Fachada da loja Pisada de Ouro na Avenida Mandacaru"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center bg-ink p-8 sm:p-12 lg:p-14">
              <p className="eyebrow text-gold">Loja física</p>
              <h2 className="mt-4 font-display text-3xl leading-[1.12] text-white sm:text-4xl">
                Venha conhecer a <span className="italic text-gold-light">Pisada de Ouro</span>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-mist/60">
                Experimente os modelos, conheça as novidades e receba um atendimento personalizado.
              </p>

              <address className="mt-8 border-l-2 border-gold pl-4 text-sm not-italic leading-relaxed text-mist/80">
                {site.endereco}
              </address>

              <ul className="mt-6 space-y-1.5 text-sm text-mist/60">
                {site.horarios.map((h) => (
                  <li key={h.dias} className="flex justify-between gap-6 border-b border-white/5 pb-1.5">
                    <span>{h.dias}</span>
                    <span className="text-mist/80">{h.horas}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gold px-6 py-3 text-[12px] font-bold uppercase tracking-wider text-ink transition-colors hover:bg-gold-light"
                >
                  Como chegar
                </a>
                <a
                  href={waLink(site.mensagens.geral)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-white/25 px-6 py-3 text-[12px] font-bold uppercase tracking-wider text-mist transition-colors hover:border-gold hover:text-gold-light"
                >
                  <WhatsIcon className="h-3.5 w-3.5" />
                  Falar com a loja
                </a>
              </div>
            </div>
          </div>

          <div className="mt-4 overflow-hidden border border-ink/10">
            <iframe
              src={site.mapsEmbed}
              title="Mapa — Pisada de Ouro, Avenida Mandacaru 3049, Maringá"
              className="h-[280px] w-full grayscale"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- */
/* Instagram                                                   */
/* ---------------------------------------------------------- */

const igPosts = [
  { img: "/images/tenis-nb9060-pares.jpg", alt: "Tênis New Balance 9060" },
  { img: "/images/fem-look-loja.jpg", alt: "Look feminino na loja" },
  { img: "/images/tenis-adidas-campus-preto.jpg", alt: "Adidas Campus preto" },
  { img: "/images/masc-camisa-brasil.jpg", alt: "Camisa do Brasil" },
  { img: "/images/loja-parede-tenis.jpg", alt: "Parede de tênis da loja" },
  { img: "/images/chinelo-corrente-cores.jpg", alt: "Chinelos com corrente" },
];

export function InstagramGrid() {
  return (
    <section className="bg-ink py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow text-gold">{site.instagramUser}</p>
              <h2 className="mt-3 font-display text-3xl leading-[1.1] text-white sm:text-4xl">
                Siga a nossa <span className="italic text-gold-light">pisada</span>
              </h2>
              <p className="mt-3 max-w-md text-sm text-mist/60">
                Acompanhe novidades, reposições e lançamentos pelo Instagram.
              </p>
            </div>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 border border-gold px-6 py-3 text-[12px] font-bold uppercase tracking-wider text-gold-light transition-colors hover:bg-gold hover:text-ink"
            >
              Seguir no Instagram
            </a>
          </div>
        </Reveal>
        <Reveal>
          <div className="grid grid-cols-3 gap-2 md:grid-cols-6 md:gap-3">
            {igPosts.map((p) => (
              <a
                key={p.img}
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="img-zoom group relative block aspect-square"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.img} alt={p.alt} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
                <span className="absolute inset-0 flex items-center justify-center bg-ink/0 text-gold-light opacity-0 transition-all group-hover:bg-ink/50 group-hover:opacity-100">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6" aria-hidden>
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- */
/* Depoimentos — conteúdo de exemplo                           */
/* ---------------------------------------------------------- */

const depoimentos = [
  {
    texto: "O atendimento foi rápido e o tênis chegou perfeito.",
    nome: "Cliente de Maringá/PR",
    produto: "New Balance 9060",
  },
  {
    texto: "Encontrei um modelo que não achava em outras lojas.",
    nome: "Cliente de Sarandi/PR",
    produto: "Adidas Campus",
  },
  {
    texto: "Comprei pelo WhatsApp e recebi tudo certinho.",
    nome: "Cliente de Curitiba/PR",
    produto: "Conjunto feminino",
  },
];

export function Depoimentos() {
  return (
    <section className="bg-bone py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <div className="mb-4 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow text-ink/60">Quem compra, recomenda</p>
              <h2 className="mt-3 font-display text-3xl leading-[1.1] text-ink sm:text-4xl">
                A palavra de quem já <span className="italic">pisou aqui</span>
              </h2>
            </div>
            <span className="border border-ink/20 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-ink/45">
              Conteúdo de exemplo — substitua por avaliações reais
            </span>
          </div>
        </Reveal>
        <div className="divide-y divide-ink/10 border-y border-ink/10">
          {depoimentos.map((d, i) => (
            <Reveal key={i} delay={i * 80}>
              <figure className="grid grid-cols-1 gap-3 py-8 md:grid-cols-[80px_1fr_auto] md:items-baseline md:gap-8">
                <span className="font-display text-5xl leading-none text-gold" aria-hidden>
                  “
                </span>
                <blockquote className="font-display text-xl leading-snug text-ink sm:text-2xl">{d.texto}</blockquote>
                <figcaption className="text-right text-xs text-ink/50">
                  <span className="block font-bold uppercase tracking-wider text-ink/70">{d.nome}</span>
                  <span className="mt-0.5 block">{d.produto} · ★★★★★</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- */
/* CTA final                                                   */
/* ---------------------------------------------------------- */

export function CTAFinal() {
  return (
    <section className="relative bg-ink">
      <TreadDivider className="opacity-70" />
      <div className="mx-auto max-w-[1400px] px-5 py-24 text-center md:px-10 md:py-32">
        <Reveal>
          <p className="eyebrow justify-center text-gold">Pisada de Ouro</p>
          <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl leading-[1.08] text-white sm:text-5xl lg:text-6xl">
            Qual será a sua <span className="italic text-gold-light">próxima pisada?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-mist/60">
            Escolha seu produto e fale agora com a equipe da Pisada de Ouro.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href={waLink(site.mensagens.geral)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold px-8 py-4 text-[13px] font-bold uppercase tracking-wider text-ink transition-colors hover:bg-gold-light"
            >
              <WhatsIcon className="h-4 w-4" />
              Comprar pelo WhatsApp
            </a>
            <Link
              href="/catalogo"
              className="inline-flex items-center gap-2 border border-white/25 px-8 py-4 text-[13px] font-bold uppercase tracking-wider text-mist transition-colors hover:border-gold hover:text-gold-light"
            >
              Ver catálogo
            </Link>
          </div>
          <p className="mt-6 text-xs text-mist/40">Atendimento rápido e personalizado.</p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- */
/* FAQ                                                         */
/* ---------------------------------------------------------- */

// Respostas editáveis — ajuste com as políticas reais da loja.
const faq = [
  ["Vocês enviam para todo o Brasil?", "Sim! Enviamos para todo o Brasil. O valor e o prazo do frete são calculados no atendimento pelo WhatsApp."],
  ["Como consultar os tamanhos disponíveis?", "Cada produto mostra a numeração de referência. Toque em “Comprar pelo WhatsApp” e nossa equipe confirma o estoque do seu tamanho na hora."],
  ["Posso comprar diretamente pelo site?", "A vitrine é para você escolher com calma. A compra é finalizada com a nossa equipe pelo WhatsApp — rápido, seguro e com atendimento de gente de verdade."],
  ["Como funciona o pagamento?", "As formas de pagamento (Pix, cartão e parcelamento) são combinadas no WhatsApp. [Edite aqui com as condições oficiais da loja.]"],
  ["A loja possui endereço físico?", "Sim — Avenida Mandacaru, 3049, Maringá/PR. Venha experimentar os modelos pessoalmente."],
  ["Como consultar o valor do frete?", "Envie seu CEP no WhatsApp junto com o produto escolhido e calculamos na hora."],
  ["Posso trocar se o tamanho não servir?", "Temos política de troca. [Edite aqui com o prazo e as condições reais de troca da loja.]"],
  ["Os produtos têm garantia?", "[Edite aqui com a política de garantia da loja — prazo e condições.]"],
  ["Os produtos do Instagram também aparecem na vitrine?", "A vitrine reúne os destaques do momento. Se você viu algo no Instagram que não está aqui, chame no WhatsApp — provavelmente temos."],
  ["Como saber quando chegam novos modelos?", "Siga @pisadadeouroo no Instagram e acompanhe a seção Novidades: reposições e lançamentos entram toda semana."],
];

export function FAQ() {
  return (
    <section className="border-t hairline-soft bg-ink pb-24 pt-20 md:pb-28" id="faq">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow text-gold">Perguntas frequentes</p>
            <h2 className="mt-4 font-display text-3xl leading-[1.12] text-white sm:text-4xl">
              Ficou com alguma <span className="italic text-gold-light">dúvida?</span>
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-mist/55">
              Se a resposta não estiver aqui, é só chamar no WhatsApp — a equipe responde rapidinho.
            </p>
          </Reveal>
          <Reveal>
            <div className="divide-y divide-white/10 border-y border-white/10">
              {faq.map(([q, a]) => (
                <details key={q} className="faq group py-5">
                  <summary className="flex items-center justify-between gap-6 text-[15px] font-semibold text-mist transition-colors hover:text-gold-light">
                    {q}
                    <span className="faq-icon flex h-7 w-7 flex-none items-center justify-center rounded-full border border-white/15 text-gold">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5" aria-hidden>
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-3 max-w-2xl pr-10 text-sm leading-relaxed text-mist/55">{a}</p>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
