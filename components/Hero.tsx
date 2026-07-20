import Link from "next/link";
import { site, waLink } from "@/data/site";
import { WhatsIcon } from "@/components/Header";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink" aria-label="Destaque">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-stretch px-5 pt-16 md:px-10 md:pt-[72px] lg:min-h-[88vh] lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:pt-20">
        {/* painel de foto — full-bleed no mobile */}
        <div className="relative -mx-5 h-[48svh] min-h-[300px] md:-mx-10 lg:order-2 lg:mx-0 lg:h-auto lg:min-h-0 lg:py-14">
          <div className="relative h-full w-full overflow-hidden lg:absolute lg:inset-x-0 lg:inset-y-14">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/tenis-nb9060-pares.jpg"
              alt="Pares de New Balance 9060 na loja Pisada de Ouro"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/25 lg:from-ink/30 lg:to-ink/10" />

            {/* etiqueta flutuante */}
            <div className="absolute right-5 top-4 border border-gold/25 bg-ink/85 px-3.5 py-2.5 backdrop-blur-sm md:right-10 lg:left-4 lg:right-auto lg:top-auto lg:bottom-4 lg:px-4 lg:py-3">
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-gold-light lg:text-[10px]">
                New Balance 9060
              </p>
              <p className="mt-0.5 text-[11px] text-mist/75 lg:text-xs">38–43 · R$ 279,99</p>
            </div>

          </div>
        </div>

        {/* texto */}
        <div className="relative z-10 -mt-10 flex flex-col items-start justify-center pb-12 lg:order-1 lg:mt-0 lg:py-24">
          <span className="mb-5 inline-flex w-fit items-center gap-2 border border-gold/30 bg-ink/70 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.24em] text-gold-light backdrop-blur-sm lg:mb-6">
            <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden>
              <path d="M5 0l1.2 3.8H10L6.9 6.1 8.1 10 5 7.6 1.9 10l1.2-3.9L0 3.8h3.8Z" fill="currentColor" />
            </svg>
            Novidades toda semana
          </span>

          <p className="eyebrow text-gold">Tênis premium</p>
          <h1 className="mt-3 font-display text-[38px] leading-[1.06] text-white sm:text-6xl lg:mt-4 lg:text-[72px] lg:leading-[1.04]">
            Seu estilo começa <span className="font-display italic text-gold-light">pela pisada.</span>
          </h1>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-mist/70 sm:text-base lg:mt-5">
            Tênis premium, moda feminina e masculina para quem gosta de se destacar.
          </p>

          <div className="mt-7 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center lg:mt-8">
            <Link
              href="/catalogo?ordem=lancamento"
              className="inline-flex items-center justify-center gap-2 bg-gold px-7 py-4 text-[13px] font-bold uppercase tracking-wider text-ink transition-colors hover:bg-gold-light sm:py-3.5"
            >
              Ver novidades
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="h-3.5 w-3.5" aria-hidden>
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </Link>
            <a
              href={waLink(site.mensagens.geral)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-white/25 px-7 py-4 text-[13px] font-bold uppercase tracking-wider text-mist transition-colors hover:border-gold hover:text-gold-light sm:py-3.5"
            >
              <WhatsIcon className="h-4 w-4" />
              Comprar pelo WhatsApp
            </a>
          </div>

          <p className="mt-7 text-xs tracking-wide text-mist/45 lg:mt-10">
            Loja física em Maringá · Enviamos para todo o Brasil
          </p>
        </div>
      </div>
    </section>
  );
}
